import React from "react";

export default function ProjectSection() {
  const projects = [
    {
      title: "00digital.com",
      link: "https://www.00digital.com/",
      stack: ["React", "Three.js", "Tailwind", "Sanity.io"],
      image: "/projects/00digital.png",
      description:
        "Built responsive React frontend to display marketing information. Developed 3D Three.js (React Three Fiber) components with cursor follow Implemented Sanity headless CMS for blog posts Utilized TailwinCSS for consistent UI/UX design.Deployed on Vercel for CI/CD",
    },
    {
      title: "merqury.app",
      link: "https://www.merqury.app/",
      stack: ["React", "Next.js", "Tailwind", "ShadCN", "Supabase"],
      image: "/projects/merqury.png",
      description:
        "Developed a full-stack unifying e-commerce dashboard using Supabase and Next.js.Integrated 3rd party APIs from Lazada, Tiktok and Shopee to fetch, edit and update order and product information. Integrated Stripe for subscription and payments, with webhook subscription event updates. Utilized ShadCN components and TailwindCSS for consistent front-end UI/UX. Deployed on Vercel for CI/CD and utilized Vercel cron jobs to automate platform auth token refresh.",
    },
    {
      title: "Durex Pledge Wall",
      link: "https://www.merqury.app/",
      stack: ["React", "Supabase", "Tailwind"],
      image: "/projects/durex.png",
      description:
        "Developed tablet-optimized React event platform to display live pledge submissions. Built a submission form that dynamically generates QR code for user to scan and download generated pledges. Utilized Supabase Realtime db to fetch live submissions, which are also displayed on a separate wall at the event.",
    },
    {
      title: "clublandkl.com",
      link: "https://pledge-wall-psi.vercel.app/",
      stack: ["React", "Next.js", "Supabase", "Tailwind"],
      image: "/projects/clkl.png",
      description:
        "Built responsive React frontend to render dynamic blog content and event data. Implemented WordPress REST API for headless CMS architecture. Utilized TailwinCSS for consistent UI/UX design.Deployed on Vercel for CI/CD",
    },
    {
      title: "muratone.com",
      link: "https://muratone.com/",
      stack: ["React", "Next.js", "Neon", "Tailwind"],
      image: "/projects/muratone.png",
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

              <div className="flex flex-wrap gap-2 mb-4">
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
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
