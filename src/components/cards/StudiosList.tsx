import studiosData from "@/data/studios.json";
import StudioCard from "./StudioCard";

interface Studio {
  id: string;
  title: string;
  description: string;
  rating: number;
  size: number;
  capacity: number;
  tag: string;
  city: string;
  image: string;
}

interface StudiosListProps {
  studioType: string;
  city: string;
  isVisible: boolean;
}

export default function StudiosList({
  studioType,
  city,
  isVisible,
}: StudiosListProps) {
  if (!isVisible) {
    return null;
  }

  const filteredStudios = studiosData.filter((studio: Studio) => {
    const typeMatch = studioType === "Tout" || studio.tag === studioType;
    const cityMatch = city === "Tout" || studio.city === city;
    return typeMatch && cityMatch;
  });

  const getResultsText = () => {
    const count = filteredStudios.length;
    if (count === 0) return "Aucun studio trouvé";
    if (count === 1) return "1 studio trouvé";
    return `${count} studios trouvés`;
  };

  const getFilterText = () => {
    if (studioType === "Tout" && city === "Tout") {
      return "dans toutes les catégories et toutes les villes";
    } else if (studioType === "Tout") {
      return `dans toutes les catégories à ${city}`;
    } else if (city === "Tout") {
      return `en ${studioType} dans toutes les villes`;
    } else {
      return `en ${studioType} à ${city}`;
    }
  };

  return (
    <div className="gap-50">
      {filteredStudios.length === 0 ? (
        <>
          <div className="text-center">
            <h2 className="text-3xl font-medium">{getResultsText()}</h2>
            <p className="text-base text-grey mt-8">{getFilterText()}</p>
          </div>
          <div className="text-center p-50">
            <p className="text-base text-grey mt-16">
              Essayez de modifier vos filtres pour voir plus de résultats.
            </p>
          </div>
        </>
      ) : (
        <div className="studios-grid max-w-md">
          {filteredStudios.map((studio: Studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      )}
    </div>
  );
}
