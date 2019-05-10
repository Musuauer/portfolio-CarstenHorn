import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ArrowLeft from '../Utils/ArrowLeft'
import ArrowRight from '../Utils/ArrowRight'

import { useTransition, animated } from 'react-spring/web.cjs'

export const ProjectTemplate = (props) => {
  const availableImages = props.images

  const [ index, set ] = useState(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextRight = useCallback(() => set(state => (state + 1) % availableImages.length), [])
  const nextLeft = useCallback(() => set(state => (state === 0 ? availableImages.length - 1 : state - 1), []))

  // const transitions = useTransition(index, p => p, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)', position: 'absolute', top: '0' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  // })

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute', top: '0' },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <React.Fragment>
      <div className='images-container'>
        {transitions.map(({ item, props, key }) => {
          const currentImage = availableImages[item]
          return <animated.div key={key} style={props} >
            <Img
              fluid={currentImage.fluid}
              imgStyle={{objectFit: 'contain'}}
              className='project-images'
              fadeIn={false}
              // backgroundColor={'white'}
            />
          </animated.div>
        })}
      </div>

      <div className='arrows'>
        {/* <div
          onClick={() => nextLeft()}
        >
          <ArrowLeft
            width='1.3rem'
          />
        </div> */}

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
    </React.Fragment>

  )
}

const Project = ({ data }) => {
  console.log('Data', data)

  const post = (data.allContentfulBook.edges[0]) ? data.allContentfulBook : data.allContentfulProject

  console.log('ProjectData', post)
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
