import React, { ReactNode } from 'react'
import { Background } from '../Background'
import { ArrowButton } from '../button/ArrowButton'
import { DIRECTIONS } from '@/types/ArrowButton/directions'
import { CancelButton } from '../button/CancelButton'

export const RoomDetail = ({ children, handleClick }: { children: ReactNode, handleClick: () => void }) => {
    return (
        <>
            <Background handleClick={handleClick}/>
            <div className='absolute content-md bg-white card-md'>
                <div className='content-full center relative'>
                    <div className='absolute top-2 right-2'>
                        <CancelButton handleClick={handleClick} />
                    </div>
                    <div className='absolute top-1/2 -left-3 -translate-y-6 -translate-x-5'>
                        <ArrowButton direction={DIRECTIONS.LEFT} />
                    </div>
                    <div className='absolute top-1/2 -right-3 -translate-y-6 translate-x-5'>
                        <ArrowButton direction={DIRECTIONS.RIGHT} />
                    </div>
                    <div className='content-lg center p-2'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
