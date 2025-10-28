import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Dr. Barbara Sturm website",
      company: "DIT interactive h PVT. LTD",
      description: [
        "Create a management tool to connect BigCommerce store with SAP",
        "Implemented bundle products, kit products, and sample products",
        "Used GCP services: Bucket and CRON jobs",
        "Inventory sync implementation from SAP to DB and store"
      ],
      technologies: ["Node.js", "GCP", "BigCommerce"]
    },
    {
      name: "Baradari App",
      company: "Ebizz Infotech PVT. LTD",
      description: [
        "Instagram-like app with communities and chat functionality",
        "Backend: NodeJS with MongoDB",
        "Socket implementation for chat",
        "Token-based authentication"
      ],
      technologies: ["Node.js", "MongoDB", "Socket.IO"]
    },
    // Add more projects...
  ];

  return (
    <div className="projects">
      <h2>Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p className="company">{project.company}</p>
            <ul>
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
