import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Controls from './Controls'


class Navbar extends React.Component {
	render(){
		return (
        <Menu>
            <Link to="/home">
							<Image src="https://img.discogs.com/5W8PKs-vbee-5jQxMWbYNcemubI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-6117533-1512126717-2897.jpeg.jpg" size="small"/>
						</Link>
          <Controls handleLogout={this.props.handleLogout} currentUser={this.props.currentUser}/>
        </Menu>
		)
	}
}

export default Navbar
