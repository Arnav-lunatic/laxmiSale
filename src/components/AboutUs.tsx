
const AboutUs = () => {
	return (
		<section className="bg-background py-40 px-4 md:px-8 lg:px-16">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Image */}
				<div>
					<img
						src="https://images.pexels.com/photos/5532664/pexels-photo-5532664.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Kitchen Machines"
						className="rounded-2xl shadow-lg w-full object-cover"
					/>
				</div>

				{/* Text */}
				<div>
					<h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
						About Us
					</h2>
					<p className="text-primary text-lg leading-relaxed mb-4">
						At Laxmi Sales, we specialize in providing
						top-of-the-line kitchen machines for homes and
						businesses. With years of experience and a passion for
						innovation, our mission is to simplify your cooking
						experience through reliable and efficient appliances.
					</p>
					<p className="text-secondary text-lg leading-relaxed">
						Whether you're a professional chef or a home cook, our
						products are built to deliver performance, durability,
						and style. Join thousands of happy customers who trust
						us for their kitchen needs.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
