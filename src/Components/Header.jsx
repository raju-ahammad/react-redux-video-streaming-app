import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secoundary pointing menu">
            <Link to="/" className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Strems
                </Link>
            </div>
        </div>
    )
}

export default Header;
