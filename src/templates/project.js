import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export class ProjectTemplate extends React.Component {
  // componentDidMount () {
  //   this.processImages()
  // }
  // processImages = () => {
  //   const domImages = [...document.querySelectorAll('.gatsby-resp-image-wrapper')]
  //   return domImages[0]
  // }

  render () {
    const {
      images,
      title
    } = this.props

    return (
      <React.Fragment>
        <div className='project'>
          <div className='project-header'>
            <h3 className='project-name'>{title}</h3>
          </div>

        </div>
        {console.log('images', images)}
        <div className='photos-container'>
          {images.map(image =>
            <div key={image.fluid.src}>
              <img src={image.fluid.src} alt={title} />
            </div>

          )}
        </div>

      </React.Fragment>
    )
  }
}

const Project = ({ data }) => {
  const post = data.allContentfulProject || data.allContentfulBook
  console.log('ProjectData', post.edges[0].node)
  return (
    <Layout>

      <ProjectTemplate
        images={post.edges[0].node.images}
        title={post.edges[0].node.title}
        path={post.edges[0].node.path}
      />
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
query projectQuery ($path: String!){
  allContentfulProject(filter: { path: { eq: $path }}){
    edges{
      node{
        title
        path
        images{
          fluid{
            src
          }
        }
      }
    }
  }
  allContentfulBook(filter: { path: { eq: $path }}){
    edges{
      node{
        title
        path
        images{
          fluid{
            src
          }
        }
      }
    }
  }
  } 
`
