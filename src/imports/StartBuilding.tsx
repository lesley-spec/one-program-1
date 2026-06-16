import svgPaths from "./svg-t747lx98vt";
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Sarabun:Regular',sans-serif] items-start not-italic relative shrink-0">
      <p className="leading-[18px] relative shrink-0 text-[#e4e5e8] text-[14px]">Adidas</p>
      <p className="leading-[13px] relative shrink-0 text-[#a7a7a7] text-[10px]">Performance</p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="arrow-down">
          <path d={svgPaths.p382bad00} fill="var(--fill-0, #E4E5E8)" id="Vector" />
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
    <div className="bg-[#18191d] content-stretch flex gap-[8px] h-[40px] items-center pl-[4px] pr-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Account Name">
      <BrandAvatar />
      <Frame1 />
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
          <path clipRule="evenodd" d={svgPaths.pb44c500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
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
          <path clipRule="evenodd" d={svgPaths.p25c3e930} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
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
        <path clipRule="evenodd" d={svgPaths.pb2cd6c0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
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
          <path clipRule="evenodd" d={svgPaths.p1adfb900} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
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
          <path clipRule="evenodd" d={svgPaths.p485000} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
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
        <path clipRule="evenodd" d={svgPaths.p22921500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
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
          <path d={svgPaths.p382bad00} fill="var(--fill-0, #E4E5E8)" id="Vector" />
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
    <div className="bg-[#18191d] content-stretch flex gap-[8px] h-[40px] items-center pl-[16px] pr-[12px] relative rounded-[9999px] shrink-0" data-name="Spacious Status (finance widget)">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#e4e5e8] text-[14px] text-center">$0.00</p>
      <Frame />
    </div>
  );
}

function PartnerAvatar() {
  return (
    <div className="bg-[#606672] content-stretch flex flex-col items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Partner avatar">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[14px] text-center whitespace-nowrap">
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

function RightSide() {
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
    <div className="absolute bg-[#323742] content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] right-0 top-0" data-name="VNext Desktop Top Nav">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function NavCollapsed1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="nav-collapsed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="nav-collapsed">
          <g id="Vector">
            <path d={svgPaths.p37fd3f00} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2107a480} fill="var(--fill-0, #E4E5E8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <NavCollapsed1 />
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
          <line id="Line 2" stroke="var(--stroke-0, #A7A7A7)" x2="20" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
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
          <path d={svgPaths.p78afd80} fill="var(--fill-0, #9AC0FF)" id="Vector" />
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
    <div className="bg-[#414a5f] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
      <IconContainer10 />
    </div>
  );
}

function SideNavProductItems1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 size-[64px]" data-name="Side Nav / Product items">
      <IconContainer9 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[10px] text-center tracking-[0.2px] w-[54px]">
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
          <path clipRule="evenodd" d={svgPaths.p2f68d1c0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p15b06e00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p53838c0} fill="var(--fill-0, #E4E5E8)" id="Vector_3" />
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
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px] whitespace-pre-wrap">Discover</p>
      </div>
    </div>
  );
}

function OptimizeNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Optimize-not filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_9948)" id="Optimize-not filled">
          <path clipRule="evenodd" d={svgPaths.p53fa530} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1d966900} fill="var(--fill-0, #E4E5E8)" id="Vector_2" />
          <path d={svgPaths.p347f6600} fill="var(--fill-0, #E4E5E8)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_9948">
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
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[10px] text-center tracking-[0.2px] w-[54px]">
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
          <path clipRule="evenodd" d={svgPaths.p24e341c0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p14c79280} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector_3" />
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
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[10px] text-center tracking-[0.2px] w-[54px]">
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
          <path d={svgPaths.p35084b00} fill="var(--fill-0, #E4E5E8)" id="Vector" />
          <path d={svgPaths.p14aaad70} fill="var(--fill-0, #E4E5E8)" id="Vector_2" />
          <path d={svgPaths.p9a2eb00} fill="var(--fill-0, #E4E5E8)" id="Vector_3" />
          <path d={svgPaths.pe092080} fill="var(--fill-0, #E4E5E8)" id="Vector_4" />
          <path d={svgPaths.p3eecc100} fill="var(--fill-0, #E4E5E8)" id="Vector_5" />
          <path d={svgPaths.p360c5a80} fill="var(--fill-0, #E4E5E8)" id="Vector_6" />
          <path d={svgPaths.p199c6d80} fill="var(--fill-0, #E4E5E8)" id="Vector_7" />
          <path d={svgPaths.p1aaa8280} fill="var(--fill-0, #E4E5E8)" id="Vector_8" />
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
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[10px] text-center tracking-[0.2px] w-[54px]">
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
      <Frame2 />
      <Products />
    </div>
  );
}

