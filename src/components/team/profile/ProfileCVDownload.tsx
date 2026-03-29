import Link from "next/link";

export default function ProfileCVDownload({
  cvURL,
  cvFilename,
}: {
  cvURL: string;
  cvFilename: string;
}) {
  return (
    <div className="flex flex-col items-center flex-grow">
      <Link
        href={cvURL}
        download={cvFilename}
        className="px-8 py-3 border-2 border-stone-600 text-stone-600 hover:bg-stone-600 hover:text-white transition-colors duration-300 inline-block"
      >
        Download My CV Here
      </Link>
    </div>
  );
}
