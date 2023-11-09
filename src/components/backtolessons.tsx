import Link from "next/link";

export default function Backtolessons() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/lessons">
        <button
          className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 flex items-center justify-center" // Added flex, items-center and justify-center to center the SVG and text
        >
          <svg
            className="svg-snoweb svg-theme-light mr-2"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="32"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <clipPath id="clip-path-202310-1316-3932-2fc5104a-fa3e-40d8-9b72-45ae15b5111b">
              <circle cx="50" cy="50" r="50"></circle>
            </clipPath>
            <g transform="translate(20.00, 20.00) scale(0.60, 0.60)">
              <path
                className="svg-stroke-primary"
                d="M43.3,73.5,19.8,50m0,0L43.3,26.5M19.8,50H80.2"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              ></path>
            </g>
          </svg>
          Back to lessons
        </button>
      </Link>
    </div>
  );
}
