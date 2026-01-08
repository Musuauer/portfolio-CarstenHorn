import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ArrowRight from '../Utils/ArrowRight'

export const ProjectTemplate = (props) => {
  const availableImages = props.images || []

  const [ index, set ] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextRight = useCallback(() => {
    if (availableImages.length > 0) {
      set(state => (state + 1) % availableImages.length)
    }
  }, []
  )

  const currentImage = availableImages[index]

  if (!currentImage) {
    return (
      <div style={{ position: 'relative', height: '100%' }}>
        <div className='home-images' style={{ position: 'relative', width: '100%', height: '100%' }}>
          <p>No images available</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', height: '100%' }}>

      <div className='home-images' style={{ position: 'relative', width: '100%', height: '100%' }} onClick={() => nextRight()}>
        <img
          src={currentImage.publicUrl}
          alt={currentImage.title || ''}
          style={{objectFit: 'contain', width: '100%', height: '100%'}}
          className='images'
        />
      </div>

      <div className='arrows'>

        <div
          onClick={() => nextRight()}
        >
          <ArrowRight
            width='1.2rem'
          />
        </div>
      </div>
      <div className='title'>
        <p>
          {props.title}
        </p>
      </div>
    </div>

  )
}

const Project = ({ data }) => {

  const post = (data.allContentfulBook.edges[0]) ? data.allContentfulBook : data.allContentfulProject

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
          publicUrl
          title
          width
          height
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
          publicUrl
          title
          width
          height
        }
      }
    }
  }
  }
`
