import React, { useRef, useState, useEffect, useMemo } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ParallaxUpDown = ({
  children,
  yOffset,
  endPoint,
  easing = [0.42, 0, 0.58, 1],
  // easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" |
  //"easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  //"backInOut" | "anticipate" | EasingFunction;
  triggerPoint, // value between 0 and 1 (top and bottom of the window), point to start animation
  fadeOut = false, // true | false fade an element out on end of the animation
  ...rest
}) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [elementTop, setElementTop] = useState(0)
  const [elementBottom, setElementBottom] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      setElementTop(ref.current.offsetTop)
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight)
      setClientHeight(window.innerHeight)
    }

    setValues()
    document.addEventListener("load", setValues)
    window.addEventListener("resize", setValues)

    return () => {
      document.removeEventListener("load", setValues)
      window.removeEventListener("resize", setValues)
    }
  }, [ref, yOffset])

  // const transformInitialValue =
  //   elementTop - window.innerHeight <= 0 ? 0 : elementTop - window.innerHeight;
  const transformInitialValue = elementTop - clientHeight * triggerPoint
  const transformFinalValue = elementTop + yOffset + endPoint

  const yRange = [
    transformInitialValue,
    transformFinalValue / 2,
    transformFinalValue,
  ]

  // const newY = useTransform(scrollY, scrollY)

  const y = useTransform(scrollY, yRange, [-yOffset, 0, -yOffset], easing)

  const opacityInitialValue = fadeOut ? 0 : 1
  const opacityRange = useMemo(() => [opacityInitialValue, 1], [
    opacityInitialValue,
  ])

  // const yOpacityRange = [transformInitialValue, transformFinalValue];
  const yOpacityRange = [elementBottom, transformFinalValue - yOffset]
  const opacity = useTransform(
    scrollY,
    yOpacityRange,
    opacityRange,
    "anticipate"
  )

  return (
    <motion.div ref={ref} initial={{ y: 0 }} style={{ y, opacity }} {...rest}>
      {children}
    </motion.div>
  )
}

export default ParallaxUpDown
