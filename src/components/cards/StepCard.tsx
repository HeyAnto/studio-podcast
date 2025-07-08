export default function StepCard({
  step = "1",
  title = "Titre de l'étape",
  description = "Description de l'étape.",
}) {
  return (
    <div className="stepCard flex items-center gap-100 rounded-6">
      <h4 className="font-heading text-7xl leading-none text-center text-green-3">
        {step}
      </h4>
      <div className="flex flex-column gap-16">
        <h5 className="text-2xl font-normal text-green-3">{title}</h5>
        <p className="text-lg font-light text-green-2">{description}</p>
      </div>
    </div>
  );
}
