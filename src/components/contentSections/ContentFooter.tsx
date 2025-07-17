export default function ContentFooter({
  title = "Titre",
  description = "Description",
  button = "Button",
  buttonLink = "/",
  footerImg = "/",
}) {
  return (
    <section className="max-w-md justify-center gap-50">
      <div className="contentFooter flex gap-16 rounded-6">
        <div className="flex flex-column items-start gap-28">
          <h3 className="text-2xl leading-none text-green-3">{title}</h3>
          <p className="text-lg leading-normal text-green-2">{description}</p>
          <a className="tertiaryButton" href={buttonLink}>
            <p className="text-base">{button}</p>
          </a>
        </div>
        <img className="footerImg" src={footerImg} alt={title} />
      </div>
    </section>
  );
}
