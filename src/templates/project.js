import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ArrowLeft from '../Utils/ArrowLeft'
import ArrowRight from '../Utils/ArrowRight'

export class ProjectTemplate extends React.Component {
  state = {
    images: this.props.images,
    currentIndex: 0
  }

  nextLeft = () => {
    const currentIndex = this.state.currentIndex
    let newIndex = 0

    currentIndex === 0
      ? (newIndex = this.props.images.length - 1)
      : (newIndex = currentIndex - 1)
    console.log('currentIndex:', currentIndex, 'newIndex:', newIndex)

    this.setState({
      currentIndex: newIndex
    })
  }

  nextRight = () => {
    const currentIndex = this.state.currentIndex
    const newIndex = currentIndex + 1

    this.setState({
      currentIndex: (this.state.images.length === newIndex)
        ? 0
        : newIndex
    })
  }

  render () {
    const { images, currentIndex } = this.state

    return (
      <div className='images-container'>
        {console.log('images', images[currentIndex], 'index:', currentIndex)}
        <Img
          fluid={images[currentIndex].fluid}
          imgStyle={{objectFit: 'contain'}}
          className='project-images'
          fadeIn={false}
          // backgroundColor={'white'}
        />

        <div className='arrows'>
          <div
            onClick={() => this.nextLeft()}
          >
            <ArrowLeft
              width='1.3rem'
            />
          </div>

          <div
            onClick={() => this.nextRight()}
          >
            <ArrowRight
              width='1.3rem'
            />
          </div>
        </div>
      </div>

    )
  }
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
