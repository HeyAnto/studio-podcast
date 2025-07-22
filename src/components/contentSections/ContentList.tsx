import IconArrowRight from "../icons/IconArrowRight";
export default function ContentList({
  fontSizes = "",
  title = "Titre",
  description = "Description",
}) {
  return (
    <div className="min-w-screen flex gap-16">
      <div className="iconList">
        <IconArrowRight />
      </div>
      <p
        className={`leading-normal text-grey-2 ${fontSizes}`}
        style={{ whiteSpace: "pre-line" }}
      >
        <span className="text-dark">{title}</span> {description}
      </p>
    </div>
  );
}
