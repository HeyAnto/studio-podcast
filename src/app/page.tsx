import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Podcast",
  description:
    "This is an example page showcasing placeholder content and demonstrating the app structure.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
};

const HomePage = () => {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple content area for the home page.</p>
    </main>
  );
};

export default HomePage;
