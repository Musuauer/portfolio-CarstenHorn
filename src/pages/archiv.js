import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MarkdownProcessor } from '../components/Markdown/MarkdownProcessor'

class Project extends Component {
  render () {
    const { project } = this.props


    return (
      <div
        className='list-item'
      >
        <Link
          className='link'
          to={project.path}
        >
          {project.title}
        </Link>

        <div className='project-text'
        // dangerouslySetInnerHTML={{ __html: project.description2.childContentfulRichText.html.replace('\n', '') }}
        >
          {
            project.description2.raw
            ?   <MarkdownProcessor
            markdownElement={ project.description2 }
          />
          : null
          }

          </div>

        {project.website &&
        <p className='project-website'>
          <a
            href={project.website[1]}
            target='_blank'
            rel='noopener noreferrer'>
            {project.website[0]}
          </a>
        </p>
        }

      </div>
    )
  }
}

const Archiv = (props) => (
  <StaticQuery
    query={
      graphql`
      query archivQuery {
        allContentfulProject(sort: {
          fields: [order], order: ASC
      }){
          edges{
            node{
              title
              order
              path
              website
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
          {data.allContentfulProject.edges
            .map(({ node: project }, i) => (
              <Project
                key={project.order}
                project={project}
                projectIndex={i}
              />
            ))}
        </div>
      </Layout>
    )}
  />
)

export default Archiv
