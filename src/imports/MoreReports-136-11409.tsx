import svgPaths from "./svg-m48z0ftoro";
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

function Frame16() {
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
        <Frame16 />
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
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center">$23,505.44</p>
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

function Frame43() {
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
          <path d={svgPaths.p78afd80} fill="var(--fill-0, #25282F)" id="Vector" />
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
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer10 />
    </div>
  );
}

function SideNavProductItems1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer9 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
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
          <path clipRule="evenodd" d={svgPaths.p14c79280} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector_3" />
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

function Vector1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-1/2 overflow-clip top-1/2 w-[22.65px]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.65 24">
        <g id="Layer_1-2">
          <path d={svgPaths.p35084b00} fill="var(--fill-0, #25282F)" id="Vector" />
          <path d={svgPaths.p14aaad70} fill="var(--fill-0, #25282F)" id="Vector_2" />
          <path d={svgPaths.p9a2eb00} fill="var(--fill-0, #25282F)" id="Vector_3" />
          <path d={svgPaths.pe092080} fill="var(--fill-0, #25282F)" id="Vector_4" />
          <path d={svgPaths.p3eecc100} fill="var(--fill-0, #25282F)" id="Vector_5" />
          <path d={svgPaths.p360c5a80} fill="var(--fill-0, #25282F)" id="Vector_6" />
          <path d={svgPaths.p199c6d80} fill="var(--fill-0, #25282F)" id="Vector_7" />
          <path d={svgPaths.p1aaa8280} fill="var(--fill-0, #25282F)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function InsightsNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Insights-not filled">
      <Vector1 />
    </div>
  );
}

function IconContainer18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon Container">
      <InsightsNotFilled />
    </div>
  );
}

function IconContainer17() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer18 />
    </div>
  );
}

function SideNavProductItems5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer17 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px] whitespace-pre-wrap">Insights</p>
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
      <SideNavProductItems5 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Top">
      <SideNavProductItems />
      <Frame43 />
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

