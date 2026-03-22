const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Khushi Sharma. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Khushisharma45" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/khushisharma58/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="mailto:khushi28121020@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
