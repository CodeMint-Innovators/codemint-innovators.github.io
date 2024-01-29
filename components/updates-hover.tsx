import type { NextPage } from "next";

const UpdatesHover: NextPage = () => {
  return (
    <div className="w-[290px] rounded-8xs box-border h-[272px] overflow-hidden text-center text-21xl text-white font-questrial border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] w-[250px] h-[106px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
        <div className="absolute h-[37.74%] w-[85.6%] top-[31.13%] left-[7.2%] inline-block [filter:blur(2px)]">
          Updates
        </div>
      </div>
      <div className="absolute top-[146px] left-[20px] w-[250px] h-[106px] text-black">
        <div className="absolute h-[87.74%] w-[87.6%] top-[6.6%] right-[6.4%] bottom-[5.66%] left-[6%] rounded-34xl bg-darkgray" />
        <div className="absolute h-[37.74%] w-[85.6%] top-[31.13%] left-[7.2%] inline-block [filter:blur(2px)]">
          Updates
        </div>
      </div>
    </div>
  );
};

export default UpdatesHover;
