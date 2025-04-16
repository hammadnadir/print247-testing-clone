import requestIp from 'request-ip';

export default async function handler(req, res) {
  const ip = requestIp.getClientIp(req); // Correct usage of the library

  res.status(200).json({ ip });
}
