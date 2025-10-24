const exampleData = {
  personalInfo: {
    name: "Jon Doe",
    email: "john.doe@example.com",
    phone: "+1 555 000 0000",
    address: "Cityville, USA",
    linkedin: "linkedin.com",
    github: "github.com",
  },
  experiences: [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      jobTitle: "Software Engineer",
      startDate: "Jan 2021",
      endDate: "Apr 2025",
      description:
        "Developed web applications using React and Node.js.\nCollaborated with cross-functional teams to deliver features.\nMaintained and optimized backend APIs.\nParticipated in code reviews and mentoring junior developers.",
    },
    {
      id: 2,
      company: "Innovate Labs",
      jobTitle: "Junior Developer",
      startDate: "Jun 2019",
      endDate: "Dec 2020",
      description:
        "Assisted in building internal tools and dashboards.\nWrote unit tests and documentation.\nParticipated in agile sprint planning and retrospectives.\nLearned new technologies and programming best practices.",
    },
  ],
  educations: [
    {
      id: 1,
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      startDate: "Sep 2015",
      endDate: "Jun 2019",
    },
    {
      id: 2,
      institution: "City College",
      degree: "Exchange Program",
      startDate: "Sep 2017",
      endDate: "Feb 2018",
    },
  ],
  skills: [
    { id: 1, name: "JavaScript, React, Node.js" },
    { id: 2, name: "Python, Flask, Django" },
    { id: 3, name: "SQL and NoSQL databases" },
    { id: 4, name: "Git, GitHub, CI/CD" },
    { id: 5, name: "Agile/Scrum workflow" },
    { id: 6, name: "Problem-solving and debugging" },
    { id: 7, name: "Team collaboration and communication" },
    { id: 8, name: "Time management and task prioritization" },
  ],
  languages: [
    { id: 1, lang: "English", proficiency: "native" },
    { id: 2, lang: "Spanish", proficiency: "full" },
    { id: 3, lang: "French", proficiency: "limited" },
  ],
  projects: [
    { id: 1, title: "CLI tool for task automation" },
    { id: 2, title: "Web-based project management app" },
    { id: 3, title: "Personal portfolio website" },
    { id: 4, title: "Open-source contributions to libraries" },
  ],
};

export default exampleData;
