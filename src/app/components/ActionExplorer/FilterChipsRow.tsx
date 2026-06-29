/*
  FilterChipsRow — date range chip + value filter chips + add-filter popover.

  Reuses DateRangePicker for the date pill. Value chips use the same look
  as the rest of the app's pill controls (rounded, --border outline).
*/

import { useState } from "react";
import { DateRangePicker, type DateRange } from "../DateRangePicker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import type { ExplorerAction, ExplorerState } from "../../action-explorer/state";
import { distinctValues } from "../../action-explorer/mock-data";
import { fieldOf, type ColumnRef, refKey } from "../../action-explorer/schema";
import { ACCOUNTS, getAccount } from "../../action-explorer/accounts";

const FONT = "'Sarabun', sans-serif";

const FILTERABLE_FIELDS: { ref: ColumnRef; label: string }[] = [
  { ref: { listingId: "action_listing", fieldId: "partner"       }, label: "Partner"     },
  { ref: { listingId: "action_listing", fieldId: "status"        }, label: "Status"      },
  { ref: { listingId: "action_listing", fieldId: "event_type"    }, label: "Event Type"  },
  { ref: { listingId: "action_listing", fieldId: "promo_code"    }, label: "Promo Code"  },
  { ref: { listingId: "action_listing", fieldId: "referring_url" }, label: "Referring URL" },
  { ref: { listingId: "action_listing", fieldId: "sub_id1"       }, label: "SubId1"      },
];

interface Props {
  state: ExplorerState;
  dispatch: (a: ExplorerAction) => void;
}

export function FilterChipsRow({ state, dispatch }: Props) {
  return (
    <div
      className="flex items-center gap-[8px] px-[20px] py-[12px] flex-wrap"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--card)",
        flexShrink: 0,
      }}
    >
      {/* Program switcher */}
      <ProgramSwitcher state={state} dispatch={dispatch} />

      {/* Date range chip */}
      {state.dateRange ? (
        <DateRangePicker
          value={state.dateRange}
          onChange={(r: DateRange) => dispatch({ type: "SET_DATE_RANGE", range: r })}
        />
      ) : null}

      {/* Value filter chips */}
      {state.valueFilters.map((f) => {
        const fld = fieldOf(f.ref);
        return (
          <ValueFilterChip
            key={refKey(f.ref)}
            label={fld?.label || f.ref.fieldId}
            values={f.values}
            allOptions={distinctValues(f.ref)}
            onChange={(values) => {
              if (values.length === 0) {
                dispatch({ type: "REMOVE_FILTER", ref: f.ref });
              } else {
                dispatch({ type: "UPDATE_FILTER", ref: f.ref, values });
              }
            }}
            onRemove={() => dispatch({ type: "REMOVE_FILTER", ref: f.ref })}
          />
        );
      })}

      {/* Add filter */}
      <AddFilterPopover state={state} dispatch={dispatch} />
    </div>
  );
}

