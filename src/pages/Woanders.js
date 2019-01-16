import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

class Project extends Component {
  render () {
    const { post } = this.props

    return (
      <div
        className='list-item'
      >
        <Link
          className='link'
          to={post.frontmatter.path}
        >
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
        </div>
      </Layout>
    )}
  />
)

export default Archiv
