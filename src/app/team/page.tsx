import Link from "next/link";

export default function Team() {
  return (
    <div className="flex flex-col items-left px-8 flex-grow">
      <h1 className="text-2xl font-bold mb-1">Team</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/team/scorppu" className="hover:opacity-75">
            Scorppu
          </Link>
        </li>
      </ul>

      <ul className="space-y-2">
        <li>
          <Link href="/team/princebw30" className="hover:opacity-75">
            Prince
          </Link>
        </li>
      </ul>

      <ul className="space-y-2">
        <li>
          <Link href="/team/korbi" className="hover:opacity-75">
            Korbi
          </Link>
        </li>
      </ul>

      <ul className="space-y-2">
        <li>
          <Link href="/team/edgeman475" className="hover:opacity-75">
            Edgeman
          </Link>
        </li>
      </ul>

      <ul className="space-y-2">
        <li>
          <Link href="/team/areshunterqy" className="hover:opacity-75">
            Ares
          </Link>
        </li>
      </ul>
    </div>
  );
}