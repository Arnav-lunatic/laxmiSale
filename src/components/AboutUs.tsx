import { Carousel } from "flowbite-react";
import founderImg from "/src/assets/founder.jpeg";

export const AboutUs = () => {
	return (
		<section className="p-1">
			<div className="absolute top-0 right-0 left-0 h-screen -z-1">
				<Carousel className="invisible lg:visible" leftControl=" " rightControl=" ">
					<img
						src="https://images.pexels.com/photos/16788578/pexels-photo-16788578/free-photo-of-coffee-machine-with-silver-cups.jpeg"
						alt="..."
					/>
					<img
						src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
						alt="..."
					/>
					<img
						src="https://images.pexels.com/photos/12303760/pexels-photo-12303760.jpeg"
						alt="..."
					/>
					<img
						src="https://images.pexels.com/photos/19296796/pexels-photo-19296796/free-photo-of-man-cut-nails-with-grinder.jpeg"
						alt="..."
					/>
					<img
						src="https://images.pexels.com/photos/6045041/pexels-photo-6045041.jpeg"
						alt="..."
					/>
				</Carousel>
			</div>
			<div className="mx-auto border border-secondary rounded-2xl p-1 md:p-10 lg:p-20 my-20  grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-10 items-center bg-background/50 backdrop-blur-lg">
				<div>
					<div className="pb-8">
						<h1 className="text-text text-5xl font-bold">
							This is
						</h1>
						<h1 className="text-primary text-4xl font-serif ml-4 border-b-2 p-1">
							Laxmi Sales Corporation
						</h1>
					</div>
					<div className="text-text ml-16 p-2 border-l-6 border-secondary">
						Founded in 1998, Laxmi Sales Corporation has been a
						trusted name in the industry for over two decades.
						Established with a commitment to quality, reliability,
						and customer satisfaction, we have steadily built a
						reputation for excellence across every project and
						partnership.
					</div>
					<div className="text-text ml-8 my-6 p-2 border-l-6 border-secondary">
						At Laxmi Sales Corporation, we specialize in delivering
						top-notch products that meet the highest standards of
						quality. Our focus is not just on supplying products but
						on building lasting relationships with our customers by
						understanding their needs and exceeding their
						expectations.
					</div>

					<div className="text-text ml-16 my-6 p-2 border-l-6 border-secondary">
						With a legacy of trust and a forward-looking approach,
						we continue to expand our offerings, invest in new
						technologies, and uphold the values that have been the
						foundation of our journey since 1998.
					</div>
				</div>

				<div className="relative w-full max-w-2xl m-auto h-[580px] md:h-[450px] lg:h-full">
					<div className="absolute bottom-0 right-0">
						<div className="relative w-60 h-72 xl:w-72 xl:h-88">
							<img
								className="w-52 h-60 xl:w-60 xl:h-72 object-cover absolute top-0 right-0 z-10"
								src="https://images.pexels.com/photos/6045041/pexels-photo-6045041.jpeg"
								alt="..."
							/>
							<div className="w-52 h-60 xl:w-60 xl:h-72 border-8 border-primary absolute bottom-0 left-0"></div>
						</div>
					</div>

					<div className="absolute top-0 left-0">
						<div className="relative w-56 h-72 xl:w-72 xl:h-88">
							<img
								className="w-52 h-60 xl:w-60 xl:h-72 object-cover absolute top-0 right-0 z-10"
								src="https://images.pexels.com/photos/19296796/pexels-photo-19296796/free-photo-of-man-cut-nails-with-grinder.jpeg"
								alt="..."
							/>
							<div className="w-52 h-60 xl:w-60 xl:h-72 border-8 border-primary absolute bottom-0 left-0"></div>
						</div>
					</div>

					<div className="absolute top-0 right-24 w-32 animate-rotate45 origin-bottom-left">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
						>
							<path
								fill="#55372c"
								d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6l0-12.1L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0l18.1 0c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className="mx-auto border border-secondary rounded-2xl p-1 md:p-10 lg:p-20 my-40 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center text-text bg-background/50 backdrop-blur-lg">
				<div className="flex gap-2">
					<div className="w-full">
						<div className="relative w-full h-72">
							<img
								className="w-[90%] h-[90%] object-cover absolute top-0 right-0 z-10"
								src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg"
								alt="..."
							/>
							<div className="w-[90%] h-[90%] border-8 border-primary absolute bottom-0 left-0"></div>
						</div>
					</div>

					<div className="mt-30 w-full">
						<div className="relative w-full h-72">
							<img
								className="w-[90%] h-[90%] object-cover absolute top-0 right-0 z-10"
								src="https://images.pexels.com/photos/1619576/pexels-photo-1619576.jpeg"
								alt="..."
							/>
							<div className="w-[90%] h-[90%] border-8 border-primary absolute bottom-0 left-0"></div>
						</div>
					</div>
				</div>

				<div>
					<div className=" my-6 p-2 border-l-6 border-secondary">
						<h1 className="text-xl font-bold">Our Mission</h1>
						<p>
							To provide premium quality products and services
							that bring lasting value to our customers.
						</p>
					</div>

					<div className="ml-16 my-8 p-2 border-l-6 border-secondary">
						<h1 className="text-xl font-bold">Our Vision</h1>
						<p>
							To be a leader in the industry by setting new
							standards of excellence and building a future driven
							by trust, innovation, and customer satisfaction.
						</p>
					</div>
				</div>
			</div>

			<div className="mx-auto my-40 border border-secondary rounded-2xl p-1 md:p-10 lg:p-20 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10 items-center text-text bg-background/50 backdrop-blur-lg">
				<div className="w-full">
					<div className="relative w-full p-1 lg:p-20 h-96">
						<img
							className="w-[90%] h-[90%] object-cover absolute top-0 right-0 z-10"
							src={founderImg}
							alt="..."
						/>
						<div className="w-[90%] h-[90%] border-8 border-primary absolute bottom-0 left-0"></div>
					</div>
				</div>
				<div>
					<div className="ml-16 p-2 border-l-6 border-secondary">
						<p>
							Under the visionary leadership of Mr. Vineet Kumar
							Pandey, Laxmi Sales Corporation has grown from a
							modest beginning into a respected and trusted name
							in the industry. His clear vision, strong work
							ethic, and strategic approach have helped expand the
							company’s reach, diversify its offerings, and build
							a loyal customer base.
						</p>
					</div>
					<div className="ml-0 my-8 p-2 border-l-6 border-secondary">
						<p>
							Mr. Pandey’s commitment to innovation, integrity,
							and service has been the foundation of the company’s
							success. By embracing new technologies and
							prioritizing customer satisfaction, he has created a
							culture of trust and continuous improvement, earning
							Laxmi Sales Corporation a solid reputation in the
							market.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
