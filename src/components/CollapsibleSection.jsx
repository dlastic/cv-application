import { useId, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="collapsible-section">
      <button
        type="button"
        className="collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="collapsible-title">{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      <div
        id={contentId}
        className={`collapsible-content ${isOpen ? "open" : "closed"}`}
      >
        <div className="collapsible-inner">{children}</div>
      </div>
    </div>
  );
}
