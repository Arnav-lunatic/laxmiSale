import { useEffect, useState } from "react";
import { FaAngleUp, FaPhone } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

function FloatingActionButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const disableTooltip = setTimeout(() => {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            if (tooltip instanceof HTMLElement) tooltip.style.display = 'none';
        });
        getEnableTooltip;
    }, 15000)

    disableTooltip

    const getEnableTooltip = setTimeout(() => {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            if (tooltip instanceof HTMLElement) tooltip.style.display = 'flex';
        });
        disableTooltip;
    }, 120000);

    return (
        <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 flex flex-col gap-4 z-40">
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


            <div className="tooltip border border-secondary flex items-center absolute bottom-2 right-16 bg-primary pr-3 pl-2 py-1 rounded-l-lg rounded-r-sm shadow-lg text-sm whitespace-nowrap cursor-default">
                <button
                    className=" text-lg mr-2 hover:scale-120 transition cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        const tooltip = e.currentTarget.parentElement;
                        if (tooltip) tooltip.style.display = 'none';
                    }}
                >
                    <IoMdCloseCircle />
                </button>
                Contact us
                <div className="absolute bottom-1/2 right-0 translate-y-1/2 translate-x-1/2 w-4 h-4 bg-primary rotate-45 border-t border-r border-secondary"></div>
            </div>

        </div>
    )
}

export default FloatingActionButtons