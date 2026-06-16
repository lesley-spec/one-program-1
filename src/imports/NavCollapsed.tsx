import clsx from "clsx";
import svgPaths from "./svg-q791ump2m6";
import imgBrandAdidas from "figma:asset/7582cfd7dca9a384cd94bd5dbf01449baba1c8d7.png";
import imgBrandCnnDigital from "figma:asset/9e95a21c8e959c32e89e911691f17e7cb1ff7013.png";
import imgBrandForbes from "figma:asset/f93f23f7a1ae9a678838c0ef5a5e88e1e06811b0.png";
import imgBrandAcme from "figma:asset/ec184e1d6f3eda925b99dcf740ceb6fee09c59c3.png";
import imgBrandLevis from "figma:asset/67ebe0da87e1da7484e3d8089b50b34a7112d635.png";
import imgBrandBelkin from "figma:asset/63516597b575140dd30658c653a75cae66990a8b.png";
import imgBrandCalvinKlein from "figma:asset/28392af648c9119a3a661cc089686bb4ab5b9df5.png";
import imgBrandMarriottBonvoy from "figma:asset/0bbc9f2815bba129c675053e13d50767bfb45b6f.png";
import imgBrandEbay from "figma:asset/6c64a74df5b0c67c3196b0e629271f7dd50b4ebb.png";
import imgBrandCreditKarma from "figma:asset/d2b55658e6a2d8aa2bd7038c3db34185b85759d8.png";
import imgBrandMastercard from "figma:asset/5505fc7b61fc3ab8f2ed46af506eea394029cbba.png";
import imgBrandAmericanExpress from "figma:asset/30bd71415efb146be7a8a3d3219eef30a5618a9c.png";
import imgBrandNerdWallet from "figma:asset/8f4917eeff2dcf313e44e0749a24307cf84b071f.png";
import imgBrandTripadvisor from "figma:asset/9f4083ba509f2a3e13ca43a495ba645f275afb2a.png";
import imgBrandIgn from "figma:asset/277f2dd94a9b9e2481a140355aa8f21ac39c719b.png";
import imgImage3 from "figma:asset/ad84e8d3e08091c1abfe29765c8094196d7178e9.png";
import imgImage5 from "figma:asset/6ef01cbee4c44edf37abf6760baba6bb8412e78d.png";
import imgRectangle2 from "figma:asset/91d2b349a9421b83be6deeefa5e5441ce71e1be2.png";
import imgImage4 from "figma:asset/327d089160f66808215b90ac78abe70fb39f753d.png";
import imgImage6 from "figma:asset/b51558c4d2174d3e4e4a99cdd735b86a9db68514.png";
import imgImage7 from "figma:asset/a469fea11fe9364dc2b371fa90734c833b23d640.png";
import imgImage1 from "figma:asset/090037047b47fcf269ea477dca5c009bdd760a12.png";
import imgImage2 from "figma:asset/05ab10512292e03072fa57155ce0bc63883f34e0.png";
import { imgRectangle, imgRectangle1 } from "./svg-dokqe";

function Group({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-[-0.5%_69.57%_-0.5%_-0.1%]">
      <div className="absolute contents inset-[-0.5%_69.57%_-0.5%_-0.1%]" data-name="Clip path group">
        {children}
      </div>
    </div>
  );
}

function SpaciousStatusFinanceWidget({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[40px] relative rounded-[9999px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center pl-[16px] pr-[12px] relative">{children}</div>
      </div>
    </div>
  );
}
type BrandProfilePictureClipPathGroupProps = {
  additionalClassNames?: string;
};

function BrandProfilePictureClipPathGroup({ children, additionalClassNames = "" }: React.PropsWithChildren<BrandProfilePictureClipPathGroupProps>) {
  return (
    <div className={clsx("absolute contents", additionalClassNames)}>
      <Group>
        <div className="absolute contents inset-[-0.5%_69.57%_-0.5%_-0.1%]">
          <div className="absolute contents inset-[-0.5%_69.57%_-0.5%_-0.1%]" data-name="Clip path group">
            {children}
          </div>
        </div>
      </Group>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="absolute inset-[19.04%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12.3833">
          {children}
        </svg>
      </div>
    </div>
  );
}
type IconContainerProps = {
  additionalClassNames?: string;
};

function IconContainer({ children, additionalClassNames = "" }: React.PropsWithChildren<IconContainerProps>) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]", additionalClassNames)}>
      <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
        <div className="content-stretch flex items-start relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[64px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function RightSide({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[32px]" data-name="Brand Avatar">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col h-full items-start not-italic relative shrink-0 w-[92px] whitespace-nowrap">
          <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] relative shrink-0 text-[#25282f] text-[14px]">{"Adidas"}</p>
          <p className="font-['Sarabun:Regular',sans-serif] leading-[13px] relative shrink-0 text-[#606672] text-[10px]">{"Performance"}</p>
        </div>
      </div>
    </div>
  );
}

