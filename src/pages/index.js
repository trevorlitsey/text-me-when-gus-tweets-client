import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        Welcome{" "}
        <span role="img" aria-label="tomato">
          🍅
        </span>
      </h1>
      <p>
        If you'd like to get a text message every time Gus Murphy (<a href="https://twitter.com/tomatobreakfast">
          @tomatobreakfast
        </a>) tweets, you've come to the right place.
      </p>
      <p>
        To subscribe, text START to (205) 583-1994. Text STOP at any time to
        unsubscribe.
      </p>
      <p>
        Standard messaging rates apply. This subscription only includes tweets
        that are not replies.
      </p>
    </Layout>
  )
}

export default IndexPage
