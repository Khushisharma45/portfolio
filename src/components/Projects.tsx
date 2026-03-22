import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Calibration Curve for Joint Testing",
    tech: ["Python", "ML"],
    date: "May 2025",
    github: "https://github.com/Khushisharma45/Callibration-curve-for-joint-testing_",
    points: [
      "Built probability calibration models using Platt Scaling and Isotonic Regression",
      "Improved prediction reliability for combined test scenarios",
      "Evaluated model performance using calibration curves and probability distribution analysis",
    ],
  },
  {
    title: "Automatic Question Generation from OCR Text",
    tech: ["Python", "NLP"],
    date: "November 2025",
    github: "https://github.com/Khushisharma45/Automatic-Question-Generation-from-textbooks-with-Noisy-OCR-Documents-",
    points: [
      "Built an NLP pipeline to clean OCR text, extract key concepts, and generate structured questions",
      "Used NLTK, Transformers, NumPy, and Pandas for preprocessing",
      "Improved automation efficiency for educational content creation",
    ],
  },
  {
    title: "Mood Detection Web App",
    tech: ["Flask", "Docker", "HTML", "CSS", "JS"],
    date: "2025",
    github: "https://github.com/Khushisharma45/mood_app",
    points: [
      "Developed a mood-based web app that analyzes user input and displays dynamic results",
      "Containerized with Docker for consistent deployment",
      "Implemented REST endpoints in Flask with a responsive UI",
    ],
  },
  {
    title: "StockPulse - Inventory Management System",
    tech: ["Python", "Web"],
    date: "2025",
    github: "https://github.com/Khushisharma45/stockpulse_ims",
    points: [
      "Built a full-featured inventory management system for tracking stock levels",
      "Implemented CRUD operations for products, categories, and suppliers",
      "Designed dashboards for real-time inventory insights and analytics",
    ],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group p-6 rounded-lg bg-card border border-border hover:glow-border transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors shrink-0 ml-2">
        <Github size={18} />
      </a>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span key={t} className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded">
          {t}
        </span>
      ))}
      <span className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded">{project.date}</span>
    </div>
    <ul className="space-y-2">
      {project.points.map((point, i) => (
        <li key={i} className="text-sm text-muted-foreground flex gap-2">
          <span className="text-accent mt-1 shrink-0">▹</span>
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">What I've Built</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
