"use client";

import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "flowbite-react";

interface openDrawer {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function InfoWindows({ openModal, setOpenModal }: openDrawer) {
	return (
		<div>
			<Modal
				dismissible
				show={openModal}
				onClose={() => setOpenModal(false)}
			>
				<ModalHeader className="bg-background">
					<h1 className="text-primary font-bold">Terms of Service</h1>
				</ModalHeader>
				<ModalBody className="bg-background border-t border-secondary">
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European
							Union enacts new consumer privacy laws for its
							citizens, companies around the world are updating
							their terms of service agreements to comply.
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							The European Union’s General Data Protection
							Regulation (G.D.P.R.) goes into effect on May 25 and
							is meant to ensure a common set of data rights in
							the European Union. It requires organizations to
							notify users as soon as possible of high-risk data
							breaches that could personally affect them.
						</p>
					</div>
				</ModalBody>
				<ModalFooter className="bg-background border-t border-secondary">
					<Button color="gray" onClick={() => setOpenModal(false)}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
