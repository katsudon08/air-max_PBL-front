"use client"

import { ToolBar } from '@/components/ToolBar';
import dynamic from 'next/dynamic';

const AutoSliderNoSSR = dynamic(() => import('@/components/slider/AutoSlider'), {
    ssr: false
})

export default function Monitor() {
    const data: string[] = [
        "aaa", "bbb", "ccc"
    ]

    return (
        <div className='background-paper center'>
            <ToolBar />
            <AutoSliderNoSSR data={data}/>
        </div>
    );
}