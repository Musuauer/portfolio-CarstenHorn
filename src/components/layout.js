import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

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
                { name: 'description', content: 'Carsten Horn ist Fotograf und Kunstvermittler in Berlin. Seine Arbeit erkundet die Grenzen zwischen dokumentarischer und künstlerischer Fotografie. Inhaltlich interessieren ihn Architektur und Formen des Zusammenlebens im Spiegel von Utopie und Alltag.' },
                { name: 'keywords', content: 'contemporary, art, photography, berlin, documentary' }
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
