import { Bot, BrainCircuit, Building2, GraduationCap, type LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  industry: string;
  status: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  problem: string;
  solution: string;
  architecture: string[];
  architecturePreview: string[];
  features: string[];
  stack: string[];
  challenges: string[];
  metrics: string[];
  impact: string;
  timeline: string;
  github?: string;
  demo?: string;
  roadmap: string[];
};

export const projects: Project[] = [
  {
    slug: "multi-agent-business-automation-platform",
    title: "Multi-Agent Business Automation Platform",
    eyebrow: "Workflow automation",
    industry: "Business automation",
    status: "Flagship system",
    subtitle: "Human-reviewed automation for sales, support, and reporting operations.",
    description:
      "A full-stack workflow platform built around approvals, audit trails, role-based access, webhook security, and business communication channels.",
    icon: Bot,
    tags: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "RBAC", "Audit Logs"],
    problem:
      "Most automation demos skip the operational details teams actually need: permissions, retries, approvals, traceability, and safe handoffs.",
    solution:
      "The platform models work as reviewable workflows with approval checkpoints, secure webhooks, structured execution logs, and screens for monitoring each step.",
    architecture: [
      "Next.js product console for workflows, approvals, timelines, and monitoring.",
      "FastAPI service layer for authentication, RBAC, webhook validation, and API contracts.",
      "LangGraph orchestration for agent planning, tool calls, state transitions, and recovery paths.",
      "PostgreSQL for durable workflow records, Redis for queues/cache, and audit logs for traceability.",
      "Email and WhatsApp integration points for day-to-day communication loops."
    ],
    architecturePreview: ["LangGraph state machine", "FastAPI service layer", "PostgreSQL audit trail"],
    features: [
      "Workflow builder with agent assignment and approval gates.",
      "Role-aware dashboards for operators, reviewers, and admins.",
      "Immutable audit timeline for prompts, outputs, approvals, and external events.",
      "Webhook security with signed events and replay protection."
    ],
    stack: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "Next.js", "OpenAI", "Claude", "JWT", "Docker"],
    challenges: [
      "Designing agent flows that can pause cleanly for human approval.",
      "Separating product-visible audit logs from low-level debug traces.",
      "Keeping webhook and communication events idempotent under retry conditions."
    ],
    metrics: [
      "Engineering patterns: RBAC, approvals, audit logs, signed webhooks.",
      "Designed for measurable workflow cycle time, retry rate, and review latency.",
      "Built as a recruiter-facing proof of engineering depth."
    ],
    impact: "Shows judgment around approvals, observability, security boundaries, and full-stack orchestration.",
    timeline: "System design, API contracts, orchestration, product console, release hardening.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=Multi-Agent%20Automation%20Demo",
    roadmap: [
      "Add per-tool cost accounting and prompt/version lineage.",
      "Introduce organization-level policy controls for agent autonomy.",
      "Ship reusable workflow templates for CRM, reporting, and operations."
    ]
  },
  {
    slug: "unscript-one",
    title: "Unscript One — AI-Native Enterprise Workspace",
    eyebrow: "Enterprise AI platform",
    industry: "Enterprise AI",
    status: "Founder project",
    subtitle: "RAG, AI Agents, MCP, Guardrails, and LLM Evaluation unified into one production-oriented workspace.",
    description:
      "Unscript One is an enterprise-grade AI workspace that unifies Retrieval-Augmented Generation, AI Agents, Model Context Protocol, Guardrails, and LLM Evaluation into a single production platform for document intelligence, repository analysis, research automation, and enterprise knowledge management.",
    icon: Building2,
    tags: ["RAG", "LangGraph", "MCP", "Guardrails", "Ragas", "FastAPI", "Next.js"],
    problem:
      "Organizations building AI internally repeatedly hit the same wall: chatbots that hallucinate, no visibility into whether answers are grounded, no control over tool access, and no way to measure quality over time.",
    solution:
      "Unscript One delivers the smallest complete version of the real enterprise AI problem: grounded answers via hybrid RAG, controlled tool access through MCP, measurable quality via automated Ragas evaluation, and full observability on one dashboard.",
    architecture: [
      "Next.js streaming workspace with real-time AI responses, inline citations, and multi-session chat history.",
      "FastAPI backend services for document ingestion, retrieval, agent orchestration, and guardrail enforcement.",
      "LangGraph-powered Research and Coding Agents with GitHub MCP integration for repository-aware workflows.",
      "Hybrid retrieval pipeline: BM25 + vector search with reranking, backed by Qdrant and Supabase PostgreSQL.",
      "Pre-generation guardrail layer for prompt injection detection, PII filtering, and request validation.",
      "Automated Ragas evaluation loop running on every deploy, with metrics surfaced on a public /status page."
    ],
    architecturePreview: ["Hybrid RAG pipeline", "LangGraph agent + MCP", "Ragas eval loop"],
    features: [
      "Enterprise RAG with recursive chunking, hybrid retrieval, reranking, and citation-based responses.",
      "AI Research and Coding Agents powered by LangGraph with real GitHub MCP integration.",
      "Prompt injection and PII guardrails running pre-generation with visible pass/fail badges.",
      "Automated LLM evaluation using Ragas with faithfulness and answer relevance metrics.",
      "AI Observability Dashboard and public Service Health Monitoring at /status.",
      "Multi-session AI conversations with document ingestion and knowledge management.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "LangGraph", "Google Gemini", "Qdrant", "PostgreSQL", "Supabase", "MCP", "Ragas", "Tailwind CSS", "Docker", "GitHub"],
    challenges: [
      "Building a production-ready hybrid retrieval pipeline that balances BM25 recall with vector search precision.",
      "Designing LangGraph agent flows that expose tool call traces transparently in the UI.",
      "Running Ragas evaluation automatically on every deploy without blocking the release pipeline.",
      "Keeping prompt injection and PII guardrails fast enough to run pre-generation without adding noticeable latency."
    ],
    metrics: [
      "Faithfulness and answer relevance scores measured automatically on 20 hand-written test queries.",
      "Public /status page showing real uptime, request count, last eval timestamp, and current faithfulness score.",
      "Hybrid retrieval combining BM25 and vector search for higher recall than either alone.",
      "One real MCP tool call to GitHub — not a mock."
    ],
    impact: "Proves that a single builder can ship the core of what enterprise AI platform teams build: grounded answers, controlled tool access, and measurable quality, all visible on one dashboard.",
    timeline: "RAG pipeline, LangGraph agents, MCP integration, guardrails, Ragas eval loop, Next.js workspace, status page.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=Unscript%20One%20Demo",
    roadmap: [
      "Add output-side guardrails: hallucination detection and sensitive data masking.",
      "Introduce a second agent and basic multi-agent handoff via LangGraph.",
      "Expand evaluation coverage with DeepEval and LangSmith integration."
    ]
  },
  {
    slug: "insightai-agent",
    title: "InsightAI Agent",
    eyebrow: "Natural language analytics",
    industry: "Business intelligence",
    status: "Flagship concept",
    subtitle: "Ask questions over business data and review the query, chart, and explanation.",
    description:
      "A natural language analytics concept for turning business questions into governed queries, generated charts, and readable explanations.",
    icon: BrainCircuit,
    tags: ["RAG", "Analytics", "SQL", "Dashboards"],
    problem:
      "Teams need faster analytical answers, but raw text-to-SQL flows can be unsafe, opaque, and hard to trust without schema awareness and reviewable reasoning.",
    solution:
      "InsightAI Agent uses a governed analytics flow: understand intent, map schema, generate a checked query, render visual output, and explain the result in plain language.",
    architecture: [
      "Question intake and schema retrieval for grounded query generation.",
      "Query validation layer before execution.",
      "Chart and narrative generation for decision-ready output.",
      "History and audit views for repeated analysis and review."
    ],
    architecturePreview: ["Schema retrieval", "Safe SQL generation", "Insight narrative"],
    features: [
      "Natural language question input.",
      "Generated SQL with reviewable query preview.",
      "Chart recommendations and short summaries.",
      "Dataset-aware constraints and prompt templates."
    ],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "OpenAI", "Vector Databases", "RAG"],
    challenges: [
      "Constraining query generation to known schema and allowed operations.",
      "Making generated insights explainable instead of magical.",
      "Designing the product for analysts and non-technical operators."
    ],
    metrics: [
      "Designed for traceable question-to-query workflows.",
      "Prioritizes governed analytics over unrestricted chatbot behavior.",
      "Supports future evaluation on query validity and answer usefulness."
    ],
    impact: "Makes analytics faster without hiding query logic, schema constraints, or model uncertainty.",
    timeline: "Schema grounding, query flow, dashboard UX, report generation.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=InsightAI%20Agent%20Demo",
    roadmap: [
      "Add dataset connectors and permission-aware semantic layers.",
      "Introduce query evaluation test sets.",
      "Build reusable executive report templates."
    ]
  },
  {
    slug: "ai-teacher-robot",
    title: "AI Teacher Robot",
    eyebrow: "Robotics and classroom AI",
    industry: "Education technology",
    status: "Flagship resume project",
    subtitle: "Classroom assistant with face recognition attendance, speech interaction, and knowledge retrieval.",
    description:
      "A classroom assistant combining computer vision, voice interaction, FastAPI services, PostgreSQL, pgvector, WebSockets, and Raspberry Pi integration.",
    icon: GraduationCap,
    tags: ["OpenCV", "InsightFace", "RAG", "Raspberry Pi", "STT", "TTS"],
    problem:
      "Classroom support tasks such as attendance, repeated explanations, and student query handling can consume time that teachers need for instruction.",
    solution:
      "The teacher robot uses face recognition, speech-to-text, text-to-speech, and retrieval-augmented responses to support attendance and personalized learning assistance.",
    architecture: [
      "FastAPI backend for classroom workflows, WebSocket updates, and device integration.",
      "OpenCV and InsightFace pipeline for real-time face recognition attendance.",
      "PostgreSQL with pgvector for retrieval-backed learning content.",
      "STT, TTS, and NLP services for conversational classroom interaction.",
      "Raspberry Pi integration for edge-device behavior."
    ],
    architecturePreview: ["Camera recognition", "Voice interface", "RAG knowledge base"],
    features: [
      "Face recognition attendance workflow.",
      "Speech interaction through STT and TTS.",
      "Retrieval-Augmented Generation for learning support.",
      "Real-time classroom dashboard using WebSockets."
    ],
    stack: ["Python", "FastAPI", "OpenCV", "InsightFace", "PostgreSQL", "pgvector", "STT", "TTS", "RAG", "Raspberry Pi"],
    challenges: [
      "Coordinating camera, voice, and retrieval workflows in one assistant.",
      "Keeping real-time classroom updates responsive.",
      "Designing assistance that supports teachers rather than replacing instruction."
    ],
    metrics: [
      "Covers computer vision, speech systems, retrieval, and backend engineering.",
      "Built around practical classroom automation use cases.",
      "Demonstrates edge-device to backend integration."
    ],
    impact: "Connects computer vision and language AI to a real education workflow: attendance and assisted learning.",
    timeline: "Computer vision pipeline, FastAPI services, classroom dashboard, device integration.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=AI%20Teacher%20Robot%20Demo",
    roadmap: [
      "Add teacher-controlled knowledge base updates.",
      "Improve classroom analytics and attendance export flows.",
      "Introduce evaluation for answer quality and recognition reliability."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
