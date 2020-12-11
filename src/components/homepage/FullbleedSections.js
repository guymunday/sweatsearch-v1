import React, { useEffect } from "react"
import styled from "styled-components"
import Button from "../buttons/Button"
import {
  BackgroundImg,
  BenefitsSectionStyles,
} from "../theSystem/BenefitsSection"
import Wrapper from "../Wrapper"
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

const FullbleedSections = ({ sections }) => {
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

  return sections.map((s, index) => {
    return (
      <BenefitsSectionStyles key={index} ref={featured}>
        {index % 2 === 0 ? (
          <motion.svg
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [-30, -20, -10, 0, 10, 20, 30],
              y: [30, 20, 10, 0, -10, -20, -30],
              transition: { yoyo: Infinity, duration: 3, ease: "linear" },
            }}
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 324.505 324.506"
            className="circle-1"
          >
            <g>
              <path
                fill="var(--green)"
                d="M162.252,324.506C72.786,324.506,0,251.72,0,162.253S72.786,0,162.252,0
		c89.467,0,162.253,72.786,162.253,162.253S251.719,324.506,162.252,324.506z M162.252,63C107.524,63,63,107.524,63,162.253
		s44.524,99.253,99.252,99.253c54.729,0,99.253-44.524,99.253-99.253S216.981,63,162.252,63z"
              />
            </g>
          </motion.svg>
        ) : null}
        {index % 2 === 0 ? (
          <motion.svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 324.505 324.506"
            className="circle-2"
            initial={{ x: 0, y: 0 }}
            animate={{
              y: [-30, -20, -10, 0, 10, 20, 30],
              x: [30, 20, 10, 0, -10, -20, -30],
              transition: { yoyo: Infinity, duration: 3, ease: "linear" },
            }}
          >
            <g>
              <path
                fill="var(--green)"
                d="M162.252,324.506C72.786,324.506,0,251.72,0,162.253S72.786,0,162.252,0
		c89.467,0,162.253,72.786,162.253,162.253S251.719,324.506,162.252,324.506z M162.252,63C107.524,63,63,107.524,63,162.253
		s44.524,99.253,99.252,99.253c54.729,0,99.253-44.524,99.253-99.253S216.981,63,162.252,63z"
              />
            </g>
          </motion.svg>
        ) : (
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
        )}
        <BackgroundImg
          style={{ position: "absolute" }}
          fluid={s.section.backgroundImage.localFile.childImageSharp.fluid}
          alt={s.section.title}
        />
        <div className="overlay"></div>
        <Wrapper>
          <FullbleedInner>
            <h2>{s.section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: s.section.copy }} />
            <Button link={s.section.link}>Find out more</Button>
          </FullbleedInner>
        </Wrapper>
      </BenefitsSectionStyles>
    )
  })
}

export default FullbleedSections