function LeftSide({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[40px] max-w-[289px] min-w-[178px] relative rounded-[9999px] shrink-0 w-[178px]" data-name="Account Name">
        <div className="flex flex-row items-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between max-w-[inherit] min-w-[inherit] pl-[4px] pr-[16px] py-[4px] relative size-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

function SideNavProductItems({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon container">
        <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
          {children}
        </div>
      </div>
    </Wrapper1>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0)] relative rounded-[9999px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] relative size-full">
          <div className="relative shrink-0" data-name="Icon Container">
            <div className="content-stretch flex items-start relative">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
type SideNavProductItemsTextProps = {
  text: string;
};

function SideNavProductItemsText({ text, children }: React.PropsWithChildren<SideNavProductItemsTextProps>) {
  return (
    <Wrapper1>
      <IconContainer>{children}</IconContainer>
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
        <p className="leading-[13px]">{text}</p>
      </div>
    </Wrapper1>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <div className="content-stretch flex items-start relative size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
          <Vector1 />
        </div>
      </div>
    </div>
  );
}
type NavCollapsedStatusesTextProps = {
  text: string;
};

function NavCollapsedStatusesText({ text }: NavCollapsedStatusesTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[9999px] shrink-0">
      <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Partner avatar">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[24px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButtonContainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Wrapper additionalClassNames="min-w-[40px] size-[40px]">
        <div className="relative shrink-0 size-[16px]" data-name="Search">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.pb44c500} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </Wrapper>
      <NavCollapsedTertiaryIconButton>
        <path clipRule="evenodd" d={svgPaths.p25c3e930} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
      </NavCollapsedTertiaryIconButton>
      <Wrapper additionalClassNames="min-w-[40px] size-[40px]">
        <div className="relative shrink-0 size-[16px]" data-name="Notification">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.pb2cd6c0} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </Wrapper>
      <NavCollapsedTertiaryIconButton1>
        <path clipRule="evenodd" d={svgPaths.p1adfb900} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
      </NavCollapsedTertiaryIconButton1>
      <NavCollapsedTertiaryIconButton2>
        <path clipRule="evenodd" d={svgPaths.p1f21e980} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
      </NavCollapsedTertiaryIconButton2>
      <Wrapper additionalClassNames="min-w-[40px] size-[40px]">
        <div className="relative shrink-0 size-[16px]" data-name="Nav-help">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            {children}
          </svg>
        </div>
      </Wrapper>
    </div>
  );
}

function NavCollapsedTertiaryIconButton2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="min-w-[40px] size-[40px]">
      <div className="relative shrink-0 size-[16px]" data-name="refer-a-friend">
        <div className="absolute inset-[6.25%_0_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            {children}
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

function NavCollapsedTertiaryIconButton1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="min-w-[40px] size-[40px]">
      <div className="relative shrink-0 size-[16px]" data-name="task-manager">
        <div className="absolute inset-[5.73%_-0.52%_1.56%_-0.52%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1667 14.8333">
            {children}
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

function NavCollapsedTertiaryIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="min-w-[40px] size-[40px]">
      <div className="relative shrink-0 size-[16px]" data-name="Message">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.049px] left-1/2 top-1/2 w-[16px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.0488">
            {children}
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

function NavCollapsedIconContainer() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <div className="content-stretch flex items-start relative size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="arrow-down">
          <Vector1 />
        </div>
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute inset-[25.39%_0_14.61%_0]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9998 7.19982">
        <path d={svgPaths.p2011d900} fill="var(--fill-0, #25282F)" id="Vector" />
      </svg>
    </div>
  );
}

function InsightsNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative">
      <div className="absolute inset-[0.27%_1.29%_0_1.29%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4844 19.9462">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p24d22700} fill="var(--fill-0, #25282F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p231e7f0} fill="var(--fill-0, #25282F)" fillRule="evenodd" />
            <path d={svgPaths.p24706280} fill="var(--fill-0, #25282F)" />
            <path d={svgPaths.p34525700} fill="var(--fill-0, #25282F)" />
            <path d={svgPaths.p6c2d380} fill="var(--fill-0, #25282F)" />
            <path clipRule="evenodd" d={svgPaths.p3b33ce00} fill="var(--fill-0, #25282F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3757b372} fill="var(--fill-0, #25282F)" fillRule="evenodd" />
            <path d={svgPaths.p33e11f80} fill="var(--fill-0, #25282F)" />
            <path d={svgPaths.p1fe53780} fill="var(--fill-0, #25282F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ComplianceNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="absolute inset-[-0.75%_8.64%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5449 20.2997">
          <g id="Vector">
            <path d={svgPaths.p22c51800} fill="var(--fill-0, #25282F)" />
            <path d={svgPaths.p1d976b80} fill="var(--fill-0, #25282F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function OptimizeNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative">
      <div className="absolute h-[19.081px] left-[0.94px] top-[0.2px] w-[18.124px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.124 19.0805">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p38f74970} fill="#25282F" fillRule="evenodd" />
            <path d={svgPaths.p3389e700} fill="var(--fill-0, #25282F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EngageFilled() {
  return (
    <Wrapper2>
      <path d={svgPaths.p5dcc80} fill="var(--fill-0, #25282F)" id="Vector" />
    </Wrapper2>
  );
}

function DiscoverNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="absolute inset-[2.57%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9712 18.9715">
          <g id="Vector">
            <path d={svgPaths.p2c228200} fill="var(--fill-0, #25282F)" />
            <path clipRule="evenodd" d={svgPaths.p14204e80} fill="var(--fill-0, #25282F)" fillRule="evenodd" />
            <path d={svgPaths.p247d2480} fill="var(--fill-0, #25282F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[9.38%_5.21%_9.37%_5.21%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 16.25">
        <g id="Vector">
          <path d={svgPaths.pffabc00} fill="var(--fill-0, #25282F)" />
          <path d={svgPaths.p4403700} fill="var(--fill-0, #25282F)" />
        </g>
      </svg>
    </div>
  );
}

function SideNavProductsEngageNotFilled() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="absolute inset-[15.74%_-0.8%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3207 13.7032">
          <path clipRule="evenodd" d={svgPaths.p7b11700} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type SideNavProductsProps = {
  className?: string;
  option?: "Engage" | "Discover" | "Optimize" | "Protect" | "Insights";
};

