export function SurveysPage() {
  return (
    <div className="w-full m-[0px] px-[100px] py-[24px]">
      <h1 
        className="text-foreground mb-6 font-['Sarabun',sans-serif]"
        style={{
          fontWeight: 'bold',
          fontSize: '26px',
          lineHeight: '30px'
        }}
      >
        Surveys
      </h1>
      
      <div className="border border-border rounded-[8px] bg-card overflow-hidden">
        <div className="p-6">
          <p className="text-muted-foreground text-[length:var(--text-base)] font-['Sarabun',sans-serif]">
            Create and manage surveys for your partners.
          </p>
        </div>
      </div>
    </div>
  );
}