import React from 'react'
import { Typography } from '@mui/material'
import { Navbar, Footer } from './components'

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="navbar">
				<Footer />
			</div>
		</div>
	)
}

export default App
