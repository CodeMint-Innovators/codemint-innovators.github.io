import type { NextPage } from "next";

const ContactHover: NextPage = () => {
  return (
    <div className="w-[290px] rounded-8xs box-border h-[272px] overflow-hidden text-center text-21xl text-white font-questrial border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] w-[250px] h-[106px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
        <div className="absolute h-[37.74%] w-[57.6%] top-[31.13%] left-[21.2%] inline-block">
          Contact
        </div>
      </div>
      <div className="absolute top-[149px] left-[20px] w-[250px] h-[106px] text-black">
        <div className="absolute h-[86.79%] w-[86.8%] top-[6.6%] right-[6.8%] bottom-[6.6%] left-[6.4%] rounded-34xl bg-darkgray" />
        <div className="absolute h-[33.02%] w-[62.8%] top-[33.96%] left-[18.4%] inline-block [filter:blur(2px)]">
          Contact
        </div>
      </div>
    </div>
  );
};

export default ContactHover;