function SideNavProducts() {
  return (
    <div className="bg-[#323742] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Side Nav / Products">
      <Top />
    </div>
  );
}

function VNextSideNav() {
  return (
    <div className="absolute bg-[#323742] bottom-[6px] content-stretch flex flex-col items-start left-0 top-[64px]" data-name="VNext Side Nav">
      <SideNavProducts />
    </div>
  );
}

function NavCollapsed() {
  return (
    <div className="absolute bg-[#323742] h-[900px] left-0 top-0 w-[1440px]" data-name="Nav Collapsed">
      <VNextDesktopTopNav />
      <VNextSideNav />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-[#e4e5e8] text-center" data-name="Title">
      <p className="capitalize font-['Sarabun:Bold',sans-serif] leading-[33px] relative shrink-0 text-[24px]">Build Your Report</p>
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] relative shrink-0 text-[14px] w-[413px] whitespace-pre-wrap">Select a visualization to start building a report according to your specific Dimensions and Measures.</p>
    </div>
  );
}

function DataTableOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Data Table - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Data Table - Outline">
          <path clipRule="evenodd" d={svgPaths.p23579000} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <DataTableOutline />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Data Table</p>
    </div>
  );
}

function VNextWidgetSelectionCard() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer19 />
      <Label />
    </div>
  );
}

function LineOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Line - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Line - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6827180} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1511a580} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <LineOutline />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Line</p>
    </div>
  );
}

function VNextWidgetSelectionCard1() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer20 />
      <Label1 />
    </div>
  );
}

function AreaOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Area - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_100_5268)" id="Area - Outline">
          <path clipRule="evenodd" d={svgPaths.p360dea00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_100_5268">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <AreaOutline />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Area</p>
    </div>
  );
}

function VNextWidgetSelectionCard2() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer21 />
      <Label2 />
    </div>
  );
}

function TreemapOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Treemap - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Treemap - Outline">
          <path clipRule="evenodd" d={svgPaths.p2465e600} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <TreemapOutline />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Treemap</p>
    </div>
  );
}

function VNextWidgetSelectionCard3() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer22 />
      <Label3 />
    </div>
  );
}

function VerticalBarOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Vertical bar - Outline">
      <div className="absolute inset-[0_0_-1.11%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32.3556">
          <g id="Vertical bar - Outline">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1fed22a0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p13dfaf80} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p536ad00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <VerticalBarOutline />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Vertical bar</p>
    </div>
  );
}

function VNextWidgetSelectionCard4() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer23 />
      <Label4 />
    </div>
  );
}

function VerticalStackOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Vertical Stack - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vertical Stack - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1872fc00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d3b6180} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13dfaf80} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.peb77e00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p133de800} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p23ee9300} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <VerticalStackOutline />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Vertical Stack</p>
    </div>
  );
}

function VNextWidgetSelectionCard5() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer24 />
      <Label5 />
    </div>
  );
}

function HorizontalBarFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Horizontal Bar - Filled">
      <div className="absolute inset-[0_-0.56%_-0.56%_-0.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3556 32.1777">
          <g id="Horizontal Bar - Filled">
            <g id="Vector">
              <path d={svgPaths.p3810ff80} fill="url(#paint0_linear_100_5262)" />
              <path d={svgPaths.p22172480} fill="url(#paint1_linear_100_5262)" />
              <path d={svgPaths.p21c41e00} fill="url(#paint2_linear_100_5262)" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_100_5262" x1="0" x2="32.3556" y1="16.1778" y2="16.1778">
              <stop stopColor="#2378CE" />
              <stop offset="1" stopColor="#D73184" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_100_5262" x1="0" x2="32.3556" y1="16.1778" y2="16.1778">
              <stop stopColor="#2378CE" />
              <stop offset="1" stopColor="#D73184" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_100_5262" x1="0" x2="32.3556" y1="16.1778" y2="16.1778">
              <stop stopColor="#2378CE" />
              <stop offset="1" stopColor="#D73184" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconContainer25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <HorizontalBarFilled />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Horizontal Bar</p>
    </div>
  );
}

function VNextWidgetSelectionCard6() {
  return (
    <div className="bg-[#323742] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#e4e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer25 />
      <Label6 />
    </div>
  );
}

function HorizontalStackOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Horizontal Stack - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Horizontal Stack - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3ec6b900} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pb34e9f0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1dea2f60} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d74e900} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p227f3080} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p12c28000} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <HorizontalStackOutline />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Horizontal Stack</p>
    </div>
  );
}

