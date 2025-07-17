export default function ContentHero({
  title = "Titre",
  description = "Description",
  coverImg = "/images/og-cover.webp",
}) {
  return (
    <section className="max-w-md justify-center gap-50">
      <div className="text-container gap-16">
        <h1 className="font-heading text-5xl leading-none text-center">
          {title}
        </h1>
      </div>
      <img className="contentCover rounded-6" src={coverImg} alt={title} />
      <div className="text-container gap-16">
        <p
          className="text-lg leading-normal text-grey-2"
          style={{ whiteSpace: "pre-line" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
