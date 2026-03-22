import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">About Me</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
          I am <span className="gradient-text">Khushi Sharma</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science and Engineering student at Lovely Professional University 
              with a strong foundation in C++, Python, Java, and web technologies.
            </p>
            <p>
              My passion lies in solving real-world problems through clean code, efficient algorithms, 
              and full-stack development. I love building projects that make a tangible impact — from 
              NLP pipelines to web applications and management systems.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-meta mb-2">Core Focus</p>
              <ul className="space-y-1 text-foreground">
                <li>Data Structures & Algorithms</li>
                <li>Full-Stack Web Development</li>
                <li>Problem Solving & OOP</li>
                <li>Machine Learning & NLP</li>
              </ul>
            </div>
            <div>
              <p className="text-meta mb-2">Currently</p>
              <p className="text-foreground">B.Tech CSE @ Lovely Professional University</p>
              <p className="text-muted-foreground text-sm">Aug 2023 – Present</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
