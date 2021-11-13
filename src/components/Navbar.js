import React, { useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Box, Grid, Typography, IconButton, Link, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { gsap } from 'gsap'
import '../assets/Navbar.css'
import MNLogo from '../images/MN_logo.png'
import MNLogoSerif from '../images/MN_logo_serif.png'
import MNLogo2 from '../images/MN_logo2.png'
import MNLogo2Serif from '../images/MN_logo2_serif.png'

import { FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from 'react-icons/fa'

const useStyles = makeStyles(() => ({
	logo: {
		'&:hover': {
			color: '#B59D4C',
		},
		zIndex: 99,
		position: 'absolute',
	},
	link: {
		fontFamily: 'Montserrat',
		fontSize: '10pt',
		fontWeight: 300,
		color: '#e6e6e6',
		position: 'relative',
		textDecoration: 'none',
		transition: 'all 0.25s linear',
		'&:hover': {
			color: '#efefef',
			letterSpacing: '6px',
			backgroundColor: '#566378',
			padding: '.15em',
		},
		letterSpacing: '3px',
	},
	icons: {
		marginRight: '1.5em',
		zIndex: 1,
		// color: '#40485C',
		color: '#888A8D',
		'&:hover': {
			color: '#566378',
			padding: '.2em',
		},
	},
}))

const Navbar = (props) => {
	const classes = useStyles()
	const { onSidebarMobileOpen, onMobileClose, openMobile } = props
	const location = useLocation()
	const link1 = useRef()
	const link2 = useRef()
	const link3 = useRef()
	const link4 = useRef()
	const icon1 = useRef()
	const icon2 = useRef()
	const icon3 = useRef()
	const icon4 = useRef()
	const logo = useRef()

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0, ...vars })
	}

	function scaleOut(target, vars) {
		return gsap.from(target, { opacity: 1, ...vars })
	}

	function scrollToSection(link, index) {
		return gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: link + (index + 1),
				offsetY: 70,
			},
		})
	}

	useLayoutEffect(() => {
		const logoAnimation = scaleOut(logo.current, {
			y: 320,
			x: 592,
			duration: 3.2,
			delay: 3,
			ease: 'power1.out',
			scale: 3.5,
		})
		const animation1 = fadeIn(link1.current, { y: -30, duration: 0.8, ease: 'back.out(3)', delay: 5.0 })
		const animation2 = fadeIn(link2.current, {
			y: -30,
			duration: 0.8,
			ease: 'back.out(3)',
			delay: 5.1,
		})
		const animation3 = fadeIn(link3.current, {
			y: -30,
			duration: 0.8,
			ease: 'back.out(3)',
			delay: 5.2,
		})
		const animation4 = fadeIn(link4.current, {
			y: -30,
			duration: 0.8,
			ease: 'back.out(3)',
			delay: 5.3,
		})
		const animation5 = fadeIn(icon1.current, {
			x: 35,
			y: -30,
			duration: 0.7,
			ease: 'back.out(3)',
			delay: 5.8,
		})
		const animation6 = fadeIn(icon2.current, {
			x: 35,
			y: -30,
			duration: 0.7,
			ease: 'back.out(3)',
			delay: 5.9,
		})
		const animation7 = fadeIn(icon3.current, {
			x: 35,
			y: -30,
			duration: 0.7,
			ease: 'back.out(3)',
			delay: 6,
		})
		const animation8 = fadeIn(icon4.current, {
			x: 35,
			y: -30,
			duration: 0.7,
			ease: 'back.out(3)',
			delay: 6.1,
		})
	}, [])

	useEffect(() => {
		if (openMobile & onMobileClose) {
			onMobileClose()
		}
	}, [location.pathname])

	return (
		<Grid container className={classes.navContainer} sx={{ paddingTop: 1.5, pl: 10 }}>
			<Grid item md={2}>
				<Box
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						ml: 8,
						mt: 3,
					}}
				>
					{/* <Typography className={classes.logo}>MN</Typography> */}
					<img src={MNLogo} alt="logo" width="105" className={classes.logo} ref={logo} />
				</Box>
			</Grid>
			<Grid item md={7}>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'space-between',
						mt: 6,
						// ml: 10,
						// mr: 10,
						pl: 30,
						pr: 25,
					}}
				>
					<a href="#section1" className={classes.link} ref={link1}>
						<Typography className={classes.link} ref={link1}>
							About
						</Typography>
					</a>
					<a href="#section2" className={classes.link}>
						<Typography className={classes.link} ref={link2}>
							Projects
						</Typography>
					</a>
					<a href="#section3" className={classes.link}>
						<Typography className={classes.link} ref={link3}>
							Blog
						</Typography>
					</a>
					<a href="#section4" className={classes.link}>
						<Typography className={classes.link} ref={link4}>
							Contact
						</Typography>
					</a>
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
						zIndex: 22,
					}}
				>
					<Link
						className={classes.icons}
						href="https://www.linkedin.com/in/maryannnavarrete/"
						target="_blank"
						sx={{ color: '#d6d6d6' }}
						ref={icon1}
					>
						<FaLinkedinIn fontSize="22px" />
					</Link>
					<Link
						className={classes.icons}
						href="https://github.com/MaryAnnN28"
						target="_blank"
						sx={{ color: '#d6d6d6' }}
						ref={icon2}
					>
						<FaGithub fontSize="22px" />
					</Link>
					<Link
						className={classes.icons}
						href="https://maryann-navarrete.medium.com/"
						target="_blank"
						sx={{ color: '#d6d6d6' }}
						ref={icon3}
					>
						<FaMediumM fontSize="22px" />
					</Link>
					<Link
						className={classes.icons}
						href="https://www.twitter.com/maryannn28"
						target="_blank"
						sx={{ color: '#d6d6d6' }}
						ref={icon4}
					>
						<FaTwitter fontSize="22px" />
					</Link>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Navbar
