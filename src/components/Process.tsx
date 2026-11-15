import steps from "../data/process.json";
export default function Process() {
  return (
    <section className="wrap process pb-[70px]">
      <div className="eyebrow font-semibold">
        <i></i> My process
      </div>
      <h2>
        From brief <em>to delivery.</em>
      </h2>
      <ol>
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
