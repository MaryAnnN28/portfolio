import React from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import PchFrontendSite from '../images/pch_frontendsite.png'
import PchDashboardListings from '../images/pch_dashboardlistings.png'
import NavCRM from '../images/navcrm.jpeg'
import NBAstatsapp from '../images/nba_stats_app.png'
import Biteboard from '../images/biteboard.jpeg'
import PlanetWarrior from '../images/planetwarrior.png'
import Golflive from '../images/golflive.jpeg'
import Memeshare from '../images/memeshare.jpeg'

const useStyles = makeStyles(() => ({
	projectsContainer: {
		// height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: '4rem',
		marginBottom: '10rem',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'relative',
		transform: 'rotate(64deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '60%',
		top: -680,
		left: -310,
		zIndex: 1,
	},
	box2: {
		height: 500,
		width: 500,
		display: 'flex',
		position: 'relative',
		transform: 'rotate(38deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '20%',
		top: -60,
		right: -800,
	},

	projectsTitle: {
		color: '#374B75',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginBottom: '4rem',
	},
	projectsGrid: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		zIndex: 1,
	},
	projectImg: {
		width: 320,
		height: 210,
		filter: 'grayscale(60%) brightness(0.5) drop-shadow(.05rem .15rem 0.5rem #383838)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		borderRadius: '1%',
		zIndex: 2,
	},
}))

const Projects = () => {
	const classes = useStyles()

	return (
		<Box className={classes.projectsContainer}>
			<Grid container>
				<Grid item md={12} lg={12}>
					<Box sx={{ pl: 20 }}>
						<Typography className={classes.projectsTitle}>featured projects</Typography>
					</Box>
				</Grid>
				<Grid item md={12} lg={12}>
					<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20 }}>
						<img src={PchFrontendSite} alt="PCH Real Estate & Mortgage" className={classes.projectImg} />
						<img src={PchDashboardListings} alt="PCH Dashboard" className={classes.projectImg} />
						<img src={NavCRM} alt="CRM Dashboard" className={classes.projectImg} />
					</Box>
					<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20, mt: 6 }}>
						<img src={NBAstatsapp} alt="NBA Stats App" className={classes.projectImg} />
						<img src={PlanetWarrior} alt="Planet Warrior App" className={classes.projectImg} />
						<img src={Biteboard} alt="Biteboard Recipe Sharing App" className={classes.projectImg} />
					</Box>
					<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20, mt: 6 }}>
						<img src={Biteboard} alt="headshot" className={classes.projectImg} />
						<img src={Golflive} alt="headshot" className={classes.projectImg} />
						<img src={Memeshare} alt="headshot" className={classes.projectImg} />
					</Box>
				</Grid>
				<div className={classes.box1}></div>
				<div className={classes.box2}></div>
			</Grid>
		</Box>
	)
}

export default Projects
