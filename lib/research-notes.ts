export type VerifiedArticle = {
  id: string;
  title: string;
  source: string;
  author: string;
  url: string;
  topic: string;
  description: string;
};

export const verifiedArticles: VerifiedArticle[] = [
  {
    id: "5-percent-problem",
    title: "The 5% Problem: Why Agent Failure Rate Isn't the Metric That Matters",
    source: "LinkedIn Article",
    author: "Ubaith Sherif",
    url: "https://www.linkedin.com/pulse/5-problem-why-agent-failure-rate-isnt-metric-matters-ubaith-sherif-lwfyc",
    topic: "AI Agents / System Reliability",
    description:
      "Examines why raw failure rates are insufficient for evaluating autonomous AI agents, highlighting error impact, compounding failure modes, and resilient agent architecture."
  },
  {
    id: "context-engineering",
    title: "Context Engineering: Replacing Prompt Engineering with a New Architecture",
    source: "LinkedIn Article",
    author: "Ubaith Sherif",
    url: "https://www.linkedin.com/pulse/context-engineering-replacing-prompt-new-architecture-ubaith-sherif-gg0rc",
    topic: "Applied GenAI / System Architecture",
    description:
      "Explores the architectural transition from prompt tweaking to structured context engineering, retrieval orchestration, and stateful agent coordination in production AI systems."
  }
];
