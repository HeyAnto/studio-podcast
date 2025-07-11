import { SVGProps } from "react";

export function IconVideo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Pixelarticons by Gerrit Halfmann - https://github.com/halfmage/pixelarticons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"
      />
    </svg>
  );
}
export default IconVideo;
