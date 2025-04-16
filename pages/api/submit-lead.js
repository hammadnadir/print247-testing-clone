import axios from 'axios';
import cookie from 'cookie';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         try {
//             if (!req.body) {
//                 return res.status(400).json({ error: 'Missing lead data' });
//             }

//             const leadData = req.body;
          
//             let accessToken = await fetchNewAccessToken();
//             // Perform the request to Zoho API
//             const tags = ['Contact Form'];
//             const response = await axios.post('https://www.zohoapis.com/crm/v6/Leads', { data: [{...leadData,tags: tags ,Owner: {id: "6374650000000787001"}}] }, {
//                 headers: {
//                     'Authorization': `Zoho-oauthtoken ${accessToken}`,  // Use the token from the cookie
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Print out the Zoho response for debugging
//             res.status(200).json(response.data);
//         } catch (error) {
//             // Log the full error for debugging
//             console.error('Error sending lead to Zoho:', error.response ? error.response.data : error.message);
//             res.status(500).json({ error: error.message });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         try {
//             if (!req.body) {
//                 return res.status(400).json({ error: 'Missing lead data' });
//             }

//             const leadData = req.body;
//             const tags = {
//                 "tags": [
//                    {
//                         "name": "Contact Form"
//                     }
//                 ]
//             };

//             let accessToken = await fetchNewAccessToken();
//             // Perform the request to Zoho API to create the lead
//             const response = await axios.post('https://www.zohoapis.com/crm/v6/Leads', { 
//                 data: [{ 
//                     ...leadData, 
//                     Owner: { id: "6374650000000787001" } 
//                 }] 
//             }, {
//                 headers: {
//                     'Authorization': `Zoho-oauthtoken ${accessToken}`,  // Use the token from the cookie
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Get the lead ID from the response
//             const leadId = response?.data?.data?.[0]?.details?.id;

//             await axios.post(
//                 `https://zohoapis.com/crm/v2/Leads/actions/add_tags`,
//                 { 
//                     params: {
//                         ids: leadId,
//                         tag_names: 'Contact'
//                     }
//                 },
//                 {
//                   headers: {
//                     'Authorization': `Zoho-oauthtoken ${accessToken}`,
//                     'Content-Type': 'application/json',
//                   },
//                 }
//               );
              

//             // Print out the Zoho response for debugging
//             res.status(200).json(response.data);
//         } catch (error) {
//             // Log the full error for debugging
//             console.error('Error sending lead to Zoho:', error.response ? error.response.data : error.message);
//             res.status(500).json({ error: error.message });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

let cachedAccessToken = null; 
let tokenExpirationTime = null; 

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            if (!req.body) {
                return res.status(400).json({ error: 'Missing lead data' });
            }

            const leadData = req.body;
            const tags = req.body.tags

            // Check if the cached token is still valid
            const currentTime = Date.now();
            if (!cachedAccessToken || currentTime >= tokenExpirationTime) {
                cachedAccessToken = await fetchNewAccessToken();
                // Set the expiration time (e.g., 1 hour from now)
                tokenExpirationTime = currentTime + 3600 * 1000; // 1 hour in milliseconds
            }

            // Perform the request to Zoho API to create the lead
            const response = await axios.post('https://www.zohoapis.com/crm/v6/Leads', { 
                data: [{ 
                    ...leadData, 
                    Owner: { id: "6374650000014872019" } // Frank Castle 
                }] 
            }, {
                headers: {
                    'Authorization': `Zoho-oauthtoken ${cachedAccessToken}`,  // Use the cached token
                    'Content-Type': 'application/json',
                },
            });

            // Get the lead ID from the response
            const leadId = response?.data?.data?.[0]?.details?.id;

            await axios.post(
                `https://zohoapis.com/crm/v2/Leads/actions/add_tags?ids=${leadId}&tag_names=${encodeURIComponent(tags)}`,{},
                {
                  headers: {
                    'Authorization': `Zoho-oauthtoken ${cachedAccessToken}`,
                    'Content-Type': 'application/json',
                  },
                }
            );

            // Print out the Zoho response for debugging
            res.status(200).json(response.data);
        } catch (error) {
            // Log the full error for debugging
            console.error('Error sending lead to Zoho:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Function to fetch a new access token from Zoho API
async function fetchNewAccessToken() {
    try {
        const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
            params: {
                refresh_token: process.env.ZOHO_REFRESH_TOKEN,
                client_id: process.env.ZOHO_CLIENT_ID,
                client_secret: process.env.ZOHO_CLIENT_SECRET,
                grant_type: 'refresh_token',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // Extract the access token from the response
        const { access_token } = response.data;
        return access_token;
    } catch (error) {
        console.error('Error fetching new access token:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch new access token');
    }
}
