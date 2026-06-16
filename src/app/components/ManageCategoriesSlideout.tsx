import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-y0lxl6jnod";

/* ═══════════════════════════════════════════════════════════
   Types & Data
   ═══════════════════════════════════════════════════════════ */

interface Category {
  id: string;
  name: string;
  reportCount: number;
  selected: boolean;
}

const INITIAL_CATEGORIES: Category[] = [
  { id: "1", name: "Built", reportCount: 12, selected: false },
  { id: "2", name: "Custom", reportCount: 13, selected: false },
  { id: "3", name: "Performance", reportCount: 22, selected: false },
  { id: "4", name: "Listing", reportCount: 7, selected: false },
  { id: "5", name: "Finance", reportCount: 3, selected: false },
  { id: "6", name: "Beta", reportCount: 3, selected: false },
  { id: "7", name: "Admin", reportCount: 20, selected: false },
  { id: "8", name: "Compliance", reportCount: 5, selected: false },
  { id: "9", name: "Cross-Program", reportCount: 2, selected: false },
  { id: "10", name: "Unassigned", reportCount: 33, selected: false },
  { id: "11", name: "Optimize", reportCount: 14, selected: false },
];

/* ═══════════════════════════════════════════════════════════
   SVG Icons from Figma imports
   ═══════════════════════════════════════════════════════════ */

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12.0001 12" fill="none">
      <path
        clipRule="evenodd"
        d={svgPaths.p2d1a5700}
        fill="var(--foreground)"
        fillRule="evenodd"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 14.1765" fill="none">
      <path d="M0.5 0.5H14.5" stroke="var(--muted-foreground)" strokeLinecap="round" />
      <path d="M0.5 7.08827H14.5" stroke="var(--muted-foreground)" strokeLinecap="round" />
      <path d="M0.5 13.6765H14.5" stroke="var(--muted-foreground)" strokeLinecap="round" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M10.086 1.293a1 1 0 0 1 1.414 0l1.207 1.207a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-.464.263l-2.828.707a.5.5 0 0 1-.612-.612l.707-2.828a1 1 0 0 1 .263-.464l7.5-7.5ZM9.5 4.207 3.707 10l-.354 1.414L3 12.768l1.354-.354L10.793 6 9.5 4.207Zm1.793.793L12.5 3.793 10.207 1.5 9 2.707 11.293 5Z"
        fill="var(--muted-foreground)"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Checkbox Component
   ═══════════════════════════════════════════════════════════ */

function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      className="size-[16px] rounded-[var(--radius-checkbox)] flex items-center justify-center shrink-0 cursor-pointer"
      style={{
        borderWidth: checked ? 0 : "1px",
        borderStyle: checked ? "none" : "solid",
        borderColor: checked ? "transparent" : "var(--muted-foreground)",
        background: checked ? "var(--accent)" : "var(--card)",
      }}
      onClick={onChange}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   Inline Create Category Row
   ═══════════════════════════════════════════════════════════ */

