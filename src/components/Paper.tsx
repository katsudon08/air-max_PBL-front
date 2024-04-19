import React, { ReactNode } from 'react'
import { SIZE } from "@/types/size"

export const Paper = ({ children, size, handleClick }: { children: ReactNode, size: SIZE ,handleClick?: () => void }) => {
    if (typeof handleClick === "function") {
        switch (size) {
            case SIZE.FIT:
                return (
                    <div className="content-fit white center card-md cursor-pointer select p-4" onClick={handleClick}>
                        {children}
                    </div>
                )
            case SIZE.SMALL:
                return (
                    <div className="content-sm white center card-md cursor-pointer select p-4" onClick={handleClick}>
                        {children}
                    </div>
                )
            case SIZE.MEDIUM:
                return (
                    <div className="content-md white center card-md cursor-pointer select p-4" onClick={handleClick}>
                        {children}
                    </div>
                )
            case SIZE.LARGE:
                return (
                    <div className="content-lg white center card-md cursor-pointer select p-4" onClick={handleClick}>
                        {children}
                    </div>
                )
            case SIZE.FULL:
                return (
                    <div className="content-full white center card-md cursor-pointer select p-4" onClick={handleClick}>
                        {children}
                    </div>
                )
        }
    } else {
        switch (size) {
            case SIZE.FIT:
                return (
                    <div className="content-fit white center card-md cursor-pointer p-4">
                        {children}
                    </div>
                )
            case SIZE.SMALL:
                return (
                    <div className="content-sm white center card-md cursor-pointer p-4">
                        {children}
                    </div>
                )
            case SIZE.MEDIUM:
                return (
                    <div className="content-md white center card-md cursor-pointer p-4">
                        {children}
                    </div>
                )
            case SIZE.LARGE:
                return (
                    <div className="content-lg white center card-md cursor-pointer p-4">
                        {children}
                    </div>
                )
            case SIZE.FULL:
                return (
                    <div className="content-full white center card-md cursor-pointer p-4">
                        {children}
                    </div>
                )
        }
    }
}
