export default function Contact() {
  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">Contact</h1>
        <p className="text-stone-500 mb-12">
          This is a personal project — reach out through any of the channels below.
        </p>

        <div className="flex flex-col gap-6">
          {/* Discord */}
          {/* <div className="border border-stone-200 p-6">
            <h2 className="text-xs font-semibold tracking-widest text-stone-400 mb-2">DISCORD</h2>
            <a
              href="https://discord.gg/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-75 transition-opacity"
            >
              Join our Discord server
            </a>
          </div> */}

          {/* Email */}
          <div className="border border-stone-200 p-6">
            <h2 className="text-xs font-semibold tracking-widest text-stone-400 mb-2">EMAIL</h2>
            <a
              href="mailto:eugenechan111@gmail.com"
              className="text-lg font-medium hover:opacity-75 transition-opacity"
            >
              {"eugenechan111@gmail.com"}
            </a>
          </div>

          {/* Socials */}
          <div className="border border-stone-200 p-6">
            <h2 className="text-xs font-semibold tracking-widest text-stone-400 mb-2">SOCIALS</h2>
            <p className="text-stone-500 text-sm">More links coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
