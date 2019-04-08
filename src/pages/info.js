import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const Info = (props) => (
  <StaticQuery
    query={
      graphql`
      query infoQuery {
        allContentfulInfo{
          edges{
            node{
              bio {
                bio
              }
              email
              pdf {
                file {
                  url
                  
                }
              }
              
            }
          }
        }
        }
  `
    }
    render={data => (
      <Layout>
        <div className='info-container'>
          <div className='info-text'>
            {console.log('info', data.allContentfulInfo.edges[0].node)}
            <h2>e-mail: <a href={`mailto: ${data.allContentfulInfo.edges[0].node.email}`} target='_top'>{data.allContentfulInfo.edges[0].node.email}</a></h2>
            {data.allContentfulInfo.edges[0].node.bio.bio.split('\n').map((line, index) =>
              <p key={index}>
                {line}
              </p>)}
          </div>
        </div>
      </Layout>
    )}
  />
)

export default Info
