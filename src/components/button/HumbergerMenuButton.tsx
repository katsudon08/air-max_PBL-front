import React from 'react'
import HumbergerMenu from '../HumbergerMenu'

export const HumbergerMenuButton = () => {
    return (
        <div className='absolute top-2 right-2'>
            <img width="40" height="40" src="https://img.icons8.com/ios/50/menu-squared-2.png" alt="menu-squared-2" className='scale-[80%]' />
            <HumbergerMenu />
        </div>
    )
}