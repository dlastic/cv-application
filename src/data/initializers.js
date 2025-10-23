const initializePersonalInfo = () => ({
  name: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  github: "",
});

const initializeExperience = () => ({
  id: Date.now(),
  company: "",
  jobTitle: "",
  startDate: "",
  endDate: "",
  description: "",
});

const initializeEducation = () => ({
  id: Date.now(),
  institution: "",
  degree: "",
  startDate: "",
  endDate: "",
});

const initializeSkill = () => ({ id: Date.now(), name: "" });

const initializeLanguage = () => ({
  id: Date.now(),
  lang: "",
  proficiency: "",
});

export {
  initializePersonalInfo,
  initializeExperience,
  initializeEducation,
  initializeSkill,
  initializeLanguage,
};
