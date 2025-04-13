import { Sling as Hamburger } from "hamburger-react";
import mainIcon from "/src/assets/laxmi 2-04.png";

interface openDrawer {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Nav({ isOpen, setIsOpen }: openDrawer) {
	return (
		<div className="bg-background border border-b-primary bot flex items-center justify-between fixed top-0 right-1/2 translate-x-1/2 w-full z-50 px-4">
			<div className="flex gap-2">
				<img
					src={mainIcon}
					className="h-16"
					alt="Flowbite React Logo"
				/>
				<span className="self-center text-xl font-extrabold text-text">
					Laxmi Sales Corp.
				</span>
			</div>

			<Hamburger
				color="#C39E3F"
				size={40}
				rounded
				duration={0.6}
				onToggle={(toggled) => {
					if (toggled) {
						setIsOpen(true);
					} else {
						setIsOpen(false);
					}
				}}
				toggled={isOpen}
				toggle={setIsOpen}
			/>
		</div>
	);
}
