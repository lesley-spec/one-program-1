import svgPaths from "./svg-o8csp0dhql";
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

function Frame7() {
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
      <Frame7 />
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

function Frame8() {
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
      <Frame8 />
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

function Breadcrumb() {
  return (
    <div className="content-stretch flex font-['Sarabun:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#a7a7a7] text-[14px] whitespace-nowrap" data-name="Breadcrumb">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px]">Breadcrumb</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[18px]">/</p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tooltip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tooltip">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p256db400} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path d="M7.2 10.4H8.8V12H7.2V10.4Z" fill="var(--fill-0, #E4E5E8)" />
            <path clipRule="evenodd" d={svgPaths.p208f680} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path d={svgPaths.p3aab4b00} fill="var(--fill-0, #E4E5E8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Sarabun:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[24px] whitespace-nowrap">
        <p className="leading-[33px]">Example Report</p>
      </div>
      <Tooltip />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Breadcrumb />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Frame5 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Main">
      <Frame4 />
    </div>
  );
}

function TableLayoutHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[1216px]" data-name="Table Layout Heading">
      <Main />
    </div>
  );
}

function Calendar() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d={svgPaths.p270c7100} fill="var(--fill-0, #E4E5E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VNextCalendarIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="VNext calendar icon">
      <Calendar />
    </div>
  );
}

function Date() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Date">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['Sarabun:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#606672] text-[14px] whitespace-pre-wrap">Select Date</p>
        <VNextCalendarIcon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#606672] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SearchDate() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Search + Date">
      <Date />
    </div>
  );
}

function FilterButton() {
  return (
    <div className="bg-[#2d3239] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border border-[#2d3239] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Filter Name</p>
      </div>
    </div>
  );
}

function FilterButton1() {
  return (
    <div className="bg-[#2d3239] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border border-[#2d3239] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Filter Name</p>
      </div>
    </div>
  );
}

function FilterButton2() {
  return (
    <div className="bg-[#2d3239] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border border-[#2d3239] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Filter Name</p>
      </div>
    </div>
  );
}

function FilterButton3() {
  return (
    <div className="bg-[#2d3239] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Filter Button">
      <div aria-hidden="true" className="absolute border border-[#2d3239] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e4e5e8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Filter Name</p>
      </div>
    </div>
  );
}

function TripleDotsHorizontal() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="triple-dots-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="triple-dots-horizontal">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2f8c8800} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p938e400} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3700} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <TripleDotsHorizontal />
    </div>
  );
}

function FilterTripleDot() {
  return (
    <div className="bg-[#2d3239] content-stretch flex items-center justify-center p-[10px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Filter triple dot">
      <div aria-hidden="true" className="absolute border border-[#2d3239] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <IconContainer19 />
    </div>
  );
}

function TertiaryButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e4e5e8] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Clear All</p>
      </div>
    </div>
  );
}

function FilterGroup() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <SearchDate />
      <FilterButton />
      <FilterButton1 />
      <FilterButton2 />
      <FilterButton3 />
      <FilterTripleDot />
      <TertiaryButton />
    </div>
  );
}

function DeprecateTripleDotsVertical() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="(DEPRECATE) triple-dots-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) triple-dots-vertical">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p18967e80} fill="var(--fill-0, #A7A7A7)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10007b00} fill="var(--fill-0, #A7A7A7)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p30d1d100} fill="var(--fill-0, #A7A7A7)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <DeprecateTripleDotsVertical />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="capitalize font-['Sarabun:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[16px]">Widget Name</p>
      <IconContainer20 />
    </div>
  );
}

function DotContainer() {
  return (
    <div className="h-[15px] relative shrink-0 w-[6px]" data-name="Dot Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
        <g id="Dot Container">
          <circle cx="3" cy="7.5" fill="var(--fill-0, #56B5FF)" id="Color" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">Clicks</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Legend">
      <DotContainer />
      <Label />
    </div>
  );
}

function DotContainer1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[6px]" data-name="Dot Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
        <g id="Dot Container">
          <circle cx="3" cy="7.5" fill="var(--fill-0, #FF4EA6)" id="Color" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">Impressions</p>
    </div>
  );
}

function Legend1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Legend">
      <DotContainer1 />
      <Label1 />
    </div>
  );
}

function LegendGroup() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[0.31px] content-stretch flex gap-[16px] items-start justify-center left-[calc(50%-2.5px)]" data-name="Legend Group">
      <Legend />
      <Legend1 />
    </div>
  );
}

