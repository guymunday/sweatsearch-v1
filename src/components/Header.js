import React, { useState } from "react"
import Wrapper from "./Wrapper"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import { motion, AnimatePresence } from "framer-motion"

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  width: 100%;
  z-index: 999;
`

const HeaderShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
  z-index: 998;
  pointer-events: none;
`

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  align-items: baseline;
  .logo {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .logo-mobile {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .hamburger {
    transition: 0.3s ease;
    @media screen and (max-width: 768px) {
      margin-left: 30px;
    }
  }
  .hamburger:hover {
    fill: var(--green) !important;
  }
  .buttons {
    display: flex;
    align-items: center;
    .sign-up {
      margin: 0 30px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .sign-up:hover {
      color: var(--green) !important;
    }
  }
`

const Header = ({ menuOpen, setMenuOpen, whiteLogo, monoLogo }) => {
  const [logoHover, setLogoHover] = useState(false)

  return (
    <>
      <HeaderShadow />
      <HeaderWrapper>
        <Wrapper>
          <HeaderContainer>
            <Link to="/" className="logo">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 119.664 19.932"
                onMouseEnter={() => setLogoHover(true)}
                onMouseLeave={() => setLogoHover(false)}
                style={{ width: 200, overflow: "visible" }}
              >
                <g id="Group_154" transform="translate(-43 -88)">
                  <g id="Group_153" transform="translate(43 88)">
                    <g id="Group_151" transform="translate(24.938 3.965)">
                      <path
                        id="Path_129"
                        fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                        d="M-6.197,8.626c0.056,1.111,1.055,1.927,2.593,1.927
				c1.312,0,2.242-0.574,2.242-1.444c0-1.185-1.019-1.312-2.408-1.482c-2.056-0.259-3.742-0.648-3.742-2.612
				c0-1.723,1.575-2.871,3.649-2.852c2.13,0.019,3.667,1.036,3.816,3.001h-1.52c-0.209-1.077-1.206-1.816-2.297-1.704
				c-1.278,0-2.148,0.574-2.148,1.444c0,1.036,0.982,1.13,2.316,1.297c2.112,0.26,3.834,0.704,3.834,2.797
				c0,1.759-1.667,2.852-3.741,2.852c-2.408,0-4.076-1.148-4.112-3.223L-6.197,8.626z"
                      />
                      <path
                        id="Path_130"
                        fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                        d="M2.194,2.291l2.352,7.687l2.482-7.687h1.407l2.353,7.687l2.463-7.687h1.538
				l-3.149,9.446H9.973l-2.28-7.02l-2.371,7.02l-1.667,0.019L0.6,2.292L2.194,2.291z"
                      />
                      <path
                        id="Path_131"
                        fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                        d="M19.753,2.18c2.593,0,4.408,1.685,4.482,4.482c0,0.204-0.019,0.426-0.037,0.649
				h-7.335V7.44c-0.086,1.6,1.141,2.967,2.741,3.053c0.08,0.004,0.161,0.005,0.241,0.003c1.242,0.087,2.37-0.722,2.686-1.927h1.537
				c-0.366,1.962-2.118,3.358-4.112,3.278c-2.832,0-4.686-1.945-4.686-4.835C15.27,4.106,17.085,2.18,19.753,2.18z M22.661,6.048
				c-0.076-1.479-1.336-2.618-2.816-2.542c-0.025,0.001-0.049,0.003-0.074,0.005c-1.456-0.016-2.681,1.087-2.816,2.537H22.661z"
                      />
                      <path
                        id="Path_132"
                        fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                        d="M34.44,10.348v1.389h-0.834c-1.259,0-1.685-0.537-1.704-1.463
				c-0.706,1.044-1.908,1.642-3.167,1.574c-2.072,0-3.482-1.036-3.482-2.763c0-1.889,1.312-2.945,3.799-2.945h2.778V5.493
				c0-1.223-0.871-1.963-2.353-1.963c-1.334,0-2.223,0.63-2.408,1.593h-1.52c0.222-1.852,1.723-2.945,4.001-2.945
				c2.408,0,3.799,1.204,3.799,3.408v4.076c0,0.463,0.241,0.685,0.63,0.685L34.44,10.348z M31.829,7.421h-2.927
				c-1.353,0-2.112,0.5-2.112,1.574c0,0.926,0.796,1.556,2.056,1.556c1.889,0,2.982-1.093,2.982-2.667L31.829,7.421z"
                      />
                      <path
                        id="Path_133"
                        fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                        d="M36.236,3.68h-1.704V2.291h1.704v-2.648h1.52v2.648h2.389V3.68h-2.389v5.575
				c0,0.796,0.276,1.093,1.036,1.093h1.648v1.389h-1.741c-1.815,0-2.463-0.796-2.463-2.463V3.68z"
                      />
                      <path
                        fill={whiteLogo ? "#68DB7E" : "000000"}
                        id="Path_134"
                        d="M42.941,8.848c0.074,1.352,1.259,2.186,3.019,2.186c1.538,0,2.686-0.704,2.686-1.815
				c0-1.389-1.297-1.612-2.832-1.833c-1.907-0.259-3.63-0.593-3.63-2.482c0-1.612,1.5-2.704,3.537-2.686
				c2.038,0.019,3.537,0.944,3.705,2.778h-0.944c-0.167-1.223-1.259-1.963-2.763-1.963c-1.556,0-2.612,0.723-2.612,1.796
				c0,1.312,1.297,1.463,2.741,1.667c2.003,0.276,3.742,0.685,3.742,2.667c0,1.667-1.63,2.686-3.631,2.686
				c-2.333,0-3.908-1.056-3.964-3.001L42.941,8.848z"
                      />
                      <motion.path
                        fill={whiteLogo ? "#68DB7E" : "000000"}
                        id="Path_135"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        d="M55.481,2.235c2.482,0,4.241,1.63,4.334,4.426c0.003,0.13-0.004,0.26-0.019,0.389h-7.65
				c-0.015,0.073-0.022,0.148-0.019,0.222c0.037,2.204,1.445,3.723,3.445,3.723c1.475,0.056,2.784-0.936,3.13-2.371h0.964
				c-0.383,1.906-2.076,3.263-4.02,3.223c-2.667,0-4.501-1.963-4.501-4.816C51.145,4.162,52.925,2.235,55.481,2.235z M58.834,6.254
				c0.007-1.755-1.41-3.183-3.165-3.19c-0.056,0-0.113,0.001-0.169,0.004c-1.774,0.009-3.228,1.413-3.297,3.186H58.834z"
                      />
                      <path
                        fill={whiteLogo ? "#68DB7E" : "000000"}
                        id="Path_136"
                        d="M70.371,10.866v0.87h-0.553c-0.734,0.116-1.424-0.386-1.54-1.12c-0.023-0.144-0.022-0.291,0.003-0.435
				V9.792c-0.657,1.362-2.085,2.18-3.592,2.056c-2.019,0-3.334-1.019-3.334-2.686c0-1.759,1.297-2.797,3.705-2.797h3.186V5.551
				c0-1.556-1.019-2.482-2.778-2.482c-1.575,0-2.575,0.76-2.816,1.908h-0.944c0.241-1.704,1.648-2.741,3.799-2.741
				c2.349,0,3.686,1.204,3.686,3.352v4.371c-0.06,0.438,0.247,0.842,0.685,0.901c0.049,0.007,0.098,0.009,0.148,0.006L70.371,10.866
				z M68.241,7.18h-3.26c-1.722,0-2.667,0.685-2.667,1.927c0,1.167,0.945,1.926,2.426,1.926c2.222,0,3.501-1.297,3.501-3.093V7.18z"
                      />
                      <path
                        fill={whiteLogo ? "#68DB7E" : "000000"}
                        id="Path_137"
                        d="M76.26,2.346v0.908h-0.611c-2.204,0-2.704,1.815-2.704,3.723v4.759H72V2.346h0.815l0.148,1.871
				c0.39-1.227,1.591-2.01,2.871-1.871H76.26z"
                      />
                      <path
                        fill={whiteLogo ? "#68DB7E" : "000000"}
                        id="Path_138"
                        d="M81.169,11.848c-2.648,0-4.446-1.963-4.446-4.835c0-2.852,1.834-4.779,4.482-4.779
				c1.927-0.134,3.638,1.223,3.946,3.13h-0.945c-0.31-1.409-1.599-2.383-3.039-2.297c-2.056,0-3.482,1.612-3.482,3.945
				s1.426,3.982,3.482,3.982c1.442,0.092,2.734-0.885,3.039-2.297h0.945C84.83,10.614,83.109,11.976,81.169,11.848z"
                      />
                      <path
                        id="Path_139"
                        fill={whiteLogo ? "#68DB7E" : "000000"}
                        d="M94.726,6.477v5.26h-0.944V6.514c0-2.223-1.111-3.408-2.908-3.408c-2.003,0-3.241,1.556-3.241,4.001v4.628
				h-0.948V-1.228h0.945v5.798c0.493-1.439,1.869-2.386,3.39-2.334C93.152,2.236,94.726,3.514,94.726,6.477z"
                      />
                    </g>
                    <g id="Group_152" transform="translate(0 0)">
                      <motion.path
                        initial={{ y: 0 }}
                        animate={{
                          y: logoHover ? [-70, 0] : 0,
                          transition: {
                            duration: 0.4,
                          },
                        }}
                        id="Path_140"
                        fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                        d="M11.513,11.968c-0.533-1.376-2.749-3.79-4.366-5.552
				c-0.394-0.43-0.735-0.801-1.002-1.105L5.98,5.125L5.817,5.312c-0.27,0.31-0.654,0.727-1.098,1.21L4.475,6.787l1.346,1.582
				c0.783,0.857,3.165,3.462,3.537,4.421c0.428,1.088,0.276,2.319-0.403,3.27c-0.681,0.999-1.813,1.594-3.022,1.589
				c-1.19,0.007-2.306-0.578-2.978-1.561c-0.485-0.682-0.707-1.516-0.627-2.349l0.01-0.093l-1.808-2.003l-0.128,0.327
				c-0.701,1.799-0.458,3.828,0.647,5.411c1.889,2.703,5.612,3.363,8.316,1.474c0.583-0.408,1.089-0.916,1.493-1.502
				C11.974,15.785,12.221,13.758,11.513,11.968z"
                      />
                      <motion.path
                        initial={{ opacity: 1 }}
                        animate={{
                          opacity: logoHover ? [0, 1] : 1,
                          transition: {
                            duration: 1,
                          },
                        }}
                        fill={whiteLogo ? "#68DB7E" : "#000000"}
                        id="Path_141"
                        d="M4.762,13.513c0.394,0.43,0.735,0.801,1.002,1.105l0.164,0.186l0.163-0.187
				c0.271-0.31,0.655-0.727,1.098-1.21l0.243-0.265l-1.345-1.582C5.305,10.705,2.922,8.099,2.551,7.14
				C2.122,6.053,2.274,4.822,2.954,3.871c0.681-0.999,1.813-1.595,3.022-1.589C7.167,2.275,8.283,2.86,8.955,3.844
				C9.439,4.526,9.662,5.36,9.581,6.193L9.572,6.286l1.807,2.003l0.128-0.327c0.701-1.798,0.459-3.828-0.647-5.411
				C8.971-0.152,5.248-0.812,2.545,1.077C1.962,1.485,1.456,1.994,1.052,2.579C-0.064,4.147-0.31,6.173,0.399,7.962
				C0.929,9.338,3.144,11.751,4.762,13.513z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
            <Link className="logo-mobile" to="/">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 17.25 28.859"
                style={{ width: 30 }}
              >
                <path
                  fill={whiteLogo || monoLogo ? "#ffffff" : "#68DB7E"}
                  d="M16.674,17.334c-0.772-1.993-3.979-5.487-6.321-8.038c-0.571-0.622-1.064-1.159-1.45-1.6L8.665,7.427
	l-0.236,0.27C8.037,8.146,7.482,8.75,6.838,9.449L6.486,9.832l1.948,2.29c1.133,1.24,4.582,5.012,5.119,6.4
	c0.621,1.575,0.401,3.357-0.584,4.734c-0.985,1.447-2.625,2.309-4.375,2.3c-1.723,0.01-3.339-0.837-4.311-2.26
	c-0.702-0.987-1.024-2.194-0.908-3.4l0.014-0.135l-2.617-2.9l-0.185,0.473c-1.015,2.604-0.664,5.542,0.937,7.833
	c2.736,3.914,8.126,4.868,12.04,2.132c0.844-0.59,1.575-1.325,2.16-2.172C17.341,22.858,17.699,19.924,16.674,17.334z"
                />
                <path
                  fill={whiteLogo ? "#68DB7E" : "#000000"}
                  d="M6.901,19.571c0.571,0.622,1.065,1.159,1.451,1.6l0.237,0.269l0.237-0.271
	c0.391-0.448,0.947-1.052,1.59-1.751l0.349-0.386l-1.947-2.29c-1.133-1.24-4.583-5.012-5.12-6.4
	C3.079,8.766,3.299,6.985,4.282,5.608c0.985-1.446,2.625-2.308,4.375-2.3c1.723-0.01,3.339,0.837,4.311,2.26
	c0.702,0.987,1.024,2.194,0.908,3.4l-0.013,0.135l2.616,2.9l0.185-0.473c1.015-2.604,0.664-5.542-0.936-7.833
	C12.994-0.218,7.604-1.176,3.689,1.558c-0.846,0.591-1.58,1.329-2.166,2.178c-1.615,2.269-1.971,5.202-0.946,7.792
	C1.352,13.527,4.56,17.02,6.901,19.571z"
                />
              </svg>
            </Link>
            <div className="buttons">
            
              <a
                className="sign-up"
                href="https://www.sweatsearch.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: whiteLogo ? "var(--white)" : "var(--black)" }}
              >
                Sign up
              </a>
              <motion.svg
                viewBox="0 0 100 80"
                width="30"
                height="30"
                onClick={() => setMenuOpen(!menuOpen)}
                role="button"
                style={{ fill: whiteLogo ? "#fff" : "#000" }}
                whileTap={{ scale: 0.9 }}
                className="hamburger"
              >
                <rect width="100" height="8"></rect>
                <rect y="30" width="100" height="8"></rect>
                <rect y="60" width="100" height="8"></rect>
              </motion.svg>
            </div>
          </HeaderContainer>
        </Wrapper>
      </HeaderWrapper>
      <AnimatePresence>
        {menuOpen && (
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
