import { extendTheme } from "@chakra-ui/react";

import { global } from "./global";
import { colors } from "./colors";
import { Container } from "./container";
import { Link } from "./link";
import { Badge } from "./badge";
import { Button } from "./button";
import { Heading } from "./heading";

export const theme = extendTheme({
	colors,
	styles: {
		global,
	},
	components: {
		Container,
		Link,
		Badge,
		Button,
		Heading,
	},
});
