import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

const CirclesSectionStyles = styled.section`
  width: 100%;
  padding: 100px;
  background: var(--offwhite);
  display: flex;
  gap: 30px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  @media screen and (min-height: 800px) {
    min-height: 80vh;
  }
  .circle-1 {
    width: 600px;
    height: 600px;
    position: absolute;
    top: -250px;
    left: -250px;
    @media screen and (max-width: 768px) {
      width: 400px;
      height: 400px;
      top: -175px;
      left: -175px;
    }
  }
  .circle-2 {
    width: 600px;
    height: 600px;
    position: absolute;
    bottom: -250px;
    right: -250px;
    @media screen and (max-width: 768px) {
      width: 400px;
      height: 400px;
      bottom: -175px;
      right: -175px;
    }
    @media screen and (max-width: 500px) {
      width: 400px;
      height: 400px;
      bottom: -225px;
      right: -175px;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
  .image {
    flex: 1;
    @media screen and (max-width: 768px) {
      height: 400px;
    }
    @media screen and (max-width: 500px) {
      height: 300px;
    }
    .gatsby-image-wrapper {
      min-width: 100%;
      min-height: 100%;
    }
  }
  .copy {
    flex: 1;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 768px) {
      align-self: center;
      @media screen and (max-width: 768px) {
        margin: 100px 0 50px 0;
      }
    }
    .copy-inner {
      align-self: center;
      max-width: 400px;
      position: relative;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 3rem;
      }
      p, ul {
        margin-top: 30px;
      }
      .client-svg {
        position: absolute;
        left: -2%;
        top: -4%;
      }
    }
  }
`

