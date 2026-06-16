import svgPaths from "./svg-jlsg700ibw";
import imgScreenshot20240422At1247 from "figma:asset/7687060c0bea9aaf292ab768d91f78ee560adb2c.png";
import imgForbesBlack1 from "figma:asset/28bad5c88ead278696c2ce8066c5a42b017d901f.png";
import imgScreenshot20240422At1248 from "figma:asset/d1e0825036b53e605e16c95631e42ba393deb086.png";
import imgBiBlueBackgroundVertical1 from "figma:asset/11be7d71e90e667f03c63ad034825194034043ed.png";
import imgScreenshot20240422At1249 from "figma:asset/7c33bba50b8bdde73f1d4111128b402ca9d40473.png";
import imgCauf2Hzuag3Akduqzixm1 from "figma:asset/7d1a4c63266b60b438979857610a7a65edacac53.png";
import imgScreenshot20240422At1250 from "figma:asset/1ec0a7e61b70e915c0e94790d7ef9f8a555f056c.png";
import imgCauf2Hzuag3Akduqzixm2 from "figma:asset/4280a763617f0265033dd55a180fc4a1def3a15c.png";
import imgScreenshot20240422At1251 from "figma:asset/bd98a45c5dda7303d58b43733e2bdceb047612a3.png";
import imgImage143 from "figma:asset/2a1a0e15d9cb734b45057b4ad030a0b2533cb189.png";
import { imgTShirt, imgNeck, imgNeck1 } from "./svg-40g1h";

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
      <div className="bg-[#0077db] rounded-[10px] shrink-0 size-[32px]" data-name="image 6" />
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px]">Your Brand</p>
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
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
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
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
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
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer2 />
    </div>
  );
}

function TaskManager() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="task-manager">
      <div className="absolute inset-[0_-0.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1667 16">
          <g id="task-manager">
            <path clipRule="evenodd" d={svgPaths.p249d7000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <TaskManager />
    </div>
  );
}

function TertiaryIconButton3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer3 />
    </div>
  );
}

function NavHelp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Nav - help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Nav - help">
          <path clipRule="evenodd" d={svgPaths.p22921500} fill="var(--fill-0, #121212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <NavHelp />
    </div>
  );
}

function TertiaryIconButton4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[40px] px-[16px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Tertiary Icon Button">
      <IconContainer4 />
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

function IconContainer5() {
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
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px] text-center">$12,958,704.41</p>
      <IconContainer5 />
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

function Statuses() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Statuses">
      <PartnerAvatar />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0" data-name="Right Side">
      <IconButtonContainer />
      <SpaciousStatusColorful />
      <Statuses />
    </div>
  );
}

function VNextTopNav() {
  return (
    <div className="bg-white content-stretch flex h-[70px] items-center justify-between pointer-events-auto px-[16px] sticky top-0" data-name="VNext Top Nav">
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

function IconContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <Hamburger />
    </div>
  );
}

function SideNavProductItems() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer6 />
    </div>
  );
}

function EngageNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Engage-not filled">
      <div className="absolute inset-[0_-0.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3849 24">
          <g id="Engage-not filled">
            <path clipRule="evenodd" d={svgPaths.p289c1800} fill="var(--fill-0, #818181)" fillRule="evenodd" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <EngageNotFilled />
    </div>
  );
}

function SideNavProductItems1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer7 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
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

function IconContainer8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <DiscoverNotFilled />
    </div>
  );
}

function SideNavProductItems2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer8 />
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

function IconContainer9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <OptimizeNotFilled />
    </div>
  );
}

function SideNavProductItems3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer9 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Optimize</p>
      </div>
    </div>
  );
}

function Group() {
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
      <Group />
    </div>
  );
}

function IconContainer10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <ComplianceNotFilled />
    </div>
  );
}

function SideNavProductItems4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer10 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Protect</p>
      </div>
    </div>
  );
}

function CompetitiveInsights() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-1/2 overflow-clip top-1/2 w-[22.65px]" data-name="competitive-insights 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.65 24">
        <g id="Layer_1-2">
          <path d={svgPaths.p35084b00} fill="var(--fill-0, #818181)" id="Vector" />
          <path d={svgPaths.p14aaad70} fill="var(--fill-0, #818181)" id="Vector_2" />
          <path d={svgPaths.p9a2eb00} fill="var(--fill-0, #818181)" id="Vector_3" />
          <path d={svgPaths.pe092080} fill="var(--fill-0, #818181)" id="Vector_4" />
          <path d={svgPaths.p3eecc100} fill="var(--fill-0, #818181)" id="Vector_5" />
          <path d={svgPaths.p360c5a80} fill="var(--fill-0, #818181)" id="Vector_6" />
          <path d={svgPaths.p199c6d80} fill="var(--fill-0, #818181)" id="Vector_7" />
          <path d={svgPaths.p1aaa8280} fill="var(--fill-0, #818181)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function InsightsNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Insights-not filled">
      <CompetitiveInsights />
    </div>
  );
}

function IconContainer11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon Container">
      <InsightsNotFilled />
    </div>
  );
}

function SideNavProductItems5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[70px] items-center justify-center relative shrink-0 w-[64px]" data-name="Side Nav / Product items">
      <IconContainer11 />
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] text-center w-[54px]">
        <p className="leading-[normal] whitespace-pre-wrap">Insights</p>
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

function SideNavProducts() {
  return (
    <div className="bg-[#fbfbfb] flex-[1_0_0] min-h-px min-w-px relative" data-name="Side Nav / Products">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Top />
      </div>
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VNextSideNav() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-[70px]" data-name="VNext Side Nav">
      <SideNavProducts />
    </div>
  );
}

function NavExpanded() {
  return (
    <div className="absolute bg-white bottom-[-1px] left-[-1px] top-[-1px] w-[1440px]" data-name="Nav Expanded">
      <div className="absolute h-[1476px] inset-0 pointer-events-none">
        <VNextTopNav />
      </div>
      <VNextSideNav />
    </div>
  );
}

