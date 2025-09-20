import founderImg from "/src/assets/founder.jpeg";
import FloatingActionButtons from "./FloatingActionButtons";

export const AboutUs = () => {
	return (
		<section className="relative p-1">
			<FloatingActionButtons />

			<div className="mx-auto border border-secondary rounded-2xl p-1 md:p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 items-center bg-background/50 backdrop-blur-lg">
				<div>
					<div className="pb-8 flex">
						<div className="flex-1">
							<h1 className="text-text text-5xl font-bold">
								This is
							</h1>
							<h1 className="text-primary text-4xl font-serif ml-4 border-b-2 p-1">
								Laxmi Sales Corporation
							</h1>
						</div>
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
						<div className="relative w-60 h-72 xl:w-68 xl:h-82">
							<img
								className="w-52 h-60 xl:w-60 xl:h-72 object-cover absolute top-0 right-0 z-10"
								src="https://res.cloudinary.com/laxmisales/image/upload/q_10/workersgrinder.jpg"
								alt="..."
							/>
							<div className="w-52 h-60 xl:w-60 xl:h-72 border-8 border-primary absolute bottom-0 left-0"></div>
						</div>
					</div>

					<div className="absolute top-0 left-0">
						<div className="relative w-56 h-72 xl:w-68 xl:h-82">
							<img
								className="w-52 h-60 xl:w-60 xl:h-72 object-cover absolute top-0 right-0 z-10"
								src="https://res.cloudinary.com/laxmisales/image/upload/q_10/work.jpg"
								alt="..."
							/>
							<div className="w-52 h-60 xl:w-60 xl:h-72 border-8 border-primary absolute bottom-0 left-0"></div>
						</div>
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
