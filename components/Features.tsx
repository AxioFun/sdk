const features = [
  {
    title: "Agent Discovery",
    description: "Find and connect with autonomous agents."
  },
  {
    title: "Communication Layer",
    description: "Standardized messaging between agents."
  },
  {
    title: "Cross-Chain",
    description: "Interoperability across blockchain networks."
  },
  {
    title: "Tool Integration",
    description: "Connect APIs and external services."
  }
];

export default function Features() {
  return (
    <section className="features">
      <h2>Core Components</h2>

      <div className="grid">
        {features.map((item) => (
          <div key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
