/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
	Container,
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
	Button,
	HStack,
} from "@chakra-ui/react";
import { MdArrowForward, MdArrowDownward } from "react-icons/md";

import { mock } from "./mock";

export const Faq = () => {
	const [showMoreAccordion, setShowMoreAccordion] = useState(false);

	const quantityAccordionToShow = 4;

	return (
		<Container mb={16}>
			<Heading fontSize={20} fontWeight={500} mb={2}>
				F.A.Q
			</Heading>

			<Accordion allowMultiple>
				{mock.map(({ title, description }, index) => {
					if (!showMoreAccordion && index + 1 > quantityAccordionToShow) return;

					return (
						<AccordionItem key={index} mb={2} border="1px solid gray" borderRadius="base">
							{({ isExpanded }: any) => (
								<>
									<AccordionButton p={4} _focus={{ outline: "none" }}>
										<Box flex={1} textAlign="left">
											{title}
										</Box>
										{isExpanded ? (
											<MdArrowDownward color="blue" />
										) : (
											<MdArrowForward color="blue" />
										)}
									</AccordionButton>
									<AccordionPanel pt={4}>{description}</AccordionPanel>
								</>
							)}
						</AccordionItem>
					);
				})}
			</Accordion>

			<HStack justifyContent="center" mt={6}>
				<Button variant="primary_as_link" onClick={() => setShowMoreAccordion(prev => !prev)}>
					{showMoreAccordion ? "Ver menos" : "Ver mais"}
				</Button>
			</HStack>
		</Container>
	);
};
