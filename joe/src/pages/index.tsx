import React, { useEffect, useState } from "react"
import "./index.css"

import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"

const IndexPage = () => {
  let AOS
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 200) {
          setSticky(true)
        } else {
          setSticky(false)
        }
      })
      const AOS = require("aos")
      AOS.init({
        duration: 500,
      })
    }
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  return (
    <Layout sticky={sticky}>
      <SEO title="Home" />
      We’re built to disrupt the digital era
    </Layout>
  )
}

export default IndexPage
