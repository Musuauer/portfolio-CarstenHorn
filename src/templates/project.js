import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export class ProjectTemplate extends React.Component {
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
              <Img
                fluid={image.fluid}
                imgStyle={{objectFit: 'contain'}}
                className='project-images'
                fadeIn
                // backgroundColor={'white'}
              />
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
            aspectRatio
            srcSet
            sizes
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
            aspectRatio
            srcSet
            sizes
          }
        }
      }
    }
  }
  } 
`
