import React from "react"
import styled from "styled-components"
import Wrapper from "../Wrapper"

const PlanSection = styled.section`
  width: 100%;
  background: var(--green);
`

const PlanInner = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
  console.log(data)
  return (
    <PlanSection>
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
