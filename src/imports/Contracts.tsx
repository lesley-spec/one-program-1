import svgPaths from "./svg-zmd15me6jt";

function AccountMenu() {
  return (
    <div className="bg-[#2d3e50] relative shrink-0 w-full" data-name="Account Menu">
      <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] px-[10px] py-[7px] relative w-full">
        <p className="relative shrink-0 text-[#b6bcc2] text-[11px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Impact Tech, Inc.
        </p>
        <p className="relative shrink-0 text-[#e5e7ea] text-[15px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Arie Product Testing
        </p>
      </div>
    </div>
  );
}

function DeprecateSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="(DEPRECATE) search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) search">
          <path clipRule="evenodd" d={svgPaths.pe388680} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="search" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <DeprecateSearch />
    </div>
  );
}

function TertiaryIconButton() {
  return (
    <div className="bg-[#29394a] content-stretch flex gap-[10px] items-center justify-center min-w-[30px] px-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Tertiary Icon Button">
      <IconContainer />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#29394a] content-stretch flex items-start px-[10px] py-[12.5px] relative shrink-0" data-name="Search">
      <TertiaryIconButton />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[20%_20%_27.5%_20%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.75">
        <g id="Icon">
          <rect fill="var(--fill-0, #F2F3F4)" height="10.125" id="Rectangle 103" rx="0.5625" transform="matrix(3.09114e-08 -1 -1 -3.09114e-08 16.875 14.0625)" width="1.125" />
          <rect fill="var(--fill-0, #F2F3F4)" height="9.12191" id="Rectangle 104" rx="0.5625" transform="matrix(-0.866025 -0.5 -0.5 0.866025 7.07209 5.85455)" width="1.125" />
          <rect fill="var(--fill-0, #F2F3F4)" height="9.44245" id="Rectangle 105" rx="0.5625" transform="rotate(-33.869 8.31377 1.61098)" width="1.125" x="8.31377" y="1.61098" />
          <path clipRule="evenodd" d={svgPaths.p850c500} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="Oval 3 Copy" />
          <path clipRule="evenodd" d={svgPaths.p272a2240} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="Oval 3 Copy_2" />
          <path clipRule="evenodd" d={svgPaths.pe37ac80} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="Oval 3 Copy_3" />
        </g>
      </svg>
    </div>
  );
}

function Products() {
  return (
    <div className="bg-[#e41b49] relative rounded-[9999px] shrink-0 size-[30px]" data-name="Products">
      <Icon />
    </div>
  );
}

function Engage() {
  return (
    <div className="bg-[#29394a] content-stretch flex items-start px-[10px] py-[12.5px] relative shrink-0" data-name="Engage">
      <Products />
    </div>
  );
}

function Products1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Products">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Products">
          <path d={svgPaths.p1cf26800} fill="var(--fill-0, #273341)" />
          <path clipRule="evenodd" d={svgPaths.p160d280} fill="var(--fill-0, #515B66)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Discover() {
  return (
    <div className="bg-[#29394a] content-stretch flex items-start px-[10px] py-[12.5px] relative shrink-0" data-name="Discover">
      <Products1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute inset-[20%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p78ccc00} fillRule="evenodd" id="Oval 4" stroke="var(--stroke-0, #515B66)" />
          <path clipRule="evenodd" d={svgPaths.p33372680} fillRule="evenodd" id="Oval 3" stroke="var(--stroke-0, #515B66)" />
        </g>
      </svg>
    </div>
  );
}

function Products2() {
  return (
    <div className="bg-[#273341] relative rounded-[9999px] shrink-0 size-[30px]" data-name="Products">
      <Icon1 />
    </div>
  );
}

