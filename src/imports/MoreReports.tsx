import svgPaths from "./svg-uipnhoxxhu";
import imgBrandProfilePicture from "figma:asset/7582cfd7dca9a384cd94bd5dbf01449baba1c8d7.png";

function BrandProfilePicture() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Brand Profile Picture">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandProfilePicture} />
    </div>
  );
}

function SquareBrandAvatar() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Square Brand Avatar">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <BrandProfilePicture />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f3f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Arrow">
          <path d={svgPaths.p15341f38} id="Vector 9" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AccountName() {
  return (
    <div className="bg-[#eaebed] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Account Name">
      <SquareBrandAvatar />
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px]">Adidas</p>
      <Arrow />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Left side">
      <AccountName />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path clipRule="evenodd" d={svgPaths.pb44c500} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Search />
    </div>
  );
}

function TertiaryIconButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Icon Button">
      <IconContainer />
    </div>
  );
}

function Message() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Message">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Message">
          <path clipRule="evenodd" d={svgPaths.p3c585300} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Message />
    </div>
  );
}

function TertiaryIconButton1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Icon Button">
      <IconContainer1 />
    </div>
  );
}

function Notification() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Notification">
          <path clipRule="evenodd" d={svgPaths.pb2cd6c0} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Notification />
    </div>
  );
}

function TertiaryIconButton2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Icon Button">
      <IconContainer2 />
    </div>
  );
}

function IconButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Icon Button Container">
      <TertiaryIconButton />
      <TertiaryIconButton1 />
      <TertiaryIconButton2 />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-down">
          <path clipRule="evenodd" d={svgPaths.p17277d00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Icon Container">
      <ArrowDown />
    </div>
  );
}

function SpaciousStatusColorful() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center pl-[16px] pr-[12px] relative rounded-[9999px] shrink-0" data-name="Spacious Status/Colorful">
      <div aria-hidden="true" className="absolute border border-[#f77300] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px] text-center">$0.00</p>
      <IconContainer3 />
    </div>
  );
}

function PartnerAvatar() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Partner avatar">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">CC</p>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="absolute bg-[#c8144a] content-stretch flex flex-col items-center justify-center px-[6px] right-[-4px] rounded-[9999px] size-[16px] top-[-4px]" data-name="Count">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-right text-white w-[6px]">
        <p className="leading-[13px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Statuses() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Statuses">
      <SpaciousStatusColorful />
      <PartnerAvatar />
      <Count />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0" data-name="Right Side">
      <IconButtonContainer />
      <Statuses />
    </div>
  );
}

function VNextTopNav() {
  return (
    <div className="absolute bg-white content-stretch flex h-[70px] items-center justify-between left-0 px-[16px] right-0 top-0" data-name="VNext Top Nav">
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-b border-solid inset-0 pointer-events-none" />
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Hamburger() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Hamburger">
          <path clipRule="evenodd" d={svgPaths.p707d680} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2ad60c00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1824a480} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <Hamburger />
    </div>
  );
}

function SideNavProductItems() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer4 />
    </div>
  );
}

function DashboardNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Dashboard-not filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dashboard-not filled">
          <path clipRule="evenodd" d={svgPaths.p462ff80} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <DashboardNotFilled />
    </div>
  );
}

function SideNavProductItems1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer5 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Dashboard</p>
      </div>
    </div>
  );
}

function EngageFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Engage-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Engage-filled">
          <path d={svgPaths.p114be740} fill="var(--fill-0, #121212)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <EngageFilled />
    </div>
  );
}

function SideNavProductItems2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer6 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Engage</p>
      </div>
    </div>
  );
}

function DiscoverNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Discover-not filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Discover-not filled">
          <path clipRule="evenodd" d={svgPaths.p244fa100} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3e8bd700} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.pda86e00} fill="var(--fill-0, #818181)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <DiscoverNotFilled />
    </div>
  );
}

function SideNavProductItems3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer7 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Discover</p>
      </div>
    </div>
  );
}

function OptimizeNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Optimize-not filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_97_9370)" id="Optimize-not filled">
          <path clipRule="evenodd" d={svgPaths.p2b01b380} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1a189ac0} fill="var(--fill-0, #818181)" id="Vector_2" />
          <path d={svgPaths.p18266f00} fill="var(--fill-0, #818181)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_97_9370">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <OptimizeNotFilled />
    </div>
  );
}

function SideNavProductItems4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer8 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Optimize</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[-1.04%_8.54%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9 24.5">
        <g id="Group 2898">
          <path clipRule="evenodd" d={svgPaths.p38b4bd40} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p310f2500} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ComplianceNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Compliance-not filled">
      <Group8 />
    </div>
  );
}

