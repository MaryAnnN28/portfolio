import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Grid, Typography, IconButton, Link, Toolbar, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'

import MenuIcon from '@material-ui/icons/Menu'

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
