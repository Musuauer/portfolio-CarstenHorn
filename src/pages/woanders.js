import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MarkdownProcessor } from '../components/Markdown/MarkdownProcessor'
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
              description2 {
                raw
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

          <div className='project-text'
          >
                 {
            data.allContentfulBook.edges[0].node.description2.raw
            ?   <MarkdownProcessor
            markdownElement={ data.allContentfulBook.edges[0].node.description2 }
          />
          : null
          }
            </div>

        </div>
      </Layout>
    )}
  />
)

export default Archiv
