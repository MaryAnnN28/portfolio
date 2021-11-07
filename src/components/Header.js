import React, { useLayoutEffect, useRef } from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import { gsap } from 'gsap'

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
	mainHeader: {
		fontSize: '52pt',
		// color: '#CCB056',
		color: '#e6e6e6',
		opacity: '80%',
		textTransform: 'uppercase',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 500,
		marginTop: -45,
		marginBottom: 20,
		lineHeight: 1,
	},
	header2: {
		display: 'flex',
	},
	mainHeader2: {
		fontSize: '52pt',
		// color: '#CCB056',
		color: '#e6e6e6',
		opacity: '80%',
		textTransform: 'uppercase',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 500,
		marginTop: -20,
		marginLeft: -6,
		marginBottom: 5,
		lineHeight: 1,
	},
	andSymbol: {
		fontFamily: 'Caramel',
		fontSize: '122pt',
		color: '#232D4A',
		transform: 'rotate(-10deg)',
		fontWeight: 200,
		marginTop: -90,
		marginLeft: -10,
		marginBottom: 5,
		lineHeight: 1,
		zIndex: 1,
	},
	subtitle: {
		fontSize: '22pt',
		color: '#999999',
		letterSpacing: '11px',
		fontFamily: 'Montserrat',
		fontWeight: 300,
		marginLeft: '5px',
	},
	subtitle2: {
		fontSize: '24pt',
		color: '#818589',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 500,
		marginLeft: '5px',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(-29deg)',
		backgroundColor: '#101011',
		opacity: '50%',
		top: 30,
		left: -330,
		// zIndex: 4,
	},

	box1a: {
		height: 300,
		width: 300,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(28deg)',
		top: 150,
		left: -250,
		opacity: '50%',
		// backgroundColor: '#B59D4C',
		background: 'linear-gradient(-60deg, rgba(39,52,91) 0%, rgba(32, 41, 67) 64%)',
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
		background: 'linear-gradient(30deg, rgba(39,52,91) 0%, rgba(32, 41, 67) 64%)',
		// background: 'linear-gradient(38deg, rgba(181,157,76,1) 0%, rgba(116,103,62,1) 64%)',
	},

	box2a: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(68deg)',
		top: 50,
		right: -425,
		opacity: '50%',
		backgroundColor: '#101011',
	},
}))

const Header = () => {
	const classes = useStyles()
	const build = useRef()
	const design = useRef()
	const and = useRef()
	const enhanced = useRef()
	const box1 = useRef()
	const box1a = useRef()
	const box2 = useRef()
	const box2a = useRef()

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0, ...vars })
	}

	function rightBox(target, vars) {
		return gsap.to(target, { opacity: 0, ...vars })
	}

	useLayoutEffect(() => {
		const animation = fadeIn(build.current, { y: -50, ease: 'back.out(2)', duration: 4, delay: 5 })
		const animation1 = fadeIn(and.current, { x: -50, ease: 'back.out(3)', duration: 4, delay: 6.7 })
		const animation2 = fadeIn(design.current, { y: 50, ease: 'back.out(2)', duration: 4, delay: 8.7 })
		const animation3 = fadeIn(enhanced.current, { y: 100, ease: 'back.out(2)', duration: 4, delay: 10.6 })
		const animation4 = fadeIn(box1.current, { rotation: 30, x: 50, duration: 4, delay: 0.5 })
		const animation5 = fadeIn(box1a.current, { rotation: -30, x: 50, duration: 4, delay: 2.5 })
		const animation6 = fadeIn(box2.current, { rotation: 70, x: 0, duration: 4, delay: 0.5 })
		const animation7 = fadeIn(box2a.current, { rotation: 45, x: 0, duration: 4, delay: 2.5 })
	}, [])

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />
				<div className={classes.boxContainer}>
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
