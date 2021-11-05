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
		color: '#CCB056',
		opacity: '80%',
		textTransform: 'uppercase',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 400,
		marginBottom: '1px',
	},
	subtitle: {
		fontSize: '24pt',
		color: '#999999',
		letterSpacing: '12px',
		fontFamily: 'Montserrat',
		fontWeight: 300,
		marginLeft: '5px',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(-29deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '50%',
		top: -18,
		left: -330,
		zIndex: 1,
	},

	box1a: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(27deg)',
		top: -80,
		right: -330,
		opacity: '50%',
		backgroundColor: '#B59D4C',
		// background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
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
		backgroundColor: '#B59D4C',
		// background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
	},

	box3: {
		height: 700,
		width: 700,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(68deg)',
		top: 50,
		right: -425,
		opacity: '30%',
		backgroundColor: '#1d1e22',
	},
}))

const Header = () => {
	const classes = useStyles()
	const title = useRef()
	const subtitle = useRef()
	const box1 = useRef()
	const box1a = useRef()
	const box2 = useRef()
	const box3 = useRef()

	function fadeIn(target, vars) {
		return gsap.from(target, { opacity: 0.8, ...vars })
	}

	useLayoutEffect(() => {
		const animation = fadeIn(title.current, { y: 50, duration: 2 })
		const animation1 = fadeIn(subtitle.current, { y: 50, duration: 2, delay: 1.5 })
	}, [])

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />
				<div className={classes.boxContainer}>
					<div className={classes.box1} ref={box1} />
					<div className={classes.box1a} ref={box1a} />

					<div className={classes.box2} ref={box2} />
					<div className={classes.box3} ref={box3} />
				</div>

				<Grid container>
					<Grid item md={7}>
						<Box sx={{ pl: 20, pt: 26 }}>
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
