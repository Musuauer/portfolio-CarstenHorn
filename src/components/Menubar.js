import React, { Component } from 'react'
import { Link } from 'gatsby'

class Menubar extends Component {
  render () {
    return (
      <div className='menu menu-project'>
        <div className='menu-item'>
          <h2>
            <Link
              to='/woanders'
              activeClassName='current'
              // onClick={this.handleClick}
            >
                      Woanders
            </Link>
          </h2>
        </div>

        <div className='menu-item'>
          <h2>
            <Link
              to='/archiv'
              activeClassName='current'
            >
                      Archiv
            </Link>
          </h2>
        </div>

        <div className='menu-item'>
          <h2>
            <Link
              to='/info'
              activeClassName='current'
            >
                      Info
            </Link>
          </h2>
        </div>

      </div>
    )
  }
}

export default Menubar
