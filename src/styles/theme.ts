import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		main: {
			100: "#377DFF",
		},
	},
	components: {
		Container: {
			baseStyle: {
				maxWidth: "1150px",
			},
		},
	},
});
