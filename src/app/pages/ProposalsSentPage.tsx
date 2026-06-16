export function ProposalsSentPage() {
  return (
    <div className="w-full m-[0px] px-[100px] py-[24px]">
      <div className="flex items-center gap-3 mb-6">
        <h1 
          className="text-foreground font-['Sarabun',sans-serif]"
          style={{
            fontWeight: 'bold',
            fontSize: '26px',
            lineHeight: '30px'
          }}
        >
          Proposals Sent
        </h1>
        <span
          className="size-6 rounded-full flex items-center justify-center text-white font-['Sarabun',sans-serif] text-[12px] leading-[12px]"
          style={{
            background: "var(--badge-count)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          1
        </span>
      </div>
      
      <div className="border border-border rounded-[8px] bg-card overflow-hidden">
        <div className="p-6">
          <p className="text-muted-foreground text-[length:var(--text-base)] font-['Sarabun',sans-serif]">
            Track proposals you've sent to potential partners.
          </p>
        </div>
      </div>
    </div>
  );
}