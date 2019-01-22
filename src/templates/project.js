import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export class ProjectTemplate extends React.Component {
  componentDidMount () {
    this.processImages()
  }
  processImages = () => {
    const domImages = [...document.querySelectorAll('.gatsby-resp-image-wrapper')]
    return domImages[0]
  }

  render () {
    const {
      images,
      title,
      description
    } = this.props

    return (
      <React.Fragment>
        <div className='project'>
          <div className='project-header'>
            <h3 className='project-name'>{title}</h3>
          </div>

          <div className='project-text'>
            <p>
              {description}
            </p>
          </div>

          {/* <div className='project-credit'>
          {performers && <p>Performers: {performers}</p>}
          {documentation && <p>{documentation}</p>}
          {extra1 && <p>{extra1}</p>}
          {extra2 && <p>{extra2}</p>}
        </div> */}

        </div>
        {console.log('images', images)}
        <div className='photos-container'
          dangerouslySetInnerHTML={{__html: images}} />
        {this.processImages()}
      </React.Fragment>
    )
  }
}

// export const ProjectTemplate = ({
//   images,
//   title,
//   path,
//   description
// }) => {
//   return (

//   )
// }

ProjectTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('imagesProject', data)
  return (
    <Layout>

      <ProjectTemplate
        images={post.html}
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        location={post.frontmatter.location}
        description={post.frontmatter.description}
      />
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Project

export const pageQuery = graphql`
  query ($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        title
        path
        description
      }
    }
    imagesProject: allFile(filter: { sourceInstanceName: { eq: "images" },  }) {
      edges{
        node{
          childImageSharp{
            fluid(maxWidth: 1800){
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
