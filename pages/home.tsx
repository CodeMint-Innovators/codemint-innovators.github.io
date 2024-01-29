import type { NextPage } from "next";
import { useCallback } from "react";

const Home: NextPage = () => {
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
    const anchor = document.querySelector("[data-scroll-to='aboutUs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(rgba(3,_4,_94,_0.2),_rgba(3,_4,_94,_0.2)),_#1a232e] [backdrop-filter:blur(900px)] h-[7693px] overflow-hidden text-center text-21xl text-white font-lato">
      <div className="absolute top-[-197px] left-[952px] rounded-[50%] bg-mediumslateblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(148px)] w-[213px] h-[242px]" />
      <div className="absolute top-[1837px] left-[1003.1px] rounded-[50%] bg-slateblue [filter:blur(679px)] w-[845.5px] h-[862.2px] [transform:_rotate(-34.4deg)] [transform-origin:0_0]" />
      <div className="absolute top-[3138px] left-[1076px] rounded-[50%] bg-mediumturquoise [filter:blur(879px)] w-[237px] h-[286px]" />
      <div className="absolute top-[2839.9px] left-[840px] rounded-[50%] bg-darkorchid [filter:blur(487px)] w-[415.4px] h-[397.6px] [transform:_rotate(17.56deg)] [transform-origin:0_0]" />
      <div className="absolute top-[2747.7px] left-[961.3px] rounded-[50%] bg-deepskyblue [filter:blur(623px)] w-[478.5px] h-[548px] [transform:_rotate(-19.93deg)] [transform-origin:0_0]" />
      <div className="absolute top-[2094px] left-[169.7px] rounded-[50%] bg-cadetblue [filter:blur(986px)] w-[693.2px] h-[836px] [transform:_rotate(20.28deg)] [transform-origin:0_0]" />
      <div className="absolute top-[3483px] left-[468px] rounded-[50%] bg-slateblue [filter:blur(777px)] w-[753px] h-[1181.3px] [transform:_rotate(25.46deg)] [transform-origin:0_0]" />
      <div className="absolute top-[4515px] left-[1261px] rounded-[50%] bg-mediumturquoise [filter:blur(671.1px)] w-[244px] h-[539px]" />
      <div className="absolute top-[5138px] left-[315px] rounded-[50%] bg-deepskyblue [filter:blur(430px)] w-[227px] h-[529px]" />
      <div className="absolute top-[5709.3px] left-[190px] rounded-[50%] bg-darkviolet [filter:blur(887px)] w-[549.9px] h-[790.3px] [transform:_rotate(-22.78deg)] [transform-origin:0_0]" />
      <div className="absolute top-[5787px] left-[1001.3px] rounded-[50%] bg-turquoise [filter:blur(521px)] w-[265.2px] h-[671px] [transform:_rotate(-38.47deg)] [transform-origin:0_0]" />
      <div className="absolute top-[534px] left-[1279px] rounded-[50%] bg-aquamarine [filter:blur(554px)] w-[321px] h-[472px]" />
      <div className="absolute top-[12px] left-[140px] rounded-[50%] bg-darkviolet [filter:blur(277px)] w-[241px] h-[346px]" />
      <div className="absolute top-[-129.4px] left-[21.6px] rounded-[50%] bg-deepskyblue [filter:blur(410px)] w-[343px] h-[603px] [transform:_rotate(-21.45deg)] [transform-origin:0_0]" />
      <div className="absolute top-[2372px] left-[-174px] rounded-[50%] bg-cornflowerblue [filter:blur(543px)] w-[594px] h-[595px]" />
      <div className="absolute top-[-148px] left-[350px] rounded-[50%] bg-turquoise [filter:blur(447px)] w-[211px] h-[366px]" />
      <div className="absolute top-[808px] left-[-72.9px] bg-cornflowerblue [filter:blur(546px)] w-[626.6px] h-[881.3px] [transform:_rotate(29.96deg)] [transform-origin:0_0]" />
      <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[440px] h-[106px]" />
      <section className="absolute top-[0px] left-[0px] w-[1440px] h-[1098px] bg-[url('/rectangle-8@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <h2 className="m-0 absolute top-[432px] left-[calc(50%_-_388px)] text-56xl font-bold font-kaisei-decol [text-shadow:-5px_0px_4px_rgba(0,_0,_0,_0.5)]">
        CodeMint Innovators
      </h2>
      <section className="absolute top-[531px] left-[calc(50%_-_651px)] text-21xl font-lato text-white text-center flex items-center w-[1302px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <span className="w-full">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            An association committed to informing individuals about our future
            shaped by Technology and Business.
          </p>
          <p className="m-0">&nbsp;</p>
        </span>
      </section>
      <section className="absolute top-[1098px] left-[0px] w-[1440px] h-[996px] bg-[url('/rectangle-9@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <section className="absolute top-[1419px] left-[calc(50%_-_630px)] text-21xl tracking-[0.05em] leading-[60px] font-lato text-white text-center flex items-center justify-center w-[1259px]">
        At CodeMint Innovators, we passionately embrace the limitless
        possibilities that technology unfolds. Our commitment is to cultivate a
        community united by this enthusiasm. As an organization, our mission is
        to lead in the dynamic landscape of technology and business coding AI,
        uniting individuals through an array of exceptional events and
        conferences, paving the way for transformative experiences in the
        ever-evolving world of innovation.
      </section>
      <h2
        className="m-0 absolute top-[1286px] left-[574px] text-46xl font-bold font-kaisei-decol [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.15)]"
        data-scroll-to="aboutUs"
      >
        About Us
      </h2>
      <section className="absolute top-[2094px] left-[0px] w-[1440px] h-[2123px] bg-[url('/rectangle-10@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <h2 className="m-0 absolute top-[2206px] left-[581px] text-46xl font-bold font-kaisei-decol [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.15)]">
        Why Us?
      </h2>
      <textarea
        className="bg-gray-500 [outline:none] absolute top-[2427px] left-[24px] rounded-31xl box-border w-[630px] h-[431px] border-[2px] border-solid border-white"
        autoFocus={true}
        readOnly={true}
      />
      <textarea
        className="bg-gray-500 [outline:none] absolute top-[2957px] left-[24px] rounded-31xl box-border w-[630px] h-[431px] border-[2px] border-solid border-white"
        autoFocus={true}
        readOnly={true}
      />
      <textarea
        className="bg-gray-500 [outline:none] absolute top-[3497px] left-[24px] rounded-31xl box-border w-[630px] h-[431px] border-[2px] border-solid border-white"
        autoFocus={true}
        readOnly={true}
      />
      <textarea
        className="bg-gray-500 [outline:none] absolute top-[3497px] left-[783px] rounded-31xl box-border w-[630px] h-[431px] border-[2px] border-solid border-white"
        autoFocus={true}
        readOnly={true}
      />
      <textarea
        className="bg-gray-500 [outline:none] absolute top-[2957px] left-[783px] rounded-31xl box-border w-[630px] h-[431px] border-[2px] border-solid border-white"
        autoFocus={true}
        readOnly={true}
      />
      <textarea
        className="bg-gray-500 [outline:none] absolute top-[2427px] left-[783px] rounded-31xl box-border w-[630px] h-[431px] border-[2px] border-solid border-white"
        autoFocus={true}
        readOnly={true}
      />
      <section className="absolute top-[4217px] left-[5px] w-[1430px] h-[814px] bg-[url('/rectangle-17@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <h2 className="m-0 absolute top-[4334px] left-[463px] text-46xl font-bold font-kaisei-decol flex items-center justify-center w-[513px] h-16 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.15)]">
        Sponsors
      </h2>
      <div className="absolute top-[4541px] left-[calc(50%_-_340px)]">
        Interested in helping us in our mission?
      </div>
      <div className="absolute top-[4732px] left-[497px] rounded-[68px] bg-gray-500 w-[445px] h-[136px]" />
      <div className="absolute top-[4774px] left-[542px] text-31xl font-questrial">
        Support us here
      </div>
      <section className="absolute top-[5037px] left-[0px] w-[1440px] h-[2508px] bg-[url('/rectangle-19@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <div className="absolute top-[2427px] left-[832px] flex items-center justify-center w-[532px] h-[83px]">
        A group of passionate people
      </div>
      <div className="absolute top-[2963px] left-[783px] flex items-center justify-center w-[630px] h-[82px]">
        Focus on Innovation
      </div>
      <div className="absolute top-[2957px] left-[81px] flex items-center justify-center w-[517px] h-[113px]">
        Unforgettable Lessons and Workshops
      </div>
      <div className="absolute top-[3497px] left-[24px] flex items-center justify-center w-[630px] h-[113px]">
        Unwavering Commitment to Excellence
      </div>
      <div className="absolute top-[2432px] left-[29px] flex items-center justify-center w-[625px] h-[104px]">
        Enthusiastic Embrace of Technology
      </div>
      <div className="absolute top-[3517px] left-[862px]">
        Get Rewarded as you learn
      </div>
      <h2
        className="m-0 absolute top-[5114px] left-[476px] text-46xl font-bold font-kaisei-decol [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.15)]"
        id="Meet The Team"
      >
        Meet The Team
      </h2>
      <b className="absolute top-[5320px] left-[602px] text-31xl">Presidents</b>
      <b className="absolute top-[6070px] left-[233px] text-31xl">
        Chief Tech Officer
      </b>
      <b className="absolute top-[6830px] left-[288px] text-31xl">Design</b>
      <b className="absolute top-[6830px] left-[946px] text-31xl">Developers</b>
      <b className="absolute top-[6070px] left-[744px] text-31xl">
        Chief Marketing Officer
      </b>
      <div className="absolute top-[5496px] left-[288px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[6232px] left-[288px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[7002px] left-[44px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[7002px] left-[402px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[7002px] left-[760px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[7002px] left-[1118px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[5496px] left-[864px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <div className="absolute top-[6232px] left-[864px] rounded-6xl bg-midnightblue-100 w-72 h-[449px]" />
      <section className="absolute top-[7545px] left-[0px] bg-mediumslateblue-200 w-[1440px] h-[148px]" />
      <section className="absolute top-[0px] left-[440px] bg-gainsboro-300 w-[1000px] h-[106px]" />
      <div className="absolute top-[7602px] left-[91px] text-11xl font-questrial text-left inline-block w-[820px] h-[33px]">
        <p className="m-0">
          Made with ❤️ by the CodeMint Innovators Development Team
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <a
        className="[text-decoration:none] absolute top-[7583px] left-[998px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-49@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://www.instagram.com/"
        target="_blank"
        onClick={onRectangleLinkClick}
      />
      <a
        className="[text-decoration:none] absolute top-[7583px] left-[1098px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-31@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://discord.com/"
        target="_blank"
        onClick={onRectangleLink1Click}
      />
      <a
        className="[text-decoration:none] absolute top-[7583px] left-[1198px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-32@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://www.linkedin.com/"
        target="_blank"
        onClick={onRectangleLink2Click}
      />
      <a
        className="[text-decoration:none] absolute top-[7583px] left-[1298px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-50@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://www.tiktok.com/"
        onClick={onRectangleLink3Click}
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[440px] w-[250px] h-[106px]"
        onClick={onAboutHoverClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[37.74%] w-4/5 top-[31.13%] left-[10%] text-21xl font-questrial text-white text-center inline-block"
          autoFocus={true}
        >
          About
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[940px] w-[250px] h-[106px]"
        autoFocus={true}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[37.74%] w-[85.6%] top-[31.13%] left-[7.2%] text-21xl font-questrial text-white text-center inline-block"
          autoFocus={true}
        >
          Updates
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[1190px] w-[250px] h-[106px]"
        autoFocus={true}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[37.74%] w-[57.6%] top-[31.13%] left-[21.2%] text-21xl font-questrial text-white text-center inline-block"
          autoFocus={true}
        >
          Contact
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[690px] w-[250px] h-[106px]"
        autoFocus={true}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-200" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30.19%] left-[26%] text-21xl font-questrial text-white text-center inline-block"
          autoFocus={true}
        >
          Events
        </button>
      </button>
    </div>
  );
};

export default Home;
