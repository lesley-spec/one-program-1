import svgPaths from "./svg-y6gci7csof";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Text">
      <p className="font-['Sarabun:SemiBold',sans-serif] leading-[23px] relative shrink-0 text-[#25282f] text-[18px]">Edit Program Health Widget</p>
      <p className="font-['Sarabun:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#606672] text-[14px]">A maximum of 6 measures can be displayed on the dashboard.</p>
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
    <div className="bg-[#f0f1f3] content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Close button">
      <VNextIcon />
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[650px]" data-name="Modal Header">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Text />
        <CloseButton />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e9f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Checkmark() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Checkmark">
          <path clipRule="evenodd" d={svgPaths.pa4953f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[12px]" data-name="Icon Container">
      <Checkmark />
    </div>
  );
}

function VnextCheckbox() {
  return (
    <div className="bg-[#1d66de] content-stretch flex items-center justify-center p-[2px] relative rounded-[3px] shrink-0 size-[16px]" data-name="VNEXT Checkbox">
      <IconContainer />
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox Input">
      <VnextCheckbox />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] whitespace-nowrap">
        <p className="leading-[19px]">Set monthly goals</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <CheckboxInput />
    </div>
  );
}

function VnextCheckbox1() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[16px]" data-name="VNEXT Checkbox">
      <div aria-hidden="true" className="absolute border-[#757575] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox Input">
      <VnextCheckbox1 />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">{`Show spark lines `}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <CheckboxInput1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['Sarabun:Bold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-ellipsis">Select measures to display</p>
      <Frame4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full z-[13]" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function XMarkInvert() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="x-mark-invert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-mark-invert">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="Circle" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="X" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <XMarkInvert />
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

function VNextIcon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown />
    </div>
  );
}

function SelectInput() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Clicks</p>
          </div>
          <VNextIcon1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function VNextIcon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown1 />
    </div>
  );
}

function SelectInput1() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a7a7a7] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Pivot by</p>
          </div>
          <VNextIcon2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown2() {
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

function VNextIcon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown2 />
    </div>
  );
}

function SelectInput2() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Line Chart</p>
          </div>
          <VNextIcon3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">20,000</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip relative rounded-[8px] shrink-0 w-[80px]" data-name="Text Input">
      <Input />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <SelectInput />
      <SelectInput1 />
      <SelectInput2 />
      <TextInput />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <IconContainer1 />
      <Frame5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[16px] top-[16px] w-[556px]" data-name="Content">
      <Frame6 />
    </div>
  );
}

function DeprecateListTrue() {
  return (
    <div className="absolute inset-[23.33%]" data-name="(DEPRECATE) list-true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) list-true">
          <path d={svgPaths.p163ed900} id="hamburger lines" stroke="var(--stroke-0, #121212)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger() {
  return (
    <div className="absolute bg-white left-[572px] rounded-[8px] size-[30px] top-[21px]" data-name="hamburger">
      <DeprecateListTrue />
    </div>
  );
}

function Rule() {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[6]" data-name="Rule">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <Content1 />
      <Hamburger />
    </div>
  );
}

function XMarkInvert1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="x-mark-invert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-mark-invert">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="Circle" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="X" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <XMarkInvert1 />
    </div>
  );
}

function ArrowDown3() {
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

function VNextIcon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown3 />
    </div>
  );
}

function SelectInput3() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Actions</p>
          </div>
          <VNextIcon4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown4() {
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

function VNextIcon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown4 />
    </div>
  );
}

function SelectInput4() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a7a7a7] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Pivot by</p>
          </div>
          <VNextIcon5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown5() {
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

function VNextIcon6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown5 />
    </div>
  );
}

function SelectInput5() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Bar chart</p>
          </div>
          <VNextIcon6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">12,000</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center max-w-[80px] min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="Text Input">
      <Input1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconContainer2 />
      <SelectInput3 />
      <SelectInput4 />
      <SelectInput5 />
      <TextInput1 />
    </div>
  );
}

