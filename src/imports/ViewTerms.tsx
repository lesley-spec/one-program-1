import svgPaths from "./svg-4mdkeb7ycr";
import imgBrandProfilePicture from "figma:asset/7582cfd7dca9a384cd94bd5dbf01449baba1c8d7.png";

function BrandProfilePicture() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Brand Profile Picture">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandProfilePicture} />
    </div>
  );
}

function BrandAvatar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px]" data-name="Brand Avatar">
      <BrandProfilePicture />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start not-italic relative shrink-0 w-[92px]">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] relative shrink-0 text-[#25282f] text-[14px]">Adidas</p>
      <p className="font-['Sarabun:Regular',sans-serif] leading-[13px] relative shrink-0 text-[#606672] text-[10px]">Performance</p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right side">
      <BrandAvatar />
      <div className="flex flex-row items-center self-stretch">
        <Frame9 />
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="arrow-down">
          <path d={svgPaths.p382bad00} fill="var(--fill-0, #25282F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="Icon Container">
      <ArrowDown />
    </div>
  );
}

function AccountName() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center justify-between max-w-[289px] min-w-[178px] pl-[4px] pr-[16px] py-[4px] relative rounded-[9999px] shrink-0 w-[178px]" data-name="Account Name">
      <RightSide />
      <IconContainer />
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
          <path clipRule="evenodd" d={svgPaths.pb44c500} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Search />
    </div>
  );
}

function TertiaryIconButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer1 />
    </div>
  );
}

function Message() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Message">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.049px] left-1/2 top-[calc(50%+0.02px)] w-[16px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.0488">
          <path clipRule="evenodd" d={svgPaths.p25c3e930} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Message />
    </div>
  );
}

function TertiaryIconButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer2 />
    </div>
  );
}

function Notification() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.pb2cd6c0} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Notification />
    </div>
  );
}

function TertiaryIconButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer3 />
    </div>
  );
}

function TaskManager() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="task-manager">
      <div className="absolute inset-[5.73%_-0.52%_1.56%_-0.52%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1667 14.8333">
          <path clipRule="evenodd" d={svgPaths.p1adfb900} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <TaskManager />
    </div>
  );
}

function TertiaryIconButton3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer4 />
    </div>
  );
}

function ReferAFriend() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="refer-a-friend">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="refer-a-friend">
          <path clipRule="evenodd" d={svgPaths.p485000} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <ReferAFriend />
    </div>
  );
}

function TertiaryIconButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer5 />
    </div>
  );
}

function NavHelp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Nav-help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p22921500} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <NavHelp />
    </div>
  );
}

function TertiaryIconButton5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer6 />
    </div>
  );
}

function IconButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Icon Button Container">
      <TertiaryIconButton />
      <TertiaryIconButton1 />
      <TertiaryIconButton2 />
      <TertiaryIconButton3 />
      <TertiaryIconButton4 />
      <TertiaryIconButton5 />
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="arrow-down">
          <path d={svgPaths.p382bad00} fill="var(--fill-0, #25282F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="Icon Container">
      <ArrowDown1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <IconContainer7 />
    </div>
  );
}

function SpaciousStatusFinanceWidget() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center pl-[16px] pr-[12px] relative rounded-[9999px] shrink-0" data-name="Spacious Status (finance widget)">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center">$0.00</p>
      <Frame />
    </div>
  );
}

function PartnerAvatar() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Partner avatar">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">C</p>
      </div>
    </div>
  );
}

function Statuses() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[9999px] shrink-0" data-name="Statuses">
      <PartnerAvatar />
    </div>
  );
}

function RightSide1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Side">
      <IconButtonContainer />
      <SpaciousStatusFinanceWidget />
      <Statuses />
    </div>
  );
}

function VNextDesktopTopNav() {
  return (
    <div className="absolute bg-[#edf1f9] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] right-0 top-0" data-name="VNext Desktop Top Nav">
      <LeftSide />
      <RightSide1 />
    </div>
  );
}

