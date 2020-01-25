import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout activeMenu="contact">
    <SEO title="Gracias" />

    <div className="banner_w3lspvt-2">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="font-weight-bold">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          Gracias
        </li>
      </ol>
    </div>

    <div>
      <p>Gracias</p>
    </div>
  </Layout>
)

export default ContactPage