function IconContainer9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <ComplianceNotFilled />
    </div>
  );
}

function SideNavProductItems5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer9 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Protect</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Top">
      <SideNavProductItems />
      <SideNavProductItems1 />
      <SideNavProductItems2 />
      <SideNavProductItems3 />
      <SideNavProductItems4 />
      <SideNavProductItems5 />
    </div>
  );
}

function New() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="New">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_97_9390)" id="New">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3a680c00} fill="var(--fill-0, #818181)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13280500} fill="var(--fill-0, #818181)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_97_9390">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <New />
    </div>
  );
}

function SideNavProductItems6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer10 />
    </div>
  );
}

function NavHelp() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Nav - help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Nav - help">
          <g id="Vector">
            <path d={svgPaths.p3bfb5680} fill="#818181" />
            <path d={svgPaths.p259745c0} fill="#818181" />
            <path clipRule="evenodd" d={svgPaths.p2e360f00} fill="var(--fill-0, #818181)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <NavHelp />
    </div>
  );
}

function SideNavProductItems7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer11 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center py-[24px] relative shrink-0" data-name="Bottom">
      <SideNavProductItems6 />
      <SideNavProductItems7 />
    </div>
  );
}

function SideNavProducts() {
  return (
    <div className="bg-[#fbfbfb] h-full relative shrink-0" data-name="Side Nav / Products">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Top />
        <Bottom />
      </div>
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-[#fbfbfb] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary1() {
  return (
    <div className="bg-[#fbfbfb] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary2() {
  return (
    <div className="bg-[#fbfbfb] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow() {
  return (
    <div className="bg-[#eaebed] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#121212] text-[14px]">
            <p className="leading-[18px] whitespace-pre-wrap">Library</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow1() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[14px]">
            <p className="leading-[18px] whitespace-pre-wrap">Data Lab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-down">
          <path clipRule="evenodd" d={svgPaths.p17277d00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Icon Container">
      <ArrowDown1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-full items-end pb-[3px] relative shrink-0" data-name="Container">
      <IconContainer12 />
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-row items-center self-stretch">
        <Container />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Performance</p>
      </div>
    </div>
  );
}

function SecondaryWithArrow() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / With Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText />
        </div>
      </div>
    </div>
  );
}

function V2Tertiary() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="V2 Tertiary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[48px] pr-[8px] py-[2px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#292929] text-[12px] whitespace-pre-wrap">Action Listing (Includes C...</p>
        </div>
      </div>
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-down">
          <path clipRule="evenodd" d={svgPaths.p17277d00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Icon Container">
      <ArrowDown2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-full items-end pb-[3px] relative shrink-0" data-name="Container">
      <IconContainer13 />
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">My Own Label</p>
      </div>
    </div>
  );
}

function SecondaryWithArrow1() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / With Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText1 />
        </div>
      </div>
    </div>
  );
}

function V2Tertiary1() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="V2 Tertiary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[48px] pr-[8px] py-[2px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#292929] text-[12px] whitespace-pre-wrap">Action Listing (Includes C...</p>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path clipRule="evenodd" d={svgPaths.p168e2d00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="Icon Container">
      <ArrowRight />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-full items-end pb-[3px] relative shrink-0" data-name="Container">
      <IconContainer14 />
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-row items-center self-stretch">
        <Container2 />
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Compliance</p>
      </div>
    </div>
  );
}

function SecondaryWithArrow2() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / With Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText2 />
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow2() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[14px]">
            <p className="leading-[18px] whitespace-pre-wrap">Saved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryWithoutArrow3() {
  return (
    <div className="bg-[#fbfbfb] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Secondary / Without Arrow">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[14px]">
            <p className="leading-[18px] whitespace-pre-wrap">Scheduled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="secondary">
      <Primary2 />
      <SecondaryWithoutArrow />
      <SecondaryWithoutArrow1 />
      <SecondaryWithArrow />
      <V2Tertiary />
      <SecondaryWithArrow1 />
      <V2Tertiary1 />
      <SecondaryWithArrow2 />
      <SecondaryWithoutArrow2 />
      <SecondaryWithoutArrow3 />
    </div>
  );
}

function Primary3() {
  return (
    <div className="bg-[#fbfbfb] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary4() {
  return (
    <div className="bg-[#fbfbfb] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Primary5() {
  return (
    <div className="bg-[#fbfbfb] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#292929] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="bg-[#fbfbfb] h-full relative shrink-0 w-[252px]" data-name="Items">
      <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Primary />
        <Primary1 />
        <Secondary />
        <Primary3 />
        <Primary4 />
        <Primary5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VNextSideNav() {
  return (
    <div className="absolute bg-[#fbfbfb] bottom-0 content-stretch flex items-start justify-center left-0 top-[70px]" data-name="VNext Side Nav">
      <SideNavProducts />
      <Items />
    </div>
  );
}

function NavExpanded() {
  return (
    <div className="absolute bg-white h-[900px] left-0 top-0 w-[1440px]" data-name="Nav Expanded">
      <VNextTopNav />
      <VNextSideNav />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Title">
      <div className="capitalize flex flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px] whitespace-nowrap">
        <p className="leading-[33px]">Library</p>
      </div>
    </div>
  );
}

function TertiaryButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#121212] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Manage Categories</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#121212] content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Primary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
        <p className="leading-[18px] whitespace-pre-wrap">Build Report</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Buttons">
      <TertiaryButton />
      <PrimaryButton />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Title">
      <Title1 />
      <Buttons />
    </div>
  );
}

function TableLayoutHeading() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Table Layout Heading">
      <Title />
    </div>
  );
}

function Search1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path clipRule="evenodd" d={svgPaths.pb44c500} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="VNext icon">
      <Search1 />
    </div>
  );
}

