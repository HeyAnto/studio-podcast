export default function CityCard({
  href = "/",
  imageSrc = "Image",
  imageAlt = "Image Alt",
  title = "Ville",
}) {
  return (
    <a className="cityCard flex items-center gap-16 p-16 rounded-6" href={href}>
      <img className="rounded-8" src={imageSrc} alt={imageAlt} />
      <h3 className="text-2xl">{title}</h3>
    </a>
  );
}
