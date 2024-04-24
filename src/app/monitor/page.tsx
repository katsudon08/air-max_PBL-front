"use client"

import { ToolBar } from '@/components/ToolBar';
import { AutoSlider } from '@/components/slider/AutoSlider';
import { Room } from '@/types/room';

export default function Monitor() {
    const rooms: Room[] = [
        { room_name: "", room_id: "", room_description: "" }
    ]

    const data: string[] = [
        "aaa", "bbb", "ccc"
    ]

    return (
        <div className='background-paper center'>
            <ToolBar />
            <AutoSlider data={data}/>
        </div>
    );
}