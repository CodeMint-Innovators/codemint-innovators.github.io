import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Contact: NextPage = () => {
  const router = useRouter();

  const onAboutHoverClick = useCallback(() => {
    router.push("/home");
  }, [router]);

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

  return (
    <div className="w-full relative [background:linear-gradient(rgba(3,_4,_94,_0.2),_rgba(3,_4,_94,_0.2)),_#1a232e] [backdrop-filter:blur(900px)] h-[3118px] overflow-hidden text-center text-31xl text-white font-lato">
      <div className="absolute top-[-254.8px] left-[-174px] w-[2361.8px] h-[3678.8px] text-21xl font-questrial">
        <div className="absolute top-[0px] left-[174px] w-[1600px] h-[1352.8px] overflow-hidden">
          <div className="absolute top-[254.8px] left-[440px] bg-gainsboro-300 w-[1000px] h-[106px]" />
          <div className="absolute top-[57.8px] left-[952px] rounded-[50%] bg-mediumslateblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(148px)] w-[213px] h-[242px]" />
          <div className="absolute top-[788.8px] left-[1279px] rounded-[50%] bg-aquamarine [filter:blur(554px)] w-[321px] h-[472px]" />
          <div className="absolute top-[266.8px] left-[140px] rounded-[50%] bg-darkviolet [filter:blur(277px)] w-[241px] h-[346px]" />
          <div className="absolute top-[125.4px] left-[21.6px] rounded-[50%] bg-deepskyblue [filter:blur(410px)] w-[343px] h-[603px] [transform:_rotate(-21.45deg)] [transform-origin:0_0]" />
          <div className="absolute top-[106.8px] left-[350px] rounded-[50%] bg-turquoise [filter:blur(447px)] w-[211px] h-[366px]" />
          <img
            className="absolute top-[254.8px] left-[0px] w-[1440px] h-[1098px] object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <div className="absolute top-[254.8px] left-[0px] bg-gray-400 w-[440px] h-[106px]" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[254.8px] left-[439px] w-[250px] h-[106px]"
            autoFocus={true}
            onClick={onAboutHoverClick}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
            <div className="absolute h-[37.74%] w-4/5 top-[31.13%] left-[10%] text-21xl font-questrial text-white text-center inline-block">
              About
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[254.8px] left-[940px] w-[250px] h-[106px]"
            autoFocus={true}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
            <div className="absolute h-[37.74%] w-[85.6%] top-[31.13%] left-[7.2%] text-21xl font-questrial text-white text-center inline-block">
              Updates
            </div>
          </button>
          <div className="absolute top-[254.8px] left-[1190px] w-[250px] h-[106px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-34xl bg-gainsboro-200" />
            <div className="absolute h-[37.74%] w-[57.6%] top-[31.13%] left-[21.2%] inline-block">
              Contact
            </div>
          </div>
        </div>
        <img
          className="absolute top-[1614.1px] left-[0px] w-[2361.8px] h-[2064.7px] overflow-hidden"
          alt=""
          src="/frame.svg"
        />
      </div>
      <img
        className="absolute top-[1721px] left-[0px] w-[1440px] h-[1397px] object-cover"
        alt=""
        src="/rectangle-17@2x.png"
      />
      <b className="absolute top-[259px] left-[596px] text-46xl font-kaisei-decol">
        Contact
      </b>
      <div className="absolute top-[444px] left-[61px] whitespace-pre-wrap inline-block w-[1318px]">
        Need help, have feedback, or need a request? Reach out to the CodeMint
        Innovators team here. The team will reach out to you as soon as
        possible.
      </div>
      <div className="absolute top-[702px] left-[51px] rounded-31xl bg-gainsboro-200 box-border w-[1339px] h-[1812px] border-[2px] border-solid border-white" />
      <b className="absolute top-[819px] left-[123px]">Name:</b>
      <b className="absolute top-[1155px] left-[123px]">Email:</b>
      <b className="absolute top-[1491px] left-[123px]">Subject</b>
      <b className="absolute top-[1827px] left-[124px]">Message</b>
      <input
        className="[outline:none] bg-gray-200 absolute top-[924px] left-[123px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[528px] h-[125px] border-[2px] border-solid border-white"
        type="text"
      />
      <input
        className="[outline:none] bg-gray-200 absolute top-[1260px] left-[123px] rounded-xl box-border w-[528px] h-[125px] border-[2px] border-solid border-white"
        type="text"
      />
      <input
        className="[outline:none] bg-gray-200 absolute top-[1596px] left-[124px] rounded-xl box-border w-[1192px] h-[125px] border-[2px] border-solid border-white"
        type="text"
      />
      <input
        className="[outline:none] bg-gray-200 absolute top-[1932px] left-[124px] rounded-xl box-border w-[1192px] h-[302px] border-[2px] border-solid border-white"
        type="text"
      />
      <img
        className="absolute top-[2285px] left-[441px] rounded-105xl w-[558px] h-[173px]"
        alt=""
        src="/rectangle-46.svg"
      />
      <b className="absolute top-[2342px] left-[665px]">Send</b>
      <div className="absolute top-[2709px] left-[521px] rounded-6xl bg-gainsboro-100 box-border w-[398px] h-[162px] border-[3px] border-solid border-mediumslateblue-100" />
      <b className="absolute top-[2576px] left-[375px] text-gray-300">
        Other Ways you can contact us
      </b>
      <div className="absolute top-[2967px] left-[0px] bg-mediumslateblue-200 w-[1440px] h-[148px]" />
      <div className="absolute top-[3024px] left-[81px] text-11xl font-questrial text-left inline-block w-[820px] h-[33px]">
        <p className="m-0">
          Made with ❤️ by the CodeMint Innovators Development Team
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <a
        className="[text-decoration:none] absolute top-[3005px] left-[988px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-49@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https//instagram.com"
        target="_blank"
        onClick={onRectangleLinkClick}
      />
      <a
        className="[text-decoration:none] absolute top-[3005px] left-[1088px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-31@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://www.discord.com"
        target="_blank"
        onClick={onRectangleLink1Click}
      />
      <a
        className="[text-decoration:none] absolute top-[3005px] left-[1188px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-32@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://www.linkedin.com/"
        target="_blank"
        onClick={onRectangleLink2Click}
      />
      <a
        className="[text-decoration:none] absolute top-[3005px] left-[1288px] rounded-xl w-[71px] h-[71px] bg-[url('/rectangle-50@3x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
        href="https://www.tiktok.com/"
        target="_blank"
        onClick={onRectangleLink3Click}
      />
      <a
        className="[text-decoration:none] absolute top-[2745px] left-[556px] w-12 h-[89px] bg-[url('/rectangle-57@3x.png')] bg-cover bg-no-repeat bg-[top]"
        href="mailto:rishu108m@gmail.com"
      />
      <a
        className="[text-decoration:none] absolute top-[2764px] left-[639px] w-[41px] h-[51px] bg-[url('/rectangle-58@3x.png')] bg-cover bg-no-repeat bg-[top]"
        href="https://www.instagram.com/"
        target="_blank"
      />
      <a
        className="[text-decoration:none] absolute top-[2764px] left-[715px] w-[33px] h-[51px] bg-[url('/rectangle-59@3x.png')] bg-cover bg-no-repeat bg-[top]"
        href="https://www.linkedin.com/"
        target="_blank"
      />
      <img
        className="absolute top-[2745px] left-[783px] w-[46px] h-[89px] object-cover"
        alt=""
        src="/rectangle-60@2x.png"
      />
      <img
        className="absolute top-[2764px] left-[864px] w-5 h-[51px] object-cover"
        alt=""
        src="/rectangle-61@2x.png"
      />
      <img
        className="absolute top-[1098px] left-[0px] w-[1440px] h-[623px] object-cover"
        alt=""
        src="/rectangle-19@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[689px] w-[250px] h-[106px]"
        autoFocus={true}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-600" />
        <div className="absolute top-[30.19%] left-[26%] text-21xl font-questrial text-white text-center">
          Events
        </div>
      </button>
    </div>
  );
};

export default Contact;
