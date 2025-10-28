import '../styles/About.css';

const About = () => {
  const education = [
    {
      degree: "MCA - Master Of Computer Application",
      institution: "Saurashtra University, Gujarat",
      year: "2016 - 2019",
      score: "CGPA: 7.83/10"
    },
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "Veer Narmad South Gujarat University",
      year: "2013 - 2016",
      score: "CGPA: 7.22/10"
    }
  ];

  const skills = {
    languages: ["JavaScript", "Node.js", "Next.js", "React", "Flutter", "HTML", "CSS"],
    cloud: ["AWS", "GCP", "GIT pipeline"],
    tools: ["NPM", "VS Code", "PM2", "Express.js", "Socket.IO", "CORS", "Nodemailer", "GitHub", "GitLab", "Postman"],
    databases: ["MySQL", "MongoDB"],
    misc: ["Angular", "Laravel"]
  };

  return (
    <div className="about">
      <section className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
            <p>{edu.score}</p>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="skill-items">
              {items.map((item, index) => (
                <span key={index} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
