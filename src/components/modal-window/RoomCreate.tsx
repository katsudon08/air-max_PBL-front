import { SIZE } from '@/types/size'
import React, { ReactNode } from 'react'
import { ModalWindow } from '../ModalWindow'
import { InsideModalWindow } from '../InsideModalWindow'

export const RoomCreate = ({ children, handleClick }: { children: ReactNode, handleClick: () => void }) => {
    return (
        <ModalWindow size={SIZE.MEDIUM} handleClick={handleClick} >
            <InsideModalWindow handleClick={handleClick}>
                <div className='content-lg center px-3 py-8'>
                    {children}
                </div>
            </InsideModalWindow>
        </ModalWindow>
    )
}
