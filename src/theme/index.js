import merge from 'lodash/merge'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'

const baseOptions = {
	direction: 'ltr',
	components: {
		MuiAvatar: {
			styleOverrides: {
				fallback: {
					height: '75%',
					width: '75%',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					boxSizing: 'border-box',
				},
				html: {
					MozOsxFontSmoothing: 'grayscale',
					WebkitFontSmoothing: 'antialiased',
					height: '100%',
					width: '100%',
				},
				body: {
					height: '100%',
				},
				'#root': {
					height: '100%',
				},
				'#nprogress .bar': {
					zIndex: '2000 !important',
				},
			},
		},
		MuiCardHeader: {
			defaultProps: {
				titleTypographyProps: {
					variant: 'h6',
				},
			},
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					borderRadius: 3,
					overflow: 'hidden',
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 'auto',
					marginRight: '16px',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
	},
	typography: {
		button: {
			fontWeight: 600,
		},
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
		h1: {
			fontWeight: 600,
			fontSize: '3.5rem',
		},
		h2: {
			fontWeight: 600,
			fontSize: '3rem',
		},
		h3: {
			fontWeight: 600,
			fontSize: '2.25rem',
		},
		h4: {
			fontWeight: 600,
			fontSize: '2rem',
		},
		h5: {
			fontWeight: 600,
			fontSize: '1.5rem',
		},
		h6: {
			fontWeight: 400,
			fontSize: '1.115rem',
		},
		overline: {
			fontWeight: 600,
		},
	},
}

const theme = {
	components: {
		MuiInputBase: {
			styleOverrides: {
				input: {
					'&::placeholder': {
						opacity: 0.86,
						color: '#42526e',
					},
				},
			},
		},
	},
	palette: {
		action: {
			active: '#6b778c',
			main: '#6b778c',
		},
		background: {
			contrastText: '#e6e6e6',
			default: '#121212',
			gray: '#a7a7a7',
			lightGrey: '#e5e3e3',
			paper: '#ffffff',
			accent: '#828290',
			button: '#828290',
			dark: colors.common.white,
		},
		divider: 'rgba(145, 158, 171, 0.24)',
		primary: {
			contrastText: '#ffffff',
			main: '#828290',
		},
		primaryHoverBg: {
			contrastText: '#000000',
			main: '#F7EDE2',
		},
		accent1: {
			contrastText: '#ffffff',
			main: '#828290',
		},
		accent2: {
			contrastText: '#ffffff',
			main: '#A29B9B',
		},
		accent3: {
			contrastText: '#ffffff',
			main: '#5F5F65',
		},
		button: {
			contrastText: '#ffffff',
			main: '#828290',
		},
		text: {
			primary: '#E6E6E6',
			secondary: '#A2A2A7',
		},
	},
}

export const createCustomTheme = (config = {}) => {
	let theme = theme[config.theme]

	let theme = createTheme(
		merge(
			{},
			baseOptions,
			theme,
			{
				...(config.roundedCorners && {
					shape: {
						borderRadius: 10,
					},
				}),
			},
			{
				direction: config.direction,
			}
		)
	)

	if (config.responsiveFontSizes) {
		theme = responsiveFontSizes(theme)
	}

	return theme
}
