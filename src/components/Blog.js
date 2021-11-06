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
		// height: '100vh',
		// display: 'flex',
		// justifyContent: 'center',
		paddingBottom: '6rem',
	},
	projectsTitle: {
		color: '#B59D4C',
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
	// blogBox: {
	// 	background: '#1d1e22',
	// 	opacity: '80%',
	// 	zIndex: 1,
	// },
	blogCard: {
		background: '#1d1e22',
		padding: '1em',
		zIndex: 99,
	},
	blogTitle: {
		color: '#e6e6e6',
	},
	readMoreButton: {
		color: '#e6e6e6',
	},
	projectImg: {
		width: 320,
		height: 220,
		filter: 'grayscale(30%) drop-shadow(.25rem .25rem 0.75rem #383838)',
		'&:hover': {
			filter: 'hue-rotate(0deg)',
		},
		borderRadius: '1%',
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
					<Box className={classes.blogsGrid} sx={{ ml: 40, mr: 40 }}>
						<Grid
							container
							spacing={5}
							direction="row"
							sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
						>
							{blogs.map((blog) => (
								<Grid item md={12} lg={12} xs={12} className={classes.blogBox}>
									<Card sx={{}} className={classes.blogCard}>
										<CardMedia component="img" height="180" image={blog.thumbnail} alt={blog.title} />

										<CardContent>
											<Typography
												variant="h6"
												className={classes.blogTitle}
												sx={{ lineHeight: '18px', fontSize: '18px' }}
											>
												{blog.title}
											</Typography>
										</CardContent>
										<CardActionArea sx={{ p: 2 }}>
											<Grid
												container
												direction="row"
												sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 2 }}
											>
												<Grid item md={10} sx={{ ml: 4 }}>
													<Stack direction="row" spacing={1} alignItems="right" sx={{ p: 1 }}>
														{blog.categories.map((category) => (
															<Chip label={`${category}`} style={{ backgroundColor: '#B59D4C', color: '#000' }} />
														))}
													</Stack>
												</Grid>
												<Grid item md={2}>
													<Button
														className={classes.readMoreButton}
														href={blog.link}
														target="_blank"
														sx={{ pl: 4, color: '#e6e6e6' }}
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
				</Grid>
			</Grid>
		</Box>
	)
}

export default Blog
