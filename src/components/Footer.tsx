"use client";

import {
	Footer,
	FooterCopyright,
	FooterDivider,
	FooterIcon,
	FooterLink,
	FooterLinkGroup,
	FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import mainIcon from "/src/assets/laxmi 2-04.png";
import { FaLinkedin } from "react-icons/fa";

export function FooterComponent() {
	return (
		<Footer
			container
			className="bg-transparent border-t border-t-secondary rounded-none mt-4"
		>
			<div className="w-full">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div>
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
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<FooterTitle title="PRODUCTS CATEGORIES" />
							<FooterLinkGroup col>
								{
									["Commercial Kitchen Equipment", "Refrigerators", "Ovens", "Display Counters", "Fryers", "Water Coolers", "Other Products"].map((item, index) => (
										<FooterLink key={index} href={`/products/category/${item.toLowerCase().replace(/\s+/g, "-")}`}>
											{item}
										</FooterLink>
									))
								}
							</FooterLinkGroup>
						</div>

						<div>
							<FooterTitle title="Follow us" />
							<FooterLinkGroup col>
								<FooterLink href="https://www.instagram.com/laxmi_sales_corporation._?igsh=MXV4OXljOXp4ZGwxMw==">Instagram</FooterLink>
								<FooterLink href="https://www.facebook.com/share/1ADTHoZd31/">Facebook</FooterLink>
								<FooterLink href="https://www.linkedin.com/company/laxmi-sales-corporation-india/">Linkedin</FooterLink>
							</FooterLinkGroup>
						</div>

						<div>
							<FooterTitle title="IMPORTANT LINKS" />
							<FooterLinkGroup col>
								<FooterLink href="/">
									Home
								</FooterLink>
								<FooterLink href="/products/category/all">
									Our Products
								</FooterLink>
								<FooterLink href="/about">
									About Us
								</FooterLink>
								<FooterLink href="/contact">
									Contact Us
								</FooterLink>
							</FooterLinkGroup>
						</div>
					</div>
				</div>
				<FooterDivider />
				<div className="w-full text-center  sm:flex sm:items-center sm:justify-between">

					<div className="flex flex-col sm:items-center">
						<FooterCopyright
							href="#"
							by="Laxmi sales corperation™"
							year={2025}
						/>
						<div className="text-xs text-gray-500">
							Designed & Developed by{" "}
							<a
								href="https://www.linkedin.com/in/arnav-singh-1360642b9/"
								className="hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Arnav
							</a>
						</div>
					</div>

					<div className="mx-auto sm:mx-10 md:mx-12 w-fit mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FooterIcon
							href="https://www.facebook.com/share/1ADTHoZd31/"
							target="_blank"
							icon={BsFacebook}
						/>
						<FooterIcon
							href="https://www.instagram.com/laxmi_sales_corporation._"
							target="_blank"
							icon={BsInstagram}
						/>
						<FooterIcon
							href="https://www.linkedin.com/company/laxmi-sales-corporation-india/about/"
							target="_blank"
							icon={FaLinkedin}
						/>
					</div>
				</div>
			</div>
		</Footer>
	);
}
