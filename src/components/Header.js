import React, { useLayoutEffect, useRef } from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import { gsap } from 'gsap'
import { Rotate90DegreesCcw } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
	headerContainer: {
		height: '100vh',
		paddingTop: 8,
		zIndex: -999,
		overflow: 'hidden',
	},
	navbar: {
		zIndex: 999,
		position: 'absolute',
	},
	boxContainer: {
		display: 'flex',
		width: '1440',
		overflow: 'hidden',
		overflowX: 'hidden',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(58deg)',
		backgroundColor: '#828290',
		opacity: '70%',
		top: -80,
		left: -125,
	},

	box2: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(39deg)',
		top: -80,
		right: -265,
		opacity: '70%',
		backgroundColor: '#828290',
	},

	box3: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		borderRadius: '50%',
		// transform: 'rotate(45deg)',
		top: -300,
		right: -300,
		opacity: '70%',
		backgroundColor: '#181818',
	},
	box4: {
		height: 800,
		width: 700,
		display: 'flex',
		position: 'absolute',
		// transform: 'rotate(90deg)',
		top: 0,
		right: 0,
		opacity: '60%',
		backgroundColor: '#131320',
	},
}))

const Header = () => {
	const classes = useStyles()
	const title = useRef()
	const subtitle = useRef()
	const box1 = useRef()
	const box2 = useRef()
	const box3 = useRef()
	const box4 = useRef()

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0.8, ...vars })
	}

	useLayoutEffect(() => {
		const animation = fadeIn(title.current, { y: 100, duration: 3, delay: 1.5 })
		const animation1 = fadeIn(subtitle.current, { y: -100, duration: 3, delay: 2.5 })
		const animation2 = fadeIn(box4.current, { x: 600, duration: 3, delay: 1.5 })
	}, [])

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />

				<div className={classes.boxContainer}>
					{/* <div className={classes.box1} ref={box1} />*/}
					{/* <div className={classes.box2} ref={box2} /> */}

					<div className={classes.box3} ref={box3} />
					<div className={classes.box4} ref={box4} />
				</div>

				<Grid container>
					<Grid item md={7}>
						<Box sx={{ pl: 20, pt: 24 }}>
							<div className="box" ref={title}>
								<Typography style={{ fontSize: '64pt', color: '#e6e6e6', textTransform: 'uppercase', letterSpacing: '12px' }}>Building</Typography>
							</div>
							<div className="box1" ref={subtitle}>
								<Typography style={{ fontSize: '30pt', color: '#e6e6e6', letterSpacing: '6px', fontWeight: 300 }}>Enhanced Experiences</Typography>
							</div>
						</Box>
					</Grid>
					<Grid item md={5}></Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Header
