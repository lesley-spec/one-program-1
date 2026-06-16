function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] relative shrink-0 text-[#25282f] text-[18px]">Finance</p>
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] relative shrink-0 text-[#606672] text-[12px]">Funding Account 1 : USD</p>
    </div>
  );
}

function TertiaryButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] h-[32px] items-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Request Payment</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-[#f0f1f3] content-stretch flex gap-[8px] h-[32px] items-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#f0f1f3] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Make Deposit</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <TertiaryButton />
      <SecondaryButton />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[538px]">
      <Frame13 />
      <Frame17 />
    </div>
  );
}

function DropdownHeader() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between p-[16px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[570px]" data-name="DropdownHeader">
      <Frame16 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f9fbff] content-stretch flex flex-col h-[164px] items-center justify-center py-[24px] relative rounded-[8px] shrink-0 w-full">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[19px] relative shrink-0 text-[14px] text-center">Required funding</p>
      <p className="capitalize font-['Sarabun:Bold',sans-serif] leading-[33px] relative shrink-0 text-[24px]">$23,505.44</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[19px] relative shrink-0 w-[388px]">
      <p className="font-['Sarabun:Regular',sans-serif] relative shrink-0">Current balance</p>
      <p className="font-['Sarabun:SemiBold',sans-serif] relative shrink-0">$35,239.67</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[388px]">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[0] relative shrink-0">
        <span className="leading-[19px]">{`Pending payments `}</span>
        <span className="leading-[19px] text-[#606672]">(Due through Aug 01, 2024)</span>
      </p>
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[19px] relative shrink-0">$58,745.11</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px]">
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-full relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-full items-center not-italic px-[16px] py-[24px] relative text-[#25282f]">
          <Frame10 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Overview</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame />
    </div>
  );
}

function SingleSelect() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Transfers</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame1 />
    </div>
  );
}

function SingleSelect1() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Payment Requests</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame2 />
    </div>
  );
}

function SingleSelect2() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Reports</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame3 />
    </div>
  );
}

function SingleSelect3() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Subscriptions</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame4 />
    </div>
  );
}

function SingleSelect4() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Documents</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame5 />
    </div>
  );
}

function SingleSelect5() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Settings</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame6 />
    </div>
  );
}

function SingleSelect6() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[8px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[324px] items-start min-w-[150px] py-[16px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <SingleSelect />
      <SingleSelect1 />
      <SingleSelect2 />
      <SingleSelect3 />
      <SingleSelect4 />
      <SingleSelect5 />
      <SingleSelect6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[74px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <DropdownHeader />
      <Frame14 />
    </div>
  );
}

export default function NormalState() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Normal State">
      <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e9f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(255,255,255,0)]" />
    </div>
  );
}