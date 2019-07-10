import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const Impressum = (props) => (
  <StaticQuery
    query={
      graphql`
      query impressumQuery {
        allContentfulImpressum{
          edges{
            node{
              impressumText{
                impressumText
              }
              copyright
              datenschutz{
                datenschutz
              }
            }
          }
        }
        }
  `
    }
    render={data => (
      <Layout>
        <div className='impressum-container'>
          <div className='impressum-text'>
            {console.log('impressum', data.allContentfulImpressum.edges[0].node.impressumText)}

            <div className='copyright'>
              <p>
                {data.allContentfulImpressum.edges[0].node.copyright}
              </p>
            </div>

            <div className='impressum-text'>
              {data.allContentfulImpressum.edges[0].node.impressumText.impressumText.split('\n\n').map(line =>
                <p key={line}>
                  {line}
                </p>)}
            </div>

            <div className='datenschutz-text'>
              {data.allContentfulImpressum.edges[0].node.datenschutz.datenschutz.split('\n\n').map(line =>
                <p key={line}>
                  {line}
                </p>)}
            </div>

            <div className='credit'>
              <p>
                Design und entwicklung: <a
                  href='https://www.juliamarquardt.de/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                   Julia Marquardt
                </a> und <a
                  href='https://www.guillermogudino.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                   Guillermo Gudiño
                </a>
              </p>
            </div>

          </div>
        </div>
      </Layout>
    )}
  />
)

export default Impressum
