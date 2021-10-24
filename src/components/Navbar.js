import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Box, Grid, Typography, IconButton, Link, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
	navContainer: {},
}))

const Navbar = (props) => {
	const classes = useStyles()
	const { onSidebarMobileOpen, onMobileClose, openMobile } = props
	const location = useLocation()

	useEffect(() => {
		if (openMobile & onMobileClose) {
			onMobileClose()
		}
	}, [location.pathname])

	return (
		<Grid container sx={{ paddingTop: 2 }}>
			<Grid item md={4}>
				<Box
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						ml: 10,
						mt: 2,
					}}
				>
					<Typography variant="h2" style={{ color: '#e6e6e6' }}>
						MN
					</Typography>
				</Box>
			</Grid>
			<Grid item md={4}>
				<Box
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						display: 'flex',
						mt: 5,
						justifyContent: 'space-between',
					}}
				>
					<Link
						component={RouterLink}
						to="/about"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography variant="body1" style={{ color: '#e5e3e3' }}>
							About
						</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/experience"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography variant="body1" style={{ color: '#e5e3e3' }}>
							Experience
						</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/projects"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography variant="body1" style={{ color: '#e5e3e3' }}>
							Projects
						</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/blog"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography variant="body1" style={{ color: '#e5e3e3' }}>
							Blog
						</Typography>
					</Link>
					<Link
						component={RouterLink}
						to="/contact"
						underline="none"
						sx={{
							px: 1,
						}}
					>
						<Typography variant="body1" style={{ color: '#e5e3e3' }}>
							Contact
						</Typography>
					</Link>
				</Box>
			</Grid>
			<Grid item md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Box
					sx={{
						alignItems: 'right',
						flexGrow: 1,
						ml: 10,
						mt: 2,
					}}
				>
					{/* <Typography variant="h2" sx={{ textDecoration: 'none' }}>
						MN
					</Typography> */}
				</Box>
			</Grid>
		</Grid>
	)
}

export default Navbar
