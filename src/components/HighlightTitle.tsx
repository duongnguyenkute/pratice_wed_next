"use client";
import { useState } from "react"
interface Text{
    text: String;
}

export function HighlightTitle( {text}: Text ) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);
    return(
        <div className="flex pb-3 gap-1 items-center cursor-pointer hover:opacity-70" onClick={handleToggle}>
            <img src="Plus.svg" alt="" />
            <p className="text-lg font-normal leading-relaxed text-tertiary">Professional Highlights</p>
            {isOpen && (
                <p className="text-lg font-normal leading-relaxed text-tertiary">
                 {text}
                </p>
            )}
        </div>
    )
}