import studiosData from "@/data/studios.json";
import { useEffect, useState } from "react";
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
  studiosPerPage?: number;
}

export default function StudiosList({
  studioType,
  city,
  isVisible,
  studiosPerPage = 6,
}: StudiosListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!isVisible) {
    return null;
  }

  const filteredStudios = studiosData.filter((studio: Studio) => {
    const typeMatch = studioType === "Tout" || studio.tag === studioType;
    const cityMatch = city === "Tout" || studio.city === city;
    return typeMatch && cityMatch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [studioType, city]);

  const totalPages = Math.ceil(filteredStudios.length / studiosPerPage);
  const startIndex = (currentPage - 1) * studiosPerPage;
  const endIndex = startIndex + studiosPerPage;
  const currentStudios = filteredStudios.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const studiosSection = document.querySelector(".studios-grid");
    if (studiosSection) {
      studiosSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderPaginationButtons = () => {
    if (totalPages <= 1) return null;

    const buttons = [];

    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="paginationButton"
          aria-label="Page précédente"
        >
          ←
        </button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`paginationButton ${i === currentPage ? "active" : ""}`}
            aria-label={`Page ${i}`}
            aria-current={i === currentPage ? "page" : undefined}
          >
            {i}
          </button>
        );
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        buttons.push(
          <span
            key={`ellipsis-${i}`}
            className="paginationEllipsis"
            aria-hidden="true"
          >
            ...
          </span>
        );
      }
    }

    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="paginationButton"
          aria-label="Page suivante"
        >
          →
        </button>
      );
    }

    return buttons;
  };

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
        <>
          {/* Studios grid */}
          <div className="studios-grid max-w-md">
            {currentStudios.map((studio: Studio) => (
              <StudioCard key={studio.id} studio={studio} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="pagination"
              aria-label="Navigation des pages"
              role="navigation"
            >
              {renderPaginationButtons()}
            </nav>
          )}
        </>
      )}
    </div>
  );
}
