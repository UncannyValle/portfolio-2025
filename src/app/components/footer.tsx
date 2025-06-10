import { SOCIAL_LINKS } from "@/app/lib/constants/links";
import { FaGithub } from "react-icons/fa6";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Footer = async () => {
  return (
    <footer className="flex flex-wrap items-center justify-center p-8 text-slate-500">
      <div className="inline-block">
        Designed and coded by me &quot;Julian Valle&quot;. Built with Next.js,
        Sanity, and Tailwind and deployed in Vercel.
      </div>

      <div className="inline-block">
        <a
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-3 inline-block"
        >
          <FaGithub className="text-xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-3 inline-block"
        >
          <FaLinkedin className="text-xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={`mailto: ${SOCIAL_LINKS.EMAIL}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-3 inline-block"
        >
          <FaEnvelope className="text-xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
      </div>
    </footer>
  );
};
