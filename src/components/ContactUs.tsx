import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";

export function ContactUs() {
	const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				e.target as HTMLFormElement,
				import.meta.env.VITE_API_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message sent!");
				},
				(error) => {
					console.log(error.text);
					alert("Failed to send message.");
				}
			);
	};
	return (
		<div className="w-full lg:w-[90%] m-auto p-2">
			<div className="flex w-full justify-between items-center flex-col md:flex-row">
				<div className="w-full md:w-1/2 text-text max-w-xl">
					<h1 className="text-text text-3xl lg:text-5xl font-extrabold mb-12">
						Contact Us
					</h1>

					<h2 className="font-bold text-md lg:text-xl mb-4">
						We'd love to hear from you!
					</h2>

					<p>
						Whether you have a question, feedback, or just want to
						say hello, feel free to reach out to us through any of
						the channels below.
					</p>

					<p className="mb-1 flex items-center gap-2 text-text my-8">
						<FaPhoneAlt /> Phone:
						<a
							href="tel:+919876543210"
							className="text-primary hover:underline"
						>
							+91 9897258209
						</a>
					</p>
					<p className=" flex items-center gap-2 text-text mb-8">
						<IoMdMail /> Email:
						<a
							href="mailto:laxmisalescooperation63@gamil.com"
							className="text-primary hover:underline w-[70%] truncate"
						>
							laxmisalescooperation63@gamil.com
						</a>
					</p>

					<p className=" flex items-start gap-2 text-text mb-8">
						<FaLocationDot className="mt-1" />
						Godown address:
						<br />
						Pital nagri
						<br />
						Baldevpuri choraya
						<br />
						Moradabad, 244001
						<br />
					</p>
				</div>

				<form
					className="w-full md:w-1/2 max-w-xl grid gap-8 bg-secondary/50 p-4 rounded-2xl"
					onSubmit={handleSubmitMessage}
				>
					<div>
						<div className="mb-2 block">
							<Label className="text-text" htmlFor="name">
								Your name
							</Label>
						</div>
						<TextInput
							id="name"
							name="name"
							placeholder="Arnav Singh"
							required
						/>
					</div>

					<div>
						<div className="block mb-2">
							<Label htmlFor="email" className="text-text">
								Your email
							</Label>
						</div>
						<TextInput
							id="email"
							type="email"
							name="email"
							icon={HiMail}
							rightIcon={HiMail}
							placeholder="laxmisales@gmail.com"
							required
						/>
					</div>

					<div>
						<div className="block mb-2">
							<Label htmlFor="comment" className="text-text">
								Your message
							</Label>
						</div>
						<Textarea
							id="comment"
							name="message"
							placeholder="write your message.."
							required
							rows={8}
						/>
					</div>

					<Button
						className="bg-accent hover:bg-secondary"
						type="submit"
					>
						Send
					</Button>
				</form>
			</div>
		</div>
	);
}
