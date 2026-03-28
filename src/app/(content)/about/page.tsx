import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="w-full bg-stone-900 text-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-4">
            Scorppu Ltd
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light">
            where dreams become reality
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Who We Are</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Scorppu Ltd is a personal portfolio and creative hub for Scorppu and
            friends. What started as a shared space to showcase projects and ideas
            grew into a small community bound by a love for building things —
            whether that&apos;s code, art, or elaborate Minecraft structures.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We run a Minecraft server where the same spirit of creativity carries
            over into block-by-block construction, community events, and the
            occasional ambitious project that takes way too many hours.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-16 px-4 md:px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-stone-200 p-8">
              <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
              <p className="text-stone-600 leading-relaxed">
                A space for personal projects, experiments, and work by Scorppu
                and the team. From web development to creative endeavours — this
                is where it lives.
              </p>
            </div>
            <div className="border border-stone-200 p-8">
              <h3 className="text-xl font-semibold mb-3">Minecraft Server</h3>
              <p className="text-stone-600 leading-relaxed">
                A private server for friends to build, explore, and cause
                (controlled) chaos. Check the gallery for a look at what
                we&apos;ve been up to.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-600 mb-6">
            Want to meet the people behind the builds?
          </p>
          <Link
            href="/team"
            className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 inline-block"
          >
            MEET THE TEAM
          </Link>
        </div>
      </div>
    </div>
  );
}