function SideNavProducts({ className, option = "Engage" }: SideNavProductsProps) {
  const isDiscover = option === "Discover";
  const isDiscoverOrOptimizeOrProtectOrInsights = ["Discover", "Optimize", "Protect", "Insights"].includes(option);
  const isEngage = option === "Engage";
  const isInsights = option === "Insights";
  const isOptimize = option === "Optimize";
  const isProtect = option === "Protect";
  return (
    <div className={className || "bg-[#edf1f9] h-[825px] relative"}>
      <div className="content-stretch flex flex-col h-full items-start relative">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Top">
          <SideNavProductItems>
            {isDiscoverOrOptimizeOrProtectOrInsights && (
              <div className="content-stretch flex items-start relative size-full">
                <SideNavProductsEngageNotFilled />
              </div>
            )}
            {isEngage && <Vector />}
          </SideNavProductItems>
          <div className={`relative shrink-0 w-full ${isDiscoverOrOptimizeOrProtectOrInsights ? "opacity-20" : ""}`}>
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center pb-[8px] px-[20px] relative w-full">
                <div className={`h-px relative shrink-0 w-[20px] ${isDiscoverOrOptimizeOrProtectOrInsights ? "" : "opacity-20"}`} data-name="separator">
                  <div className="absolute inset-[1px_0_0_0]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isDiscoverOrOptimizeOrProtectOrInsights ? "0 0 375 1" : "0 0 20 1"}>
                        <line id="Line 2" stroke={isDiscoverOrOptimizeOrProtectOrInsights ? "var(--stroke-0, #E0E9F0)" : "var(--stroke-0, #606672)"} x2={isDiscoverOrOptimizeOrProtectOrInsights ? "375" : "20"} y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Products">
            <Wrapper1>
              <div className={`content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px] ${isDiscoverOrOptimizeOrProtectOrInsights ? "" : "bg-[#d6ebff]"}`} data-name="Icon container">
                <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
                  <div className="content-stretch flex items-start relative size-full">
                    {isDiscoverOrOptimizeOrProtectOrInsights && <SideNavProductsEngageNotFilled />}
                    {isEngage && (
                      <Wrapper2>
                        <path d={svgPaths.p629e00} fill="var(--fill-0, #1D66DE)" id="Vector" />
                      </Wrapper2>
                    )}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px] ${isDiscoverOrOptimizeOrProtectOrInsights ? 'font-["Sarabun:Regular",sans-serif]' : 'font-["Sarabun:SemiBold",sans-serif]'}`}>
                <p className="font-['Sarabun:Bold',sans-serif] leading-[13px]">Engage</p>
              </div>
            </Wrapper1>
            <Wrapper1>
              <div className={`content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px] ${isDiscover ? "bg-[#d6ebff]" : ""}`} data-name="Icon container">
                <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
                  <div className="content-stretch flex items-start relative size-full">
                    {["Optimize", "Protect", "Insights"].includes(option) && <SideNavProductsEngageNotFilled />}
                    {isEngage && <DiscoverNotFilled />}
                    {isDiscover && <EngageFilled />}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px] ${isDiscover ? 'font-["Sarabun:SemiBold",sans-serif]' : 'font-["Sarabun:Regular",sans-serif]'}`}>
                <p className="leading-[13px]">Discover</p>
              </div>
            </Wrapper1>
            <Wrapper1>
              <div className={`content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px] ${isOptimize ? "bg-[#d6ebff]" : ""}`} data-name="Icon container">
                <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
                  <div className="content-stretch flex items-start relative size-full">
                    {["Discover", "Protect", "Insights"].includes(option) && <SideNavProductsEngageNotFilled />}
                    {isEngage && <OptimizeNotFilled />}
                    {isOptimize && <EngageFilled />}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px] ${isOptimize ? 'font-["Sarabun:SemiBold",sans-serif]' : 'font-["Sarabun:Regular",sans-serif]'}`}>
                <p className="leading-[13px]">Optimize</p>
              </div>
            </Wrapper1>
            <Wrapper1>
              <div className={`content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px] ${isProtect ? "bg-[#d6ebff]" : ""}`} data-name="Icon container">
                <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
                  <div className="content-stretch flex items-start relative size-full">
                    {["Discover", "Optimize", "Insights"].includes(option) && <SideNavProductsEngageNotFilled />}
                    {isEngage && <ComplianceNotFilled />}
                    {isProtect && <EngageFilled />}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px] ${isProtect ? 'font-["Sarabun:SemiBold",sans-serif]' : 'font-["Sarabun:Regular",sans-serif]'}`}>
                <p className="leading-[13px]">Protect</p>
              </div>
            </Wrapper1>
            <Wrapper1>
              <div className={`content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px] ${isInsights ? "bg-[#d6ebff]" : ""}`} data-name="Icon container">
                <div className="relative shrink-0 size-[20px]" data-name="Icon Container">
                  <div className="content-stretch flex items-start relative size-full">
                    {["Discover", "Optimize", "Protect"].includes(option) && <SideNavProductsEngageNotFilled />}
                    {isEngage && <InsightsNotFilled />}
                    {isInsights && <EngageFilled />}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px] ${isInsights ? 'font-["Sarabun:SemiBold",sans-serif]' : 'font-["Sarabun:Regular",sans-serif]'}`}>
                <p className="leading-[13px]">Insights</p>
              </div>
            </Wrapper1>
          </div>
        </div>
      </div>
    </div>
  );
}
type BrandProfilePictureProps = {
  className?: string;
  brand?: "Adidas" | "Marriott Bonvoy" | "CNN Digital" | "Forbes" | "Acme" | "Levi's" | "IGN" | "Tripadvisor" | "Nerd Wallet" | "American Express" | "Mastercard" | "Credit Karma" | "ebay" | "Calvin Klein" | "Belkin" | "Best Buy" | "Target" | "Hamilton Beach" | "Buzzfeed" | "Walmart" | "Nordstrom" | "Kayak" | "Meta" | "Rakuten";
};

function BrandProfilePicture({ className, brand = "Adidas" }: BrandProfilePictureProps) {
  const isAmericanExpress = brand === "American Express";
  const isCalvinKlein = brand === "Calvin Klein";
  const isCreditKarma = brand === "Credit Karma";
  const isEbay = brand === "ebay";
  const isHamiltonBeach = brand === "Hamilton Beach";
  const isIgn = brand === "IGN";
  const isLevis = brand === "Levi's";
  const isMarriottBonvoy = brand === "Marriott Bonvoy";
  const isMastercard = brand === "Mastercard";
  const isMeta = brand === "Meta";
  const isTripadvisor = brand === "Tripadvisor";
  return (
    <div className={className || "relative"}>
      {["Forbes", "Acme", "Levi's", "Calvin Klein", "Marriott Bonvoy", "ebay", "Credit Karma", "Mastercard", "American Express", "Tripadvisor", "IGN", "Hamilton Beach", "Meta"].includes(brand) && (
        <div aria-hidden={["Forbes", "Acme", "Levi's", "Calvin Klein", "ebay", "Credit Karma", "Mastercard", "Tripadvisor", "IGN"].includes(brand) ? "true" : undefined} className={`absolute ${isMeta ? "-translate-y-1/2 aspect-[42.764488220214844/8.666666030883789] left-[12.5%] right-[12.5%] top-1/2" : isHamiltonBeach ? "contents inset-[41.25%_11.88%_41%_13.13%]" : ["Marriott Bonvoy", "American Express"].includes(brand) ? "inset-0 overflow-hidden pointer-events-none" : "inset-0 pointer-events-none"}`}>
          {["Forbes", "Acme", "Levi's", "Calvin Klein", "ebay", "Credit Karma", "Mastercard", "Tripadvisor", "IGN", "Hamilton Beach"].includes(brand) && (
            <div className={`absolute ${isHamiltonBeach ? "contents inset-[41.25%_11.88%_41%_13.13%]" : "bg-white inset-0"}`}>
              {isHamiltonBeach && (
                <div className="absolute inset-[41.25%_11.88%_41%_13.13%]" data-name="image 3">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                </div>
              )}
            </div>
          )}
          {["Acme", "Levi's", "Calvin Klein", "ebay", "Credit Karma", "Mastercard", "Tripadvisor", "IGN"].includes(brand) && (
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className={`absolute max-w-none ${isIgn ? "h-[41.67%] left-0 top-[29.17%] w-full" : isTripadvisor ? "h-[18.6%] left-[6.25%] top-[40.7%] w-[87.5%]" : isMastercard ? "h-[70.91%] left-0 top-[14.55%] w-full" : isCreditKarma ? "h-[75.13%] left-[-6.14%] top-[12.18%] w-[112.69%]" : isEbay ? "h-[35%] left-[7.63%] top-[32.5%] w-[87.5%]" : isCalvinKlein ? "h-[88.82%] left-[14.39%] top-[4.43%] w-[71.21%]" : isLevis ? "h-[70.8%] left-[-12.1%] top-[14.6%] w-[125.99%]" : "left-[6.25%] size-[87.5%] top-[6.25%]"}`} src={isIgn ? imgBrandIgn : isTripadvisor ? imgBrandTripadvisor : isMastercard ? imgBrandMastercard : isCreditKarma ? imgBrandCreditKarma : isEbay ? imgBrandEbay : isCalvinKlein ? imgBrandCalvinKlein : isLevis ? imgBrandLevis : imgBrandAcme} />
            </div>
          )}
          {["Forbes", "Marriott Bonvoy", "American Express"].includes(brand) && <img alt="" className={`absolute max-w-none ${isAmericanExpress ? "h-full left-0 top-0 w-[100.25%]" : isMarriottBonvoy ? "h-[103.59%] left-0 top-[-1.92%] w-[103.32%]" : "object-cover size-full"}`} src={isAmericanExpress ? imgBrandAmericanExpress : isMarriottBonvoy ? imgBrandMarriottBonvoy : imgBrandForbes} />}
          {isMeta && (
            <>
              <div className="absolute contents inset-[3.21%_0_0.03%_36.7%]" data-name="Wordmark">
                <div className="absolute inset-[3.21%_42.91%_1.73%_36.7%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2321 11.4068">
                    <path d={svgPaths.p8eec300} fill="var(--fill-0, #1C2B33)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[25.76%_26.6%_0.03%_59.84%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.13558 8.90549">
                    <path d={svgPaths.p36141500} fill="var(--fill-0, #1C2B33)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[6.68%_15.54%_0.17%_74.3%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.09142 11.1786">
                    <path d={svgPaths.p372c5e80} fill="var(--fill-0, #1C2B33)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[25.76%_0_0.03%_85.88%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.47218 8.90549">
                    <path d={svgPaths.p34b43300} fill="var(--fill-0, #1C2B33)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute contents inset-[0_69.68%_0_0]" data-name="Symbol">
                <BrandProfilePictureClipPathGroup additionalClassNames="inset-[0_69.68%_0_0]">
                  <div className="absolute contents inset-[-0.52%_69.57%_-0.52%_-0.11%]" data-name="Group">
                    <div className="absolute inset-[-0.52%_69.57%_-0.52%_-0.11%] mask-position-[0.065px_0.062px,_0.005px_0.002px,_0.005px_0.002px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}'), url('${imgRectangle1}')` }}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                      </div>
                    </div>
                  </div>
                </BrandProfilePictureClipPathGroup>
                <div className="absolute inset-[0_81.55%_42.76%_8.67%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.86441 6.86872">
                    <path d={svgPaths.p1b7dfff0} fill="url(#paint0_linear_210_22789)" id="Vector" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_210_22789" x1="5.26161" x2="0.274573" y1="6.39529" y2="-0.189017">
                        <stop offset="0.1336" stopColor="#0869E1" />
                        <stop offset="0.8727" stopColor="#0064E0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {["Adidas", "CNN Digital", "Belkin", "Nerd Wallet"].includes(brand) && <img alt="" className={`absolute inset-0 max-w-none pointer-events-none size-full ${["CNN Digital", "Belkin", "Nerd Wallet"].includes(brand) ? "object-cover" : "object-contain"}`} src={brand === "Nerd Wallet" ? imgBrandNerdWallet : brand === "Belkin" ? imgBrandBelkin : brand === "CNN Digital" ? imgBrandCnnDigital : imgBrandAdidas} />}
      {["Buzzfeed", "Walmart"].includes(brand) && (
        <div className="absolute inset-[-5%_-5.62%_-5%_-4.38%]" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={brand === "Walmart" ? imgImage7 : imgImage4} />
        </div>
      )}
      {brand === "Best Buy" && (
        <div className="absolute inset-[27.5%_12.5%_28.65%_12.5%]" data-name="logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 35.0769">
            <g id="logo">
              <path d={svgPaths.p15de1b80} fill="var(--fill-0, #FFF200)" id="Vector" />
              <path d={svgPaths.p1e95a940} fill="var(--fill-0, #1D252C)" id="Vector_2" />
              <path d={svgPaths.pe7b5780} fill="var(--fill-0, #1D252C)" id="Vector_3" />
              <path d={svgPaths.p3b113812} fill="var(--fill-0, #1D252C)" id="Vector_4" />
            </g>
          </svg>
        </div>
      )}
      {brand === "Nordstrom" && (
        <div className="-translate-y-1/2 absolute aspect-[960/121] left-[13.13%] right-[11.88%] top-1/2" data-name="image 5">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5} />
        </div>
      )}
      {brand === "Kayak" && (
        <div className="-translate-y-1/2 absolute aspect-[225/225] left-0 right-0 top-1/2" data-name="image 6">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      )}
      {brand === "Target" && (
        <div className="absolute content-stretch flex inset-[12.5%] items-center overflow-clip rounded-[8px]" data-name="Square Brand Avatar">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Brand Profile Picture">
            <div className="absolute inset-[37.5%_3.13%]" data-name="image 1">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
            </div>
            <div className="absolute inset-0 rounded-[3px]" data-name="image 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[3px] size-full" src={imgImage2} />
            </div>
          </div>
        </div>
      )}
      {brand === "Rakuten" && (
        <div className="absolute aspect-[86/26] left-[10%] overflow-clip right-[10%] top-[30.33px]" data-name="rakuten 1">
          <div className="absolute inset-[83.81%_19.53%_0_20.01%]" data-name="shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.6932 3.13341">
              <path d={svgPaths.pa6e0e00} fill="var(--fill-0, #8529CD)" id="shape" />
            </svg>
          </div>
          <div className="absolute inset-[17%_-0.06%_26.52%_86.44%]" data-name="n">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.71851 10.9278">
              <path d={svgPaths.p297f8a00} fill="var(--fill-0, #8529CD)" id="n" />
            </svg>
          </div>
          <div className="absolute inset-[16.8%_14.98%_25.3%_70.4%]" data-name="e">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.35545 11.202">
              <path d={svgPaths.p1a77de00} fill="var(--fill-0, #8529CD)" id="e" />
            </svg>
          </div>
          <div className="absolute inset-[4.45%_28.39%_25.3%_60.46%]" data-name="t">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.13683 13.5912">
              <path d={svgPaths.p381a8a70} fill="var(--fill-0, #8529CD)" id="t" />
            </svg>
          </div>
          <div className="absolute inset-[18.22%_40.81%_25.3%_45.57%]" data-name="u">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.7185 10.9278">
              <path d={svgPaths.p231fc100} fill="var(--fill-0, #8529CD)" id="u" />
            </svg>
          </div>
          <div className="absolute inset-[0_54.01%_26.52%_31.46%]" data-name="k">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29717 14.2179">
              <path d={svgPaths.p33bda000} fill="var(--fill-0, #8529CD)" id="k" />
            </svg>
          </div>
          <div className="absolute inset-[16.8%_70.64%_25.3%_14.65%]" data-name="a">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.4129 11.202">
              <path d={svgPaths.p2c320280} fill="var(--fill-0, #8529CD)" id="a" />
            </svg>
          </div>
          <div className="absolute inset-[4.45%_83.73%_26.52%_0]" data-name="R">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4159 13.3562">
              <path d={svgPaths.p8fd2600} fill="var(--fill-0, #8529CD)" id="R" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
type NavCollapsedProps = {
  className?: string;
  settings?: boolean;
};

function NavCollapsed({ className, settings = false }: NavCollapsedProps) {
  const isNotSettings = !settings;
  const isSettings = settings;
  return (
    <div className={className || "bg-[#edf1f9] h-[900px] relative w-[1440px]"}>
      {isNotSettings && (
        <>
          <div className="absolute bg-[#edf1f9] h-[64px] left-0 right-0 top-0" data-name="VNext Desktop Top Nav">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
                <LeftSide>
                  <RightSide>
                    <BrandProfilePicture className="flex-[1_0_0] h-full min-h-px min-w-px relative" />
                  </RightSide>
                  <NavCollapsedIconContainer />
                </LeftSide>
                <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Side">
                  <IconButtonContainer>
                    <path clipRule="evenodd" d={svgPaths.p22921500} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
                  </IconButtonContainer>
                  <SpaciousStatusFinanceWidget>
                    <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center whitespace-nowrap">$0.00</p>
                    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                      <NavCollapsedIconContainer />
                    </div>
                  </SpaciousStatusFinanceWidget>
                  <NavCollapsedStatusesText text="C" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#edf1f9] bottom-[6px] left-0 top-[64px]" data-name="VNext Side Nav">
            <div className="content-stretch flex flex-col h-full items-start relative">
              <SideNavProducts className="bg-[#edf1f9] flex-[1_0_0] min-h-px min-w-px relative" />
            </div>
          </div>
        </>
      )}
      {isSettings && (
        <>
          <div className="absolute content-stretch flex flex-col gap-[8px] items-end left-[-0.26px] right-[0.26px] top-0" data-name="Top Nav">
            <div className="bg-[#edf1f9] h-[64px] relative shrink-0 w-[1440px]" data-name="VNext Desktop Top Nav">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
                  <LeftSide>
                    <RightSide>
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Brand Profile Picture">
                        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrandAdidas} />
                      </div>
                    </RightSide>
                    <Helper />
                  </LeftSide>
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Side">
                    <IconButtonContainer>
                      <path clipRule="evenodd" d={svgPaths.p22921500} fill="var(--fill-0, #1D66DE)" fillRule="evenodd" id="Vector" />
                    </IconButtonContainer>
                    <SpaciousStatusFinanceWidget>
                      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center whitespace-nowrap">$0.00</p>
                      <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                        <Helper />
                      </div>
                    </SpaciousStatusFinanceWidget>
                    <NavCollapsedStatusesText text="C" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f9fbff] relative shrink-0 w-[1376px]" data-name="Settings Program Switcher">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[32px] py-[8px] relative w-full">
                  <Wrapper additionalClassNames="min-w-[32px] size-[32px]">
                    <div className="relative shrink-0 size-[16px]" data-name="plus">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={svgPaths.p15451400} fill="var(--fill-0, #25282F)" fillRule="evenodd" id="Vector" />
                      </svg>
                    </div>
                  </Wrapper>
                  <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[18px]">Viewing account settings for</p>
                  </div>
                  <div className="h-[32px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Select Input">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[3px] relative size-full">
                        <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
                          <p className="overflow-hidden">
                            <span className="leading-[18px]">{`Acme Corporation `}</span>
                            <span className="leading-[18px] text-[#121212]">12345</span>
                          </p>
                        </div>
                        <Helper />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#edf1f9] bottom-0 left-0 top-[64px]" data-name="VNext Side Nav">
            <div className="content-stretch flex flex-col h-full items-start relative">
              <div className="bg-[#edf1f9] flex-[1_0_0] min-h-px min-w-px relative" data-name="Side Nav / Products">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col h-full items-start relative">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Top">
                      <SideNavProductItems>
                        <Vector />
                      </SideNavProductItems>
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col items-center pb-[8px] px-[20px] relative w-full">
                            <div className="h-px opacity-20 relative shrink-0 w-[20px]" data-name="separator">
                              <div className="absolute inset-[1px_0_0_0]">
                                <div className="absolute inset-[-1px_0_0_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
                                    <line id="Line 2" stroke="var(--stroke-0, #E0E9F0)" x2="375" y1="0.5" y2="0.5" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Products">
                        <Wrapper1>
                          <IconContainer additionalClassNames="bg-[#d6ebff]">
                            <EngageFilled />
                          </IconContainer>
                          <div className="flex flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[10px] text-center tracking-[0.2px] w-[54px]">
                            <p className="font-['Sarabun:Bold',sans-serif] leading-[13px]">Engage</p>
                          </div>
                        </Wrapper1>
                        <SideNavProductItemsText text="Discover">
                          <DiscoverNotFilled />
                        </SideNavProductItemsText>
                        <SideNavProductItemsText text="Optimize">
                          <OptimizeNotFilled />
                        </SideNavProductItemsText>
                        <SideNavProductItemsText text="Protect">
                          <ComplianceNotFilled />
                        </SideNavProductItemsText>
                        <SideNavProductItemsText text="Insights">
                          <InsightsNotFilled />
                        </SideNavProductItemsText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function NavCollapsed1() {
  return <NavCollapsed className="bg-[#edf1f9] relative size-full" />;
}