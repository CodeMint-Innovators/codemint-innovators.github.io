import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AboutSection: NextPage = () => {
  const router = useRouter();

  const onAboutHoverClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="absolute top-[254.8px] left-[513px] w-[1440px] h-[1098.2px] bg-[url('/frame-5@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <div className="absolute top-[4.2px] left-[0px] bg-gray-400 w-[440px] h-[106px]" />
      <div className="absolute top-[4.2px] left-[440px] bg-gainsboro-300 w-[1000px] h-[106px] overflow-hidden">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[250px] h-[106px]"
          autoFocus={true}
          onClick={onAboutHoverClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
          <div className="absolute h-[37.74%] w-4/5 top-[31.13%] left-[10%] text-21xl font-questrial text-white text-center inline-block">
            About
          </div>
        </button>
        <div className="absolute top-[0px] left-[500px] w-[500px] h-[106px] overflow-hidden">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[250px] w-[250px] h-[106px]"
            autoFocus={true}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
            <div className="absolute h-[37.74%] w-[57.6%] top-[31.13%] left-[21.2%] text-21xl font-questrial text-white text-center inline-block">
              Contact
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[250px] h-[106px]"
            autoFocus={true}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
            <div className="absolute h-[37.74%] w-[85.6%] top-[31.13%] left-[7.2%] text-21xl font-questrial text-white text-center inline-block">
              Updates
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
