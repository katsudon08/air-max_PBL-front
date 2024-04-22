import { useEffect, useState } from "react";

export const getWindowSize = () => {
    const [windowSize, setWindowSize] = useState([
        0,
        0
    ]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setWindowSize([
                    window.innerHeight,
                    window.innerWidth,
                ]);
            };

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        } else {
            return;
        }
    }, []);
    return windowSize;
};