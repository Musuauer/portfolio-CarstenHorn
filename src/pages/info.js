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
              shows{
                _1{
                  date
                  text
                  place
                  title
                }
                _2{
                  date
                  text
                  place
                  title
                }
                _3{
                  date
                  text
                  place
                  title
                }
                _4{
                  date
                  text
                  place
                  title
                }
                _5{
                  date
                  text
                  place
                  title
                }
                _6{
                  date
                  text
                  place
                  title
                }
                _7{
                  date
                  text
                  place
                  title
                }
                _8{
                  date
                  text
                  place
                  title
                }
                _9{
                  date
                  text
                  place
                  title
                }  
                _10{
                  date
                  text
                  place
                  title
                }  
                _11{
                  date
                  text
                  place
                  title
                }
              }
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
              <h3>Austellungen</h3>
              {console.log('shows...', Object.entries(data.allContentfulInfo.edges[0].node.shows).sort(([, v1], [, v2]) => +v2 - +v1))}
              {Object.entries(data.allContentfulInfo.edges[0].node.shows).map(show =>
                <div className='show' key={show[0]}>
                  <p>
                    <span>
                      {show[1].date} {show[1].title}
                    </span>
                  </p>
                  <p>
                    {show[1].text} {show[1].place}

                  </p>

                </div>
              ).sort(function (a, b) {
                return a < b ? -1 : (a > b ? 1 : 0)
              })}
            </div>

          </div>
        </div>
      </Layout>
    )}
  />
)

export default Info
