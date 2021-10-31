import React, { useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Box, Grid, Typography, IconButton, Link, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { gsap } from 'gsap'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
	navContainer: {},
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
		gsap.to(currentTarget, { color: 'red' })
	}

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { color: '#e5e3e3' })
	}

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0, ...vars })
	}

	useLayoutEffect(() => {
		const animation = fadeIn(link1.current, { y: -30, duration: 0.75, ease: 'back.out(2)' })
		const animation1 = fadeIn(link2.current, { y: -30, duration: 0.75, ease: 'back.out(2)', delay: 0.2 })
		const animation2 = fadeIn(link3.current, { y: -30, duration: 0.75, ease: 'back.out(2)', delay: 0.4 })
		const animation3 = fadeIn(link4.current, { y: -30, duration: 0.75, ease: 'back.out(2)', delay: 0.6 })
		const animation4 = fadeIn(link5.current, { y: -30, duration: 0.75, ease: 'back.out(2)', delay: 0.8 })
	}, [])

	useEffect(() => {
		if (openMobile & onMobileClose) {
			onMobileClose()
		}
	}, [location.pathname])

	return (
		<Grid container sx={{ paddingTop: 2, pl: 10 }}>
			<Grid item md={5} sx={{ ml: 10 }}>
				<Box
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						display: 'flex',
						mt: 5,
						ml: 20,
						mr: 20,
						justifyContent: 'space-between',
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
						<Typography variant="body1" style={{ color: '#e5e3e3' }} className="link1" ref={link1}>
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
						<Typography variant="body1" style={{ color: '#e5e3e3' }} classNam="link3" ref={link3}>
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
						<Typography variant="body1" style={{ color: '#e5e3e3' }} classNam="link4" ref={link4}>
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
						<Typography variant="body1" style={{ color: '#e5e3e3' }} classNam="link5" ref={link5}>
							Contact
						</Typography>
					</Link>
				</Box>
			</Grid>
			<Grid item md={2}>
				<Box
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						ml: 12,
						mt: 1.5,
					}}
				>
					<Typography style={{ fontSize: '44pt', color: '#e6e6e6' }}>MN</Typography>
				</Box>
			</Grid>
			<Grid item md={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Box
					sx={{
						alignItems: 'right',
						flexGrow: 1,
						ml: 10,
						mt: 2,
					}}
				>
					{/* <Typography variant="h2" sx={{ textDecoration: 'none' }}>
						MN
					</Typography> */}
				</Box>
			</Grid>
		</Grid>
	)
}

export default Navbar
