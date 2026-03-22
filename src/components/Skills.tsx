import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "C", "Python", "Java"],
  },
  {
    title: "Web Dev",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Linux (Ubuntu)", "Git"],
  },
  {
    title: "Core Skills",
    skills: ["Data Structures", "Problem Solving", "OOP", "DBMS"],
  },
  {
    title: "Soft Skills",
    skills: ["Time Management", "Project Management", "Teamwork", "Responsibility"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">What I Know</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border hover:glow-border transition-all duration-300"
            >
              <h3 className="text-meta mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
