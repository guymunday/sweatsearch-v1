import React from "react"
import styled from "styled-components"
import Wrapper from "../Wrapper"
import ButtonInvert from "../ButtonInvert"
import ScribbleOne from "../../assets/svgs/scribble-1.svg"
import ScribbleTwo from "../../assets/svgs/scribble-2.svg"

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
  .thumb {
    border: 1px solid var(--white);
    max-width: 300px;
    flex: 1;
    border-radius: 10px;
    padding: 30px;
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

const HomepagePlans = ({ data }) => {
  console.log(data)
  return (
    <PlanSection>
      <Wrapper>
        <PlanInner>
          {data.map((p, index) => {
            console.log(p)
            return (
              <div className="thumb">
                <p>
                  <span className="price">{p.plan.price}</span> / Month
                </p>
                <div
                  className="plan-type"
                  style={{
                    backgroundImage:
                      index === 0
                        ? `url(${ScribbleOne})`
                        : `url(${ScribbleTwo})`,
                  }}
                >
                  {p.plan.planType}
                </div>
                <div dangerouslySetInnerHTML={{ __html: p.plan.description }} />
                <span className="divider"></span>
                <div
                  className="bullets"
                  dangerouslySetInnerHTML={{ __html: p.plan.bulletPoints }}
                />
                <ButtonInvert link={p.plan.link} text="Find out more" />
              </div>
            )
          })}
        </PlanInner>
      </Wrapper>
    </PlanSection>
  )
}

export default HomepagePlans