function IconContainer15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon container">
      <VNextIcon />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[8px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Search Input">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer15 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a7a7a7] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Search Name, Description</p>
      </div>
    </div>
  );
}

function Count1() {
  return (
    <div className="content-stretch flex font-['Sarabun:SemiBold',sans-serif] gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[#0077db] text-[14px]" data-name="Count">
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">2</p>
    </div>
  );
}

function FilterButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border-[#0077db] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0077db] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Categories</p>
      </div>
      <Count1 />
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

function Label1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p1823c000} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[8px]" data-name="VNext icon">
      <X />
    </div>
  );
}

function CloseIconContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="close icon container">
      <VNextIcon1 />
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label1 />
      <CloseIconContainer />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
      </div>
    </div>
  );
}

function X1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p1823c000} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[8px]" data-name="VNext icon">
      <X1 />
    </div>
  );
}

function CloseIconContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="close icon container">
      <VNextIcon2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex gap-[8px] h-[32px] items-center overflow-clip px-[16px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label3 />
      <CloseIconContainer1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Label />
      <Label2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <FilterGroup />
      <Frame35 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px]">Favorited</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label5 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">+2</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[24px] items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 w-[32px]" data-name="Label">
      <Label7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Label4 />
      <Label6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Performance by Partner</p>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame15 />
    </div>
  );
}

function HeartFilled() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart-filled">
          <path d={svgPaths.pc48ae40} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame16 />
      <HeartFilled />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label9 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Les Perf Dash</p>
      </div>
      <Label8 />
    </div>
  );
}

function HeartFilled1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart-filled">
          <path d={svgPaths.pc48ae40} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame20 />
      <HeartFilled1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label11 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Albert Finance Dashboard</p>
      </div>
      <Label10 />
    </div>
  );
}

function HeartFilled2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart-filled">
          <path d={svgPaths.pc48ae40} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame23 />
      <HeartFilled2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label13 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Benchmark Report</p>
      </div>
      <Label12 />
    </div>
  );
}

function HeartFilled3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart-filled">
          <path d={svgPaths.pc48ae40} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame26 />
      <HeartFilled3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label15 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Benchmark Report</p>
      </div>
      <Label14 />
    </div>
  );
}

function HeartFilled4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heart-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart-filled">
          <path d={svgPaths.pc48ae40} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame29 />
      <HeartFilled4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[15px] items-center overflow-clip relative shrink-0 w-[1060px]">
      <Frame14 />
      <Frame17 />
      <Frame21 />
      <Frame24 />
      <Frame27 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start ml-0 mt-0 relative row-1 w-[1060px]">
      <Frame40 />
      <Frame19 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function VnextCheckbox() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[16px]" data-name="VNEXT Checkbox">
      <div aria-hidden="true" className="absolute border-[#818181] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox Input">
      <VnextCheckbox />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Select All</p>
      </div>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Left side">
      <CheckboxInput />
      <p className="font-['Avenir_Next:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#121212] text-[14px]">|</p>
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px]">234 reports</p>
    </div>
  );
}

function ShowHide() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Show / Hide">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Show / Hide">
          <path clipRule="evenodd" d={svgPaths.p367c6700} fill="var(--fill-0, #121212)" fillRule="evenodd" id="table" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <ShowHide />
    </div>
  );
}

