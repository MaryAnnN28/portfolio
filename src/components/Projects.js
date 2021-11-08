import { useEffect } from 'react'
import { Box, Grid, Chip, Typography, makeStyles } from '@material-ui/core'
import { Stack } from '@mui/material'
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
		color: 'rgba(25, 41, 103)',
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
		filter: 'grayscale(60%) brightness(0.55) drop-shadow(.05rem .15rem 0.5rem #383838)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		borderRadius: '1%',
		zIndex: 2,
	},
	feauturedProjectImg: {
		width: 530,
		height: 330,
		filter: 'grayscale(25%) brightness(0.6)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		display: 'flex',
		zIndex: 999,
		marginLeft: -50,
		marginTop: 50,
	},
	projectDescBox: {
		width: '500px',
		height: '300px',
		display: 'block',
		opacity: '64%',
		background: 'rgba(32, 41, 67)',
		zIndex: 1,
		padding: 20,
		marginLeft: -20,
	},
	projectSubtitle: {
		textTransform: 'uppercase',
		color: '#8A9BB1',
		fontWeight: '600',
		fontSize: '10pt',
		letterSpacing: '3px',
		marginLeft: 15,
		marginTop: 12,
	},
	projectTitle: {
		color: '#efefef',
		fontSize: '16pt',
		fontWeight: '500',
		fontFamily: 'Montserrat',
		letterSpacing: '3px',
		marginTop: 1,
		marginLeft: 15,
		marginBottom: 14,
	},
	projectDescText: {
		color: '#e6e6e6',
		fontSize: '10pt',
		fontWeight: '100',
		lineHeight: '20px',
		letterSpacing: '1.5px',
		// fontFamily: 'Montserrat',
		marginLeft: 15,
		marginRight: 100,
	},
	projectTech: {
		marginLeft: 5,
		marginTop: 20,
		wordSpacing: 5,
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

				<Box sx={{ mb: 20, display: 'flex', justifyContent: 'center', margin: 'auto' }}>
					<div className={classes.leftProjectContainer}>
						<div className={classes.projectDescBox}>
							<div>
								<Typography variant="subtitle2" className={classes.projectSubtitle}>
									featured project
								</Typography>
							</div>
							<div>
								<Typography variant="subtitle2" className={classes.projectTitle}>
									PCH Real Estate & Mortgage
								</Typography>
							</div>
							<div>
								<Typography className={classes.projectDescText}>
									A web app dashboard and website specialized for the Real Estate and Mortgage industry. Allows you to
									manage everything in one place, from viewing, editing, creating new property listings on the dashboard
									and seeing it rendered on the client front-facing website.
								</Typography>
							</div>
							<Grid container className={classes.projectTech}>
								<Stack direction="row" spacing={1} alignItems="right" sx={{ p: 1 }}>
									<Chip label="React" style={{ backgroundColor: '#8A9BB1', color: '#101010', mr: 2 }} />
									<Chip label="Material UI" style={{ backgroundColor: '#8A9BB1', color: '#101010' }} />
									<Chip label="MongoDB" style={{ backgroundColor: '#8A9BB1', color: '#101010' }} />
									<Chip label="Strapi" style={{ backgroundColor: '#8A9BB1', color: '#101010' }} />
								</Stack>
							</Grid>
						</div>
					</div>
					<div className={classes.rightProjectContainer}>
						<img src={PchDashboardListings} alt="PCH Dashboard" className={classes.feauturedProjectImg} />
					</div>
				</Box>
				<Box sx={{ mb: 20, display: 'flex', justifyContent: 'center', margin: 'auto' }}>
					<div className={classes.leftProjectContainer}>
						<div className={classes.projectDescBox}>
							<div>
								<Typography variant="subtitle2" className={classes.projectSubtitle}>
									featured project
								</Typography>
							</div>
							<div>
								<Typography variant="subtitle2" className={classes.projectTitle}>
									PCH Real Estate & Mortgage
								</Typography>
							</div>
							<div>
								<Typography className={classes.projectDescText}>
									A web app dashboard and website specialized for the Real Estate and Mortgage industry. Allows you to
									manage everything in one place, from viewing, editing, creating new property listings on the dashboard
									and seeing it rendered on the client front-facing website.
								</Typography>
							</div>
							<Grid container className={classes.projectTech}>
								<Stack direction="row" spacing={1} alignItems="right" sx={{ p: 1 }}>
									<Chip label="React" style={{ backgroundColor: '#8A9BB1', color: '#101010', mr: 2 }} />
									<Chip label="Material UI" style={{ backgroundColor: '#8A9BB1', color: '#101010' }} />
									<Chip label="MongoDB" style={{ backgroundColor: '#8A9BB1', color: '#101010' }} />
									<Chip label="Strapi" style={{ backgroundColor: '#8A9BB1', color: '#101010' }} />
								</Stack>
							</Grid>
						</div>
					</div>
					<div className={classes.rightProjectContainer}>
						<img src={PchDashboardListings} alt="PCH Dashboard" className={classes.feauturedProjectImg} />
					</div>
				</Box>
				<Grid container>
					<Grid item md={12} lg={12} sx={{ mt: 4 }}>
						<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20 }}>
							<img src={PchFrontendSite} alt="PCH Real Estate & Mortgage" className={classes.projectImg} />
							<img src={PchDashboardListings} alt="PCH Dashboard" className={classes.projectImg} />
							<img src={NavCRM} alt="CRM Dashboard" className={classes.projectImg} />
						</Box>
						<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20, mt: 8 }}>
							<img src={NBAstatsapp} alt="NBA Stats App" className={classes.projectImg} />
							<img src={PlanetWarrior} alt="Planet Warrior App" className={classes.projectImg} />
							<img src={Biteboard} alt="Biteboard Recipe Sharing App" className={classes.projectImg} />
						</Box>
						<Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20, mt: 8 }}>
							<img src={Biteboard} alt="headshot" className={classes.projectImg} />
							<img src={Golflive} alt="headshot" className={classes.projectImg} />
							<img src={Memeshare} alt="headshot" className={classes.projectImg} />
						</Box>
					</Grid>
				</Grid>
				<div className={classes.box1}></div>
				<div className={classes.box2}></div>
			</Grid>
		</Box>
	)
}

export default Projects
