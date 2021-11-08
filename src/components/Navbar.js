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
	},
	link: {
		fontFamily: 'Montserrat',
		fontSize: '10pt',
		fontWeight: 300,
		color: '#e6e6e6',
		'&:hover': {
			color: 'rgba(25, 41, 103)',
			fontWeight: 600,
		},
		letterSpacing: '3px',
	},
	icons: {
		marginRight: '1.5em',
		zIndex: 1,
		color: 'rgba(25, 41, 103)',
		'&:hover': {
			color: '#8A9BB1',
			paddingBottom: 3,
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

	useLayoutEffect(() => {
		const animation1 = fadeIn(link1.current, { y: -30, duration: 1, ease: 'back.out(3)', delay: 5 })
		const animation2 = fadeIn(link2.current, {
			y: -30,
			duration: 1,
			ease: 'back.out(3)',
			delay: 5.1,
		})
		const animation3 = fadeIn(link3.current, {
			y: -30,
			duration: 1,
			ease: 'back.out(3)',
			delay: 5.2,
		})
		const animation4 = fadeIn(link4.current, {
			y: -30,
			duration: 1,
			ease: 'back.out(3)',
			delay: 5.3,
		})
		// const animation5 = fadeIn(icon1.current, {
		// 	x: 30,
		// 	duration: 1,
		// 	ease: 'back.out(3)',
		// 	delay: 7,
		// })
		// const animation6 = fadeIn(icon2.current, {
		// 	x: 30,
		// 	duration: 1,
		// 	ease: 'back.out(3)',
		// 	delay: 7.1,
		// })
		// const animation7 = fadeIn(icon3.current, {
		// 	x: 30,
		// 	duration: 1,
		// 	ease: 'back.out(3)',
		// 	delay: 7.2,
		// })
		// const animation8 = fadeIn(icon4.current, {
		// 	x: 30,
		// 	duration: 1,
		// 	ease: 'back.out(3)',
		// 	delay: 7.3,
		// })
		const animation9 = fadeIn(logo.current, {
			y: -20,
			duration: 5,
			ease: 'back.out(3)',
			delay: 9,
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
					<img src={MNLogo2} alt="logo" width="120" className={classes.logo} ref={logo} />
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
					<Link
						component={RouterLink}
						to="/about"
						underline="none"
						sx={{
							px: 0.5,
						}}
					>
						<Typography className={classes.link} ref={link1}>
							About
						</Typography>
					</Link>

					<Link
						component={RouterLink}
						to="/projects"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography className={classes.link} ref={link2}>
							Projects
						</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/blog"
						underline="none"
						sx={{
							px: 0.5,
						}}
					>
						<Typography className={classes.link} ref={link3}>
							Blog
						</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/contact"
						underline="none"
						sx={{
							px: 0.5,
						}}
					>
						<Typography className={classes.link} ref={link4}>
							Contact
						</Typography>
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
