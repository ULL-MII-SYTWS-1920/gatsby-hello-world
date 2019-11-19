import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div style={{height: "200px", backgroundColor: "purple", width: "400px"}}>Bum</div>
    <a href="https://ull-mii-sytws-1920.github.io/gatsby-hello-world/">GitHub pages</a>
  </div>
)
