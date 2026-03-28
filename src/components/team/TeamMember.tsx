import Link from "next/link";
import Image from "next/image";

type TeamMemberProps = {
  name: string;
  imageURL: string;
  url: string;
  role?: string;
};

export default function TeamMember({ name, imageURL, url, role }: TeamMemberProps) {
  return (
    <Link href={url} className="flex flex-col items-center group">
      <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
        <Image
          src={imageURL}
          alt={name}
          width={300}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      <h2 className="text-base font-semibold text-black text-center">{name}</h2>
      {role && <p className="text-sm text-stone-500 text-center">{role}</p>}
    </Link>
  );
}
