"use client";

import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader"

export default function LoadingBlog(props: any) {
    const [numComponents, setNumComponents] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Only set to client after mount
        setIsClient(true);
    }, []);

    useEffect(() => {
        const updateComponentCount = () => {
            const windowHeight = window.innerHeight; // Get window height
            const componentHeight = 100; // Set the height of your component
            const count = Math.floor(windowHeight / componentHeight); // Calculate how many components fit
            setNumComponents(count);
        };

        // Initial calculation
        updateComponentCount();
        
        // Add resize event listener
        window.addEventListener('resize', updateComponentCount);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', updateComponentCount);
        };
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    // Only render on the client
    if (!isClient) {
        return null;
    }

    return (
        <div className="container">
            {Array.from({ length: numComponents }, (_, index) => (
                <ContentLoader
                    speed={2}
                    viewBox="0 0 290 50"
                    backgroundColor="#3b3b3b"
                    foregroundColor="#f5304c"
                    key={index}
                    {...props}
                >
                    <rect x="0" y="0" rx="7" ry="7" width="290" height="18" />
                    <rect x="0" y="25" rx="3" ry="3" width="78" height="7" />
                    <rect x="0" y="37" rx="3" ry="3" width="200" height="7" />
                </ContentLoader>
            ))}
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
            // Calculate the number of rectangles based on window height
            const windowHeight = window.innerHeight;
            const rectHeight = 46; // Height of each rectangle
            const count = Math.floor(windowHeight / rectHeight); // Number of rectangles that fit
            setNumRects(count);
        };

        // Update on mount and window resize
        updateRectCount();
        window.addEventListener('resize', updateRectCount);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', updateRectCount);
        };
    }, []);

    // Only render on the client
    if (!isClient) {
        return null;
    }

    // Dynamically set the viewBox height based on the number of rectangles
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
                    y={45 + i * 14} // Adjust position based on index
                    rx="3"
                    ry="3"
                    width={Math.random() * (300 - 80) + 80} // Random width
                    height="9"
                    key={i}
                />
            ))}
        </ContentLoader>
    );
}