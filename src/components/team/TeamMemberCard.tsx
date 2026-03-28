// components/TeamMemberCard.tsx

import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

type TeamMemberProps = {
  name: string;
  imageURL: string;
  url?: string;
  role?: string;
  description?: string;
  linkedinURL?: string;
  githubURL?: string;
  youtubeURL?: string;
  twitterURL?: string;
  instagramURL?: string;
};

export default function TeamMemberCard({
  name,
  imageURL,
  url,
  role,
  description,
  linkedinURL,
  githubURL,
  youtubeURL,
  twitterURL,
  instagramURL,
}: TeamMemberProps) {
  const socialLinks = [
    { href: linkedinURL, icon: <FaLinkedin size={22} /> },
    { href: githubURL, icon: <FaGithub size={22} /> },
    { href: youtubeURL, icon: <FaYoutube size={22} /> },
    { href: twitterURL, icon: <FaTwitter size={22} /> },
    { href: instagramURL, icon: <FaInstagram size={22} /> },
  ].filter((s) => !!s.href);

  const avatarContent = (
    <Image
      src={imageURL}
      alt={`${name} profile photo`}
      fill
      className="object-cover"
      sizes="144px"
    />
  );

  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-64 flex-shrink-0 border-t-4 border-stone-700 hover:shadow-xl transition-shadow duration-200">
      {/* Full-card link overlay — only when url is provided */}
      {url && (
        <Link
          href={url}
          className="absolute inset-0 rounded-lg"
          aria-label={`View ${name}'s profile`}
        />
      )}

      {/* Avatar — link or plain div depending on url */}
      {url ? (
        <Link
          href={url}
          className="relative z-10 w-36 h-36 rounded-full border-[3px] border-stone-500 overflow-hidden mb-5 flex-shrink-0"
          aria-label={`View ${name}'s profile`}
          tabIndex={-1}
        >
          {avatarContent}
        </Link>
      ) : (
        <div className="relative z-10 w-36 h-36 rounded-full border-[3px] border-stone-500 overflow-hidden mb-5 flex-shrink-0">
          {avatarContent}
        </div>
      )}

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{name}</h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500 italic leading-relaxed mb-4">
          {description}
        </p>
      )}

      <div className="mt-auto">
        {/* Role */}
        {role && (
          <p className="text-xs font-bold text-stone-600 uppercase tracking-widest mb-5">
            {role}
          </p>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <>
            <div className="w-full border-t border-gray-100 mb-4" />
            <div className="relative z-10 flex justify-center gap-5 text-gray-800">
              {socialLinks.map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-500 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
