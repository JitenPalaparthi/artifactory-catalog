import React from 'react'
import * as styles from './header.style'
import logo from './intuit-white-logo.png'

import defUserImage from './default-user-icon-profile.png'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
//import { withAuthentication } from '../../services/Security'
import { connect } from 'react-redux'
const URL = {
  HOME: '/',
  LOGIN: '/login',
  AMIS: '/amis',
  PATTERNS: '/patterns'
}
function Title(props) {
  const { name } = props

  return (
    <Menu fixed="top" secondary inverted style={styles.NAVBAR}>
      <Container>
        <Menu.Item  to={URL.HOME} header style={styles.ITEM_TITLE}>
          <Image src={logo} style={styles.SITE_LOGO} />
          <span style={styles.SITE_NAME}>{name}</span>
        </Menu.Item>
      </Container>
    </Menu>
  )
}
export default Title