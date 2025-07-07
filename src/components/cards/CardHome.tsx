import { Icon } from "@iconify/react";

export default function CardHome({
  href = "/",
  imageSrc = "/images/type-studio/img-home-podcast.png",
  imageAlt = "Studio Podcast",
  title = "Louer un Studio Podcast Professionnel",
  description = "Donnez une voix professionnelle à vos idées. Nos studios podcast sont insonorisés et équipés de microphones broadcast, tables de mixage et interfaces audio de pointe pour un son cristallin. Parfait pour interviews, monologues ou tables rondes.",
}) {
  return (
    <a className="cardHome flex flex-column gap-16 p-16 rounded-6" href={href}>
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
