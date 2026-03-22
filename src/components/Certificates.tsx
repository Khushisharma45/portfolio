import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { title: "Privacy and Security in Online Social Media", issuer: "NPTEL", date: "May 2025" },
  { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", issuer: "Infosys", date: "August 2025" },
  { title: "Computational Theory: Language Principle & Finite Automata Theory", issuer: "Infosys", date: "August 2025" },
  { title: "Master Generative AI & Generative AI Tools (ChatGPT & more)", issuer: "Infosys", date: "August 2025" },
];

const achievements = [
  "Completed 100+ coding questions on LeetCode",
  "Earned 1 Star in Java, 3 Stars in Python, and 2 Stars in C on HackerRank",
  "Achieved a Coding Score of 50 on GeeksForGeeks",
];

const Certificates = () => {
  return (
    <section id="certificates" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">Credentials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-lg bg-card border border-border hover:glow-border transition-all duration-300"
            >
              <Award size={20} className="text-accent mb-2" />
              <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cert.issuer} | {cert.date}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="text-meta mb-4">Achievements</p>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-3 items-start"
              >
                <span className="text-accent mt-0.5">◆</span>
                <p className="text-muted-foreground">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
