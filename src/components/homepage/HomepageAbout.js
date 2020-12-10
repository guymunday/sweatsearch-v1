import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Wrapper from "../Wrapper"
import Button from "../buttons/Button"
import ParallaxBox from "../ParallaxBox"
import { motion } from "framer-motion"

export const AppSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  .inner {
    flex: 1;
    padding: 100px 0;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .copy {
      max-width: 350px;
      position: relative;
      @media screen and (max-width: 600px) {
        max-width: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 3rem;
      }
      div {
        margin: 30px 0;
      }
      .copy-inner {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: 3rem;
        }
        p {
          margin-top: 30px;
        }
      }
    }
  }
  .app-mockup {
    flex: 1;
    max-width: 500px;
    margin-bottom: -150px;
    z-index: 2;
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`

const HomepageAbout = ({ data }) => {
  return (
    <Wrapper>
      <AppSection>
        <div className="app-mockup">
          <ParallaxBox yOffset={150} triggerPoint={0.7}>
            <Img
              fluid={data.appImage.localFile.childImageSharp.fluid}
              alt="SweatSearch App"
            />
          </ParallaxBox>
        </div>
        <div className="inner">
          <div className="copy">
            <h2>{data.title}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="209.231"
              height="3.808"
              viewBox="0 0 209.231 3.808"
            >
              <g transform="translate(-677.189 -3514.931)">
                <motion.path
                  id="Path_66"
                  data-name="Path 66"
                  d="M858.818,3518.209c-.624-.1-1.748.134-2.1-.208a3.207,3.207,0,0,1-.428.062,5.744,5.744,0,0,1-.987-.012,22.243,22.243,0,0,0-5.518-.229.932.932,0,0,0-.239.028,2.463,2.463,0,0,1-1.283.152c-1.033-.011-2.068-.011-3.1-.022a.663.663,0,0,1-.231-.094l.588-.085c-.258-.005-.519-.019-.774-.012-.5.013-1.128-.144-1.477.084a4.323,4.323,0,0,1-.475-.018c-.516-.043-1.017-.122-1.539-.131q-7-.119-14-.217-5.67-.086-11.338-.169-4.461-.058-8.928-.1c-2-.02-4.053-.119-5.979-.023-1.382.069-2.582,0-3.856-.029-1.376-.033-2.739-.1-4.117-.129a11.109,11.109,0,0,0-1.339.137.632.632,0,0,0,.173.092c.1.03.248.05.376.074-.128.011-.256.03-.386.031-.61,0-1.222.007-1.832,0a4.352,4.352,0,0,1-.457-.049c.146-.021.285-.047.438-.062.125-.012.27-.011.405-.015-.143-.014-.284-.038-.428-.039q-3.391-.019-6.784-.033a6.468,6.468,0,0,1-.7,0,26.379,26.379,0,0,0-3.987,0,4.113,4.113,0,0,0-.8.064,12.393,12.393,0,0,1-3.728.2c-.362-.016-.749,0-1.121.013-.543.018-1.3.213-1.344-.146a11.035,11.035,0,0,0-1.669-.1c-1.672.018-3.342.061-5.009.1a6.184,6.184,0,0,0-1.187.082,4.85,4.85,0,0,1-2.32.175c-.373-.015-.755-.034-1.127-.027-1.6.03-3.186.079-4.783.1-1.915.029-3.9.128-5.729.033-1.617-.083-2.965.132-4.474.1-1.222-.027-2.465.019-3.7.026-.45,0-.71-.028-.187-.135.056-.012.072-.07.029-.078a17.983,17.983,0,0,0-2.406.173c-.8.1-1.682.168-2.549.19-1.333.034-2.685,0-4.023.024-3.68.054-7.356.131-11.036.178-3.15.04-6.307.038-9.457.082-1.3.018-2.579.138-3.878.161q-6.809.117-13.626.2c-4.173.051-8.349.082-12.524.126-2.061.022-2.644-.078-3.007-.566-.043-.059.2-.155.411-.2.318-.072.756-.106,1.086-.176a2.739,2.739,0,0,0,.79-.232,3.679,3.679,0,0,0-1.092-.32c-.612-.088-1.365-.1-2.016-.176-.636-.07-1.3-.164-.453-.38.127-.032.264-.091.241-.131-.241-.427.83-.4,1.878-.406q5.968-.04,11.936-.093c4.358-.034,8.717-.055,13.071-.109,3.033-.038,6.058-.137,9.09-.179,1.634-.023,3.278.036,4.912.019,1.3-.013,2.6-.121,3.893-.124,3.088-.01,6.139-.138,9.206-.191,2.736-.049,5.5.026,8.24,0,1.873-.02,3.736-.128,5.605-.2a10.505,10.505,0,0,1,1.265-.023,32.44,32.44,0,0,0,5.271-.032c.88-.048,1.84.011,2.764.022a1.345,1.345,0,0,0,.14,0c1.927-.228,3.909.034,5.735-.031,4.646-.166,9.263.06,13.874-.084.513-.016,1.017-.056,1.527-.084a6.472,6.472,0,0,1,.954-.04,25.7,25.7,0,0,0,4.493-.019c1.393.016,2.784.054,4.177.053,2.824,0,5.65-.029,8.474-.028,1.3,0,2.589.071,3.885.066,1.731-.007,3.46-.059,5.192-.083.4-.006.986-.174,1.186.073a1.839,1.839,0,0,0,.49.027,14.811,14.811,0,0,1,2.879-.006c1.221.026,2.457,0,3.68.019,2.195.036,4.381.1,6.575.132,1.256.017,2.526-.027,3.784-.015,1.6.016,3.195.077,4.8.091,1.631.015,3.271-.022,4.9,0q6.253.072,12.5.173c4.211.062,8.424.115,12.63.194,5.434.1,10.878.191,16.286.354,3.14.095,6.234.306,9.314.5a5.64,5.64,0,0,1,3.124.785c.22.255-.515.534.69.778.527.107-.274.337-1.148.279-.906-.06-.872-.057-1.213.171a3.1,3.1,0,0,1-.807.057c-1.617-.076-3.209-.2-4.836-.243-2.236-.06-4.5-.058-6.745-.089-1.151-.016-2.3-.046-3.445-.075a.207.207,0,0,1-.143-.089c-.144-.255-.85-.252-1.506-.2a46.685,46.685,0,0,1-7.183.046c-.271-.021-.6.013-.908.022.238.037.461.084.716.108.451.043.921.07,1.383.1Zm-72.149-2.452-1.357.074c.336.028.686.048,1,.087.2.026.323.093.52.121a5.238,5.238,0,0,0,1,.1,22.494,22.494,0,0,1,3.941.052c1.192.075,2.444-.127,3.716-.022a4.169,4.169,0,0,0,.862-.274c-.277-.046-.54-.1-.834-.137-.248-.032-.592-.026-.785-.07a7.955,7.955,0,0,0-2.264-.074A25.645,25.645,0,0,1,786.669,3515.757Zm15.628.05a2.533,2.533,0,0,0-.584.133c-.043.051.174.158.359.173a14,14,0,0,0,1.771.081c2.539-.132,4.983.057,7.469.1.349.006.708-.026,1.061-.04a3.032,3.032,0,0,0-.994-.354c-.945-.035-1.941.032-2.919.043-1.35.015-2.706.034-4.052.016C803.718,3515.948,803.045,3515.863,802.3,3515.807Zm-29.687.4.006.029c.467-.016.98-.074,1.392-.042,1.339.1.331-.257.888-.3-.269-.022-.535-.053-.811-.063-.467-.015-.945-.035-1.408-.022-.978.028-1.958.066-2.918.124a1.454,1.454,0,0,0-.5.195,5.83,5.83,0,0,0,.673.08C770.821,3516.214,771.716,3516.206,772.61,3516.2Zm-13.45-.074a4.1,4.1,0,0,0,.589.144,41.94,41.94,0,0,0,5.963-.014.884.884,0,0,0,.332-.14,3.928,3.928,0,0,0-.6-.077,31.712,31.712,0,0,1-4.369-.036A14.807,14.807,0,0,0,759.16,3516.129Zm21.076.091,0-.033c.513,0,1.035.009,1.538-.011a6.491,6.491,0,0,0,.781-.118c-.233-.047-.444-.105-.7-.138-1.7-.22-3.388.1-5.1.039a3.123,3.123,0,0,0-.65.133,6.287,6.287,0,0,0,.663.078C777.926,3516.193,779.081,3516.205,780.235,3516.22Zm48.331.126a8.05,8.05,0,0,0,.843.118q2.819.022,5.641.025a1.336,1.336,0,0,0,.356-.1,2.964,2.964,0,0,0-.572-.115c-1.71-.03-3.422-.054-5.137-.063A10.524,10.524,0,0,0,828.566,3516.346Zm-100.931.382.063.041.912-.1a8.074,8.074,0,0,0-1.388-.242,16.135,16.135,0,0,0-3.272.212,3.744,3.744,0,0,0-.366.11,4.035,4.035,0,0,0,.568.067C725.314,3516.794,726.474,3516.759,727.635,3516.728Z"
                  fill="#68db7e"
                />
              </g>
            </svg>
            <div dangerouslySetInnerHTML={{ __html: data.paragraph }} />
            <Button link="the-system">The system</Button>
          </div>
        </div>
      </AppSection>
    </Wrapper>
  )
}

export default HomepageAbout
