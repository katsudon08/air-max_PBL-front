import React from 'react'
import { HumbergerMenuButton } from './button/HumbergerMenuButton'

export const ToolBar = () => {
    return (
        <div className="absolute top-0 w-full blue flex flex-row justify-end items-center px-4">
            <HumbergerMenuButton />
        </div>
    )
}
