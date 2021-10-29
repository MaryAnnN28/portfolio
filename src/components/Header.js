import React, { useLayoutEffect, useRef } from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import { gsap } from 'gsap'

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
	circle1: {
		height: 400,
		width: 400,
		borderRadius: '50%',
		display: 'flex',
		position: 'absolute',
		backgroundColor: '#828290',
		opacity: '80%',
		top: -80,
		left: -125,
	},

	circle2: {
		height: 900,
		width: 900,
		display: 'flex',
		borderRadius: '50%',
		position: 'absolute',
		top: -40,
		right: -330,
		opacity: '96%',
		backgroundColor: '#111111',
	},

	circle3: {
		height: 800,
		width: 800,
		display: 'flex',
		borderRadius: '50%',
		position: 'absolute',
		top: -30,
		right: -300,
		opacity: '94%',
		backgroundColor: '#131313',
	},

	circle4: {
		height: 650,
		width: 650,
		display: 'flex',
		borderRadius: '50%',
		position: 'absolute',
		top: -20,
		right: -240,
		opacity: '90%',
		backgroundColor: '#191919',
	},
	circle5: {
		height: 550,
		width: 550,
		display: 'flex',
		borderRadius: '50%',
		position: 'absolute',
		top: -10,
		right: -200,
		opacity: '94%',
		backgroundColor: '#373737',
		// background: 'linear-gradient(40deg, rgba(25,25,25,1) 30%, rgba(130,130,144,1) 98%)',
		// background: 'radial-gradient(circle, rgba(130,130,144,1) 6%, rgba(25,25,25,1) 99%)',
	},
}))

const Header = () => {
	const classes = useStyles()
	const title = useRef()
	const subtitle = useRef()
	const leftCircle = useRef()
	const rightCircle1 = useRef()
	const rightCircle2 = useRef()

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0, ...vars })
	}

	useLayoutEffect(() => {
		const animation = fadeIn(title.current, { y: 100, duration: 3, delay: 2.5 })
		const animation1 = fadeIn(subtitle.current, { y: -100, duration: 3, delay: 2.75 })
		const animation2 = fadeIn(leftCircle.current, { x: -100, duration: 3, delay: 1.5 })
		// const animation3 = fadeIn(rightCircle1.current, { x: 100, duration: 4 })
		// const animation4 = fadeIn(rightCircle2.current, { x: 100, duration: 4, delay: 2.25 })
	}, [])

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />

				<div className={classes.boxContainer}>
					<div className={classes.circle1} ref={leftCircle} />
					<div className={classes.circle2} ref={rightCircle1} />
					<div className={classes.circle3} ref={rightCircle2} />
					<div className={classes.circle4} ref={rightCircle2} />
					<div className={classes.circle5} ref={rightCircle2} />
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