function V2Primary() {
  return (
    <div className="bg-[#edf1f9] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="V2 Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[16px]">
            <p className="leading-[20px] whitespace-pre-wrap">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VNextPrimary() {
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

function VNextPrimary1() {
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

function VNextPrimary2() {
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

function IconText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Performances</p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="aspect-[12/12] flex-[1_0_0] min-h-px min-w-px relative" data-name="arrow-right">
      <div className="absolute inset-[0_20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99985 9.99985">
          <path d={svgPaths.p404bc00} fill="var(--fill-0, #25282F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="Icon">
      <ArrowRight />
    </div>
  );
}

function ArrowContainer() {
  return (
    <div className="absolute content-stretch flex items-end left-[16px] pt-px top-[11px]" data-name="Arrow container">
      <Icon />
    </div>
  );
}

function VNextSecondary() {
  return (
    <div className="bg-[#f9fbff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText />
          <ArrowContainer />
        </div>
      </div>
    </div>
  );
}

function Performances() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Performances">
      <VNextSecondary />
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Data Lab</p>
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
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">Saved</p>
      </div>
    </div>
  );
}

function VNextSecondary2() {
  return (
    <div className="bg-[#f9fbff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
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
        <p className="leading-[18px] whitespace-pre-wrap">Scheduled</p>
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

function IconText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Icon + Text">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1d66de] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">More Reports</p>
      </div>
    </div>
  );
}

function VNextSecondary4() {
  return (
    <div className="bg-[#d6ebff] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="VNext Secondary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[2px] relative size-full">
          <IconText4 />
        </div>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="secondary">
      <VNextPrimary2 />
      <Performances />
      <VNextSecondary1 />
      <VNextSecondary2 />
      <VNextSecondary3 />
      <VNextSecondary4 />
    </div>
  );
}

function VNextPrimary3() {
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

function VNextPrimary4() {
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

function VNextPrimary5() {
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

function Items() {
  return (
    <div className="bg-[#f9fbff] content-stretch flex flex-col gap-[4px] h-full items-center overflow-clip p-[12px] relative rounded-tl-[16px] shrink-0 w-[252px]" data-name="Items">
      <V2Primary />
      <VNextPrimary />
      <VNextPrimary1 />
      <Secondary />
      <VNextPrimary3 />
      <VNextPrimary4 />
      <VNextPrimary5 />
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
    <div className="absolute bg-[#edf1f9] h-[1187px] left-0 top-0 w-[1440px]" data-name="Nav Expanded">
      <VNextDesktopTopNav />
      <VNextSideNav />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Title">
      <div className="capitalize flex flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px] whitespace-nowrap">
        <p className="leading-[33px]">More reports</p>
      </div>
    </div>
  );
}

function TertiaryButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Manage Categories</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#1d66de] content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Primary Button">
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
          <path clipRule="evenodd" d={svgPaths.pb44c500} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
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

function IconContainer19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon container">
      <VNextIcon />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Search Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer19 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a7a7a7] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Search Name, Description</p>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="content-stretch flex font-['Sarabun:SemiBold',sans-serif] gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[#134ed3] text-[14px]" data-name="Count">
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">4</p>
    </div>
  );
}

function FilterButton() {
  return (
    <div className="bg-[#d6ebff] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border-[#d6ebff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#134ed3] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Categories</p>
      </div>
      <Count />
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

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FilterGroup />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px]">Favorited</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame40 />
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

function Label() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Label />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Performance by Partner</p>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame18 />
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

function Frame38() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame19 />
      <HeartFilled />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Les Perf Dash</p>
      </div>
      <Label2 />
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

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame23 />
      <HeartFilled1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame21 />
        </div>
      </div>
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Albert Finance Dashboard</p>
      </div>
      <Label4 />
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

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame26 />
      <HeartFilled2 />
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

function Label7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-[#f2f3f4] content-stretch flex gap-[8px] h-[24px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Label">
      <Label7 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Benchmark Report</p>
      </div>
      <Label6 />
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

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame29 />
      <HeartFilled3 />
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

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Benchmark Report</p>
      </div>
      <Label8 />
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

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame32 />
      <HeartFilled4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[15px] items-center overflow-clip relative shrink-0 w-[1060px]">
      <Frame17 />
      <Frame20 />
      <Frame24 />
      <Frame27 />
      <Frame30 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start ml-0 mt-0 relative row-1 w-[1060px]">
      <Frame42 />
      <Frame22 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame33 />
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

function IconContainer20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <ShowHide />
    </div>
  );
}

function TertiaryIconButton6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[16px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Tertiary Icon Button">
      <IconContainer20 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <TertiaryIconButton6 />
    </div>
  );
}

function RightSide2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0" data-name="Right side">
      <Frame8 />
    </div>
  );
}

function TableActions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Table Actions">
      <LeftSide1 />
      <RightSide2 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[20px] h-[17px] items-center relative shrink-0 w-full">
      <TableActions />
    </div>
  );
}

function Frame12() {
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
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Container() {
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
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container1() {
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
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
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
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
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
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
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
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
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
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
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
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
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
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
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
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
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
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
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
          <Container10 />
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

function Frame13() {
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
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
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
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
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
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
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
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
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
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
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
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
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
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
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
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
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
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
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
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
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
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
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
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
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
          <Container22 />
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

function Frame14() {
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
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
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

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label10 />
    </div>
  );
}

function Labels() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[25]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
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

function Container24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label12 />
    </div>
  );
}

function Labels1() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[24]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">My Own Category</p>
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

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Label14 />
    </div>
  );
}

function Labels2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[23]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
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

function Labels3() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[22]" data-name="Labels">
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
        <p className="leading-[15px]">Performance</p>
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

function Labels4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[21]" data-name="Labels">
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
        <p className="leading-[15px]">Performance</p>
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

function Labels5() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[20]" data-name="Labels">
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

function Labels6() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[19]" data-name="Labels">
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
        <p className="leading-[15px]">Built</p>
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

