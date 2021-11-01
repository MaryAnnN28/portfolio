import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Header, About, Projects } from './components'
import './assets/index.css'

const useStyles = makeStyles(() => ({
	app: {
		background: 'radial-gradient(circle, rgba(10,10,10,1) 11%, rgba(0,0,0,1) 89%)',
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
		</div>
	)
}

export default App
