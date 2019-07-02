import { extractBlogPosts } from "./index"

describe("utils", () => {
  it("extracts the internal blog posts from graphql data", () => {
    const data = {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: "f1f1fa34-bd43-5550-9e9c-15232bc5431e",
              frontmatter: {
                title: "Stop thinking in features.",
                date: "18 February, 2019",
              },
              fields: {
                slug: "/blog/en/customer-experience-instead-of-features/",
              },
            },
          },
          {
            node: {
              id: "bf89bd35-1623-5e02-b351-a4f153dbfe4c",
              frontmatter: {
                title: "From Ghent with love",
                date: "02 June, 2018",
              },
              fields: {
                slug: "/blog/en/from-ghent-with-love/",
              },
            },
          },
          {
            node: {
              id: "a1cddaab-07ba-52a5-a04d-971ffeb64f88",
              frontmatter: {
                title: "Managing time",
                date: "08 April, 2019",
              },
              fields: {
                slug: "/blog/en/managing-time/",
              },
            },
          },
        ],
      },
    }

    expect(extractBlogPosts(data)).toEqual([
      {
        title: "Stop thinking in features.",
        date: "18 February, 2019",
        link: "/blog/en/customer-experience-instead-of-features/",
      },
      {
        title: "From Ghent with love",
        date: "02 June, 2018",
        link: "/blog/en/from-ghent-with-love/",
      },
      {
        title: "Managing time",
        date: "08 April, 2019",
        link: "/blog/en/managing-time/",
      },
    ])
  })
})
