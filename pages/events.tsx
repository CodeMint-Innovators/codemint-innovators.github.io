import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Events: NextPage = () => {
  const router = useRouter();

  const onRectangleLinkClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onRectangleLink1Click = useCallback(() => {
    window.open("https://discord.gg/hzT893bbQN");
  }, []);

  const onRectangleLink2Click = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  const onRectangleLink3Click = useCallback(() => {
    window.open("https://www.tiktok.com/en/");
  }, []);

  const onAboutHoverClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(rgba(3,_4,_94,_0.2),_rgba(3,_4,_94,_0.2)),_#1a232e] [backdrop-filter:blur(900px)] h-[3773px] overflow-hidden text-center text-56xl text-white font-lato">
      <div className="absolute top-[-254.8px] left-[-513px] w-[2113px] h-[5308.8px] overflow-hidden">
        <div className="absolute top-[3002.5px] left-[1474.3px] rounded-[50%] bg-deepskyblue [filter:blur(623px)] w-[478.5px] h-[548px] [transform:_rotate(-19.93deg)] [transform-origin:0_0]" />
        <div className="absolute top-[3737.8px] left-[981px] rounded-[50%] bg-slateblue [filter:blur(777px)] w-[753px] h-[1181.3px] [transform:_rotate(25.46deg)] [transform-origin:0_0]" />
        <div className="absolute top-[4769.8px] left-[1774px] rounded-[50%] bg-mediumturquoise [filter:blur(671.1px)] w-[244px] h-[539px]" />
        <div className="absolute top-[254.8px] left-[953px] bg-gainsboro-300 w-[1000px] h-[106px]" />
        <div className="absolute top-[788.8px] left-[1792px] rounded-[50%] bg-aquamarine [filter:blur(554px)] w-[321px] h-[472px]" />
        <div className="absolute top-[266.8px] left-[653px] rounded-[50%] bg-darkviolet [filter:blur(277px)] w-[241px] h-[346px]" />
        <div className="absolute top-[125.4px] left-[534.6px] rounded-[50%] bg-deepskyblue [filter:blur(410px)] w-[343px] h-[603px] [transform:_rotate(-21.45deg)] [transform-origin:0_0]" />
        <div className="absolute top-[2626.8px] left-[339px] rounded-[50%] bg-cornflowerblue [filter:blur(543px)] w-[594px] h-[595px]" />
        <div className="absolute top-[106.8px] left-[863px] rounded-[50%] bg-turquoise [filter:blur(447px)] w-[211px] h-[366px]" />
        <div className="absolute top-[1062.8px] left-[440.1px] bg-cornflowerblue [filter:blur(546px)] w-[626.6px] h-[881.3px] [transform:_rotate(29.96deg)] [transform-origin:0_0]" />
        <div className="absolute top-[57.8px] left-[1465px] rounded-[50%] bg-mediumslateblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(148px)] w-[213px] h-[242px]" />
        <img
          className="absolute top-[254.8px] left-[513px] w-[1440px] h-[1098px] object-cover"
          alt=""
          src="/rectangle-8@3x.png"
        />
        <div className="absolute top-[1063.8px] left-[1595px] text-21xl">
          Minutes
        </div>
        <div className="absolute top-[1063.8px] left-[1260px] text-21xl">
          Hours
        </div>
        <div className="absolute top-[1063.8px] left-[838px] text-21xl">
          Days
        </div>
        <b className="absolute top-[495.8px] left-[1098px] font-kaisei-decol [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.15)]">
          Events
        </b>
        <div className="absolute top-[676.8px] left-[998px] text-31xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.15)]">
          Time until next event
        </div>
        <div className="absolute top-[3879.8px] left-[513px] bg-mediumslateblue-200 w-[1440px] h-[148px]" />
        <div className="absolute top-[3936.8px] left-[594px] text-11xl font-questrial text-left inline-block w-[820px] h-[33px]">
          <p className="m-0">
            Made with ❤️ by the CodeMint Innovators Development Team
          </p>
          <p className="m-0">&nbsp;</p>
        </div>
        <a
          className="[text-decoration:none] absolute top-[3917.8px] left-[1501px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-49@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https//instagram.com"
          target="_blank"
          onClick={onRectangleLinkClick}
        />
        <a
          className="[text-decoration:none] absolute top-[3917.8px] left-[1601px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-31@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https//discord.com"
          target="_blank"
          onClick={onRectangleLink1Click}
        />
        <a
          className="[text-decoration:none] absolute top-[3917.8px] left-[1701px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-32@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https//linkdein.com"
          target="_blank"
          onClick={onRectangleLink2Click}
        />
        <a
          className="[text-decoration:none] absolute top-[3917.8px] left-[1801px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-50@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
          href="https://tiktok.com"
          target="_blank"
          onClick={onRectangleLink3Click}
        />
        <div className="absolute top-[254.8px] left-[513px] bg-gray-400 w-[440px] h-[106px]" />
        <a
          className="[text-decoration:none] absolute top-[254.8px] left-[953px] w-[250px] h-[106px] cursor-pointer text-21xl text-[inherit] font-questrial"
          target="_blank"
          href="/home"
          onClick={onAboutHoverClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
          <a
            className="[text-decoration:none] absolute h-[37.74%] w-4/5 top-[31.13%] left-[10%] text-[inherit] inline-block"
            target="_blank"
            href="/home"
          >
            About
          </a>
        </a>
        <a
          className="[text-decoration:none] absolute top-[254.8px] left-[1453px] w-[250px] h-[106px] text-21xl text-[inherit] font-questrial"
          target="_blank"
          href="/"
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
          <a
            className="[text-decoration:none] absolute h-[37.74%] w-[85.6%] top-[31.13%] left-[7.2%] text-[inherit] inline-block"
            target="_blank"
            href="/"
          >
            Updates
          </a>
        </a>
        <div className="absolute top-[796.8px] left-[981px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[1019px]">0</div>
        <div className="absolute top-[796.8px] left-[1173px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[1211px]">0</div>
        <div className="absolute top-[796.8px] left-[1333px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[1371px]">0</div>
        <div className="absolute top-[796.8px] left-[1525px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[1563px]">0</div>
        <div className="absolute top-[796.8px] left-[1685px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[1723px]">0</div>
        <div className="absolute top-[796.8px] left-[821px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[859px]">0</div>
        <div className="absolute top-[796.8px] left-[661px] bg-gainsboro-300 w-[120px] h-[177px]" />
        <div className="absolute top-[840.8px] left-[699px]">0</div>
        <a
          className="[text-decoration:none] absolute top-[254.8px] left-[1703px] w-[250px] h-[106px] text-21xl text-[inherit] font-questrial"
          target="_blank"
          href="/contact"
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
          <a
            className="[text-decoration:none] absolute h-[37.74%] w-[57.6%] top-[31.13%] left-[21.2%] text-[inherit] inline-block"
            target="_blank"
            href="/contact"
          >
            Contact
          </a>
        </a>
        <img
          className="absolute top-[1353.8px] left-[513px] w-[1440px] h-[1203px] object-cover"
          alt=""
          src="/rectangle-44@2x.png"
        />
        <b className="absolute top-[1509.8px] left-[851px] text-46xl flex font-kaisei-decol items-center justify-center w-[764px] h-[125px]">
          Our Events
        </b>
        <div className="absolute top-[1758.8px] left-[638px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1758.8px] left-[843px] rounded-3xl bg-gainsboro-300 w-[370px] h-[563px]" />
        <div className="absolute top-[1758.8px] left-[1248px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1758.8px] left-[1453px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <div className="absolute top-[1758.8px] left-[1658px] rounded-3xl bg-gainsboro-300 w-[170px] h-[563px]" />
        <img
          className="absolute top-[2556.8px] left-[513px] w-[1440px] h-[1471px] object-cover"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <input
          className="[border:none] [outline:none] flex font-kaisei-decol text-46xl bg-[transparent] absolute top-[2714.8px] left-[851px] font-bold text-white text-center items-center justify-center w-[764px] h-[125px]"
          placeholder="Stay Tuned"
          type="text"
        />
        <b className="absolute top-[2997.8px] left-[581px] text-31xl flex items-center justify-center w-[1333px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Add your email below to get notified for when our latest events will
          occur.
        </b>
        <input
          className="[border:none] [outline:none] flex font-lato text-31xl bg-[transparent] absolute top-[3258.8px] left-[581px] font-bold text-white text-center items-center justify-center w-[468px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          placeholder="example@gmail.com"
          type="text"
        />
        <img
          className="absolute top-[3228.8px] left-[564px] rounded-6xl w-[1337px] h-[119px]"
          alt=""
          src="/rectangle-45.svg"
        />
        <a
          className="[text-decoration:none] absolute top-[3489.8px] left-[886px] rounded-105xl bg-gray-500 w-[693px] h-[248px]"
          target="_blank"
          href="/contact"
        />
        <a
          className="[text-decoration:none] absolute top-[3565.8px] left-[1060px] text-[80px] font-bold text-[inherit]"
          target="_blank"
          href="/contact"
        >
          Subscribe
        </a>
        <a className="[text-decoration:none] absolute top-[254.8px] left-[1203px] w-[250px] h-[106px] text-21xl text-[inherit] font-questrial">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-600" />
          <div className="absolute top-[30.19%] left-[26%]">Events</div>
        </a>
      </div>
      <img
        className="absolute top-[5138px] left-[190px] w-[1436.4px] h-[1299.9px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
    </div>
  );
};

export default Events;
