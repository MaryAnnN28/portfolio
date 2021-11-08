import { useState, useEffect } from 'react'
import {
	Box,
	Button,
	Grid,
	Typography,
	Card,
	CardActionArea,
	CardHeader,
	CardContent,
	CardMedia,
	Chip,
	makeStyles,
} from '@material-ui/core'
import { Stack } from '@mui/material'

const BLOG_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maryann-navarrete'

const useStyles = makeStyles(() => ({
	blogContainer: {
		// height: '280vh',
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: '6rem',
	},
	projectsTitle: {
		color: 'rgba(25, 41, 103)',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginBottom: '4rem',
	},
	blogsGrid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	blogBox: {
		zIndex: 2,
	},
	blogCard: {
		background: '#1d1e22',
		padding: '1em',
		zIndex: 2,
	},
	blogTitle: {
		color: '#e6e6e6',
	},
	readMoreButton: {
		color: '#e6e6e6',
	},
	blogImg: {
		width: 320,
		height: 220,
		filter: 'grayscale(30%) drop-shadow(.25rem .25rem 0.75rem #383838)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		borderRadius: '1%',
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(28deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '50%',
		top: 2980,
		left: -310,
		zIndex: 1,
	},
	box2: {
		height: 500,
		width: 500,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(52deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '20%',
		top: 3600,
		right: -400,
		zIndex: 1,
	},
	box3: {
		height: 475,
		width: 475,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(20deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '50%',
		top: 4080,
		left: -310,
		zIndex: 1,
	},
	box4: {
		height: 600,
		width: 600,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(22deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '20%',
		top: 4900,
		right: -400,
		zIndex: 1,
	},
	box5: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(68deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '50%',
		top: 5580,
		left: -310,
		zIndex: 0,
	},
	box6: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'absolute',
		transform: 'rotate(57deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '20%',
		top: 5800,
		right: -300,
		zIndex: 0,
	},
}))

const Blog = () => {
	const classes = useStyles()
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch(BLOG_URL)
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data.items)
			})
	})

	return (
		<Box className={classes.blogContainer}>
			<Grid container>
				<Grid item md={12} lg={12}>
					<Box sx={{ pl: 20 }}>
						<Typography className={classes.projectsTitle}>blog</Typography>
					</Box>
				</Grid>
				<Grid item md={12} lg={12}>
					<Box className={classes.blogsGrid} sx={{ ml: 20, mr: 20 }}>
						<Grid
							container
							spacing={5}
							direction="row"
							sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
						>
							{blogs.map((blog) => (
								<Grid item md={6} lg={6} xs={12} className={classes.blogBox}>
									<Card sx={{}} className={classes.blogCard}>
										<CardMedia component="img" height="180" image={blog.thumbnail} alt={blog.title} />

										<CardContent>
											<Typography
												// variant="body1"
												className={classes.blogTitle}
												sx={{ fontSize: '10px' }}
											>
												{blog.title}
											</Typography>
										</CardContent>
										<CardActionArea sx={{ p: 2 }}>
											<Grid
												container
												direction="column"
												sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 2 }}
											>
												<Grid item md={12} sx={{ ml: 4 }}>
													<Stack direction="row" spacing={1} alignItems="right" sx={{ p: 1 }}>
														{blog.categories.map((category) => (
															<Chip label={`${category}`} style={{ backgroundColor: '#27345B', color: '#d6d6d6' }} />
														))}
													</Stack>
												</Grid>
												<Grid item md={12}>
													<Button
														className={classes.readMoreButton}
														href={blog.link}
														target="_blank"
														sx={{ color: '#e6e6e6' }}
													>
														Read More
													</Button>
												</Grid>
											</Grid>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
					</Box>
					<div className={classes.box1}></div>
					<div className={classes.box2}></div>
					<div className={classes.box3}></div>
					<div className={classes.box4}></div>
					<div className={classes.box5}></div>
					<div className={classes.box6}></div>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Blog
