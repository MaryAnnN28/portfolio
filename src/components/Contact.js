import { useEffect } from 'react'
import { TextField, FormLabel, Grid, Box, Button, Typography, makeStyles } from '@material-ui/core'
import { AiOutlineMail } from 'react-icons/ai'

const useStyles = makeStyles(() => ({
	contactContainer: {
		height: '80vh',
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: '4rem',
		paddingTop: '10rem',
	},
	contactTitle: {
		color: '#40495C',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginBottom: '2rem',
	},
	contactSubtitle: {
		color: '#e9e9e9',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginTop: '1rem',
		marginBottom: '2rem',
		alignText: 'center',
	},
	mailIcon: {
		color: '#8C8C8C',
	},
}))

const Contact = () => {
	const classes = useStyles()

	return (
		<>
			<Box className={classes.contactContainer}>
				<Grid container>
					<Grid item md={12} lg={12}>
						<Box sx={{ pl: 20 }}>
							<Typography className={classes.contactTitle}>contact</Typography>
						</Box>
					</Grid>
					<Grid item md={12} lg={12}>
						<Box
							direction="column"
							sx={{
								display: 'block',
								justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<Typography className={classes.contactSubtitle}>Get in touch.</Typography>

							<Typography className={classes.mailIcon}>
								<AiOutlineMail fontSize="70px" />
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Contact
