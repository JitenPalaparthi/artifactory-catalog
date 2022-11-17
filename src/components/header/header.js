import React, { Component } from 'react'
import PropTypes from 'prop-types'

import logo from './intuit-white-logo.png'
import defUserImage from './default-user-icon-profile.png'
import * as styles from './header.style'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
//import { withAuthentication } from '../../services/Security'
import { connect } from 'react-redux'

const addDefaultUserImage = (ev) => {
    ev.target.src = defUserImage
}

const USER_PICTURE = (corpId) => `https://intuitcloud.sharepoint.com/profiles/profileimages/_t/${corpId}_default_jpg.jpg`

const URL = {
    HOME: '/',
    LOGIN: '/login',
    AMIS: '/amis',
    PATTERNS: '/patterns'
}

class Header extends Component {
    render () {
        const { user, filters } = this.props
        const pictureUrl = (user) ? USER_PICTURE(user.corpid) : defUserImage
        const { name } = this.props
        const { pathname } = this.props.location
        const trigger = user ? (
            <span>
                <Image avatar src={pictureUrl} onError={addDefaultUserImage} /> {user.firstname} {user.lastname}
            </span>
        ) : null

        const options = [
            { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: this.props.onLogout }
        ]

        return (
            <Menu fixed="top" secondary inverted style={styles.NAVBAR}>
                <Container>
                    <Menu.Item as={Link} to={URL.HOME} header style={styles.ITEM_TITLE}>
                        <Image src={logo} style={styles.SITE_LOGO}/>
                        <span style={styles.SITE_NAME}>{name}</span>
                    </Menu.Item>
                    {user &&
                    <Menu.Menu position='right'>
                        <Menu.Item style={styles.ITEM_LINK} as={Link} to={URL.AMIS} active={pathname === URL.AMIS}>AMIs</Menu.Item>
                        <Menu.Item style={styles.ITEM_LINK} onClick={() => { this.props.history.push(`/patterns/${filters.tag || ''}`) }} active={pathname === URL.PATTERNS}>Patterns</Menu.Item>
                        <Dropdown item trigger={trigger} options={options} pointing='top left' icon={null} />
                    </Menu.Menu>
                    }
                    {!user &&
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to={URL.LOGIN}>Login</Menu.Item>
                    </Menu.Menu>
                    }
                </Container>
            </Menu>
        )
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
    user: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    filters: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        filters: state.patterns.filters
    }
}

export default connect(mapStateToProps, {})(withRouter(Header))