function ProgressBarCircle() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Progress bar circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p4373480} fill="var(--fill-0, #F2F3F4)" id="Progress circle" />
      </svg>
      <div className="absolute bottom-1/2 flex items-center justify-center left-1/2 right-0 top-0">
        <div className="-scale-y-100 flex-none rotate-180 size-[16px]">
          <div className="relative size-full" data-name="Progress circle">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pa4b3300} fill="var(--fill-0, #0077DB)" id="Progress circle" />
            </svg>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Sarabun:Regular',sans-serif] leading-[13px] left-[calc(50%+0.5px)] not-italic text-[#121212] text-[10px] text-center top-[calc(50%-7px)]">25%</p>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#121212] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Return to Checklist</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <ProgressBarCircle />
      <p className="flex-[1_0_0] font-['Sarabun:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#121212] text-[16px] whitespace-pre-wrap">Complete your account set up</p>
      <SecondaryButton />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Bank() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_21_6743)" id="Bank">
          <g id="Vector" />
          <path d="M1.5 6H14.5L8 2L1.5 6Z" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 6V11" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 6V11" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 6V11" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.5 6V11" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 11H14" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 13H15" id="Vector_8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_21_6743">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Applications() {
  return (
    <div className="bg-[#d5ebff] content-stretch flex items-center justify-between p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Applications">
      <Bank />
    </div>
  );
}

function VnextBadge() {
  return (
    <div className="bg-[#ffdedc] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="vnext badge">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#550d1e] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">Past due</p>
      </div>
    </div>
  );
}

function FinanceBadge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Finance Badge">
      <VnextBadge />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#121212] text-[16px]">Fill out your finance contact</p>
      <FinanceBadge />
    </div>
  );
}

function SecondaryButton1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#121212] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Add Contact</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Applications />
      <Frame48 />
      <SecondaryButton1 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[0_10.14%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7538 16">
        <g id="Group 4941">
          <path d={svgPaths.p18832f80} fill="var(--fill-0, #102A46)" id="Vector" />
          <path d={svgPaths.p21f2a180} fill="var(--fill-0, #102A46)" id="Vector_2" />
          <path d={svgPaths.p30ba6200} fill="var(--fill-0, #102A46)" id="Vector_3" />
          <path d={svgPaths.p21a9c500} fill="var(--fill-0, #102A46)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
      <Group14 />
    </div>
  );
}

function Applications1() {
  return (
    <div className="bg-[#d5ebff] content-stretch flex items-center justify-between p-[8px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Applications">
      <Icon />
    </div>
  );
}

function SecondaryButton2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border border-[#121212] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#121212] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">View Campaign</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px] underline">Dismiss</p>
      <SecondaryButton2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Sarabun:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#121212] text-[16px] whitespace-pre-wrap">Review 3 applications for Top Island Getaways campaign</p>
      <Frame49 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Applications1 />
      <Frame42 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame43 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <div className="bg-[#cacfd3] h-[816px] w-full" />
        </div>
      </div>
      <Frame44 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <div className="bg-[#cacfd3] h-[816px] w-full" />
        </div>
      </div>
      <Frame45 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <div className="bg-[#cacfd3] h-[816px] w-full" />
        </div>
      </div>
    </div>
  );
}

function Campaigns() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Campaigns">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#121212] text-[18px] w-full whitespace-pre-wrap">To Do List</p>
          <Frame5 />
          <p className="[text-decoration-skip-ink:none] decoration-solid font-['Sarabun:SemiBold',sans-serif] h-[20px] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px] text-center underline w-full whitespace-pre-wrap">View All</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TertiaryButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Tertiary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#121212] text-[14px] text-center">
        <p className="leading-[18px] whitespace-pre-wrap">Edit</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] whitespace-nowrap">
        <p className="leading-[23px]">Program Health</p>
      </div>
      <TertiaryButton />
    </div>
  );
}

function WidgetHeader() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Widget Header">
      <div aria-hidden="true" className="absolute border-[#cacfd3] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame54 />
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

function VNextIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[12px]" data-name="VNext icon">
      <ArrowDown1 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[469.5px]">
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Jan 01, 2025 - Jan 07, 2025</p>
      </div>
      <VNextIcon />
    </div>
  );
}

function LineFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Line - Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Line - Filled">
          <g id="Vector">
            <path d={svgPaths.p275e4300} fill="var(--fill-0, #0077DB)" />
            <path d={svgPaths.pa301c00} fill="var(--fill-0, #0077DB)" />
            <path clipRule="evenodd" d={svgPaths.p17f4c200} fill="var(--fill-0, #0077DB)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <LineFilled />
    </div>
  );
}

function ChartTypeTab() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Chart Type Tab">
      <IconContainer12 />
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
              <path clipRule="evenodd" d={svgPaths.p155b0380} fill="var(--fill-0, #A7A7A7)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p14920300} fill="var(--fill-0, #A7A7A7)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p17859a00} fill="var(--fill-0, #A7A7A7)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <VerticalBarOutline />
    </div>
  );
}

function ChartTypeTab1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Chart Type Tab">
      <IconContainer13 />
    </div>
  );
}

