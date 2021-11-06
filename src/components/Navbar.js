import React, { useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Box, Grid, Typography, IconButton, Link, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { gsap } from 'gsap'
import '../assets/Navbar.css'
import Logo from '../images/logoM_black.png'
import LogoM_white from '../images/LogoM_white.png'

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
			color: '#A38D45',
			// textShadow: '-2px -2px #857338',
			fontWeight: 500,
		},
		letterSpacing: '1.5pt',
	},
	icons: {
		marginRight: '1.5em',
		zIndex: 1,
		color: '#e6e6e6',
		'&:hover': {
			color: '#A38D45',
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
	const link5 = useRef()

	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, { color: '#f73788' })
	}

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { color: '#e5e3e3' })
	}

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0, ...vars })
	}

	useLayoutEffect(() => {
		const animation = fadeIn(link1.current, { y: -30, duration: 0.75, ease: 'back.out(2)' })
		const animation1 = fadeIn(link2.current, {
			y: -30,
			duration: 0.75,
			ease: 'back.out(2)',
			delay: 0.2,
		})
		const animation2 = fadeIn(link3.current, {
			y: -30,
			duration: 0.75,
			ease: 'back.out(2)',
			delay: 0.4,
		})
		const animation3 = fadeIn(link4.current, {
			y: -30,
			duration: 0.75,
			ease: 'back.out(2)',
			delay: 0.6,
		})
		const animation4 = fadeIn(link5.current, {
			y: -30,
			duration: 0.75,
			ease: 'back.out(2)',
			delay: 0.8,
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
						ml: 10,
						mt: 2,
					}}
				>
					{/* <Typography className={classes.logo}>MN</Typography> */}
					<img src={LogoM_white} alt="logo" width="100" className={classes.logo} />
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
						onMouseEnter={onEnter}
						onMouseLeave={onLeave}
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
						<Typography className={classes.link} ref={link3}>
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
						<Typography className={classes.link} ref={link4}>
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
						<Typography className={classes.link} ref={link5}>
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
						color: '#efefef',
						zIndex: 22,
					}}
				>
					<Link
						className={classes.icons}
						href="https://github.com/MaryAnnN28"
						target="_blank"
						sx={{ color: '#efefef' }}
					>
						<FaGithub fontSize="22px" />
					</Link>
					<Link
						className={classes.icons}
						href="https://www.linkedin.com/in/maryannnavarrete/"
						target="_blank"
						sx={{ color: '#efefef' }}
					>
						<FaLinkedinIn fontSize="22px" />
					</Link>
					<Link
						className={classes.icons}
						href="https://maryann-navarrete.medium.com/"
						target="_blank"
						sx={{ color: '#efefef' }}
					>
						<FaMediumM fontSize="22px" />
					</Link>
					<Link
						className={classes.icons}
						href="https://www.twitter.com/maryannn28"
						target="_blank"
						sx={{ color: '#efefef' }}
					>
						<FaTwitter fontSize="22px" />
					</Link>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Navbar
