import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectIndex = styled.div`
  display: inline;
  margin-right: 1rem;
`

class Project extends Component {
  render () {
    const { chapter, projectIndex } = this.props
    return (
      <div
        className='list-item'
      >

        <Link
          className='link'
          to={chapter.path}
        >
          <ProjectIndex>
            {projectIndex + 1}
          </ProjectIndex>

          {chapter.title}
        </Link>

      </div>
    )
  }
}

const Archiv = (props) => (
  <StaticQuery
    query={
      graphql`
      query woandersQuery{
        allContentfulBook(sort: {
          fields: [order], order: ASC
      }){
          edges{
            node{
              id
              title
              order
              path
            }
          }
        }
        }
  `
    }
    render={data => (
      <Layout>
        <div className='project-list'>
          {data.allContentfulBook.edges
            .map(({ node: chapter }, i) => (
              <Project
                key={chapter.id}
                chapter={chapter}
                projectIndex={i}
              />
            ))}

          <p className={'project-text'}>
        Das Buch- und Ausstellungsprojekt  ‚Woanders’ versammelt Bilder aus 20 Jahren, die ums Wagenleben kreisen. Es ist das Porträt eines Wagenplatzes, seiner Räumung 2014 und einiger Bewohner*innen. Die Bilder zeigen weniger spektakuläre Situationen im öffentlichen Raum als vielmehr Privates und Alltägliches. Blicke, Lücken und Leerstellen sind dabei genauso im Fokus, wie das Bleiben von Dingen und Beziehungen. Es wird ein Bogen geschlagen bis heute, zu den Freundschaften, zu anderen Orten, wo Gemeinschaft gelebt wird.
          </p>

        </div>
      </Layout>
    )}
  />
)

export default Archiv
