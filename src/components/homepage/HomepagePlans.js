import React, { useEffect } from "react"
import styled from "styled-components"
import ButtonInvert from "../buttons/ButtonInvert"
import Wrapper from "../Wrapper"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const PlanSection = styled.section`
  width: 100%;
  background: var(--green);
  position: relative;
  .banner-svg {
    position: absolute;
    top: -18%;
    left: -10%;
    z-index: 1;
    width: 70%;
    @media screen and (max-width: 768px) {
      top: -3%;
    }
  }
`

const PlanInner = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
  }
  .thumb:first-child {
    margin-right: 30px;
    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
  .thumb {
    border: 1px solid var(--white);
    max-width: 300px;
    flex: 1;
    border-radius: 10px;
    padding: 30px;
    background: var(--green);
    .divider {
      display: block;
      height: 1px;
      width: 100%;
      background: var(--white);
      margin: 1rem 0;
    }
    .plan-type {
      background-repeat: no-repeat;
      background-size: auto;
      display: inline-block;
      overflow: visible;
      font-weight: 700;
      font-size: 1.1rem;
      margin-top: 20px;
      position: relative;
      .plan-type-inner {
        position: relative;
        span {
          position: relative;
          z-index: 3;
        }
        .scribble-one {
          z-index: 1;
          position: absolute;
          left: -30%;
          top: 10%;
        }
        .scribble-two {
          z-index: 1;
          position: absolute;
          left: -20%;
          top: -5%;
        }
      }
    }
    .price {
      font-size: 2rem;
      font-weight: 700;
    }
    .bullets {
      margin-bottom: 30px;
    }
  }
`

const HomepagePlans = ({ input }) => {
  const animation = useAnimation()

  const [featured, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animation.start(i => ({
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: i * 0.2,
          },
        }))
      }
      sequence()
    }
  }, [animation, inView])

  return (
    <PlanSection ref={featured}>
      <svg className="banner-svg" x="0px" y="0px" viewBox="0 0 900.701 253.059">
        <g transform="translate(110.168 -1349.702)">
          <motion.path
            custom={3}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M78.125,1602.761l-188.294-253.035l48.824-0.024l64.531,0.024l187.346,253.035H78.125z"
          />
          <motion.path
            custom={1}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M479.125,1602.761l-188.294-253.035l48.824-0.024l64.531,0.024l187.346,253.035H479.125z"
          />
          <motion.path
            custom={2}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M277.125,1602.761L88.831,1349.726l48.824-0.024l64.531,0.024l187.346,253.035H277.125z"
          />
          <motion.path
            custom={0}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M678.125,1602.761l-188.294-253.035l48.824-0.024l64.531,0.024l187.346,253.035H678.125z"
          />
        </g>
      </svg>
      <Wrapper>
        <PlanInner>
          {input?.plansThumbnails?.map((p, index) => {
            return (
              <div className="thumb" key={index}>
                <p>
                  <span className="price">{p.plans.price}</span> / Month
                </p>
                <div className="plan-type">
                  <span className="plan-type-inner">
                    <span>{p.plans.planType}</span>
                    {index === 1 ? (
                      <svg
                        width="102.238"
                        height="26.12"
                        viewBox="0 0 102.238 26.12"
                        className="scribble-one"
                      >
                        <path
                          id="Path_91"
                          data-name="Path 91"
                          d="M332.962,2831.959c1.235-.028,2.47-.05,3.7-.092a1.259,1.259,0,0,0,.421-.186,4.351,4.351,0,0,0-.3-.421,4.727,4.727,0,0,1-.39-.357c-.212-.292-.609-.768-.559-.9a5.139,5.139,0,0,1,.785-1.209,1.2,1.2,0,0,1,.311-.229,1.476,1.476,0,0,0-.36-.083,4.151,4.151,0,0,1-.547.075c-.369-.039-.736-.125-1.1-.192a8.483,8.483,0,0,1,.155-1.986c.707-2.133,1.991-1.837,3.23-1.763,2.755.164,5.509.4,8.261.636,2.384.2,4.767.417,7.148.672,2.2.235,4.394.551,6.593.793,2.278.25,4.558.436,6.836.682,1.862.2,3.719.511,5.582.66q2.982.24,5.97.259c1.912.014,3.827-.033,5.734-.176,2.01-.152,4.012-.449,6.018-.683a2.25,2.25,0,0,1,.313-.04c1.961.047,3.926.206,5.882.121,2.246-.1,4.483-.435,6.726-.623.859-.072,1.725-.008,2.588-.024,2.094-.039,4.187-.131,6.281-.12a44.331,44.331,0,0,0,4.922.16,35.815,35.815,0,0,1,5.489.325,25.313,25.313,0,0,1,2.82.4c.551.088.746.492.624,1.226a1.18,1.18,0,0,0-.012.452c.735.394.378.745-.016,1.046-.476.366-.972.682-1.456,1.027a1.857,1.857,0,0,0-.233.236,3.36,3.36,0,0,0,.292.248c.128.085.265.148.4.22a2.392,2.392,0,0,0-.325.355,5.321,5.321,0,0,0-.674,1.2.646.646,0,0,0,.5.878c.464.133.935.21,1.4.335.074.02.131.167.2.255a.662.662,0,0,1-.226.05,6.969,6.969,0,0,0-1.015-.14c-.144,0-.283.221-.425.341.126.156.241.421.38.45.869.183,1.744.309,2.616.462a1.6,1.6,0,0,1,.608.181.741.741,0,0,1,.115.48c-.462.514-.9,1.1-1.6.9-.608-.173-1.229-.254-1.844-.372-.1-.02-.231-.084-.309-.029-.65.46-1.234-.062-1.843-.229a.254.254,0,0,0-.25.118,4.269,4.269,0,0,0-.393.958,3.5,3.5,0,0,0,.027.862,4.94,4.94,0,0,0,.566-.376,1.779,1.779,0,0,0,.255-.39c.007.191.017.381.021.572.018.8-.2,1.258-.854,1.216a8.027,8.027,0,0,0-1.477.047c-.215.026-.645-.365-.589.414-.3.012-.72.2-.882,0-.523-.646-.811-.779-1.367-.3-.189.162-.388.3-.582.452.242.01.484.036.725.026a5.9,5.9,0,0,0,.615-.093c-.015.086-.01.223-.048.252a3.052,3.052,0,0,1-.781.508c-.263.087-.661-.142-.814.048-.9,1.117-2.053.481-3.051.863-.157.06-.35-.049-.526-.08a1.515,1.515,0,0,0,.312-.369.661.661,0,0,0-.082-.377c-.3.017-.6.072-.9.118-.471.073-.941.182-1.413.213-1.272.085-2.522-.737-3.812-.235a1.45,1.45,0,0,1-.781-.073.371.371,0,1,1,.039-.565c.2-.067.423-.015.624-.081.139-.046.256-.2.384-.312a2.473,2.473,0,0,1-.362-.068c-.1-.033-.266-.082-.279-.16-.1-.586-.111-1.374-.655-.357-.033-.042-.1-.1-.1-.123a1.169,1.169,0,0,1,.133-.455,4.647,4.647,0,0,1,.565-.492,8.058,8.058,0,0,0-.882-.2,2.274,2.274,0,0,0-.647.051,2.092,2.092,0,0,0-.387.146c.08.239.147.669.244.684.369.059.712.237.555.751-.117.382-.553.888-.791.834-1.188-.273-2.306.593-3.549.066-.816-.346-1.8.086-2.708.147-.141.009-.288-.106-.432-.164a3.193,3.193,0,0,1,.363-.681c.648-.7,1.345-.071,2.019-.033.364.02.686.134.716-.6,0-.108.411-.291.606-.241.343.089.625.059.639-.448a.86.86,0,0,0-.443-.629,3.731,3.731,0,0,0-1.47-.15,19.2,19.2,0,0,1-5.315.091,7.459,7.459,0,0,0-1.925.14.522.522,0,0,0-.265.389c.045.238.184.619.292.626a1.479,1.479,0,0,0,.818-.24,1.461,1.461,0,0,1,1.581-.155c.413.218.927.041,1.394.1a2.418,2.418,0,0,1,.641.283,5.828,5.828,0,0,0-.373.553,1.246,1.246,0,0,0-.128.448c-.069.647-.337.814-.785.693-.632-.17-1.27-.3-1.907-.431-.177-.035-.4-.092-.537.019-1.131.941-2.389.838-3.641.825-1.691-.018-3.385-.095-5.071,0-2.856.158-5.705.447-8.559.643-1.037.071-2.08.01-3.119.056-.486.022-.968.169-1.454.237-.652.092-1.306.153-1.957.246-1.162.165-2.32.366-3.484.508-.622.075-1.251.052-1.876.082-.47.022-.939.061-1.408.087-.907.052-1.818.058-2.721.17a4.084,4.084,0,0,0-1.154.485c-.169.081-.319.306-.484.317a22.289,22.289,0,0,1-2.659.083,2.692,2.692,0,0,0-1.337,0c-.368.156-.818-.038-1.231-.079-.1-.01-.219-.09-.3-.041a5.14,5.14,0,0,1-3.38,1.068,25.867,25.867,0,0,0-2.833.59c-1.607.274-3.224.449-4.827.75-.837.156-1.651.509-2.481.742-.952.266-1.926.42-2.86.771-.715.268-1.363.849-2.076,1.137a14.342,14.342,0,0,1-1.829.364,16.685,16.685,0,0,1-1.714.571,4.228,4.228,0,0,1-1.6-.185,7.2,7.2,0,0,1,.027-1.184,2.925,2.925,0,0,1,.143-.545,1.989,1.989,0,0,0-.459-.093.935.935,0,0,0-.378.137c-.353.186-.66.212-.863-.353a2.1,2.1,0,0,1-.076-1.556,4.424,4.424,0,0,1,2.14-2.572c.444-.3.425-.422.045-.961a.277.277,0,0,1-.023-.193.973.973,0,0,1,.2-.15l.775-.558a5.2,5.2,0,0,0-.922.2,1.55,1.55,0,0,1-2.1-.889.964.964,0,0,1,.08-.719c.441-.377,1.118-.347,1.085-1.448-.006-.2.314-.42.484-.631a6.661,6.661,0,0,1-.783-.093,2.692,2.692,0,0,1-1.665-1.512.438.438,0,0,1-.018-.3c.4-.444-.018-.362-.153-.421-.433-.188-.884-.311-1.3-.542-.677-.371-.381-1.028-.194-1.591a2.714,2.714,0,0,1,2.5-2.055c1.413-.145,2.828-.261,4.242-.39Zm55.051,8.667c.127.047.257.143.381.132.329-.029.973.366.6-.751-.019-.056.174-.244.268-.37.482.8.971.287,1.479.081.183-.075.6-.168.294.508-.284.623.423.3.421.7.18-.025.437.044.525-.092a4.749,4.749,0,0,0,.593-1.273,1.271,1.271,0,0,0-.15-.828,13.4,13.4,0,0,0-1.856-.259c-.047-.005-.1.145-.15.224.491.489.069.311-.114.291-.221-.023-.441-.075-.662-.09-.516-.036-1.033-.069-1.55-.076a2.761,2.761,0,0,0-.567.107c.155.114.311.225.464.343.17.131.337.269.505.4-.188.039-.377.07-.564.12a2.732,2.732,0,0,0-.328.133c.055.109.105.224.167.324.083.136.176.26.265.39-.493.011-.9-.031-.755-1,.034-.221-.292-.78-.463-.791a4.823,4.823,0,0,0-2.081.157,1.562,1.562,0,0,1-1.509-.22c-.334-.219-.521-.177-.737.1-.814,1.054-1.739.609-2.618.247a1.2,1.2,0,0,0-1.343.087c-.265.2-.7.373-.928.206a1.015,1.015,0,0,0-1.581.238c-.52.629.864,1.1.116,1.784.049.021.1.072.145.058.317-.112.812-.107.913-.379.416-1.119,1.18-.638,1.785-.851a.212.212,0,0,1,.212.084c.26.4.254.388.549.347a12.34,12.34,0,0,1,2.173-.232c.33.014.456.123.456-.444,0-.493.2-.624.479-.179.078.123.291.248.363.19.3-.245.523-.2.569.3.053.587.327.475.465.235.628-1.088,1.524-.4,1.9-.007C386.875,2841.354,387.385,2841.179,388.013,2840.626Zm-18.793,1.552.38.029a1.85,1.85,0,0,1-.353-.271c-.177-.212-.333-.456-.5-.687.229-.158.469-.471.686-.44a7.815,7.815,0,0,1,1.185.478c.18.059.527.05.556-.057.2-.72.633-.175.881-.353.282-.2.456-.67.694-1a3.264,3.264,0,0,1,.414-.408c-.192-.039-.4-.158-.574-.1-1.261.4-2.489,1.1-3.839.566-.077-.03-.241.207-.317.364C368,2841.2,368.358,2842.053,369.22,2842.178Zm-4.112-1.32c-.774-.364-.363.445-.33.722.021.179.316.275.419.475.055.107-.035.354-.06.538.191-.1.379-.206.575-.282.066-.026.15.038.227.051.143.025.286.042.429.062-.1-.132-.193-.267-.292-.4a2.453,2.453,0,0,1-.277-.36c-.019-.037.078-.185.121-.282.724.711,1.144-.388,1.726-.526.079-.018.129-.25.193-.383-.085-.072-.166-.2-.254-.206a1.423,1.423,0,0,0-.544.031C366.395,2840.476,365.752,2840.671,365.108,2840.858Zm-3.774,1.128a4.446,4.446,0,0,0,.62-.026c.057-.009.1-.158.149-.243-.232-.207-.471-.6-.7-.587a12.036,12.036,0,0,0-1.91.369c-.835.184-1.67.373-2.5.574a1.233,1.233,0,0,0-.324.213,1.074,1.074,0,0,0,.361.1C358.467,2842.258,359.9,2842.12,361.334,2841.986Zm-14.939,2.457c.628-.186,1.361-.4,2.094-.622.25-.075.5-.156.75-.234a6.794,6.794,0,0,0-.873-.437c-.135-.046-.3.06-.449.115a10.777,10.777,0,0,1-1.279.465c-.2.047-.435-.159-.655-.171a1.539,1.539,0,0,0-.679.134c-.094.04-.145.256-.216.392a3.335,3.335,0,0,0,.564.282A4.329,4.329,0,0,0,346.395,2844.443Zm-7.176-13.3c-.271.054-.634.11-.991.207-.112.031-.206.174-.307.266.124.087.254.26.372.248.936-.1,1.869-.227,2.8-.361.088-.012.166-.122.249-.187-.1-.071-.209-.2-.313-.2C340.459,2831.1,339.886,2831.126,339.219,2831.141Z"
                          transform="translate(-325.993 -2824.558)"
                          fill="#fff"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="81.177"
                        height="26.022"
                        viewBox="0 0 81.177 26.022"
                        className="scribble-two"
                      >
                        <path
                          id="Path_101"
                          data-name="Path 101"
                          d="M766.13,2838.034c-.98.008-1.961.01-2.942.032-.112,0-.224.117-.336.18a4.269,4.269,0,0,0,.234.425,4.374,4.374,0,0,1,.306.364c.165.3.476.777.435.91a5.367,5.367,0,0,1-.636,1.2.974.974,0,0,1-.249.224.923.923,0,0,0,.285.089c.145,0,.292-.088.435-.066.293.045.583.137.875.21a10.62,10.62,0,0,1-.143,1.983c-.582,2.121-1.6,1.8-2.582,1.711-2.186-.209-4.371-.491-6.554-.77-1.891-.241-3.782-.494-5.67-.787-1.744-.27-3.484-.622-5.228-.9-1.806-.287-3.615-.51-5.422-.793-1.476-.231-2.948-.571-4.426-.75-1.577-.192-3.159-.307-4.739-.355a44.1,44.1,0,0,0-4.555.083c-1.6.119-3.19.384-4.785.586a1.457,1.457,0,0,1-.25.035c-1.556-.079-3.115-.27-4.669-.216-1.785.062-3.565.363-5.348.514-.683.058-1.37-.02-2.055-.018-1.663.006-3.326.063-4.989.019a27.979,27.979,0,0,0-3.907-.239,22.776,22.776,0,0,1-4.356-.414,16.209,16.209,0,0,1-2.236-.451c-.437-.1-.587-.5-.483-1.236a1.521,1.521,0,0,0,.014-.452c-.58-.405-.293-.75.022-1.045.382-.358.779-.666,1.168-1a1.867,1.867,0,0,0,.186-.232,2.842,2.842,0,0,0-.229-.253c-.1-.088-.209-.152-.313-.227a2.249,2.249,0,0,0,.261-.35,5.724,5.724,0,0,0,.546-1.187.669.669,0,0,0-.388-.886c-.367-.141-.741-.225-1.109-.358-.059-.021-.1-.168-.154-.258.06-.017.122-.058.18-.046a4.5,4.5,0,0,0,.805.156c.114,0,.227-.216.34-.334-.1-.158-.186-.425-.3-.456-.689-.2-1.383-.337-2.074-.5a1.089,1.089,0,0,1-.481-.19.9.9,0,0,1-.086-.482c.372-.506.722-1.089,1.278-.877a14.041,14.041,0,0,0,1.461.4c.082.022.183.088.245.034.521-.449.98.082,1.462.258a.186.186,0,0,0,.2-.113,4.874,4.874,0,0,0,.322-.952,4.474,4.474,0,0,0-.013-.862,4.018,4.018,0,0,0-.453.366,1.884,1.884,0,0,0-.207.387c0-.191-.009-.382-.011-.573-.006-.8.176-1.254.691-1.2a5.069,5.069,0,0,0,1.173-.023c.171-.022.509.375.472-.4.239-.007.574-.192.7.011.409.655.637.792,1.083.324.151-.159.311-.3.466-.443a5.287,5.287,0,0,0-.575-.037,3.6,3.6,0,0,0-.49.083c.013-.086.01-.224.041-.252a2.469,2.469,0,0,1,.625-.5c.21-.082.524.152.647-.035.726-1.1,1.636-.448,2.432-.814.125-.057.277.056.416.09a1.439,1.439,0,0,0-.25.364.781.781,0,0,0,.061.377,5.976,5.976,0,0,0,.712-.1,10.7,10.7,0,0,1,1.125-.191c1.011-.063,1.995.778,3.025.3.188-.088.414.027.619.086a2.731,2.731,0,0,1,.46.23,2.884,2.884,0,0,1-.5.334c-.16.064-.337.008-.5.071-.11.044-.206.2-.308.306a1.605,1.605,0,0,1,.287.073c.079.035.21.086.22.165.072.588.075,1.376.517.367.026.043.078.1.073.126a1.349,1.349,0,0,1-.11.452,3.968,3.968,0,0,1-.453.483,5.335,5.335,0,0,0,.7.21,1.441,1.441,0,0,0,.514-.04,1.506,1.506,0,0,0,.309-.14c-.062-.241-.11-.671-.187-.688-.293-.065-.564-.249-.434-.76.1-.38.448-.879.636-.821.941.292,1.838-.556,2.82-.009.644.36,1.429-.057,2.151-.1.113-.007.228.111.342.171a3.556,3.556,0,0,1-.294.675c-.523.685-1.069.049-1.6,0-.29-.026-.544-.145-.575.591,0,.107-.329.284-.483.231-.272-.1-.5-.069-.512.438a.884.884,0,0,0,.345.636,2.4,2.4,0,0,0,1.166.174,12.1,12.1,0,0,1,4.222,0,4.752,4.752,0,0,0,1.53-.11c.082-.012.228-.285.214-.385-.033-.238-.14-.621-.226-.63a1,1,0,0,0-.651.226.969.969,0,0,1-1.258.13c-.326-.225-.736-.056-1.105-.119a1.787,1.787,0,0,1-.507-.292c.1-.181.214-.349.3-.548a1.511,1.511,0,0,0,.106-.446c.061-.645.275-.808.63-.68.5.181,1.005.323,1.51.462.141.038.32.1.426-.01a3.344,3.344,0,0,1,2.9-.766c1.342.045,2.686.149,4.026.083,2.269-.112,4.536-.355,6.8-.505.824-.054,1.652.024,2.477-.006a10.189,10.189,0,0,0,1.157-.213c.518-.082,1.038-.132,1.557-.214.924-.147,1.846-.329,2.771-.452.495-.065.994-.032,1.491-.052.373-.014.746-.045,1.119-.065.721-.037,1.444-.028,2.162-.126a2.875,2.875,0,0,0,.922-.466c.135-.078.256-.3.387-.309a14.032,14.032,0,0,1,2.112-.039c.356.03.684.213,1.063.02.293-.15.648.051.976.1.079.012.173.093.235.046a3.5,3.5,0,0,1,2.694-1.013,16.944,16.944,0,0,0,2.256-.545c1.279-.247,2.565-.4,3.841-.671a20.3,20.3,0,0,0,1.977-.7,22.633,22.633,0,0,0,2.279-.725c.57-.257,1.091-.827,1.66-1.1a9.43,9.43,0,0,1,1.456-.334,11.428,11.428,0,0,1,1.367-.543,2.7,2.7,0,0,1,1.268.211,8.96,8.96,0,0,1-.033,1.183,3.5,3.5,0,0,1-.118.543,1.3,1.3,0,0,0,.363.1.653.653,0,0,0,.3-.131c.282-.18.526-.2.681.366a2.606,2.606,0,0,1,.046,1.558,4.252,4.252,0,0,1-1.725,2.538c-.356.288-.342.414-.045.959a.348.348,0,0,1,.016.193.8.8,0,0,1-.163.147l-.621.546a3.437,3.437,0,0,0,.733-.188c.676-.329,1.239-.052,1.658.923a1.184,1.184,0,0,1-.07.718c-.354.369-.891.329-.876,1.43,0,.2-.254.415-.391.623a4.414,4.414,0,0,1,.622.106,2.426,2.426,0,0,1,1.306,1.539.542.542,0,0,1,.012.3c-.319.437.011.362.117.423a10.935,10.935,0,0,1,1.032.563c.534.382.292,1.034.138,1.594-.4,1.444-1.145,1.92-2,2.014-1.124.122-2.248.216-3.373.322Zm-43.631-9.555c-.1-.049-.2-.147-.3-.138-.262.024-.769-.381-.481.741.015.057-.14.241-.216.366-.375-.806-.768-.3-1.174-.1-.146.072-.479.159-.228-.512.231-.619-.333-.31-.327-.711-.144.021-.347-.052-.419.083a5.338,5.338,0,0,0-.483,1.264,1.557,1.557,0,0,0,.111.83,8.644,8.644,0,0,0,1.471.289c.037.005.081-.144.121-.222-.384-.5-.051-.312.094-.29.175.027.349.083.525.1.41.044.82.085,1.23.1a1.779,1.779,0,0,0,.451-.1c-.121-.117-.244-.23-.365-.351s-.265-.274-.4-.411c.15-.036.3-.064.449-.11a1.854,1.854,0,0,0,.262-.129c-.043-.109-.081-.225-.129-.326-.065-.137-.138-.263-.207-.394.392,0,.715.046.589,1.017-.028.22.225.785.36.8a3.08,3.08,0,0,0,1.655-.124,1.045,1.045,0,0,1,1.2.244c.263.224.412.185.586-.091.657-1.041,1.388-.581,2.082-.2a.8.8,0,0,0,1.067-.066c.213-.2.563-.362.739-.191.484.471.88.347,1.258-.213.419-.619-.676-1.117-.074-1.785-.039-.022-.082-.074-.116-.06-.252.106-.645.094-.728.364-.342,1.112-.943.619-1.426.822a.156.156,0,0,1-.168-.087c-.2-.408-.2-.392-.432-.356a7.842,7.842,0,0,1-1.728.2c-.262-.018-.361-.13-.366.438-.005.492-.162.62-.383.17-.061-.124-.228-.252-.286-.2-.245.241-.417.2-.449-.309-.036-.588-.255-.479-.367-.242-.51,1.077-1.214.373-1.505-.024C723.409,2827.77,723,2827.936,722.5,2828.479Zm14.939-1.248-.3-.035a1.549,1.549,0,0,1,.278.277c.139.214.26.461.389.694-.184.155-.377.464-.55.429a5.55,5.55,0,0,1-.936-.5c-.143-.062-.418-.059-.442.048-.165.717-.5.165-.7.339a4.626,4.626,0,0,0-.561.987,2.95,2.95,0,0,1-.333.4c.152.042.315.164.455.112,1.005-.376,1.988-1.063,3.054-.5.061.031.194-.2.255-.359C738.4,2828.226,738.121,2827.369,737.438,2827.231Zm3.252,1.386c.611.376.293-.439.27-.717-.015-.179-.249-.28-.329-.481a1.713,1.713,0,0,1,.053-.537,5.065,5.065,0,0,1-.459.272c-.053.025-.119-.04-.18-.055-.113-.026-.226-.046-.34-.068.076.133.15.27.228.4a2.479,2.479,0,0,1,.216.365c.015.038-.063.184-.1.28-.567-.722-.911.37-1.375.5-.063.017-.1.248-.157.38.066.073.13.2.2.21a.9.9,0,0,0,.432-.023C739.664,2828.978,740.177,2828.793,740.69,2828.617Zm3.008-1.067a2.781,2.781,0,0,0-.492.016c-.046.008-.081.156-.121.24.182.211.368.607.546.6a7.865,7.865,0,0,0,1.521-.338c.665-.171,1.329-.346,1.992-.534.091-.026.173-.136.259-.208-.1-.036-.192-.112-.285-.1C745.978,2827.324,744.838,2827.439,743.7,2827.55Zm11.888-2.216c-.5.176-1.085.381-1.669.588-.2.071-.4.148-.6.222a5.049,5.049,0,0,0,.689.452c.107.048.239-.055.358-.108a7.354,7.354,0,0,1,1.02-.444c.163-.044.344.166.519.181a1,1,0,0,0,.54-.122c.075-.04.118-.254.176-.389a2.5,2.5,0,0,0-.446-.291A2.823,2.823,0,0,0,755.586,2825.334Zm5.568,13.417c.215-.05.5-.1.789-.191.089-.029.165-.171.246-.261-.1-.089-.2-.264-.293-.254-.744.083-1.487.2-2.229.315-.069.011-.133.12-.2.183.082.073.163.206.246.209C760.169,2838.769,760.623,2838.755,761.154,2838.751Z"
                          transform="translate(-690.523 -2819.343)"
                          fill="#fff"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: p.plans.description }} />
                <ButtonInvert link={p.plans.link}>Find out more</ButtonInvert>
              </div>
            )
          })}
        </PlanInner>
      </Wrapper>
    </PlanSection>
  )
}

export default HomepagePlans
