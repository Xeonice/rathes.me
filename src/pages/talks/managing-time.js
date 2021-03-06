import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { Box } from "../../components/Box"
import { Heading1, Paragraph, TextBody } from "../../components/Typography"

const ManagingTime = () => (
  <Layout>
    <SEO title="You can't manage time - A talk about what people call time management"></SEO>
    <Box maxWidth="640px">
      <Heading1>
        You can't manage time
        <Box element={TextBody} lineHeight={1.8} color="silver" display="block">
          A talk about what people call time management
        </Box>
      </Heading1>
      <Paragraph>
        How many different things did you already try out to be more productive
        and get more things done? How many tools do you own to accomplish more?
        And did it help?
      </Paragraph>
      <Paragraph>
        This talk focusses on what time management is about, why you can't
        manage time. You will learn about the emotional aspect of time
        management and the essential habits that will help you to get more
        things done.
      </Paragraph>
      <Paragraph>
        After this talk, you will have an idea of what you can work on if you
        want to get more things done. And you will understand what time
        management means.
      </Paragraph>
    </Box>
  </Layout>
)

export default ManagingTime
