import type { NextPage } from "next";
import { useCallback } from "react";
import AboutSection from "../components/about-section";

const Updates: NextPage = () => {
  const onRectangleLink1Click = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onRectangleLink2Click = useCallback(() => {
    window.open("https://discord.gg/hzT893bbQN");
  }, []);

  const onRectangleLink3Click = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  const onRectangleLink4Click = useCallback(() => {
    window.open("https://www.tiktok.com/en/");
  }, []);

  const onRectangleLink5Click = useCallback(() => {
    window.open("https://www.tiktok.com/en/");
  }, []);

  return (
    <div className="w-full relative bg-gray-100 h-[2837px] overflow-hidden text-center text-46xl text-white font-kaisei-decol">
      <div className="absolute top-[-259px] left-[-513px] w-[2113px] h-[3521.9px] overflow-hidden">
        <div className="absolute top-[255px] left-[513px] bg-midnightblue-200 [backdrop-filter:blur(900px)] w-[1440px] h-[2841px]" />
        <div className="absolute top-[788.8px] left-[1792px] rounded-[50%] bg-aquamarine [filter:blur(554px)] w-[321px] h-[472px]" />
        <div className="absolute top-[266.8px] left-[653px] rounded-[50%] bg-darkviolet [filter:blur(277px)] w-[241px] h-[346px]" />
        <div className="absolute top-[125.4px] left-[534.6px] rounded-[50%] bg-deepskyblue [filter:blur(410px)] w-[343px] h-[603px] [transform:_rotate(-21.45deg)] [transform-origin:0_0]" />
        <div className="absolute top-[106.8px] left-[863px] rounded-[50%] bg-turquoise [filter:blur(447px)] w-[211px] h-[366px]" />
        <div className="absolute top-[1062.8px] left-[440.1px] bg-cornflowerblue [filter:blur(546px)] w-[626.6px] h-[881.3px] [transform:_rotate(29.96deg)] [transform-origin:0_0]" />
        <AboutSection />
        <div className="absolute top-[634px] left-[638px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[634px] left-[843px] rounded-3xl bg-gainsboro-300 w-[370px] h-[563px]" />
        <div className="absolute top-[634px] left-[1248px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[634px] left-[1453px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[634px] left-[1658px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1910px] left-[638px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1910px] left-[843px] rounded-3xl bg-gainsboro-300 w-[370px] h-[563px]" />
        <div className="absolute top-[1910px] left-[1248px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1910px] left-[1453px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1910px] left-[1658px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[57.8px] left-[1465px] rounded-[50%] bg-mediumslateblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(148px)] w-[213px] h-[242px]" />
        <b className="absolute top-[473px] left-[881px]">
          Latest Instagram Posts
        </b>
        <div className="absolute top-[1285px] left-[820px] rounded-78xl-5 bg-gray-500 box-border w-[786px] h-[195px] border-[2px] border-solid border-white" />
        <a
          className="[text-decoration:none] absolute top-[1337px] left-[952px] rounded-xl w-[91px] h-[91px] bg-[url('/rectangle-30@3x.png')] bg-cover bg-no-repeat bg-[top]"
          href="https://instagram.com"
          target="_blank"
        />
        <img
          className="absolute top-[1353px] left-[513px] w-[1440px] h-[1743px] object-cover"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className="absolute top-[3006.7px] left-[1474.3px] rounded-[50%] bg-deepskyblue [filter:blur(623px)] w-[478.5px] h-[548px] [transform:_rotate(-19.93deg)] [transform-origin:0_0]" />
        <div className="absolute top-[793px] left-[1792px] rounded-[50%] bg-aquamarine [filter:blur(554px)] w-[321px] h-[472px]" />
        <div className="absolute top-[2948px] left-[513px] bg-mediumslateblue-200 w-[1440px] h-[148px]" />
        <div className="absolute top-[3005px] left-[594px] text-11xl font-questrial text-left inline-block w-[820px] h-[33px]">
          <p className="m-0">
            Made with ❤️ by the CodeMint Innovators Development Team
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
        <a
          className="[text-decoration:none] absolute top-[2986px] left-[1501px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-49@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https://www.instagram.com/"
          target="_blank"
          onClick={onRectangleLink1Click}
        />
        <a
          className="[text-decoration:none] absolute top-[2986px] left-[1601px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-31@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https://discord.com/"
          target="_blank"
          onClick={onRectangleLink2Click}
        />
        <a
          className="[text-decoration:none] absolute top-[2986px] left-[1701px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-32@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          onClick={onRectangleLink3Click}
        />
        <a
          className="[text-decoration:none] absolute top-[2986px] left-[1801px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-50@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https://www.tiktok.com/"
          target="_blank"
          onClick={onRectangleLink4Click}
        />
        <b className="absolute top-[1749px] left-[917px] [filter:blur(2px)]">
          Latest Tik Tok Posts
        </b>
        <b className="absolute top-[1337px] left-[1043px] text-41xl inline-block font-lato w-[471px] h-[92px]">
          See More Posts
        </b>
        <div className="absolute top-[2613px] left-[820px] rounded-78xl-5 bg-gray-500 box-border w-[786px] h-[195px] border-[2px] border-solid border-white" />
        <a
          className="[text-decoration:none] absolute top-[2675px] left-[972px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-50@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https//tiktok.com"
          target="_blank"
          onClick={onRectangleLink5Click}
        />
        <b className="absolute top-[2665px] left-[1043px] text-41xl inline-block font-lato w-[471px] h-[92px]">
          See More Posts
        </b>
        <div className="absolute top-[259px] left-[1203px] w-[250px] h-[106px] text-21xl font-questrial">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-600" />
          <div className="absolute top-[30.19%] left-[26%]">Events</div>
        </div>
      </div>
      <img
        className="absolute top-[3483px] left-[-39.7px] w-[1544.7px] h-[1571px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <img
        className="absolute top-[5138px] left-[190px] w-[1436.4px] h-[1299.9px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
    </div>
  );
};

export default Updates;
