import React, { useEffect } from "react"
import styled from "styled-components"
import Button from "./buttons/Button"
import {
  BackgroundImg,
  BenefitsSectionStyles,
} from "./theSystem/BenefitsSection"
import Wrapper from "./Wrapper"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const FullbleedInner = styled.div`
  position: relative;
  z-index: 2;
  color: var(--white);
  h2 {
    font-size: 5rem;
    @media screen and (max-width: 500px) {
      font-size: 3.5rem;
    }
  }
  p {
    max-width: 400px;
    margin: 30px 0;
  }
`

const FullbleedBlocks = ({ input }) => {
  const animation = useAnimation()

  const [featured, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await animation.start(i => ({
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: i * 0.2,
          },
        }))
      }
      sequence()
    }
  }, [animation, inView])

  return (
    <BenefitsSectionStyles ref={featured}>
      <svg
        className="bars-svg"
        x="0px"
        y="0px"
        viewBox="0 0 900.701 253.059"
        style={{ overflow: "visible" }}
      >
        <g transform="translate(110.168 -1349.702)">
          <motion.path
            custom={3}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M78.125,1602.761l-188.294-253.035l48.824-0.024l64.531,0.024l187.346,253.035H78.125z"
          />
          <motion.path
            custom={1}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M479.125,1602.761l-188.294-253.035l48.824-0.024l64.531,0.024l187.346,253.035H479.125z"
          />
          <motion.path
            custom={2}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M277.125,1602.761L88.831,1349.726l48.824-0.024l64.531,0.024l187.346,253.035H277.125z"
          />
          <motion.path
            custom={0}
            initial={{ opacity: 0, x: "-600%" }}
            animate={animation}
            d="M678.125,1602.761l-188.294-253.035l48.824-0.024l64.531,0.024l187.346,253.035H678.125z"
          />
        </g>
      </svg>

      <BackgroundImg
        style={{ position: "absolute" }}
        fluid={input?.backgroundImage?.localFile?.childImageSharp?.fluid}
        alt={input?.title}
      />
      <div className="overlay"></div>
      <Wrapper>
        <FullbleedInner>
          <h2>{input?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: input?.copy }} />
          {input.link && <Button link={input?.link}>Find out more</Button>}
        </FullbleedInner>
      </Wrapper>
    </BenefitsSectionStyles>
  )
}

export default FullbleedBlocks
