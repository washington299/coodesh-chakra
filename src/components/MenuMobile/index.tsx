import NextLink from "next/link";
import { Container, Box, Flex, VStack, Link } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { mock } from "components/Header/mock";

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
					{mock.menuList.map(({ text, href }) => (
						<NextLink key={text} href={href}>
							<Link px={6} variant="primary" onClick={toggleMenuMobile}>
								{text}
							</Link>
						</NextLink>
					))}
				</VStack>
			</Container>
		</Box>
	);
};
