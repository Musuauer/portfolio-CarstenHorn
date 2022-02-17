import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Root, MarkdownParagraph, MarkdownLink, MarkdownList, MarkdownListItem } from './MarkdownStyles'

const Bold = ( { children } ) => <span className='bold'>{children}</span>

const options = {
    renderMark: {
        [ MARKS.BOLD ]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [ BLOCKS.DOCUMENT ]: ( node, children ) => <Root>{children}</Root>,
        [ BLOCKS.PARAGRAPH ]: ( node, children ) => <MarkdownParagraph>{children}</MarkdownParagraph>,
        [ BLOCKS.UL_LIST ]: ( node, children ) => <MarkdownList>{children}</MarkdownList>,
        [ BLOCKS.LIST_ITEM ]: ( node, children ) => <MarkdownListItem>{children}</MarkdownListItem>,
        [ INLINES.HYPERLINK ]: ( node, children ) => <MarkdownLink node={ node }>{children}</MarkdownLink>,

    },
}

export const MarkdownProcessor = ( { markdownElement } ) => {
    return renderRichText( markdownElement, options )
}
