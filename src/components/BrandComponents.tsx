export default function BrandComponents() {
	const logos = [
		"https://www.middlebycelfrost.com/allapi/assets/img/logo/logo-white.png",
		"https://www.usha.com/themes/custom/framework/images/usha.png",
		"https://www.voltas.in/themes/user/site/default/asset/img/logo_voltas.svg",
		"https://www.nirvanaproducts.com/images/logo.png",
		"https://mljbuhoejj94.i.optimole.com/w:678/h:139/q:mauto/ig:avif/https://stellargastronom.com/wp-content/uploads/2024/10/Stellar-Logo-updated.png",
		"https://trufrost.com/assets/logo-01.webp",
		"https://www.middlebycelfrost.com/allapi/assets/img/logo/logo-white.png",
		"https://www.usha.com/themes/custom/framework/images/usha.png",
		"https://www.voltas.in/themes/user/site/default/asset/img/logo_voltas.svg",
		"https://www.nirvanaproducts.com/images/logo.png",
		"https://mljbuhoejj94.i.optimole.com/w:678/h:139/q:mauto/ig:avif/https://stellargastronom.com/wp-content/uploads/2024/10/Stellar-Logo-updated.png",
		"https://trufrost.com/assets/logo-01.webp",
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
				<div className="whitespace-nowrap animate-scroll flex gap-4 lg:gap-16 text-text text-sm font-medium">
					{logos.map((logo, index) => (
						<span
							key={index}
							className="shrink-0 whitespace-nowrap"
						>
							<img className="h-4 lg:h-12" src={logo} alt="brand" />
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
