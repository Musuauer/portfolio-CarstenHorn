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
    const { post, projectIndex } = this.props
    return (
      <div
        className='list-item'
      >

        <Link
          className='link'
          to={post.frontmatter.path}
        >
          <ProjectIndex>
            {projectIndex}
          </ProjectIndex>

          {post.frontmatter.title}
        </Link>

        {/* <Link
          to={!german ? post.frontmatter.path : `/de${post.frontmatter.path}`}
          className={this.state.linkClass}
        >
          <img
            src={post.frontmatter.thumbnail}
            className={this.state.imageClass} alt='thumbnail'
          />
        </Link> */}

      </div>
    )
  }
}

const Archiv = (props) => (
  <StaticQuery
    query={
      graphql`
  query WoandersQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] },
      filter: { frontmatter: { templateKey: { eq: "project" }, category: { eq: "woanders" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            templateKey
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
          {data.allMarkdownRemark.edges
            .map(({ node: post }, i) => (
              <Project
                key={post.id}
                post={post}
                projectIndex={i}
              />
            ))}

          <p className={'project-text'}>
        Das Buch- und Ausstellungsprojekt  ‚Woanders’ versammelt Bilder aus 20 Jahren, die ums Wagenleben kreisen. Es ist das Porträt eines Wagenplatzes, seiner Räumung 2014 und einiger Bewohner*innen. Die Bilder zeigen weniger spektakuläre Situationen im öffentlichen Raum als vielmehr Privates und Alltägliches. Blicke, Lücken und Leerstellen sind dabei genauso im Fokus, wie das Bleiben von Dingen und Beziehungen. Es wird ein Bogen geschlagen bis heute, zu den Freundschaften, zu anderen Orten, wo Gemeinschaft gelebt wird.
          </p>

        </div>
      </Layout>
    )}
  />
)

export default Archiv