function Optimize() {
  return (
    <div className="bg-[#29394a] content-stretch flex items-start px-[10px] py-[12.5px] relative shrink-0" data-name="Optimize">
      <Products2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute inset-[20%_28.33%_20%_26.67%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 18">
        <g id="Icon">
          <path d={svgPaths.p248845f0} fill="var(--fill-0, #515B66)" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p31237f80} fill="var(--fill-0, #515B66)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Products3() {
  return (
    <div className="bg-[#273341] relative rounded-[9999px] shrink-0 size-[30px]" data-name="Products">
      <Icon2 />
    </div>
  );
}

function Protect() {
  return (
    <div className="bg-[#29394a] content-stretch flex items-start px-[10px] py-[12.5px] relative shrink-0" data-name="Protect">
      <Products3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[13.33%_33.33%_13.33%_36.67%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 22">
        <g id="Icon">
          <circle cx="4" cy="4" fill="var(--fill-0, #515B66)" id="Ellipse 21" r="4" />
          <circle cx="6" cy="13" fill="var(--fill-0, #515B66)" id="Ellipse 22" r="3" />
          <circle cx="3" cy="20" fill="var(--fill-0, #515B66)" id="Ellipse 23" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Products4() {
  return (
    <div className="bg-[#273341] relative rounded-[9999px] shrink-0 size-[30px]" data-name="Products">
      <Icon3 />
    </div>
  );
}

function Altitude() {
  return (
    <div className="bg-[#29394a] content-stretch flex items-start px-[10px] py-[12.5px] relative shrink-0" data-name="Altitude">
      <Products4 />
    </div>
  );
}

function NavTabGroups() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav Tab Groups">
      <Search />
      <Engage />
      <Discover />
      <Optimize />
      <Protect />
      <Altitude />
    </div>
  );
}

function ListChecks() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.667px] left-1/2 top-[calc(50%+0.33px)] w-[16px]" data-name="ListChecks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.6667">
        <g clipPath="url(#clip0_75_6392)" id="ListChecks">
          <path d="M8 7.33335H15.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 2.00002H15.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 12.6667H15.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p80d8d00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pa37ce80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p341f6a00} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_75_6392">
            <rect fill="white" height="14.6667" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TaskManager() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="task-manager">
      <ListChecks />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <TaskManager />
    </div>
  );
}

function Tasks() {
  return (
    <div className="bg-[#29394a] content-stretch flex gap-[10px] items-center justify-center min-w-[38px] px-[10px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Tasks">
      <IconContainer1 />
    </div>
  );
}

function Message() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Message">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Message">
          <path clipRule="evenodd" d={svgPaths.p3c585300} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Message />
    </div>
  );
}

function Inbox() {
  return (
    <div className="bg-[#29394a] content-stretch flex gap-[10px] items-center justify-center min-w-[38px] px-[10px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Inbox">
      <IconContainer2 />
    </div>
  );
}

function DeprecateBell() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="(DEPRECATE) bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) bell">
          <g id="bell">
            <path clipRule="evenodd" d={svgPaths.p16f9f00} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p21b0ac40} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <DeprecateBell />
    </div>
  );
}

function Notifications() {
  return (
    <div className="bg-[#29394a] content-stretch flex gap-[10px] items-center justify-center min-w-[38px] px-[10px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Notifications">
      <IconContainer3 />
    </div>
  );
}

function DeprecateTripleDotsVertical() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="(DEPRECATE) triple-dots-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) triple-dots-vertical">
          <g id="triple dot">
            <path clipRule="evenodd" d={svgPaths.p18967e80} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10007b00} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p30d1d100} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <DeprecateTripleDotsVertical />
    </div>
  );
}

function Settings() {
  return (
    <div className="bg-[#29394a] content-stretch flex gap-[10px] items-center justify-center min-w-[38px] px-[10px] relative rounded-[8px] shrink-0 size-[38px]" data-name="Settings">
      <IconContainer4 />
    </div>
  );
}

function PartnerAvatar() {
  return (
    <div className="bg-[#eaebed] content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[30px]" data-name="Partner avatar">
      <div className="flex flex-col font-['Mulish:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3e50] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[24px]">CC</p>
      </div>
    </div>
  );
}

function BottomIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Bottom Icons">
      <Tasks />
      <Inbox />
      <Notifications />
      <Settings />
      <PartnerAvatar />
    </div>
  );
}

function NavIcons() {
  return (
    <div className="bg-[#29394a] content-stretch flex flex-col h-full items-center justify-between pb-[10px] relative shrink-0 w-[50px]" data-name="Nav icons">
      <NavTabGroups />
      <BottomIcons />
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-[#2d3e50] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[15px] pr-[10px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[13px] text-white uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary1() {
  return (
    <div className="bg-[#2d3e50] content-stretch flex gap-[10px] h-[38px] items-center pl-[15px] pr-[10px] py-[6px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Primary">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Partners</p>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Partners">
      <Primary1 />
    </div>
  );
}

function Primary2() {
  return (
    <div className="bg-[#2d3e50] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[15px] pr-[10px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Campaign Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary3() {
  return (
    <div className="bg-[#2d3e50] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[15px] pr-[10px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary4() {
  return (
    <div className="bg-[#2d3e50] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[15px] pr-[10px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary5() {
  return (
    <div className="bg-[#2d3e50] content-stretch flex gap-[10px] h-[38px] items-center pl-[15px] pr-[10px] py-[6px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Primary">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Content</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Content">
      <Primary5 />
    </div>
  );
}

function Primary6() {
  return (
    <div className="bg-[#2d3e50] h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[15px] pr-[10px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px] uppercase" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">Contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow() {
  return (
    <div className="bg-[#2d3e50] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[30px] pr-[10px] py-[2px] relative size-full">
          <div className="capitalize flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">template terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow1() {
  return (
    <div className="bg-[#2d3e50] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[30px] pr-[10px] py-[2px] relative size-full">
          <div className="capitalize flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">custom terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow2() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[30px] pr-[10px] py-[2px] relative size-full">
          <div className="capitalize flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[13px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow3() {
  return (
    <div className="bg-[#2d3e50] h-[28px] relative rounded-[4px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[30px] pr-[10px] py-[2px] relative size-full">
          <div className="capitalize flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#e5e7ea] text-[13px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[24px] whitespace-pre-wrap">changes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="secondary">
      <Primary6 />
      <SecondaryWithoutArrow />
      <SecondaryWithoutArrow1 />
      <SecondaryWithoutArrow2 />
      <SecondaryWithoutArrow3 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Items">
      <Primary />
      <Partners />
      <Primary2 />
      <Primary3 />
      <Primary4 />
      <Content1 />
      <Secondary />
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[10px] relative shrink-0 w-[21px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 10">
        <g clipPath="url(#clip0_75_6327)" id="Arrow">
          <path d={svgPaths.p192b8c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_75_6327">
            <rect fill="white" height="10" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ExpandedMenu() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Expanded menu">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center px-[8px] py-[20px] relative size-full">
          <Items />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative w-full" data-name="Content">
      <NavIcons />
      <ExpandedMenu />
    </div>
  );
}

function V2SideNav() {
  return (
    <div className="absolute bg-[#2d3e50] bottom-0 content-stretch flex flex-col items-center left-0 top-0 w-[270px]" data-name="V2 Side Nav">
      <AccountMenu />
      <Content />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_19.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.61996 14.0541">
        <g id="Group">
          <path d={svgPaths.p214256c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p267d3640} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_19.33%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_19.33%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Question() {
  return (
    <div className="absolute left-[12.97px] overflow-clip size-[14.054px] top-[12.97px]" data-name="question (1) 1">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#14b1f7] overflow-clip relative rounded-[9999px] shadow-[0px_1px_4px_0px_#cacfd3] shrink-0 size-[40px]">
      <Question />
    </div>
  );
}

function NeedHelp() {
  return (
    <div className="absolute bottom-[10px] content-stretch flex items-start right-[9.74px]" data-name="Need Help">
      <Frame />
    </div>
  );
}

function NavExpanded() {
  return (
    <div className="absolute bg-white h-[900px] left-0 top-0 w-[1440px]" data-name="Nav Expanded">
      <V2SideNav />
      <NeedHelp />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Title">
      <div className="capitalize flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d3e50] text-[24px] whitespace-nowrap">
        <p className="leading-[33px]">Contracts</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Title">
      <Title1 />
    </div>
  );
}

function TableLayoutHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Table Layout Heading">
      <Title />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[38px] items-center px-[10px] py-[7px] relative rounded-[8px] shrink-0 w-[255px]" data-name="Search Input">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Mulish:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#969ea7] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">{`Search  Name`}</p>
      </div>
    </div>
  );
}

function FilterButton() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[38px] items-center px-[10px] relative rounded-[8px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Mulish:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3e50] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Type</p>
      </div>
    </div>
  );
}

function FilterGroup() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <SearchInput />
      <FilterButton />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Left side">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#2d3e50] text-[14px]">3 rows</p>
    </div>
  );
}

function ShowHide() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Show / Hide">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Show / Hide">
          <path clipRule="evenodd" d={svgPaths.p367c6700} fill="var(--fill-0, #2D3E50)" fillRule="evenodd" id="table" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <ShowHide />
    </div>
  );
}

function TertiaryIconButton1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center min-w-[30px] px-[10px] relative rounded-[8px] shrink-0 size-[30px]" data-name="Tertiary Icon Button">
      <IconContainer5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <TertiaryIconButton1 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0" data-name="Right side">
      <Frame1 />
    </div>
  );
}

function TableActions() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Actions">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[14px] text-ellipsis">Template Term</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">CNN Digtal</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Rakuten</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">SkimLinks</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TableColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[14px] text-ellipsis">Type</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Word-is</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">BlushRushBeauty4u</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Leo’s and lions</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading1 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[14px] text-ellipsis">Status</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function TableColumn2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading2 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[14px] text-ellipsis">Start Date</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Sep 30, 2024 21:18 MST</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Sep 30, 2024 21:18 MST</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[12px] text-ellipsis w-full whitespace-nowrap">Sep 30, 2024 21:18 MST</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function TableColumn3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading3 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[14px] text-ellipsis">Brand Signatory</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#2d3e50] text-[12px] w-full whitespace-pre-wrap">
        System
        <br aria-hidden="true" />
        Sep 30, 2024
      </p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#2d3e50] text-[12px] w-full whitespace-pre-wrap">
        System
        <br aria-hidden="true" />
        Sep 30, 2024
      </p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#2d3e50] text-[12px] w-full whitespace-pre-wrap">
        System
        <br aria-hidden="true" />
        Sep 30, 2024
      </p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function TableColumn4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading4 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] overflow-hidden relative shrink-0 text-[#2d3e50] text-[14px] text-ellipsis">Partner Signatory</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#2d3e50] text-[12px] w-full whitespace-pre-wrap">
        ebay:tAOv7mYmR-6
        <br aria-hidden="true" />
        Sep 30, 2024
      </p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#2d3e50] text-[12px] w-full whitespace-pre-wrap">
        ebay:ladc942srwc
        <br aria-hidden="true" />
        Sep 30, 2024
      </p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#2d3e50] text-[12px] w-full whitespace-pre-wrap">
        ebay:RkXvDt0ZSSW
        <br aria-hidden="true" />
        Sep 30, 2024
      </p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#eaebed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[15px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function TableColumn5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading5 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <TableColumn />
      <TableColumn1 />
      <TableColumn2 />
      <TableColumn3 />
      <TableColumn4 />
      <TableColumn5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <TableActions />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start p-[30px] right-[-46px] top-[70px] w-[1170px]">
      <TableLayoutHeading />
      <FilterGroup />
      <Frame4 />
    </div>
  );
}

export default function Contracts() {
  return (
    <div className="relative size-full" data-name="Contracts">
      <NavExpanded />
      <Frame2 />
    </div>
  );
}