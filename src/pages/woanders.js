import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectIndex = styled.div`
  display: inline;
  margin-right: 1rem;
`

class Project extends Component {
  render () {
    const { chapter, projectIndex } = this.props
    return (
      <div
        className='list-item'
      >

        <Link
          className='link'
          to={chapter.path}
        >
          <ProjectIndex>
            {projectIndex + 1}
          </ProjectIndex>

          {chapter.title}
        </Link>

      </div>
    )
  }
}

const Archiv = (props) => (
  <StaticQuery
    query={
      graphql`
      query woandersQuery{
        allContentfulBook(sort: {
          fields: [order], order: ASC
      }){
          edges{
            node{
              id
              title
              order
              path
              description2{
                childContentfulRichText{
                  html
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
        <div className='project-list'>
          {data.allContentfulBook.edges
            .map(({ node: chapter }, i) => (
              <Project
                key={chapter.id}
                chapter={chapter}
                projectIndex={i}
              />
            ))}
          { console.log('book data', data.allContentfulBook.edges[0].node)}

          <div className='project-text' dangerouslySetInnerHTML={{ __html: data.allContentfulBook.edges[0].node.description2.childContentfulRichText.html.replace('\n', '<br/><br/>') }} />

        </div>
      </Layout>
    )}
  />
)

export default Archiv