function CreateCategoryRow({
  onSubmit,
  onCancel,
}: {
  onSubmit: (name: string) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && name.trim()) {
      onSubmit(name.trim());
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <div
      className="grid h-[54px] items-center"
      style={{
        gridTemplateColumns: "1fr auto auto auto",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "var(--muted)",
      }}
    >
      <div className="flex items-center px-[10px]">
        <input
          ref={inputRef}
          type="text"
          placeholder="Category name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-none outline-none font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
          style={{
            color: "var(--foreground)",
            fontWeight: "var(--font-weight-normal)",
          }}
        />
      </div>
      <div className="flex items-center px-[10px]">
        <p
          className="font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
          style={{ color: "var(--muted-foreground)" }}
        >
          0
        </p>
      </div>
      <div className="flex items-center px-[10px]">
        <button
          className="h-[28px] px-[10px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
          style={{
            background: "var(--button-primary)",
            color: "var(--button-primary-foreground)",
            fontWeight: "var(--font-weight-medium)",
          }}
          onClick={() => name.trim() && onSubmit(name.trim())}
        >
          Add
        </button>
      </div>
      <div className="flex items-center px-[10px]">
        <button
          className="h-[28px] px-[10px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
          style={{
            background: "var(--muted)",
            color: "var(--foreground)",
            fontWeight: "var(--font-weight-medium)",
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Create Category Modal
   ═══════════════════════════════════════════════════════════ */

function CreateCategoryModal({
  onSave,
  onCancel,
}: {
  onSave: (name: string) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Category name is required");
      return;
    }
    onSave(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <>
      {/* Modal backdrop */}
      <div
        className="fixed inset-0 z-[1100] transition-opacity duration-200"
        style={{ background: "rgba(0, 0, 0, 0.45)" }}
        onClick={onCancel}
      />

      {/* Modal panel */}
      <div
        className="fixed z-[1101] top-1/2 left-1/2 flex flex-col"
        style={{
          transform: "translate(-50%, -50%)",
          width: "min(480px, 90vw)",
          background: "var(--card)",
          borderRadius: "var(--radius)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "var(--border)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
          animation: "modalFadeIn 200ms ease-out forwards",
        }}
      >
        <style>{`
          @keyframes modalFadeIn {
            from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }
        `}</style>

        {/* Header */}
        <div
          className="flex items-center justify-between p-[24px] pb-[16px]"
          style={{
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "var(--border)",
          }}
        >
          <h3
            className="font-['Sarabun',sans-serif] text-[length:var(--text-lg)] leading-[24px]"
            style={{
              color: "var(--foreground)",
              fontWeight: 700,
            }}
          >
            Create Category
          </h3>
          <button
            className="size-[32px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer shrink-0"
            style={{ background: "var(--muted)" }}
            onClick={onCancel}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-[8px] p-[24px]">
          <label
            className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] leading-[16px]"
            style={{
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Category Name
          </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={handleKeyDown}
            className="h-[40px] px-[12px] w-full rounded-[var(--radius)] font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px] outline-none transition-colors"
            style={{
              background: "var(--input-background)",
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-normal)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: error ? "var(--negative)" : "var(--border)",
            }}
          />
          {error && (
            <p
              className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] leading-[16px]"
              style={{ color: "var(--negative)" }}
            >
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-end gap-[12px] p-[24px] pt-[16px]"
          style={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "var(--border)",
          }}
        >
          <button
            className="h-[40px] px-[24px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
            style={{
              background: "var(--muted)",
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="h-[40px] px-[24px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
            style={{
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   Edit Category Modal
   ═══════════════════════════════════════════════════════════ */

function EditCategoryModal({
  category,
  onSave,
  onCancel,
}: {
  category: Category;
  onSave: (id: string, newName: string) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(category.name);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Category name is required");
      return;
    }
    onSave(category.id, trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <>
      {/* Modal backdrop */}
      <div
        className="fixed inset-0 z-[1100] transition-opacity duration-200"
        style={{ background: "rgba(0, 0, 0, 0.45)" }}
        onClick={onCancel}
      />

      {/* Modal panel */}
      <div
        className="fixed z-[1101] top-1/2 left-1/2 flex flex-col"
        style={{
          transform: "translate(-50%, -50%)",
          width: "min(480px, 90vw)",
          background: "var(--card)",
          borderRadius: "var(--radius)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "var(--border)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
          animation: "modalFadeIn 200ms ease-out forwards",
        }}
      >
        <style>{`
          @keyframes modalFadeIn {
            from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }
        `}</style>

        {/* Header */}
        <div
          className="flex items-center justify-between p-[24px] pb-[16px]"
          style={{
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "var(--border)",
          }}
        >
          <h3
            className="font-['Sarabun',sans-serif] text-[length:var(--text-lg)] leading-[24px]"
            style={{
              color: "var(--foreground)",
              fontWeight: 700,
            }}
          >
            Edit Category
          </h3>
          <button
            className="size-[32px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer shrink-0"
            style={{ background: "var(--muted)" }}
            onClick={onCancel}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-[8px] p-[24px]">
          <label
            className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] leading-[16px]"
            style={{
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Category Name
          </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={handleKeyDown}
            className="h-[40px] px-[12px] w-full rounded-[var(--radius)] font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px] outline-none transition-colors"
            style={{
              background: "var(--input-background)",
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-normal)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: error ? "var(--negative)" : "var(--border)",
            }}
          />
          {error && (
            <p
              className="font-['Sarabun',sans-serif] text-[length:var(--text-sm)] leading-[16px]"
              style={{ color: "var(--negative)" }}
            >
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-end gap-[12px] p-[24px] pt-[16px]"
          style={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "var(--border)",
          }}
        >
          <button
            className="h-[40px] px-[24px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
            style={{
              background: "var(--muted)",
              color: "var(--foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="h-[40px] px-[24px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[length:var(--text-base)] leading-[18px]"
            style={{
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Slideout Component
   ═══════════════════════════════════════════════════════════ */

interface ManageCategoriesSlideoutProps {
  open: boolean;
  onClose: () => void;
}

export function ManageCategoriesSlideout({
  open,
  onClose,
}: ManageCategoriesSlideoutProps) {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleSelect = (id: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
    );
  };

  const handleCreateCategory = (name: string) => {
    const newCat: Category = {
      id: `new-${Date.now()}`,
      name,
      reportCount: 0,
      selected: false,
    };
    setCategories((prev) => [...prev, newCat]);
    setIsCreating(false);
    setShowCreateModal(false);
  };

  const handleEditCategory = (id: string, newName: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name: newName } : c))
    );
    setShowEditModal(false);
  };

  const handleSave = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 z-[998] transition-opacity duration-300"
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
        onClick={onClose}
      />

      {/* Slideout panel */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 bottom-0 z-[999] flex flex-col overflow-hidden"
        style={{
          width: "min(520px, 90vw)",
          background: "var(--card)",
          boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.12)",
          animation: "slideInFromRight 300ms ease-out forwards",
        }}
      >
        {/* Inline keyframes */}
        <style>{`
          @keyframes slideInFromRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* ─── Top bar ─── */}
        <div
          className="shrink-0 flex flex-col gap-[16px] p-[32px]"
          style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "var(--border)" }}
        >
          {/* Close button */}
          <button
            className="size-[40px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer shrink-0"
            style={{ background: "var(--muted)" }}
            onClick={onClose}
          >
            <CloseIcon />
          </button>

          {/* Title */}
          <h2
            className="font-['Sarabun',sans-serif] text-[length:var(--text-xl)] leading-[30px] capitalize"
            style={{
              color: "var(--foreground)",
              fontWeight: 700,
            }}
          >
            Manage Categories
          </h2>
        </div>

        {/* ─── Scrollable table body ─── */}
        <div className="flex-1 overflow-y-auto p-[32px] pt-[24px]">
          <div
            className="rounded-[var(--radius)] overflow-hidden"
            style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--border)" }}
          >
            {/* Table header */}
            <div
              className="grid h-[49px] items-center"
              style={{
                gridTemplateColumns: "32px 1fr 100px 32px 32px",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "var(--border)",
                background: "var(--card)",
              }}
            >
              {/* Empty checkbox column header */}
              <div />

              {/* Category Name */}
              <div className="flex items-center px-[10px]">
                <p
                  className="font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
                  style={{
                    color: "var(--foreground)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Category Name
                </p>
              </div>

              {/* # Reports */}
              <div className="flex items-center px-[10px]">
                <p
                  className="font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
                  style={{
                    color: "var(--foreground)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  # Reports
                </p>
              </div>

              {/* Create Category button - spans remaining cols */}
              <div className="col-span-2 flex items-center justify-end pr-[10px]">
                <button
                  className="h-[32px] px-[12px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[12px] leading-[15px] whitespace-nowrap"
                  style={{
                    background: "var(--muted)",
                    color: "var(--foreground)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                  onClick={() => setShowCreateModal(true)}
                >
                  Add Category
                </button>
              </div>
            </div>

            {/* Inline create row */}
            {isCreating && (
              <CreateCategoryRow
                onSubmit={handleCreateCategory}
                onCancel={() => setIsCreating(false)}
              />
            )}

            {/* Category rows */}
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="grid h-[54px] items-center group/row border-b border-b-[color:var(--border)]"
                style={{
                  gridTemplateColumns: "32px 1fr 100px 32px 32px",
                }}
              >
                {/* Checkbox */}
                <div className="flex items-center justify-center px-[8px]">
                  <Checkbox
                    checked={cat.selected}
                    onChange={() => toggleSelect(cat.id)}
                  />
                </div>

                {/* Category Name */}
                <div className="flex items-center px-[10px] overflow-hidden">
                  <p
                    className="font-['Sarabun',sans-serif] text-[12px] leading-[15px] overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{
                      color: "var(--foreground)",
                      fontWeight: "var(--font-weight-normal)",
                    }}
                  >
                    {cat.name}
                  </p>
                </div>

                {/* # Reports */}
                <div className="flex items-center px-[10px]">
                  <p
                    className="font-['Sarabun',sans-serif] text-[12px] leading-[15px]"
                    style={{
                      color: "var(--foreground)",
                      fontWeight: "var(--font-weight-normal)",
                    }}
                  >
                    {cat.reportCount}
                  </p>
                </div>

                {/* Edit (pencil) button */}
                <div className="flex items-center justify-center">
                  {cat.id.startsWith("new-") && (
                    <button
                      className="size-[24px] flex items-center justify-center cursor-pointer rounded-[var(--radius-checkbox)] opacity-0 group-hover/row:opacity-100 transition-opacity"
                      style={{ background: "transparent" }}
                      onClick={() => {
                        setEditingCategory(cat);
                        setShowEditModal(true);
                      }}
                      title="Edit category"
                    >
                      <PencilIcon />
                    </button>
                  )}
                </div>

                {/* Drag handle (hamburger) */}
                <div className="flex items-center justify-center cursor-grab">
                  <HamburgerIcon />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Footer with Save button ─── */}
        <div
          className="shrink-0 p-[32px] pt-[16px]"
          style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "var(--border)" }}
        >
          <button
            className="h-[40px] min-w-[65px] px-[24px] rounded-[var(--radius-button)] flex items-center justify-center cursor-pointer font-['Sarabun',sans-serif] text-[14px] leading-[18px]"
            style={{
              background: "var(--button-primary)",
              color: "var(--button-primary-foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>

      {/* Create Category Modal */}
      {showCreateModal && (
        <CreateCategoryModal
          onSave={handleCreateCategory}
          onCancel={() => setShowCreateModal(false)}
        />
      )}

      {/* Edit Category Modal */}
      {showEditModal && editingCategory && (
        <EditCategoryModal
          category={editingCategory}
          onSave={handleEditCategory}
          onCancel={() => setShowEditModal(false)}
        />
      )}
    </>
  );
}