import React, { ReactNode } from 'react'
import { CancelButton } from './button/circle/CancelButton'

export const InsideModalWindow = ({ children, handleClick }: { children: ReactNode, handleClick: () => void }) => {
    return (
        <div className='content-full center relative'>
            <div className='absolute top-2 right-2'>
                <CancelButton handleClick={handleClick} />
            </div>
            {children}
        </div>
    )
}
