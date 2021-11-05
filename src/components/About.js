import React from 'react'
import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import Picture from '../images/headshot.jpg'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const useStyles = makeStyles(() => ({
	aboutContainer: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 210,
	},
	box1: {
		height: 400,
		width: 400,
		display: 'flex',
		position: 'relative',
		transform: 'rotate(28deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '50%',
		top: -680,
		left: -310,
		zIndex: 1,
	},
	box2: {
		height: 500,
		width: 500,
		display: 'flex',
		position: 'relative',
		transform: 'rotate(52deg)',
		background: 'linear-gradient(38deg, rgba(29,30,34,1) 17%, rgba(16,16,16,1) 62%)',
		opacity: '20%',
		top: -60,
		right: -400,
		zIndex: 1,
	},
	aboutTitle: {
		color: '#B59D4C',
		fontFamily: 'Montserrat',
		// textTransform: 'uppercase',
		fontSize: '18pt',
		letterSpacing: '2px',
	},
	aboutText: {
		fontFamily: 'Montserrat',
		color: '#e5e3e3',
		fontWeight: 300,
		letterSpacing: '1.2px',
		fontSize: '10pt',
		lineHeight: '1.8',
	},
	techTitle: {
		color: '#B59D4C',
		fontSize: '11pt',
		letterSpacing: '2px',
		fontFamily: 'Montserrat',
	},
	techText: {
		color: '#efe3e3',
		fontSize: '10pt',
		letterSpacing: '1.2px',
		lineHeight: '1.8',
		listStyleImage: 'none',
		listStyle: 'none',
		padding: '0 15px 0 0',
	},
	rightContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	headshot: {
		transform: 'rotate(6deg)',
		width: '280px',
		position: 'absolute',
		zIndex: 1,
		filter: 'grayscale(30%)',
		opacity: '80%',
	},
	headshotBox1: {
		width: '300px',
		height: '300px',
		backgroundColor: '#1d1e22',
		display: 'flex',
		position: 'relative',
		transform: 'rotate(-3deg)',
		opacity: '60%',
		top: -10,
		left: 0,
		zIndex: 0,
	},
}))

const About = () => {
	const classes = useStyles()

	return (
		<Box className={classes.aboutContainer}>
			<Grid container>
				{/* LEFT COLUMN */}
				<Grid item md={7}>
					<Box sx={{ pl: 24, mb: 4, mt: 10 }}>
						<Typography className={classes.aboutTitle}>about</Typography>
					</Box>
					<Box sx={{ pl: 24, pr: 1, mb: 3 }}>
						<Typography className={classes.aboutText}>
							I’m Mary Ann Navarrete, a Full-Stack Software Engineer and Project Manager based in the Washington, D.C.
							area. I enjoy building things that solve problems, increase efficiency, and give back to the community. In
							2020, I decided to pursue my dream of becoming a software engineer after years of using HTML & CSS to
							spruce up personal projects.
						</Typography>
					</Box>
					<Box sx={{ pl: 24, pr: 1, mb: 3 }}>
						<Typography className={classes.aboutText}>
							My background comes from 15 years of sales & marketing roles in the hospitality industry. Part
							problem-solver who loves data-driven analysis, & part design enthusiast, I get to enjoy both worlds as a
							full stack software developer.
						</Typography>
					</Box>
					<Box sx={{ pl: 24, pr: 1, mb: 5 }}>
						<Typography className={classes.aboutText}>
							Outside of coding, I enjoy watching NBA games (go Sixers!), documentaries, reading, golf, learning,
							cooking, traveling & snuggling with my shih tzu Toby.
						</Typography>
					</Box>
					<Box sx={{ pl: 24, pr: 1 }}>
						<Typography className={classes.techTitle}>Technologies I work with:</Typography>
						<Grid container>
							<Grid item md={4}>
								<ul className={classes.techText}>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> JavaScript
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> HTML
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> CSS
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> Ruby/Rails
									</li>
								</ul>
							</Grid>
							<Grid item md={4}>
								<ul className={classes.techText}>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> React
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> Strapi
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> MongoDB
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> SQL
									</li>
								</ul>
							</Grid>
							<Grid item md={4}>
								<ul className={classes.techText}>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> WordPress
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> Material-UI
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> Bootstrap
									</li>
									<li>
										<HiOutlineArrowSmRight color="#A69580" fontSize="16px" /> Adobe Photoshop
									</li>
								</ul>
							</Grid>
						</Grid>
					</Box>
					<div className={classes.box1}></div>
				</Grid>

				{/* RIGHT COLUMN */}
				<Grid item md={5}>
					<Box className={classes.rightContainer} sx={{ mt: 20, ml: -6 }}>
						<img src={Picture} alt="headshot" className={classes.headshot} />
						<div className={classes.headshotBox1}></div>
					</Box>
					<div className={classes.box2}></div>
				</Grid>
			</Grid>
		</Box>
	)
}

export default About
