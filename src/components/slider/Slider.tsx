import React, { ReactNode } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'

export const Slider = ({ children }: { children: ReactNode }) => {
    return (
        <AwesomeSlider className="content-full" animation='cubeAnimation'>
            {children}
        </AwesomeSlider>
    )
}
