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

  return (
    <div>
      {filteredStudios.length === 0 ? (
        <>
          <h2 className="text-xl text-center">Aucun studio trouvé</h2>
          <p className="text-sm text-grey text-center">
            Essayez de modifier vos filtres pour voir plus de résultats.
          </p>
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
