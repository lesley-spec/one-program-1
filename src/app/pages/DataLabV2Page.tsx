import { useNavigate } from "react-router";
import { TEMPLATES } from "../data-lab/templates";
import { DATA_MODELS } from "../data-lab/models";

const FONT = "'Sarabun', sans-serif";

export function DataLabV2Page() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full overflow-auto">
      {/* Page title */}
      <div className="px-[24px] pt-[24px] pb-[8px]">
        <div className="flex items-center gap-[10px]">
          <h1
            className="font-['Sarabun',sans-serif] text-foreground"
            style={{ fontSize: 26, fontWeight: 700, lineHeight: "30px" }}
          >
            Data Lab V2
          </h1>
          <span
            className="inline-flex items-center h-[22px] px-[8px]"
            style={{
              borderRadius: "var(--radius-button)",
              background: "var(--muted)",
              color: "var(--muted-foreground)",
              fontFamily: FONT,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Preview
          </span>
        </div>
        <span
          className="font-['Sarabun',sans-serif] text-muted-foreground"
          style={{ fontSize: "var(--text-base)", fontWeight: 400, lineHeight: 1.4 }}
        >
          Build multi-model workbooks. Each sheet is bound to one data model. Top-level
          filters apply where the model supports them and fall back gracefully where it
          doesn't.
        </span>
      </div>

      {/* Templates */}
      <div className="px-[24px] py-[16px]">
        <div className="mb-[12px] flex items-center justify-between">
          <span
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: 700,
              color: "var(--muted-foreground)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Start from a template
          </span>
          <button
            onClick={() => navigate("/reports/data-lab-v2/builder")}
            className="cursor-pointer transition-colors hover:underline"
            style={{
              fontFamily: FONT,
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--accent)",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            Start from scratch →
          </button>
        </div>

        <div className="grid gap-[16px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => navigate(`/reports/data-lab-v2/builder?template=${t.id}`)}
              className="text-left p-[16px] transition-all cursor-pointer hover:border-accent hover:shadow-md"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                className="mb-[6px]"
                style={{
                  fontFamily: FONT,
                  fontSize: "var(--text-base)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: "20px",
                }}
              >
                {t.label}
              </div>
              <div
                className="mb-[10px]"
                style={{
                  fontFamily: FONT,
                  fontSize: "var(--text-sm)",
                  fontWeight: 400,
                  color: "var(--muted-foreground)",
                  lineHeight: "18px",
                }}
              >
                {t.description}
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {t.sheets.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center h-[22px] px-[8px]"
                    style={{
                      background: "var(--muted)",
                      color: "var(--muted-foreground)",
                      borderRadius: "var(--radius-button)",
                      fontFamily: FONT,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {DATA_MODELS[s.modelId].label}
                  </span>
                ))}
              </div>
              <div
                className="mt-[10px]"
                style={{
                  fontFamily: FONT,
                  fontSize: 11,
                  fontWeight: 400,
                  color: "var(--muted-foreground)",
                  fontStyle: "italic",
                }}
              >
                {t.audience}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Available models */}
      <div className="px-[24px] py-[16px]">
        <div
          className="mb-[12px]"
          style={{
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            color: "var(--muted-foreground)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Available data models
        </div>
        <div className="grid gap-[12px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {Object.values(DATA_MODELS).map((m) => (
            <div
              key={m.id}
              className="p-[14px]"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                className="mb-[4px]"
                style={{
                  fontFamily: FONT,
                  fontSize: "var(--text-base)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                }}
              >
                {m.label}
              </div>
              <div
                className="mb-[8px]"
                style={{
                  fontFamily: FONT,
                  fontSize: "var(--text-sm)",
                  color: "var(--muted-foreground)",
                  lineHeight: "18px",
                }}
              >
                {m.description}
              </div>
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 11,
                  color: "var(--muted-foreground)",
                }}
              >
                {m.fields.length} fields · dates: {m.dateSemantics}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
