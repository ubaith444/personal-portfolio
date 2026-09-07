export type Certification = {
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  logo: string;
  skills?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Claude 101",
    organization: "Anthropic",
    issueDate: "June 2026",
    logo: "ANT",
    skills: ["Claude", "Anthropic APIs", "Prompt Engineering", "LLM Reasoning"]
  },
  {
    title: "Introduction to Claude Cowork",
    organization: "Anthropic Education — Anthropic",
    issueDate: "August 2026",
    logo: "ANT",
    skills: ["Claude Cowork", "Agent Workflows", "AI Collaboration"]
  },
  {
    title: "What Is Generative AI?",
    organization: "LinkedIn Learning",
    issueDate: "June 2026",
    credentialId: "LI-GENAI-2026",
    logo: "Li",
    skills: ["Generative AI", "LLM Fundamentals", "AI Applications"]
  },
  {
    title: "Official Practice Question Set: AWS Certified Generative AI Developer – Professional (AIP-C01)",
    organization: "AWS Training & Certification",
    issueDate: "June 2026",
    credentialId: "AIP-C01",
    logo: "AWS",
    skills: ["Generative AI", "AWS AI Services", "Foundation Models", "LLM Applications"]
  },
  {
    title: "Artificial Intelligence & Data Analytics Internship",
    organization: "Edunet Foundation",
    issueDate: "November 2025",
    credentialId: "EDUNET-AI-2025",
    logo: "EF",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Analytics", "Model Development"]
  },
  {
    title: "British Airways – Data Science Job Simulation",
    organization: "Forage",
    issueDate: "July 2025",
    credentialId: "d5RLyXTRkMDLGayWb",
    logo: "BA",
    skills: ["Data Science", "Business Analytics", "Data Visualization", "Problem Solving"]
  },
  {
    title: "IBM SkillsBuild Data Analytics Certificate",
    organization: "IBM",
    issueDate: "July 2025",
    credentialId: "CREDLY-d5a61bd3-0e21-41b5-8c9b-a6cfb608f323",
    logo: "IBM",
    skills: ["Data Analytics", "Data Analysis", "Data Visualization"]
  },
  {
    title: "Data Science & Analytics",
    organization: "HP LIFE",
    issueDate: "July 2025",
    credentialId: "1448e1da-c201-4ad9-8ca9-7b9a61400922",
    logo: "HP",
    skills: ["Data Science", "Analytics", "Business Intelligence"]
  },
  {
    title: "Quantium – Data Analytics Job Simulation",
    organization: "Forage",
    issueDate: "June 2025",
    credentialId: "6rv8w3y3AGWALDPqT",
    logo: "Q",
    skills: ["Data Analytics", "Customer Insights", "Data Visualization"]
  }
];