function NavExpanded1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="nav-expanded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="nav-expanded">
          <g id="Vector">
            <path d={svgPaths.p20e1f700} fill="#25282F" />
            <path d={svgPaths.p144c3700} fill="var(--fill-0, #25282F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <NavExpanded1 />
    </div>
  );
}

function SideNavProductItems() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer8 />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-[20px]" data-name="separator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
        <g id="separator">
          <line id="Line 2" stroke="var(--stroke-0, #606672)" x2="20" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[8px] px-[20px] relative w-full">
          <Separator />
        </div>
      </div>
    </div>
  );
}

function EngageFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Engage-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Engage-filled">
          <path d={svgPaths.p3262d500} fill="var(--fill-0, #1D66DE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon Container">
      <EngageFilled />
    </div>
  );
}

function IconContainer9() {
  return (
    <div className="bg-[#d6ebff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer10 />
    </div>
  );
}

function SideNavProductItems1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer9 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px] whitespace-pre-wrap">Engage</p>
      </div>
    </div>
  );
}

function DiscoverNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Discover-not filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Discover-not filled">
          <path clipRule="evenodd" d={svgPaths.p2f68d1c0} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p15b06e00} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p53838c0} fill="var(--fill-0, #25282F)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon Container">
      <DiscoverNotFilled />
    </div>
  );
}

function IconContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer12 />
    </div>
  );
}

function SideNavProductItems2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer11 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px] whitespace-pre-wrap">Discover</p>
      </div>
    </div>
  );
}

function OptimizeNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Optimize-not filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_9753)" id="Optimize-not filled">
          <path clipRule="evenodd" d={svgPaths.p53fa530} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1d966900} fill="var(--fill-0, #25282F)" id="Vector_2" />
          <path d={svgPaths.p347f6600} fill="var(--fill-0, #25282F)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_9753">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon Container">
      <OptimizeNotFilled />
    </div>
  );
}

function IconContainer13() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer14 />
    </div>
  );
}

function SideNavProductItems3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer13 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px] whitespace-pre-wrap">Optimize</p>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[0_9.39%]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2449 20">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p24e341c0} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p277cb900} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ComplianceNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Compliance-not filled">
      <Vector />
    </div>
  );
}

function IconContainer16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon Container">
      <ComplianceNotFilled />
    </div>
  );
}

function IconContainer15() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer16 />
    </div>
  );
}

function SideNavProductItems4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer15 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px] whitespace-pre-wrap">Protect</p>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Products">
      <SideNavProductItems1 />
      <SideNavProductItems2 />
      <SideNavProductItems3 />
      <SideNavProductItems4 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Top">
      <SideNavProductItems />
      <Frame21 />
      <Products />
    </div>
  );
}

function SideNavProducts() {
  return (
    <div className="bg-[#edf1f9] content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0" data-name="Side Nav / Products">
      <Top />
    </div>
  );
}

function VNextPrimary() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary1() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary2() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Campaign Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary3() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary4() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary5() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary6() {
  return (
    <div className="bg-[#f9fbff] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Template Terms</p>
      </div>
    </div>
  );
}

function VNextSecondary() {
  return (
    <div className="bg-[#f9fbff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText />
        </div>
      </div>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Custom Terms</p>
      </div>
    </div>
  );
}

function VNextSecondary1() {
  return (
    <div className="bg-[#f9fbff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText1 />
        </div>
      </div>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d66de] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Contracts</p>
      </div>
    </div>
  );
}

function VNextSecondary2() {
  return (
    <div className="bg-[#d6ebff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText2 />
        </div>
      </div>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Changes</p>
      </div>
    </div>
  );
}

function VNextSecondary3() {
  return (
    <div className="bg-[#f9fbff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText3 />
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="secondary">
      <VNextPrimary6 />
      <VNextSecondary />
      <VNextSecondary1 />
      <VNextSecondary2 />
      <VNextSecondary3 />
    </div>
  );
}

function Items() {
  return (
    <div className="bg-[#f9fbff] content-stretch flex flex-col gap-[4px] h-full items-center overflow-clip p-[12px] relative rounded-tl-[16px] shrink-0 w-[252px]" data-name="Items">
      <VNextPrimary />
      <VNextPrimary1 />
      <VNextPrimary2 />
      <VNextPrimary3 />
      <VNextPrimary4 />
      <VNextPrimary5 />
      <Secondary />
    </div>
  );
}

