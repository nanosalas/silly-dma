import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout activeMenu="contact">
    <SEO title="Contact" />

    <div className="banner_w3lspvt-2">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="font-weight-bold">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          Conversemos
        </li>
      </ol>
    </div>

    <div className="contact py-5" id="contact">
      <div className="container pb-xl-5 pb-lg-3">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
              alt="image"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5">
            <div className="contact-top1">
              <form action="#" method="post" className="contact-wthree-do">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Nombre</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Alejandro"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-4">
                      <label>Apellido</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Herrera"
                        name="name"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Teléfono</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="902-2377065"
                        name="mobile"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-4">
                      <label>Email</label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="ale_herrera@gmail.com"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-12">
                      <label>Mensaje</label>
                      <textarea
                        placeholder="Servicios a necesitar, comentarios, preguntas"
                        name="message"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-cont-w3 btn-block mt-4"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
