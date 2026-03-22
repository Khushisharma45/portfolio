import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-meta mb-4">Let's Connect</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <a href="mailto:khushi28121020@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:glow-border transition-all">
                <Mail size={18} />
              </div>
              <span>khushi28121020@gmail.com</span>
            </a>
            <a href="tel:+916284250116" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:glow-border transition-all">
                <Phone size={18} />
              </div>
              <span>+91-6284250116</span>
            </a>
            <a href="https://www.linkedin.com/in/khushisharma58/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:glow-border transition-all">
                <Linkedin size={18} />
              </div>
              <span>linkedin.com/in/khushisharma58</span>
            </a>
            <a href="https://github.com/Khushisharma45" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:glow-border transition-all">
                <Github size={18} />
              </div>
              <span>github.com/Khushisharma45</span>
            </a>
          </div>

          {/* Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center"
            >
              <div className="p-6 rounded-lg glow-border">
                <p className="text-xl font-semibold text-accent">Message Received ✓</p>
                <p className="text-muted-foreground mt-2">I'll get back to you shortly.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-meta block mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-meta block mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-meta block mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground font-medium px-8 py-3 h-auto hover:bg-primary/90 transition-all"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