function SecondarySideNav() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Secondary side nav">
      <Items />
    </div>
  );
}

function VNextSideNav() {
  return (
    <div className="absolute bg-[#edf1f9] bottom-0 content-stretch flex items-center justify-center left-0 top-[64px]" data-name="VNext Side Nav">
      <SideNavProducts />
      <SecondarySideNav />
    </div>
  );
}

function NavExpanded() {
  return (
    <div className="absolute bg-white h-[1519px] left-0 top-0 w-[1440px]" data-name="Nav Expanded">
      <VNextDesktopTopNav />
      <VNextSideNav />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative" data-name="Label">
      <div className="capitalize flex flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#25282f] text-[24px] w-full">
        <p className="leading-[33px] whitespace-pre-wrap">CNN Digital</p>
      </div>
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#818181] text-[14px] w-full whitespace-pre-wrap">Public Terms - Mar 29, 2024 00:00 EDT - Onwards</p>
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-down">
          <path d={svgPaths.p1ec8ecf0} fill="var(--fill-0, #25282F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VNextDropdownIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext dropdown icon">
      <ArrowDown2 />
    </div>
  );
}

function DropdownIconContainer() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-name="Dropdown icon container">
      <VNextDropdownIcon />
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-[#f0f1f3] content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#f0f1f3] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Actions</p>
      </div>
      <DropdownIconContainer />
    </div>
  );
}

function X() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 12">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p2d1a5700} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="VNext icon">
      <X />
    </div>
  );
}

function CloseButton() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Close button">
      <div aria-hidden="true" className="absolute border border-[#e0e9f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <VNextIcon />
    </div>
  );
}

function FormHeader() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-start relative shrink-0 w-full" data-name="Form Header">
      <Label />
      <SecondaryButton />
      <CloseButton />
    </div>
  );
}

function ListBullets() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ListBullets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_9670)" id="ListBullets">
          <path d="M4.17671 3.31055H6.45381" id="Vector" stroke="var(--stroke-0, #625DF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.30713 9H14.3071" id="Vector_2" stroke="var(--stroke-0, #625DF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.17671 14.5938H14.1767" id="Vector_3" stroke="var(--stroke-0, #625DF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p231e9280} fill="var(--fill-0, #625DF5)" id="Vector_4" />
          <path d={svgPaths.p146fb880} fill="var(--fill-0, #625DF5)" id="Vector_5" />
          <path d={svgPaths.p6e7fd40} fill="var(--fill-0, #625DF5)" id="Vector_6" />
          <path d={svgPaths.p24604180} fill="var(--fill-0, #625DF5)" id="sparkle" />
        </g>
        <defs>
          <clipPath id="clip0_1_9670">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <ListBullets />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">AI Summary of upcoming changes for CNN Digital</p>
      </div>
    </div>
  );
}

function MinusSign() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Minus-sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Minus-sign">
          <path d={svgPaths.p1f647f80} fill="var(--fill-0, #25282F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame10 />
      <MinusSign />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Frame11 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#25282f] text-[14px] w-[min-content]">
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[19px]">Effective Date: April 01, 2026</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[19px]">Commission Cut: The payout rate is decreasing from 6% to 2% for all qualified items, including Refurbished Products.</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[19px]">Other Terms: Action locking (21 days) and the 1-day referral window remain unchanged.</span>
          </li>
        </ul>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[9px] h-[137px] left-1/2 w-[688px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[0px] w-[685px]">
        <p className="decoration-solid leading-[19px] text-[14px] underline whitespace-pre-wrap">Show less</p>
      </div>
    </div>
  );
}

