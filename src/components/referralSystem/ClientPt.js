import React from "react"
import styled from "styled-components"
import Wrapper from "../Wrapper"

const PlanSection = styled.section`
  width: 100%;
  background: var(--green);
  min-height: 100vh;
  position: relative;
  .banner-svg {
    position: absolute;
    top: -18%;
    left: -10%;
    z-index: 1;
    width: 70%;
    @media screen and (max-width: 768px) {
      top: -10%;
    }
  }
`

const PlanInner = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  justify-content: center;
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
`

const ClientPt = ({ data }) => {
  return (
    <PlanSection>
      <svg
        className="banner-svg"
        width="900.701"
        height="253.059"
        viewBox="0 0 900.701 253.059"
      >
        <g
          id="Group_136"
          data-name="Group 136"
          transform="translate(110.168 -1349.702)"
        >
          <path
            id="Path_120"
            data-name="Path 120"
            d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
            transform="translate(-431.604 1351.926)"
          />
          <path
            id="Path_123"
            data-name="Path 123"
            d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
            transform="translate(-30.604 1351.926)"
          />
          <path
            id="Path_121"
            data-name="Path 121"
            d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
            transform="translate(-232.604 1351.926)"
          />
          <path
            id="Path_122"
            data-name="Path 122"
            d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
            transform="translate(168.396 1351.926)"
          />
        </g>
      </svg>
      <Wrapper>
        <PlanInner>
          {data.map((p, index) => {
            console.log(p)
            return (
              <div
                key={index}
                className="thumb"
                dangerouslySetInnerHTML={{ __html: p.copy }}
              />
            )
          })}
        </PlanInner>
      </Wrapper>
    </PlanSection>
  )
}

export default ClientPt
