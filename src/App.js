import React, { useEffect } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Header, About } from './components'
import WebFont from 'webfontloader'

const useStyles = makeStyles(() => ({
	app: {
		background: 'radial-gradient(circle, rgba(16,16,16,1) 12%, rgba(0,0,0,1) 78%)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
}))

const App = () => {
	const classes = useStyles()

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Montserrat'],
			},
		})
	}, [])

	return (
		<div className={classes.app} style={{ fontFamily: 'Montserrat' }}>
			{/* <Layout /> */}
			<Header />
			<About />
		</div>
	)
}

export default App
