import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Software Developer",
      company: "DIT interactive PVT LTD",
      period: "Nov '22 - Current",
      responsibilities: [
        "Nodejs: Created multiple APIs and implemented them in the frontend (3 years)",
        "React: Created multiple admin panels and tool management dashboards (3 years)",
        "MySQL: Implemented full DB structure in multiple projects (3 years)"
      ]
    },
    {
      title: "Jr. Software Developer",
      company: "Ebizz Infotech PVT LTD",
      period: "Nov'21 - Nov'22",
      responsibilities: [
        "Nodejs: Created multiple APIs and implemented them in the frontend (1 year)",
        "Nodejs: Created multiple admin panels in ejs (1 year)",
        "MySQL: Implemented full database structure in multiple projects (1 year)",
        "MongoDB: Optimize database structure in multiple projects (1 year)"
      ]
    },
    {
      title: "Jr. Software Developer",
      company: "SendMe PVT LTD",
      period: "May'19 - Nov'21",
      responsibilities: [
        "Nodejs: Converted Codeigniter APIs in Node.js for AWS Lambda API (2 years)",
        "MySQL: Implemented full database structure in multiple projects (2 years)",
        "Flutter: Create an App for the admin to manage orders (6 months)",
        "AWS services: Implemented AWS services like S3 and DynamoDB"
      ]
    }
  ];

  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="period">{exp.period}</p>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
