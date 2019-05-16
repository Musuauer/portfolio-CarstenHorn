import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

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

        <p className={'project-text'}>
          {project.description.description.split('\n').map((line, index) =>
            <p key={index}>
              {line}
            </p>)}
        </p>

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
              description {
                description
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
