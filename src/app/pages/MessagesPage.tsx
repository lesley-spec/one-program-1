export function MessagesPage() {
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
        Messages
      </h1>
      
      <div className="border border-border rounded-[8px] bg-card overflow-hidden">
        <div className="p-6">
          <p className="text-muted-foreground text-[length:var(--text-base)] font-['Sarabun',sans-serif]">
            View and send messages to your partners.
          </p>
        </div>
      </div>
    </div>
  );
}