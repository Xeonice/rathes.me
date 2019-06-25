import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout className="p-4">
      <div>
        <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
