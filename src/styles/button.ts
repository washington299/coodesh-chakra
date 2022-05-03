export const Button = {
	variants: {
		primary: {
			backgroundColor: "main.200",
			color: "white",
			fontWeight: 300,
		},
		primary_as_link: {
			backgroundColor: "transparent",
			color: "main.200",
			border: "none",
			_hover: {
				textDecoration: "underline",
			},
			_focus: {
				boxShadow: "none",
			},
		},
		warning: {
			backgroundColor: "warning.100",
			color: "black",
		},
		warning_outline: {
			backgroundColor: "transparent",
			color: "warning.100",
			border: "1px solid",
			fontWeight: 300,
		},
		light_green: {
			backgroundColor: "light_green.100",
			color: "white",
		},
		light_green_outline: {
			backgroundColor: "transparent",
			color: "light_green.100",
			border: "1px solid",
			fontWeight: 300,
		},
	},
};
