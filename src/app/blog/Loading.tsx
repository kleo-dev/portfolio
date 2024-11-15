"use client";

import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader"

export function LoadingBlog(props: any) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="container">
            <ContentLoader
                speed={2}
                viewBox="0 0 290 50"
                backgroundColor="#3b3b3b"
                foregroundColor="#f5304c"
                {...props}
            >
                <rect x="0" y="0" rx="7" ry="7" width="290" height="18" />
                <rect x="0" y="25" rx="3" ry="3" width="78" height="7" />
                <rect x="0" y="37" rx="3" ry="3" width="200" height="7" />
            </ContentLoader>
        </div>
    );
}

export function LoadingBlogRead(props: any) {
    const [isClient, setIsClient] = useState(false);
    const [numRects, setNumRects] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const updateRectCount = () => {
            const windowHeight = window.innerHeight;
            const rectHeight = 46;
            const count = Math.floor(windowHeight / rectHeight);
            setNumRects(count);
        };

        updateRectCount();
        window.addEventListener('resize', updateRectCount);

        return () => {
            window.removeEventListener('resize', updateRectCount);
        };
    }, []);

    if (!isClient) {
        return null;
    }

    const viewBoxHeight = window.innerHeight / 3;

    return (
        <ContentLoader
            speed={2}
            viewBox={`0 0 340 ${viewBoxHeight}`}
            backgroundColor="#3b3b3b"
            foregroundColor="#f5304c"
            style={{ marginTop: "20px" }}
            {...props}
        >
            <rect x="0" y="0" rx="7" ry="7" width="290" height="18" />
            <rect x="0" y="25" rx="3" ry="3" width="78" height="7" />
            {Array.from({ length: numRects }).map((_, i) => (
                <rect
                    x="0"
                    y={45 + i * 14}
                    rx="3"
                    ry="3"
                    width={Math.random() * (300 - 80) + 80}
                    height="9"
                    key={i}
                />
            ))}
        </ContentLoader>
    );
}