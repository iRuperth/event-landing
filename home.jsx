const agent = [
    { time: "9:00", topic: "Knowing the basic about IA" },
    { time: "10:00", topic: "Knowing the basic about IA" },
    { time: "11:00", topic: "Knowing the basic about IA" },
    { time: "12:00", topic: "Knowing the basic about IA" },
    { time: "13:00", topic: "Knowing the basic about IA" },
    { time: "14:00", topic: "Knowing the basic about IA" },
    { time: "15:00", topic: "Knowing the basic about IA" },
    { time: "16:00", topic: "Knowing the basic about IA" },
    { time: "17:00", topic: "Knowing the basic about IA" },
    { time: "18:00", topic: "Knowing the basic about IA" },
    { time: "19:00", topic: "Knowing the basic about IA" },
    { time: "20:00", topic: "Knowing the basic about IA" },
    { time: "21:00", topic: "Knowing the basic about IA" },
    { time: "22:00", topic: "Knowing the basic about IA" },
    { time: "23:00", topic: "Knowing the basic about IA" }
]

export default function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>WoohAI Event - Full Day Workshop</h1>
                <p>Learn the fundamentals of Artificial Intelligence with industry experts</p>
            </section>

            <section className="about">
                <h2>About This Event</h2>
                <p>Join us for an intensive full-day workshop covering AI basics and practical applications.</p>
            </section>

            <section className="event-schedule">
                <h2>Event Schedule</h2>
                <div className="schedule">
                    {agent.map((item, index) => (
                        <div key={index} className="schedule-item">
                            <span className="time">{item.time}</span>
                            <span className="topic">{item.topic}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2>Ready to Join?</h2>
                <button>Register Now</button>
            </section>
        </div>
    )
}