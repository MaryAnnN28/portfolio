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
	makeStyles,
} from '@material-ui/core'
import NavCRM from '../images/navcrm.jpeg'
import Biteboard from '../images/biteboard.jpeg'
import PlanetWarrior from '../images/planetwarrior.png'
import Golflive from '../images/golflive.jpeg'
import Memeshare from '../images/memeshare.jpeg'

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
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	blogBox: {
		background: '#383838',
		width: '22rem',
		height: '20rem',
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
					<Box className={classes.blogsGrid} sx={{ pl: 20, pr: 20 }}>
						<Grid container spacing={6}>
							{blogs.map((blog) => (
								<Grid item md={6} lg={6} xs={12}>
									<Card sx={{}}>
										<CardMedia component="img" height="160" image={blog.thumbnail} alt={blog.title} />

										<CardContent>
											<Typography
												gutterBottom
												variant="caption"
												component="div"
												color="black"
												sx={{ lineHeight: '18px' }}
											>
												{blog.title}
											</Typography>
										</CardContent>
										<CardActionArea>
											<Button href={blog.link}>Read More</Button>
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
