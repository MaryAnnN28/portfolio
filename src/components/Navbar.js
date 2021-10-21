import React, { useState } from 'react'
import { Grid, Typography, Stack, Item, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
	navContainer: {},
}))

const Navbar = () => {
	const classes = useStyles()

	return (
		<Grid container className={classes.navContainer} sx={{ backgroundColor: '#000000', display: 'flex', maxWidth: '100%' }}>
			<Grid item md={3}>
				Mary Ann Navarrete
			</Grid>
			<Grid item md={9}>
				<Grid container className={classes.navItems}>
					<ul>
						<li>About</li>
						<li>Projects</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Navbar
