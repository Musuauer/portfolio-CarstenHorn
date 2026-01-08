import React from 'react'

const linkStyles = {
  display: 'inline-block',
  color: 'black',
  cursor: 'pointer',
  position: 'relative',
  textDecoration: 'none'
}

const rootStyles = {
  fontWeight: '100 !important'
}

const rootStyleSheet = `
  .markdown-root h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 300 !important;
  }
  .markdown-root h2 {
    font-size: 1.5rem;
    margin: 3em 0 2rem 0;
    font-weight: 100 !important;
  }
  @media (max-width: 600px) {
    .markdown-root {
    }
  }
`

export const Root = ({ children }) => (
  <div className='markdown-root' style={rootStyles}>
    <style>{rootStyleSheet}</style>
    {children}
  </div>
)

export const MarkdownParagraph = ({ children }) => (
  <p style={{ marginBottom: '0.5rem' }}>
    {children}
  </p>
)

export const MarkdownList = ({ children }) => (
  <ul style={{ margin: 0 }}>
    {children}
  </ul>
)

export const MarkdownListItem = ({ children }) => (
  <li style={{ marginBottom: '1em' }}>
    {children}
  </li>
)

export const MarkdownLink = ( { node, children } ) => {
    return (
        <a href={ node.data.uri } target='_blank' rel='noreferrer' style={linkStyles}>
            {children}
        </a>
    )
}
