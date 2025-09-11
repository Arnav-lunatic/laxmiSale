import { Carousel } from "flowbite-react";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Header() {
	const carouselData = [
		{
			img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
			heading: "Welcome to Laxmi Sales Corporation",
			text1: "Discover Top-Quality Industrial Equipment at Unbeatable Prices!",
			text2: "Explore our extensive range of industrial equipment designed to meet all your business needs. From heavy machinery to precision tools, we offer reliable solutions that enhance productivity and efficiency. Shop now and take advantage of our competitive prices and exceptional customer service!",
			button: {
				text: "Explore Products",
				link: "/products/category/all"
			}
		},
		{
			img: "https://images.pexels.com/photos/5864291/pexels-photo-5864291.jpeg",
			heading: "Elevate Your Culinary Experience with Our Premium Equipment!",
			text1: "Elevate Your Culinary Experience with Our Premium Equipment!",
			text2: "Discover the perfect blend of style and functionality with our premium kitchen equipment. Designed for culinary enthusiasts and professionals alike, our products ensure exceptional performance and durability. Upgrade your kitchen today and experience the difference!",
			button: {
				text: "Know Us More",
				link: "/about"
			}
		},
		{
			img: "https://images.pexels.com/photos/5531043/pexels-photo-5531043.jpeg",
			heading: "Unleash Your Kitchen's Potential with Our Cutting-Edge Solutions!",
			text1: "Unleash Your Kitchen's Potential with Our Cutting-Edge Solutions!",
			text2: "Revolutionize your cooking experience with our state-of-the-art kitchen solutions. From advanced cooking technologies to smart appliances, we provide the tools you need to elevate your culinary creations. Explore our collection and transform your kitchen into a culinary powerhouse!",
			button: {
				text: "Contact Us",
				link: "/contact"
			}
		},
		{
			img: "https://images.pexels.com/photos/4947388/pexels-photo-4947388.jpeg",
			heading: "Transform Your Cooking Space with Our Innovative Designs!",
			text1: "Transform Your Cooking Space with Our Innovative Designs!",
			text2: "Discover the perfect blend of style and functionality with our innovative kitchen designs. We offer a wide range of customizable solutions to suit your unique needs and preferences. Elevate your cooking space today and enjoy a more efficient and enjoyable culinary experience!",
			button: {
				text: "Visit Our Facebook",
				link: "https://www.facebook.com/people/Laxmisalescorportion/100063962265029/?rdid=r0pY4AUclfsHhZpj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ADTHoZd31%2F"
			}
		},
		{
			img: "https://images.pexels.com/photos/10104424/pexels-photo-10104424.jpeg",
			heading: "Revolutionize Your Kitchen Workflow with Our Smart Solutions!",
			text1: "Revolutionize Your Kitchen Workflow with Our Smart Solutions!",
			text2: "Experience the future of cooking with our smart kitchen solutions. From intelligent appliances to automated workflows, we provide the technology you need to streamline your culinary processes. Embrace innovation and transform your kitchen into a modern culinary hub!",
			button: {
				text: "Visit Our LinkedIn",
				link: "https://www.linkedin.com/company/laxmi-sales-corporation-india/about/"
			}
		},
	];

	return (
		<div className="h-[90dvh] max-h-[960px] m-auto w-full relative">
			<Carousel className="p-2 h-full ">
				{carouselData.map((eachElem, index) => {
					return (
						<div key={index} className="h-full">
							<img
								className="h-full w-full object-cover"
								src={eachElem.img}
								alt="..."
							/>
							<div className="absolute bottom-0 right-0 left-0 via-black/60 text-text text-sm p-10 px-2 md:text-md lg:text-lg bg-gradient-to-b from-transparent to-black">
								<div className="w-full max-w-[1200px] m-auto">
									<h1 className="text-primary font-extrabold text-2xl md:text-4xl"
										style={{
											textShadow:
												'-2px -2px 0 #201315, 2px -2px 0 #201315, -2px 2px 0 #201315, 2px 2px 0 #201315'
										}}
									>
										{eachElem.heading}
									</h1>
									<p className="my-2 text-text">
										{eachElem.text1}
									</p>
									<p className="text-text/70">
										{eachElem.text2}
									</p>
									<button
										onClick={() => {
											window.open(eachElem.button.link, '_blank');
										}}
										className="flex items-center bg-primary p-2 rounded-lg border-2 border-background font-bold ml-auto hover:bg-primary/80 text-background">
										{eachElem.button.text}
										<MdOutlineArrowOutward className="inline ml-1 text-2xl" />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}
