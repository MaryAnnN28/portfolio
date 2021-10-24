import React from 'react'
import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(() => ({
	root: {},
	headerContainer: {
		height: '100vh',
		maxWidth: '100vw',
		// flex: '1 1 auto',
		backgroundColor: '#121212',
		paddingTop: 8,
		zIndex: -999,
	},
	navbar: {
		zIndex: 999,
		position: 'absolute',
	},
	boxContainer: {
		display: 'flex',
		position: 'absolute',
		// overflow: 'hidden',
	},
	box1: {
		height: 500,
		width: 400,
		// display: 'flex',
		position: 'absolute',
		backgroundColor: '#828290',
		transform: 'rotate(-32deg)',
		top: -35,
		left: -235,
	},
	box2: {
		height: 800,
		width: 800,
		// display: 'flex',
		position: 'absolute',
		transform: 'rotate(27deg)',
		top: -160,
		left: 600,
		backgroundColor: '#A29B9B',
	},
	box3: {
		height: 700,
		width: 700,
		// display: 'flex',
		position: 'absolute',
		transform: 'rotate(67deg)',
		top: 150,
		right: -180,
		opacity: '70%',
		backgroundColor: '#828290',
	},
}))

const Header = () => {
	const classes = useStyles()

	return (
		<>
			<Box className={classes.headerContainer}>
				<Navbar className={classes.navbar} />

				<div className={classes.boxContainer}>
					<div className={classes.box1} />

					<div className={classes.box2} />
					<div className={classes.box3} />
				</div>
			</Box>
		</>
	)
}

export default Header