function ChartTypeToggle() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="Chart Type Toggle">
      <div className="content-stretch flex h-full items-center overflow-clip relative rounded-[inherit]">
        <ChartTypeTab />
        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <div className="h-0 relative w-[32px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                  <line id="Line 2" stroke="var(--stroke-0, #CACFD3)" x2="32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ChartTypeTab1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame55 />
      <ChartTypeToggle />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 font-['Sarabun:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 not-italic place-items-start relative row-1 text-[#757575] text-[11px] text-center">
      <div className="col-1 flex flex-col h-[24.072px] justify-center ml-0 mt-[176.53px] relative row-1 w-[30.398px]">
        <p className="leading-[normal] whitespace-pre-wrap">0</p>
      </div>
      <div className="col-1 flex flex-col h-[24.072px] justify-center ml-0 mt-[88.26px] relative row-1 w-[30.398px]">
        <p className="leading-[normal] whitespace-pre-wrap">2.5K</p>
      </div>
      <div className="col-1 flex flex-col h-[24.072px] justify-center ml-0 mt-0 relative row-1 w-[30.398px]">
        <p className="leading-[normal] whitespace-pre-wrap">5K</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 font-['Sarabun:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[28.69px] mt-[193.93px] not-italic place-items-start relative row-1 text-[#757575] text-[12px]">
      <div className="col-1 flex flex-col h-[24.072px] justify-center ml-0 mt-0 relative row-1 w-[45.049px]">
        <p className="leading-[normal] whitespace-pre-wrap">Jan 01</p>
      </div>
      <div className="col-1 flex flex-col h-[24.072px] justify-center ml-[750.26px] mt-0 relative row-1 text-center w-[45.049px]">
        <p className="leading-[normal] whitespace-pre-wrap">Jan 07</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group7 />
      <Group8 />
      <div className="col-1 h-[2px] ml-[29.17px] mt-[13.01px] relative row-1 w-[795px]" data-name="Line MIddle">
        <div className="absolute inset-[42.85%_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 795.032 1.14306">
            <path d={svgPaths.p29409780} id="Line MIddle" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-[2px] ml-[29.17px] mt-[100.01px] relative row-1 w-[795px]" data-name="Line MIddle">
        <div className="absolute inset-[42.85%_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 795.032 1.14306">
            <path d={svgPaths.p29409780} id="Line MIddle" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-[145.022px] ml-[28.69px] mt-[48.81px] relative row-1 w-[794.94px]" data-name="areaChart">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 794.94 145.022">
          <path clipRule="evenodd" d={svgPaths.p2ca5f80} fill="var(--fill-0, #0077DB)" fillRule="evenodd" id="areaChart" />
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f2f3f4] flex-[1_0_0] h-[88px] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center not-italic p-[10px] relative size-full text-[#121212]">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis">Clicks</p>
          <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] relative shrink-0 text-[16px]">11,834</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center not-italic p-[10px] relative size-full text-[#121212]">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis">Actions</p>
          <p className="font-['Sarabun:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px]">4,779</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center not-italic p-[10px] relative size-full text-[#121212]">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis">Action Cost</p>
          <p className="font-['Sarabun:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px]">$3,296.09</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center not-italic p-[10px] relative size-full text-[#121212]">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis">Revenue</p>
          <p className="font-['Sarabun:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px]">$123,486.09</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center not-italic p-[10px] relative size-full text-[#121212]">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis">Total Cost</p>
          <p className="font-['Sarabun:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px]">$5,398.09</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center not-italic p-[10px] relative size-full text-[#121212] text-ellipsis">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] overflow-hidden relative shrink-0 text-[14px]">CR</p>
          <p className="font-['Sarabun:Regular',sans-serif] leading-[20px] overflow-hidden relative shrink-0 text-[16px]">1.95%</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[88px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame12 />
      <Frame11 />
      <Frame13 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Group15 />
      <Frame14 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[864px]">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <Frame56 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[864px]">
      <WidgetHeader />
      <Frame51 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Sarabun:SemiBold',sans-serif] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#121212] w-[816px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px]">
        <p className="leading-[23px]">Partners you’ll love</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[14px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">View All</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[144px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] size-[149px] top-[calc(50%+0.5px)]" data-name="Screenshot 2024-04-22 at 12.47">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[191.95%] left-[-38.93%] max-w-none top-[-20.13%] w-[181.21%]" src={imgScreenshot20240422At1247} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute inset-1/4" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Check">
          <path clipRule="evenodd" d={svgPaths.p566ac00} fill="url(#paint0_linear_117_1855)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_1855" x1="2.8" x2="7.06724" y1="7.3" y2="-1.29416">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketplaceVerified() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="marketplace-verified">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="badge-with-check-mark">
          <path d={svgPaths.p2421d600} fill="var(--fill-0, #12A7EA)" id="Shape" />
        </g>
      </svg>
      <Check />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black">Krista Horton</p>
      <MarketplaceVerified />
    </div>
  );
}

function SizingL() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="sizing-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="sizing-l">
          <rect fill="var(--fill-0, #121212)" height="12" rx="2" width="12" />
          <path d={svgPaths.p2aa6b480} fill="var(--fill-0, white)" id="L" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 size-[12px]" data-name="VNext icon">
      <SizingL />
    </div>
  );
}

function IconContainer14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icon container">
      <VNextIcon1 />
    </div>
  );
}

function PartnerSize() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Partner Size">
      <IconContainer14 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px]">Large</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame30 />
      <PartnerSize />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame18 />
      <Frame35 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[144px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[41.84%_20.41%_42.32%_18.37%]" data-name="Forbes-Black 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgForbesBlack1} />
        </div>
        <div className="absolute inset-[-5.64%_-7.01%_-7.93%_-7.25%]" data-name="Screenshot 2024-04-22 at 12.47">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[194.63%] left-[-36.35%] max-w-none top-[-16.46%] w-[177.18%]" src={imgScreenshot20240422At1248} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Check1() {
  return (
    <div className="absolute inset-1/4" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Check">
          <path clipRule="evenodd" d={svgPaths.p566ac00} fill="url(#paint0_linear_117_1855)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_1855" x1="2.8" x2="7.06724" y1="7.3" y2="-1.29416">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketplaceVerified1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="marketplace-verified">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="badge-with-check-mark">
          <path d={svgPaths.p2421d600} fill="var(--fill-0, #12A7EA)" id="Shape" />
        </g>
      </svg>
      <Check1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black">A Pinch of Healthy</p>
      <MarketplaceVerified1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame23 />
    </div>
  );
}

function SizingL1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="sizing-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="sizing-l">
          <rect fill="var(--fill-0, #121212)" height="12" rx="2" width="12" />
          <path d={svgPaths.p2aa6b480} fill="var(--fill-0, white)" id="L" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 size-[12px]" data-name="VNext icon">
      <SizingL1 />
    </div>
  );
}

function IconContainer15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icon container">
      <VNextIcon2 />
    </div>
  );
}

function PartnerSize1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Partner Size">
      <IconContainer15 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px]">Large</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame24 />
      <PartnerSize1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame19 />
      <Frame34 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[19.39%]">
      <div className="absolute bg-[#185f7d] inset-[19.39%] rounded-[4px]" />
      <div className="absolute inset-[36.22%_19.39%_35.89%_19.39%] rounded-[4px]" data-name="BI_blue_background_vertical 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgBiBlueBackgroundVertical1} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[144px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] size-[149px] top-[calc(50%+0.5px)]" data-name="Screenshot 2024-04-22 at 12.47">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[193.96%] left-[-38.26%] max-w-none top-[-24.72%] w-[181.21%]" src={imgScreenshot20240422At1249} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Check2() {
  return (
    <div className="absolute inset-1/4" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Check">
          <path clipRule="evenodd" d={svgPaths.p566ac00} fill="url(#paint0_linear_117_1855)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_1855" x1="2.8" x2="7.06724" y1="7.3" y2="-1.29416">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketplaceVerified2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="marketplace-verified">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="badge-with-check-mark">
          <path d={svgPaths.p2421d600} fill="var(--fill-0, #12A7EA)" id="Shape" />
        </g>
      </svg>
      <Check2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black">Sarah</p>
      <MarketplaceVerified2 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame31 />
    </div>
  );
}

