import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles'
import Navbar from './Navbar'

const LayoutRoot = styled('div')(({ theme }) => ({
	backgroundColor: '#121212',
	height: '100%',
	paddingTop: 20,
	margin: '0 auto',
}))

const Layout = ({ children }) => {
	const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false)

	return (
		<LayoutRoot>
			<Navbar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
		</LayoutRoot>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
