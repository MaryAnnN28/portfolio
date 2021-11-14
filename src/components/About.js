import { useEffect, useLayoutEffect, useRef } from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Picture from '../images/headshot.jpg'
import { gsap } from 'gsap'
import Fade from 'react-reveal/Fade'

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
		backgroundColor: '#101011',
		opacity: '50%',
		top: -680,
		left: -310,
		zIndex: 1,
	},
	box2: {
		height: 450,
		width: 450,
		display: 'flex',
		position: 'relative',
		transform: 'rotate(52deg)',
		backgroundColor: '#101011',
		opacity: '40%',
		top: -60,
		right: -460,
		zIndex: 1,
	},
	aboutTitle: {
		color: '#A5B2CC',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		fontWeight: '400',
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
		color: '#A5B2CC',
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
		width: '260px',
		position: 'absolute',
		zIndex: 1,
		filter: 'grayscale(30%)',
		opacity: '80%',
	},
	headshotBox1: {
		width: '300px',
		height: '300px',
		backgroundColor: '#40495C',
		opacity: '50%',
		display: 'flex',
		position: 'relative',
		transform: 'rotate(-3deg)',
		top: -10,
		left: 0,
		zIndex: 0,
	},
}))

const About = () => {
	const classes = useStyles()
	const title = useRef()

	gsap.to('.titleContainer', {
		scrollTrigger: {
			trigger: '.titleContainer',
			start: '20px 80%',
			end: 'bottom 100px',
			// markers: true,
			toggleActions: 'restart pause reverse pause',
		},
		y: 100,
		opacity: 0,
		duration: 2,
	})

	return (
		<Box className={classes.aboutContainer} id="aboutSection">
			<Grid container>
				{/* LEFT COLUMN */}
				<Grid item md={7} className={classes.aboutLeft}>
					<Box sx={{ pl: 24, mb: 4, mt: 10 }}>
						{/* <div className="titleContainer"> */}
						<Typography
							className="titleContainer"
							ref={title}
							style={{
								color: '#A5B2CC',
								fontFamily: 'Montserrat',
								fontSize: '20pt',
								fontWeight: '400',
								letterSpacing: '2px',
							}}
						>
							about
						</Typography>
						{/* </div> */}
					</Box>
					<Box sx={{ pl: 24, pr: 1, mb: 3 }}>
						<Typography className={classes.aboutText}>
							I’m Mary Ann Navarrete, a Full-Stack Software Engineer and Project Manager based in the Northern Virignia
							area. I enjoy building things that solve problems, increase efficiency, and give back to the community. In
							2020, I decided to pursue my dream of becoming a software engineer after years of personal website
							projects & being inspired to do something about the lack of functionality & features in the hotel CRM
							software I used for work.
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
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> JavaScript
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> HTML
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> CSS
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> React
									</li>
								</ul>
							</Grid>
							<Grid item md={4}>
								<ul className={classes.techText}>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> Node.js
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> Strapi
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> MongoDB
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> SQL
									</li>
								</ul>
							</Grid>
							<Grid item md={4}>
								<ul className={classes.techText}>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> WordPress
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> Material-UI
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> Bootstrap
									</li>
									<li>
										<HiOutlineArrowSmRight color="#888A8D" fontSize="16px" /> Adobe Photoshop
									</li>
								</ul>
							</Grid>
						</Grid>
					</Box>
					<div className={classes.box1}></div>
				</Grid>

				{/* RIGHT COLUMN */}
				<Grid item md={5}>
					<Box className={classes.rightContainer} sx={{ mt: 20, ml: -20 }}>
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
