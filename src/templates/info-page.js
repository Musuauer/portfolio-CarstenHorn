import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const InfoTemplate = ({
  content
}) => {
  return (
    <div className='info' dangerouslySetInnerHTML={{__html: content}} />
  )
}

const Info = ({ data, props }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <InfoTemplate
        content={post.html}
      />
    </Layout>
  )
}

export default Info

export const infoPageQuery = graphql`
  query ($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter{
        title
      }
    }
  }
`
