import { SVGProps } from "react";

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Pixelarticons by Gerrit Halfmann - https://github.com/halfmage/pixelarticons/blob/master/LICENSE */}
      <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm16 5H4v2h16z" />
    </svg>
  );
}
export default IconMenu;
