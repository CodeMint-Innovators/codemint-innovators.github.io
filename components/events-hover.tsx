import type { NextPage } from "next";

const EventsHover: NextPage = () => {
  return (
    <div className="w-[290px] rounded-8xs box-border h-[272px] overflow-hidden text-center text-21xl text-white font-questrial border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] w-[250px] h-[106px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-600" />
        <div className="absolute top-[30.19%] left-[26%]">Events</div>
      </div>
      <div className="absolute top-[146px] left-[20px] w-[250px] h-[106px] text-black">
        <div className="absolute h-[87.74%] w-[87.6%] top-[6.6%] right-[6%] bottom-[5.66%] left-[6.4%] rounded-34xl bg-darkgray" />
        <div className="absolute h-[33.96%] w-[50.8%] top-[33.02%] left-[24.8%] inline-block [filter:blur(2px)]">
          Events
        </div>
      </div>
    </div>
  );
};

export default EventsHover;