function DeprecateListTrue1() {
  return (
    <div className="absolute inset-[23.33%]" data-name="(DEPRECATE) list-true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) list-true">
          <path d={svgPaths.p163ed900} id="hamburger lines" stroke="var(--stroke-0, #121212)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[30px]" data-name="hamburger">
      <DeprecateListTrue1 />
    </div>
  );
}

function Rule1() {
  return (
    <div className="relative shrink-0 w-full z-[5]" data-name="Rule">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Content2 />
          <Hamburger1 />
        </div>
      </div>
    </div>
  );
}

function XMarkInvert2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="x-mark-invert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-mark-invert">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="Circle" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="X" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <XMarkInvert2 />
    </div>
  );
}

function ArrowDown6() {
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

function VNextIcon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown6 />
    </div>
  );
}

function SelectInput6() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Action Cost</p>
          </div>
          <VNextIcon7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown7() {
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

function VNextIcon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown7 />
    </div>
  );
}

function SelectInput7() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a7a7a7] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Pivot by</p>
          </div>
          <VNextIcon8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown8() {
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

function VNextIcon9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown8 />
    </div>
  );
}

function SelectInput8() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Line Chart</p>
          </div>
          <VNextIcon9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">$3,000</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center max-w-[80px] min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="Text Input">
      <Input2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconContainer3 />
      <SelectInput6 />
      <SelectInput7 />
      <SelectInput8 />
      <TextInput2 />
    </div>
  );
}

function DeprecateListTrue2() {
  return (
    <div className="absolute inset-[23.33%]" data-name="(DEPRECATE) list-true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) list-true">
          <path d={svgPaths.p163ed900} id="hamburger lines" stroke="var(--stroke-0, #121212)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[30px]" data-name="hamburger">
      <DeprecateListTrue2 />
    </div>
  );
}

function Rule2() {
  return (
    <div className="relative shrink-0 w-full z-[4]" data-name="Rule">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Content3 />
          <Hamburger2 />
        </div>
      </div>
    </div>
  );
}

function XMarkInvert3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="x-mark-invert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-mark-invert">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="Circle" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="X" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <XMarkInvert3 />
    </div>
  );
}

function ArrowDown9() {
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

function VNextIcon10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown9 />
    </div>
  );
}

function SelectInput9() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Revenue</p>
          </div>
          <VNextIcon10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown10() {
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

function VNextIcon11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown10 />
    </div>
  );
}

function SelectInput10() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a7a7a7] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Pivot by</p>
          </div>
          <VNextIcon11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown11() {
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

function VNextIcon12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown11 />
    </div>
  );
}

function SelectInput11() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Bar Chart</p>
          </div>
          <VNextIcon12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25282f] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">$250,000</p>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip relative rounded-[8px] shrink-0 w-[80px]" data-name="Text Input">
      <Input3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconContainer4 />
      <SelectInput9 />
      <SelectInput10 />
      <SelectInput11 />
      <TextInput3 />
    </div>
  );
}

function DeprecateListTrue3() {
  return (
    <div className="absolute inset-[23.33%]" data-name="(DEPRECATE) list-true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) list-true">
          <path d={svgPaths.p163ed900} id="hamburger lines" stroke="var(--stroke-0, #121212)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[30px]" data-name="hamburger">
      <DeprecateListTrue3 />
    </div>
  );
}

function Rule3() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Rule">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Content4 />
          <Hamburger3 />
        </div>
      </div>
    </div>
  );
}

function XMarkInvert4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="x-mark-invert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-mark-invert">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="Circle" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="X" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <XMarkInvert4 />
    </div>
  );
}

function ArrowDown12() {
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

function VNextIcon13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown12 />
    </div>
  );
}

function SelectInput12() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Total Cost</p>
          </div>
          <VNextIcon13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown13() {
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

function VNextIcon14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown13 />
    </div>
  );
}

