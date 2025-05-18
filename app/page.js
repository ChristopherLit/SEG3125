export default function Home() {
  return (
    <>
      {/* Sticky Header with smooth scroll links */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-800 to-black text-orange-400 py-6 font-mono shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-bold">&lt;Portfolio /&gt;</h1>
          <nav className="space-x-6 text-orange-300 text-sm md:text-base">
            {['about','skills','workflow','projects','testimonials','contact'].map((sec) => (
              <a key={sec} href={`#${sec}`} className="animate-underline">{sec.charAt(0).toUpperCase()+sec.slice(1)}()</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="bg-gradient-to-b from-black to-gray-900 text-gray-100 scroll-smooth">
        {/* Hero */}
        <section id="hero" className="py-24 bg-gradient-to-b from-black to-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-orange-400 mb-6">Christopher Lit</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-mono leading-relaxed">
              I'm Christopher, a developer specializing in intuitive UI and clean, maintainable code. Explore my work and see how I bring designs to life.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-gray-50 text-gray-900">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-mono text-orange-500 mb-6">// About Me</h2>
            <p className="font-mono leading-relaxed mb-4">
              As a UI developer, I combine aesthetics and functionality to create fun user experiences. I enjoy improving my skills through coursework and projects.
            </p>
            <p className="font-mono leading-relaxed">
              My journey includes collaborating with designers, iterating based on user feedback, and implementing responsive designs that adapt to any device.
            </p>
          </div>
        </section>

        {/* Skills with icons */}
        <section id="skills" className="py-20 px-6 bg-white text-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-mono text-orange-500 mb-8 text-center">// Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'HTML', icon: '🌐' },
                { name: 'CSS', icon: '🎨' },
                { name: 'JavaScript', icon: '⚙️' },
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '⏭️' },
                { name: 'Tailwind CSS', icon: '💨' },
                { name: 'Figma', icon: '✏️' },
                { name: 'Git', icon: '🔧' },
              ].map((skill, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center font-mono hover:scale-105 transform transition-shadow shadow-md hover:shadow-xl">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="text-lg">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

           {/* Experience */}
        <section id="experience" className="py-20 px-6 bg-white text-gray-900">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-mono text-orange-500 mb-8 text-center">// Experience</h2>
            
            <div className="flex flex-col space-y-12">

               {/* Kinaxis */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img src="kinaxis_logo.png" alt="Kinaxis" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold font-mono">Software Engineer Intern <span className="text-sm text-gray-500">(Jan 2025 - Apr 2025)</span></h3>
                <p className="mt-2 font-mono text-sm">
                  Kinaxis
                  <br />
                  Vibe coded and played ping pong
                </p>
              </div>

              {/* CEED uOttawa */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img src="ceed_logo.png" alt="CEED uOttawa" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold font-mono">Software Engineer Intern <span className="text-sm text-gray-500">(May 2024 - Aug 2024)</span></h3>
                <p className="mt-2 font-mono text-sm">
                  CEED
                  <br />
                  Developed interactive UI components for educational web applications, collaborating with cross functional teams.
                </p>
              </div>
             
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="py-20 px-6 bg-gray-50 text-gray-900">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-mono text-orange-500 mb-6">// How I Work</h2>
            <pre className="overflow-auto font-mono bg-white p-8 rounded-md text-sm shadow-lg border border-gray-200">
      {`function workflow() {
        const requirements = gatherRequirements();
        const research = conductResearch();
        const wireframes = draftWireframes();
        const prototype = createPrototype('Figma');
        const feedback = performTests('user-centered');
        iterate(wireframes, feedback);
        return deliverProduct();
      }`}
                  </pre>
            <p className="mt-6 text-base text-gray-800 font-sans leading-relaxed">
  My design process starts with gathering requirements and researching best practices. I create wireframes and interactive prototypes using Figma, test them with users, and iterate based on feedback to ensure the final design meets both user and business needs.
</p>

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 bg-white text-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-mono text-orange-500 mb-8 text-center">// Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {['case1','case2','case3','case4'].map((img, i) => (
                <a key={i} href="#" className="block bg-gray-50 p-6 rounded-xl hover:shadow-2xl transition-shadow border border-gray-200">
                  <div className="h-48 overflow-hidden rounded-md mb-4">
                    <img src={`/images/${img}.jpg`} alt={`Project ${i+1}`} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-mono text-orange-500 text-lg">Project {i+1} &mdash; Coming Soon</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 bg-gray-50 text-gray-900">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-mono text-orange-500 mb-8 text-center">// Testimonials</h2>
            <div className="space-y-8">
              {[
                { quote: 'Very knowledgeable with user interfaces!', author: 'Feiyu' },
                { quote: 'I ate a chipotle bowl yesterday', author: 'August' },
                { quote: 'From optimizing database queries with precision to implementing reactive state management with elegance, their coding skills consistently exceed industry standards', author: 'A Random cat' },
              ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 font-mono">
                  <p className="italic mb-4">“{t.quote}”</p>
                  <p className="text-right font-semibold">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-50 text-gray-900">
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-mono text-orange-500 mb-6">// Get in Touch</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Christopher" className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 font-mono" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 font-mono" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 font-mono"></textarea>
              <button type="submit" className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg transition">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer with black gradient */}
      <footer className="bg-gradient-to-r from-black via-gray-800 to-black text-gray-400 py-8 text-center font-mono">
        <p>&copy; {new Date().getFullYear()} &lt;Christopher /&gt; — Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </>
  )
}
