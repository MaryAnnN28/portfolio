import React from 'react'
import { TextField, FormLabel, Grid, Box, Button, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	contactContainer: {
		height: '100vh',
		paddingTop: '2rem',
		marginLeft: '15rem',
		marginRight: '15rem',
	},
	contactTitle: {
		color: '#B59D4C',
		fontFamily: 'Montserrat',
		fontSize: '20pt',
		letterSpacing: '2px',
		marginBottom: '2rem',
	},
	formContainer: {
		background: '#383838',
		opacity: '60%',
		padding: '4rem',
		borderRadius: '50px 50px 0 50px',
	},
	formLabel: {
		color: '#686868',
	},
}))

const Contact = () => {
	const classes = useStyles()

	return (
		<>
			<Box className={classes.contactContainer}>
				<Box>
					<Typography className={classes.contactTitle}>Contact</Typography>
				</Box>
				<Grid container spacing={2} className={classes.formContainer}>
					<Grid item md={6}>
						<Grid container spacing={1}>
							<Grid item md={12}>
								<FormLabel>
									<Typography className={classes.formLabel}>Name</Typography>
								</FormLabel>
							</Grid>
							<Grid item md={12}>
								<TextField fullWidth type="text" name="name" variant="outlined"></TextField>
							</Grid>
							<Grid item md={12}>
								<FormLabel>
									<Typography className={classes.formLabel}>Email</Typography>
								</FormLabel>
							</Grid>
							<Grid item md={12}>
								<TextField fullWidth type="email" name="email" variant="outlined"></TextField>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={6}>
						<Grid container spacing={1}>
							<Grid item md={12}>
								<FormLabel>
									<Typography className={classes.formLabel}>Comment</Typography>
								</FormLabel>
							</Grid>
							<Grid item md={12}>
								<TextField fullWidth multiline rows={6} type="text" name="comment" variant="outlined"></TextField>
							</Grid>
							<Grid item md={12} direction="column" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Button variant="contained" sx={{ px: 5 }}>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Contact
