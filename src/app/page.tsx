const algorithms = [
  {
    name: "Quick Sort",
    summary: "Fast partition-based sorting for large datasets and responsive simulations.",
    badge: "Divide & conquer",
  },
  {
    name: "Merge Sort",
    summary: "Stable, predictable sorting with elegant visual split-and-merge steps.",
    badge: "Stable",
  },
  {
    name: "Bubble Sort",
    summary: "A simple teaching mode that shows every comparison and swap clearly.",
    badge: "Beginner friendly",
  },
  {
    name: "Heap Sort",
    summary: "Structured heap operations that make the algorithm easy to track visually.",
    badge: "Efficient",
  },
];

const features = [
  {
    title: "User-driven input",
    text: "Enter your own numbers, choose the algorithm, and control speed, size, and data shape.",
  },
  {
    title: "Animated execution",
    text: "Watch bars move, compare, swap, merge, and settle with clear motion and timing.",
  },
  {
    title: "Step-by-step explanation",
    text: "Every run can show what happened, why it happened, and what makes the result correct.",
  },
];

const stats = [
  { value: "6+", label: "core algorithms" },
  { value: "3D", label: "visual depth" },
  { value: "Live", label: "interactive feedback" },
];

export default function Home() {
  return (
    <main id="top" className="homepage-shell min-h-screen overflow-hidden text-white">
      <section className="relative isolate flex min-h-screen items-center">
        <div className="homepage-grid absolute inset-0 opacity-60" />
        <div className="homepage-orb homepage-orb-left" />
        <div className="homepage-orb homepage-orb-right" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-12 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12">
          <div className="space-y-8">
            <div className="hero-chip animate-rise-in">Sorting Algorithms Simulator</div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance md:text-7xl">
                Turn raw numbers into a cinematic sorting experience.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Explore quick sort, merge sort, bubble sort, heap sort, and more through
                a premium animated interface that explains every comparison, swap, and
                merge in a way anyone can understand.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="action-button action-button-primary" href="#algorithms">
                Explore algorithms
              </a>
              <a className="action-button action-button-secondary" href="#features">
                See how it works
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="text-3xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-white/55">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="visual-canvas animate-float-slow">
              <div className="visual-canvas-inner">
                <div className="visual-header">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/55">
                      Simulation preview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">Sorting in motion</h2>
                  </div>
                  <div className="status-pill">Running</div>
                </div>

                <div className="bars-stage" aria-hidden="true">
                  <span className="bar bar-a" />
                  <span className="bar bar-b" />
                  <span className="bar bar-c" />
                  <span className="bar bar-d" />
                  <span className="bar bar-e" />
                  <span className="bar bar-f" />
                  <span className="bar bar-g" />
                </div>

                <div className="space-y-4">
                  <div className="progress-line">
                    <span />
                  </div>
                  <p className="text-sm leading-7 text-white/68">
                    The simulator highlights the active elements, then explains each phase
                    so the result is visual, technical, and easy to follow.
                  </p>
                </div>
              </div>
            </div>

            <div className="floating-note animate-rise-in">
              Real-time explanations and motion cues keep the logic readable.
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative mx-auto w-full max-w-7xl px-6 pb-12 md:px-10 lg:px-12">
        <div className="section-head">
          <p className="section-kicker">Why this simulator feels different</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Built to teach, impress, and make sorting intuitive.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="feature-card" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="feature-index">0{index + 1}</div>
              <h3 className="mt-5 text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="algorithms" className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="section-head">
          <p className="section-kicker">Algorithms included</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            The homepage introduces the core sorting methods you can explore.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {algorithms.map((algorithm, index) => (
            <article key={algorithm.name} className="algorithm-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="algorithm-badge">{algorithm.badge}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{algorithm.name}</h3>
                </div>
                <div className="algorithm-step">0{index + 1}</div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">{algorithm.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-4xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker">What users get</p>
              <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                Choose an algorithm, input data, start the animation, and learn the logic.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                The simulator is designed to feel premium and guided, not like a plain
                utility page. Every visual element reinforces the story of the algorithm.
              </p>
            </div>

            <a className="action-button action-button-primary justify-center whitespace-nowrap" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}