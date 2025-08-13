import { Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="pt-8">
          <h4 className="font-medium mb-4"> Connect With Me </h4>
          <div className="flex space-x-4 justify-center">
            <a href="https://linkedin.com/in/anoushkashetty" target="_blank">
              <Linkedin />
            </a>
            <a href="https://github.com/Anu48" target="_blank">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
