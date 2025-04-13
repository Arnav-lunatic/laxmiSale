"use client";

import {
	Footer,
	FooterBrand,
	FooterCopyright,
	FooterDivider,
	FooterIcon,
	FooterLink,
	FooterLinkGroup,
	FooterTitle,
} from "flowbite-react";
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
} from "react-icons/bs";

export function FooterComponent() {
	return (
		<Footer
			container
			className="bg-background border-t border-t-secondary rounded-none"
		>
			<div className="w-full">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div>
						<div className="flex gap-2">
							<img
								src="src/assets/laxmi 2-04.png"
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
							<FooterTitle title="BRANDS" />
							<FooterLinkGroup col>
								<FooterLink href="#">Beech Oven</FooterLink>
								<FooterLink href="#">
									Carter Hoffmann
								</FooterLink>
								<FooterLink href="#">Cibo+</FooterLink>
								<FooterLink href="#">Doyon</FooterLink>
								<FooterLink href="#">Firex</FooterLink>
								<FooterLink href="#">
									Globe Food Equipment
								</FooterLink>
								<FooterLink href="#">Icetro</FooterLink>
								<FooterLink href="#">Invoq by HOUNO</FooterLink>
								<FooterLink href="#">La Cimbali</FooterLink>
								<FooterLink href="#">Toastmaster</FooterLink>
								<FooterLink href="#">Varimixer</FooterLink>
							</FooterLinkGroup>
						</div>
						
						<div>
							<FooterTitle title="PRODUCTS" />
							<FooterLinkGroup col>
                                <FooterLink href="#">
                                    Bain Marie
                                </FooterLink>
								<FooterLink href="#">
									Bar Refrigeration
								</FooterLink>
                                <FooterLink href="#">
                                    Blenders
                                </FooterLink>
								<FooterLink href="#">
									Bulk Cooking/Bratt Pans
								</FooterLink>
								<FooterLink href="#">
									Coffee Machine/Bean Grinder
								</FooterLink>
								<FooterLink href="#">
									Combination ovens
								</FooterLink>
								<FooterLink href="#">
									Convection Oven
								</FooterLink>
                                <FooterLink href="#">
                                    Deck Ovens
                                </FooterLink>
                                <FooterLink href="#">
                                    Dough Handling
                                </FooterLink>
								<FooterLink href="#">
									Food Warming/ Holding
								</FooterLink>
								<FooterLink href="#">
									Grill, Griddles & Panini
								</FooterLink>
							</FooterLinkGroup>
                        </div>
                        
                        <div>
							<FooterTitle title="Follow us" />
							<FooterLinkGroup col>
								<FooterLink href="#">Instagram</FooterLink>
								<FooterLink href="#">Twitter</FooterLink>
							</FooterLinkGroup>
						</div>
					</div>
				</div>
				<FooterDivider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<FooterCopyright href="#" by="Laxmi sales corp." year={2025} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FooterIcon href="#" icon={BsFacebook} />
						<FooterIcon href="#" icon={BsInstagram} />
						<FooterIcon href="#" icon={BsTwitter} />
					</div>
				</div>
			</div>
		</Footer>
	);
}
