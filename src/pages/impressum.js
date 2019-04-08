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
            {data.allContentfulImpressum.edges[0].node.impressumText.impressumText.split('\n').map(line =>
              <p key={line}>
                {line}
              </p>)}
          </div>
        </div>
      </Layout>
    )}
  />
)

export default Impressum
