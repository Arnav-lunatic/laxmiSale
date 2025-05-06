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
			className="bg-transparent border-t border-t-secondary rounded-none"
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
							<FooterTitle title="PRODUCTS" />
							<FooterLinkGroup col>
								<FooterLink href="/products/commercial-bhatti">
									Commercial Bhatti
								</FooterLink>
								<FooterLink href="/products/commercial-kitchen-sink">
									Commercial Kitchen Sink
								</FooterLink>
								<FooterLink href="/products/pizza-making-counter">
									Pizza Making Counter
								</FooterLink>
								<FooterLink href="/products/sweet-display-counter">
									Sweet Display Counter
								</FooterLink>
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
								<FooterLink href="/products">
									Our Products
								</FooterLink>
								<FooterLink href="/products/about">
									About Us
								</FooterLink>
								<FooterLink href="/products/contact">
									Contact Us
								</FooterLink>
							</FooterLinkGroup>
						</div>
					</div>
				</div>
				<FooterDivider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<FooterCopyright
						href="#"
						by="Laxmi sales corp."
						year={2025}
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