function YAxisChartLine() {
  return (
    <div className="absolute bottom-[0.31px] content-stretch flex gap-[8px] h-[12px] items-center justify-center left-0 right-0" data-name="y axis + chart line">
      <p className="font-['Sarabun:Regular',sans-serif] h-[14px] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px] text-right w-[32px] whitespace-pre-wrap">0</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Chart line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 613 1">
            <line id="Chart line" stroke="var(--stroke-0, #323742)" x2="613" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function YAxisChartLine1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[8px] h-[12px] items-center justify-center left-0 right-0 top-[calc(50%+5.69px)]" data-name="y axis + chart line">
      <p className="font-['Sarabun:Regular',sans-serif] h-[14px] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px] text-right w-[32px] whitespace-pre-wrap">50K</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Chart line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 613 1">
            <line id="Chart line" stroke="var(--stroke-0, #323742)" x2="613" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function YAxisChartLine2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[12px] items-center justify-center left-0 right-0 top-[0.69px]" data-name="y axis + chart line">
      <p className="font-['Sarabun:Regular',sans-serif] h-[14px] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px] text-right w-[32px] whitespace-pre-wrap">100K</p>
      <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="Chart line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 613 1">
            <line id="Chart line" stroke="var(--stroke-0, #323742)" x2="613" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div className="absolute inset-[0_1px_41px_0]" data-name="Chart">
      <YAxisChartLine />
      <YAxisChartLine1 />
      <YAxisChartLine2 />
      <div className="absolute inset-[15.64%_0_1.77%_40.15px]" data-name="areaChart">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 612.851 241.153">
          <path clipRule="evenodd" d={svgPaths.p208cd180} fill="var(--fill-0, #FF4EA6)" fillRule="evenodd" id="areaChart" />
        </svg>
      </div>
      <div className="absolute inset-[53.83%_0_1.77%_40px]" data-name="areaChart">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 612.997 129.654">
          <path clipRule="evenodd" d={svgPaths.p1540f270} fill="var(--fill-0, #56B5FF)" fillRule="evenodd" id="areaChart" />
        </svg>
      </div>
    </div>
  );
}

function XAxis() {
  return (
    <div className="absolute bottom-[23.91px] content-stretch flex font-['Sarabun:Regular',sans-serif] h-[14px] items-center justify-between leading-[normal] left-[40.48px] not-italic right-[0.52px] text-[#e4e5e8] text-[11px] text-ellipsis whitespace-nowrap" data-name="X-axis">
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative">May 1</p>
      <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-right">May 30</p>
    </div>
  );
}

function Area() {
  return (
    <div className="h-[333px] relative shrink-0 w-full" data-name="Area">
      <LegendGroup />
      <Chart />
      <XAxis />
    </div>
  );
}

function Widget() {
  return (
    <div className="bg-[#18191d] h-[434px] relative rounded-[8px] shrink-0 w-[686px]" data-name="Widget">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame1 />
        <Area />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#414a5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Page() {
  return (
    <div className="flex-[1_0_0] h-[900px] min-h-px min-w-px relative" data-name="Page">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <TableLayoutHeading />
          <FilterGroup />
          <Widget />
        </div>
      </div>
    </div>
  );
}

function DataTableFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Data Table - Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Data Table - Filled">
          <g id="Vector">
            <path d={svgPaths.p16513280} fill="url(#paint0_linear_106_11926)" />
            <path d={svgPaths.p23630800} fill="url(#paint1_linear_106_11926)" />
            <path d={svgPaths.p3f41a700} fill="url(#paint2_linear_106_11926)" />
            <path d="M6.6 24H11.4V18.6H6.6V24Z" fill="url(#paint3_linear_106_11926)" />
            <path d="M12.6 24H17.4V18.6H12.6V24Z" fill="url(#paint4_linear_106_11926)" />
            <path d={svgPaths.pdb21270} fill="url(#paint5_linear_106_11926)" />
            <path d="M24 17.4V12.6H18.6V17.4H24Z" fill="url(#paint6_linear_106_11926)" />
            <path d="M24 11.4V6.6H18.6V11.4H24Z" fill="url(#paint7_linear_106_11926)" />
            <path d="M6.6 11.4V6.6H11.4V11.4H6.6Z" fill="url(#paint8_linear_106_11926)" />
            <path d={svgPaths.p7fccf00} fill="url(#paint9_linear_106_11926)" />
            <path d={svgPaths.p33470e80} fill="url(#paint10_linear_106_11926)" />
            <path d={svgPaths.p1fa0f680} fill="url(#paint11_linear_106_11926)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_106_11926" x1="0" x2="24" y1="12" y2="12">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <DataTableFilled />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[200.5px]">
      <IconContainer21 />
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#e4e5e8] text-[18px]">Data Table</p>
    </div>
  );
}

