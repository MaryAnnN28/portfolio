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

		// alignItems: 'center',
	},
	projectsTitle: {
		color: '#B59D4C',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginBottom: '4rem',
	},
	projectsGrid: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	projectImg: {
		width: 320,
		height: 210,
		filter: 'grayscale(70%) sepia(70%) saturate(60%) hue-rotate(360deg) drop-shadow(.25rem .25rem 0.65rem #383838)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		borderRadius: '1%',
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
			</Grid>
		</Box>
	)
}

export default Projects
