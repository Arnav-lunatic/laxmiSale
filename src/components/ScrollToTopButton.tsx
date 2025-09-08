import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";



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
        <div
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`fixed bottom-2 right-2 lg:bottom-8 lg:right-8 bg-secondary/90 border-2 text-background border-background p-2 text-3xl md:text-4xl rounded-full z-40 cursor-pointer transition-all duration-300 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
            <FaAngleUp />
        </div>
    )
}

export default ScrollToTopButton