function AiTextSummaryPopHint() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="AI Text Summary / Pop / Hint">
      <div aria-hidden="true" className="absolute border border-[#625df5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center relative shrink-0 text-[#25282f] text-[18px]">
        <p className="leading-[23px]">2% Group NEW April 2025</p>
      </div>
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center relative shrink-0 text-[#606672] text-[14px]">
        <p className="leading-[18px]">Apr 01, 2026 00:00 PDT - ongoing</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fed8e3] content-stretch flex items-center px-[5px] py-[2px] relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Mulish:SemiBold',sans-serif] font-semibold leading-[23px] line-through not-italic relative shrink-0 text-[#bf1044] text-[18px]">6%</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#b6ffc9] content-stretch flex items-center px-[5px] py-[2px] relative shrink-0">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[23px] not-italic relative shrink-0 text-[#275143] text-[18px]">2%</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <Frame15 />
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#25282f] text-[18px]">USD</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-[612.5px]">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#25282f] text-[18px]">{`Online Sale: `}</p>
      <Frame16 />
    </div>
  );
}

function MinusSign1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Minus-sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Minus-sign">
          <path d={svgPaths.p1f647f80} fill="var(--fill-0, #121212)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame17 />
      <MinusSign1 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="Section title">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#25282f] text-[18px]">Payout Details</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Rank</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">1</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[67px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">&nbsp;</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white h-[67px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TableColumn() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[58px]" data-name="Table Column">
      <Heading />
      <TableCell />
      <TableCell1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Condition</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[0] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">
        <span className="leading-[15px]">{`List for item SKU is `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Sarabun:SemiBold',sans-serif] leading-[15px] text-[#1d66de] underline">Refurbished Products</span>
      </p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[67px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">All Other</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white h-[67px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[16px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Payout</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fed8e3] content-stretch flex flex-col h-[20px] items-center px-[5px] py-[2px] relative shrink-0" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Mulish:Regular',sans-serif] font-normal leading-[15px] line-through not-italic overflow-hidden relative shrink-0 text-[#bf1044] text-[12px] text-ellipsis w-full whitespace-nowrap">6% of item sale amount</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#b6ffc9] content-stretch flex flex-col h-[20px] items-center px-[5px] py-[2px] relative shrink-0" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#275143] text-[12px] text-ellipsis w-full whitespace-nowrap">2% of item sale amount</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Container4 />
      <Container5 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[67px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fed8e3] content-stretch flex flex-col h-[20px] items-center px-[5px] py-[2px] relative shrink-0" data-name="Container">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Mulish:Regular',sans-serif] font-normal leading-[15px] line-through not-italic overflow-hidden relative shrink-0 text-[#bf1044] text-[12px] text-ellipsis w-full whitespace-nowrap">6% of item sale amount</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#b6ffc9] content-stretch flex flex-col h-[20px] items-center px-[5px] py-[2px] relative shrink-0" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#275143] text-[12px] text-ellipsis w-full whitespace-nowrap">2% of item sale amount</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Container6 />
      <Container7 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[67px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function TableColumn2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[211px]" data-name="Table Column">
      <Heading2 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumn />
        <TableColumn1 />
        <TableColumn2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1028px]" data-name="Subsection">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25282f] text-[16px] w-full whitespace-pre-wrap">Payout Groups</p>
      <Table />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Condition</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">Customer Status is new</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableColumn3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <Heading3 />
      <TableCell6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Payout</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[11]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">increase payout by 10%</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableColumn4() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[211px]" data-name="Table Column">
      <Heading4 />
      <TableCell7 />
    </div>
  );
}

function Table1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumn3 />
        <TableColumn4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1028px]" data-name="Subsection">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25282f] text-[16px] w-full whitespace-pre-wrap">Payout Adjustments</p>
      <Table1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">Action Locking</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">Payout Scheduling</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function TableColumn5() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[153px]" data-name="Table Column">
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Actions are locked 10 day(s) after end of the month they are tracked</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Approved transactions are paid 5 day(s) after the end of the day they lock</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function TableColumn6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Table2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumn5 />
        <TableColumn6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Subsection2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1028px]" data-name="Subsection">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25282f] text-[16px] w-full whitespace-pre-wrap">Schedule</p>
      <Table2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">Credit Policy</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis w-full whitespace-nowrap">Referral Window</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function TableColumn7() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[153px]" data-name="Table Column">
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Last click</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#25282f] text-[12px] text-ellipsis">Allow referrals from clicks within 7 day(s)</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function TableColumn8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Table3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumn7 />
        <TableColumn8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e9f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Subsection3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[1028px]" data-name="Subsection">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25282f] text-[16px] w-full whitespace-pre-wrap">Qualified Referrals</p>
      <Table3 />
    </div>
  );
}

