import { DIRECTIONS } from '@/types/ArrowButton/directions'
import React from 'react'

export const ArrowButton = ({ direction, handleClick }: { direction: DIRECTIONS, handleClick?: () => void }) => {
    switch (direction) {
        case DIRECTIONS.LEFT:
            return (
                <div className='content-fit circle-button select-blue cursor-pointer animate-bounce' onClick={handleClick} >
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-left.png" alt="long-arrow-left" className='scale-50' />
                </div>
            )
        case DIRECTIONS.RIGHT:
            return (
                <div className='content-fit circle-button select select-blue cursor-pointer animate-bounce' onClick={handleClick} >
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1" className='scale-50' />
                </div>
            )
    }
}
