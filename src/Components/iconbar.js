import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

export default function Iconbar() {
  return (
    <div className="iconSection">
      <div className="row container mx-auto">
        <div className="flex items-center justify-between bg-gray-700 -mt-10 py-4 rounded-lg px-4 lg:px-5 mx-auto gap-2 shadow-lg ">
          <FontAwesomeIcon className="w-6 h-6 lg:w-10 lg:h-10" icon={faHtml5} />
          <FontAwesomeIcon
            className="w-6 h-6 lg:w-10 lg:h-10"
            icon={faCss3Alt}
          />
          <FontAwesomeIcon className="w-6 h-6 lg:w-10 lg:h-10" icon={faJs} />
          <img
            src="/nextlogo.png"
            alt="Next.js"
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
          <img
            src="/reactlogo.png"
            alt="React"
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
          <img
            src="/vercellogo.png"
            alt="Vercel"
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
          <img
            src="/shadcn.png"
            alt="ShadcnUI"
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
          <img
            src="/tailwindlogo.png"
            alt="Tailwind"
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
          <img
            src="/supabase-logo-icon.png"
            alt="Supabase"
            className="w-6 h-6 lg:w-10 lg:h-10"
          />
        </div>
      </div>
    </div>
  );
}
