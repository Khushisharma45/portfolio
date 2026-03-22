import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology – CSE",
    period: "August 2023 – Present",
  },
  {
    school: "Govt. Sr. Sec. Smart School",
    location: "Bungal, Punjab",
    degree: "Intermediate",
    period: "April 2021 – March 2022",
  },
  {
    school: "KLM International School",
    location: "Mamun, Pathankot",
    degree: "Matriculation",
    period: "April 2019 – March 2020",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">Background</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Education</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="md:pl-12 relative"
              >
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block" />
                <div className="p-5 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground">{edu.school}</h3>
                      <p className="text-sm text-accent">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground mt-1">{edu.location} | {edu.period}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
