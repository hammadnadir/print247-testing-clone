import React from 'react'

function LiveChat() {

    const liveChatData = [
        {
            id: 1,
            imgSrc: "/foldingCarton/liveChat/livechat.webp",
            title: "Live Chat Support",
            description: "We provide you with the most skillful customer support in the USA.",
            bgColor: "#F4D9E2",
        },
        {
            id: 2,
            imgSrc: "/foldingCarton/liveChat/eco.webp",
            title: "Eco-Friendly Packaging",
            description: "We endorse the use of recyclable and sustainable materials for a greener planet.",
            bgColor: "#F1D9CD",
        },
        {
            id: 3,
            imgSrc: "/foldingCarton/liveChat/design.webp",
            title: "Free Design Support",
            description: "We provide you with all-in packaging designs’ assistance.",
            bgColor: "#A9CED7",
        },
        {
            id: 4,
            imgSrc: "/foldingCarton/liveChat/pricing.webp",
            title: "Competitive Pricing",
            description: "We provide you with the most skillful customer support in the USA.",
            bgColor: "#FFD539",
        },
    ];

    return (
        <div className="main_liveChat">
            {liveChatData.map((item) => (
                <div key={item.id} className="bg_liveChat" style={{ backgroundColor: item.bgColor }}>
                    <img src={item.imgSrc} alt={item.title} />
                    <div className="data_liveChat">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LiveChat