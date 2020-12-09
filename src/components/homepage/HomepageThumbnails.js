import React from "react"
import styled from "styled-components"
import Wrapper from "../Wrapper"
import Img from "gatsby-image"

const ThumbSection = styled.section`
  width: 100%;
`

export const ThumbFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 100px 0;
  justify-content: space-between;
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .inner {
    flex: 0 0 30%;
    position: relative;
    .gatsby-image-wrapper {
      height: 300px;
      @media screen and (max-width: 900px) {
        height: 200px;
      }
      @media screen and (max-width: 768px) {
        height: 300px;
      }
    }
    h3 {
      font-size: 2rem;
      margin-top: 20px;
      svg {
        position: absolute;
        z-index: -1;
      }
    }
    p {
      margin: 15px 0 30px 0;
    }
  }
`

const HomepageThumbnails = ({ data }) => {
  return (
    <ThumbSection>
      <Wrapper>
        <ThumbFlex>
          {data.map((t, index) => {
            return (
              <div className="inner" key={index}>
                <Img
                  fluid={t.image.localFile.childImageSharp.fluid}
                  alt={t.title}
                />
                <h3>
                  {t.title}
                  {index === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="234.811"
                      height="43.752"
                      viewBox="0 0 234.811 43.752"
                      style={{ top: 0, left: -30 }}
                    >
                      <g
                        id="Group_140"
                        data-name="Group 140"
                        transform="translate(-523.773 -719.456)"
                      >
                        <path
                          id="Path_124"
                          data-name="Path 124"
                          d="M539.831,731.892c2.836-.064,5.672-.118,8.508-.205a3.631,3.631,0,0,0,.969-.318,7.379,7.379,0,0,0-.681-.7,10.26,10.26,0,0,1-.891-.591c-.482-.485-1.388-1.276-1.27-1.5a9.046,9.046,0,0,1,1.821-2.033,2.939,2.939,0,0,1,.716-.386,4.239,4.239,0,0,0-.824-.134c-.421.012-.844.161-1.258.132-.848-.059-1.689-.2-2.533-.3.2-1.083-.2-2.058.384-3.323,1.653-3.575,4.6-3.1,7.444-2.993,6.325.236,12.646.595,18.966.947,5.471.305,10.942.631,16.408,1.023,5.048.362,10.085.86,15.132,1.233,5.228.386,10.464.665,15.692,1.044,4.273.31,8.535.8,12.811,1.026q6.846.358,13.71.347c4.392,0,8.79-.108,13.172-.375,4.618-.281,9.222-.807,13.832-1.226a7.046,7.046,0,0,1,.721-.071c4.5.051,9.013.289,13.507.118,5.16-.2,10.3-.79,15.459-1.136,1.974-.132,3.962-.037,5.944-.076,4.809-.1,9.618-.277,14.428-.29,3.77-.009,7.569.515,11.3.2,4.255-.361,8.4.357,12.6.465,2.162.056,4.316.4,6.472.638,1.265.139,1.707.812,1.417,2.041-.06.252-.112.727-.035.757,1.682.647.858,1.239-.05,1.749-1.1.617-2.243,1.153-3.361,1.737a4.155,4.155,0,0,0-.537.4,7.084,7.084,0,0,0,.667.411c.293.141.606.243.91.362a5.033,5.033,0,0,0-.751.6,8.866,8.866,0,0,0-1.564,2.013c-.383.884.373,1.3,1.137,1.461,1.064.216,2.146.338,3.213.54.17.033.3.277.448.424a2.05,2.05,0,0,1-.521.087,21.416,21.416,0,0,0-2.329-.22c-.331.007-.654.373-.98.576.287.259.547.7.865.748,1.994.292,4,.491,6,.735a4.651,4.651,0,0,1,1.394.3.967.967,0,0,1,.256.8c-1.067.865-2.071,1.857-3.685,1.532-1.393-.28-2.818-.407-4.23-.6-.238-.032-.529-.137-.709-.043-1.5.778-2.834-.087-4.231-.357a.685.685,0,0,0-.574.2,6.339,6.339,0,0,0-.919,1.608,4.317,4.317,0,0,0,.052,1.439,12.449,12.449,0,0,0,1.3-.636,3.151,3.151,0,0,0,.593-.656c.014.319.033.637.04.956.03,1.342-.49,2.107-1.979,2.045a25.146,25.146,0,0,0-3.394.1c-.494.046-1.475-.6-1.358.7-.692.024-1.657.35-2.025.018-1.192-1.073-1.853-1.292-3.135-.486-.437.274-.9.511-1.344.765.555.013,1.111.053,1.665.032.473-.019.943-.107,1.414-.165-.036.146-.026.375-.115.423a7.878,7.878,0,0,1-1.8.861c-.6.148-1.517-.228-1.871.092-2.081,1.879-4.723.833-7.02,1.485a3.368,3.368,0,0,1-1.206-.127,3,3,0,0,0,.72-.621c.081-.133-.123-.631-.183-.628-.688.032-1.373.128-2.059.209-1.083.128-2.163.318-3.249.377-2.922.158-5.782-1.2-8.753-.339a4.514,4.514,0,0,1-1.792-.112,11.3,11.3,0,0,1-1.334-.361,10.224,10.224,0,0,1,1.431-.583c.461-.117.973-.032,1.435-.146a3.511,3.511,0,0,0,.886-.526,7.635,7.635,0,0,1-.83-.109c-.229-.054-.608-.133-.638-.263-.218-.979-.236-2.3-1.5-.587-.076-.07-.228-.162-.215-.206.078-.266.123-.6.312-.763a10.716,10.716,0,0,1,1.3-.83c-.674-.11-1.345-.262-2.024-.315a7.162,7.162,0,0,0-1.487.094,6.26,6.26,0,0,0-.891.25c.181.4.328,1.116.55,1.14.849.093,1.634.387,1.266,1.247-.275.641-1.284,1.494-1.828,1.406-2.725-.439-5.307,1.024-8.154.161-1.869-.568-4.132.17-6.221.284a3.352,3.352,0,0,1-.991-.268,5.2,5.2,0,0,1,.843-1.143c1.5-1.173,3.09-.138,4.638-.085.837.028,1.574.214,1.654-1.018.011-.18.947-.493,1.394-.411.787.144,1.436.09,1.474-.758.016-.349-.6-.97-1.007-1.046a11.606,11.606,0,0,0-3.375-.23,60.324,60.324,0,0,1-12.21.226,23.6,23.6,0,0,0-4.422.263c-.24.024-.657.488-.615.654.1.4.413,1.032.662,1.042a4.417,4.417,0,0,0,1.881-.412,4.419,4.419,0,0,1,3.635-.282c.945.359,2.129.055,3.2.141a6.7,6.7,0,0,1,1.469.463,10.844,10.844,0,0,0-.865.931,1.728,1.728,0,0,0-.3.751c-.168,1.081-.784,1.365-1.811,1.169-1.45-.275-2.913-.488-4.375-.693a2.094,2.094,0,0,0-1.233.038c-2.613,1.591-5.5,1.435-8.376,1.431-3.883-.006-7.772-.11-11.648.069-6.56.3-13.11.828-19.668,1.2-2.383.134-4.777.046-7.163.139-1.118.043-2.227.295-3.344.416-1.5.163-3,.274-4.5.438-2.67.293-5.334.646-8.008.9-1.43.135-2.874.105-4.312.163-1.078.044-2.156.115-3.234.167-2.085.1-4.177.122-6.252.322a11.7,11.7,0,0,0-2.658.827c-.389.138-.736.516-1.116.537-2.034.114-4.075.239-6.108.175a8.471,8.471,0,0,0-3.073.021,8.263,8.263,0,0,1-2.825-.115c-.229-.015-.5-.147-.679-.064-3.431,1.609-4.269,1.673-7.779,1.833-2.182.1-4.334.745-6.515,1.028-3.7.479-7.412.795-11.1,1.32-1.924.274-3.8.875-5.707,1.275-2.191.46-4.431.731-6.581,1.33-1.646.459-3.143,1.44-4.784,1.931-1.344.4-2.815.361-4.207.635-1.329.261-2.611.829-3.945.977a13.016,13.016,0,0,1-3.671-.287,8.748,8.748,0,0,1,.079-1.979,3.928,3.928,0,0,1,.334-.914,6.074,6.074,0,0,0-1.053-.148,2.694,2.694,0,0,0-.869.234c-.815.317-1.52.364-1.977-.577a2.638,2.638,0,0,1-.154-2.6c1.012-2.355,2.9-3.329,4.952-4.332,1.024-.5.983-.71.116-1.606-.065-.068-.095-.282-.049-.322a2.409,2.409,0,0,1,.47-.255c.6-.313,1.192-.629,1.788-.943a15.978,15.978,0,0,0-2.119.351,4.077,4.077,0,0,1-4.809-1.457,1.236,1.236,0,0,1,.194-1.2c1.017-.636,2.572-.6,2.512-2.436-.011-.342.728-.708,1.121-1.062-.6-.046-1.207-.048-1.8-.145a5.8,5.8,0,0,1-3.8-2.505c-.087-.119-.115-.435-.038-.5.918-.748-.035-.606-.344-.7-.994-.309-2.028-.509-2.992-.888-1.55-.611-.86-1.714-.422-2.658,1.131-2.434,3.282-3.269,5.769-3.47,3.248-.262,6.5-.477,9.749-.712Zm126.323,13.714a2.9,2.9,0,0,0,.874.215c.756-.053,2.229.6,1.38-1.263-.043-.094.4-.41.619-.623,1.1,1.328,2.226.466,3.4.114.422-.127,1.385-.289.669.845-.661,1.046.967.5.956,1.171.414-.043,1,.069,1.209-.16a7.383,7.383,0,0,0,1.379-2.138c.15-.381-.131-1.347-.332-1.381a41.429,41.429,0,0,0-4.261-.408c-.106-.007-.23.246-.346.377,1.119.811.153.519-.266.489-.507-.036-1.012-.12-1.52-.142-1.186-.052-2.372-.1-3.559-.105a8.626,8.626,0,0,0-1.3.187c.354.188.711.372,1.061.567.388.217.77.444,1.154.667-.432.068-.867.122-1.3.208a7.518,7.518,0,0,0-.755.228c.124.18.236.372.377.539.19.226.4.433.6.648-1.134.025-2.07-.04-1.719-1.67.079-.37-.661-1.3-1.052-1.316a15.141,15.141,0,0,0-4.784.293,4.691,4.691,0,0,1-3.462-.347,1.286,1.286,0,0,0-1.694.182c-1.885,1.774-4,1.043-6.017.45a3.624,3.624,0,0,0-3.087.164,2.74,2.74,0,0,1-2.133.359,2.888,2.888,0,0,0-3.636.42c-1.2,1.058,1.97,1.833.241,2.98.112.034.238.12.334.094.728-.19,1.866-.189,2.1-.645.971-1.878,2.718-1.084,4.112-1.448a.579.579,0,0,1,.485.137c.592.67.578.644,1.256.572a38.775,38.775,0,0,1,4.994-.417c.759.017,1.047.2,1.054-.75.006-.823.459-1.046,1.1-.3.178.2.665.41.83.313.705-.416,1.205-.35,1.3.493.114.981.744.788,1.066.385,1.458-1.827,3.506-.685,4.353-.038C663.529,746.839,664.7,746.539,666.154,745.606Zm-43.187,2.859.873.044a4.336,4.336,0,0,1-.809-.449c-.4-.351-.758-.758-1.134-1.141.53-.267,1.085-.794,1.583-.746a22.194,22.194,0,0,1,2.714.783c.415.1,1.21.077,1.279-.1.468-1.207,1.456-.3,2.028-.6.651-.341,1.058-1.126,1.61-1.679a6.939,6.939,0,0,1,.956-.689,3.938,3.938,0,0,0-1.318-.164c-2.9.681-5.733,1.88-8.825,1-.176-.05-.557.349-.733.612C620.169,746.853,620.988,748.269,622.967,748.465Zm-9.427-2.148c-1.771-.6-.84.749-.769,1.212.046.3.723.455.957.788.126.178-.085.592-.145.9.44-.164.874-.349,1.324-.479.153-.044.345.061.522.082.326.039.655.066.982.1-.221-.22-.437-.444-.664-.658a4.433,4.433,0,0,1-.63-.6c-.043-.062.18-.311.281-.474,1.652,1.179,2.632-.665,3.972-.9.182-.032.3-.421.448-.644-.193-.119-.379-.323-.581-.34a4.432,4.432,0,0,0-1.249.06C616.5,745.66,615.023,745.995,613.54,746.317Zm-8.683,1.938a13.49,13.49,0,0,0,1.424-.051c.13-.017.231-.266.345-.408-.53-.344-1.074-.995-1.587-.972a37.255,37.255,0,0,0-4.393.643c-1.921.32-3.841.647-5.756,1a3.02,3.02,0,0,0-.745.36,3.266,3.266,0,0,0,.827.16C598.268,748.752,601.562,748.5,604.857,748.255Zm-34.348,4.32c1.444-.32,3.131-.693,4.817-1.07.577-.128,1.151-.267,1.727-.4a18.322,18.322,0,0,0-2-.718,2.316,2.316,0,0,0-1.034.2c-.982.268-1.947.625-2.944.8-.47.08-1-.26-1.5-.276a4.671,4.671,0,0,0-1.56.232c-.217.07-.339.43-.5.659a9.166,9.166,0,0,0,1.293.464A13.882,13.882,0,0,0,570.509,752.575Zm-16.3-22.139c-.622.094-1.458.192-2.28.36a2.43,2.43,0,0,0-.709.45c.285.143.581.431.852.408,2.15-.177,4.3-.4,6.442-.642.2-.022.383-.207.573-.316-.238-.118-.476-.336-.714-.337C557.062,730.354,555.746,730.4,554.213,730.436Z"
                          fill="#68db7e"
                        />
                      </g>
                    </svg>
                  ) : index === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200.24"
                      height="10.432"
                      viewBox="0 0 200.24 10.432"
                      style={{ top: 25, left: -30 }}
                    >
                      <g
                        id="Group_141"
                        data-name="Group 141"
                        transform="translate(-516.135 -858.993)"
                      >
                        <path
                          id="Path_125"
                          data-name="Path 125"
                          d="M521.581,859.458c2.726-.159,5.451-.4,8.177-.453,2.891-.052,5.784.08,8.677.134,4.641.087,9.283.122,13.923.285,2.91.1,5.814.471,8.724.58,3.7.139,7.4.084,11.1.212,2.761.095,5.518.365,8.279.52,1.379.077,2.76.067,4.14.1.447.012.893.079,1.339.071.647-.012.757.429.615,1.124-.033.165-.063.332-.1.5.134-.1.348-.157.387-.3a1.6,1.6,0,0,1,1.869-1.3c3.95.057,7.9.057,11.851.108,2.218.028,4.436.093,6.652.211.236.012.612.45.659.756.131.866.451,1.092,1.1,1.053.891-.052,1.788.075,2.683.1.134,0,.27-.152.4-.233-.153-.113-.3-.313-.46-.325-.757-.061-1.524-.007-2.271-.139-.231-.042-.415-.541-.62-.831a2.48,2.48,0,0,1,.823-.336c2.067-.017,4.134.017,6.2.016,1.506,0,3.012-.038,4.518-.035.17,0,.342.166.512.254a1.689,1.689,0,0,0-.349.373,6.443,6.443,0,0,0-.357.926c-.006.017.227.233.267.2.21-.182.5-.371.565-.639.272-1.064.8-1.25,1.6-1.151a25.619,25.619,0,0,0,2.684-.019,2.65,2.65,0,0,1,.946.258c.115.049.189.264.281.4a2.019,2.019,0,0,1-.358.338c-.257.143-.529.242-.794.36a8.5,8.5,0,0,0,.876.472c.833.332,1.487.035,2.014-.9a1.53,1.53,0,0,1,.84-.66,6.1,6.1,0,0,1,4.532.163c.157.073.383-.153.578-.155,2.225-.028,4.449-.048,6.675-.041.219,0,.438.191.656.292a3.433,3.433,0,0,1-.433.648c-.547.5-.039.561.166.573,1.144.067,2.29.094,3.435.113,1.463.025,2.926.06,4.388.037,1.747-.027,3.494-.129,5.241-.167,1.42-.032,2.841-.012,4.261-.031a1.217,1.217,0,0,0,.4-.167,3.256,3.256,0,0,1-.417-.216c-1.355-.954-2.805-.045-4.194-.357-.238-.053-.5.049-.729-.033-.149-.055-.256-.312-.382-.478.127-.1.25-.277.381-.289,1.235-.109,2.474-.161,3.707-.287,1.659-.168,3.314-.416,4.974-.561.334-.029.681.254,1.027.373a2.436,2.436,0,0,0,.658.154c1.406.064,2.814.094,4.22.191.165.011.317.364.476.56-.208.168-.4.422-.627.486a7.333,7.333,0,0,1-1.317.185c-.562.053-1.126.085-1.689.125a6.777,6.777,0,0,0,1.955.579,18.563,18.563,0,0,0,3.018-.457c.07-.012.124-.183.185-.28-.135-.125-.354-.394-.394-.355-.418.41-.769.333-.715-.353.03-.375.472-.994.727-.993,1.9.005,3.81.149,5.715.224.357.014.717-.128,1.076-.135.427-.008.855.082,1.283.075.793-.012,1.588-.1,2.381-.088,1.124.022,2.247.156,3.37.157,1.681,0,3.367.026,5.041-.131a46.521,46.521,0,0,1,9.653.274c1.179.134,2.381-.095,3.565-.011a23.227,23.227,0,0,1,2.739.545,1.627,1.627,0,0,0,.8.032,4.414,4.414,0,0,1,4.125.211c.218.145.6-.067.894-.187,2.291-.944,5.535,1.425,5.973,4.437a1.5,1.5,0,0,1-.451,1.092c-.447.336-1.021.38-1.484.69-1.693,1.13-3.444.99-5.281.82-2.555-.236-5.133-.011-7.7-.094-1.888-.061-3.771-.34-5.659-.442-1.115-.059-2.235.083-3.35.045-.357-.012-.714-.463-1.061-.442-.384.023-.754.515-1.135.527a40.781,40.781,0,0,1-4.621-.052c-1.627-.134-3.242-.52-4.869-.663a8.6,8.6,0,0,0-2.783.2,11.717,11.717,0,0,1-6.456.144c-.119-.037-.319-.173-.335-.142-.737,1.494-2.119-.007-2.939,1.071a.309.309,0,0,1-.228.1c-1.492.048-2.982.118-4.474.124-1.373.005-2.745-.064-4.118-.089-1.912-.036-3.824-.111-5.735-.08-3.74.062-7.48.212-11.221.277-3.666.063-7.332.087-11,.092-3.251,0-6.5-.068-9.754-.059-2.032,0-4.064.142-6.1.134-2.189-.008-4.378-.169-6.566-.164-2.271.005-4.543.144-6.814.194-.81.017-1.622-.08-2.433-.082-1.421,0-2.843.038-4.264.043-1.493,0-2.986.016-4.479-.031-3.887-.124-7.773-.3-11.66-.41-1.9-.051-3.813.056-5.719.011-2.925-.069-5.852-.185-8.776-.322q-6.466-.3-12.931-.664c-3.96-.217-7.918-.508-11.879-.674-1.841-.077-3.689.13-5.533.086-2.116-.05-4.231-.228-6.345-.374-.179-.012-.349-.209-.523-.321.184-.141.361-.385.551-.4.809-.077,1.628-.031,2.43-.16.208-.034.37-.543.553-.835-.159-.08-.367-.287-.468-.22a3.164,3.164,0,0,1-3.3.045,7.308,7.308,0,0,0-2.539-.1c-1.628-.086-3.259-.16-4.882-.332a15.591,15.591,0,0,1-2.516-.59c-.2-.055-.361-.3-.539-.455.184-.055.367-.113.553-.161s.353-.083.529-.124c-.188-.084-.374-.177-.565-.249-.457-.171-.917-.334-1.375-.5a8.571,8.571,0,0,1,1.319-.183c2.565.033,5.13.117,7.695.141,1.055.01,2.109-.083,3.163-.14a1.26,1.26,0,0,0,.344-.123,1.416,1.416,0,0,0-.284-.183,19.957,19.957,0,0,1-2.611-.9,12.742,12.742,0,0,0-6.475-1.321c-.147.007-.3-.193-.448-.3.138-.079.275-.219.414-.225.775-.026,1.55-.021,2.325-.025Zm172.4,3.851-.214-.471-1,.718c.417.216.832.439,1.253.636.044.021.129-.159.2-.165,1.779-.131,3.558-.251,5.336-.375.188-.013.374-.04.561-.061a3.027,3.027,0,0,0-.242-.693c-.285-.421-.531-.659-1-.134-.522.582-1.294.9-1.743-.1-.239-.532-.271-.931-.832-.609-.345.2-.772.154-1.121.346A9.953,9.953,0,0,0,693.984,863.309Zm-138.6-1.053v-.306a.574.574,0,0,0-.242-.011,3.393,3.393,0,0,0-.836.4c-.055.042.052.447.084.685a5.34,5.34,0,0,1,.831-.409.717.717,0,0,1,.5.12c.176.095.362.412.489.368.924-.323,1.977,1.015,2.828-.359.045-.073.334.132.514.168.371.074.744.12,1.117.178-.327-.266-.649-.547-.985-.792a.6.6,0,0,0-.359-.062C558.009,862.238,556.7,862.248,555.383,862.256Zm36.513,2.455a2.411,2.411,0,0,0,.728.062,7.66,7.66,0,0,0,1.04-.375c-.345-.242-.683-.675-1.034-.692-1.5-.069-3,.867-4.525.083-.141-.072-.4.235-.6.366.209.12.414.328.628.345C589.386,864.6,590.641,864.647,591.9,864.711Z"
                          fill="#68db7e"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45.335"
                      height="66.236"
                      viewBox="0 0 45.335 66.236"
                      style={{ top: -25, left: -25 }}
                    >
                      <g
                        id="Group_142"
                        data-name="Group 142"
                        transform="translate(-811.861 -606.122)"
                      >
                        <path
                          id="Path_126"
                          data-name="Path 126"
                          d="M857.2,619.331a4.217,4.217,0,0,1-1.045,2.737c-.828.871-1.418,1.964-2.184,2.9-.9,1.107-1.866,2.166-2.832,3.219q-4.121,4.489-8.272,8.95a.778.778,0,0,0-.083,1.081c.918,1.593,1.834,3.187,2.7,4.808.663,1.241,1.24,2.529,1.873,3.786,1.345,2.669,2.743,5.312,4.043,8,1.223,2.534,2.487,5.062,3.476,7.689.9,2.384,1.447,4.9,2.149,7.353.026.09.1.231.061.265-.6.6-1.206,1.188-1.828,1.762-.058.052-.323-.055-.334-.028-.4,1.066-.758.123-1.1-.038-.27-.127-.569-.654-.6.149a.431.431,0,0,1-.183.256c-.165-.067-.428-.154-.448-.272-.176-1.005-1.063-1.392-1.641-2.056a7.116,7.116,0,0,1-.828-2.022c-.489-1.212-1.012-2.411-1.478-3.632-.254-.667-.346-1.4-.637-2.047-.976-2.163-2.011-4.3-3.016-6.45a3.117,3.117,0,0,1-.142-.514,4.868,4.868,0,0,1,.411.3c.148.13.279.279.418.421a4.211,4.211,0,0,0-.177-.7,9.225,9.225,0,0,0-.457-.808c-.211-.374-.205-.371-.455-.011a.294.294,0,0,1-.267-.026c-.489-.781-1-1.551-1.426-2.366a21.113,21.113,0,0,1-.851-2.068.264.264,0,0,1,.062-.228c.294-.255.306-.254.166-.523q-1.615-3.115-3.238-6.228a.787.787,0,0,0-.14-.242c-.139-.119-.3-.215-.45-.32.052.153.1.31.161.457a2.44,2.44,0,0,1,.184.323.208.208,0,1,1-.333.209c-.736-.7-.888-.644-1.508.064-1.359,1.55-2.792,3.036-4.163,4.577-1.309,1.469-2.562,2.988-3.869,4.458-.826.928-1.729,1.788-2.558,2.713-.719.8-1.324,1.712-2.081,2.473-2.505,2.517-5.02,5.028-7.611,7.455a3.383,3.383,0,0,1-3.287.678c-.309-.079-.722.259-1.091.393a3.342,3.342,0,0,1-.427.1c.026-.136.009-.3.083-.4.977-1.349,1.967-2.689,2.955-4.03a5,5,0,0,1,.5-.648c.092-.09.277-.085.42-.121.124-.031.332-.025.359-.093.424-1.053,1.42-1.64,2.057-2.529a33.192,33.192,0,0,1,2.312-2.413c1.495-1.7,2.943-3.431,4.411-5.149a3.544,3.544,0,0,1,.56-.63,3.434,3.434,0,0,0,1.226-2.6,4.321,4.321,0,0,1,2.135-2.247c.147-.033.405-.1.409-.161.057-.919.9-1.124,1.4-1.65.315-.336.3-.96.584-1.353a19.934,19.934,0,0,1,1.385-1.517,16.459,16.459,0,0,0,2.4-2.909c.262-.5-.306-1.431-.5-2.167-1.468-.357-1.793-1.768-2.065-2.829-.22-.857-.877-1.114-1.2-1.731-.359-.691-.772-1.355-1.185-2.016-.364-.582-.765-1.139-1.142-1.713-1.363-2.076-2.7-4.169-4.09-6.227-1.6-2.379-3.282-4.71-4.87-7.1a4.051,4.051,0,0,1-1.1-2.719,1.037,1.037,0,0,0-.2-.512c-.11-.2-.428-.469.165-.364.044.007.134-.23.2-.355.13-.25.26-.5.385-.753.106-.216.34-.479.286-.646-.255-.791.3-1.37.489-2.03.207-.735.608-.751,1.175-.249a3.81,3.81,0,0,0,.85.415,1.714,1.714,0,0,1,.453.266A27.809,27.809,0,0,1,827,612.915c1.28,2.115,2.754,4.112,4.1,6.186,1.279,1.964,2.5,3.964,3.761,5.941,1.389,2.18,2.815,4.337,4.177,6.534.87,1.4.853,1.448,1.954.292q2.582-2.709,5.107-5.471c1.355-1.473,2.688-2.967,4.02-4.461a8.738,8.738,0,0,0,.735-.974,2.752,2.752,0,0,1,2.156-1.275,5.892,5.892,0,0,0,2.136-.978c.672-.4,1.183.185,1.782.192C857.052,618.9,857.168,619.283,857.2,619.331Z"
                          fill="#68db7e"
                        />
                      </g>
                    </svg>
                  )}
                </h3>
                <p>{t.info}</p>
              </div>
            )
          })}
        </ThumbFlex>
      </Wrapper>
    </ThumbSection>
  )
}

export default HomepageThumbnails
