import IconLink from "../icons/IconLink";

export default function HomeCard({
  href = "/",
  imageSrc = "Image",
  imageAlt = "Image Alt",
  title = "Titre de la carte",
  description = "Description de la carte.",
}) {
  return (
    <a className="homeCard flex flex-column gap-16 p-16 rounded-6" href={href}>
      <img className="rounded-8" src={imageSrc} alt={imageAlt} />
      <div className="flex flex-column gap-16">
        <div className="flex justify-between gap-16">
          <h3 className="text-2xl">{title}</h3>
          <div className="linkIcon">
            <IconLink />
          </div>
        </div>
        <p className="text-sm text-grey">{description}</p>
      </div>
    </a>
  );
}