function Minimize() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Minimize">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Minimize">
          <g id="Vector">
            <path d={svgPaths.p30fba100} fill="var(--fill-0, #E4E5E8)" />
            <path clipRule="evenodd" d={svgPaths.p3267d500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <Minimize />
    </div>
  );
}

function TertiaryIconButton6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[16px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Tertiary Icon Button">
      <IconContainer22 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#323742] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame2 />
          <TertiaryIconButton6 />
        </div>
      </div>
    </div>
  );
}

function DataTableFilled1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Data Table - Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Data Table - Filled">
          <g id="Vector">
            <path d={svgPaths.p326dd900} fill="url(#paint0_linear_106_11683)" />
            <path d={svgPaths.p3c7df500} fill="url(#paint1_linear_106_11683)" />
            <path d={svgPaths.p2de2a3c0} fill="url(#paint2_linear_106_11683)" />
            <path d="M4.4 16H7.6V12.4H4.4V16Z" fill="url(#paint3_linear_106_11683)" />
            <path d="M8.4 16H11.6V12.4H8.4V16Z" fill="url(#paint4_linear_106_11683)" />
            <path d={svgPaths.p299b2100} fill="url(#paint5_linear_106_11683)" />
            <path d="M16 11.6V8.4H12.4V11.6H16Z" fill="url(#paint6_linear_106_11683)" />
            <path d="M16 7.6V4.4H12.4V7.6H16Z" fill="url(#paint7_linear_106_11683)" />
            <path d="M4.4 7.6V4.4H7.6V7.6H4.4Z" fill="url(#paint8_linear_106_11683)" />
            <path d="M8.4 11.6V8.4H11.6V11.6H8.4Z" fill="url(#paint9_linear_106_11683)" />
            <path d="M7.6 11.6H4.4V8.4H7.6V11.6Z" fill="url(#paint10_linear_106_11683)" />
            <path d="M11.6 4.4V7.6H8.4V4.4H11.6Z" fill="url(#paint11_linear_106_11683)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_106_11683" x1="0" x2="16" y1="8" y2="8">
            <stop stopColor="#2378CE" />
            <stop offset="1" stopColor="#D73184" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <DataTableFilled1 />
    </div>
  );
}

function LineOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Line - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Line - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2afc5c00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p350e080} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <LineOutline />
    </div>
  );
}

function AreaOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Area - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_106_11726)" id="Area - Outline">
          <path clipRule="evenodd" d={svgPaths.p27428700} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_106_11726">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <AreaOutline />
    </div>
  );
}

function TreemapOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Treemap - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Treemap - Outline">
          <path clipRule="evenodd" d={svgPaths.p2ce028c0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <TreemapOutline />
    </div>
  );
}

function VerticalBarOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Vertical bar - Outline">
      <div className="absolute inset-[0_0_-1.11%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.1778">
          <g id="Vertical bar - Outline">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p155b0380} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p14920300} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p17859a00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <VerticalBarOutline />
    </div>
  );
}

function VerticalStackOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Vertical Stack - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Vertical Stack - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2c5e0bf0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p392cec00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14920300} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p24ff7d00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e4e1200} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p26086300} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <VerticalStackOutline />
    </div>
  );
}

function HorizontalBarOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Horizontal Bar - Outline">
      <div className="absolute inset-[0_-0.56%_-0.56%_-0.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1778 16.0889">
          <g id="Horizontal Bar - Outline">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p95b3600} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3010a680} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p222ad00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <HorizontalBarOutline />
    </div>
  );
}

function HorizontalStackOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Horizontal Stack - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Horizontal Stack - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p24240500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3204dc40} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1ccb1500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pe194780} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pa911500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2fef500} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <HorizontalStackOutline />
    </div>
  );
}

function FunnelOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Funnel - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Funnel - Outline">
          <path clipRule="evenodd" d={svgPaths.p29e54100} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <FunnelOutline />
    </div>
  );
}

function DonutOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Donut - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Donut - Outline">
          <path clipRule="evenodd" d={svgPaths.p1337e900} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <DonutOutline />
    </div>
  );
}

function GoalOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Goal - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Goal - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1e4ca00} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10ca0cb0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <GoalOutline />
    </div>
  );
}

function NumberOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Number - Outline">
      <div className="absolute inset-[0_0_0_-1.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1963 16">
          <g id="Number - Outline">
            <path clipRule="evenodd" d={svgPaths.p145268f0} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <NumberOutline />
    </div>
  );
}

function TextOutline() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Text - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Text - Outline">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p24959f80} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path d={svgPaths.p35e3ee80} fill="var(--fill-0, #E4E5E8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <TextOutline />
    </div>
  );
}

function ChartTypes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chart types">
      <div aria-hidden="true" className="absolute border-[#323742] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[16px] items-start p-[16px] relative w-full">
        <IconContainer23 />
        <IconContainer24 />
        <IconContainer25 />
        <IconContainer26 />
        <IconContainer27 />
        <IconContainer28 />
        <IconContainer29 />
        <IconContainer30 />
        <IconContainer31 />
        <IconContainer32 />
        <IconContainer33 />
        <IconContainer34 />
        <IconContainer35 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[84.865px]" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#56b5ff] text-[12px]">Partner</p>
    </div>
  );
}

function X() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p1823c000} fill="var(--fill-0, #56B5FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[8px]" data-name="Icon Container">
      <X />
    </div>
  );
}

function IconGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Group">
      <IconContainer36 />
    </div>
  );
}

function DimensionAndMeasures() {
  return (
    <div className="bg-[#18191d] content-stretch flex h-[24px] items-center justify-between px-[16px] relative rounded-[9999px] shrink-0 w-[143px]" data-name="Dimension and Measures">
      <div aria-hidden="true" className="absolute border border-[#56b5ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Label2 />
      <IconGroup />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[84.865px]" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#56b5ff] text-[12px]">Action Cost</p>
    </div>
  );
}

function X1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p1823c000} fill="var(--fill-0, #56B5FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[8px]" data-name="Icon Container">
      <X1 />
    </div>
  );
}

function IconGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Group">
      <IconContainer37 />
    </div>
  );
}

function DimensionAndMeasures1() {
  return (
    <div className="bg-[#18191d] content-stretch flex h-[24px] items-center justify-between px-[16px] relative rounded-[9999px] shrink-0 w-[143px]" data-name="Dimension and Measures">
      <div aria-hidden="true" className="absolute border border-[#56b5ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Label3 />
      <IconGroup1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[84.865px]" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4ea6] text-[12px]">Action ID</p>
    </div>
  );
}

function X2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p1823c000} fill="var(--fill-0, #FF4EA6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[8px]" data-name="Icon Container">
      <X2 />
    </div>
  );
}

function IconGroup2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Group">
      <IconContainer38 />
    </div>
  );
}

function DimensionAndMeasures2() {
  return (
    <div className="bg-[#212329] content-stretch flex h-[24px] items-center justify-between opacity-50 px-[16px] relative rounded-[9999px] shrink-0 w-[143px]" data-name="Dimension and Measures">
      <div aria-hidden="true" className="absolute border border-[#ff4ea6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Label4 />
      <IconGroup2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[84.865px]" data-name="Label">
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff4ea6] text-[12px]">Action Date</p>
    </div>
  );
}

function X3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8">
        <g id="X">
          <path clipRule="evenodd" d={svgPaths.p1823c000} fill="var(--fill-0, #FF4EA6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[8px]" data-name="Icon Container">
      <X3 />
    </div>
  );
}

function IconGroup3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Group">
      <IconContainer39 />
    </div>
  );
}

function DimensionAndMeasures3() {
  return (
    <div className="bg-[#18191d] content-stretch flex h-[24px] items-center justify-between px-[16px] relative rounded-[9999px] shrink-0 w-[143px]" data-name="Dimension and Measures">
      <div aria-hidden="true" className="absolute border border-[#ff4ea6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Label5 />
      <IconGroup3 />
    </div>
  );
}

function AddMeasure() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-80 py-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Add Measure">
      <div aria-hidden="true" className="absolute border border-[#323742] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606672] text-[11px] text-center">Add Column</p>
    </div>
  );
}

