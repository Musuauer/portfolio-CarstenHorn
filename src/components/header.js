import React from 'react'
import Menubar from './Menubar'
import { Link } from 'gatsby'

class Header extends React.Component {
  state = {
    open: false
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <header>

        <div className='name'>
          <h1>
            <Link
              to='/'
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>

        <Menubar />

        <div className='mobile-nav'>

          <div className='menu-btn' id='menu-btn' onClick={this.handleClick} style={{ cursor: 'pointer' }}>
            <svg width={28} height={15} viewBox='0 0 28 15' style={{ display: 'block' }}>
              <line x1='0' y1='0' x2='28' y2='0' stroke='black' strokeWidth='1' />
              <line x1='0' y1='7' x2='28' y2='7' stroke='black' strokeWidth='1' />
              <line x1='0' y1='14' x2='28' y2='14' stroke='black' strokeWidth='1' />
            </svg>
          </div>

          {this.state.open === true &&
          (
            <div className='responsive-menu close-btn'>
              <div className='menu-content'>
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

                <div className='menu-item'>
                  <h2>
                    <Link
                      to='/impressum'
                      activeClassName='current'
                    >
                      Impressum
                    </Link>
                  </h2>
                </div>
                <br />
                <br />
              </div>
            </div>
          )
          }

        </div>

      </header>

    )
  }
}

export default Header