function SizingL2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="sizing-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="sizing-l">
          <rect fill="var(--fill-0, #121212)" height="12" rx="2" width="12" />
          <path d={svgPaths.p2aa6b480} fill="var(--fill-0, white)" id="L" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon3() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 size-[12px]" data-name="VNext icon">
      <SizingL2 />
    </div>
  );
}

function IconContainer16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icon container">
      <VNextIcon3 />
    </div>
  );
}

function PartnerSize2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Partner Size">
      <IconContainer16 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px]">Large</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame32 />
      <PartnerSize2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame20 />
      <Frame36 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[144px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[19.39%]" data-name="cauf2hzuag3akduqzixm 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-16.49%] max-w-none size-[131.96%] top-[-15.98%]" src={imgCauf2Hzuag3Akduqzixm1} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[163.537px] left-[calc(50%+0.27px)] top-[calc(50%-0.23px)] w-[164.534px]" data-name="Screenshot 2024-04-22 at 12.47">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[192.62%] left-[-38.93%] max-w-none top-[-25.5%] w-[180.54%]" src={imgScreenshot20240422At1250} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Check3() {
  return (
    <div className="absolute inset-1/4" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Check">
          <path clipRule="evenodd" d={svgPaths.p566ac00} fill="url(#paint0_linear_117_1855)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_1855" x1="2.8" x2="7.06724" y1="7.3" y2="-1.29416">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketplaceVerified3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="marketplace-verified">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="badge-with-check-mark">
          <path d={svgPaths.p2421d600} fill="var(--fill-0, #12A7EA)" id="Shape" />
        </g>
      </svg>
      <Check3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black">HollyStrand</p>
      <MarketplaceVerified3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame26 />
    </div>
  );
}

function SizingL3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="sizing-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="sizing-l">
          <rect fill="var(--fill-0, #121212)" height="12" rx="2" width="12" />
          <path d={svgPaths.p2aa6b480} fill="var(--fill-0, white)" id="L" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon4() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 size-[12px]" data-name="VNext icon">
      <SizingL3 />
    </div>
  );
}

function IconContainer17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icon container">
      <VNextIcon4 />
    </div>
  );
}

function PartnerSize3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Partner Size">
      <IconContainer17 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px]">Large</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame27 />
      <PartnerSize3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame21 />
      <Frame37 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[144px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[19.39%] rounded-[4px]" data-name="cauf2hzuag3akduqzixm 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
            <img alt="" className="absolute left-[-16.49%] max-w-none size-[131.96%] top-[-15.98%]" src={imgCauf2Hzuag3Akduqzixm2} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[163.537px] left-[calc(50%+0.27px)] top-[calc(50%-0.23px)] w-[164.534px]" data-name="Screenshot 2024-04-22 at 12.47">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[196.64%] left-[-44.3%] max-w-none top-[-17.45%] w-[185.23%]" src={imgScreenshot20240422At1251} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaebed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Check4() {
  return (
    <div className="absolute inset-1/4" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Check">
          <path clipRule="evenodd" d={svgPaths.p566ac00} fill="url(#paint0_linear_117_1855)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_1855" x1="2.8" x2="7.06724" y1="7.3" y2="-1.29416">
            <stop stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketplaceVerified4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="marketplace-verified">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="badge-with-check-mark">
          <path d={svgPaths.p2421d600} fill="var(--fill-0, #12A7EA)" id="Shape" />
        </g>
      </svg>
      <Check4 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black">Natalie Borton</p>
      <MarketplaceVerified4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame29 />
    </div>
  );
}

function SizingL4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="sizing-l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="sizing-l">
          <rect fill="var(--fill-0, #121212)" height="12" rx="2" width="12" />
          <path d={svgPaths.p2aa6b480} fill="var(--fill-0, white)" id="L" />
        </g>
      </svg>
    </div>
  );
}

function VNextIcon5() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 size-[12px]" data-name="VNext icon">
      <SizingL4 />
    </div>
  );
}

function IconContainer18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icon container">
      <VNextIcon5 />
    </div>
  );
}

function PartnerSize4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Partner Size">
      <IconContainer18 />
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#121212] text-[14px]">Large</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame28 />
      <PartnerSize4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame22 />
      <Frame38 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function HighRevenuePotentialPartnersCardView() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="High Revenue Potential Partners / Card View">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame7 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">
        <p className="leading-[23px]">Maximize influencer marketing ROI with</p>
      </div>
      <div className="h-[23px] relative shrink-0 w-[136.296px]" data-name="image 143">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage143} />
      </div>
    </div>
  );
}

function Workflows() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="workflows">
      <Frame47 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#818181] text-[14px] w-[min-content]">
        <p className="leading-[18px] whitespace-pre-wrap">Discover the right creators for your business and enhance your program with comprehensive performance insights, streamlining every step from recruitment to evolution.</p>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center pb-[9px] pt-[7px] px-[15px] relative rounded-[50px] shrink-0" data-name="primary">
      <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Get Started</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Primary />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[608px]">
      <Workflows />
      <Frame8 />
    </div>
  );
}