function Pills() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Pills">
      <DimensionAndMeasures />
      <DimensionAndMeasures1 />
      <DimensionAndMeasures2 />
      <DimensionAndMeasures3 />
      <AddMeasure />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="SECTION">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">COLUMNS</p>
      <Pills />
    </div>
  );
}

function AddMeasure1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-80 py-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Add Measure">
      <div aria-hidden="true" className="absolute border border-[#323742] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606672] text-[11px] text-center">Add Filters</p>
    </div>
  );
}

function Pills1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Pills">
      <AddMeasure1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="SECTION">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">FILTERS</p>
      <Pills1 />
    </div>
  );
}

function AddMeasure2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-80 py-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Add Measure">
      <div aria-hidden="true" className="absolute border border-[#323742] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606672] text-[11px] text-center">Add X-Axis</p>
    </div>
  );
}

function Pills2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Pills">
      <AddMeasure2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="SECTION">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">X-AXIS</p>
      <Pills2 />
    </div>
  );
}

function AddMeasure3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-80 py-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Add Measure">
      <div aria-hidden="true" className="absolute border border-[#323742] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606672] text-[11px] text-center">Add Y-Axis</p>
    </div>
  );
}

function Pills3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Pills">
      <AddMeasure3 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="SECTION">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">Y-AXIS</p>
      <Pills3 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[14.5px] relative shrink-0 w-[29px]" data-name="toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 14.5">
        <g id="toggle">
          <path d={svgPaths.pf3ae00} fill="var(--fill-0, #18191D)" />
          <path d={svgPaths.pf3ae00} stroke="var(--stroke-0, #606672)" strokeWidth="0.604167" />
          <path clipRule="evenodd" d={svgPaths.pe19e300} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" id="handle" />
        </g>
      </svg>
    </div>
  );
}

function Totals() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Totals">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#e4e5e8] text-[12px]">Show Totals</p>
      <Toggle />
    </div>
  );
}

function Open() {
  return (
    <div className="absolute h-[15.075px] left-[0.5px] top-[0.6px] w-[15.032px]" data-name="open">
      <div className="absolute inset-[-2.49%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7815 15.8247">
          <g>
            <g id="Group 4">
              <path clipRule="evenodd" d={svgPaths.p396a6f20} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 1" />
              <path d={svgPaths.p396a6f20} id="Stroke 3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
            </g>
            <path d="M11.3897 12.4385V8.97954" id="Stroke 5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
            <path d={svgPaths.p31d6de00} id="Stroke 7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
            <path d={svgPaths.p227b4640} id="Stroke 9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hand() {
  return (
    <div className="absolute h-[17px] left-[107px] shadow-[0px_1px_2.6px_0px_rgba(0,0,0,0.32)] top-[114px] w-[16px]" data-name="hand">
      <Open />
    </div>
  );
}

function NavItems() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Nav items">
      <div aria-hidden="true" className="absolute border-[#323742] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Totals />
        <Hand />
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className="bg-[#323742] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Bar">
      <div aria-hidden="true" className="absolute border border-[#323742] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[50px] py-[6px] relative w-full">
          <p className="font-['Sarabun:Regular',sans-serif] leading-[15px] not-italic opacity-89 relative shrink-0 text-[#e4e5e8] text-[12px] text-center">Search</p>
        </div>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p15451400} fill="var(--fill-0, #276FE5)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Plus />
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Search">
      <Bar />
      <IconContainer40 />
    </div>
  );
}

function String() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer41 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Actions</p>
    </div>
  );
}

function Number() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer42 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Action Cost</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer43 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">AOV</p>
    </div>
  );
}

function String1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String1 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer44 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Ad Campaign Group</p>
    </div>
  );
}

function Number2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number2 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer45 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Ad Campaign ID</p>
    </div>
  );
}

function String2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String2 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer46 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Ad Campaign Name</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number3 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer47 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">AD Group ID</p>
    </div>
  );
}

function Number4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number4 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer48 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">AD Group ID</p>
    </div>
  );
}

function Number5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number5 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer49 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Calls</p>
    </div>
  );
}

function String3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String3 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer50 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Channels</p>
    </div>
  );
}