function ValueFilterChip({
  label, values, allOptions, onChange, onRemove,
}: {
  label: string;
  values: string[];
  allOptions: string[];
  onChange: (values: string[]) => void;
  onRemove: () => void;
}) {
  const summary =
    values.length === 0
      ? "Any"
      : values.length <= 2
        ? values.join(", ")
        : `${values[0]} +${values.length - 1}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-[6px] cursor-pointer transition-colors"
          style={{
            height: 28,
            padding: "0 4px 0 12px",
            borderRadius: "var(--radius-button)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            color: "var(--foreground)",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "var(--muted-foreground)", fontWeight: 600 }}>{label}:</span>
          <span>{summary}</span>
          <span
            role="button"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="flex items-center justify-center"
            style={{
              width: 18, height: 18,
              borderRadius: "var(--radius-button)",
              color: "var(--muted-foreground)",
            }}
          >
            ×
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={6} className="p-0" style={{ width: 240, background: "var(--card)" }}>
        <div className="max-h-[280px] overflow-auto p-[6px]">
          {allOptions.map((opt) => {
            const checked = values.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => {
                  if (checked) onChange(values.filter((v) => v !== opt));
                  else onChange([...values, opt]);
                }}
                className="w-full flex items-center gap-[8px] px-[8px] h-[30px] text-left cursor-pointer transition-colors"
                style={{
                  borderRadius: "var(--radius-sm)",
                  background: checked ? "var(--muted)" : "transparent",
                  fontFamily: FONT,
                  fontSize: "var(--text-sm)",
                  color: "var(--foreground)",
                }}
              >
                <span
                  style={{
                    width: 14, height: 14,
                    borderRadius: "var(--radius-checkbox)",
                    border: "1px solid var(--border)",
                    background: checked ? "var(--explorer-accent)" : "var(--background)",
                    color: "white",
                    fontSize: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {checked ? "✓" : ""}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function AddFilterPopover({ state, dispatch }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center justify-center cursor-pointer transition-colors"
          style={{
            width: 28, height: 28,
            borderRadius: "var(--radius-button)",
            background: "var(--card)",
            border: "1px dashed var(--border)",
            color: "var(--muted-foreground)",
            fontFamily: FONT,
            fontSize: 16,
            lineHeight: 1,
          }}
          title="Add filter"
        >
          +
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={6} className="p-[6px]" style={{ width: 200, background: "var(--card)" }}>
        {FILTERABLE_FIELDS
          .filter((f) => !state.valueFilters.some((vf) => vf.ref.fieldId === f.ref.fieldId && vf.ref.listingId === f.ref.listingId))
          .map((f) => (
            <button
              key={refKey(f.ref)}
              onClick={() => {
                dispatch({ type: "ADD_FILTER", filter: { ref: f.ref, values: [] } });
                setOpen(false);
              }}
              className="w-full text-left px-[10px] h-[32px] cursor-pointer transition-colors"
              style={{
                borderRadius: "var(--radius-sm)",
                fontFamily: FONT,
                fontSize: "var(--text-sm)",
                color: "var(--foreground)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {f.label}
            </button>
          ))}
      </PopoverContent>
    </Popover>
  );
}

function ProgramSwitcher({ state, dispatch }: Props) {
  const [open, setOpen] = useState(false);
  const account = getAccount(state.accountId);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-[8px] h-[32px] pl-[4px] pr-[10px] cursor-pointer transition-colors"
          style={{
            borderRadius: "var(--radius-button)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            fontFamily: FONT,
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
          title="Switch program"
        >
          <span
            className="flex items-center justify-center text-white"
            style={{
              width: 22,
              height: 22,
              borderRadius: "var(--radius-button)",
              background: account.accent,
              fontFamily: FONT,
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            {account.monogram}
          </span>
          <span>{account.name}</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 4 L5 7 L8 4" stroke="var(--foreground)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={6} className="p-[4px]" style={{ width: 220, background: "var(--card)" }}>
        <div
          style={{
            padding: "6px 10px 4px",
            fontFamily: FONT,
            fontSize: 10,
            fontWeight: 700,
            color: "var(--muted-foreground)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Switch program
        </div>
        {ACCOUNTS.map((a) => {
          const active = a.id === state.accountId;
          return (
            <button
              key={a.id}
              onClick={() => {
                dispatch({ type: "SET_ACCOUNT", accountId: a.id });
                setOpen(false);
              }}
              className="w-full flex items-center gap-[10px] px-[10px] h-[36px] cursor-pointer transition-colors text-left"
              style={{
                borderRadius: "var(--radius-sm)",
                background: active ? "var(--muted)" : "transparent",
                border: "none",
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--muted)"; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
            >
              <span
                className="flex items-center justify-center text-white"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "var(--radius-button)",
                  background: a.accent,
                  fontFamily: FONT,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                {a.monogram}
              </span>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: "var(--text-base)",
                  fontWeight: 500,
                  color: "var(--foreground)",
                }}
              >
                {a.name}
              </span>
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
