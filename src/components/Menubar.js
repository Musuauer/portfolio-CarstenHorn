import React, { Component } from 'react'
import { Link } from 'gatsby'

class Menubar extends Component {
  render () {
    return (
      <div className='menu'>
        <div className='menu-item'>
          <h2>
            <Link
              to='/Woanders'
              activeClassName='current'
            >
                      Woanders
            </Link>
          </h2>
        </div>

        <div className='menu-item'>
          <h2>
            <Link
              to='/Archiv'
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

        <div className='menu-item'>
          <h2>
            <Link
              to='/Impressum'
              activeClassName='current'
            >
                     Impressum
            </Link>
          </h2>
        </div>

      </div>
    )
  }
}

export default Menubar
