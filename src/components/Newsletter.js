import React, { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const NewsletterContainer = styled(motion.section)`
  background: var(--black);
  padding: 100px;
  margin: 100px;
  color: var(--white);
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 60px;
    margin: 60px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px;
    margin: 30px;
  }
  h3 {
    position: relative;
    font-size: 3rem;
    span {
      position: relative;
      z-index: 2;
      .line-svg {
        position: absolute;
        top: 90%;
        left: 0;
      }
      .arrow-svg {
        position: absolute;
        top: -40%;
        right: 0;
      }
    }
  }
  p {
    margin: 30px auto;
    max-width: 550px;
  }
  form {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    .email {
      background: transparent;
      border: 1px var(--white) solid;
      padding: 5px;
      flex: 2;
      max-width: 350px;
      margin-right: 1rem;
      @media screen and (max-width: 500px) {
        margin-right: 0;
        margin-bottom: 1rem;
        width: 100%;
      }
      ::placeholder {
        color: var(--white);
        padding: 5px;
        font-family: var(--body);
        font-size: 1rem;
      }
    }
    .submit {
      display: inline-block;
      input {
        border: none;
        background: var(--green);
        color: var(--white);
        padding: 6px 28px;
        border-radius: 23px;
        cursor: pointer;
        font-size: 1rem;
        transition: 0.3s ease;
        :hover {
          color: var(--black);
        }
      }
    }
  }
`

const Newsletter = ({ input }) => {
  const animation = useAnimation()
  const animationInput = useAnimation()
  const animationButton = useAnimation()

  const [featured, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animation.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        })
        await animationInput.start({
          opacity: 1,
          transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 0.4,
          },
        })
        await animationButton.start({
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
          },
        })
      }
      sequence()
    }
  }, [animation, animationInput, animationButton, inView])

  return (
    <div ref={featured}>
      <NewsletterContainer initial={{ opacity: 0, y: 200 }} animate={animation}>
        <h3>
          Subscribe to the{" "}
          <span>
            newsletter
            <svg
              className="arrow-svg"
              width="25.814"
              height="30.47"
              viewBox="0 0 25.814 30.47"
            >
              <g
                id="Group_127"
                data-name="Group 127"
                transform="translate(-839.56 -4353.358)"
              >
                <g id="Group_51" data-name="Group 51">
                  <g id="Group_50" data-name="Group 50">
                    <path
                      id="Path_76"
                      data-name="Path 76"
                      d="M848.828,4370.4c.049-.018.115-.022.145-.058a10.378,10.378,0,0,0,.727-.912c.327-.5.581-1.064.944-1.531a7.206,7.206,0,0,0,.528-.559,5.528,5.528,0,0,1,.517-.646c.113-.133.233-.259.357-.382s.414-.151.272-.513c-.007-.018,0-.043.012-.042.336.015.306-.317.458-.477.038-.04.026-.129.037-.2a1.777,1.777,0,0,0-.215,0,.521.521,0,0,0-.131.044c.009-.051,0-.12.031-.149.074-.067,0-.34.323-.077,0-.035.027-.07.006-.1-.136-.227-.005-.28.044-.385.01-.021.062-.009.094-.012a.979.979,0,0,1,.043.109.2.2,0,0,1,.007.083c-.008.072-.02.142-.03.212.059-.033.117-.068.178-.1a1.3,1.3,0,0,0,.158-.076c.024-.017.017-.066.039-.086.051-.049.089-.12.17-.125.122-.006.3.111.149-.192-.082-.168.167-.281.267-.418.035-.047.072-.091.1-.139a2.3,2.3,0,0,1,.126-.2c.173-.212.354-.418.528-.629.148-.18.283-.371.441-.541.084-.091.116-.195-.005-.4-.023-.04,0-.079,0-.118.028.036.059.094.084.1.077.037.191.1.221.076a2,2,0,0,0,.727-.709.307.307,0,0,1,.11-.1c.33-.24.671-.469.986-.725.065-.053.022-.213.053-.305a.967.967,0,0,1,.177-.368,13.1,13.1,0,0,1,1.009-.942c.119-.1.5-.031.468-.162-.056-.259-.027-.416.148-.47.355-.111.429-.481.665-.7a.465.465,0,0,1,.219-.072c.106-.02.223-.021.129-.213-.02-.041.043-.1.047-.1.247.188.163.032.192-.065.021-.071-.05-.336.255-.145.027.017.094-.111.1-.2a.589.589,0,0,1,.461-.549.612.612,0,0,0,.366-.323,1.5,1.5,0,0,1,.289-.37c.465-.412.918-.837,1.422-1.209a5.051,5.051,0,0,1,.946-.438c.013-.006.031-.008.045-.014q.479-.206.958-.411a.469.469,0,0,1,.112-.02c.011.052.049.129.028.151-.163.176-.339.341-.508.512a.315.315,0,0,0-.042.1c.049,0,.1.007.146,0,.064,0,.125-.013.187-.02,0,.074.041.194,0,.214-.28.118-.331.4-.389.71-.049.265-.384.339-.594.5-.028.022-.079.025-.091.058a.925.925,0,0,0-.029.2c.06-.008.117-.019.18-.022a.57.57,0,0,1,.11.023l-.061.38a.854.854,0,0,1-.109-.092c-.184-.228-.314-.222-.423-.17-.023.012-.01.1.014.125.314.286.071.219-.015.263s-.222.093-.255.2c-.1.321-.193.652-.5.79a3.827,3.827,0,0,1-.49.076c-.056.015-.047.112-.076.165a1.254,1.254,0,0,1-.1.138c-.035.05-.086.089-.1.153-.022.1.043.287-.226.109-.015-.01-.076.055-.063.106.1.4-.093.538-.43.543-.12,0-.089.009-.057.158.025.114-.054.185-.087.274-.06-.057-.118-.119-.181-.168-.035-.027-.109-.055-.114-.043-.043.093-.144.179-.093.3.094.222-.014.252-.108.315-.063.043-.088.113-.239-.085-.095-.123-.406-.18-.437-.1a.122.122,0,0,0,.031.081c.04.03.1.07.125.065.122-.028.2.072.262.192.012.023-.047.06-.054.054-.268-.216-.237-.009-.215.073.091.332-.128.412-.242.576-.069.1-.173.168-.234.274-.015.028-.265,0,.036.187-.006.02,0,.054-.02.058-.193.041-.394.072-.583.119-.052.013-.078.065-.1.112-.041.089-.07.189-.11.28a.186.186,0,0,1-.074-.036c-.148-.321-.156-.127-.212-.083-.071.058-.157.1-.224.162-.025.023-.013.082-.018.124a.752.752,0,0,0,.125.017.462.462,0,0,0,.11-.025c0,.045.009.1-.011.134-.112.164-.233.32-.344.485-.007.009.045.069.069.1l.12-.017a.511.511,0,0,0-.045.118c-.017.1-.02.214-.043.312a.128.128,0,0,1-.082.108,1.092,1.092,0,0,1-.263,0,.683.683,0,0,1-.1-.02.318.318,0,0,1,.015-.066c.043-.079.088-.156.132-.234a1.368,1.368,0,0,0-.266.166c-.263.265-.516.539-.769.813-.025.027-.022.081-.032.122.043,0,.084-.006.129,0,.061,0,.124.014.187.021l.086.01c0,.028,0,.063-.012.083-.093.153-.19.3-.286.453-.307-.368-.3-.364-.466-.255a4.8,4.8,0,0,0-.41.254c-.029.024.026.14.06.217.018.04.083.09.108.134a.268.268,0,0,1,.021.106.4.4,0,0,0,.1-.034c.2-.142.391-.287.586-.431a.712.712,0,0,0,.115.1c.034.016.063,0,.094,0-.012.017-.018.041-.037.049-.069.029-.144.053-.216.079-.024.008-.074.013-.066.029.111.253-.085.273-.161.374-.275.367-.583.705-.878,1.055-.009.01-.007.038-.022.036-.111-.013-.226-.032-.339-.049-.021-.079-.041-.158-.062-.237-.013-.048-.029-.1-.043-.144-.048,0-.121-.022-.14,0-.111.155-.418.152-.271.52.01.024-.069.025-.107.037a3.3,3.3,0,0,1,.234.24c.156.2.073.665-.141.608-.238-.063-.274.055-.33.175-.017.037-.067.047-.1.07a.769.769,0,0,1-.109-.169c-.03-.147-.111-.165-.165-.122a1.135,1.135,0,0,0-.24.282c-.014.022.06.12.094.183.052,0,.106.011.154.009.128-.006.253-.016.38-.024a2.2,2.2,0,0,1-.134.272c-.095.142-.2.273-.3.409,0,.006,0,.018-.011.018-.442.039-.357.585-.729.7-.142.044-.159.245-.241.367-.046.068-.126.109-.16.186a2.555,2.555,0,0,1-.163.461c-.106.148-.286.23-.4.369-.066.081-.047.238-.107.326-.092.134-.234.225-.328.358-.22.312-.432.631-.633.959s-.382.707-.6,1.037-.467.584-.677.9-.391.672-.594,1c-.282.455-.564.909-.861,1.35-.43.637-.871,1.264-1.315,1.889-.148.208-.394.344-.463.606a.87.87,0,0,1-.465.564c-.037.02-.1.055-.124.038-.382-.341-.43-.071-.6-.051a1.454,1.454,0,0,1-.906-.4,2.917,2.917,0,0,1-.543-.585c-.065-.169.088-.279.151-.411.135-.283.277-.562.41-.847.019-.04.1-.093-.09-.175-.009,0-.052-.086-.043-.1.15-.254.2-.642.49-.715.314-.08.4-.327.544-.529.341-.472.634-.987.945-1.485a.8.8,0,0,0,.094-.2c.008-.028-.026-.086-.041-.129a.224.224,0,0,0-.069.043c-.121.157-.239.317-.361.472-.014.017-.054.011-.082.015a.2.2,0,0,1,.009-.067c.194-.328.387-.657.589-.978.027-.044.1-.047.154-.069a1.185,1.185,0,0,0-.013.161,1.587,1.587,0,0,0,.027.183c.026-.031.056-.059.079-.092.289-.415.583-.826.863-1.249.133-.2.239-.424.354-.639.011-.021,0-.061-.005-.092-.025,0-.062-.007-.075.007-.065.073-.122.153-.185.229a2.067,2.067,0,0,1-.182.207c-.022.021-.075.011-.114.016,0-.042-.022-.1-.006-.122.176-.278.358-.553.542-.824a.08.08,0,0,1,.091-.007c.167.107.167.11.2-.034a.293.293,0,0,1,.027-.061Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_77"
                      data-name="Path 77"
                      d="M848.837,4370.407c-.16-.085-.167-.159-.124-.224.285-.425.569-.851.863-1.268.031-.044.128-.031.194-.044,0,.078.029.18,0,.229-.289.428-.588.847-.886,1.267a.2.2,0,0,1-.052.037Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_78"
                      data-name="Path 78"
                      d="M857.831,4363.759a.274.274,0,0,1-.023-.041,2.012,2.012,0,0,1-.088-.409c0-.1-.036-.26.177-.2.074.022.081-.114.152-.136.04-.012.149.064.227.1,0,.045.016.1,0,.132-.12.169-.248.331-.375.494A.413.413,0,0,1,857.831,4363.759Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_79"
                      data-name="Path 79"
                      d="M862.495,4358.129a1.679,1.679,0,0,0-.054.3.3.3,0,0,1-.42.253.286.286,0,0,1-.077-.09c.166-.188.335-.375.51-.555.03-.031.092-.031.139-.046l-.006.2Z"
                      fill="#68db7e"
                    />
                  </g>
                </g>
                <g id="Group_53" data-name="Group 53">
                  <g id="Group_52" data-name="Group 52">
                    <path
                      id="Path_80"
                      data-name="Path 80"
                      d="M848.757,4380.621c1.221-.328,2.443-.651,3.662-.985.821-.226,1.643-.453,2.456-.706.361-.113.7-.307,1.051-.44q.977-.363,1.967-.694a1.05,1.05,0,0,1,.915.107c.129.083.2.232.385.277.387.094.421.157.288.526-.07.194-.071.233.144.194.184-.033.28,0,.139.223a1.718,1.718,0,0,1-1.09.831c-.606.152-1.184.412-1.781.6-1.28.411-2.557.833-3.849,1.2-1.477.422-2.969.8-4.457,1.179-.3.077-.62.1-.931.15q-1.078.171-2.157.343c-.132.02-.267.022-.4.046-.26.049-.519.108-.779.161a3.4,3.4,0,0,1-.461.082c-.782.041-1.566.073-2.349.106a.68.68,0,0,1-.6-.231,3.422,3.422,0,0,0-.422-.372c-.051-.044-.142-.078-.15-.127-.059-.343-.353-.431-.591-.589a.5.5,0,0,1-.188-.28c-.01-.042.13-.118.2-.182a1.827,1.827,0,0,0,.277-.273.7.7,0,0,1,.779-.3c.014,0,.046-.037.06-.063s.023-.1.034-.1c.272,0,.168-.2.15-.317-.106-.709-.236-1.415-.335-2.125-.1-.686-.161-1.376-.243-2.065-.026-.218-.07-.435-.092-.654-.057-.567-.112-1.134-.159-1.7-.069-.828-.188-1.649-.294-2.472a1.374,1.374,0,0,1,.1-.971c.059-.093-.015-.275-.039-.413-.06-.348-.135-.693-.186-1.042a.33.33,0,0,1,.076-.269.591.591,0,0,0,.3-.524c0-.038.164-.124.205-.1.188.1.214.026.262-.143a.386.386,0,0,1,.263-.235c.29-.026.586,0,.88,0,.056,0,.152-.041.162-.079.058-.241.123-.194.255-.039.173.2.378.38.566.571.019.019.014.063.015.1.027.523.043,1.047.08,1.569.046.636.109,1.272.166,1.908.1,1.092.253,2.183.273,3.277a22.625,22.625,0,0,0,.439,3.43c.116.673.224,1.347.352,2.017.083.433.222.512.663.427.033-.007.065-.018.1-.024.311-.057.572-.243.942-.166a3.016,3.016,0,0,0,1.04-.139c.232-.04.462-.091.693-.141a1.673,1.673,0,0,0,.182-.059.965.965,0,0,0-.208-.01c-.143.024-.284.066-.427.1a.711.711,0,0,1-.129,0,.54.54,0,0,1,.11-.053q.837-.193,1.675-.384Z"
                      fill="#68db7e"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className="line-svg"
              width="182.877"
              height="4.278"
              viewBox="0 0 182.877 4.278"
            >
              <g
                id="Group_128"
                data-name="Group 128"
                transform="translate(-674.547 -4429.34)"
              >
                <path
                  id="Path_81"
                  data-name="Path 81"
                  d="M833.3,4433.1c-.544-.112-1.529.137-1.832-.232a2.27,2.27,0,0,1-.374.065,4.181,4.181,0,0,1-.863-.016,15.839,15.839,0,0,0-4.822-.267.694.694,0,0,0-.21.029c-.389.176-.385.171-1.121.158-.9-.015-1.807-.018-2.709-.035-.073,0-.135-.066-.2-.1l.515-.089c-.225-.006-.453-.022-.675-.015-.434.012-.986-.159-1.293.084a3.018,3.018,0,0,1-.415-.021c-.451-.048-.888-.134-1.345-.146q-6.114-.153-12.233-.286-4.953-.113-9.909-.223c-2.6-.053-5.2-.094-7.8-.137-1.747-.029-3.543-.143-5.226-.047-1.209.069-2.257-.008-3.37-.045-1.2-.041-2.4-.124-3.6-.154a7.883,7.883,0,0,0-1.171.142.566.566,0,0,0,.151.1c.09.033.217.055.328.081-.112.011-.224.031-.337.032-.533,0-1.068,0-1.6,0a3.105,3.105,0,0,1-.4-.054c.127-.022.248-.05.382-.065.11-.013.236-.011.354-.015a3.425,3.425,0,0,0-.374-.043q-2.964-.033-5.929-.061a4.683,4.683,0,0,1-.612,0,18.724,18.724,0,0,0-3.486-.02,2.888,2.888,0,0,0-.7.066,8.861,8.861,0,0,1-3.261.2c-.315-.019-.655,0-.98.01-.474.017-1.138.224-1.173-.162a7.816,7.816,0,0,0-1.459-.11c-1.461.013-2.921.054-4.379.092a4.428,4.428,0,0,0-1.038.083,3.482,3.482,0,0,1-2.029.18c-.326-.018-.659-.039-.985-.033-1.394.027-2.785.073-4.18.093-1.674.025-3.41.123-5.009.015-1.413-.1-2.592.131-3.911.09-1.068-.033-2.156.012-3.235.015-.393,0-.621-.033-.163-.146.049-.012.064-.075.026-.084a12.858,12.858,0,0,0-2.1.177,19.072,19.072,0,0,1-2.23.2c-1.166.032-2.346,0-3.517.011-3.216.045-6.43.114-9.647.151-2.755.031-5.514.017-8.268.053-1.134.015-2.255.139-3.39.159q-5.953.1-11.911.161c-3.649.04-7.3.057-10.948.089-1.8.016-2.311-.093-2.625-.619-.038-.064.176-.167.36-.217.279-.076.662-.111.951-.185s.747-.213.692-.247a2.812,2.812,0,0,0-.953-.349c-.535-.1-1.192-.116-1.761-.2s-1.132-.182-.393-.41c.111-.035.231-.1.211-.14-.207-.461.728-.427,1.643-.431q5.217-.021,10.434-.056c3.809-.021,7.619-.027,11.426-.069,2.652-.03,5.3-.125,7.947-.16,1.427-.018,2.864.051,4.293.039,1.137-.009,2.269-.12,3.4-.12,2.7,0,5.367-.125,8.05-.171,2.392-.042,4.8.049,7.2.027,1.638-.016,3.267-.125,4.9-.19a7.406,7.406,0,0,1,1.106-.02,23.21,23.21,0,0,0,4.608-.015c.77-.049,1.608.019,2.415.034a.832.832,0,0,0,.123,0,48,48,0,0,1,5.013-.012c4.062-.161,8.095.1,12.127-.039.449-.015.89-.057,1.335-.085a4.551,4.551,0,0,1,.835-.039,18.328,18.328,0,0,0,3.927,0c1.218.022,2.434.068,3.652.072,2.469.01,4.939-.011,7.407,0,1.133.006,2.263.086,3.4.085,1.513,0,3.025-.051,4.539-.07.347,0,.862-.184,1.036.084a1.362,1.362,0,0,0,.428.03,10.534,10.534,0,0,1,2.517,0c1.066.033,2.148.008,3.217.034,1.917.047,3.828.126,5.746.167,1.1.023,2.208-.021,3.308,0,1.4.023,2.792.094,4.192.116,1.425.021,2.86-.012,4.284.014,3.644.067,7.285.152,10.926.233,3.681.081,7.363.154,11.039.255,4.75.13,9.508.245,14.234.441,2.744.113,5.446.352,8.139.573a4.244,4.244,0,0,1,2.725.856c.192.275-.453.572.6.84.46.117-.241.362-1.005.3-.793-.069-.763-.065-1.062.18a2.256,2.256,0,0,1-.706.058c-1.412-.089-2.8-.227-4.225-.28-1.954-.072-3.93-.079-5.9-.121-1.006-.021-2.008-.058-3.011-.093a.175.175,0,0,1-.123-.1c-.125-.275-.743-.274-1.316-.222a33.177,33.177,0,0,1-6.279.023,6.869,6.869,0,0,0-.793.02c.207.041.4.093.625.12.394.047.8.078,1.209.117Zm-63.049-2.9-1.186.075c.293.031.6.053.873.1.175.028.281.1.455.132a3.683,3.683,0,0,0,.868.111,15.939,15.939,0,0,1,3.445.071c1.041.085,2.138-.128,3.249-.01a3.13,3.13,0,0,0,.755-.292c-.242-.051-.472-.109-.728-.151-.217-.035-.519-.029-.687-.078a5.694,5.694,0,0,0-1.978-.088A18.231,18.231,0,0,1,770.248,4430.2Zm13.66.111a1.868,1.868,0,0,0-.511.142c-.039.054.152.17.312.187a10.028,10.028,0,0,0,1.548.094c2.221-.133,4.355.079,6.527.133.3.008.619-.025.928-.038a2.333,2.333,0,0,0-.867-.385c-.826-.041-1.7.027-2.552.035-1.18.011-2.366.026-3.542,0C785.149,4430.468,784.562,4430.373,783.908,4430.31Zm-25.952.317.006.032a9.761,9.761,0,0,1,1.217-.04c1.169.117.291-.276.777-.316-.236-.024-.467-.059-.709-.07-.407-.019-.826-.042-1.231-.029-.855.026-1.711.063-2.55.122-.183.013-.295.136-.44.208a4.076,4.076,0,0,0,.588.088C756.394,4430.633,757.175,4430.627,757.956,4430.627ZM746.2,4430.5a3.038,3.038,0,0,0,.513.157,29.728,29.728,0,0,0,5.212.007c.12-.006.195-.1.291-.149a2.665,2.665,0,0,0-.527-.085,22.728,22.728,0,0,1-3.819-.055A10.449,10.449,0,0,0,746.2,4430.5Zm18.421.176,0-.037c.449,0,.9.015,1.344-.005a4.725,4.725,0,0,0,.683-.124c-.2-.051-.386-.115-.611-.152a39.676,39.676,0,0,0-4.456.024,2.266,2.266,0,0,0-.569.141,4.453,4.453,0,0,0,.579.086C762.6,4430.636,763.613,4430.653,764.622,4430.674Zm42.243.313a5.974,5.974,0,0,0,.737.13q2.465.034,4.932.048a1.055,1.055,0,0,0,.311-.108,2.161,2.161,0,0,0-.5-.127q-2.242-.059-4.49-.087A7.7,7.7,0,0,0,806.865,4430.987Zm-88.224.04.055.044.8-.1a5.866,5.866,0,0,0-1.21-.266,11.512,11.512,0,0,0-2.863.216,3.064,3.064,0,0,0-.32.117,2.945,2.945,0,0,0,.495.075C716.613,4431.089,717.626,4431.056,718.641,4431.027Z"
                  fill="#68db7e"
                />
              </g>
            </svg>
          </span>
        </h3>
        {input?.copy ? (
          <div dangerouslySetInnerHTML={{ __html: input?.copy }} />
        ) : (
          <p>
            What's in it for you? By subscribing to our newsletter you ensure
            that you are the first to hear about product release dates, events
            and promotional sales.
          </p>
        )}
        <form>
          <motion.input
            className="email"
            type="email"
            name="email"
            placeholder="Email"
            initial={{ opacity: 0 }}
            animate={animationInput}
          />
          <motion.span
            className="submit"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={animationButton}
          >
            <input type="submit" name="sumbit" value="Sign up" />
          </motion.span>
        </form>
      </NewsletterContainer>
    </div>
  )
}

export default Newsletter