function VNextWidgetSelectionCard7() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer26 />
      <Label7 />
    </div>
  );
}

function ComboOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Combo - Outline">
      <div className="absolute inset-[0_0_-1.11%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32.3556">
          <g id="Combo - Outline">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1d9f9af0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pdacd000} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <ComboOutline />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Combo</p>
    </div>
  );
}

function VNextWidgetSelectionCard8() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer27 />
      <Label8 />
    </div>
  );
}

function FunnelOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Funnel - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32.0001">
        <g id="Funnel - Outline">
          <path clipRule="evenodd" d={svgPaths.p19696b00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <FunnelOutline />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Funnel</p>
    </div>
  );
}

function VNextWidgetSelectionCard9() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer28 />
      <Label9 />
    </div>
  );
}

function DonutOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Donut - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Donut - Outline">
          <path clipRule="evenodd" d={svgPaths.p3ed2bff0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <DonutOutline />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Donut</p>
    </div>
  );
}

function VNextWidgetSelectionCard10() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer29 />
      <Label10 />
    </div>
  );
}

function GoalOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Goal - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Goal - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p16ad2e00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29eb7900} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <GoalOutline />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Goals</p>
    </div>
  );
}

function VNextWidgetSelectionCard11() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer30 />
      <Label11 />
    </div>
  );
}

function NumberOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Number - Outline">
      <div className="absolute inset-[0_0_0_-1.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3927 32">
          <g id="Number - Outline">
            <path clipRule="evenodd" d={svgPaths.p201abf00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <NumberOutline />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Number</p>
    </div>
  );
}

function VNextWidgetSelectionCard12() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer31 />
      <Label12 />
    </div>
  );
}

function TextOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Text - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Text - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p34b51200} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path d={svgPaths.pa045bc0} fill="var(--fill-0, #E4E5E8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Icon Container">
      <TextOutline />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Text</p>
    </div>
  );
}

function VNextWidgetSelectionCard13() {
  return (
    <div className="bg-[#18191d] content-stretch flex flex-col gap-[4px] h-[110px] items-center justify-center relative rounded-[8px] shrink-0 w-[148px]" data-name="VNext Widget Selection Card">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconContainer32 />
      <Label13 />
    </div>
  );
}

function ChartTypes() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[652px]" data-name="Chart types">
      <VNextWidgetSelectionCard />
      <VNextWidgetSelectionCard1 />
      <VNextWidgetSelectionCard2 />
      <VNextWidgetSelectionCard3 />
      <VNextWidgetSelectionCard4 />
      <VNextWidgetSelectionCard5 />
      <VNextWidgetSelectionCard6 />
      <VNextWidgetSelectionCard7 />
      <VNextWidgetSelectionCard8 />
      <VNextWidgetSelectionCard9 />
      <VNextWidgetSelectionCard10 />
      <VNextWidgetSelectionCard11 />
      <VNextWidgetSelectionCard12 />
      <VNextWidgetSelectionCard13 />
    </div>
  );
}

function MouseFinger() {
  return (
    <div className="absolute inset-[0_6.58%_0_0]" data-name="Mouse/Finger">
      <div className="absolute inset-[-14.29%_-22.94%_-28.57%_-22.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0794 20">
          <g id="Mouse/Finger">
            <g filter="url(#filter0_d_100_5240)" id="Pointer">
              <mask fill="black" height="16" id="path-1-outside-1_100_5240" maskUnits="userSpaceOnUse" width="16" x="2.00005" y="1">
                <rect fill="white" height="16" width="16" x="2.00005" y="1" />
                <path clipRule="evenodd" d={svgPaths.p3fd1cb80} fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d={svgPaths.p3fd1cb80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p196bd8c0} fill="var(--stroke-0, #E4E5E8)" mask="url(#path-1-outside-1_100_5240)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_100_5240" width="19.0794" x="-1.19209e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.251076 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_100_5240" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_100_5240" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PointerFinger() {
  return (
    <div className="absolute left-[652px] size-[14px] top-[696.5px]" data-name="pointer-finger">
      <MouseFinger />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <Title />
      <ChartTypes />
      <PointerFinger />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute bg-[#18191d] content-stretch flex h-[828px] items-start left-[64px] overflow-clip p-[32px] rounded-[16px] top-[64px] w-[1368px]" data-name="Page">
      <Content />
    </div>
  );
}

export default function StartBuilding() {
  return (
    <div className="bg-white relative size-full" data-name="Start building">
      <NavCollapsed />
      <Page />
    </div>
  );
}