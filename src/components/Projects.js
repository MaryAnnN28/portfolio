import { useEffect, useState, useCallback } from 'react'
import {
	Box,
	Grid,
	Chip,
	Typography,
	Button,
	makeStyles,
	Paper,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	IconButton,
	Collapse,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	CardHeader,
	Avatar,
} from '@material-ui/core'
import { Stack } from '@mui/material'
import { createTheme } from '@material-ui/styles'
import { styled } from '@material-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PchFrontendSite from '../images/pch_frontendsite.png'
import PchDashboardListings from '../images/pch_dashboardlistings.png'
import NavCRM from '../images/navcrm.jpeg'
import useMounted from '../hooks/useMounted'

import { projectsApi } from '../api/projectsApi'

const useStyles = makeStyles(() => ({
	projectsContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '1rem',
		marginLeft: '10rem',
		marginRight: '10rem',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'relative',
		transform: 'rotate(64deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '60%',
		top: -650,
		left: -310,
		zIndex: 0,
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
		color: '#A5B2CC',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginBottom: '4rem',
		zIndex: 3,
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
		filter: 'grayscale(60%) brightness(0.6) drop-shadow(.05rem .15rem 0.5rem #383838)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		borderRadius: '1%',
		zIndex: 2,
	},

	projectImgModal: {
		width: 540,
		height: 410,
		borderRadius: '1%',
	},
	feauturedProjectImg: {
		width: 530,
		height: 330,
		filter: 'grayscale(25%) brightness(0.65)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		display: 'flex',
		zIndex: 999,
		marginTop: 50,
	},
	projectDescBox: {
		width: '500px',
		height: '300px',
		display: 'block',
		opacity: '70%',
		background: '#181A1A',
		zIndex: 1,
		padding: 20,
		marginLeft: -20,
		paddingBottom: 30,
	},
	projectSubtitle: {
		textTransform: 'uppercase',
		color: '#A5B2CC',
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
	projectTitle2: {
		color: '#efefef',
		fontSize: '14pt',
		fontWeight: '400',
		fontFamily: 'Montserrat',
		letterSpacing: '3px',
		marginBottom: 14,
	},
	projectDescText: {
		color: '#e6e6e6',
		fontSize: '11pt',
		fontWeight: '100',
		lineHeight: '20px',
		letterSpacing: '1.5px',
		fontFamily: 'Montserrat',
		marginLeft: 15,
		marginRight: 100,
	},
	projectTech: {
		marginLeft: 5,
		marginTop: 20,
		wordSpacing: 5,
	},
	projectCard: {
		opacity: '60%',
		background: '#23262F',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	learnMoreButton: {
		color: '#efefef',
	},
}))

const Projects = () => {
	const classes = useStyles()
	const mounted = useMounted()
	const [projects, setProjects] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [expanded, setExpanded] = useState(false)

	const getProjectObjs = useCallback(async () => {
		try {
			const data = await projectsApi.getProjects()

			if (mounted.current) {
				setProjects(data)
			}
		} catch (err) {
			console.log(err)
		}
	}, [mounted])

	const handleProjectClick = (values) => {
		setIsOpen(true)
	}

	const handleExpandClick = () => {
		setExpanded(true)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		getProjectObjs()
	}, [getProjectObjs])

	console.log(projects)

	return (
		<Box className={classes.projectsContainer}>
			<Grid container>
				<Grid item md={12} lg={12}>
					<Box>
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
									<Chip label="React" style={{ backgroundColor: '#566378', color: '#efefef', mr: 2 }} />
									<Chip label="Material UI" style={{ backgroundColor: '#566378', color: '#efefef' }} />
									<Chip label="MongoDB" style={{ backgroundColor: '#566378', color: '#efefef' }} />
									<Chip label="Strapi" style={{ backgroundColor: '#566378', color: '#efefef' }} />
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
									<Chip label="React" style={{ backgroundColor: '#566378', color: '#efefef', mr: 2 }} />
									<Chip label="Material UI" style={{ backgroundColor: '#566378', color: '#efefef' }} />
									<Chip label="MongoDB" style={{ backgroundColor: '#566378', color: '#efefef' }} />
									<Chip label="Strapi" style={{ backgroundColor: '#566378', color: '#efefef' }} />
								</Stack>
							</Grid>
							<div className={classes.cardActions}>
								<Button className={classes.learnMoreButton} sx={{ color: '#e6e6e6' }}>
									Learn More
								</Button>
							</div>
						</div>
					</div>
					<div className={classes.rightProjectContainer}>
						<img src={PchDashboardListings} alt="PCH Dashboard" className={classes.feauturedProjectImg} />
					</div>
				</Box>
				<Grid container spacing={10} sx={{ ml: 15, mr: 15 }}>
					{projects.map((project) => (
						<>
							<Grid item md={4}>
								<Card className={classes.projectCard} sx={{ maxWidth: 300 }}>
									<CardMedia component="img" height="200" image={project.image} alt={project.name} />
									<CardContent>
										<Typography className={classes.projectTitle2} gutterBottom variant="h6" component="div">
											{project.name}
										</Typography>
										{/* <Stack direction="row" spacing={1} alignItems="left">
											{project.tech.map((tech) => (
												<Chip label={tech} size="small" style={{ backgroundColor: '#566378', color: '#efefef' }} />
											))}
										</Stack> */}
										{/* <Typography variant="body2">{project.description}</Typography> */}
									</CardContent>
									{/* <CardActions disableSpacing className={classes.cardActions}>
										<Button
											className={classes.learnMoreButton}
											sx={{ color: '#e6e6e6' }}
											onClick={() => handleProjectClick(project.id)}
										>
											Learn More
										</Button>
									</CardActions> */}
								</Card>

								<Dialog></Dialog>
							</Grid>
						</>
					))}
				</Grid>
				{/* <div className={classes.box1}></div>
				<div className={classes.box2}></div> */}
			</Grid>
		</Box>
	)
}

export default Projects

{
	/* <Box className={classes.projectsGrid} sx={{ pl: 20, pr: 20 }}>
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
</Box> */
}
