import React from 'react'
// import styled from 'styled-components'
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
    console.log('did mount:', this.props.data.imagesHome.edges)
    const images = this.props.data.imagesHome.edges.map(image =>
      image.node.childImageSharp.fluid
    )
    console.log('images', images)
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
       <div className='image-container'>
         <Img
           fluid={this.state.randomImage}
           imgStyle={{objectFit: 'contain'}}
           className='home-images'
         />
       </div>
     </Layout>
   )
 }
}

export const query = graphql`
  query {
      imagesHome: allFile(filter: { sourceInstanceName: { eq: "homepage" } }) {
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