function Labels7() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[18]" data-name="Labels">
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
        <p className="leading-[15px]">Listing</p>
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

function Labels8() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[17]" data-name="Labels">
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

function Labels9() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[16]" data-name="Labels">
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
        <p className="leading-[15px]">Listing</p>
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

function Labels10() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[15]" data-name="Labels">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Container33 />
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[14px] text-ellipsis">Pinned</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[20]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled />
    </div>
  );
}

function Status() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[19]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status1 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled1 />
    </div>
  );
}

function Status2() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[18]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status3 />
        </div>
      </div>
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="off copy 5" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Status5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <Delete />
    </div>
  );
}

function Status4() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[17]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status5 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled2 />
    </div>
  );
}

function Status6() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[16]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status7 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled3 />
    </div>
  );
}

function Status8() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[15]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status9 />
        </div>
      </div>
    </div>
  );
}

function Delete1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="off copy 5" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Status11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <Delete1 />
    </div>
  );
}

function Status10() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[14]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status11 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled4 />
    </div>
  );
}

function Status12() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[13]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status13 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled5 />
    </div>
  );
}

function Status14() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[12]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status15 />
        </div>
      </div>
    </div>
  );
}

function Delete2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="off copy 5" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Status17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <Delete2 />
    </div>
  );
}

function Status16() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[11]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status17 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled6 />
    </div>
  );
}

function Status18() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[10]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status19 />
        </div>
      </div>
    </div>
  );
}

function ApproveFilled7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Approve-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Approve-filled">
          <path clipRule="evenodd" d={svgPaths.p32f7b00} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Oval 4 Copy 6" />
          <path clipRule="evenodd" d={svgPaths.p33896e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Status21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <ApproveFilled7 />
    </div>
  );
}

function Status20() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[9]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status21 />
        </div>
      </div>
    </div>
  );
}

function Delete3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="off copy 5" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Status23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="status">
      <Delete3 />
    </div>
  );
}

function Status22() {
  return (
    <div className="bg-white h-[54px] relative shrink-0 w-full z-[8]" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[16px] relative size-full">
          <Status23 />
        </div>
      </div>
    </div>
  );
}

function TableColumn3() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[80px]" data-name="Table Column">
      <Heading3 />
      <Status />
      <Status2 />
      <Status4 />
      <Status6 />
      <Status8 />
      <Status10 />
      <Status12 />
      <Status14 />
      <Status16 />
      <Status18 />
      <Status20 />
      <Status22 />
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="bg-[#1d66de] content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Primary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
        <p className="leading-[18px] whitespace-pre-wrap">View</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-[#f0f1f3] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#f0f1f3] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Pin</p>
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

function IconContainer21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <HeartFilled5 />
    </div>
  );
}

function SecondaryButton1() {
  return (
    <div className="bg-[#f0f1f3] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#f0f1f3] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <IconContainer21 />
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

function IconContainer22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <TripleDotsHorizontal />
    </div>
  );
}

function SecondaryIconButton() {
  return (
    <div className="bg-[#f0f1f3] content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[16px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Secondary Icon Button">
      <div aria-hidden="true" className="absolute border border-[#f0f1f3] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <IconContainer22 />
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

function Frame1() {
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
      <Frame1 />
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

function Frame2() {
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
      <Frame2 />
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

function Frame3() {
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
      <Frame3 />
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

function Frame4() {
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
      <Frame4 />
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

function Frame5() {
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
      <Frame5 />
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

function Frame6() {
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
      <Frame6 />
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

function Frame10() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
      <TableColumn />
      <TableColumn1 />
      <TableColumn2 />
      <TableColumn3 />
      <RowHoverActions />
      <SingleSelect />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame10 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Group />
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[829px] items-start left-[316px] p-[32px] top-[71px] w-[1124px]">
      <TableLayoutHeading />
      <Frame39 />
      <Frame41 />
    </div>
  );
}

export default function MoreReports() {
  return (
    <div className="relative size-full" data-name="More reports">
      <NavExpanded />
      <Frame9 />
    </div>
  );
}