export type Certification = {
  title: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  logo: string;
  skills?: string[];
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Generative AI Developer – Professional (AIP-C01)",
    organization: "AWS Training & Certification",
    issueDate: "June 2026",
    credentialId: "AIP-C01",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=AWS%20Generative%20AI%20Developer%20Credential",
    logo: "AWS",
    skills: ["Generative AI", "AWS AI Services", "Foundation Models", "LLM Applications"]
  },
  {
    title: "What Is Generative AI?",
    organization: "LinkedIn Learning",
    issueDate: "June 2026",
    credentialId: "LI-GENAI-2026",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=LinkedIn%20Generative%20AI%20Credential",
    logo: "Li",
    skills: ["Generative AI", "LLM Fundamentals", "AI Applications"]
  },
  {
    title: "Artificial Intelligence & Data Analytics Internship",
    organization: "Edunet Foundation (AICTE & Shell India)",
    issueDate: "November 2025",
    credentialId: "EDUNET-AI-2025",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=Edunet%20AI%20Internship%20Credential",
    logo: "EF",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Model Development"]
  },
  {
    title: "British Airways Data Science Job Simulation",
    organization: "Forage",
    issueDate: "July 2025",
    credentialId: "d5RLyXTRkMDLGayWb",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=British%20Airways%20Data%20Science%20Credential",
    logo: "BA",
    skills: ["Data Science", "Business Analytics", "Data Visualization", "Problem Solving"]
  },
  {
    title: "IBM SkillsBuild Data Analytics Certificate",
    organization: "IBM",
    issueDate: "July 2025",
    credentialId: "CREDLY-d5a61bd3-0e21-41b5-8c9b-a6cfb608f323",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=IBM%20SkillsBuild%20Data%20Analytics%20Credential",
    logo: "IBM",
    skills: ["Data Analytics", "Data Analysis", "Data Visualization"]
  },
  {
    title: "Data Science & Analytics",
    organization: "HP LIFE",
    issueDate: "July 2025",
    credentialId: "1448e1da-c201-4ad9-8ca9-7b9a61400922",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=HP%20LIFE%20Data%20Science%20Credential",
    logo: "HP",
    skills: ["Data Science", "Analytics", "Business Intelligence"]
  },
  {
    title: "Quantium - Data Analytics Job Simulation",
    organization: "Forage",
    issueDate: "June 2025",
    credentialId: "6rv8w3y3AGWALDPqT",
    credentialUrl: "mailto:ubaithsherif22@gmail.com?subject=Quantium%20Data%20Analytics%20Credential",
    logo: "Q",
    skills: ["Data Analytics", "Customer Insights", "Data Visualization"]
  }
];
