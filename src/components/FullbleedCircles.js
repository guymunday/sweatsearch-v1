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
    max-width: 450px;
    margin: 30px 0;
  }
`

const FullbleedCircles = ({ input }) => {
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

      <BackgroundImg
        style={{ position: "absolute" }}
        fluid={input?.backgroundImage?.localFile?.childImageSharp?.fluid}
        alt={input?.title}
      />
      <div className="overlay"></div>
      <Wrapper>
        <FullbleedInner>
          <h2>{input.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: input?.copy }} />
          {input.link && <Button link={input?.link}>Find out more</Button>}
        </FullbleedInner>
      </Wrapper>
    </BenefitsSectionStyles>
  )
}

export default FullbleedCircles