function WorldMap() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="world-map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="world-map">
          <g id="Vector">
            <path d={svgPaths.p41d1f80} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p1f037c00} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p39c12700} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.pb05f080} fill="var(--fill-0, #E4E5E8)" />
            <path clipRule="evenodd" d={svgPaths.p22b3f2b2} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
            <path d={svgPaths.p2d7ba500} fill="var(--fill-0, #E4E5E8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <WorldMap />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer51 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Channels</p>
    </div>
  );
}

function Number6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number6 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer52 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Clicks</p>
    </div>
  );
}

function Number7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number7 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer53 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">CPA</p>
    </div>
  );
}

function Number8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number8 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer54 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">CPC</p>
    </div>
  );
}

function Number9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #FF4EA6)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #FF4EA6)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer55() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number9 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer55 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">CPM</p>
    </div>
  );
}

function Date1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="date">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p3eb56c70} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2f277c00} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p23dcfae0} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.pc845500} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p210aaf0} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p28c2e500} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p70ed380} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p15197700} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p279ad380} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2f45eef0} fill="var(--fill-0, #E4E5E8)" />
            <path clipRule="evenodd" d={svgPaths.pc439400} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer56() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Date1 />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer56 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Day of Week</p>
    </div>
  );
}

function Date2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="date">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p3eb56c70} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2f277c00} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p23dcfae0} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.pc845500} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p210aaf0} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p28c2e500} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p70ed380} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p15197700} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p279ad380} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2f45eef0} fill="var(--fill-0, #E4E5E8)" />
            <path clipRule="evenodd" d={svgPaths.pc439400} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Date2 />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer57 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Day of Year</p>
    </div>
  );
}

function Number10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="number">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2496f8c0} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p382ea300} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p1db3ff00} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Number10 />
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer58 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Device</p>
    </div>
  );
}

function String4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String4 />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer59 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Distribution Type</p>
    </div>
  );
}

function Date3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="date">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p3eb56c70} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2f277c00} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p23dcfae0} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.pc845500} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p210aaf0} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p28c2e500} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p70ed380} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p15197700} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p279ad380} fill="var(--fill-0, #E4E5E8)" />
            <path d={svgPaths.p2f45eef0} fill="var(--fill-0, #E4E5E8)" />
            <path clipRule="evenodd" d={svgPaths.pc439400} fill="var(--fill-0, #E4E5E8)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer60() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <Date3 />
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer60 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Full Date</p>
    </div>
  );
}

function String5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String5 />
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer61 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Keyboard</p>
    </div>
  );
}

function String6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String6 />
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer62 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Impressions</p>
    </div>
  );
}

function String7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String7 />
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer63 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Media Id</p>
    </div>
  );
}

function String8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String8 />
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer64 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Media Source</p>
    </div>
  );
}

function String9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String9 />
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer65 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Raw Impressions</p>
    </div>
  );
}

function String10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String10 />
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer66 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Referral Cost</p>
    </div>
  );
}

function String11() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String11 />
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer67 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Keyboard</p>
    </div>
  );
}

function String12() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="string">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="string">
          <g id="Vector" opacity="0.75">
            <path d={svgPaths.p2b346280} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p32ea1e80} fill="var(--fill-0, #56B5FF)" />
            <path d={svgPaths.p2c60c100} fill="var(--fill-0, #56B5FF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <String12 />
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <IconContainer68 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e4e5e8] text-[11px]">Keyboard</p>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Items">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
      <Item19 />
      <Item20 />
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
      <Item25 />
      <Item26 />
      <Item27 />
    </div>
  );
}

function NavItems1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Nav items">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Search1 />
        <Items />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex h-[763px] items-start relative shrink-0 w-full" data-name="Bottom">
      <NavItems />
      <NavItems1 />
    </div>
  );
}

function VNextSidebar() {
  return (
    <div className="absolute bg-[#25282f] content-stretch flex flex-col h-[915px] items-start left-[0.44px] top-0 w-[350px]" data-name="VNext Sidebar">
      <Header />
      <ChartTypes />
      <Bottom />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-full overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-[350px]" data-name="Sidebar">
      <VNextSidebar />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#18191d] content-stretch flex h-[822px] items-start left-[64px] rounded-[16px] top-[70px] w-[1368px]">
      <Page />
      <Sidebar />
    </div>
  );
}

export default function DataLab() {
  return (
    <div className="bg-white relative size-full" data-name="Data Lab">
      <NavCollapsed />
      <Frame3 />
    </div>
  );
}