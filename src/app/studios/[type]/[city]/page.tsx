"use client";

import StudiosList from "@/components/cards/StudiosList";
import StudiosSearch from "@/components/search/StudiosSearch";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const DynamicStudiosPage = () => {
  const params = useParams();
  const router = useRouter();

  const urlType = params.type as string;
  const urlCity = params.city as string;

  const isValidType = (type: string) => {
    const validTypes = ["podcast", "photo", "video", "all"];
    return validTypes.includes(type.toLowerCase());
  };

  const isValidCity = (city: string) => {
    const validCities = [
      "paris",
      "lyon",
      "marseille",
      "nantes",
      "clermont-fd",
      "all",
    ];
    return validCities.includes(city.toLowerCase());
  };

  useEffect(() => {
    if (
      !urlType ||
      !urlCity ||
      !isValidType(urlType) ||
      !isValidCity(urlCity)
    ) {
      router.replace("/studios/podcast/all");
      return;
    }
  }, [urlType, urlCity, router]);

  if (!urlType || !urlCity || !isValidType(urlType) || !isValidCity(urlCity)) {
    return null;
  }

  const getDisplayType = (type: string) => {
    switch (type.toLowerCase()) {
      case "podcast":
        return "Podcast";
      case "photo":
        return "Photo";
      case "video":
        return "Vidéo";
      case "all":
        return "Tout";
      default:
        return "Podcast";
    }
  };

  const getDisplayCity = (city: string) => {
    switch (city.toLowerCase()) {
      case "paris":
        return "Paris";
      case "lyon":
        return "Lyon";
      case "marseille":
        return "Marseille";
      case "nantes":
        return "Nantes";
      case "clermont-ferrand":
      case "clermont-fd":
        return "Clermont-Ferrand";
      case "all":
        return "Tout";
      default:
        return "Paris";
    }
  };

  const selectedStudioType = getDisplayType(urlType);
  const selectedCity = getDisplayCity(urlCity);

  const handleSearch = (studioType: string, city: string) => {
    let urlType = studioType === "Tout" ? "all" : studioType.toLowerCase();
    let urlCity = city === "Tout" ? "all" : city.toLowerCase();

    if (urlType === "vidéo") {
      urlType = "video";
    }

    if (urlCity === "clermont-ferrand") {
      urlCity = "clermont-fd";
    }

    router.push(`/studios/${urlType}/${urlCity}`);
  };

  return (
    <main className="gap-50">
      <section className="gap-50">
        <StudiosSearch
          onSearch={handleSearch}
          initialType={selectedStudioType}
          initialCity={selectedCity}
        />
        <StudiosList
          studioType={selectedStudioType}
          city={selectedCity}
          isVisible={true}
        />
      </section>
    </main>
  );
};

export default DynamicStudiosPage;
