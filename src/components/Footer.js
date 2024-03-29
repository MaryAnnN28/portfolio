import React, { useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Box, Grid, Typography, IconButton, Link, makeStyles } from '@material-ui/core'
import { gsap } from 'gsap'
import '../assets/Navbar.css'

import { FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa'

const useStyles = makeStyles(() => ({
	footerContainer: {
		width: '100%',
		height: '150px',
		opacity: '50%',
		position: 'relative',
		bottom: 0,
		backgroundColor: '#101010',
	},
	link: {
		fontFamily: 'Montserrat',
		fontSize: '10pt',
		fontWeight: 300,
		zIndex: 1,
		color: '#A5B2CC',
		'&:hover': {
			color: '#566378',
		},
		letterSpacing: '1.5pt',
	},
	logo: {
		fontFamily: 'Gruppo',
		fontSize: '50pt',
		zIndex: 1,
		color: '#A5B2CC',
		'&:hover': {
			color: '#566378',
			fontWeight: 100,
		},
		letterSpacing: '5px',
	},
	icons: {
		// marginRight: '1.5em',
		paddingLeft: '1em',
		zIndex: 1,
		color: '#A5B2CC',
		'&:hover': {
			color: '#566378',
		},
	},
}))

const Footer = (props) => {
	const classes = useStyles()
	const { onSidebarMobileOpen, onMobileClose, openMobile } = props
	const location = useLocation()
	const link1 = useRef()
	const link2 = useRef()
	const link3 = useRef()
	const link4 = useRef()
	const link5 = useRef()

	return (
		<Grid container className={classes.footerContainer} sx={{ paddingTop: 1.5, pl: 10 }}>
			<Grid item md={3}>
				<Box
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						ml: 10,
					}}
				>
					<Typography className={classes.logo}>MN</Typography>
				</Box>
			</Grid>
			<Grid item md={6}>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'space-between',
						mt: 6,
						// ml: 10,
						// mr: 10,
						pl: 20,
						pr: 20,
					}}
				>
					<Link
						component={RouterLink}
						to="/about"
						underline="none"
						sx={{
							px: 0.5,
						}}
					>
						<Typography className={classes.link}>About</Typography>
					</Link>

					<Link
						component={RouterLink}
						to="/projects"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography className={classes.link}>Projects</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/blog"
						underline="none"
						sx={{
							px: 0.5,
						}}
					>
						<Typography className={classes.link}>Blog</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/contact"
						underline="none"
						sx={{
							px: 0.5,
						}}
					>
						<Typography className={classes.link}>Contact</Typography>
					</Link>
				</Box>
			</Grid>
			<Grid item md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Box
					sx={{
						alignItems: 'right',
						display: 'flex',
						ml: 10,
						mr: 30,
						mt: 5.5,
						color: '#efefef',
						zIndex: 22,
					}}
				>
					<Link className={classes.icons} href="https://github.com/MaryAnnN28" target="_blank">
						<FaGithub fontSize="22px" />
					</Link>
					<Link className={classes.icons} href="https://www.linkedin.com/in/maryannnavarrete/" target="_blank">
						<FaLinkedinIn fontSize="22px" />
					</Link>
					<Link className={classes.icons} href="https://maryann-navarrete.medium.com/" target="_blank">
						<FaMediumM fontSize="22px" />
					</Link>
					<Link className={classes.icons} href="https://www.twitter.com/maryannn28" target="_blank">
						<FaTwitter fontSize="22px" />
					</Link>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Footer
