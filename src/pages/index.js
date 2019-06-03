import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../pages/style.css'

export default class IndexPage extends React.Component {
  state= {
    images: [],
    randomImage: ''
  }

  componentDidMount () {
    const images = this.props.data.allContentfulHomeImages.edges[0].node.homeImages.map(image =>
      image.fluid
    )
    this.setState(
      { images },
      () => this.shuffleNow()
    )
  }

  shuffleNow = () => {
    const imagesCopy = this.state.images.slice(0)
    const shuffledImages = this.shuffle(imagesCopy)
    this.setState({ randomImage: shuffledImages[0] })
  }

 shuffle = (array) => {
   let currentIndex = array.length
   let temporaryValue, randomIndex

   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex)
     currentIndex -= 1
     temporaryValue = array[currentIndex]
     array[currentIndex] = array[randomIndex]
     array[randomIndex] = temporaryValue
   }
   return array
 }

 render () {
   console.log('state', this.state)
   if (!this.state.randomImage) {
     return <div>
       <p>
          loading...
       </p>
     </div>
   }
   return (
     <Layout>
       <div
         onClick={this.shuffleNow}
         className='home-images'
       >
         <Img
           fluid={this.state.randomImage}
           imgStyle={{objectFit: 'contain'}}
           className='images'
           fadeIn={false}
           backgroundColor={'white'}
         />
       </div>

     </Layout>
   )
 }
}

export const query = graphql`
  query home{
    allContentfulHomeImages{
      edges{
        node{
          homeImages{
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
