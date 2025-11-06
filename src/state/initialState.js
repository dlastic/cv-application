const initializePersonalInfo = () => ({
  name: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  github: "",
});

const initializeExperience = () => ({
  id: crypto.randomUUID(),
  company: "",
  jobTitle: "",
  startDate: "",
  endDate: "",
  description: "",
});

const initializeEducation = () => ({
  id: crypto.randomUUID(),
  institution: "",
  degree: "",
  startDate: "",
  endDate: "",
});

const initializeSkill = () => ({ id: crypto.randomUUID(), name: "" });

const initializeLanguage = () => ({
  id: crypto.randomUUID(),
  lang: "",
  proficiency: "",
});

const initializeProject = () => ({
  id: crypto.randomUUID(),
  title: "",
});

export {
  initializePersonalInfo,
  initializeExperience,
  initializeEducation,
  initializeSkill,
  initializeLanguage,
  initializeProject
};
