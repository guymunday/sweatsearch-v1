import React from "react"
import styled from "styled-components"
import Button from "../buttons/Button"
import {
  BackgroundImg,
  BenefitsSectionStyles,
} from "../theSystem/BenefitsSection"
import Wrapper from "../Wrapper"
import { motion } from "framer-motion"

const FullbleedInner = styled.div`
  position: relative;
  z-index: 2;
  color: var(--white);
  h2 {
    font-size: 5rem;
  }
  p {
    max-width: 400px;
    margin: 30px 0;
  }
`

const FullbleedSections = ({ sections }) => {
  return sections.map((s, index) => {
    return (
      <BenefitsSectionStyles key={index}>
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
          <motion.svg
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
              transition: {
                duration: 2,
              },
            }}
            className="bars-svg"
            width="900.701"
            height="253.059"
            viewBox="0 0 900.701 253.059"
          >
            <g
              id="Group_147"
              data-name="Group 147"
              transform="translate(110.168 -1349.702)"
            >
              <path
                id="Path_120"
                data-name="Path 120"
                d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
                transform="translate(-431.604 1351.926)"
                fill="#fff"
              />
              <path
                id="Path_123"
                data-name="Path 123"
                d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
                transform="translate(-30.604 1351.926)"
                fill="#fff"
              />
              <path
                id="Path_121"
                data-name="Path 121"
                d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
                transform="translate(-232.604 1351.926)"
                fill="#fff"
              />
              <path
                id="Path_122"
                data-name="Path 122"
                d="M509.729,250.835,321.435-2.2l48.824-.024,64.531.024L622.136,250.835Z"
                transform="translate(168.396 1351.926)"
                fill="#fff"
              />
            </g>
          </motion.svg>
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
