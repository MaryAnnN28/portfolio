import React from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import NavCRM from '../images/navcrm.jpeg'
import Biteboard from '../images/biteboard.jpeg'
import PlanetWarrior from '../images/planetwarrior.png'
import Golflive from '../images/golflive.jpeg'
import Memeshare from '../images/memeshare.jpeg'

const useStyles = makeStyles(() => ({
	projectsContainer: {
		height: '90vh',
		display: 'flex',
		justifyContent: 'center',

		// alignItems: 'center',
	},
	projectsTitle: {
		color: '#A69580',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
	},
	projectsGrid: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	projectImg: {
		width: 320,
		height: 220,
	},
}))

const Projects = () => {
	const classes = useStyles()

	return (
		<Box className={classes.projectsContainer}>
			<Grid container>
				<Grid item md={12} lg={12}>
					<Box sx={{ pl: 20 }}>
						<Typography className={classes.projectsTitle}>projects</Typography>
					</Box>
				</Grid>
				<Grid item md={12} lg={12}>
					<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20 }}>
						<img src={NavCRM} alt="headshot" className={classes.projectImg} />
						<img src={Biteboard} alt="headshot" className={classes.projectImg} />
						<img src={PlanetWarrior} alt="headshot" className={classes.projectImg} />
					</Box>
					<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20, mt: 5 }}>
						<img src={Golflive} alt="headshot" className={classes.projectImg} />
						<img src={Memeshare} alt="headshot" className={classes.projectImg} />
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Projects
