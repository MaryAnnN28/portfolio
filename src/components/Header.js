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
	mainHeader: {
		fontSize: '52pt',
		color: '#A69580',
		textTransform: 'uppercase',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 400,
		marginBottom: '2px',
	},
	subtitle: {
		fontSize: '24pt',
		color: '#e6e6e6',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 200,
		marginLeft: '5px',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(-29deg)',
		backgroundColor: '#212121',
		opacity: '60%',
		top: -18,
		left: -330,
		zIndex: 1,
	},

	box2: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(27deg)',
		top: -80,
		right: -300,
		opacity: '60%',
		// backgroundColor: '#1d1e22',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
	},

	box3: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(67deg)',
		top: 10,
		right: -415,
		opacity: '60%',
		backgroundColor: '#1d1e22',
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
		// const animation = fadeIn(title.current, { y: 100, duration: 3, delay: 1.5 })
		// const animation1 = fadeIn(subtitle.current, { y: -120, duration: 3, delay: 1.5 })
	}, [])

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />
				<div className={classes.boxContainer}>
					<div className={classes.box1} ref={box1} />

					<div className={classes.box2} ref={box2} />
					<div className={classes.box3} ref={box3} />
				</div>

				<Grid container>
					<Grid item md={7}>
						<Box sx={{ pl: 20, pt: 24 }}>
							<div className="box" ref={title}>
								<Typography className={classes.mainHeader}>Building</Typography>
							</div>
							<div className="box1" ref={subtitle}>
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
