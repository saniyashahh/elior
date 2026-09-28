export default function About() {
  return (
    <section className="min-h-screen bg-[#F5EFE6] text-[#2C211C]">
      {/* Story */}
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[500px] overflow-hidden bg-[#DCCBBC]">
          <img
            src="/images/about-img.png"
            alt="A warm coffee moment at Elior"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-8 border border-[#F5EFE6]/50" />
        </div>

        {/* Content */}
        <div className="flex items-center px-8 py-16 lg:px-20">
          <div className="max-w-lg">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#A8754F]">
              Our story
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight lg:text-6xl">
              A place to slow down.
            </h1>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#2C211C]/65">
              <p>
                Elior started with a simple thought: maybe a café could be a
                place where nothing needs to be rushed.
              </p>

              <p>
                The idea came from slow mornings, handwritten notes, half-read
                books, and the comfort of sitting somewhere warm with a good
                cup of coffee. We wanted to create a space that captured that
                feeling.
              </p>

              <p>
                So Elior became a small neighbourhood café built around
                thoughtful coffee, uncomplicated food, and an atmosphere that
                invites you to stay a little longer.
              </p>

              <p>
                There is no particular reason to hurry here. Come in for
                coffee, stay for breakfast, meet someone, or simply find a
                quiet corner of your own.
              </p>
            </div>

            <p className="mt-10 font-serif text-xl italic text-[#4A3428]">
              “Take your time. Your coffee isn't going anywhere.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}