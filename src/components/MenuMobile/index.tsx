import { Container, Box, Flex, VStack } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { MenuItem } from "components/MenuItem";

type MenuMobileProps = {
	toggleMenuMobile: () => void;
};

export const MenuMobile = ({ toggleMenuMobile }: MenuMobileProps) => {
	return (
		<Box bg="white" position="fixed" top={0} bottom={0} left={0} right={0} zIndex={10}>
			<Container>
				<Flex justifyContent="flex-end" py={8}>
					<MdClose size={25} cursor="pointer" onClick={toggleMenuMobile} />
				</Flex>

				<VStack spacing={6} alignItems="flex-start">
					<MenuItem text="Contrate DEVs" href="/" />
					<MenuItem text="Divulgar vagas" href="/" />
					<MenuItem text="Vagas" href="/" />
					<MenuItem text="Dicas" href="/" />
				</VStack>
			</Container>
		</Box>
	);
};
