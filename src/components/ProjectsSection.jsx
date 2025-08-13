import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Children's Story Generator",
    description:
      "An AI model that generates children's story based on some starting terms (collaboration with a group)",
    tags: ["Python", "Google Colab"], // add the tools use,
    githubUrl: "https://github.com/nathanralph01/CSC413-Project",
  },
  {
    id: 2,
    title: "App Store Backend",
    description:
      "A backend system that applies the necessary transactions provided by the frontend (collaboration with a group)",
    tags: ["Java"], // add the tools use,
    githubUrl: "https://github.com/Laura05010/AppStore-CLI",
  },
  {
    id: 3,
    title: "Old Personal Website",
    description:
      "An old version of my website, which was seen as a introduction to web development",
    tags: ["HTML", "CSS"], // add the tools use,
    githubUrl: "https://github.com/Anu48/personalWebsiteArchived",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects available in GitHub.
          <br></br>
          <b>Note: </b>Some of the projects are privated so I have linked the
          equivalent version of the project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}{" "}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="magic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Anu48"
            target="_blank"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
