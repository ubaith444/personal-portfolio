import { Bot, BrainCircuit, Building2, GraduationCap, Search, Mail, Cpu, type LucideIcon } from "lucide-react";

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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "unscript-one",
    title: "Unscript One",
    eyebrow: "Enterprise AI Platform",
    industry: "Enterprise AI",
    status: "Founder Project",
    subtitle: "AI-Native Enterprise Workspace — RAG, Agents, MCP, Guardrails, and LLM Evaluation unified.",
    description:
      "Unscript One is an enterprise-grade AI workspace that unifies Retrieval-Augmented Generation, AI Agents, Model Context Protocol, Guardrails, and LLM Evaluation into a single production platform for document intelligence, repository analysis, research automation, and enterprise knowledge management.",
    icon: Building2,
    tags: ["Python", "FastAPI", "Next.js", "TypeScript", "LangGraph", "Google Gemini", "Qdrant", "PostgreSQL", "Supabase", "MCP", "RAG", "Ragas", "Docker", "Tailwind CSS"],
    problem:
      "Organizations building AI internally repeatedly hit the same wall: chatbots that hallucinate, no visibility into whether answers are grounded, no control over tool access, and no way to measure quality over time.",
    solution:
      "Unscript One delivers the core of the real enterprise AI problem: grounded answers via hybrid RAG, controlled tool access through MCP, measurable quality via automated Ragas evaluation, and full observability on one dashboard.",
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
      "Multi-session AI conversations with document ingestion and knowledge management."
    ],
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "LangGraph", "Google Gemini", "Qdrant", "PostgreSQL", "Supabase", "MCP", "Ragas", "Tailwind CSS", "Docker"],
    challenges: [
      "Building a production-ready hybrid retrieval pipeline balancing BM25 recall with vector search precision.",
      "Designing LangGraph agent flows that expose tool call traces transparently in the UI.",
      "Running Ragas evaluation automatically on every deploy without blocking the release pipeline.",
      "Keeping prompt injection and PII guardrails fast enough to run pre-generation without noticeable latency."
    ],
    metrics: [
      "Faithfulness and answer relevance scores measured automatically on 20 hand-written test queries.",
      "Public /status page showing uptime, request count, last eval timestamp, and current faithfulness score.",
      "Hybrid retrieval combining BM25 and vector search for higher recall than either alone.",
      "One real MCP tool call to GitHub — not a mock."
    ],
    impact: "Proves that a single builder can ship the core of what enterprise AI platform teams build: grounded answers, controlled tool access, and measurable quality, all visible on one dashboard.",
    timeline: "RAG pipeline, LangGraph agents, MCP integration, guardrails, Ragas eval loop, Next.js workspace, status page.",
    github: "https://github.com/ubaith444/unscript-one",
    demo: "mailto:ubaithsherif22@gmail.com?subject=Unscript%20One%20Demo",
    featured: true,
    roadmap: [
      "Add output-side guardrails: hallucination detection and sensitive data masking.",
      "Introduce a second agent and basic multi-agent handoff via LangGraph.",
      "Expand evaluation coverage with DeepEval and LangSmith integration."
    ]
  },
  {
    slug: "insight-ai-enterprise",
    title: "InsightAI Enterprise",
    eyebrow: "Decision Intelligence",
    industry: "Enterprise Analytics",
    status: "Production System",
    subtitle: "Multi-Agent Decision Intelligence Platform with real-time analytics, semantic search, and AI-powered business insights.",
    description:
      "A production-grade Enterprise Multi-Agent Decision Intelligence Platform built with Next.js, FastAPI, LangGraph, PostgreSQL, MongoDB, Redis, and OpenAI. Delivers real-time analytics, AI-powered business insights, ETL pipelines, semantic search, executive reporting, dashboards, and secure enterprise workflows.",
    icon: BrainCircuit,
    tags: ["Python", "FastAPI", "LangGraph", "Next.js", "PostgreSQL", "MongoDB", "Redis", "OpenAI"],
    problem:
      "Enterprise teams need faster analytical answers with governed, explainable query flows rather than opaque chatbot responses.",
    solution:
      "Multi-agent decision intelligence that understands intent, maps schema, generates validated queries, renders visual output, and explains results in plain language.",
    architecture: [
      "LangGraph multi-agent orchestration for planning, retrieval, query generation, and reporting.",
      "FastAPI services with ETL pipeline integration and semantic search via vector embeddings.",
      "Next.js dashboard with real-time analytics, executive report generation, and AI-powered workflows.",
      "PostgreSQL + MongoDB + Redis for durable data, document storage, and high-performance caching."
    ],
    architecturePreview: ["Multi-agent orchestration", "Semantic search pipeline", "Real-time analytics"],
    features: [
      "Multi-agent orchestration with planning and delegation across specialized analysis agents.",
      "Natural language to governed query generation with schema awareness.",
      "Real-time dashboards with AI-generated executive summaries.",
      "ETL pipeline integration with semantic search across business documents.",
      "Secure enterprise workflows with role-based access and audit trails."
    ],
    stack: ["Python", "FastAPI", "LangGraph", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "OpenAI", "Docker"],
    challenges: [
      "Constraining multi-agent query generation to known schema and allowed operations.",
      "Keeping semantic search results explainable rather than opaque.",
      "Managing real-time analytics updates without blocking agent workflows."
    ],
    metrics: [
      "Designed for traceable multi-agent question-to-query workflows.",
      "Prioritizes governed analytics over unrestricted chatbot behavior.",
      "Supports evaluation on query validity and answer usefulness."
    ],
    impact: "Makes enterprise analytics faster without hiding query logic, schema constraints, or model uncertainty.",
    timeline: "Schema grounding, multi-agent flow, dashboard UX, ETL pipelines, report generation.",
    github: "https://github.com/ubaith444/InsightAI-Enterprise-Decision-Intelligence",
    roadmap: [
      "Add dataset connectors and permission-aware semantic layers.",
      "Introduce query evaluation test sets.",
      "Build reusable executive report templates."
    ]
  },
  {
    slug: "multi-agent-business-automation-platform",
    title: "Multi-Agent Business Automation",
    eyebrow: "Workflow Automation",
    industry: "Business Operations",
    status: "Flagship System",
    subtitle: "Human-reviewed automation for sales, support, and reporting with approval gates and full auditability.",
    description:
      "A full-stack workflow platform built around human approval gates, secure delivery tracking, AI operations observability, audit trails, role-based access, webhook security, and business communication channels.",
    icon: Bot,
    tags: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "Next.js", "Docker", "TypeScript"],
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
    stack: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "Next.js", "TypeScript", "OpenAI", "Claude", "JWT", "Docker", "Playwright"],
    challenges: [
      "Designing agent flows that can pause cleanly for human approval.",
      "Separating product-visible audit logs from low-level debug traces.",
      "Keeping webhook and communication events idempotent under retry conditions."
    ],
    metrics: [
      "Engineering patterns: RBAC, approvals, audit logs, signed webhooks.",
      "Designed for measurable workflow cycle time, retry rate, and review latency."
    ],
    impact: "Shows judgment around approvals, observability, security boundaries, and full-stack orchestration.",
    timeline: "System design, API contracts, orchestration, product console, release hardening.",
    github: "https://github.com/ubaith444/Multi-Agent-Business-Automation-Platform",
    roadmap: [
      "Add per-tool cost accounting and prompt/version lineage.",
      "Introduce organization-level policy controls for agent autonomy.",
      "Ship reusable workflow templates for CRM, reporting, and operations."
    ]
  },
  {
    slug: "ai-company-research-assistant",
    title: "AI Company Research Assistant",
    eyebrow: "Research Automation",
    industry: "Business Intelligence",
    status: "Live",
    subtitle: "AI-powered deep research on companies using web search, site crawling, PDF generation, and Discord integration.",
    description:
      "An AI-powered Company Research Assistant that combines web search, website crawling, AI synthesis, PDF report generation, and Discord integration to deliver deep company intelligence from a single query.",
    icon: Search,
    tags: ["TypeScript", "Next.js", "OpenRouter", "Serper.dev", "Web Crawling", "PDF Generation", "Discord"],
    problem:
      "Manual company research is slow, fragmented across sources, and difficult to share. Teams need structured, AI-synthesized research reports fast.",
    solution:
      "A single-query research pipeline that searches the web, crawls relevant pages, synthesizes findings with an LLM, generates a structured PDF, and delivers it to Discord.",
    architecture: [
      "Next.js web interface with query input and real-time research progress.",
      "Web search via Serper.dev API with intelligent source selection.",
      "Website crawling and content extraction for deep-dive research.",
      "LLM synthesis (OpenRouter) to structure findings into actionable intelligence.",
      "Automated PDF generation and Discord webhook delivery."
    ],
    architecturePreview: ["Web search + crawl", "LLM synthesis", "PDF + Discord delivery"],
    features: [
      "Single-query company research with multi-source web aggregation.",
      "AI-synthesized structured reports with key findings.",
      "Automated PDF generation for offline sharing.",
      "Discord integration for team-wide report delivery."
    ],
    stack: ["TypeScript", "Next.js", "OpenRouter", "Serper.dev", "Discord Webhooks"],
    challenges: [
      "Handling diverse website structures during crawling without breaking the pipeline.",
      "Keeping synthesis quality consistent across wildly different source content.",
      "Generating professional PDF formatting from dynamic AI output."
    ],
    metrics: [],
    impact: "Reduces company research from hours to minutes with structured, shareable AI-generated reports.",
    timeline: "Search pipeline, crawler, LLM synthesis, PDF generation, Discord delivery.",
    github: "https://github.com/ubaith444/ai-company-research-assistant",
    demo: "https://ai-company-research-assistant-blue.vercel.app",
    roadmap: [
      "Add competitor comparison mode.",
      "Support scheduled research jobs.",
      "Integrate with Slack and Notion."
    ]
  },
  {
    slug: "auto-email-support-ticket-categorizer",
    title: "Email Support Ticket Categorizer",
    eyebrow: "NLP / ML",
    industry: "Customer Operations",
    status: "Open Source",
    subtitle: "NLP-based support ticket categorization using TF-IDF, Linear SVM, confidence scoring, and priority tagging.",
    description:
      "A lightweight NLP-based support ticket categorization system using TF-IDF and Linear SVM with confidence scoring, priority tagging, and a Streamlit demo. Designed for fast, reliable ticket routing without large model overhead.",
    icon: Mail,
    tags: ["Python", "scikit-learn", "TF-IDF", "Linear SVM", "Streamlit", "NLP"],
    problem:
      "Support teams spend significant time manually triaging and routing incoming tickets, especially under high volume.",
    solution:
      "A trained TF-IDF + Linear SVM pipeline that categorizes incoming tickets, assigns confidence scores, tags priority, and routes automatically — fast enough to run at inbox-level throughput.",
    architecture: [
      "TF-IDF vectorization of email/ticket text for feature extraction.",
      "Linear SVM classifier trained on labeled support ticket datasets.",
      "Confidence scoring with fallback routing for low-confidence predictions.",
      "Priority tagging based on category and keyword heuristics.",
      "Streamlit demo for live categorization testing."
    ],
    architecturePreview: ["TF-IDF vectorization", "SVM classification", "Confidence scoring"],
    features: [
      "Multi-class ticket categorization with confidence thresholds.",
      "Priority tagging (low/medium/high) based on predicted category.",
      "Streamlit interface for interactive demo and testing.",
      "Lightweight pipeline — no GPU or large model required."
    ],
    stack: ["Python", "scikit-learn", "TF-IDF", "Linear SVM", "Streamlit", "pandas"],
    challenges: [
      "Handling imbalanced ticket categories in training data.",
      "Maintaining accuracy at category boundaries where tickets overlap multiple domains.",
      "Designing a useful confidence fallback for ambiguous inputs."
    ],
    metrics: [],
    impact: "Demonstrates applied NLP and classical ML engineering for production-friendly support automation.",
    timeline: "Data pipeline, vectorization, SVM training, confidence calibration, Streamlit demo.",
    github: "https://github.com/ubaith444/auto-email-support-ticket-categorizer",
    roadmap: [
      "Add fine-tuned BERT variant for improved boundary cases.",
      "Build REST API wrapper for integration with email clients.",
      "Add active learning loop for continuous improvement."
    ]
  },
  {
    slug: "insightai-agent",
    title: "InsightAI Analytics Agent",
    eyebrow: "Natural Language Analytics",
    industry: "Business Intelligence",
    status: "Concept",
    subtitle: "Ask questions over business data and review the query, chart, and explanation before acting.",
    description:
      "A natural language analytics concept for turning business questions into governed queries, generated charts, and readable explanations with full transparency into the query generation process.",
    icon: BrainCircuit,
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "OpenAI", "RAG"],
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
      "Natural language question input with schema-grounded generation.",
      "Generated SQL with reviewable query preview before execution.",
      "Chart recommendations and short summaries.",
      "Dataset-aware constraints and prompt templates."
    ],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "OpenAI", "Vector Databases", "RAG"],
    challenges: [
      "Constraining query generation to known schema and allowed operations.",
      "Making generated insights explainable instead of magical.",
      "Designing the product for analysts and non-technical operators."
    ],
    metrics: [],
    impact: "Makes analytics faster without hiding query logic, schema constraints, or model uncertainty.",
    timeline: "Schema grounding, query flow, dashboard UX, report generation.",
    github: "https://github.com/Ubaith444",
    roadmap: [
      "Add dataset connectors and permission-aware semantic layers.",
      "Introduce query evaluation test sets.",
      "Build reusable executive report templates."
    ]
  },
  {
    slug: "ai-teacher-robot",
    title: "AI Teacher Robot",
    eyebrow: "Computer Vision + Voice AI",
    industry: "Education Technology",
    status: "Final Year Project",
    subtitle: "Classroom assistant with face recognition attendance, speech interaction, and RAG-powered knowledge retrieval.",
    description:
      "An AI-powered Intelligent Teacher Robot combining computer vision, voice interaction, FastAPI services, PostgreSQL, pgvector, WebSockets, and Raspberry Pi integration for classroom automation and personalized learning.",
    icon: GraduationCap,
    tags: ["Python", "FastAPI", "OpenCV", "InsightFace", "RAG", "Raspberry Pi", "STT", "TTS"],
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
    stack: ["Python", "FastAPI", "OpenCV", "InsightFace", "PostgreSQL", "pgvector", "ChromaDB", "STT", "TTS", "RAG", "Raspberry Pi", "React", "Vite"],
    challenges: [
      "Coordinating camera, voice, and retrieval workflows in one assistant.",
      "Keeping real-time classroom updates responsive.",
      "Designing assistance that supports teachers rather than replacing instruction."
    ],
    metrics: [],
    impact: "Connects computer vision and language AI to a real education workflow: attendance and assisted learning.",
    timeline: "Computer vision pipeline, FastAPI services, classroom dashboard, device integration.",
    github: "https://github.com/Ubaith444",
    roadmap: [
      "Add teacher-controlled knowledge base updates.",
      "Improve classroom analytics and attendance export flows.",
      "Introduce evaluation for answer quality and recognition reliability."
    ]
  },
  {
    slug: "self-writing-ai-platform",
    title: "Self-Writing AI Engineering Platform",
    eyebrow: "Meta AI / Code Generation",
    industry: "Developer Tools",
    status: "In Progress",
    subtitle: "AI engineering platform that automates code generation, testing, and documentation workflows.",
    description:
      "A Python-based AI engineering platform exploring automated code generation, self-improving workflows, and AI-assisted software engineering patterns.",
    icon: Cpu,
    tags: ["Python", "AI Agents", "Code Generation", "LLM", "Automation"],
    problem:
      "AI engineering workflows involve repetitive scaffolding, boilerplate generation, and documentation that can be automated with LLM assistance.",
    solution:
      "An AI-first engineering platform that uses agents to generate, test, and improve code artifacts automatically, reducing manual scaffolding overhead.",
    architecture: [
      "LLM-driven code generation with template and schema awareness.",
      "Automated test generation alongside produced code.",
      "Documentation synthesis from code structure and intent.",
      "Self-review loop for quality checking generated artifacts."
    ],
    architecturePreview: ["LLM code generation", "Automated testing", "Documentation synthesis"],
    features: [
      "Automated code scaffolding from high-level specifications.",
      "AI-generated tests alongside implementation code.",
      "Documentation auto-generation from code structure.",
      "Self-review and refinement loop."
    ],
    stack: ["Python", "LangGraph", "OpenAI", "FastAPI", "pytest"],
    challenges: [
      "Ensuring generated code is syntactically valid and logically coherent.",
      "Managing context window limits for larger code generation tasks.",
      "Designing useful self-review criteria that catch real issues."
    ],
    metrics: [],
    impact: "Explores the frontier of AI-assisted software engineering for automating routine development tasks.",
    timeline: "Code generation pipeline, test generation, documentation synthesis, self-review.",
    github: "https://github.com/ubaith444/Self-Writing-AI-Engineering-Platform",
    roadmap: [
      "Add multi-file project generation support.",
      "Integrate with CI/CD for automated testing of generated code.",
      "Support domain-specific templates for FastAPI and Next.js projects."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
