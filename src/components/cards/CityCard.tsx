export default function CityCard({
  href = "/",
  imageSrc = "/images/city/img-city-paris.png",
  imageAlt = "Paris",
  title = "Paris",
}) {
  return (
    <a className="cardCity flex items-center gap-16 p-16 rounded-6" href={href}>
      <img className="rounded-8" src={imageSrc} alt={imageAlt} />
      <h3 className="text-2xl">{title}</h3>
    </a>
  );
}
