import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePic from "../assets/profile-photo.png"; // using existing asset for now

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="text-meta mb-4">Software Developer</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            Khushi<br />Sharma
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[50ch]">
            Computer Science student passionate about building robust web applications, 
            solving complex problems with data structures, and crafting clean code.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Khushi_Sharma_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Khushisharma45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={18} /> GitHub Profile
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="mailto:khushi28121020@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/khushisharma58/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Khushisharma45" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="tel:+916284250116" className="text-muted-foreground hover:text-accent transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-border bg-secondary flex items-center justify-center animate-float">
              <img
                src={profilePic}
                alt="Khushi Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-accent/20 -rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