function Cloud() {
  return (
    <div className="absolute contents inset-[7.37%_-1.14%_74.13%_58.27%]" data-name="Cloud 2">
      <div className="absolute flex inset-[7.54%_-1%_74.29%_58.41%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[22.35px] rotate-180 w-[58.764px]">
          <div className="relative size-full" data-name="Fill 4">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.764 22.3503">
              <path clipRule="evenodd" d={svgPaths.p18f87780} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[7.37%_-1.14%_74.13%_58.27%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[22.761px] rotate-180 w-[59.158px]">
          <div className="relative size-full" data-name="Fill 4 Copy">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.1577 22.7612">
              <path clipRule="evenodd" d={svgPaths.p1858d500} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="Fill 4 Copy" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MasterStickersObject() {
  return (
    <div className="absolute contents inset-[7.37%_-1.14%_74.13%_58.27%]" data-name="Master/Stickers/Object 4">
      <Cloud />
    </div>
  );
}

function Cloud1() {
  return (
    <div className="absolute contents inset-[74.27%_49.03%_3.24%_-1.14%]" data-name="Cloud 2">
      <div className="absolute inset-[74.47%_49.2%_3.44%_-0.97%]" data-name="Fill 4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.4311 27.1681">
          <path clipRule="evenodd" d={svgPaths.p26459f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 4" />
        </svg>
      </div>
      <div className="absolute inset-[74.27%_49.03%_3.24%_-1.14%]" data-name="Fill 4 Copy">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9097 27.6675">
          <path clipRule="evenodd" d={svgPaths.p1b8c1580} fill="var(--fill-0, #F2F3F4)" fillRule="evenodd" id="Fill 4 Copy" />
        </svg>
      </div>
    </div>
  );
}

function MasterStickersObject1() {
  return (
    <div className="absolute contents inset-[74.27%_49.03%_3.24%_-1.14%]" data-name="Master/Stickers/Object 5">
      <Cloud1 />
    </div>
  );
}

function TShirt() {
  return (
    <div className="absolute contents inset-[34.64%_51.44%_41.94%_15.8%]" data-name="t-shirt">
      <div className="absolute flex inset-[34.64%_51.44%_41.94%_15.8%] items-center justify-center">
        <div className="flex-none h-[28.773px] skew-x-[0.1deg] w-[45.152px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.458px_-21.527px] mask-size-[52.837px_49.339px] relative size-full" data-name="T-Shirt" style={{ maskImage: `url('${imgTShirt}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1523 28.7725">
              <path clipRule="evenodd" d={svgPaths.p30d84500} fill="var(--fill-0, #F77300)" fillRule="evenodd" id="T-Shirt" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.38%_56.1%_44.57%_42.01%] items-center justify-center">
        <div className="flex-none h-[17.272px] skew-x-[0.1deg] w-[2.582px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-41.625px_-29.822px] mask-size-[52.837px_49.339px] relative size-full" data-name="Fill 15" style={{ maskImage: `url('${imgTShirt}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58223 17.2715">
              <path clipRule="evenodd" d={svgPaths.p3a3e5800} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.82%_73.56%_44.91%_24.07%] items-center justify-center">
        <div className="flex-none h-[15.088px] skew-x-[0.1deg] w-[3.243px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.866px_-31.592px] mask-size-[52.837px_49.339px] relative size-full" data-name="Fill 17" style={{ maskImage: `url('${imgTShirt}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.24349 15.0877">
              <path clipRule="evenodd" d={svgPaths.p21741af0} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[8.8%_41.91%_34.41%_3.89%]" data-name="Mask group">
      <TShirt />
    </div>
  );
}

function HeadLongHairHat() {
  return (
    <div className="absolute contents inset-[2.11%_49.97%_56.35%_2.48%]" data-name="Head/Long Hair Hat">
      <div className="absolute inset-[2.11%_62.05%_85.3%_24.38%]" data-name="Path 10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7336 15.4869">
          <path clipRule="evenodd" d={svgPaths.p39d50f00} fill="var(--fill-0, #FCCC38)" fillRule="evenodd" id="Path 10" />
        </svg>
      </div>
      <div className="absolute inset-[2.73%_49.97%_74.93%_14.88%]" data-name="Fill 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5046 27.4869">
          <path clipRule="evenodd" d={svgPaths.p31305900} fill="var(--fill-0, #FCCC38)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[9.51%_53.91%_56.35%_2.48%]" data-name="Fill 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.1833 41.9898">
          <path clipRule="evenodd" d={svgPaths.p1c62f600} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 3" />
        </svg>
      </div>
      <div className="absolute inset-[12.33%_56.68%_70.36%_26.53%]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1818 21.2818">
          <path clipRule="evenodd" d={svgPaths.p434b800} fill="var(--fill-0, #E7B7AC)" fillRule="evenodd" id="Combined Shape" />
        </svg>
      </div>
      <div className="absolute inset-[19.43%_70.55%_78.61%_27.47%]" data-name="Fill 8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7341 2.40915">
          <path clipRule="evenodd" d={svgPaths.p2fbcdc40} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 8" />
        </svg>
      </div>
      <div className="absolute inset-[9.51%_56%_78.97%_29.14%]" data-name="Fill 9">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5097 14.166">
          <path clipRule="evenodd" d={svgPaths.p310d78c0} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 9" />
        </svg>
      </div>
      <div className="absolute inset-[21.89%_68.81%_73.37%_26.62%]" data-name="Fill 11">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.31634 5.83074">
          <path clipRule="evenodd" d={svgPaths.p281eb600} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 11" />
        </svg>
      </div>
      <div className="absolute inset-[27.58%_64.24%_70.44%_32.21%]" data-name="Fill 4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90119 2.43151">
          <path clipRule="evenodd" d={svgPaths.p13ce4130} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 4" />
        </svg>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="absolute contents inset-[16.19%_62.76%_79.39%_32.67%]" data-name="eye1">
      <div className="absolute inset-[16.19%_62.76%_82.15%_32.67%]" data-name="Fill 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.30555 2.03361">
          <path clipRule="evenodd" d={svgPaths.p3ad4d100} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[18.59%_62.9%_79.39%_33.63%]" data-name="Fill 6">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.80087 2.49525">
          <path clipRule="evenodd" d={svgPaths.p183acf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 6" />
        </svg>
      </div>
      <div className="absolute inset-[18.45%_62.95%_80.24%_33.6%]" data-name="Fill 8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7604 1.61928">
          <path clipRule="evenodd" d={svgPaths.p18c6c080} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 8" />
        </svg>
      </div>
      <div className="absolute inset-[18.57%_63.74%_79.75%_34.48%]" data-name="Fill 10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.45427 2.06718">
          <path clipRule="evenodd" d={svgPaths.p26c72800} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 10" />
        </svg>
      </div>
    </div>
  );
}

function Eye1() {
  return (
    <div className="absolute contents inset-[16.73%_57.68%_79.39%_39.2%]" data-name="eye2">
      <div className="absolute inset-[16.73%_57.68%_82.01%_39.2%]" data-name="Fill 4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.30579 1.54507">
          <path clipRule="evenodd" d={svgPaths.p20d0d180} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 4" />
        </svg>
      </div>
      <div className="absolute inset-[18.78%_57.71%_79.39%_39.75%]" data-name="Fill 12">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50326 2.24441">
          <path clipRule="evenodd" d={svgPaths.p8bbe400} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 12" />
        </svg>
      </div>
      <div className="absolute inset-[18.9%_58.47%_79.72%_40.14%]" data-name="Fill 14">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.91824 1.70587">
          <path clipRule="evenodd" d={svgPaths.p37cd03b0} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 14" />
        </svg>
      </div>
      <div className="absolute inset-[18.69%_57.71%_80.16%_39.77%]" data-name="Fill 22">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.48356 1.41622">
          <path clipRule="evenodd" d={svgPaths.p203be300} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 22" />
        </svg>
      </div>
    </div>
  );
}

function ExpressionsSmile() {
  return (
    <div className="absolute contents inset-[16.19%_57.68%_73.86%_32.67%]" data-name="Expressions/Smile">
      <Eye />
      <Eye1 />
      <div className="absolute inset-[20.81%_60.16%_76.51%_38.27%]" data-name="nose">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.15833 3.29683">
          <path clipRule="evenodd" d={svgPaths.p332fd740} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="nose" />
        </svg>
      </div>
      <div className="absolute inset-[24.94%_59.79%_73.86%_36.63%]" data-name="Fill 18">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94408 1.47599">
          <path clipRule="evenodd" d={svgPaths.p22383940} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 18" />
        </svg>
      </div>
    </div>
  );
}

function Expressions() {
  return (
    <div className="absolute contents inset-[16.19%_57.68%_73.86%_32.67%]" data-name="Expressions">
      <ExpressionsSmile />
    </div>
  );
}

function GlassRoundBlack() {
  return (
    <div className="absolute contents inset-[16.17%_55.61%_76.98%_31.48%]" data-name="Glass/Round Black">
      <div className="absolute inset-[16.39%_62.12%_76.98%_31.48%]" data-name="Fill 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.83262 8.15372">
          <path clipRule="evenodd" d={svgPaths.p26110000} fill="var(--fill-0, #407BFF)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[16.17%_55.61%_77.88%_38.64%]" data-name="Fill 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.93439 7.32453">
          <path clipRule="evenodd" d={svgPaths.pd942280} fill="var(--fill-0, #407BFF)" fillRule="evenodd" id="Fill 3" />
        </svg>
      </div>
      <div className="absolute inset-[17.87%_60.89%_81.5%_37.25%]" data-name="Stroke 7">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57828 0.77801">
          <path clipRule="evenodd" d={svgPaths.p2e7f8a00} fill="var(--fill-0, #407BFF)" fillRule="evenodd" id="Stroke 7" />
        </svg>
      </div>
    </div>
  );
}

function Glass() {
  return (
    <div className="absolute contents inset-[16.17%_55.61%_76.98%_31.48%]" data-name="Glass">
      <GlassRoundBlack />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[2.11%_49.97%_56.35%_2.48%]">
      <HeadLongHairHat />
      <Expressions />
      <Glass />
    </div>
  );
}

function MasterCharacterAvatarColors() {
  return (
    <div className="absolute contents inset-[2.11%_41.91%_34.41%_2.48%]" data-name="Master/Character/Avatar [colors]">
      <div className="absolute inset-[25.03%_59.73%_60.48%_22.69%]" data-name="neck">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2523 17.8277">
          <path clipRule="evenodd" d={svgPaths.p2de8f600} fill="var(--fill-0, #E7B7AC)" fillRule="evenodd" id="neck" />
        </svg>
      </div>
      <MaskGroup />
      <Group2 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[2.11%_41.91%_34.41%_2.48%]">
      <div className="absolute inset-[8.77%_46.13%_43.96%_8.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.9765 58.1359">
          <path d={svgPaths.p28419e00} id="Ellipse 1335" stroke="url(#paint0_linear_117_6544)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_6544" x1="0" x2="62.9765" y1="29.0679" y2="29.0679">
              <stop stopColor="#F77300" />
              <stop offset="1" stopColor="#EB0987" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <MasterCharacterAvatarColors />
    </div>
  );
}

function TShirt1() {
  return (
    <div className="absolute contents inset-[79.8%_21.77%_2.3%_50.67%]" data-name="t-shirt">
      <div className="absolute flex inset-[79.8%_21.77%_2.3%_50.67%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[22.014px] rotate-180 w-[38.027px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.273px_-23.076px] mask-size-[40.837px_38.134px] relative size-full" data-name="T-Shirt" style={{ maskImage: `url('${imgNeck}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.027 22.0139">
              <path clipRule="evenodd" d={svgPaths.p3dcb36c0} fill="var(--fill-0, black)" fillRule="evenodd" id="T-Shirt" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[85.6%_43.84%_2.49%_54.56%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[14.645px] rotate-180 w-[2.2px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.643px_-30.209px] mask-size-[40.837px_38.134px] relative size-full" data-name="Fill 15" style={{ maskImage: `url('${imgNeck}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.20027 14.6445">
              <path clipRule="evenodd" d={svgPaths.pfcf9bf0} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[86.81%_28.63%_2.79%_69.37%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[12.793px] rotate-180 w-[2.759px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.079px_-31.691px] mask-size-[40.837px_38.134px] relative size-full" data-name="Fill 17" style={{ maskImage: `url('${imgNeck}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75945 12.7925">
              <path clipRule="evenodd" d={svgPaths.p3394e0f0} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[72.75%_21.77%_2.3%_50.67%]">
      <div className="absolute flex inset-[72.75%_27.42%_14.96%_57.68%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[15.117px] rotate-180 w-[20.565px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.938px_-14.404px] mask-size-[40.837px_38.134px] relative size-full" data-name="neck" style={{ maskImage: `url('${imgNeck}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.565 15.1171">
              <path clipRule="evenodd" d={svgPaths.p3ce972f1} fill="var(--fill-0, #E7B7AC)" fillRule="evenodd" id="neck" />
            </svg>
          </div>
        </div>
      </div>
      <TShirt1 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[61.04%_20.66%_7.96%_49.75%]" data-name="Mask group">
      <Group5 />
    </div>
  );
}

function HeadShortHairDark() {
  return (
    <div className="absolute contents inset-[55.79%_28.91%_21.39%_54.61%]" data-name="Head/Short Hair Dark">
      <div className="absolute flex inset-[59.77%_29.86%_21.39%_54.95%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[23.17px] rotate-180 w-[20.961px]">
          <div className="relative size-full" data-name="Combined Shape">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9606 23.1696">
              <path clipRule="evenodd" d={svgPaths.p44aad00} fill="var(--fill-0, #E7B7AC)" fillRule="evenodd" id="Combined Shape" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[69.96%_30.78%_28.72%_67.54%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.621px] rotate-180 w-[2.317px]">
          <div className="relative size-full" data-name="Fill 8">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.31693 1.62096">
              <path clipRule="evenodd" d={svgPaths.p3d4ed280} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 8" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[70.63%_31.72%_28.42%_67.66%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.166px] rotate-180 w-[0.857px]">
          <div className="relative size-full" data-name="Fill 10">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.856776 1.16572">
              <path clipRule="evenodd" d={svgPaths.p309c3e80} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 10" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[76.64%_34.8%_21.64%_61.32%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[2.115px] rotate-180 w-[5.357px]">
          <div className="relative size-full" data-name="Fill 12">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.35711 2.11505">
              <path clipRule="evenodd" d={svgPaths.pf182700} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[55.79%_28.91%_28.54%_54.61%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[19.278px] rotate-180 w-[22.738px]">
          <div className="relative size-full" data-name="Fill 3">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7383 19.2776">
              <path clipRule="evenodd" d={svgPaths.p9bc1700} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Head() {
  return (
    <div className="absolute contents inset-[55.79%_28.91%_21.39%_54.61%]" data-name="Head">
      <HeadShortHairDark />
    </div>
  );
}

function ExpressionsRelaxed() {
  return (
    <div className="absolute contents inset-[66.62%_36.09%_24.66%_56.05%]" data-name="Expressions/Relaxed">
      <div className="absolute flex inset-[73.18%_38.84%_24.66%_57.17%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[2.663px] rotate-180 w-[5.505px]">
          <div className="relative size-full" data-name="Fill 1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50549 2.66273">
              <path clipRule="evenodd" d={svgPaths.p2e4262f0} fill="var(--fill-0, #C88C7E)" fillRule="evenodd" id="Fill 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[70.4%_41.17%_27.52%_57.63%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[2.562px] rotate-180 w-[1.659px]">
          <div className="relative size-full" data-name="nose">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.6588 2.56166">
              <path clipRule="evenodd" d={svgPaths.p16a2d280} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="nose" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[69.09%_37.68%_29.49%_56.39%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.747px] rotate-180 w-[8.19px]">
          <div className="relative size-full" data-name="eye">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18961 1.74675">
              <path clipRule="evenodd" d={svgPaths.p3b97eff0} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="eye" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[66.62%_36.09%_31.8%_56.05%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.942px] rotate-180 w-[10.836px]">
          <div className="relative size-full" data-name="eybrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8363 1.94218">
              <path clipRule="evenodd" d={svgPaths.p1b73ea80} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="eybrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Expressions1() {
  return (
    <div className="absolute contents inset-[66.62%_36.09%_24.66%_56.05%]" data-name="Expressions">
      <ExpressionsRelaxed />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[55.79%_28.91%_21.39%_54.61%]">
      <Head />
      <Expressions1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[55.79%_20.66%_7.96%_49.75%]">
      <MaskGroup1 />
      <Group4 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[54.81%_18.21%_7.96%_46.52%]">
      <div className="absolute inset-[54.81%_18.21%_8.66%_46.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.6738 44.9325">
          <path d={svgPaths.pb201660} id="Ellipse 1336" stroke="url(#paint0_linear_117_6539)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_117_6539" x1="0" x2="48.6738" y1="22.4663" y2="22.4663">
              <stop stopColor="#238BDC" />
              <stop offset="1" stopColor="#D73184" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group6 />
    </div>
  );
}

function TShirt2() {
  return (
    <div className="absolute contents inset-[36.3%_13.59%_52.29%_71.48%]" data-name="t-shirt">
      <div className="absolute flex inset-[36.3%_13.59%_52.29%_71.48%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[14.035px] rotate-180 w-[20.613px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-23.496px] mask-size-[33.264px_31.063px] relative size-full" data-name="T-Shirt" style={{ maskImage: `url('${imgNeck1}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6131 14.0354">
              <path clipRule="evenodd" d={svgPaths.p1e0fa900} fill="var(--fill-0, #FCCC38)" fillRule="evenodd" id="T-Shirt" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40%_27.15%_52.41%_71.86%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[9.337px] rotate-180 w-[1.353px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.536px_-28.044px] mask-size-[33.264px_31.063px] relative size-full" data-name="Fill 15" style={{ maskImage: `url('${imgNeck1}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.35273 9.33693">
              <path clipRule="evenodd" d={svgPaths.p14308f00} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.76%_17.8%_52.61%_80.97%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[8.156px] rotate-180 w-[1.697px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20.101px_-28.988px] mask-size-[33.264px_31.063px] relative size-full" data-name="Fill 17" style={{ maskImage: `url('${imgNeck1}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.69651 8.15613">
              <path clipRule="evenodd" d={svgPaths.p14a6d000} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MasterCharacterAvatarColors1() {
  return (
    <div className="absolute contents inset-[31.8%_13.59%_52.29%_71.48%]" data-name="Master/Character/Avatar [colors]">
      <div className="absolute flex inset-[31.8%_17.06%_60.36%_73.78%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[9.638px] rotate-180 w-[12.643px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.177px_-17.967px] mask-size-[33.264px_31.063px] relative size-full" data-name="neck" style={{ maskImage: `url('${imgNeck1}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6434 9.63825">
              <path clipRule="evenodd" d={svgPaths.p2c27ed80} fill="var(--fill-0, #E7B7AC)" fillRule="evenodd" id="neck" />
            </svg>
          </div>
        </div>
      </div>
      <TShirt2 />
    </div>
  );
}

function AlluraAvatarColors() {
  return (
    <div className="absolute contents inset-[31.8%_13.59%_52.29%_71.48%]" data-name="Allura Avatar [colors]">
      <MasterCharacterAvatarColors1 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-[15.34%_7.72%_55.69%_64.63%]" data-name="Mask group">
      <AlluraAvatarColors />
    </div>
  );
}

function HeadPonytailDark() {
  return (
    <div className="absolute contents inset-[14.42%_13.79%_64.67%_71.28%]" data-name="Head/Ponytail Dark">
      <div className="absolute flex inset-[20.43%_18.15%_64.67%_71.31%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[18.327px] rotate-180 w-[14.55px]">
          <div className="relative size-full" data-name="Combined Shape">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.55 18.3266">
              <path clipRule="evenodd" d={svgPaths.p302d4a00} fill="var(--fill-0, #E7B7AC)" fillRule="evenodd" id="Combined Shape" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[14.42%_13.79%_69.87%_71.28%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[19.329px] rotate-180 w-[20.61px]">
          <div className="relative size-full" data-name="Fill 3">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6098 19.3288">
              <path clipRule="evenodd" d={svgPaths.p19f0e240} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.33%_19.99%_79.89%_77.25%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[2.183px] rotate-180 w-[3.812px]">
          <div className="relative size-full" data-name="Fill 6">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.81235 2.18297">
              <path clipRule="evenodd" d={svgPaths.p22554380} fill="var(--fill-0, #407BFF)" fillRule="evenodd" id="Fill 6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29%_18.67%_69.78%_80.18%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.502px] rotate-180 w-[1.591px]">
          <div className="relative size-full" data-name="Fill 10">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5913 1.50243">
              <path clipRule="evenodd" d={svgPaths.p93f3380} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 10" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.35%_22.02%_65.06%_75.89%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.957px] rotate-180 w-[2.89px]">
          <div className="relative size-full" data-name="Fill 12">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.8902 1.95667">
              <path clipRule="evenodd" d={svgPaths.p23590500} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Head1() {
  return (
    <div className="absolute contents inset-[14.42%_13.79%_64.67%_71.28%]" data-name="Head">
      <HeadPonytailDark />
    </div>
  );
}

function Eye2() {
  return (
    <div className="absolute contents inset-[26.06%_22.28%_71.21%_74.99%]" data-name="eye1">
      <div className="absolute flex inset-[26.06%_22.28%_72.92%_74.99%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.26px] rotate-180 w-[3.766px]">
          <div className="relative size-full" data-name="Fill 1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.76606 1.25959">
              <path clipRule="evenodd" d={svgPaths.p383abc80} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.54%_22.85%_71.21%_75.08%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.546px] rotate-180 w-[2.867px]">
          <div className="relative size-full" data-name="Fill 6">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.86737 1.54551">
              <path clipRule="evenodd" d={svgPaths.p2a58a680} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.45%_22.83%_71.73%_75.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.003px] rotate-180 w-[2.843px]">
          <div className="relative size-full" data-name="Fill 8">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.8432 1.00295">
              <path clipRule="evenodd" d={svgPaths.pd31500} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 8" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.53%_23.36%_71.43%_75.58%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.28px] rotate-180 w-[1.466px]">
          <div className="relative size-full" data-name="Fill 10">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46584 1.28037">
              <path clipRule="evenodd" d={svgPaths.p9618a00} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 10" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Eye3() {
  return (
    <div className="absolute contents inset-[26.39%_26.18%_71.21%_71.96%]" data-name="eye2">
      <div className="absolute flex inset-[26.39%_26.18%_72.83%_71.96%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[0.957px] rotate-180 w-[2.572px]">
          <div className="relative size-full" data-name="Fill 4">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5717 0.956993">
              <path clipRule="evenodd" d={svgPaths.pe181500} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.66%_26.5%_71.21%_71.98%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.39px] rotate-180 w-[2.092px]">
          <div className="relative size-full" data-name="Fill 12">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.09238 1.39015">
              <path clipRule="evenodd" d={svgPaths.p2a43c980} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.73%_26.74%_71.41%_72.43%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.057px] rotate-180 w-[1.146px]">
          <div className="relative size-full" data-name="Fill 14">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.14569 1.05658">
              <path clipRule="evenodd" d={svgPaths.p1978ed00} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 14" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[27.6%_26.52%_71.69%_71.98%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[0.877px] rotate-180 w-[2.081px]">
          <div className="relative size-full" data-name="Fill 22">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.08062 0.877178">
              <path clipRule="evenodd" d={svgPaths.p50b4b00} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 22" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpressionsHappy() {
  return (
    <div className="absolute contents inset-[26.06%_22.28%_67.57%_71.96%]" data-name="Expressions/Happy">
      <Eye2 />
      <Eye3 />
      <div className="absolute flex inset-[31.24%_24.66%_67.57%_73.15%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.46px] rotate-180 w-[3.027px]">
          <div className="relative size-full" data-name="Fill 18">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.02681 1.4598">
              <path clipRule="evenodd" d={svgPaths.p2e076c00} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="Fill 18" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[29.25%_25.78%_69.35%_73.42%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[1.724px] rotate-180 w-[1.105px]">
          <div className="relative size-full" data-name="nose">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.10505 1.72362">
              <path clipRule="evenodd" d={svgPaths.p39416c00} fill="var(--fill-0, #090E2B)" fillRule="evenodd" id="nose" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Expressions2() {
  return (
    <div className="absolute contents inset-[26.06%_22.28%_67.57%_71.96%]" data-name="Expressions">
      <ExpressionsHappy />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[14.42%_13.79%_64.67%_71.28%]">
      <Head1 />
      <Expressions2 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[14.42%_7.72%_55.69%_64.63%]">
      <div className="absolute inset-[22.3%_11.59%_57.39%_68.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4197 24.9826">
          <path d={svgPaths.p18bdb700} id="Ellipse 1337" stroke="var(--stroke-0, #0077DB)" />
        </svg>
      </div>
      <MaskGroup2 />
      <Group3 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[2.11%_-1.14%_3.24%_-1.14%]">
      <MasterStickersObject />
      <MasterStickersObject1 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[138px]">
      <Group13 />
    </div>
  );
}

function TripleDotsHorizontal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="triple-dots-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="triple-dots-horizontal">
          <g id="triple dot">
            <path clipRule="evenodd" d={svgPaths.p2f8c8800} fill="var(--fill-0, #121212)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p938e400} fill="var(--fill-0, #121212)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3c3700} fill="var(--fill-0, #121212)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon Container">
      <TripleDotsHorizontal />
    </div>
  );
}

function TertiaryIconButton5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center max-w-[32px] min-w-[32px] px-[16px] right-[16px] rounded-[9999px] top-[16px]" data-name="Tertiary Icon Button">
      <IconContainer19 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f2f3f4] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pl-[24px] pr-[64px] py-[20px] relative w-full">
          <Frame9 />
          <div className="flex flex-row items-center self-stretch">
            <Frame39 />
          </div>
          <TertiaryIconButton5 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1226px] items-center py-[48px] relative shrink-0 w-[864px]">
      <p className="capitalize font-['Sarabun:Bold',sans-serif] leading-[33px] min-w-full not-italic relative shrink-0 text-[#121212] text-[26px] w-[min-content] whitespace-pre-wrap">Welcome back, Christine</p>
      <Campaigns />
      <Frame50 />
      <HighRevenuePotentialPartnersCardView />
      <Frame17 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[1406px] items-center right-[-1px] top-[calc(50%+35px)] w-[1376px]">
      <Frame33 />
    </div>
  );
}

export default function DashboardDefault() {
  return (
    <div className="bg-white border border-[#cacfd3] border-solid relative rounded-[8px] size-full" data-name="Dashboard - Default">
      <NavExpanded />
      <Frame46 />
    </div>
  );
}