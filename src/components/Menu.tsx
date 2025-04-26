"use client";

import {
	Drawer,
	DrawerItems,
	Sidebar,
	SidebarItem,
	SidebarItemGroup,
	SidebarItems,
} from "flowbite-react";
import { AiFillProduct } from "react-icons/ai";
import { FaInfoCircle, FaSitemap } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface openDrawer {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Menu({ isOpen, setIsOpen }: openDrawer) {
	const handleClose = () => setIsOpen(false);
	const navigate = useNavigate();

	const menuOptions = [
		{ title: "Home", icon: HiHome, path: "/" },
		{ title: "Products", icon: AiFillProduct, path: "/products" },
		{ title: "Brands", icon: FaSitemap, path: "" },
		{ title: "About us", icon: FaInfoCircle, path: "/about" },
	];

	return (
		<>
			<Drawer
				className="pt-20 border border-l-primary bg-background "
				open={isOpen}
				onClose={handleClose}
				position="right"
			>
				<DrawerItems>
					<Sidebar
						aria-label="Sidebar with multi-level dropdown example"
						className="[&>div]:bg-transparent [&>div]:p-0"
					>
						<div className="flex h-full flex-col justify-between py-2 ">
							<div>
								<SidebarItems>
									<SidebarItemGroup>
										{menuOptions.map((elem, index) => {
											return (
												<SidebarItem
													className="text-text hover:bg-secondary cursor-pointer"
													key={index}
													onClick={() => {
														handleClose()
														navigate(elem.path)
													}}
													icon={elem.icon}
												>
													{elem.title}
												</SidebarItem>
											);
										})}
									</SidebarItemGroup>
									<SidebarItemGroup>
										<SidebarItem
											className="text-text hover:bg-secondary"
											href="https://github.com/themesberg/flowbite-react/"
											icon={IoCall}
										>
											Contact us
										</SidebarItem>
									</SidebarItemGroup>
								</SidebarItems>
							</div>
						</div>
					</Sidebar>
				</DrawerItems>
			</Drawer>
		</>
	);
}
