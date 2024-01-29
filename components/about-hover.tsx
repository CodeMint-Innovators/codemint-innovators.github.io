import type { NextPage } from "next";

const AboutHover: NextPage = () => {
  return (
    <div className="rounded-8xs overflow-hidden flex flex-col items-start justify-start p-5 gap-[20px] text-center text-21xl text-white font-questrial border-[1px] border-dashed border-blueviolet">
      <div className="w-[250px] relative h-[106px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
        <div className="absolute h-[37.74%] w-4/5 top-[31.13%] left-[10%] inline-block [filter:blur(2px)]">
          About
        </div>
      </div>
      <div className="w-[250px] relative h-[106px] text-black">
        <div className="absolute h-[87.74%] w-[87.6%] top-[6.6%] right-[6%] bottom-[5.66%] left-[6.4%] rounded-34xl bg-darkgray" />
        <div className="absolute h-[37.74%] w-[70%] top-[31.13%] left-[14.8%] inline-block [filter:blur(2px)]">
          About
        </div>
      </div>
    </div>
  );
};

export default AboutHover;