function Separator1() {
  return <div className="h-px shrink-0 w-full" data-name="separator" />;
}

function Separator2() {
  return (
    <div className="h-px relative shrink-0 w-[586px]" data-name="separator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 1">
        <g id="separator" />
      </svg>
    </div>
  );
}

function Details() {
  return (
    <div className="relative shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <SectionTitle />
        <Subsection />
        <Subsection1 />
        <Subsection2 />
        <Subsection3 />
        <Separator1 />
        <Separator2 />
      </div>
    </div>
  );
}

function Separator3() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="separator">
      <div className="absolute inset-[1px_0_0_0]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1060 1">
            <line id="Line 2" stroke="var(--stroke-0, #CACFD3)" x2="1060" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContractTerms() {
  return (
    <div className="h-[758px] relative rounded-[8px] shrink-0 w-full" data-name="Contract Terms">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Details />
        <Separator3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <ContractTerms />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Content1 />
    </div>
  );
}

function MinusSign2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Minus-sign">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Minus-sign">
          <path d={svgPaths.p1f647f80} fill="var(--fill-0, #121212)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#121212] text-[18px]">General Terms</p>
      <MinusSign2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-pre-wrap">Currency</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="h-[62px] relative shrink-0 w-full z-[13]" data-name="Table Cell">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-pre-wrap">Change Notification Period</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[12]" data-name="Table Cell">
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-pre-wrap">Reversal Policy</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[11]" data-name="Table Cell">
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
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Partner Tracking Pixel</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
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
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis w-full whitespace-nowrap">Additional Legal Terms</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white h-[62px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function TableColumn9() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[188px]" data-name="Table Column">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <div className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="mb-0">{`Financial transactions covered by this Template Term will be processed in the USD currency. Currency exchanges will occur when you or your partner(s) have `}</p>
        <p>set a different default currency in account settings.</p>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="relative shrink-0 w-full z-[13]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Container23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">The Contract can be changed or cancelled with 1 day(s) notification to the Partner.</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[12]" data-name="Table Cell">
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
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Reversal of performance advertising actions are decided by the Advertiser governed by a max reversal percentage of 100%.</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[11]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-ellipsis">Advertiser does NOT allow Partner to fire their tracking pixel when the consumer action is completed.</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full z-[10]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[180px]" data-name="Container">
      <div className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</p>
        <p className="mb-0">{`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum `}</p>
        <p>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-white h-[62px] relative shrink-0 w-full z-[9]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[16px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function TableColumn10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Table Column">
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
    </div>
  );
}

function Table4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        <TableColumn9 />
        <TableColumn10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f3f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Subsection4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1028px]" data-name="Subsection">
      <Table4 />
    </div>
  );
}

function Separator4() {
  return <div className="h-px shrink-0 w-full" data-name="separator" />;
}

function Separator5() {
  return (
    <div className="h-px relative shrink-0 w-[586px]" data-name="separator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 586 1">
        <g id="separator" />
      </svg>
    </div>
  );
}

function Details1() {
  return (
    <div className="h-[308px] relative shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection4 />
        <Separator4 />
        <Separator5 />
      </div>
    </div>
  );
}

function Separator6() {
  return <div className="h-px shrink-0 w-full" data-name="separator" />;
}

function ContractTerms1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Contract Terms">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Header1 />
        <Details1 />
        <Separator6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <ContractTerms1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[316px] p-[32px] top-[64px] w-[1124px]">
      <FormHeader />
      <AiTextSummaryPopHint />
      <Frame18 />
      <Content2 />
    </div>
  );
}

export default function ViewTerms() {
  return (
    <div className="relative size-full" data-name="View Terms">
      <NavExpanded />
      <Frame6 />
    </div>
  );
}