import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
	Container,
	Flex,
	Box,
	Spacer,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	Avatar,
	Show,
	Link,
} from "@chakra-ui/react";
import { MdNotifications, MdMenu, MdKeyboardArrowRight } from "react-icons/md";

import { MenuMobile } from "components/MenuMobile";

import { mock } from "./mock";

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
					{menuMobileOpen && <MenuMobile toggleMenuMobile={toggleMenuMobile} />}
				</Show>

				<Show above="lg">
					<Box as="nav">
						{mock.menuList.map(({ text, href }) => (
							<NextLink key={text} href={href}>
								<Link px={6} variant="primary">
									{text}
								</Link>
							</NextLink>
						))}
					</Box>

					<Flex alignItems="center" ml={14}>
						<MdNotifications color="#5F6368" size={25} cursor="pointer" />
						<Menu>
							<MenuButton
								as={Box}
								textColor="gray.500"
								px={3}
								py={2}
								fontSize={14}
								ml={4}
								bg="#EAF2FF"
								borderRadius={20}
								cursor="pointer"
							>
								<Flex alignItems="center">
									<span>Pedro</span>
									<Avatar size="xs" name="Marina" src="https://bit.ly/ryan-florence" ml={2} />
									<MdKeyboardArrowRight size={15} />
								</Flex>
							</MenuButton>
							<MenuList>
								{mock.dropdownList.map(({ text, href }) => (
									<MenuItem key={text}>
										<NextLink key={text} href={href}>
											<a>{text}</a>
										</NextLink>
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Flex>
				</Show>
			</Flex>
		</Container>
	);
};
