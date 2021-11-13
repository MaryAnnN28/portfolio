import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Header, About, Projects, Blog, Contact, Footer } from './components'
import './assets/index.css'

const useStyles = makeStyles(() => ({
	app: {
		background: 'radial-gradient(circle, #40495C 6%, #141615 94%)',
		// background: 'radial-gradient(circle, #405054 6%, #141615 88%)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
	},
}))

const App = () => {
	const classes = useStyles()

	return (
		<div className={classes.app}>
			<Header />
			<About />
			<Projects />
			{/* <Blog /> */}
			<Contact />
			<Footer />
		</div>
	)
}

export default App
