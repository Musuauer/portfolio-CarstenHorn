import React from 'react'
import { useScrollSection } from 'react-scroll-section'
import styled from '@emotion/styled'

const StyledLink = styled.a`
  display: inline-block;
  color: black;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:hover {
    /* color: black; */
    text-decoration: underline;
  }
`

export const Root = styled.div`
  /* line-height: 1; */
  font-weight: 100 !important;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 300 !important;

  }
  h2 {
    font-size: 1.5rem;
    margin: 3em 0 2rem 0;
    font-weight: 100 !important;


  }


  @media (max-width: 600px) {
    /* line-height: 1.5em; */
    /* font-size: small; */
  }
`

export const MarkdownParagraph = styled.p`
  /* padding-bottom: 0.5rem; */
`

export const MarkdownList = styled.ul`
  margin: 0;
`

export const MarkdownListItem = styled.li`
  margin-bottom: 1em;
`

export const MarkdownLink = ( { node, children } ) => {
    // const isInnerLink = href.startsWith( '#' )
    // if ( isInnerLink ) {
    //     return (
    //         <InnerLink href={ href.substring( 1, href.length ) }>{children}</InnerLink>
    //     )
    // }

    return (
        <StyledLink href={ node.data.uri } target='_blank' rel='noreferrer'>
            {children}
        </StyledLink>
    )
}

export const InnerLink = ( { href, children } ) => {
    const { onClick } = useScrollSection( href )

    return <StyledLink onClick={ onClick }>{children}</StyledLink>
}
