import React from "react"
import { SubmitRefWrapper } from "../components/references/SubmitReference"
import Wrapper from "../components/Wrapper"

export default class ContactFormSeven extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <SubmitRefWrapper>
        <div style={{ padding: "100px 0" }}>
          <Wrapper>
            <h2>
              <span>
                <span>
                  <span>Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="234.811"
                    height="43.752"
                    viewBox="0 0 234.811 43.752"
                  >
                    <g
                      id="Group_170"
                      data-name="Group 170"
                      transform="translate(-523.773 -719.456)"
                    >
                      <path
                        id="Path_124"
                        data-name="Path 124"
                        d="M539.831,731.892c2.836-.064,5.672-.118,8.508-.205a3.631,3.631,0,0,0,.969-.318,7.379,7.379,0,0,0-.681-.7,10.26,10.26,0,0,1-.891-.591c-.482-.485-1.388-1.276-1.27-1.5a9.046,9.046,0,0,1,1.821-2.033,2.939,2.939,0,0,1,.716-.386,4.239,4.239,0,0,0-.824-.134c-.421.012-.844.161-1.258.132-.848-.059-1.689-.2-2.533-.3.2-1.083-.2-2.058.384-3.323,1.653-3.575,4.6-3.1,7.444-2.993,6.325.236,12.646.595,18.966.947,5.471.305,10.942.631,16.408,1.023,5.048.362,10.085.86,15.132,1.233,5.228.386,10.464.665,15.692,1.044,4.273.31,8.535.8,12.811,1.026q6.846.358,13.71.347c4.392,0,8.79-.108,13.172-.375,4.618-.281,9.222-.807,13.832-1.226a7.046,7.046,0,0,1,.721-.071c4.5.051,9.013.289,13.507.118,5.16-.2,10.3-.79,15.459-1.136,1.974-.132,3.962-.037,5.944-.076,4.809-.1,9.618-.277,14.428-.29,3.77-.009,7.569.515,11.3.2,4.255-.361,8.4.357,12.6.465,2.162.056,4.316.4,6.472.638,1.265.139,1.707.812,1.417,2.041-.06.252-.112.727-.035.757,1.682.647.858,1.239-.05,1.749-1.1.617-2.243,1.153-3.361,1.737a4.155,4.155,0,0,0-.537.4,7.084,7.084,0,0,0,.667.411c.293.141.606.243.91.362a5.033,5.033,0,0,0-.751.6,8.866,8.866,0,0,0-1.564,2.013c-.383.884.373,1.3,1.137,1.461,1.064.216,2.146.338,3.213.54.17.033.3.277.448.424a2.05,2.05,0,0,1-.521.087,21.416,21.416,0,0,0-2.329-.22c-.331.007-.654.373-.98.576.287.259.547.7.865.748,1.994.292,4,.491,6,.735a4.651,4.651,0,0,1,1.394.3.967.967,0,0,1,.256.8c-1.067.865-2.071,1.857-3.685,1.532-1.393-.28-2.818-.407-4.23-.6-.238-.032-.529-.137-.709-.043-1.5.778-2.834-.087-4.231-.357a.685.685,0,0,0-.574.2,6.339,6.339,0,0,0-.919,1.608,4.317,4.317,0,0,0,.052,1.439,12.449,12.449,0,0,0,1.3-.636,3.151,3.151,0,0,0,.593-.656c.014.319.033.637.04.956.03,1.342-.49,2.107-1.979,2.045a25.146,25.146,0,0,0-3.394.1c-.494.046-1.475-.6-1.358.7-.692.024-1.657.35-2.025.018-1.192-1.073-1.853-1.292-3.135-.486-.437.274-.9.511-1.344.765.555.013,1.111.053,1.665.032.473-.019.943-.107,1.414-.165-.036.146-.026.375-.115.423a7.878,7.878,0,0,1-1.8.861c-.6.148-1.517-.228-1.871.092-2.081,1.879-4.723.833-7.02,1.485a3.368,3.368,0,0,1-1.206-.127,3,3,0,0,0,.72-.621c.081-.133-.123-.631-.183-.628-.688.032-1.373.128-2.059.209-1.083.128-2.163.318-3.249.377-2.922.158-5.782-1.2-8.753-.339a4.514,4.514,0,0,1-1.792-.112,11.3,11.3,0,0,1-1.334-.361,10.224,10.224,0,0,1,1.431-.583c.461-.117.973-.032,1.435-.146a3.511,3.511,0,0,0,.886-.526,7.635,7.635,0,0,1-.83-.109c-.229-.054-.608-.133-.638-.263-.218-.979-.236-2.3-1.5-.587-.076-.07-.228-.162-.215-.206.078-.266.123-.6.312-.763a10.716,10.716,0,0,1,1.3-.83c-.674-.11-1.345-.262-2.024-.315a7.162,7.162,0,0,0-1.487.094,6.26,6.26,0,0,0-.891.25c.181.4.328,1.116.55,1.14.849.093,1.634.387,1.266,1.247-.275.641-1.284,1.494-1.828,1.406-2.725-.439-5.307,1.024-8.154.161-1.869-.568-4.132.17-6.221.284a3.352,3.352,0,0,1-.991-.268,5.2,5.2,0,0,1,.843-1.143c1.5-1.173,3.09-.138,4.638-.085.837.028,1.574.214,1.654-1.018.011-.18.947-.493,1.394-.411.787.144,1.436.09,1.474-.758.016-.349-.6-.97-1.007-1.046a11.606,11.606,0,0,0-3.375-.23,60.324,60.324,0,0,1-12.21.226,23.6,23.6,0,0,0-4.422.263c-.24.024-.657.488-.615.654.1.4.413,1.032.662,1.042a4.417,4.417,0,0,0,1.881-.412,4.419,4.419,0,0,1,3.635-.282c.945.359,2.129.055,3.2.141a6.7,6.7,0,0,1,1.469.463,10.844,10.844,0,0,0-.865.931,1.728,1.728,0,0,0-.3.751c-.168,1.081-.784,1.365-1.811,1.169-1.45-.275-2.913-.488-4.375-.693a2.094,2.094,0,0,0-1.233.038c-2.613,1.591-5.5,1.435-8.376,1.431-3.883-.006-7.772-.11-11.648.069-6.56.3-13.11.828-19.668,1.2-2.383.134-4.777.046-7.163.139-1.118.043-2.227.295-3.344.416-1.5.163-3,.274-4.5.438-2.67.293-5.334.646-8.008.9-1.43.135-2.874.105-4.312.163-1.078.044-2.156.115-3.234.167-2.085.1-4.177.122-6.252.322a11.7,11.7,0,0,0-2.658.827c-.389.138-.736.516-1.116.537-2.034.114-4.075.239-6.108.175a8.471,8.471,0,0,0-3.073.021,8.263,8.263,0,0,1-2.825-.115c-.229-.015-.5-.147-.679-.064-3.431,1.609-4.269,1.673-7.779,1.833-2.182.1-4.334.745-6.515,1.028-3.7.479-7.412.795-11.1,1.32-1.924.274-3.8.875-5.707,1.275-2.191.46-4.431.731-6.581,1.33-1.646.459-3.143,1.44-4.784,1.931-1.344.4-2.815.361-4.207.635-1.329.261-2.611.829-3.945.977a13.016,13.016,0,0,1-3.671-.287,8.748,8.748,0,0,1,.079-1.979,3.928,3.928,0,0,1,.334-.914,6.074,6.074,0,0,0-1.053-.148,2.694,2.694,0,0,0-.869.234c-.815.317-1.52.364-1.977-.577a2.638,2.638,0,0,1-.154-2.6c1.012-2.355,2.9-3.329,4.952-4.332,1.024-.5.983-.71.116-1.606-.065-.068-.095-.282-.049-.322a2.409,2.409,0,0,1,.47-.255c.6-.313,1.192-.629,1.788-.943a15.978,15.978,0,0,0-2.119.351,4.077,4.077,0,0,1-4.809-1.457,1.236,1.236,0,0,1,.194-1.2c1.017-.636,2.572-.6,2.512-2.436-.011-.342.728-.708,1.121-1.062-.6-.046-1.207-.048-1.8-.145a5.8,5.8,0,0,1-3.8-2.505c-.087-.119-.115-.435-.038-.5.918-.748-.035-.606-.344-.7-.994-.309-2.028-.509-2.992-.888-1.55-.611-.86-1.714-.422-2.658,1.131-2.434,3.282-3.269,5.769-3.47,3.248-.262,6.5-.477,9.749-.712Zm126.323,13.714a2.9,2.9,0,0,0,.874.215c.756-.053,2.229.6,1.38-1.263-.043-.094.4-.41.619-.623,1.1,1.328,2.226.466,3.4.114.422-.127,1.385-.289.669.845-.661,1.046.967.5.956,1.171.414-.043,1,.069,1.209-.16a7.383,7.383,0,0,0,1.379-2.138c.15-.381-.131-1.347-.332-1.381a41.429,41.429,0,0,0-4.261-.408c-.106-.007-.23.246-.346.377,1.119.811.153.519-.266.489-.507-.036-1.012-.12-1.52-.142-1.186-.052-2.372-.1-3.559-.105a8.626,8.626,0,0,0-1.3.187c.354.188.711.372,1.061.567.388.217.77.444,1.154.667-.432.068-.867.122-1.3.208a7.518,7.518,0,0,0-.755.228c.124.18.236.372.377.539.19.226.4.433.6.648-1.134.025-2.07-.04-1.719-1.67.079-.37-.661-1.3-1.052-1.316a15.141,15.141,0,0,0-4.784.293,4.691,4.691,0,0,1-3.462-.347,1.286,1.286,0,0,0-1.694.182c-1.885,1.774-4,1.043-6.017.45a3.624,3.624,0,0,0-3.087.164,2.74,2.74,0,0,1-2.133.359,2.888,2.888,0,0,0-3.636.42c-1.2,1.058,1.97,1.833.241,2.98.112.034.238.12.334.094.728-.19,1.866-.189,2.1-.645.971-1.878,2.718-1.084,4.112-1.448a.579.579,0,0,1,.485.137c.592.67.578.644,1.256.572a38.775,38.775,0,0,1,4.994-.417c.759.017,1.047.2,1.054-.75.006-.823.459-1.046,1.1-.3.178.2.665.41.83.313.705-.416,1.205-.35,1.3.493.114.981.744.788,1.066.385,1.458-1.827,3.506-.685,4.353-.038C663.529,746.839,664.7,746.539,666.154,745.606Zm-43.187,2.859.873.044a4.336,4.336,0,0,1-.809-.449c-.4-.351-.758-.758-1.134-1.141.53-.267,1.085-.794,1.583-.746a22.194,22.194,0,0,1,2.714.783c.415.1,1.21.077,1.279-.1.468-1.207,1.456-.3,2.028-.6.651-.341,1.058-1.126,1.61-1.679a6.939,6.939,0,0,1,.956-.689,3.938,3.938,0,0,0-1.318-.164c-2.9.681-5.733,1.88-8.825,1-.176-.05-.557.349-.733.612C620.169,746.853,620.988,748.269,622.967,748.465Zm-9.427-2.148c-1.771-.6-.84.749-.769,1.212.046.3.723.455.957.788.126.178-.085.592-.145.9.44-.164.874-.349,1.324-.479.153-.044.345.061.522.082.326.039.655.066.982.1-.221-.22-.437-.444-.664-.658a4.433,4.433,0,0,1-.63-.6c-.043-.062.18-.311.281-.474,1.652,1.179,2.632-.665,3.972-.9.182-.032.3-.421.448-.644-.193-.119-.379-.323-.581-.34a4.432,4.432,0,0,0-1.249.06C616.5,745.66,615.023,745.995,613.54,746.317Zm-8.683,1.938a13.49,13.49,0,0,0,1.424-.051c.13-.017.231-.266.345-.408-.53-.344-1.074-.995-1.587-.972a37.255,37.255,0,0,0-4.393.643c-1.921.32-3.841.647-5.756,1a3.02,3.02,0,0,0-.745.36,3.266,3.266,0,0,0,.827.16C598.268,748.752,601.562,748.5,604.857,748.255Zm-34.348,4.32c1.444-.32,3.131-.693,4.817-1.07.577-.128,1.151-.267,1.727-.4a18.322,18.322,0,0,0-2-.718,2.316,2.316,0,0,0-1.034.2c-.982.268-1.947.625-2.944.8-.47.08-1-.26-1.5-.276a4.671,4.671,0,0,0-1.56.232c-.217.07-.339.43-.5.659a9.166,9.166,0,0,0,1.293.464A13.882,13.882,0,0,0,570.509,752.575Zm-16.3-22.139c-.622.094-1.458.192-2.28.36a2.43,2.43,0,0,0-.709.45c.285.143.581.431.852.408,2.15-.177,4.3-.4,6.442-.642.2-.022.383-.207.573-.316-.238-.118-.476-.336-.714-.337C557.062,730.354,555.746,730.4,554.213,730.436Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </span>
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </p>
          </Wrapper>
          <svg
            className="svg"
            width="960.902"
            height="805.068"
            viewBox="0 0 960.902 805.068"
          >
            <path
              id="Path_148"
              data-name="Path 148"
              d="M204.655,802.843-397.045-2.149l156.02-.075,206.213.075L563.857,802.843Z"
              transform="translate(397.045 2.224)"
            />
          </svg>
          <Wrapper>
            <form
              onSubmit={this.submitForm}
              method="POST"
              action="http://3.250.192.195/wp-json/contact-form-7/v1/contact-forms/323/feedback"
            >
              <span className="name-email">
                <input
                  type="text"
                  placeholder="Name"
                  name="your-name"
                  className="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="your-email"
                  className="email"
                />
              </span>
              <textarea placeholder="Message" rows="4" name="your-message" />
              <span className="submit">
                {status === "SUCCESS" ? (
                  <p>We've got your message. Thanks!</p>
                ) : (
                  <input type="submit" />
                )}
                {status === "ERROR" && (
                  <p style={{ marginTop: 20 }}>Ooops! There was an error.</p>
                )}
              </span>
            </form>
          </Wrapper>
        </div>
      </SubmitRefWrapper>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}