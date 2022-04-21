import { useState } from "react";
import Image from "next/image";
import {
	Container,
	Flex,
	Box,
	Spacer,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	Button,
	Avatar,
	Show,
	Fade,
} from "@chakra-ui/react";
import { MdNotifications, MdKeyboardArrowRight, MdMenu } from "react-icons/md";

import { MenuItem as MenuItemLink } from "components/MenuItem";
import { MenuMobile } from "components/MenuMobile";

export const Header = () => {
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);

	const toggleMenuMobile = () => setMenuMobileOpen(prev => !prev);

	return (
		<Container>
			<Flex alignItems="center" py={4}>
				<Image
					src="/assets/svg/logo.svg"
					alt="Blue circle with white color inside and a black text written Coodesh"
					width={170}
					height={50}
				/>

				<Spacer />

				<Show below="lg">
					<MdMenu size={25} cursor="pointer" onClick={toggleMenuMobile} />
					{menuMobileOpen && (
						<Fade in={menuMobileOpen}>
							<MenuMobile toggleMenuMobile={toggleMenuMobile} />
						</Fade>
					)}
				</Show>

				<Show above="lg">
					<Box as="nav">
						<MenuItemLink text="Contrate DEVs" href="/" />
						<MenuItemLink text="Divulgar vagas" href="/" />
						<MenuItemLink text="Vagas" href="/" />
						<MenuItemLink text="Dicas" href="/" />
					</Box>

					<Flex alignItems="center" ml={14}>
						<MdNotifications color="#5F6368" size={25} cursor="pointer" />
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<MdKeyboardArrowRight />}
								textColor="gray.500"
								ml={4}
								bg="#EAF2FF"
								borderRadius={20}
							>
								Pedro
								<Avatar size="xs" name="Marina" src="https://bit.ly/ryan-florence" ml={2} />
							</MenuButton>
							<MenuList>
								<MenuItem>Meu Painel</MenuItem>
								<MenuItem>Editar Perfil</MenuItem>
								<MenuItem>Log out</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Show>
			</Flex>
		</Container>
	);
};
