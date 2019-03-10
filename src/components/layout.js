import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'

import '../pages/style.css'

class Layout extends Component {
  render () {
    return (
      <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (

          <div className='App'>

            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'My work is based on speech performances and testimonial actions. It promotes the concept of intimacy with the audience where the body of the artist and those of the participants/collaborators are the subject and, simultaneously, the transmitting mechanism of the work.' },
                { name: 'keywords', content: 'contemporary, art, photography, berlin' }
              ]}
            >
              <html lang='de' />
            </Helmet>

            <Header
              siteTitle={data.site.siteMetadata.title}
            />

            <main>
              <div className='content'>
                {this.props.children}
              </div>
            </main>

          </div>

        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