function TertiaryIconButton3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[16px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Tertiary Icon Button">
      <IconContainer16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <TertiaryIconButton3 />
    </div>
  );
}

function RightSide1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0" data-name="Right side">
      <Frame7 />
    </div>
  );
}

function TableActions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Table Actions">
      <LeftSide1 />
      <RightSide1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[20px] h-[17px] items-center relative shrink-0 w-full">
      <TableActions />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[14px] text-ellipsis">Name</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[19]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Performance by Partner</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[18]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Action Listing by Clearing Date</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[17]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Action Risk Listing</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[16]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Aalap’s Report</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[15]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">{`Active Partner Relationships `}</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[14]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Ad Listing</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[13]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Nathan’s Report</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[12]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Kollin’s Report</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[11]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Campaign Overview</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Cash Flow History LIsting</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Alexander’s Report</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function TableColumn() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[225px]" data-name="Table Column">
      <Heading />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[14px] text-ellipsis">Description</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[20]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Shows listing of each action at the individual SKU level.</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[19]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Displays data for each individual action that has been credited...</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[18]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">-</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[17]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Weekly Dashboard</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[16]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Show list of all Media Partners who have an active relationship...</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[15]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Displays details for all ads that have ever been created.</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[14]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">I dont like descriptions</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[13]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Your text goes here</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[12]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Shows multiple views of performance for your campaign.</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[11]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Shows a listing of all cash flows within the account.</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Some Description</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Your text goes here</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[439px]" data-name="Table Column">
      <Heading1 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[14px] text-ellipsis">Categories</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[26]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label17 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label16 />
    </div>
  );
}

function Labels() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[25]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label19 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label18 />
    </div>
  );
}

function Labels1() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[24]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label21 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label20 />
    </div>
  );
}

function Labels2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[23]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label23 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label22 />
    </div>
  );
}

function Labels3() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[22]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Label25() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label24() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label25 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label24 />
    </div>
  );
}

function Labels4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[21]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label26() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label27 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label26 />
    </div>
  );
}

function Labels5() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[20]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label28() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label28 />
    </div>
  );
}

function Labels6() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[19]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Label31() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Built</p>
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label30 />
    </div>
  );
}

function Labels7() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[18]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Label33() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Listing</p>
      </div>
    </div>
  );
}

function Label32() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label32 />
    </div>
  );
}

function Labels8() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[17]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Label35() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label34() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label35 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label34 />
    </div>
  );
}

function Labels9() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[16]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Label37() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Listing</p>
      </div>
    </div>
  );
}

function Label36() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label37 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label36 />
    </div>
  );
}

function Labels10() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[15]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Numeric() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[14]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">Listing</p>
        </div>
      </div>
    </div>
  );
}

function Numeric1() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[13]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">Listing</p>
        </div>
      </div>
    </div>
  );
}

function Numeric2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[12]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">{`Built `}</p>
        </div>
      </div>
    </div>
  );
}

function Numeric3() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[11]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">Built</p>
        </div>
      </div>
    </div>
  );
}

function Numeric4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Numeric5() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">Listing</p>
        </div>
      </div>
    </div>
  );
}

function Numeric6() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Numeric">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-end px-[8px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[15px] min-h-px min-w-[65px] not-italic overflow-hidden relative text-[#121212] text-[12px] text-ellipsis whitespace-nowrap">Built</p>
        </div>
      </div>
    </div>
  );
}

function TableColumn2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading2 />
      <Labels />
      <Labels1 />
      <Labels2 />
      <Labels3 />
      <Labels4 />
      <Labels5 />
      <Labels6 />
      <Labels7 />
      <Labels8 />
      <Labels9 />
      <Labels10 />
      <Numeric />
      <Numeric1 />
      <Numeric2 />
      <Numeric3 />
      <Numeric4 />
      <Numeric5 />
      <Numeric6 />
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="bg-[#121212] content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Primary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
        <p className="leading-[18px] whitespace-pre-wrap">View</p>
      </div>
    </div>
  );
}

function HeartFilled5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="heart-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heart-filled">
          <path d={svgPaths.pc48ae40} fill="var(--fill-0, #121212)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <HeartFilled5 />
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <IconContainer17 />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[12.5%]" data-name="elements">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g>
            <path d="M0.75 14.25L4.5 10.5" id="Vector 4655" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pf432480} id="Vector" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Pin() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="pin">
      <Elements />
    </div>
  );
}

function SecondaryButton1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Pin />
    </div>
  );
}

