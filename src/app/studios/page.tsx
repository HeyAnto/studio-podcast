"use client";

import StudiosList from "@/components/cards/StudiosList";
import StudiosSearch from "@/components/search/StudiosSearch";
import { useState } from "react";

const StudiosPage = () => {
  const [selectedStudioType, setSelectedStudioType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (studioType: string, city: string) => {
    setSelectedStudioType(studioType);
    setSelectedCity(city);
    setShowResults(true);
  };

  return (
    <main className="gap-50">
      <section className="gap-50">
        <StudiosSearch onSearch={handleSearch} />
        <StudiosList
          studioType={selectedStudioType}
          city={selectedCity}
          isVisible={showResults}
        />
      </section>
    </main>
  );
};

export default StudiosPage;
