const coverThemes: Record<string, { label: string; nodes: string[]; codeSnippet: string }> = {
  agents: {
    label: "AGENT_EXECUTION_GRAPH",
    nodes: ["State", "Planner", "Tools", "Human_Review"],
    codeSnippet: "graph.add_node('review', approval_step)"
  },
  workflow: {
    label: "LANGGRAPH_STATE_MACHINE",
    nodes: ["Input", "Node", "Edge", "Checkpoint"],
    codeSnippet: "checkpointer = MemorySaver()"
  },
  rag: {
    label: "HYBRID_RETRIEVAL_PIPELINE",
    nodes: ["BM25", "Qdrant_Vector", "Reranker", "Context"],
    codeSnippet: "score = 0.5 * bm25 + 0.5 * dense"
  },
  fastapi: {
    label: "API_SERVICE_CONTRACT",
    nodes: ["Pydantic", "FastAPI", "Queue", "Stream"],
    codeSnippet: "async def generate(req: Request):"
  },
  systems: {
    label: "SYSTEM_ARCHITECTURE",
    nodes: ["Gateway", "Workers", "PostgreSQL", "Ragas"],
    codeSnippet: "eval_score = ragas.evaluate(dataset)"
  },
  enterprise: {
    label: "AUTOMATION_PLATFORM",
    nodes: ["Webhook", "RBAC", "Audit_Trail", "Report"],
    codeSnippet: "verify_signature(req.headers)"
  }
};

export function BlogCover({ type }: { type: string }) {
  const theme = coverThemes[type] ?? coverThemes.agents;

  return (
    <div
      aria-label={`${theme.label} architecture diagram`}
      className="relative aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-slate-900 p-5 text-slate-100 dark:border-zinc-800"
      role="img"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="font-mono text-xs text-blue-400">{"// "}{theme.label}</span>
          <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">SPEC_DIAGRAM</span>
        </div>

        <div className="my-4 grid grid-cols-2 gap-4">
          <div className="space-y-2 rounded border border-slate-800 bg-slate-950 p-3">
            <p className="font-mono text-[11px] text-slate-400">{"// WORKFLOW_NODES"}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {theme.nodes.map((node) => (
                <span key={node} className="rounded border border-slate-700 bg-slate-900 px-2 py-1 font-mono text-[11px] text-slate-200">
                  {node}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded border border-slate-800 bg-slate-950 p-3">
            <p className="font-mono text-[11px] text-slate-400">{"// CODE_SAMPLE"}</p>
            <pre className="overflow-x-auto font-mono text-[11px] text-emerald-400">
              <code>{theme.codeSnippet}</code>
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>STATUS: EVALUATED</span>
          <span>COMPILATION: OK</span>
        </div>
      </div>
    </div>
  );
}
