"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/faq";

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`faq2-item ${isOpen ? "faq2-open" : ""}`}>
            <button
              type="button"
              className="faq2-trigger"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              id={`faq-btn-${i}`}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="faq2-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="faq2-q">{faq.question}</span>
              <span className="faq2-icon" aria-hidden="true">+</span>
            </button>

            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="faq2-body"
              style={{ maxHeight: isOpen ? "600px" : "0px" }}
            >
              <p className="faq2-answer">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