function SelectInput13() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a7a7a7] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Pivot by</p>
          </div>
          <VNextIcon14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown14() {
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

function VNextIcon15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown14 />
    </div>
  );
}

function SelectInput14() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Line Chart</p>
          </div>
          <VNextIcon15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#25282f] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">{` `}</p>
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip relative rounded-[8px] shrink-0 w-[80px]" data-name="Text Input">
      <Input4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconContainer5 />
      <SelectInput12 />
      <SelectInput13 />
      <SelectInput14 />
      <TextInput4 />
    </div>
  );
}

function DeprecateListTrue4() {
  return (
    <div className="absolute inset-[23.33%]" data-name="(DEPRECATE) list-true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) list-true">
          <path d={svgPaths.p163ed900} id="hamburger lines" stroke="var(--stroke-0, #121212)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[30px]" data-name="hamburger">
      <DeprecateListTrue4 />
    </div>
  );
}

function Rule4() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Rule">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Content5 />
          <Hamburger4 />
        </div>
      </div>
    </div>
  );
}

function XMarkInvert5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="x-mark-invert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-mark-invert">
          <path clipRule="evenodd" d={svgPaths.p1caec100} fill="var(--fill-0, #CACFD3)" fillRule="evenodd" id="Circle" />
          <path d={svgPaths.p28336d00} fill="var(--fill-0, white)" id="X" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon Container">
      <XMarkInvert5 />
    </div>
  );
}

function ArrowDown15() {
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

function VNextIcon16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown15 />
    </div>
  );
}

function SelectInput15() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">CR</p>
          </div>
          <VNextIcon16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown16() {
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

function VNextIcon17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown16 />
    </div>
  );
}

function SelectInput16() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a7a7a7] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Pivot by</p>
          </div>
          <VNextIcon17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowDown17() {
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

function VNextIcon18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-name="VNext icon">
      <ArrowDown17 />
    </div>
  );
}

function SelectInput17() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px]" data-name="Select Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#25282f] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Bar Chart</p>
          </div>
          <VNextIcon18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[246px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8a959d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#a7a7a7] text-[14px]">
        <p className="leading-[18px] whitespace-pre-wrap">&nbsp;</p>
      </div>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip py-[7px] relative rounded-[8px] shrink-0 w-[80px]" data-name="Text Input">
      <Input5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconContainer6 />
      <SelectInput15 />
      <SelectInput16 />
      <SelectInput17 />
      <TextInput5 />
    </div>
  );
}

function DeprecateListTrue5() {
  return (
    <div className="absolute inset-[23.33%]" data-name="(DEPRECATE) list-true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="(DEPRECATE) list-true">
          <path d={svgPaths.p163ed900} id="hamburger lines" stroke="var(--stroke-0, #121212)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Hamburger5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[30px]" data-name="hamburger">
      <DeprecateListTrue5 />
    </div>
  );
}

function Rule5() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Rule">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Content6 />
          <Hamburger5 />
        </div>
      </div>
    </div>
  );
}

function TableColumn() {
  return (
    <div className="bg-white h-[472px] relative rounded-[8px] shrink-0 w-full" data-name="Table Column">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] size-full">
        <Heading />
        <Rule />
        <Rule1 />
        <Rule2 />
        <Rule3 />
        <Rule4 />
        <Rule5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cacfd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <TableColumn />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-start px-[16px] relative shrink-0 w-[650px]" data-name="Content">
      <Frame3 />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#1d66de] content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[65px] px-[16px] relative rounded-[9999px] shrink-0" data-name="Primary Button">
      <div className="flex flex-[1_0_0] flex-col font-['Sarabun:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">
        <p className="leading-[19px] whitespace-pre-wrap">Save</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button Group">
      <PrimaryButton />
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[650px]" data-name="Modal Footer">
      <div aria-hidden="true" className="absolute border-[#f2f3f4] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <ButtonGroup />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Modal">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[inherit] size-full">
        <ModalHeader />
        <Content />
        <ModalFooter />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f3f4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}