import React, { useState, useEffect, useRef } from 'react'
import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import Picture from '../images/headshot.jpg'

const useStyles = makeStyles(() => ({
	aboutContainer: {
		height: '100vh',
		paddingTop: 8,
		zIndex: -999,
		overflow: 'hidden',
	},
}))

const About = () => {
	const classes = useStyles()

	return (
		<Box className={classes.aboutContainer}>
			<Grid container sx={{ p: 4 }}>
				{/* LEFT COLUMN */}
				<Grid item md={6} sx={{ ml: 10 }}></Grid>

				{/* RIGHT COLUMN */}
				<Grid item md={6} sx={{ mr: 10, pl: 30 }}>
					<img src={Picture} alt="headshot" />
				</Grid>
			</Grid>
		</Box>
	)
}

export default About
