import React, { ReactNode } from 'react'
import { Background } from './Background'
import { SIZE } from '@/types/size'

export const ModalWindow = ({ children, size, handleClick }: { children: ReactNode, size: SIZE, handleClick: () => void }) => {
    switch (size) {
        case SIZE.SMALL:
            return (
                <>
                    <Background handleClick={handleClick} />
                    <div className='absolute content-sm bg-white card-md'>
                        {children}
                    </div>
                </>
            )
        case SIZE.MEDIUM:
            return (
                <>
                    <Background handleClick={handleClick} />
                    <div className='absolute content-md bg-white card-md'>
                        {children}
                    </div>
                </>
            )
        case SIZE.MEDIUM_SLIDER:
            return (
                <>
                    <Background handleClick={handleClick} />
                    <div className='absolute content-md-slider bg-white card-md'>
                        {children}
                    </div>
                </>
            )
        case SIZE.LARGE:
            return (
                <>
                    <Background handleClick={handleClick} />
                    <div className='absolute content-lg bg-white card-md'>
                        {children}
                    </div>
                </>
            )
    }
}
