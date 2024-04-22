import React from 'react'

export const CancelButton = ({ handleClick }: { handleClick?: () => void }) => {
    return (
        <div className='content-fit cursor-pointer select scale-75' onClick={handleClick} >
            <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/cancel.png" alt="cancel"/>
        </div>
    )
}
