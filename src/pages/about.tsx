export default function About() {
  return (
    <section className="bg-[#F5EFE6] text-[#2C211C] lg:h-[calc(100vh-1px)] lg:overflow-hidden">
      <div className="grid h-full lg:grid-cols-2">
        <div className="relative h-[45vh] min-h-[320px] overflow-hidden bg-[#DCCBBC] lg:h-full">
          <img
            src="/images/about-img.png"
            alt="A warm coffee moment at Elior"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-5 border border-[#F5EFE6]/50 sm:inset-8" />
        </div>

        <div className="flex items-center px-7 py-12 sm:px-10 md:py-16 lg:px-12 xl:px-16">
          <div className="w-full max-w-lg">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#A8754F] sm:text-xs">
              Our story
            </p>

            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
              A place to slow down.
            </h1>

            <div className="mt-6 space-y-3.5 text-sm leading-6 text-[#2C211C]/65 xl:mt-7 xl:space-y-4 xl:leading-6.5">
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

            <p className="mt-7 font-serif text-lg italic leading-6 text-[#4A3428] xl:mt-8 xl:text-xl">
              “Take your time. Your coffee isn't going anywhere.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}