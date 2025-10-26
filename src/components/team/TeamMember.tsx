import Link from "next/link";
import Image from "next/image";

type TeamMemberProps = {
  name: string;
  imageURL: string;
  url: string;
};

export default function TeamMember({ name, imageURL, url }: TeamMemberProps) {
  return (
    <Link href={url} passHref className="flex flex-col items-center px-8 flex-grow hover:underline">
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <Image
          src={imageURL}
          alt="team member thumbnail"
          width={100}
          height={100}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          priority
        />
      </div>
      <h2 className="text-2xl mt-4">{name}</h2>
    </Link>
  );
}