import { useEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (innerWidth <= 768) {
            setIsMobile(true);
        }
    }, [setIsMobile]);

    return { isMobile };
}
