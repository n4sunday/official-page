import React, { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import { Partners } from "../components/partners/Partners"
import { Missions } from "../components/missions/Missions"
import { Articles } from "../components/articles/Articles"
import { Contact } from "../components/contact/Contact"

import "./index.css"
import "aos/dist/aos.css"

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
      <Jumbotron />
      <Partners />
      <Missions />
      <Articles />
      <Contact />
    </Layout>
  )
}

export default IndexPage
