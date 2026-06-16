import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown, X } from "lucide-react";
import svgPaths from "../../imports/svg-4mdkeb7ycr";
import { Button } from "./ui/button";

interface AISummaryItem {
  title: string;
  content: string;
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else if (currentIndex === 0 && delay === 0) {
      setCurrentIndex(1);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayedText}</span>;
}

interface ContractViewProps {
  onNavigate: (page: "dashboard" | "contracts") => void;
}

export function ContractView() {
  const navigate = useNavigate();
  const [isAISummaryExpanded, setIsAISummaryExpanded] = useState(true);
  const [aiSummary, setAiSummary] = useState<AISummaryItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const generateSummary = () => {
      setTimeout(() => {
        setAiSummary([
          {
            title: "Commission Rate Reduction",
            content: "The payout rate for Online Sales is decreasing from 6% to 2% of item sale amount across all payout groups, including both Refurbished Products and all other qualified items. This represents a 67% reduction in partner commissions."
          },
          {
            title: "New Customer Incentive Retained",
            content: "The existing payout adjustment for new customers remains in effect — partners will continue to receive a 10% increase on payouts when the referred customer status is new."
          },
          {
            title: "Referral & Locking Policies Unchanged",
            content: "The 7-day referral window with last-click credit policy remains unchanged. Action locking continues at 10 days after the end of the month actions are tracked, with payouts scheduled 5 days after lock."
          },
          {
            title: "Change Notification & Reversal Terms",
            content: "The contract can be changed or cancelled with only 1 day notification to the partner. The reversal policy remains advertiser-governed with a max reversal percentage of 100%."
          },
          {
            title: "Effective Date",
            content: "All changes take effect April 01, 2026 under the new \"2% Group NEW April 2025\" payout group and will apply on an ongoing basis in USD currency."
          }
        ]);
        setIsGenerating(false);
        setShowTypewriter(true);
      }, 1500);
    };

    generateSummary();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 
              className="text-foreground font-['Sarabun',sans-serif]"
              style={{
                fontWeight: 'bold',
                fontSize: '26px',
                lineHeight: '30px'
              }}
            >
              CNN Digital
            </h1>
            <p className="text-muted-foreground">Public Terms · Mar 29, 2024 00:00 EDT · Onwards</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">Actions</Button>
            <button
              className="size-8 rounded-[--radius-button] hover:bg-muted flex items-center justify-center transition-colors"
              onClick={() => navigate("/contracts")}
            >
              <X className="size-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* AI Summary */}
        <div className="mb-6 border border-ai-border rounded-lg bg-ai-background overflow-hidden">
          <button
            className="w-full flex items-center justify-between hover:brightness-95 transition-all cursor-pointer font-['Sarabun',sans-serif]"
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius) var(--radius) 0 0',
              background: 'linear-gradient(135deg, var(--ai-background) 0%, color-mix(in srgb, var(--ai-accent) 15%, var(--ai-background)) 100%)',
              borderBottom: '1px solid var(--ai-border)',
            }}
            onClick={() => setIsAISummaryExpanded(!isAISummaryExpanded)}
          >
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  background: 'color-mix(in srgb, var(--ai-accent) 20%, transparent)',
                }}
              >
                <svg className="size-4" fill="none" viewBox="0 0 16 7" style={{ color: 'var(--ai-accent)' }}>
                  <path d={svgPaths.p24604180} fill="currentColor" />
                </svg>
              </div>
              <span
                className="font-['Sarabun',sans-serif]"
                style={{
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--ai-foreground)',
                  fontSize: 'var(--text-base)',
                  lineHeight: '18px',
                }}
              >
                AI Summary of upcoming changes for CNN Digital
              </span>
            </div>
            <ChevronDown
              className={`transition-transform ${
                isAISummaryExpanded ? 'rotate-180' : ''
              }`}
              style={{
                width: '16px',
                height: '16px',
                color: 'var(--ai-accent)',
              }}
            />
          </button>

          {isAISummaryExpanded && (
            <div className="px-4 pb-4">
              {isGenerating ? (
                <div className="flex items-center gap-2 text-ai-foreground">
                  <div className="size-4 border-2 border-ai-accent border-t-transparent rounded-full animate-spin" />
                  <span>Generating AI summary...</span>
                </div>
              ) : (
                <ul className="space-y-3">
                  {aiSummary.map((item, index) => {
                    const previousItemsLength = aiSummary
                      .slice(0, index)
                      .reduce((sum, prevItem) => sum + prevItem.content.length, 0);
                    const delay = previousItemsLength * 20;

                    return (
                      <li key={index} className="flex gap-2">
                        <span className="text-ai-foreground mt-1.5 size-1.5 rounded-full bg-ai-accent flex-shrink-0" />
                        <div>
                          <span className="font-[var(--font-weight-medium)] text-ai-foreground">{item.title}: </span>
                          <span className="text-ai-foreground">
                            {showTypewriter ? (
                              <TypewriterText text={item.content} delay={delay} />
                            ) : (
                              item.content
                            )}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {!isGenerating && (
                <button
                  className="mt-3 text-ai-accent hover:underline font-[var(--font-weight-medium)]"
                  onClick={() => setIsAISummaryExpanded(false)}
                >
                  Show less
                </button>
              )}
            </div>
          )}
        </div>

        {/* Contract details */}
        <div className="space-y-6">
          {/* Group header */}
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">2% Group NEW April 2025</h2>
            <span className="text-sm text-muted-foreground">Apr 01, 2026 00:00 PDT · ongoing</span>
          </div>

          {/* Online Sale badge */}
          <div className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
            <span className="text-sm font-semibold text-foreground">Online Sale:</span>
            <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-semibold rounded">6%</span>
            <span className="px-2 py-0.5 bg-[#d4f4dd] dark:bg-[#4caf5033] text-[#4caf50] dark:text-[#66bb6a] text-xs font-semibold rounded">2%</span>
            <span className="text-sm text-foreground">USD</span>
            <button className="ml-auto">
              <ChevronDown className="size-4 text-foreground" />
            </button>
          </div>

          {/* Payout Details */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Payout Details</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Payout Groups</h4>
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Rank</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Condition</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-foreground">Payout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 text-sm text-foreground">1</td>
                        <td className="px-4 py-3 text-sm text-foreground">
                          List for Item SKU is <span className="text-accent">Refurbished Products</span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex flex-col items-end gap-1">
                            <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
                              6% of item sale amount
                            </span>
                            <span className="px-2 py-0.5 bg-[#d4f4dd] dark:bg-[#4caf5033] text-[#4caf50] dark:text-[#66bb6a] text-xs font-semibold rounded">
                              2% of item sale amount
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-foreground"></td>
                        <td className="px-4 py-3 text-sm text-foreground">All Other</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex flex-col items-end gap-1">
                            <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
                              6% of item sale amount
                            </span>
                            <span className="px-2 py-0.5 bg-[#d4f4dd] dark:bg-[#4caf5033] text-[#4caf50] dark:text-[#66bb6a] text-xs font-semibold rounded">
                              2% of item sale amount
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Payout Adjustments</h4>
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Condition</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-foreground">Payout</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-foreground">Customer Status is new</td>
                        <td className="px-4 py-3 text-right text-sm text-foreground">Increase payout by 10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Schedule</h3>
            <div className="border border-border rounded-lg overflow-hidden bg-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Action Locking</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Actions are locked 10 day(s) after end of the month they are tracked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-foreground">Payout Scheduling</td>
                    <td className="px-4 py-3 text-sm text-foreground">Approved transactions are paid 5 day(s) after the end of the day they lock</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Qualified Referrals */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Qualified Referrals</h3>
            <div className="border border-border rounded-lg overflow-hidden bg-card">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-sm text-foreground">Credit Policy</td>
                    <td className="px-4 py-3 text-sm text-foreground">Last click</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-foreground">Referral Window</td>
                    <td className="px-4 py-3 text-sm text-foreground">Allow referrals from clicks within 7 day(s)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* General Terms */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-muted transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">General Terms</span>
              <ChevronDown className="size-4 text-foreground" />
            </button>

            <div className="px-4 pb-4 space-y-4">
              <div className="flex gap-4">
                <span className="text-sm font-semibold text-foreground min-w-[200px]">Currency</span>
                <p className="text-sm text-foreground">
                  Financial transactions covered by this Template Term will be processed in the USD currency. Currency exchanges will occur when you or your partner(s) have set a different default currency in account settings.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-semibold text-foreground min-w-[200px]">Change Notification Period</span>
                <p className="text-sm text-foreground">
                  The Contract can be changed or cancelled with 1 day(s) notification to the Partner.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-semibold text-foreground min-w-[200px]">Reversal Policy</span>
                <p className="text-sm text-foreground">
                  Reversal of performance advertising actions are decided by the Advertiser governed by a max reversal percentage of 100%.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-semibold text-foreground min-w-[200px]">Partner Tracking Pixel</span>
                <p className="text-sm text-foreground">
                  Advertiser does NOT allow Partner to fire their tracking pixel when the consumer action is completed.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-semibold text-foreground min-w-[200px]">Additional Legal Terms</span>
                <p className="text-sm text-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}