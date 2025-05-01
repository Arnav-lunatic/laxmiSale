export default function BrandComponents() {
	const logos = [
		"https://www.middlebycelfrost.com/allapi/assets/img/logo/logo-white.png",
		"https://www.usha.com/themes/custom/framework/images/usha.png",
		"https://www.voltas.in/themes/user/site/default/asset/img/logo_voltas.svg",
		"https://www.middlebycelfrost.com/allapi/assets/img/logo/logo-white.png",
		"https://www.usha.com/themes/custom/framework/images/usha.png",
		"https://www.voltas.in/themes/user/site/default/asset/img/logo_voltas.svg",
	];
	return (
		<div className="relative py-28 overflow-hidden">
			<div className="w-full text-text text-center">
				<h1 className="font-extrabold text-4xl mb-2">
					Proud Partners
				</h1>
				<p className="mb-8">
					Celfrost company, Nirvana, Stellar company, Trufrost company,
					Usha, Voltas
				</p>
				<div className="whitespace-nowrap animate-scroll flex gap-4 lg:gap-10 text-text text-sm font-medium">
					{logos.map((logo, index) => (
						<span
							key={index}
							className="shrink-0 whitespace-nowrap"
						>
							<img className="h-4 lg:h-8" src={logo} alt="brand" />
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
