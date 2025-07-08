import { Icon } from "@iconify/react";

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
          <Icon icon="pixelarticons:external-link" className="linkIcon" />
        </div>
        <p className="text-sm text-grey">{description}</p>
      </div>
    </a>
  );
}
