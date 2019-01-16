import React from 'react'
import Menubar from './Menubar'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'

export default class Header extends React.Component {
  state = {
    open: false
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    console.log('header mounted')
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

          <div className='menu-btn' id='menu-btn'>
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick}
              width={28}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
            />
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