const CirclesSection = ({ input }) => {
  return (
    <CirclesSectionStyles>
      <motion.svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 324.505 324.506"
        className="circle-1"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [-30, -20, -10, 0, 10, 20, 30],
          y: [30, 20, 10, 0, -10, -20, -30],
          transition: { yoyo: Infinity, duration: 3, ease: "linear" },
        }}
      >
        <g>
          <path
            fill="var(--green)"
            d="M162.252,324.506C72.786,324.506,0,251.72,0,162.253S72.786,0,162.252,0
		c89.467,0,162.253,72.786,162.253,162.253S251.719,324.506,162.252,324.506z M162.252,63C107.524,63,63,107.524,63,162.253
		s44.524,99.253,99.252,99.253c54.729,0,99.253-44.524,99.253-99.253S216.981,63,162.252,63z"
          />
        </g>
      </motion.svg>
      <div className="copy">
        <div className="copy-inner">
          <svg
            className="client-svg"
            width="156.919"
            height="63.506"
            viewBox="0 0 156.919 63.506"
          >
            <path
              id="Path_147"
              data-name="Path 147"
              d="M1600.79,956.135c.035-.961.68-1.313,1.547-.86a2.214,2.214,0,0,0,.512.091c.421.1.837.222,1.26.3a2.182,2.182,0,0,0,.7.005c.753-.109,1.332.391,2.009.542a1.179,1.179,0,0,0,.557.069,2.315,2.315,0,0,1,1.468.171,4.827,4.827,0,0,0,1.153.089,2.693,2.693,0,0,1,.423.018,1.08,1.08,0,0,1,.282.16c-.087.046-.172.1-.262.136s-.187.071-.28.107c.071.094.124.22.218.276a.914.914,0,0,0,.434.139q.955.01,1.909-.024c.125,0,.346-.078.356-.144.062-.423.366-.332.639-.36a5.166,5.166,0,0,0,.594-.151c.087-.02.209-.042.262,0,.07.057.089.177.13.27a1.577,1.577,0,0,1-.29.082c-.264.025-.53.029-.794.054-.059.006-.111.067-.167.1.055.054.109.156.165.157.406.008.812,0,1.219-.008.239-.584.826-.425,1.263-.585a4.548,4.548,0,0,1,.773-.232c.321-.055.615-.057.78.354.044.112.418.109.643.126a2.977,2.977,0,0,1,.681.007c.459.159.772-.13,1.134-.28a1.628,1.628,0,0,1,.5-.188c.53-.025,1.061-.014,1.591-.01a1.572,1.572,0,0,1,1.113.29c.573.462,1.2.066,1.8-.093.071-.019.177-.07.21-.042.35.3.655.1,1.016,0a2.546,2.546,0,0,1,1.215,0c.549.13,1.062.323,1.562-.111a.51.51,0,0,1,.305-.064q1.114,0,2.228.011c.122,0,.29-.008.358.064.3.314.541.2.8-.047a.4.4,0,0,1,.234-.1c.731-.046,1.462-.109,2.193-.113a12.379,12.379,0,0,1,1.342.143,4.657,4.657,0,0,0,.474.014.144.144,0,0,0,.093-.042c.316-.317.668.419.992-.043.24-.343.632-.287.977-.262a10.278,10.278,0,0,0,1.134.166,6.775,6.775,0,0,0,1.268-.265c.276-.069.54-.2.817-.243.608-.09,1.22-.151,1.832-.193a.521.521,0,0,1,.384.192c.044.058-.059.235-.106.354s-.1.205-.148.307c.084.017.182.07.249.043.117-.046.277-.119.312-.218.288-.809.4-.765,1.221-.956a17.374,17.374,0,0,1,3.284-.319c.477-.02.965-.047,1.264.446a.911.911,0,0,1,.135.222.464.464,0,0,0,.773.3c.245-.178.41-.221.642-.008.073.067.283.109.333.061.437-.423.98-.169,1.465-.263.315-.061.613-.2.926-.281s.614-.105.919-.167c.49-.1.977-.216,1.467-.311.428-.082.858-.149,1.288-.217.546-.086,1.139-.066,1.351-.77.028-.092.3-.164.448-.157a.755.755,0,0,0,.688-.289c.3-.37.737-.248,1.134-.206a.371.371,0,0,1,0,.239c-.285.42-.791.3-1.186.465-.076.031-.187-.021-.26.013a.868.868,0,0,0-.306.229c-.028.033.043.216.076.217a1.072,1.072,0,0,0,.39-.055c.143-.048.271-.176.411-.188,1.034-.09,2.07-.148,3.1-.24a3.911,3.911,0,0,0,2.024-.719.55.55,0,0,0,.086-.1c-.046-.019-.093-.056-.137-.054a13.635,13.635,0,0,0-1.76.107c-.53.094-1.03.343-1.555.478-.091.023-.283-.165-.347-.3-.033-.068.093-.3.181-.326.816-.2,1.641-.373,2.461-.564a3.543,3.543,0,0,1,1.035-.261,1.924,1.924,0,0,0,1.2-.187c.1-.056.27.012.408.023-.048.1-.1.2-.143.306-.1.205-.2.408-.283.619-.034.086-.064.216-.023.276a.292.292,0,0,0,.263.086c.582-.178,1.153-.394,1.738-.558a3.815,3.815,0,0,1,.786-.066,1.827,1.827,0,0,0,.576-.042.694.694,0,0,0,.361-.392c.025-.087-.176-.243-.279-.365-.021-.025-.064-.033-.088-.057-.092-.091-.182-.184-.272-.277a2.116,2.116,0,0,1,.373-.135,11.672,11.672,0,0,0,2.619-.489c.8-.347,1.724-.076,2.427-.655.024-.019.069-.012.1-.019,1.066-.242,2.13-.489,3.2-.724.905-.2,1.817-.373,2.719-.584.469-.109.921-.288,1.387-.41a2.97,2.97,0,0,1,.73-.091c.142,0,.607-.078.141.276-.019.014.037.2.08.209a1.313,1.313,0,0,0,.474.025c.241-.041.468-.215.724-.009.027.021.212-.114.29-.205.109-.129.171-.3.284-.425a2.379,2.379,0,0,1,.362-.281,1.642,1.642,0,0,0-.005.423c.015.065.185.165.221.144a5.99,5.99,0,0,0,.547-.4c.234-.178.463-.363.7-.532.264-.184.484-.23.7.114.075.117.379.127.574.115a2.123,2.123,0,0,0,.547-.178c.853-.3,1.7-.611,2.559-.907.164-.056.35-.048.516-.1.051-.017.1-.2.093-.21-.4-.228-.131-.215.083-.291a3.906,3.906,0,0,0,.912-.435c.473-.324.7-.289,1.159.055a2.458,2.458,0,0,0,.958.3c.062.013.162-.156.244-.241a1.388,1.388,0,0,0-.27-.177c-.169-.061-.347-.094-.521-.139.182-.2.331-.493.553-.567a9.958,9.958,0,0,1,1.43-.266c.1-.017.2-.053.3-.068a2.47,2.47,0,0,1,.275-.01,2.068,2.068,0,0,1-.149.293c-.034.048-.11.066-.167.1.072.034.152.109.215.1.307-.059.61-.141.912-.225.009,0,0-.168-.027-.177-.425-.142-.2-.3.006-.4.232-.111.555-.1.728-.254a4.826,4.826,0,0,1,2.244-.879,17.087,17.087,0,0,0,1.975-.816c.365-.148.742-.266,1.112-.4a4.237,4.237,0,0,0,.8-.317c.857-.536,1.861-.727,2.745-1.2.227-.12.467-.435.76-.074.011.014.144-.06.211-.107.309-.219.608-.453.926-.659a3.749,3.749,0,0,1,.469-.187c.177-.083.347-.183.518-.28.027-.016.035-.07.062-.081.467-.2.934-.395,1.4-.582a1.908,1.908,0,0,0,.957-.562,2.343,2.343,0,0,1,.736-.55,10.8,10.8,0,0,0,2.646-1.849c.434-.465,1.142-.766,1.213-1.545.011-.12.209-.215.3-.334a8.162,8.162,0,0,0,.954-1.841,4.829,4.829,0,0,0,.29-2.074c0-.053-.02-.124.007-.157.421-.518.094-1.051-.038-1.534a3.431,3.431,0,0,0-.692-1.129c-.268-.338-.623-.605-.91-.929s-.492-.7-.791-.995c-.513-.511-1.073-.975-1.611-1.464a1.622,1.622,0,0,1-.183-1.56c.441-.635.53-.647,1.172-.154.15.115.291.291.457.322a.8.8,0,0,0,.551-.137.664.664,0,0,1,.891-.02c.338.318.683.633.99.98.335.381.636.793.938,1.2a.753.753,0,0,1,.165.379.7.7,0,0,0,.49.673,3.393,3.393,0,0,1,.621.48c.2.154.3.289.042.5-.149.122.1.929.292.955.071.01.24-.155.237-.234-.026-.552-.1-1.1-.125-1.653,0-.084.183-.265.217-.25a4.72,4.72,0,0,1,.959.494.384.384,0,0,1,.032.56,1.516,1.516,0,0,0-.181.689c-.032.3.115.445.436.457a1.075,1.075,0,0,1,1.1.64.678.678,0,0,0,.416.291.353.353,0,0,1,.249.533.55.55,0,0,1-.5.2,7.66,7.66,0,0,1-.961-.53,2.773,2.773,0,0,0-.361-.142,1.026,1.026,0,0,0,0,.361c.2.508.4,1.014.633,1.505.053.11.244.154.371.229-.039-.125-.132-.264-.1-.37a1.039,1.039,0,0,1,.288-.579.75.75,0,0,1,.625-.022.956.956,0,0,1,.422,1.191,7.381,7.381,0,0,0-.316,1.268,4.639,4.639,0,0,0,.168,1.135c.005.025.129.064.147.046.409-.415.312.039.339.207a3.322,3.322,0,0,1-.006.476c0,.314-.058.5-.453.556-.6.079-.781.525-.507,1.18.07.165.193.265-.079.319a.289.289,0,0,0-.11.088c.406.539-.259.8-.355,1.2a2.955,2.955,0,0,1-.785,1.112.45.45,0,0,1-.663,0c-.109-.087-.419-.117-.463-.053-.14.2-.018.343.223.409a.364.364,0,0,1,.2.25.277.277,0,0,1-.167.217c-.8.093-1.074.735-1.4,1.322a.663.663,0,0,1-.221.279c-.372.184-.709.384-.761.849-.624.119-.725.781-1.153,1.106a21.545,21.545,0,0,1-1.827,1.372,1.266,1.266,0,0,1-.974-.051.42.42,0,0,0-.471.022,2.668,2.668,0,0,0-1.125,1.1c-.192.344-.232.765-.806.588-.046-.014-.683.011-.508.522.007.021-.03.082-.044.081-.447-.025-.667.3-.934.571-.049.05-.226-.025-.344-.042.048-.092.073-.212.148-.27.193-.15.41-.267.611-.407a.943.943,0,0,0,.154-.177c-.057-.036-.113-.1-.17-.1-.6-.007-1.2-.007-1.8,0a.351.351,0,0,0-.192.126c.27.588-.25.3-.418.36-.327.114-.676.165-1,.283-.109.039-.171.206-.255.316.1.051.193.1.293.151.062.029.128.049.193.073a2.12,2.12,0,0,0-.17.157,1.313,1.313,0,0,1-1.185.529c.257-.495.226-.4-.268-.562-.616-.2-.815.09-.994.547a1.833,1.833,0,0,1-.46-.084.994.994,0,0,0-1.281.225c-.192.211-.39.418-.563.645-.036.048,0,.193.054.255a.262.262,0,0,0,.233.047,4.443,4.443,0,0,0,.663-.294c.454-.258.9-.535,1.345-.8l1.284.014c-.2.558-.7.625-1.173.721a2.545,2.545,0,0,0-.519.088c-.111.049-.177.2-.263.305.1.048.2.1.306.145.076.034.156.059.235.088-.065.043-.13.085-.194.129a9.712,9.712,0,0,1-1.907.706,1.247,1.247,0,0,1-1.489-.9c-.063-.323-.676-.443-1.006-.218-.237.16-.506.271-.751.419-.093.057-.238.177-.223.233.028.109.156.277.237.273.26-.011.565.306.8-.084a2.255,2.255,0,0,1,.5.171,1.222,1.222,0,0,1-.231.224,2.21,2.21,0,0,1-.544.234c-.3.071-.617.093-.923.152-.224.042-.8-.323-.8-.543a.463.463,0,0,1,.322-.059c.3.153.4.028.406-.243,0-.2-.048-.239-.327-.266a.924.924,0,0,0-1,.529c-.131.2-.526.209-.779.347a7.467,7.467,0,0,1-2.366.86,6.029,6.029,0,0,0-1.6.377c-.155.071-.381-.029-.573-.015a6.571,6.571,0,0,0-1.008.133c-.038.009-.6.193-.1.48.066.037-.009.3,0,.465.005.138.031.275.047.412a1.3,1.3,0,0,0,.309-.208,1.241,1.241,0,0,1,1.286-.509,2.717,2.717,0,0,0,.477,0,.485.485,0,0,0,.567-.423.471.471,0,0,1,.356-.283c.112,0,.227.2.329.313.03.035.014.105.034.154.067.163.141.324.212.486a7.087,7.087,0,0,1-.887.266c-.137.023-.3-.136-.445-.126a1.9,1.9,0,0,0-.511.182,3.634,3.634,0,0,1,.216.317c.017.031-.013.131-.037.137-.339.085-.681.15-1.019.238-.483.124-.957.286-1.444.389-.7.148-1.407.266-2.114.375-.108.016-.235-.089-.353-.137.126-.087.322-.278.365-.247.591.409.9-.106,1.291-.362a.931.931,0,0,0,.113-.1c-.053-.036-.108-.1-.16-.1a3.236,3.236,0,0,0-1.955.42.651.651,0,0,1-.392.062c-.041,0-.125-.17-.1-.2a1.074,1.074,0,0,1,.284-.261,1.831,1.831,0,0,1,.31-.132c-.108-.033-.219-.061-.324-.1-.173-.065-.341-.142-.514-.205a.756.756,0,0,0-.336-.093,4.786,4.786,0,0,0-1.36.394,3.535,3.535,0,0,1-1.8.325c-.319-.013-.636-.053-.8.35-.036.092-.272.143-.417.145a2.407,2.407,0,0,0-1.418.467,2.728,2.728,0,0,1-.836.3c-.733.209-1.469.413-2.207.6-.254.065-.647.414-.641-.25,0-.039-.171-.116-.261-.115-.36.005-.748-.1-1.041.235-.047.055-.162.063-.248.071-.28.028-.672-.068-.441.463.016.037-.181.226-.3.254a10.8,10.8,0,0,0-2.225.532,3.465,3.465,0,0,1-1.625.22,3.927,3.927,0,0,0-1.889.467.8.8,0,0,1-.461.082,4.162,4.162,0,0,0-1.743.316c-.116.034-.332.041-.371-.022-.283-.453-.686-.254-1.051-.216-.312.033-.62.138-.931.151a.605.605,0,0,0-.648.424c-.031.092-.142.247-.169.238-.447-.152-.72.34-1.14.3a.67.67,0,0,0-.378.143,2.854,2.854,0,0,1-1.677.364.806.806,0,0,1-.237-.087c.036-.093.047-.235.114-.271.273-.147.566-.256.848-.388a1.676,1.676,0,0,0,.375-.226c.019-.015-.065-.231-.12-.24-.166-.027-.406-.066-.5.022a1.325,1.325,0,0,1-1.064.485c-.08-.006-.221.2-.257.322-.119.417-.306.667-.8.509-.119-.038-.272.048-.409.041-.392-.02-.781.173-1.162-.246-.176-.193-.737-.1-1.1-.036-.268.05-.326.33-.238.612.017.054-.1.213-.164.219a1.157,1.157,0,0,1-1.161-.325c-.255-.322-.619-.172-.934-.09-.089.024-.14.189-.209.289a3.275,3.275,0,0,0,.311.127c.158.047.32.08.48.12-.162.038-.324.074-.485.115-.134.034-.268.068-.4.109a5.162,5.162,0,0,1-.627.206c-.411.075-.826.129-1.242.165a1.4,1.4,0,0,1-.5-.076.3.3,0,0,1-.03-.229,1.257,1.257,0,0,1,.456-.187c.226-.029.459,0,.689-.005.059,0,.118-.056.177-.086-.044-.048-.08-.119-.133-.136a.952.952,0,0,0-.346-.056c-.334.023-.668.059-1,.1a1.064,1.064,0,0,0-.451.109c-.241.165-.438.334-.746.1-.076-.057-.281.059-.426.1a1.6,1.6,0,0,1,.28.247.486.486,0,0,1,.1.313c-.006.05-.207.14-.246.111-.378-.28-.66.077-.987.121a2.3,2.3,0,0,1-.461-.03c.087-.118.176-.234.258-.355a1.378,1.378,0,0,0,.087-.171c-.253-.105-.5-.223-.761-.307-.081-.026-.193.042-.289.067.046.083.09.167.137.25.089.156.181.311.271.466a2.523,2.523,0,0,1-.55.208,7.637,7.637,0,0,0-2.121.288,7.306,7.306,0,0,1-2.366.253.447.447,0,0,1-.566-.416c.006-.347-.153-.311-.344-.238-.349.136-.837.07-.917.632-.012.083-.3.222-.392.18-.379-.18-.713,0-1.069.041a6.17,6.17,0,0,1-.954.007c-.215-.007-.266-.078-.081-.241.031-.027-.017-.216-.037-.217a4.724,4.724,0,0,0-.685-.008c-.038,0-.108.129-.1.182a1.216,1.216,0,0,0,.151.285,1.435,1.435,0,0,1-.54.142c-.339-.057-.663-.2-1-.29-.273-.07-.556-.144-.741.2a.4.4,0,0,1-.3.15c-.542.014-1.116.216-1.583-.289-.063-.068-.378.025-.521.124-.176.121-.271.44-.439.473a6.183,6.183,0,0,1-1.711.154c-.321-.029-.8-.022-.941-.53-.02-.07-.256-.131-.383-.115-.541.063-1.079.154-1.616.241a.362.362,0,0,0-.176.106c-.3.3-.481.279-.812-.015a1.061,1.061,0,0,0-.625-.3c-.5,0-1,.106-1.5.141-.564.038-1.132.027-1.7.072a4.828,4.828,0,0,0-.67.19.632.632,0,0,1-.4.02,1.487,1.487,0,0,0-1.516-.018,1.727,1.727,0,0,1-1.269-.018,2.141,2.141,0,0,0-1.841-.008.845.845,0,0,1-.631-.034c-.493-.244-.662-.206-.823.292-.082.252-.665.411-.846.216-.031-.034.034-.165.066-.246.089-.229.053-.4-.226-.4-.306,0-.661-.175-.83.329-.038.115-.568.143-.843.082-.4-.087-.757-.384-1.151-.428-1.047-.116-2.1-.165-3.158-.188-.2,0-.4.324-.6.328-.183,0-.354-.3-.557-.345a17.826,17.826,0,0,0-3.725-.209c-.212,0-.462-.2-.63-.136-.353.132-.715-.39-1.038.049-.038.052-.211.054-.292.016a7.954,7.954,0,0,0-3.6-.681c-.471.011-.707-.323-1.062-.472-.015-.006.063-.37.114-.373.259-.021.615-.08.767.06.429.4.98.074,1.413.326.025.014.133-.048.147-.092s0-.169-.038-.189a1.318,1.318,0,0,0-.341-.1c-.344-.069-.687-.137-1.033-.2-.487-.086-.978-.154-1.462-.253a3.849,3.849,0,0,1-.658-.222c-.2-.082-.383-.123-.459.15-.1.36-.293.282-.508.115-.109-.085-.208-.229-.327-.248a1.7,1.7,0,0,0-.627.04c-.07.015-.111.165-.165.254.088.041.176.085.266.121s.164.057.246.085a1.74,1.74,0,0,0-.227.172c-.325.346-.614.3-1.012.053a6.95,6.95,0,0,0-1.1-.3c-.17-.068-.275-.3-.408-.458-.08-.1-.146-.266-.236-.279-.587-.087-1.18-.132-1.768-.211a1.868,1.868,0,0,1-.421-.172,2.072,2.072,0,0,0-.377-.143,11,11,0,0,1-1.334-.261c-.142-.047-.661-.109-.288-.556.151-.182-.2-.637-.54-.673a6.231,6.231,0,0,1-1.706-.565,2.209,2.209,0,0,0-1.746-.27.54.54,0,0,1-.34-.066c-.4-.164-.78-.366-1.186-.5a1.456,1.456,0,0,0-.557.051c.232.134-.23.609.349.63.261.009.512.317.766.491.329.227,1,.132.8.855.129.032.261.054.387.1a2.836,2.836,0,0,1,.585.235.319.319,0,0,1,.046.311c-.072.093-.272.2-.334.166-.417-.249-1.025.017-1.347-.569-.112-.2-.57-.206-.857-.331s-.574-.294-.863-.44a4.7,4.7,0,0,0-.568-.272,9.725,9.725,0,0,1-2.92-1.718.991.991,0,0,0-.122-.092c-.685-.4-1.385-.771-2.049-1.2a10.446,10.446,0,0,1-.979-.838c-.233-.194-.484-.366-.715-.56-.549-.459-1.1-.911-1.63-1.394a6.5,6.5,0,0,1-.683-.813c-.024-.031.026-.173.048-.175.115-.008.272-.031.341.031.317.289.6.613.913.907a1.781,1.781,0,0,0,.39.216c-.045-.164-.043-.368-.143-.483-.261-.3-.6-.533-.849-.838-.416-.5-.783-1.041-1.182-1.557a9.075,9.075,0,0,1-.648-.785c-.255-.427-.42-.909-.681-1.331-.188-.3-.491-.531-.7-.821-.327-.445-.622-.913-.926-1.375a.861.861,0,0,1-.092-.235c-.242-.806-.495-1.61-.717-2.422a5.809,5.809,0,0,1-.22-1.181c-.051-.846-.038-1.7-.084-2.542-.014-.273-.206-.548-.182-.81.072-.776.21-1.546.326-2.318.013-.086.072-.168.071-.251a3.8,3.8,0,0,1,.953-2.257,2.541,2.541,0,0,0,.355-.8,4.246,4.246,0,0,1,.92-1.7,5.246,5.246,0,0,0,.423-.709c.547-.864,1.072-1.745,1.661-2.579a16.405,16.405,0,0,1,1.434-1.73q1.223-1.307,2.514-2.553a3.354,3.354,0,0,1,1.381-1.045c.191-.053.325-.286.507-.4a.909.909,0,0,1,.463-.164.781.781,0,0,0,.664-.337,3.879,3.879,0,0,1,.755-.605c.821-.572,1.634-1.157,2.479-1.692a7.705,7.705,0,0,1,1.887-1,10.674,10.674,0,0,0,1.566-.867.565.565,0,0,1,.724.109.317.317,0,0,0,.239.038c.026,0,.057-.117.049-.176-.077-.626.131-.908.827-1.022a3.374,3.374,0,0,0,1.806-.82,3.425,3.425,0,0,1,1.066-.468q.883-.347,1.773-.68c.227-.084.461-.148.691-.224l1.8-.6c.049-.017.115-.025.143-.06.529-.679,1.354-.642,2.071-.873.189-.061.342-.237.531-.3.474-.166.958-.3,1.438-.448.811-.248,1.623-.488,2.43-.747.175-.057.32-.2.495-.265.344-.122.7-.2,1.049-.322a14.626,14.626,0,0,1,1.5-.538,8.944,8.944,0,0,1,1.467-.118.555.555,0,0,1,.193.065c-.055.05-.113.1-.164.152s-.1.121-.148.181c.091.042.209.141.266.114a8.721,8.721,0,0,0,1.08-.579c.427-.283.815-.624,1.24-.91.061-.041.243.065.35.133.3.187.57.468.852-.049a.556.556,0,0,1,.53-.035c.223.183.3.093.47-.056a1.5,1.5,0,0,1,.589-.262,7.407,7.407,0,0,1,1.562-.361c.62-.028.969-.6,1.555-.634.052,0,.128-.006.151-.038.382-.543,1.009-.346,1.512-.518a2.963,2.963,0,0,1,1.74.179,6.48,6.48,0,0,0,2.044-.047c.706-.072,1.407-.205,2.1-.344.4-.079.787-.219,1.179-.333a.306.306,0,0,0,.081-.054c-.053-.034-.1-.092-.158-.1-.246-.028-.495-.035-.74-.065-.045-.005-.081-.085-.12-.131.042-.028.08-.074.124-.081.5-.079,1-.165,1.5-.223.3-.035.335.189.249.383-.114.254-.043.342.2.3.6-.112,1.28.079,1.781-.443a.32.32,0,0,1,.2-.054c1.068-.045,2.138-.052,3.2-.143a4.642,4.642,0,0,0,1.568-.4,2.918,2.918,0,0,1,1.838-.1c.074.012.182.07.216.04a1.884,1.884,0,0,1,1.835-.49,3.483,3.483,0,0,0,1.377-.234,2.964,2.964,0,0,1,.593-.169,16.918,16.918,0,0,0,2.981-.312c.883-.144,1.8-.1,2.695-.156a2.075,2.075,0,0,0,.558-.191c.063-.024.116-.094.177-.1.627-.042,1.254-.068,1.88-.114q.789-.059,1.575-.154a4.491,4.491,0,0,1,.984-.149,11.159,11.159,0,0,0,2.3-.326c.961-.078,1.925-.121,2.884-.22.352-.036.689-.25,1.041-.275.792-.054,1.6.014,2.384-.072.849-.093,1.686-.3,2.529-.467.092-.018.229-.1.265-.064.575.551,1.2.112,1.8.091.065,0,.206-.334.171-.368-.294-.285-.032-.326.149-.324.866.01,1.73.049,2.595.068.143,0,.354.008.42-.076.223-.285.51-.266.811-.267,1.254-.005,2.509,0,3.763-.035a11.85,11.85,0,0,0,1.243-.183.644.644,0,0,1,.366.025,2.651,2.651,0,0,1,.42.341c-.143.047-.283.1-.428.143s-.288.076-.433.115c.162.092.332.272.484.258a8.811,8.811,0,0,0,1.338-.255c.094-.023.183-.166.224-.273s0-.331.018-.333a2.793,2.793,0,0,1,.578-.017c.044,0,.129.1.119.126-.179.457.174.362.395.369.371.011.742,0,1.114-.008.277-.005.566.049.669-.35.026-.1.292-.187.449-.188.8,0,1.593.018,2.389.04.1,0,.263.033.287.093.23.595.754.4,1.136.362a8.4,8.4,0,0,1,1.251.021c.76.027,1.521.013,2.28.058.628.037,1.252.134,1.879.206a13.175,13.175,0,0,0,1.672.183,4.013,4.013,0,0,1,1.4.362.361.361,0,0,1,.177.218c.01.034-.1.145-.172.16-.524.113-1.048.226-1.578.308a1.094,1.094,0,0,1-.877-.259,1.378,1.378,0,0,0-.723-.154c-.345-.02-.692,0-1.037.011q-.673.02-1.345.05c-.105.005-.209.042-.313.043a22.976,22.976,0,0,1-3.394-.02,36.226,36.226,0,0,0-4.6-.165c-1.052-.018-2.107.119-3.161.165-.76.033-1.523.014-2.283.053a5.063,5.063,0,0,0-.839.2,3.01,3.01,0,0,1-.517.09c-.917.047-1.834.085-2.751.121-.618.025-1.236.046-1.853.059a1.831,1.831,0,0,1-.3-.07c-.207-.031-.445-.132-.619-.066a9.9,9.9,0,0,1-3.245.2,1.977,1.977,0,0,0-1.056.223c-.253.157-.655.059-.985.109-.411.063-.817.16-1.224.246-.154.032-.336.15-.451.1-.809-.342-1.6.15-2.4.039a.9.9,0,0,0-.529.171.9.9,0,0,1-.98.025.915.915,0,0,0-.507-.033,3.211,3.211,0,0,0-.493.147,19.912,19.912,0,0,1-4.012.253c-.662.06-1.325.116-1.981.221-.28.044-.532.26-.812.309-.965.165-1.937.286-2.9.433a4.307,4.307,0,0,0-.542.154,2.577,2.577,0,0,1-.5.145c-1.068.085-2.138.163-3.207.225a3.816,3.816,0,0,1-1.382.008c-.312-.091-.725.171-1.094.272a3.812,3.812,0,0,1-.832.2,2.361,2.361,0,0,0-1.317.422c-.244.165-.642.1-.966.155a1.419,1.419,0,0,0-.535.167c-.082.054-.075.243-.109.37a1.288,1.288,0,0,1,.294-.067,1.754,1.754,0,0,1,.8.057,1.419,1.419,0,0,0,1.537,0,2.23,2.23,0,0,1,1.825-.218,1.008,1.008,0,0,0,.361.068c.608-.06,1.215-.128,1.82-.211a6.917,6.917,0,0,1,1.123-.191,4.346,4.346,0,0,0,2.251-.339c.133-.069.329-.012.5-.023.394-.026.787-.064,1.18-.086a1.135,1.135,0,0,1,.394.039.259.259,0,0,1,.034.228.558.558,0,0,1-.3.164c-.782.08-1.57.114-2.347.226a3.042,3.042,0,0,0-1.01.39.667.667,0,0,1-.728.025,1.135,1.135,0,0,0-.636-.129c-.365.048-.714.205-1.078.26q-1.53.23-3.068.407c-.376.042-.772-.021-.786.541,0,.069-.17.188-.257.185-.105,0-.208-.11-.31-.177s-.193-.192-.283-.184c-.572.047-1.142.126-1.714.187-.23.025-.518-.02-.222.35.027.034-.112.286-.212.318a2.662,2.662,0,0,1-.631.058c-.236.016-.548-.262-.675.174a3.924,3.924,0,0,1-.945-.433c-.158-.128-.148-.119-.292-.015a1.156,1.156,0,0,1-.548.141c-.5.042-1.006.04-1.505.1-.607.071-1.211.172-1.811.288-.261.051-.506.183-.765.255-.308.086-.3.258-.233.525a.475.475,0,0,1-.194.4.678.678,0,0,1-.955-.416c-.027-.085-.111-.2-.177-.21s-.161.1-.224.165c-.044.05-.049.18-.084.185-.855.116-1.349,1.059-2.371.913a10.111,10.111,0,0,0-2.33.185c-.051,0-.123.019-.144.053-.347.556-.911.4-1.424.48a8.775,8.775,0,0,0-1.31.422c-.345.109-.693.209-1.045.3-1.023.26-2.05.51-3.074.768a.69.69,0,0,0-.284.123c-.484.422-1.135.39-1.677.632a10.172,10.172,0,0,1-2.13.555c-.316.066-.572.378-.881.524a1.677,1.677,0,0,1-.714.15,3.4,3.4,0,0,0-1.781.532,1.523,1.523,0,0,1-.848.213c-1-.093-1.7.56-2.519.92-.113.05-.177.244-.234.382-.188.458-.4.533-.809.276a.706.706,0,0,0-.909.19c-.053.072-.146.161-.222.163a2.055,2.055,0,0,1-.917-.04c-.593-.3-.779.248-.978.5a.96.96,0,0,1-.581.44c-.6.1-.748.633-1.034,1.036l-.858.294c-.692-.07-1.1.491-1.648.743-1,.462-1.99.941-2.964,1.451a15.973,15.973,0,0,0-1.544.972c-.087.059-.094.233-.139.353a1.012,1.012,0,0,0,.345-.03c.311-.145.6-.33.917-.471a1.412,1.412,0,0,1,.487-.087c.022,0,.1.2.072.22a2.205,2.205,0,0,1-.406.25c-.46.231-.919.465-1.387.676a.94.94,0,0,1-.484.081c-.614-.084-.891.145-1.209.682-.192.326-.628.506-.949.759-.116.092-.266.185-.314.311a.807.807,0,0,1-.6.5,1.106,1.106,0,0,0-.583.625c-.227.631-.758.817-1.285,1.042-.089.038-.208.091-.241.168a7.626,7.626,0,0,1-1.32,1.775c-.291.354-.5.774-.766,1.15-.2.277-.432.527-.635.8a2.357,2.357,0,0,0-.252.447c-.05.111-.026.276-.1.35a5.129,5.129,0,0,0-.751,1.51c-.031.062-.108.121-.1.178.031.477-.294.839-.394,1.264-.169.713-.243,1.447-.377,2.167-.046.242-.2.468-.226.708a6.5,6.5,0,0,0,.01,1.177c.017.192.192.375.192.563a7.042,7.042,0,0,0,.342,2.119c.066.211-.063.5.031.684.293.577.652,1.12.979,1.68a2.412,2.412,0,0,1,.328.641,4.246,4.246,0,0,0,1.1,1.671,4.3,4.3,0,0,0,1.162,1.285c.714.4,1.2,1.142,2.015,1.427a1.182,1.182,0,0,1,.572.421,2,2,0,0,0,1.37.752,3.141,3.141,0,0,1,1.286.735,6.074,6.074,0,0,0,1.692.764,12.218,12.218,0,0,1,1.794.644,7.027,7.027,0,0,0,2.276.709c.166.036.3.229.463.277a4.655,4.655,0,0,0,1.073.216c.8.034,1.124.765,1.707,1.106a3.085,3.085,0,0,0,1.33.538,6.26,6.26,0,0,1,2,.516c.277.1.659,0,.874.16a4.239,4.239,0,0,0,2.586.46,1.041,1.041,0,0,0,1.284.215c.244-.143.25-.353.078-.452a2.206,2.206,0,0,0-.881-.261c-.1-.008-.215.248-.329.378A1.351,1.351,0,0,1,1600.79,956.135Zm-16.043-35.066a2.025,2.025,0,0,0,1.528-.535,1.855,1.855,0,0,0,.237-.232,3.3,3.3,0,0,0-.313-.148,2.09,2.09,0,0,0-.21-.023c-.132-.031-.26-.074-.39-.111.109-.121.2-.3.332-.352a7.428,7.428,0,0,0,1.781-.786c.451-.325,1-.513,1.449-.838.116-.085-.046-.473.155-.679.02-.02-.02-.141-.033-.142a.519.519,0,0,0-.253.036c-.5.285-.977.628-1.5.861a9.749,9.749,0,0,0-2.73,1.622,1.22,1.22,0,0,0-.338.632c-.073.387-.248.52-.637.383a.358.358,0,0,0-.224-.027,11.441,11.441,0,0,0-1.42.664c-.188.115-.279.412-.369.642-.026.066.114.281.165.277a3.535,3.535,0,0,0,.778-.157.513.513,0,0,0,.257-.255C1583.351,921.179,1583.988,921.067,1584.746,921.07Zm10.066-4.839.063.194c.462-.25.923-.5,1.377-.762.007,0-.072-.246-.129-.254a1.876,1.876,0,0,0-.462.043c-.176.019-.351.034-.527.051.089-.143.177-.287.269-.428.019-.028.07-.038.08-.066a2.177,2.177,0,0,0,.053-.238.912.912,0,0,0-.23-.033,5.123,5.123,0,0,1-.668.1,2.625,2.625,0,0,0-1.78.838,2.761,2.761,0,0,1-1.443.6c-.115.019-.33.014-.332.033-.013.165-.049.385.039.49a.678.678,0,0,0,1.167-.174.5.5,0,0,1,.525-.33C1593.481,916.289,1594.147,916.256,1594.812,916.231Zm-22.066,15.589.194.285a1.784,1.784,0,0,0,.311-.218,3.135,3.135,0,0,0,.346-.449c.226-.35.462-.7.654-1.063a10.63,10.63,0,0,1,.526-1.142c.283-.407.514-.849.789-1.242.309-.443.406-1.1,1.04-1.3a.3.3,0,0,0,.146-.207,1.082,1.082,0,0,0-.018-.3c-.091.031-.207.037-.267.1a1.147,1.147,0,0,1-.882.358c-.081,0-.224.207-.24.332a1.7,1.7,0,0,1-.874,1.37.457.457,0,0,0-.177.175c-.313.618-.629,1.234-.925,1.86C1573.156,930.827,1572.971,931.295,1572.746,931.819Zm51.616-25.188-.041-.167c-.558.16-1.123.3-1.669.493-.121.042-.207.261-.25.416-.016.06.131.238.2.238a3.827,3.827,0,0,0,.834-.081c.383-.083.753-.226,1.136-.305.492-.1.99-.182,1.489-.24.319-.037.645-.014.967-.025.126,0,.311.025.367-.045a1.161,1.161,0,0,1,.933-.406c.082,0,.16-.1.24-.152-.071-.064-.14-.181-.211-.182a9.6,9.6,0,0,0-1.423.026C1626.078,906.315,1625.222,906.485,1624.362,906.632Zm2.5,50.772-.006-.06c-.979.088-1.958.175-2.938.268a.7.7,0,0,0-.21.1c.079.025.157.052.237.073a7.8,7.8,0,0,0,1.04.267,2.135,2.135,0,0,0,1.188-.009,1.838,1.838,0,0,1,.938-.212c.423-.019.849-.01,1.27-.042a1.641,1.641,0,0,0,.437-.169,1.5,1.5,0,0,0-.471-.2C1627.849,957.387,1627.354,957.4,1626.858,957.4Zm-26.042-44.736c0,.407.281.552.624.394.749-.345,1.509-.669,2.259-1.013a1.35,1.35,0,0,0,.345-.276c.012-.012-.056-.158-.093-.16a1.589,1.589,0,0,0-.508.022,3,3,0,0,0-.6.249c-.479.25-1.121.185-1.45.747-.029.049-.245.007-.367-.024-.059-.015-.1-.1-.152-.154Zm-20.545,12.339-.017.075c.034-.005.08,0,.1-.019.434-.4.866-.81,1.292-1.225.018-.018-.045-.168-.063-.166-.308.025-.6.288-.93.043-.005,0-.124.094-.124.143.008.495-.3.553-.694.549-.136,0-.278.119-.408.2-.028.017-.029.144-.019.147C1579.694,924.845,1579.983,924.926,1580.271,925.008Zm58.325,31.877v-.013c-.423,0-.845-.009-1.268.006a1.327,1.327,0,0,0-.364.123,3.99,3.99,0,0,0,.34.318c.048.036.137.018.206.029a6,6,0,0,0,2.346-.311c.036-.008.063-.062.094-.094a.422.422,0,0,0-.138-.055C1639.407,956.883,1639,956.885,1638.6,956.885Zm4.049-.043v-.024a3.2,3.2,0,0,0,.734-.015c.134-.032.23-.22.343-.338a1.45,1.45,0,0,0-.325-.09c-.386-.012-.774-.011-1.16-.006a.77.77,0,0,0-.356.057c-.094.053-.149.177-.221.271a.993.993,0,0,0,.3.138C1642.186,956.856,1642.416,956.842,1642.645,956.842Zm-28.423-47.969c-.354.069-.769.124-1.165.241-.15.043-.258.229-.385.351a2.1,2.1,0,0,0,.4.17.673.673,0,0,0,.361-.036c.318-.126.626-.279.942-.412.182-.077.372-.136.558-.2Zm-39.877,22.694c-.085.318-.73-.036-.47.418a1.327,1.327,0,0,1,.178.95.794.794,0,0,0,.047.25c.089-.042.239-.066.259-.13a9.248,9.248,0,0,0,.306-1.174C1574.678,931.812,1574.491,931.7,1574.345,931.567Zm22.128-16.682c.311-.07.882-.444.911-.661.006-.042-.144-.159-.2-.146a4,4,0,0,0-.737.228,1.852,1.852,0,0,0-.373.282Z"
              transform="translate(-1569.561 -899.317)"
              fill="#68db7e"
            />
          </svg>

          <div
            dangerouslySetInnerHTML={{
              __html: input?.copy,
            }}
          />
        </div>
      </div>
      <div className="image">
        <Img
          fluid={input?.image?.localFile?.childImageSharp?.fluid}
          alt="SweatSearch"
        />
      </div>
      <motion.svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 324.505 324.506"
        className="circle-2"
        initial={{ x: 0, y: 0 }}
        animate={{
          y: [-30, -20, -10, 0, 10, 20, 30],
          x: [30, 20, 10, 0, -10, -20, -30],
          transition: { yoyo: Infinity, duration: 3, ease: "linear" },
        }}
      >
        <g>
          <path
            fill="var(--green)"
            d="M162.252,324.506C72.786,324.506,0,251.72,0,162.253S72.786,0,162.252,0
		c89.467,0,162.253,72.786,162.253,162.253S251.719,324.506,162.252,324.506z M162.252,63C107.524,63,63,107.524,63,162.253
		s44.524,99.253,99.252,99.253c54.729,0,99.253-44.524,99.253-99.253S216.981,63,162.252,63z"
          />
        </g>
      </motion.svg>
    </CirclesSectionStyles>
  )
}

export default CirclesSection
