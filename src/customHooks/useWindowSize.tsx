import { useEffect, useState } from "react";

interface WindowProperty {
    windowWidth: number;
    windowHeight: number;
    isMobile: boolean;
    isTab: boolean;
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowProperty>({
        windowWidth: 0,
        windowHeight: 0,
        isMobile: false,
        isTab: false,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                isMobile: window.innerWidth < 576,
                isTab: window.innerWidth < 1025,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}