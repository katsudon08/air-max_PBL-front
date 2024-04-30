"use client"

import React from 'react'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide'
import "@splidejs/react-splide/css"

export const AutoSlider = ({ data }: { data: string[] }) => {
    return (
        <Splide className='content-full'
            options={{
                rewind: true,
                type: "loop",
                autoplay: true,
                interval: 10000
            }}
        >

            {data.map((_, i) => (
                <SplideSlide className='background-paper responsive p-5 space-y-2 md:space-y-0 md:space-x-2' key={i}>
                    <div className='content-full card-md white center p-2'>{data[i]}</div>
                    <div className='content-full card-md white center p-2'>{(i+1) >= data.length ? data[0] : data[i+1]}</div>
                </SplideSlide>
            ))}
        </Splide>
    )
}
