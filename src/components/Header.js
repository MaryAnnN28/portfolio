import React, { useLayoutEffect, useRef } from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MNsvg from '../images/MN_logo.svg'

const useStyles = makeStyles(() => ({
	headerContainer: {
		height: '100vh',
		paddingTop: 6,
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
	introBoxLeft: {
		width: '50vw',
		height: '100vh',
		top: 0,
		position: 'absolute',
		display: 'flex',
		zIndex: 1,
		opacity: '30%',
		backgroundColor: '#101011',
	},
	introBoxLeft2: {
		width: '50vw',
		height: '60vh',
		top: 0,
		position: 'absolute',
		display: 'flex',
		zIndex: 1,
		opacity: '30%',
		backgroundColor: '#101011',
		//
	},
	introBoxRight: {
		width: '50vw',
		height: '100vh',
		top: 0,
		right: 0,
		position: 'absolute',
		display: 'flex',
		zIndex: 1,
		opacity: '50%',
		backgroundColor: '#353D4A',
	},
	introBoxRight2: {
		width: '50vw',
		height: '60vh',
		bottom: 0,
		right: 0,
		position: 'absolute',
		display: 'flex',
		zIndex: 1,
		opacity: '40%',
		backgroundColor: '#353D4A',
		// transform: 'rotate(-28deg)',
	},
	mainHeader: {
		fontSize: '52pt',
		color: '#e6e6e6',
		opacity: '80%',
		textTransform: 'uppercase',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 500,
		marginTop: -35,
		marginBottom: 10,
		lineHeight: 1,
	},
	header2: {
		display: 'flex',
	},
	mainHeader2: {
		fontSize: '52pt',
		color: '#e6e6e6',
		opacity: '80%',
		textTransform: 'uppercase',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 500,
		marginTop: -12,
		marginLeft: -6,
		lineHeight: 1,
	},
	andSymbol: {
		fontFamily: 'Caramel',
		fontSize: '122pt',
		color: '#566378',
		transform: 'rotate(-10deg)',
		fontWeight: 200,
		marginTop: -86,
		marginLeft: -10,
		lineHeight: 1,
		zIndex: 1,
	},
	subtitle: {
		fontSize: '22pt',
		color: '#888A8D',
		letterSpacing: '11px',
		fontFamily: 'Montserrat',
		fontWeight: 300,
		marginLeft: '5px',
		marginTop: -8,
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(36deg)',
		backgroundColor: '#566378',
		opacity: '50%',
		top: 48,
		left: -330,
		zIndex: 1,
	},

	box1a: {
		height: 320,
		width: 320,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(-28deg)',
		top: 180,
		left: -230,
		opacity: '50%',
		backgroundColor: '#101011',
		zIndex: 2,
	},

	box2: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(27deg)',
		top: -80,
		right: -330,
		opacity: '50%',
		backgroundColor: '#566378',
	},

	box2a: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(68deg)',
		top: 50,
		right: -425,
		opacity: '40%',
		backgroundColor: '#101011',
	},
}))

const Header = () => {
	const classes = useStyles()
	const introBoxLeft = useRef()
	const introBoxLeft2 = useRef()
	const introBoxRight = useRef()
	const introBoxRight2 = useRef()
	const build = useRef()
	const design = useRef()
	const and = useRef()
	const enhanced = useRef()
	const box1 = useRef()
	const box1a = useRef()
	const box2 = useRef()
	const box2a = useRef()

	gsap.registerPlugin(ScrollTrigger)

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0, ...vars })
	}

	function dissappear(target, vars) {
		return gsap.to(target, { opacity: 0, ...vars })
	}

	useLayoutEffect(() => {
		const introAnimation1 = dissappear(introBoxLeft.current, { x: 500, ease: 'back.out(2)', duration: 4, delay: 1.1 })
		const introAnimation2 = dissappear(introBoxLeft2.current, {
			x: 250,
			y: 250,
			ease: 'back.out(2)',
			duration: 4,
			delay: 2.1,
		})
		const introAnimation3 = dissappear(introBoxRight.current, { x: -500, ease: 'back.out(2)', duration: 4, delay: 1.8 })
		const introAnimation4 = dissappear(introBoxRight2.current, {
			x: -400,
			y: -400,
			ease: 'back.out(2)',
			duration: 4,
			delay: 2.5,
		})
		const animation = fadeIn(build.current, { y: -50, ease: 'back.out(2)', duration: 2.6, delay: 6.8 })
		const animation1 = fadeIn(and.current, { x: 50, ease: 'back.out(2)', duration: 3, delay: 7.3 })
		const animation2 = fadeIn(design.current, { y: 50, ease: 'back.out(2)', duration: 2.6, delay: 7.7 })
		const animation3 = fadeIn(enhanced.current, { x: -100, ease: 'back.out(1)', duration: 2, delay: 8.2 })
		const animation4 = fadeIn(box1.current, { rotation: 70, x: 30, duration: 4, delay: 6.8 })
		const animation5 = fadeIn(box1a.current, { rotation: -55, y: 60, duration: 3, delay: 7.8 })
		const animation6 = fadeIn(box2.current, { rotation: 70, x: 0, duration: 4, delay: 6.4 })
		const animation7 = fadeIn(box2a.current, { rotation: 55, x: 0, duration: 3.3, delay: 7.1 })
	}, [])

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />
				<div className={classes.boxContainer}>
					<div className={classes.introBoxLeft} ref={introBoxLeft} />
					<div className={classes.introBoxLeft2} ref={introBoxLeft2} />
					<div className={classes.introBoxRight} ref={introBoxRight} />
					<div className={classes.introBoxRight2} ref={introBoxRight2} />
					<div className={classes.box1} ref={box1} />
					<div className={classes.box1a} ref={box1a} />

					<div className={classes.box2} ref={box2} />
					<div className={classes.box2a} ref={box2a} />
				</div>

				<Grid container>
					<Grid item md={7}>
						<Box sx={{ pl: 25, pt: 26 }}>
							<div className="box" ref={build}>
								<Typography className={classes.mainHeader}>Build</Typography>
							</div>
							<div className={classes.header2}>
								<Typography className={classes.andSymbol} ref={and}>
									&
								</Typography>{' '}
								<Typography className={classes.mainHeader2} ref={design}>
									Design{' '}
								</Typography>
							</div>
							<div className="box1" ref={enhanced}>
								<Typography className={classes.subtitle}>Enhanced Experiences</Typography>
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
