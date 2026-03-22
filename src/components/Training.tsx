import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Training = () => {
  return (
    <section id="training" className="px-6 md:px-12 py-12 md:py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">Learning</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Training</h2>

        <div className="p-6 rounded-lg bg-card border border-border glow-border">
          <h3 className="text-2xl font-bold text-accent mb-1">Fundamentals of Data Structures</h3>
          <p className="text-primary font-medium mb-0.5">Centre for Professional Enhancement</p>
          <p className="text-meta italic mb-4">June 2025 – July 2025</p>

          <p className="text-muted-foreground mb-6">
            Completed intensive training covering core data structures including arrays, strings, stacks, queues, and trees. Applied algorithmic concepts to develop a Python-based code editor.
          </p>

          <div className="border-t border-border pt-6">
            <h4 className="text-lg font-semibold text-foreground mb-2">Training Project: Python Code Editor</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Features: Trie-based autocomplete, syntax highlighting, line numbers, and dark mode interface.
            </p>
            <a
              href="https://github.com/Khushisharma45/Code-editor-with-autocompletion-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Project Link
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Training;
