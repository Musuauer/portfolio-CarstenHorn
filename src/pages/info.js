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
              ausstellungen {
                childContentfulRichText {
                  html
                }
              }
              bio {
                bio
              }
              email
              pdf{
                title
                file{
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

            <h2>E-Mail: <a href={`mailto: ${data.allContentfulInfo.edges[0].node.email}`} target='_top'>

              {data.allContentfulInfo.edges[0].node.email}</a></h2>

            {data.allContentfulInfo.edges[0].node.bio.bio.split('\n').map((line, index) =>
              <p key={index}>
                {line}
              </p>)}

            <div className='shows'>
              <h3>Ausstellungen</h3>

              <div dangerouslySetInnerHTML={{ __html: data.allContentfulInfo.edges[0].node.ausstellungen.childContentfulRichText.html }} />

            </div>

            <div className='press'>
              <h3>Presse</h3>
              {console.log('press:', data.allContentfulInfo.edges[0].node.pdf)}
              {data.allContentfulInfo.edges[0].node.pdf.map(pdf => (
                <a
                  key={pdf.file.url}
                  href={`http:${pdf.file.url}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {pdf.title}
                </a>
              ))}
            </div>

          </div>
        </div>
      </Layout>
    )}
  />
)

export default Info