function TripleDotsHorizontal() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="triple-dots-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="triple-dots-horizontal">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2f8c8800} fill="var(--fill-0, #121212)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p938e400} fill="var(--fill-0, #121212)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3700} fill="var(--fill-0, #121212)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <TripleDotsHorizontal />
    </div>
  );
}

function SecondaryIconButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[16px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Secondary Icon Button">
      <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <IconContainer18 />
    </div>
  );
}

function RowHoverActions() {
  return (
    <div className="absolute bg-gradient-to-l content-stretch flex from-[45.509%] from-white gap-[8px] h-[53px] items-center justify-end left-[710px] min-w-[350px] px-[8px] py-[16px] to-[102.39%] to-[rgba(255,255,255,0)] top-[40px]" data-name="Row Hover Actions">
      <PrimaryButton1 />
      <SecondaryButton />
      <SecondaryButton1 />
      <SecondaryIconButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">View</p>
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

function SingleSelect1() {
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
        <p className="leading-[18px]">Favorite</p>
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

function SingleSelect2() {
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
        <p className="leading-[18px]">Pin to nav</p>
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

function SingleSelect3() {
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
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[51px]">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Add to category</p>
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

function SingleSelect4() {
  return (
    <div className="bg-[#fbfbfb] min-h-[40px] relative shrink-0 w-full" data-name="Single Select">
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
        <p className="leading-[18px]">Saves</p>
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

function SingleSelect5() {
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
        <p className="leading-[18px]">Schedules</p>
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

function SingleSelect6() {
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

function List() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="List">
      <SingleSelect1 />
      <SingleSelect2 />
      <SingleSelect3 />
      <SingleSelect4 />
      <SingleSelect5 />
      <SingleSelect6 />
    </div>
  );
}

function SingleSelect() {
  return (
    <div className="absolute bg-white left-[916px] rounded-[8px] top-[83px] w-[136px]" data-name="Single Select">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <List />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_4px_0px_#cacfd3]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <TableColumn />
      <TableColumn1 />
      <TableColumn2 />
      <RowHoverActions />
      <SingleSelect />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame9 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Group9 />
      <Frame10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[21.244px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2438 22">
        <g id="Group 2414">
          <path d={svgPaths.p474c00} fill="url(#paint0_linear_97_9222)" id="Ellipse 33" stroke="var(--stroke-0, #121212)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_97_9222" x1="7.43534" x2="23.8201" y1="22" y2="-3.88993">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[5.59px] relative w-[5.789px]" data-name="icon">
      <div className="absolute inset-[0_-7.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60452 5.59048">
          <g id="icon">
            <rect fill="url(#paint0_linear_97_9434)" height="5.59048" transform="translate(0.407331)" width="5.78947" />
            <path d={svgPaths.p3feaf140} id="Vector 9" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_97_9434" x1="2.02632" x2="6.05918" y1="5.59048" y2="-1.24364">
              <stop stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group2 />
      <div className="absolute flex h-[5.789px] items-center justify-center left-[7.83px] top-[8.11px] w-[5.59px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1079px] top-[263px]">
      <Group6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[22px] relative w-[21.244px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2438 22">
        <g id="Group 2414">
          <path d={svgPaths.p474c00} fill="url(#paint0_linear_97_9222)" id="Ellipse 33" stroke="var(--stroke-0, #121212)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_97_9222" x1="7.43534" x2="23.8201" y1="22" y2="-3.88993">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute flex h-[22px] items-center justify-center left-0 top-0 w-[21.244px]">
        <div className="flex-none rotate-180">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[5.59px] relative w-[5.789px]" data-name="icon">
      <div className="absolute inset-[0_-7.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.60452 5.59048">
          <g id="icon">
            <rect fill="url(#paint0_linear_97_9434)" height="5.59048" transform="translate(0.407331)" width="5.78947" />
            <path d={svgPaths.p3feaf140} id="Vector 9" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_97_9434" x1="2.02632" x2="6.05918" y1="5.59048" y2="-1.24364">
              <stop stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
      <div className="absolute flex h-[5.789px] items-center justify-center left-[7.83px] top-[8.11px] w-[5.59px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[21px] top-[263px]">
      <Group7 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[21px] top-[263px]">
      <Group5 />
      <Group4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[829px] items-start left-[316px] p-[32px] top-[71px] w-[1124px]">
      <TableLayoutHeading />
      <Frame37 />
      <Frame39 />
      <Group10 />
    </div>
  );
}

export default function MoreReports() {
  return (
    <div className="relative size-full" data-name="More reports">
      <NavExpanded />
      <Frame8 />
    </div>
  );
}