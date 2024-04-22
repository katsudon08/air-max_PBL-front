import React, { ReactNode } from 'react'
import { ArrowButton } from '../button/circle/ArrowButton'
import { DIRECTIONS } from '@/types/ArrowButton/directions'
import { ModalWindow } from '../ModalWindow'
import { SIZE } from '@/types/size'
import { InsideModalWindow } from '../InsideModalWindow'

export const RoomDetail = ({ children, handleClick }: { children: ReactNode, handleClick: () => void }) => {
    return (
        <ModalWindow size={SIZE.MEDIUM} handleClick={handleClick}>
            <InsideModalWindow handleClick={handleClick} >
                <div className='absolute top-1/2 -left-3 -translate-y-6 -translate-x-5'>
                    <ArrowButton direction={DIRECTIONS.LEFT} />
                </div>
                <div className='absolute top-1/2 -right-3 -translate-y-6 translate-x-5'>
                    <ArrowButton direction={DIRECTIONS.RIGHT} />
                </div>
                <div className='content-lg center p-3'>
                    {children}
                </div>
            </InsideModalWindow>
        </ModalWindow>
    )
}
