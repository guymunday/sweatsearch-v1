import React from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"
import { Link, useStaticQuery, graphql } from "gatsby"

const StyledFooter = styled.footer`
  background: var(--black);
`

const FooterInner = styled.div`
  color: var(--white);
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .contact {
    flex: 1;
    .contact-inner {
      margin-top: 30px;
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
  }
  .footer-menu {
    flex: 1;
    .title {
      @media screen and (max-width: 768px) {
        margin-top: 60px;
      }
    }
    .footer-menu-inner {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 30px;
      a {
        flex: 1;
        flex-basis: 40%;
      }
    }
  }
`

const SmallPrint = styled.div`
  .line {
    display: block;
    height: 1px;
    background: var(--white);
    width: 100%;
  }
  .bottom-footer {
    display: flex;
    color: var(--white);
    padding: 30px 0 60px 0;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .policy {
      @media screen and (max-width: 768px) {
        margin-bottom: 16px;
      }
      a:nth-child(even) {
        margin: 0 16px;
      }
    }
  }
`

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    {
      allWpAcf(filter: { slug: { eq: "footer" } }) {
        nodes {
          footer {
            contactDetails
            footerMenu {
              menuItems {
                link
                menuItem
              }
            }
            smallPrint
            socialLinks {
              socialLink {
                link
                platform
              }
            }
          }
        }
      }
      allWpPolicy {
        edges {
          node {
            slug
            title
            id
          }
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <Wrapper>
        <FooterInner>
          <div className="contact">
            <Link to="/" className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="173.238"
                height="28.857"
                viewBox="0 0 173.238 28.857"
              >
                <g
                  id="Group_100"
                  data-name="Group 100"
                  transform="translate(-51.237 -48.178)"
                >
                  <g id="Group_4" data-name="Group 4">
                    <g id="Group_3" data-name="Group 3">
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M78.372,66.408c.081,1.609,1.529,2.789,3.754,2.789,1.9,0,3.244-.831,3.244-2.092,0-1.716-1.474-1.9-3.485-2.145-2.977-.375-5.416-.938-5.416-3.78,0-2.494,2.279-4.156,5.282-4.129,3.083.027,5.309,1.5,5.523,4.343h-2.2a3.068,3.068,0,0,0-3.325-2.466c-1.85,0-3.11.831-3.11,2.091,0,1.5,1.42,1.636,3.351,1.877,3.057.375,5.55,1.019,5.55,4.049,0,2.547-2.412,4.129-5.416,4.129-3.485,0-5.9-1.663-5.952-4.666Z"
                        fill="#fff"
                      />
                      <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M90.519,57.238l3.405,11.128,3.593-11.128h2.038l3.4,11.128,3.566-11.128h2.226l-4.558,13.675H101.78l-3.3-10.162L95.05,70.913l-2.413.027-4.424-13.7Z"
                        fill="#fff"
                      />
                      <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M115.938,57.078c3.753,0,6.381,2.44,6.489,6.488,0,.295-.027.617-.054.939H111.755v.187a4.2,4.2,0,0,0,4.317,4.424,3.75,3.75,0,0,0,3.888-2.788h2.225a5.818,5.818,0,0,1-5.953,4.746c-4.1,0-6.783-2.816-6.783-7C109.449,59.866,112.077,57.078,115.938,57.078Zm4.21,5.6a3.883,3.883,0,0,0-4.183-3.673,4.048,4.048,0,0,0-4.076,3.673Z"
                        fill="#fff"
                      />
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M137.2,68.9v2.011h-1.206c-1.824,0-2.44-.778-2.467-2.118a5.2,5.2,0,0,1-4.585,2.279c-3,0-5.041-1.5-5.041-3.995,0-2.735,1.9-4.264,5.5-4.264h4.022v-.938c0-1.77-1.26-2.842-3.4-2.842-1.931,0-3.218.912-3.486,2.306h-2.2c.321-2.681,2.493-4.263,5.791-4.263,3.485,0,5.5,1.742,5.5,4.933v5.9c0,.67.348.992.911.992Zm-3.78-4.236h-4.237c-1.957,0-3.057.723-3.057,2.279,0,1.34,1.153,2.252,2.977,2.252,2.735,0,4.317-1.582,4.317-3.861Z"
                        fill="#fff"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M139.8,59.249h-2.467V57.238H139.8V53.4H142v3.834h3.459v2.011H142V67.32c0,1.153.4,1.582,1.5,1.582h2.387v2.011h-2.52c-2.628,0-3.566-1.153-3.566-3.566Z"
                        fill="#fff"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M149.507,66.73c.107,1.957,1.823,3.164,4.37,3.164,2.226,0,3.888-1.019,3.888-2.628,0-2.011-1.877-2.332-4.1-2.654-2.761-.375-5.254-.858-5.254-3.593,0-2.333,2.171-3.915,5.121-3.888s5.121,1.368,5.362,4.022h-1.367c-.242-1.77-1.823-2.842-3.995-2.842-2.252,0-3.781,1.046-3.781,2.6,0,1.9,1.877,2.118,3.968,2.413,2.9.4,5.417.992,5.417,3.861,0,2.413-2.36,3.888-5.256,3.888-3.378,0-5.657-1.529-5.738-4.344Z"
                        fill="#85d584"
                      />
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M167.659,57.158c3.593,0,6.14,2.36,6.274,6.408a4.117,4.117,0,0,1-.027.563H162.832a1.351,1.351,0,0,0-.026.322c.053,3.191,2.091,5.389,4.987,5.389a4.482,4.482,0,0,0,4.531-3.432h1.394a5.812,5.812,0,0,1-5.817,4.666c-3.862,0-6.516-2.842-6.516-6.972C161.385,59.947,163.959,57.158,167.659,57.158Zm4.853,5.818a4.6,4.6,0,0,0-4.826-4.611,4.8,4.8,0,0,0-4.773,4.611Z"
                        fill="#85d584"
                      />
                      <path
                        id="Path_11"
                        data-name="Path 11"
                        d="M189.216,69.653v1.26h-.8a1.949,1.949,0,0,1-2.225-2.252V68.1a5.3,5.3,0,0,1-5.2,2.976c-2.923,0-4.827-1.475-4.827-3.888,0-2.547,1.878-4.049,5.363-4.049h4.612v-1.18c0-2.252-1.475-3.592-4.022-3.592-2.279,0-3.727,1.1-4.075,2.761h-1.368c.349-2.466,2.386-3.968,5.5-3.968,3.405,0,5.335,1.743,5.335,4.853v6.328a1.159,1.159,0,0,0,1.207,1.314Zm-3.083-5.336h-4.719c-2.494,0-3.861.992-3.861,2.788,0,1.69,1.367,2.789,3.513,2.789,3.217,0,5.067-1.877,5.067-4.478Z"
                        fill="#85d584"
                      />
                      <path
                        id="Path_12"
                        data-name="Path 12"
                        d="M197.742,57.319v1.314h-.884c-3.19,0-3.915,2.627-3.915,5.389v6.891h-1.367V57.319h1.18l.214,2.708a3.919,3.919,0,0,1,4.156-2.708Z"
                        fill="#85d584"
                      />
                      <path
                        id="Path_13"
                        data-name="Path 13"
                        d="M204.848,71.074c-3.835,0-6.435-2.842-6.435-7,0-4.129,2.654-6.918,6.489-6.918a5.406,5.406,0,0,1,5.711,4.531h-1.368a4.245,4.245,0,0,0-4.4-3.324c-2.976,0-5.041,2.332-5.041,5.711s2.065,5.764,5.041,5.764a4.226,4.226,0,0,0,4.4-3.324h1.368A5.479,5.479,0,0,1,204.848,71.074Z"
                        fill="#85d584"
                      />
                      <path
                        id="Path_14"
                        data-name="Path 14"
                        d="M224.475,63.3v7.615h-1.368V63.352c0-3.218-1.609-4.934-4.209-4.934-2.9,0-4.693,2.252-4.693,5.792v6.7h-1.367V52.144h1.367v8.392a5.006,5.006,0,0,1,4.907-3.378C222.2,57.158,224.475,59.008,224.475,63.3Z"
                        fill="#85d584"
                      />
                    </g>
                  </g>
                  <g id="Group_5" data-name="Group 5">
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="M67.909,65.507c-.772-1.993-3.979-5.487-6.321-8.038-.571-.622-1.064-1.159-1.45-1.6L59.9,55.6l-.236.27c-.392.449-.947,1.053-1.591,1.752l-.352.383,1.948,2.29c1.133,1.24,4.582,5.012,5.119,6.4a4.991,4.991,0,0,1-.584,4.734,5.262,5.262,0,0,1-4.375,2.3,5.185,5.185,0,0,1-4.311-2.26,5.037,5.037,0,0,1-.908-3.4l.014-.135-2.617-2.9-.185.473a8.368,8.368,0,0,0,.937,7.833,8.646,8.646,0,0,0,14.2-.04A8.22,8.22,0,0,0,67.909,65.507Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M58.136,67.744c.571.622,1.065,1.159,1.451,1.6l.237.269.237-.271c.391-.448.947-1.052,1.59-1.751L62,67.205l-1.947-2.29c-1.133-1.24-4.583-5.012-5.12-6.4a5,5,0,0,1,.584-4.734,5.263,5.263,0,0,1,4.375-2.3,5.184,5.184,0,0,1,4.311,2.26,5.037,5.037,0,0,1,.908,3.4l-.013.135,2.616,2.9.185-.473a8.371,8.371,0,0,0-.936-7.833,8.646,8.646,0,0,0-14.205.04,8.22,8.22,0,0,0-.946,7.792C52.587,61.7,55.795,65.193,58.136,67.744Z"
                      fill="#68db7e"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            <div
              className="contact-inner"
              dangerouslySetInnerHTML={{
                __html: footerData.allWpAcf.nodes[0].footer.contactDetails,
              }}
            />
          </div>
          <div className="footer-menu">
            <p className="title">Menu</p>
            <div className="footer-menu-inner">
              {footerData.allWpAcf.nodes[0].footer.footerMenu.map(
                (m, index) => {
                  return (
                    <Link key={index} to={m.menuItems.link}>
                      {m.menuItems.menuItem}
                    </Link>
                  )
                }
              )}
            </div>
          </div>
          <div className="footer-menu">
            <p className="title">Social</p>
            <div className="footer-menu-inner">
              {footerData.allWpAcf.nodes[0].footer.socialLinks.map(
                (s, index) => {
                  return (
                    <a key={index} href={s.socialLink.link}>
                      {s.socialLink.platform}
                    </a>
                  )
                }
              )}
            </div>
          </div>
        </FooterInner>
        <SmallPrint>
          <span className="line"></span>
          <div className="bottom-footer">
            <div className="policy">
              {footerData.allWpPolicy.edges.map((p, index) => {
                return (
                  <Link key={index} to={`/${p.node.slug}`}>
                    {p.node.title}
                  </Link>
                )
              })}
            </div>
            <div
              className="small-print"
              dangerouslySetInnerHTML={{
                __html: footerData.allWpAcf.nodes[0].footer.smallPrint,
              }}
            />
          </div>
        </SmallPrint>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
