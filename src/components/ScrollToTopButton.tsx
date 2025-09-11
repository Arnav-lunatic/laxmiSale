import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col gap-4 z-40">
            <div
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`bg-secondary/90 border-2 text-background border-background w-12 h-12 text-3xl flex items-center justify-center md:text-4xl rounded-full z-40 cursor-pointer transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                <FaAngleUp />
            </div>

            <div
                onClick={() => {
                    window.location.href = "/contact";
                }}
                className="bg-secondary/90 border-2 text-background border-background w-12 h-12 text-xl rounded-full z-40 cursor-pointer ease-in-out flex items-center justify-center">
                <FaPhone />
            </div>
        </div>
    )
}

export default ScrollToTopButton