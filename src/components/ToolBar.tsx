import React from 'react'
import HumbergerMenu from './HumbergerMenu'

export const ToolBar = () => {
    return (
        <div className="absolute top-0 w-full flex flex-row justify-end items-center px-4">
            <HumbergerMenu />
        </div>
    )
}
