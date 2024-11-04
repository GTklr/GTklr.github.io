import React from "react";

export default function ProjectSectionWP() {
  const projects = [
    {
      title: "nijigen.com",
      link: "https://www.nijigenexpo.com/",
      stack: ["WordPress", "Woocommerce", "Elementor"],
      image: "/projects/nijigen.png",
      description: "Woocommerce wordpress site. Handover Jan 2024.",
    },
    {
      title: "un2beauty.my",
      link: "https://www.un2beauty.my/",
      stack: ["WordPress", "Woocommerce", "Elementor"],
      image: "/projects/un2beauty.png",
      description: "Woocommerce wordpress site. Handover Oct 2023.",
    },
    {
      title: "merqury.asia",
      link: "https://www.merqury.asia/",
      stack: ["WordPress", "Breakdance"],
      image: "/projects/merquryasia.png",
      description: "SAAS Marketing wordpress site",
    },
    {
      title: "aonic.com",
      link: "https://www.aonic.com/",
      stack: ["WordPress", "Elementor"],
      image: "/projects/aonic.png",
      description: "Business portfolio wordpress site. Handover Sept 2022",
    },

    {
      title: "catchcrew.co",
      link: "https://catchcrew.co/",
      stack: ["WordPress", "Woocommerce", "Breakdance"],
      image: "/projects/catchcrew.png",
      description: "Woocommerce wordpress site. Handover Feb 2024.",
    },
    {
      title: "mantrabarkl.com",
      link: "https://mantrabarkl.com/",
      stack: ["WordPress", "Breakdance"],
      image: "/projects/mantra.png",
      description: "Business portfolio wordpress site. Handover April 2024",
    },

    {
      title: "mimba.asia",
      link: "https://mimba.asia",
      stack: ["WordPress", "Breakdance"],
      image: "/projects/mimba.png",
      description: "Business portfolio wordpress site. Handover June 2024",
    },
    {
      title: "bigecreative.com",
      link: "https://bigecreative.com/",
      stack: ["WordPress", "Breakdance"],
      image: "/projects/bige.png",
      description:
        "Built responsive Next.js frontend with TailwindCSS. Used simple form submissions to update the linktree component (/links). Utilized Neon DB to store Links submissions. Deployed on Vercel for CI/CD",
    },
    {
      title: "langkawigreenfest.com",
      link: "https://langkawigreenfest.com/",
      stack: ["WordPress", "Breakdance"],
      image: "/projects/langkawi.png",
      description:
        "Built responsive Next.js frontend with TailwindCSS. Used simple form submissions to update the linktree component (/links). Utilized Neon DB to store Links submissions. Deployed on Vercel for CI/CD",
    },
    {
      title: "nomu.asia",
      link: "https://nomu.asia/",
      stack: ["WordPress", "Woocommerce", "Breakdance"],
      image: "/projects/nomu.png",
      description:
        "Built responsive React frontend to render dynamic blog content and event data. Implemented WordPress REST API for headless CMS architecture. Utilized TailwinCSS for consistent UI/UX design.Deployed on Vercel for CI/CD",
    },
    {
      title: "winekaki.com",
      link: "https://winekaki.com/",
      stack: ["WordPress", "Woocommerce", "Breakdance"],
      image: "/projects/winekaki.png",
      description:
        "Built responsive Next.js frontend with TailwindCSS. Used simple form submissions to update the linktree component (/links). Utilized Neon DB to store Links submissions. Deployed on Vercel for CI/CD",
    },
    {
      title: "bridgit.biz",
      link: "https://bridgit.biz/",
      stack: ["WordPress", "Elementor"],
      image: "/projects/bridgit.png",
      description:
        "Built responsive Next.js frontend with TailwindCSS. Used simple form submissions to update the linktree component (/links). Utilized Neon DB to store Links submissions. Deployed on Vercel for CI/CD",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border !border-none shadow-lg"
          >
            <div className="relative group overflow-clip">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300 hover:bg-yellowgreen hover:text-black"
                >
                  Visit Site
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 ">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300 hover:bg-yellowgreen hover:text-black green transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              {/* <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
