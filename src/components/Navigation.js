import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

const NavStyles = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background: var(--black);
  z-index: 9999;
  overflow: scroll;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  .button-container {
    display: flex;
    padding: 30px;
    justify-content: flex-end;
    .close-button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      height: 45px;
      width: 45px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .links {
    display: flex;
    padding: 0px 60px;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      padding: 0 30px;
    }
    a {
      color: var(--white);
      font-family: var(--heading);
      text-decoration: none;
      font-size: 3rem;
      display: inline-block;
      position: relative;
      margin-bottom: 16px;
      @media screen and (max-width: 800px) {
        font-size: 2.2rem;
      }
      :last-child {
        margin-bottom: 0;
      }
      :hover {
        .underline-svg {
          opacity: 1;
        }
      }
      .underline-svg {
        position: absolute;
        left: 0;
        top: 75%;
        opacity: 0;
        transition: 0.3s ease opacity;
      }
    }
  }
`

const Navigation = ({ setMenuOpen }) => {
  const menuData = useStaticQuery(graphql`
    {
      allWpAcf(filter: { slug: { eq: "menu" } }) {
        nodes {
          menu {
            signUpLink
            menuItems {
              menuItem {
                link
                pageName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <NavStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="button-container">
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.537"
              height="30.006"
              viewBox="0 0 20.537 30.006"
              whileTap={{ scale: 0.9 }}
            >
              <g
                id="Group_150"
                data-name="Group 150"
                transform="translate(-811.861 -606.122)"
              >
                <path
                  id="Path_126"
                  data-name="Path 126"
                  d="M832.4,612.106a1.91,1.91,0,0,1-.473,1.24c-.375.395-.642.89-.989,1.315-.409.5-.845.981-1.283,1.458q-1.867,2.034-3.747,4.055a.352.352,0,0,0-.038.49c.416.722.831,1.444,1.223,2.178.3.562.562,1.146.849,1.715.609,1.209,1.243,2.406,1.831,3.625.554,1.148,1.127,2.293,1.575,3.483.406,1.08.656,2.218.974,3.331.012.041.043.1.028.12-.271.271-.546.538-.828.8-.026.024-.146-.025-.151-.013-.182.483-.343.056-.5-.017-.122-.057-.258-.3-.271.068a.2.2,0,0,1-.083.116c-.075-.03-.194-.07-.2-.123-.08-.455-.482-.631-.743-.931a3.225,3.225,0,0,1-.375-.916c-.221-.549-.458-1.092-.669-1.645-.115-.3-.157-.634-.289-.927-.442-.98-.911-1.948-1.366-2.922a1.423,1.423,0,0,1-.064-.233,2.206,2.206,0,0,1,.186.134c.067.059.126.126.189.191a1.918,1.918,0,0,0-.08-.317,4.175,4.175,0,0,0-.207-.366c-.1-.169-.093-.168-.206,0a.133.133,0,0,1-.121-.012c-.221-.354-.454-.7-.646-1.072a9.582,9.582,0,0,1-.385-.937.12.12,0,0,1,.028-.1c.133-.115.139-.115.075-.237q-.732-1.411-1.467-2.821a.356.356,0,0,0-.063-.11,2.5,2.5,0,0,0-.2-.145c.024.069.044.14.073.207a1.1,1.1,0,0,1,.083.146.094.094,0,1,1-.151.095c-.333-.315-.4-.292-.683.029-.616.7-1.265,1.375-1.886,2.073-.593.665-1.161,1.354-1.753,2.019-.374.42-.783.81-1.159,1.229-.326.363-.6.776-.943,1.12-1.135,1.14-2.274,2.278-3.448,3.377a1.533,1.533,0,0,1-1.489.307c-.14-.036-.327.117-.494.178a1.516,1.516,0,0,1-.193.044c.012-.062,0-.137.038-.183.443-.611.891-1.218,1.339-1.826a2.275,2.275,0,0,1,.228-.294c.042-.041.125-.038.19-.055s.15-.011.163-.042c.192-.477.643-.743.932-1.146a15.034,15.034,0,0,1,1.047-1.093c.677-.768,1.333-1.554,2-2.333a1.606,1.606,0,0,1,.254-.285,1.556,1.556,0,0,0,.555-1.177,1.958,1.958,0,0,1,.967-1.018c.067-.015.183-.044.185-.073.026-.416.409-.509.633-.747.143-.152.138-.435.265-.613a9.041,9.041,0,0,1,.627-.687,7.452,7.452,0,0,0,1.086-1.318c.119-.225-.139-.648-.226-.982-.665-.162-.812-.8-.935-1.282-.1-.388-.4-.5-.542-.784-.163-.313-.35-.614-.537-.913-.165-.264-.347-.516-.517-.776-.617-.94-1.224-1.889-1.853-2.821-.727-1.078-1.487-2.134-2.206-3.216a1.835,1.835,0,0,1-.5-1.232.469.469,0,0,0-.091-.232c-.05-.092-.194-.213.075-.165.02,0,.061-.1.09-.161.059-.113.118-.227.174-.341.048-.1.154-.217.13-.293-.115-.358.138-.621.222-.92.094-.333.275-.34.532-.113a1.725,1.725,0,0,0,.385.188.781.781,0,0,1,.205.12,12.6,12.6,0,0,1,1.94,2.613c.58.958,1.248,1.863,1.86,2.8.579.89,1.133,1.8,1.7,2.691.629.988,1.275,1.965,1.892,2.96.394.636.386.656.885.132q1.169-1.227,2.314-2.478c.614-.667,1.218-1.344,1.821-2.021a3.968,3.968,0,0,0,.333-.441,1.247,1.247,0,0,1,.977-.578,2.671,2.671,0,0,0,.968-.443c.3-.181.536.084.807.087C832.333,611.912,832.386,612.084,832.4,612.106Z"
                  transform="translate(0 0)"
                  fill="#68db7e"
                />
              </g>
            </motion.svg>
          </button>
        </div>
        <div className="links">
          <a href={menuData.allWpAcf.nodes[0].menu.signUpLink}>
            Sign up
            <svg
              className="underline-svg"
              width="258.098"
              height="3.808"
              viewBox="0 0 258.098 3.808"
            >
              <g
                id="Group_149"
                data-name="Group 149"
                transform="translate(-677.189 -3514.931)"
              >
                <path
                  id="Path_66"
                  data-name="Path 66"
                  d="M901.239,3518.209c-.77-.1-2.156.134-2.588-.208a4.824,4.824,0,0,1-.528.062,8.733,8.733,0,0,1-1.218-.012,33.77,33.77,0,0,0-6.806-.229,1.4,1.4,0,0,0-.295.028,3.689,3.689,0,0,1-1.582.152c-1.275-.011-2.551-.011-3.823-.022a.936.936,0,0,1-.285-.094l.725-.085c-.318-.005-.64-.019-.954-.012a4.986,4.986,0,0,0-1.822.084c-.02.009-.393-.005-.587-.018-.636-.043-1.255-.122-1.9-.131q-8.631-.119-17.265-.217-6.994-.086-13.986-.169-5.5-.058-11.014-.1c-2.465-.02-5-.119-7.375-.023-1.7.069-3.185,0-4.757-.029-1.7-.033-3.379-.1-5.078-.129-.533-.007-1.1.088-1.651.137a.852.852,0,0,0,.213.092c.126.03.306.05.464.074-.158.011-.316.03-.476.031-.752,0-1.507.007-2.259,0-.19,0-.375-.032-.563-.049.179-.021.352-.047.54-.062.155-.012.332-.011.5-.015-.176-.014-.35-.038-.528-.039q-4.184-.019-8.369-.033c-.29,0-.64.025-.864,0a40.12,40.12,0,0,0-4.918,0,6.231,6.231,0,0,0-.992.064,18.792,18.792,0,0,1-4.6.2c-.446-.016-.924,0-1.383.013-.67.018-1.605.213-1.659-.146a16.747,16.747,0,0,0-2.058-.1c-2.062.018-4.122.061-6.179.1a9.375,9.375,0,0,0-1.465.082,7.317,7.317,0,0,1-2.862.175c-.46-.015-.931-.034-1.39-.027-1.968.03-3.93.079-5.9.1-2.362.029-4.81.128-7.068.033-1.994-.083-3.658.132-5.519.1-1.507-.027-3.041.019-4.565.026-.555,0-.876-.028-.231-.135.069-.012.089-.07.036-.078a27.282,27.282,0,0,0-2.969.173c-.981.1-2.074.168-3.144.19-1.644.034-3.312,0-4.963.024-4.54.054-9.074.131-13.614.178-3.886.04-7.78.038-11.666.082-1.6.018-3.182.138-4.783.161q-8.4.117-16.808.2c-5.148.051-10.3.082-15.449.126-2.542.022-3.262-.078-3.71-.566-.053-.059.247-.155.507-.2.393-.072.933-.106,1.34-.176a3.971,3.971,0,0,0,.974-.232,5.351,5.351,0,0,0-1.347-.32c-.755-.088-1.683-.1-2.487-.176-.784-.07-1.6-.164-.558-.38.156-.032.325-.091.3-.131-.3-.427,1.024-.4,2.316-.406q7.362-.04,14.723-.093c5.375-.034,10.752-.055,16.124-.109,3.742-.038,7.473-.137,11.213-.179,2.016-.023,4.044.036,6.06.019,1.605-.013,3.2-.121,4.8-.124,3.809-.01,7.572-.138,11.357-.191,3.376-.049,6.78.026,10.164,0,2.311-.02,4.609-.128,6.915-.2.521-.015,1.123-.06,1.561-.023a49.333,49.333,0,0,0,6.5-.032c1.086-.048,2.27.011,3.409.022.059,0,.126.008.173,0,2.376-.228,4.822.034,7.075-.031,5.731-.166,11.426.06,17.114-.084.633-.016,1.255-.056,1.884-.084a9.835,9.835,0,0,1,1.177-.04,39.079,39.079,0,0,0,5.542-.019c1.719.016,3.434.054,5.153.053,3.484,0,6.97-.029,10.454-.028,1.6,0,3.194.071,4.792.066,2.135-.007,4.268-.059,6.4-.083.489-.006,1.216-.174,1.463.073a2.789,2.789,0,0,0,.6.027,22.519,22.519,0,0,1,3.551-.006c1.506.026,3.031,0,4.54.019,2.707.036,5.4.1,8.111.132,1.55.017,3.116-.027,4.668-.015,1.977.016,3.941.077,5.917.091,2.012.015,4.035-.022,6.046,0q7.713.072,15.422.173c5.194.062,10.391.115,15.58.194,6.7.1,13.419.191,20.09.354,3.873.095,7.689.306,11.49.5,1.888.1,3.418.377,3.854.785.272.255-.635.534.851.778.651.107-.338.337-1.417.279-1.118-.06-1.075-.057-1.5.171a4.691,4.691,0,0,1-1,.057c-1.994-.076-3.959-.2-5.966-.243-2.759-.06-5.547-.058-8.321-.089-1.42-.016-2.835-.046-4.25-.075a.266.266,0,0,1-.176-.089c-.178-.255-1.049-.252-1.858-.2a71,71,0,0,1-8.861.046c-.334-.021-.745.013-1.12.022.293.037.569.084.883.108.556.043,1.136.07,1.707.1Zm-89-2.452-1.674.074c.414.028.846.048,1.234.087.247.026.4.093.642.121a7.925,7.925,0,0,0,1.228.1,34.2,34.2,0,0,1,4.862.052c1.47.075,3.015-.127,4.584-.022a6.049,6.049,0,0,0,1.063-.274c-.341-.046-.667-.1-1.029-.137-.306-.032-.731-.026-.969-.07a12.077,12.077,0,0,0-2.793-.074A38.968,38.968,0,0,1,812.239,3515.757Zm19.277.05a3.746,3.746,0,0,0-.72.133c-.053.051.215.158.443.173a21.279,21.279,0,0,0,2.185.081c3.132-.132,6.147.057,9.213.1.43.006.873-.026,1.308-.04a4.338,4.338,0,0,0-1.226-.354c-1.166-.035-2.394.032-3.6.043-1.666.015-3.338.034-5,.016C833.269,3515.948,832.439,3515.863,831.517,3515.807Zm-36.621.4.007.029c.576-.016,1.209-.074,1.717-.042,1.651.1.409-.257,1.1-.3-.332-.022-.66-.053-1-.063-.576-.015-1.166-.035-1.737-.022-1.207.028-2.416.066-3.6.124a2.058,2.058,0,0,0-.619.195c.277.028.549.078.83.08C792.69,3516.214,793.794,3516.206,794.9,3516.2Zm-16.592-.074a6.064,6.064,0,0,0,.727.144,63.791,63.791,0,0,0,7.355-.014,1.237,1.237,0,0,0,.409-.14,5.926,5.926,0,0,0-.745-.077,48.233,48.233,0,0,1-5.39-.036A22.479,22.479,0,0,0,778.3,3516.129Zm26,.091.005-.033c.633,0,1.276.009,1.9-.011.34-.011.643-.077.963-.118-.288-.047-.548-.105-.864-.138-2.1-.22-4.179.1-6.289.039a4.651,4.651,0,0,0-.8.133c.272.027.537.074.818.078C801.453,3516.193,802.879,3516.205,804.3,3516.22Zm59.619.126c.569.067.8.117,1.04.118q3.477.022,6.959.025a1.952,1.952,0,0,0,.439-.1,4.417,4.417,0,0,0-.706-.115q-3.165-.045-6.337-.063C864.952,3516.207,864.575,3516.279,863.921,3516.346Zm-124.5.382.078.041,1.125-.1a12.094,12.094,0,0,0-1.712-.242,24.477,24.477,0,0,0-4.037.212c-.176.03-.3.073-.452.11a6.1,6.1,0,0,0,.7.067C736.553,3516.794,737.984,3516.759,739.417,3516.728Z"
                  fill="#68db7e"
                />
              </g>
            </svg>
          </a>
          {menuData.allWpAcf.nodes[0].menu.menuItems.map((m, index) => {
            return (
              <>
                <Link key={index} to={m.menuItem.link}>
                  {m.menuItem.pageName}
                  <svg
                    className="underline-svg"
                    width="258.098"
                    height="3.808"
                    viewBox="0 0 258.098 3.808"
                  >
                    <g
                      id="Group_149"
                      data-name="Group 149"
                      transform="translate(-677.189 -3514.931)"
                    >
                      <path
                        id="Path_66"
                        data-name="Path 66"
                        d="M901.239,3518.209c-.77-.1-2.156.134-2.588-.208a4.824,4.824,0,0,1-.528.062,8.733,8.733,0,0,1-1.218-.012,33.77,33.77,0,0,0-6.806-.229,1.4,1.4,0,0,0-.295.028,3.689,3.689,0,0,1-1.582.152c-1.275-.011-2.551-.011-3.823-.022a.936.936,0,0,1-.285-.094l.725-.085c-.318-.005-.64-.019-.954-.012a4.986,4.986,0,0,0-1.822.084c-.02.009-.393-.005-.587-.018-.636-.043-1.255-.122-1.9-.131q-8.631-.119-17.265-.217-6.994-.086-13.986-.169-5.5-.058-11.014-.1c-2.465-.02-5-.119-7.375-.023-1.7.069-3.185,0-4.757-.029-1.7-.033-3.379-.1-5.078-.129-.533-.007-1.1.088-1.651.137a.852.852,0,0,0,.213.092c.126.03.306.05.464.074-.158.011-.316.03-.476.031-.752,0-1.507.007-2.259,0-.19,0-.375-.032-.563-.049.179-.021.352-.047.54-.062.155-.012.332-.011.5-.015-.176-.014-.35-.038-.528-.039q-4.184-.019-8.369-.033c-.29,0-.64.025-.864,0a40.12,40.12,0,0,0-4.918,0,6.231,6.231,0,0,0-.992.064,18.792,18.792,0,0,1-4.6.2c-.446-.016-.924,0-1.383.013-.67.018-1.605.213-1.659-.146a16.747,16.747,0,0,0-2.058-.1c-2.062.018-4.122.061-6.179.1a9.375,9.375,0,0,0-1.465.082,7.317,7.317,0,0,1-2.862.175c-.46-.015-.931-.034-1.39-.027-1.968.03-3.93.079-5.9.1-2.362.029-4.81.128-7.068.033-1.994-.083-3.658.132-5.519.1-1.507-.027-3.041.019-4.565.026-.555,0-.876-.028-.231-.135.069-.012.089-.07.036-.078a27.282,27.282,0,0,0-2.969.173c-.981.1-2.074.168-3.144.19-1.644.034-3.312,0-4.963.024-4.54.054-9.074.131-13.614.178-3.886.04-7.78.038-11.666.082-1.6.018-3.182.138-4.783.161q-8.4.117-16.808.2c-5.148.051-10.3.082-15.449.126-2.542.022-3.262-.078-3.71-.566-.053-.059.247-.155.507-.2.393-.072.933-.106,1.34-.176a3.971,3.971,0,0,0,.974-.232,5.351,5.351,0,0,0-1.347-.32c-.755-.088-1.683-.1-2.487-.176-.784-.07-1.6-.164-.558-.38.156-.032.325-.091.3-.131-.3-.427,1.024-.4,2.316-.406q7.362-.04,14.723-.093c5.375-.034,10.752-.055,16.124-.109,3.742-.038,7.473-.137,11.213-.179,2.016-.023,4.044.036,6.06.019,1.605-.013,3.2-.121,4.8-.124,3.809-.01,7.572-.138,11.357-.191,3.376-.049,6.78.026,10.164,0,2.311-.02,4.609-.128,6.915-.2.521-.015,1.123-.06,1.561-.023a49.333,49.333,0,0,0,6.5-.032c1.086-.048,2.27.011,3.409.022.059,0,.126.008.173,0,2.376-.228,4.822.034,7.075-.031,5.731-.166,11.426.06,17.114-.084.633-.016,1.255-.056,1.884-.084a9.835,9.835,0,0,1,1.177-.04,39.079,39.079,0,0,0,5.542-.019c1.719.016,3.434.054,5.153.053,3.484,0,6.97-.029,10.454-.028,1.6,0,3.194.071,4.792.066,2.135-.007,4.268-.059,6.4-.083.489-.006,1.216-.174,1.463.073a2.789,2.789,0,0,0,.6.027,22.519,22.519,0,0,1,3.551-.006c1.506.026,3.031,0,4.54.019,2.707.036,5.4.1,8.111.132,1.55.017,3.116-.027,4.668-.015,1.977.016,3.941.077,5.917.091,2.012.015,4.035-.022,6.046,0q7.713.072,15.422.173c5.194.062,10.391.115,15.58.194,6.7.1,13.419.191,20.09.354,3.873.095,7.689.306,11.49.5,1.888.1,3.418.377,3.854.785.272.255-.635.534.851.778.651.107-.338.337-1.417.279-1.118-.06-1.075-.057-1.5.171a4.691,4.691,0,0,1-1,.057c-1.994-.076-3.959-.2-5.966-.243-2.759-.06-5.547-.058-8.321-.089-1.42-.016-2.835-.046-4.25-.075a.266.266,0,0,1-.176-.089c-.178-.255-1.049-.252-1.858-.2a71,71,0,0,1-8.861.046c-.334-.021-.745.013-1.12.022.293.037.569.084.883.108.556.043,1.136.07,1.707.1Zm-89-2.452-1.674.074c.414.028.846.048,1.234.087.247.026.4.093.642.121a7.925,7.925,0,0,0,1.228.1,34.2,34.2,0,0,1,4.862.052c1.47.075,3.015-.127,4.584-.022a6.049,6.049,0,0,0,1.063-.274c-.341-.046-.667-.1-1.029-.137-.306-.032-.731-.026-.969-.07a12.077,12.077,0,0,0-2.793-.074A38.968,38.968,0,0,1,812.239,3515.757Zm19.277.05a3.746,3.746,0,0,0-.72.133c-.053.051.215.158.443.173a21.279,21.279,0,0,0,2.185.081c3.132-.132,6.147.057,9.213.1.43.006.873-.026,1.308-.04a4.338,4.338,0,0,0-1.226-.354c-1.166-.035-2.394.032-3.6.043-1.666.015-3.338.034-5,.016C833.269,3515.948,832.439,3515.863,831.517,3515.807Zm-36.621.4.007.029c.576-.016,1.209-.074,1.717-.042,1.651.1.409-.257,1.1-.3-.332-.022-.66-.053-1-.063-.576-.015-1.166-.035-1.737-.022-1.207.028-2.416.066-3.6.124a2.058,2.058,0,0,0-.619.195c.277.028.549.078.83.08C792.69,3516.214,793.794,3516.206,794.9,3516.2Zm-16.592-.074a6.064,6.064,0,0,0,.727.144,63.791,63.791,0,0,0,7.355-.014,1.237,1.237,0,0,0,.409-.14,5.926,5.926,0,0,0-.745-.077,48.233,48.233,0,0,1-5.39-.036A22.479,22.479,0,0,0,778.3,3516.129Zm26,.091.005-.033c.633,0,1.276.009,1.9-.011.34-.011.643-.077.963-.118-.288-.047-.548-.105-.864-.138-2.1-.22-4.179.1-6.289.039a4.651,4.651,0,0,0-.8.133c.272.027.537.074.818.078C801.453,3516.193,802.879,3516.205,804.3,3516.22Zm59.619.126c.569.067.8.117,1.04.118q3.477.022,6.959.025a1.952,1.952,0,0,0,.439-.1,4.417,4.417,0,0,0-.706-.115q-3.165-.045-6.337-.063C864.952,3516.207,864.575,3516.279,863.921,3516.346Zm-124.5.382.078.041,1.125-.1a12.094,12.094,0,0,0-1.712-.242,24.477,24.477,0,0,0-4.037.212c-.176.03-.3.073-.452.11a6.1,6.1,0,0,0,.7.067C736.553,3516.794,737.984,3516.759,739.417,3516.728Z"
                        fill="#68db7e"
                      />
                    </g>
                  </svg>
                </Link>
              </>
            )
          })}
        </div>
      </NavStyles>
    </>
  )
}

export default Navigation
