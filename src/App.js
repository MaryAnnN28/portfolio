import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Header, About, Projects, Blog, Contact, Footer } from './components'
import './assets/index.css'

const useStyles = makeStyles(() => ({
	app: {
		background: 'radial-gradient(circle, rgba(6,6,6,1) 12%, rgba(0,0,0,1) 88%)',
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
			<Blog />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
