import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { BenefitsSection } from "../theSystem/BenefitsSection"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ImageSection = styled.section`
  width: 100%;
  background: var(--green);
  height: 100vh;
  min-height: 500px;
  position: relative;
`

export const BackgroundImageStyles = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .circle-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 500px) {
      width: 280px;
      height: 280px;
    }
    .rotate-container {
      position: relative;
      width: 100%;
      height: 100%;
      .svg-container {
        position: relative;
        width: 100%;
        height: 100%;
        svg {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`

const HomepageBigImage = ({ image }) => {
  const { scrollYProgress } = useViewportScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2000])

  const backgroundImage = [
    image,
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
  ].reverse()

  return (
    <ImageSection style={{ backgroundImage: image }}>
      <BackgroundImageStyles
        Tag="section"
        fluid={backgroundImage}
        backgroundColor={`var(--black)`}
      >
        <motion.div className="circle-svg">
          <motion.div
            className="rotate-container"
            initial={{ rotate: 0 }}
            animate={{ rotate: 1000 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <motion.div className="svg-container" style={{ rotate }}>
              <motion.svg
                width="263.057"
                height="263.476"
                viewBox="0 0 263.057 263.476"
              >
                <g
                  id="Group_180"
                  data-name="Group 180"
                  transform="translate(-1393.522 -137.49)"
                >
                  <g id="Group_178" data-name="Group 178">
                    <path
                      id="Path_163"
                      data-name="Path 163"
                      d="M1492.954,163.877a8.09,8.09,0,0,1,.362,5.379,5.563,5.563,0,0,1-2.073,2.967,7.953,7.953,0,0,1-2.146,1.168,6.836,6.836,0,0,1-4.413.319,7.242,7.242,0,0,1-3.072-1.856,11.166,11.166,0,0,1-2.342-3.5l3.76-1.73a6.265,6.265,0,0,0,2.547,2.927,2.2,2.2,0,0,0,1.958.121,2.712,2.712,0,0,0,1.637-2.109,3.488,3.488,0,0,0-.264-1.947,5.329,5.329,0,0,0-2.8-2.781q-1.644-.68-4.919-2.045a16.011,16.011,0,0,1-4.184-2.424,8.68,8.68,0,0,1-2.337-3.446,7.047,7.047,0,0,1,.358-6.513,6.569,6.569,0,0,1,3.356-2.575,7.346,7.346,0,0,1,4.1-.436,6.016,6.016,0,0,1,2.737,1.374,8.5,8.5,0,0,1,2.082,2.773l-3.637,2.19a4.878,4.878,0,0,0-1.922-2.216,2.114,2.114,0,0,0-1.871-.07,2.009,2.009,0,0,0-1.326,1.636,4.1,4.1,0,0,0,.278,2.162,6.369,6.369,0,0,0,3.027,3.167,15.16,15.16,0,0,0,2.455,1.033q1.869.645,2.507.945a15.338,15.338,0,0,1,3.449,2.094,11.533,11.533,0,0,1,1.1,1.037A8.088,8.088,0,0,1,1492.954,163.877Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_164"
                      data-name="Path 164"
                      d="M1510.445,138.266l4.5-.736.209,29.207-4.122.675-4.961-15.14.262,15.909-4.107.672-9.421-27.7,4.5-.736,4.744,14.887-.435-15.592,4.5-.736,4.744,14.887Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_165"
                      data-name="Path 165"
                      d="M1522.45,166.329l1.028-28.839,12.379.441-.154,4.348-8.032-.286-.282,7.9,5.866.209-.155,4.348-5.866-.209-.281,7.89,8.032.286-.155,4.348Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_166"
                      data-name="Path 166"
                      d="M1545.23,161.725l-2.4,6.27-4.428-.93,10.716-27.236,5.868,1.232-1.209,29.233-4.459-.936.356-6.7Zm5.44-14.813-3.918,10.8,3.159.664Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_167"
                      data-name="Path 167"
                      d="M1566.877,149.054l-4.336-1.592,1.5-4.084,12.743,4.678-1.5,4.085-4.321-1.587-8.448,23.005-4.084-1.5Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_168"
                      data-name="Path 168"
                      d="M1655.371,287.476q-.519,3.6-2.749,4.99a7.257,7.257,0,0,1-5.038.792l-4.15-.6a6.712,6.712,0,0,1-4.789-3.036l-12.94,1.392.669-4.645,11.168-1.071c.008-.127.021-.258.041-.393l.356-2.47-10.774-1.553.621-4.306,28.562,4.117Zm-7.26,1.575a2.207,2.207,0,0,0,2.843-2.092l.373-2.592-9.129-1.316-.373,2.592a2.362,2.362,0,0,0,.477,1.845,2.435,2.435,0,0,0,1.643.962Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_169"
                      data-name="Path 169"
                      d="M1624.627,295.2l27.433,8.956-3.845,11.777-4.136-1.351,2.494-7.64-7.52-2.455-1.821,5.579-4.136-1.35,1.821-5.579-7.5-2.451-2.495,7.64-4.136-1.35Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_170"
                      data-name="Path 170"
                      d="M1641.923,329.682a6.606,6.606,0,0,1-4.108,3.576,6.925,6.925,0,0,1-5.135-.675l-3.725-1.924a6.7,6.7,0,0,1-3.417-4,6.5,6.5,0,0,1,.411-5.209l1.152-2.231-9.672-4.995,2-3.865,25.64,13.24Zm-7.375-.889a2.5,2.5,0,0,0,1.931.243,2.4,2.4,0,0,0,1.44-1.289l1.2-2.326-8.195-4.232-1.2,2.326a2.365,2.365,0,0,0-.153,1.9,2.435,2.435,0,0,0,1.238,1.447Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_171"
                      data-name="Path 171"
                      d="M1611.606,324.911l23.3,17.022-7.308,10-3.513-2.566,4.741-6.49-6.387-4.666-3.463,4.739-3.513-2.566,3.462-4.74-6.375-4.657-4.741,6.49-3.513-2.566Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_172"
                      data-name="Path 172"
                      d="M1602.175,346.818l-3.807-5.529,3.275-3.123,16.375,24.26-4.34,4.137-23.405-17.556,3.3-3.144,5.319,4.088Zm9.127,12.874-6.682-9.347-2.336,2.228Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_173"
                      data-name="Path 173"
                      d="M1600.32,371.848l3.773-2.665,2.51,3.553-11.087,7.832-2.51-3.554,3.76-2.656-14.138-20.017,3.554-2.51Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_174"
                      data-name="Path 174"
                      d="M1458.444,356.945a8.093,8.093,0,0,1,4.148-3.443,5.563,5.563,0,0,1,3.62-.057,8.019,8.019,0,0,1,2.2,1.056,6.841,6.841,0,0,1,2.843,3.391,7.247,7.247,0,0,1,.293,3.577,11.156,11.156,0,0,1-1.468,3.95l-3.6-2.036a6.263,6.263,0,0,0,.881-3.778,2.2,2.2,0,0,0-1.047-1.658,2.713,2.713,0,0,0-2.669-.093,3.5,3.5,0,0,0-1.424,1.354,5.331,5.331,0,0,0-.617,3.895q.413,1.731,1.223,5.185a16.038,16.038,0,0,1,.484,4.812,8.681,8.681,0,0,1-1.425,3.912,7.051,7.051,0,0,1-5.49,3.524,6.569,6.569,0,0,1-4.051-1.214,7.328,7.328,0,0,1-2.753-3.067,6,6,0,0,1-.489-3.023,8.5,8.5,0,0,1,1.028-3.311l3.905,1.666a4.884,4.884,0,0,0-.671,2.855A2.114,2.114,0,0,0,1454.4,376a2.007,2.007,0,0,0,2.1.117,4.1,4.1,0,0,0,1.591-1.491,6.374,6.374,0,0,0,.8-4.309,15.215,15.215,0,0,0-.6-2.594q-.57-1.893-.7-2.586a15.313,15.313,0,0,1-.322-4.022,11.434,11.434,0,0,1,.194-1.5A8.083,8.083,0,0,1,1458.444,356.945Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_175"
                      data-name="Path 175"
                      d="M1459.614,348.676l-19.644,21.14-9.074-8.433,2.961-3.187,5.888,5.471,5.385-5.795-4.3-3.995,2.962-3.188,4.3,4,5.374-5.783-5.887-5.471,2.962-3.187Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_176"
                      data-name="Path 176"
                      d="M1439.383,337.256l5.92-3.165,2.737,3.6L1422.1,351.254l-3.626-4.775,20.064-21.3,2.755,3.629-4.657,4.828Zm-13.814,7.63,10.035-5.6-1.952-2.57Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_177"
                      data-name="Path 177"
                      d="M1407.5,328.344q-1.623-3.256-.579-5.668a7.259,7.259,0,0,1,3.691-3.518l3.753-1.87a6.709,6.709,0,0,1,5.666-.229l9.849-8.508,2.092,4.2-8.573,7.236c.066.109.129.224.19.346l1.113,2.234,9.742-4.854,1.94,3.895-25.829,12.868Zm5.074-5.426a2.205,2.205,0,0,0-1.147,3.338l1.167,2.343,8.256-4.113-1.168-2.343a2.359,2.359,0,0,0-1.442-1.246,2.433,2.433,0,0,0-1.9.144Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_178"
                      data-name="Path 178"
                      d="M1426.957,298.488a6.861,6.861,0,0,1-4.611,8.584l-15.14,4.54a6.89,6.89,0,1,1-3.957-13.2l3.152-.945,1.3,4.319-3.228.968a2.51,2.51,0,0,0-1.687,3.132,2.376,2.376,0,0,0,1.209,1.47,2.437,2.437,0,0,0,1.914.186l15.169-4.548a2.415,2.415,0,0,0,1.489-1.206,2.39,2.39,0,0,0,.192-1.891,2.438,2.438,0,0,0-1.208-1.5,2.4,2.4,0,0,0-1.908-.2l-3.8,1.141-1.3-4.319,3.849-1.154a6.874,6.874,0,0,1,8.569,4.615Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_179"
                      data-name="Path 179"
                      d="M1411.157,285.046l12.132-1.406.5,4.321-28.666,3.323-.5-4.322,12.18-1.411-.6-5.187-12.18,1.412-.5-4.322,28.665-3.323.5,4.322-12.132,1.407Z"
                      fill="#fff"
                    />
                  </g>
                  <g id="Group_179" data-name="Group 179">
                    <path
                      id="Path_180"
                      data-name="Path 180"
                      d="M1591.612,181.472a8.086,8.086,0,0,1-4.146,3.445,5.553,5.553,0,0,1-3.619.059,7.99,7.99,0,0,1-2.205-1.054,6.844,6.844,0,0,1-2.844-3.389,7.261,7.261,0,0,1-.3-3.578,11.16,11.16,0,0,1,1.467-3.95l3.6,2.034a6.269,6.269,0,0,0-.879,3.779,2.2,2.2,0,0,0,1.049,1.657,2.713,2.713,0,0,0,2.669.091,3.506,3.506,0,0,0,1.423-1.355,5.331,5.331,0,0,0,.615-3.9q-.412-1.731-1.226-5.185a16,16,0,0,1-.487-4.811,8.692,8.692,0,0,1,1.423-3.913,7.05,7.05,0,0,1,5.488-3.527,6.581,6.581,0,0,1,4.052,1.211,7.344,7.344,0,0,1,2.755,3.066,6,6,0,0,1,.49,3.023,8.518,8.518,0,0,1-1.026,3.312l-3.906-1.664a4.874,4.874,0,0,0,.669-2.856,2.111,2.111,0,0,0-1.039-1.557,2.006,2.006,0,0,0-2.1-.115,4.091,4.091,0,0,0-1.589,1.491,6.376,6.376,0,0,0-.793,4.309,15.213,15.213,0,0,0,.6,2.594q.571,1.895.7,2.586a15.271,15.271,0,0,1,.324,4.022,11.424,11.424,0,0,1-.193,1.5A8.092,8.092,0,0,1,1591.612,181.472Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_181"
                      data-name="Path 181"
                      d="M1590.447,189.741l19.631-21.15,9.08,8.427-2.96,3.189-5.891-5.468-5.381,5.8,4.3,3.993-2.96,3.189-4.3-3.993-5.371,5.786,5.891,5.468-2.96,3.188Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_182"
                      data-name="Path 182"
                      d="M1610.69,201.157l-5.919,3.168-2.738-3.6,25.932-13.572,3.628,4.773L1611.54,213.23l-2.757-3.628,4.655-4.83Zm13.81-7.636-10.032,5.6,1.953,2.57Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_183"
                      data-name="Path 183"
                      d="M1642.579,210.064q1.625,3.257.582,5.668a7.267,7.267,0,0,1-3.69,3.52l-3.752,1.871a6.712,6.712,0,0,1-5.666.231l-9.846,8.512-2.094-4.2,8.571-7.239c-.066-.108-.129-.224-.19-.346l-1.114-2.233-9.741,4.857-1.941-3.893,25.824-12.878Zm-5.071,5.429a2.208,2.208,0,0,0,1.146-3.339l-1.169-2.343-8.254,4.116,1.169,2.343a2.361,2.361,0,0,0,1.443,1.246,2.431,2.431,0,0,0,1.9-.146Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_184"
                      data-name="Path 184"
                      d="M1623.132,239.909a6.859,6.859,0,0,1,4.606-8.587l15.136-4.548a6.89,6.89,0,1,1,3.966,13.2l-3.152.947-1.3-4.319,3.227-.969a2.511,2.511,0,0,0,1.685-3.133,2.376,2.376,0,0,0-1.209-1.47,2.436,2.436,0,0,0-1.915-.185l-15.166,4.557a2.485,2.485,0,0,0-1.68,3.1,2.444,2.444,0,0,0,1.21,1.5,2.4,2.4,0,0,0,1.908.194l3.8-1.143,1.3,4.319-3.849,1.156a6.873,6.873,0,0,1-8.571-4.61Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_185"
                      data-name="Path 185"
                      d="M1638.94,253.341l-12.132,1.413-.5-4.321,28.664-3.34.5,4.321-12.178,1.419.6,5.186,12.179-1.419.5,4.321-28.663,3.341-.5-4.322,12.132-1.414Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_186"
                      data-name="Path 186"
                      d="M1557.089,374.6a8.087,8.087,0,0,1-.359-5.378,5.568,5.568,0,0,1,2.075-2.967,8.012,8.012,0,0,1,2.147-1.167,6.84,6.84,0,0,1,4.413-.316,7.237,7.237,0,0,1,3.071,1.859,11.136,11.136,0,0,1,2.34,3.5l-3.762,1.728a6.256,6.256,0,0,0-2.545-2.928,2.2,2.2,0,0,0-1.957-.123,2.711,2.711,0,0,0-1.639,2.108,3.507,3.507,0,0,0,.263,1.948,5.338,5.338,0,0,0,2.794,2.783q1.645.68,4.919,2.047a16.007,16.007,0,0,1,4.182,2.427,8.69,8.69,0,0,1,2.335,3.447,7.046,7.046,0,0,1-.362,6.513,6.573,6.573,0,0,1-3.357,2.573,7.344,7.344,0,0,1-4.1.433,5.993,5.993,0,0,1-2.736-1.376,8.51,8.51,0,0,1-2.081-2.773l3.638-2.188a4.874,4.874,0,0,0,1.921,2.217,2.112,2.112,0,0,0,1.87.07,2,2,0,0,0,1.327-1.634,4.093,4.093,0,0,0-.276-2.162,6.373,6.373,0,0,0-3.025-3.17,15.336,15.336,0,0,0-2.455-1.034q-1.867-.646-2.506-.946a15.371,15.371,0,0,1-3.448-2.1,11.414,11.414,0,0,1-1.1-1.038A8.093,8.093,0,0,1,1557.089,374.6Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_187"
                      data-name="Path 187"
                      d="M1539.585,400.2l-4.5.732-.192-29.207,4.122-.671,4.953,15.142-.253-15.908,4.107-.67,9.405,27.705-4.5.733L1548,383.165l.425,15.592-4.5.733-4.735-14.889Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_188"
                      data-name="Path 188"
                      d="M1527.6,372.128l-1.044,28.838-12.38-.448.158-4.348,8.031.291.287-7.9-5.866-.213.157-4.348,5.866.213.286-7.89-8.032-.291.157-4.347Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_189"
                      data-name="Path 189"
                      d="M1504.816,376.718l2.4-6.268,4.428.933-10.732,27.23-5.867-1.236,1.226-29.232,4.458.939-.36,6.7Zm-5.448,14.811,3.923-10.8-3.158-.665Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_190"
                      data-name="Path 190"
                      d="M1483.161,389.377l4.336,1.595-1.5,4.083-12.74-4.686,1.5-4.083,4.321,1.589,8.46-23,4.084,1.5Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_191"
                      data-name="Path 191"
                      d="M1394.744,250.914q.522-3.6,2.752-4.99a7.264,7.264,0,0,1,5.038-.79l4.15.6a6.71,6.71,0,0,1,4.787,3.038l12.941-1.385-.672,4.644-11.168,1.066c-.007.127-.021.258-.041.393l-.357,2.47,10.773,1.558-.623,4.306-28.56-4.132Zm7.261-1.572a2.207,2.207,0,0,0-2.844,2.091l-.375,2.591,9.129,1.32.375-2.591a2.361,2.361,0,0,0-.477-1.846,2.434,2.434,0,0,0-1.643-.962Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_192"
                      data-name="Path 192"
                      d="M1425.494,243.193l-27.427-8.972,3.852-11.774,4.135,1.352-2.5,7.639,7.518,2.46,1.825-5.579,4.135,1.353-1.825,5.579,7.5,2.454,2.5-7.638,4.135,1.352Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_193"
                      data-name="Path 193"
                      d="M1408.219,208.7a6.608,6.608,0,0,1,4.11-3.574,6.933,6.933,0,0,1,5.135.679l3.724,1.926a6.7,6.7,0,0,1,3.414,4.006,6.5,6.5,0,0,1-.414,5.208l-1.153,2.231,9.668,5-2,3.865-25.633-13.256Zm7.375.893a2.507,2.507,0,0,0-1.931-.244,2.409,2.409,0,0,0-1.441,1.288l-1.2,2.326,8.192,4.237,1.2-2.326a2.36,2.36,0,0,0,.154-1.9,2.434,2.434,0,0,0-1.237-1.448Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_194"
                      data-name="Path 194"
                      d="M1438.539,213.484l-23.29-17.038,7.314-10,3.511,2.569-4.745,6.486,6.384,4.671,3.466-4.737,3.511,2.569-3.465,4.737,6.371,4.661,4.746-6.486,3.511,2.568Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_195"
                      data-name="Path 195"
                      d="M1447.972,191.6l3.8,5.531-3.276,3.121-16.363-24.268,4.342-4.136,23.4,17.569-3.3,3.142-5.316-4.09Zm-9.12-12.879,6.677,9.35,2.337-2.225Z"
                      fill="#68db7e"
                    />
                    <path
                      id="Path_196"
                      data-name="Path 196"
                      d="M1449.848,166.561l-3.775,2.663-2.508-3.555,11.093-7.825,2.508,3.556-3.762,2.653,14.126,20.026-3.555,2.508Z"
                      fill="#68db7e"
                    />
                  </g>
                </g>
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </BackgroundImageStyles>
    </ImageSection>
  )
}

export default HomepageBigImage
