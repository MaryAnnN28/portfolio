import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { experimentalStyled } from '@material-ui/core/styles'

const LayoutRoot = experimentalStyled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	height: '100%',
	paddingTop: 64,
}))

const Layout = ({ children }) => {
	const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false)

	return <LayoutRoot></LayoutRoot>
}

export default Layout
