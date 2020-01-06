import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogListTitle = styled.h2`
  color: #ccc;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const InternalLink = styled(Link)`
  color: white;
  display: block;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`

const ExternalLink = styled.a`
  color: white;
  display: block;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`

const BlogList = ({ children, title, ...rest }) => (
  <div {...rest}>
    {title && <BlogListTitle>{title}</BlogListTitle>}
    {children}
  </div>
)

BlogList.Article = ({ title, link }) => {
  const isExternal = link.startsWith("http")

  if (isExternal) {
    return <ExternalLink href={link}>{title}</ExternalLink>
  }

  return <InternalLink to={link}>{title}</InternalLink>
}

export default BlogList
