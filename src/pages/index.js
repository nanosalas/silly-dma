/**
 * Created
 *
 * @2019/07/24
 */

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout activeMenu="index">
    <SEO title="Home" />

    <div className="banner_w3lspvt position-relative">
      <div className="container">
        <div className="d-md-flex">
          <div className="w3ls_banner_txt">
            <h3 className="w3ls_pvt-title">
              Incremente <br />
              <span>Tráfico, Conversiones y Ventas</span>
            </h3>
            <p className="text-sty-banner">
              Le ayudamos a generar una nueva estrategia, construir campañas,
              brindando un seguimiento en tiempo real a sus KPIs consiguiendo el
              objetivos de sus metas
            </p>
            {/* <div className="row">
              <a
                href="https://ultronele.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn button-style mt-md-5 mt-4 read-more"
              >
                Demo Site
              </a>
              <a
                href="https://youtu.be/5ERLge93e6I"
                target="_blank"
                style={{ marginLeft: `40px` }}
                rel="noopener noreferrer"
                className="btn button-purple mt-md-5 mt-4 read-more"
              >
                Movie Clip
              </a>
            </div> */}
          </div>
          <div className="banner-img">
            <img src="images/banner-ovw2.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="icon-effects-w3l">
        <img
          src="images/shape1.png"
          alt=""
          className="img-fluid shape-wthree shape-w3-one"
        />
        <img
          src="images/shape2.png"
          alt=""
          className="img-fluid shape-wthree shape-w3-two"
        />
        <img
          src="images/shape3.png"
          alt=""
          className="img-fluid shape-wthree shape-w3-three"
        />
        <img
          src="images/shape5.png"
          alt=""
          className="img-fluid shape-wthree shape-w3-four"
        />
        <img
          src="images/shape4.png"
          alt=""
          className="img-fluid shape-wthree shape-w3-five"
        />
        <img
          src="images/shape6.png"
          alt=""
          className="img-fluid shape-wthree shape-w3-six"
        />
      </div>
    </div>

    <div className="what bg-li py-5" id="what">
      <div className="container py-xl-5 py-lg-3">
        <h3 className="tittle text-center font-weight-bold">Features</h3>
        <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">
          UltronEle's mission is to build the world's fastest e-learning system
          with the lowest cost and in the most simple way, blowing is the top 3
          features which constitute to its uniqueness and excellence
        </p>
        <div className="row about-bottom-w3l text-center mt-4">
          <div className="col-lg-4 about-grid">
            <div className="about-grid-main">
              <img
                src="images/gatsby_banner3.png"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h4 className="my-4">Fast</h4>
                <p>
                  By the virtue of GatsbyJS, UltronEle deliver web content with
                  an amazing speed.
                </p>
              </div>
              {/** <a href="about.html" class="button-w3ls btn mt-sm-5 mt-4">Read More</a> */}
            </div>
          </div>
          <div className="col-lg-4 about-grid my-lg-0 my-5">
            <div className="about-grid-main">
              <img
                src="images/generator_banr.png"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h4 className="my-4">Easy</h4>
                <p>
                  Using content generator of UltronEle, author create everything
                  with one command.
                </p>
              </div>
              {/** <a href="about.html" class="button-w3ls btn mt-sm-5 mt-4">Read More</a> */}
            </div>
          </div>
          <div className="col-lg-4 about-grid">
            <div className="about-grid-main">
              <img
                src="images/confetti_banr.png"
                alt=""
                className="img-fluid"
              />
              <div className="card-body">
                <h4 className="my-4">Funny</h4>
                <p>
                  Learning could be boring, but what if youd encounter surprise
                  and bonus in the process?{" "}
                </p>
              </div>
              {/** <a href="about.html" class="button-w3ls btn mt-sm-5 mt-4">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="midd-w3 py-4" id="faq">
      <div className="container py-xl-3 py-lg-3">
        <div className="row">
          <div className="col-lg-6 about-right-faq">
            <h6>Como podemos ayudarle</h6>
            <h3 className="text-da">
              ¿Quienes se pueden beneficiar de nuestros servicios?
            </h3>
            <p className="mt-4">
              Múltiples empresas pueden aprovechar los servicios de Digital
              Marketing Agency:
            </p>
            <ul className="w3l-right-book mt-4">
              <li>
                Grandes empresas en busqueda de incursionar en el mercadeo
                digital
              </li>
              <li>
                Grandes empresas que desean aumentar la cantidad de tráfico y
                ventas de su sitio web
              </li>
              <li>Pymes que requieren de una presencia digital</li>
              <li>Pymes buscando aprovechar un nuevo mercado global </li>
              {/* <li>
                Anyone who want to share knowledge in an acceptable and
                innovative way{" "}
              </li> */}
            </ul>
          </div>
          <div className="col-lg-6 left-wthree-img text-right">
            <img src="images/b1.png" alt="" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </section>

    <section className="banner-bottom-w3layouts bg-li py-5" id="services">
      <div className="container py-xl-5 py-lg-3">
        <h3 className="tittle text-center font-weight-bold">
          Nuestros Servicios
        </h3>
        <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">
          Digital Marketing Agency le ofrece una variedad de servicios flexibles
          para múltiples escenarios, sin importar los recursos técnologicos y el
          equipo que posea
        </p>
        <div className="row pt-lg-4">
          <div className="col-lg-4 about-in text-center">
            <div className="card">
              <div className="card-body">
                <div className="bg-clr-w3l">
                  <span className="fa fa-wrench"></span>
                </div>
                <h5 className="card-title mt-4 mb-3">
                  Consultoría y Capacitación
                </h5>
                <p className="card-text">
                  Diagnóstico inicial para conocer las áreas a trabajar y
                  desarrollar en conjunto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 about-in text-center my-lg-0 my-3">
            <div className="card active">
              <div className="card-body">
                <div className="bg-clr-w3l">
                  <span className="fa fa-cogs"></span>
                </div>
                <h5 className="card-title mt-4 mb-3">
                  Desarrollo de Sitios Web
                </h5>
                <p className="card-text">
                  Generarción de sitios web a la medida con lo úlitmo en
                  técnología.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 about-in text-center">
            <div className="card">
              <div className="card-body">
                <div className="bg-clr-w3l">
                  <span className="fa fa-user-plus"></span>
                </div>
                <h5 className="card-title mt-4 mb-3">Paid Per Click</h5>
                <p className="card-text">
                  Utilice los medios de Google, Facebook, Instagram y otros más
                  para alcanczar a nuevas audiencias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="pricing.html"
          className="btn button-style button-style-2 mt-sm-5 mt-4 read-more"
        >
          Read More
        </a>
      </div>
    </section>

    <section className="bottom-count py-5" id="stats">
      <div className="container py-xl-5 py-lg-3">
        <div className="row">
          <div className="col-lg-5 left-img-w3ls">
            <img src="images/b2.png" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7 right-img-w3ls pl-lg-4 mt-lg-2 mt-4">
            <div className="bott-w3ls mr-xl-5">
              <h3 className="title-w3 text-bl mb-3 font-weight-bold">
                Some of Product Real Facts
              </h3>
              <p className="title-sub-2 mb-3">
                We measure our products excellence in following aspects:
              </p>
              <p>
                Note: these data are collected in the phase of v1.0 release
                candidate, it&#39;ll increase with the evolvement of the
                product.{" "}
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-sm-4 count-w3ls">
                <h4>1000+</h4>
                <p>Hours Development</p>
              </div>
              <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                <h4>10+</h4>
                <p>Templates</p>
              </div>
              <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                <h4>10+</h4>
                <p>Built-in Courses</p>
              </div>
            </div>
            <div className="row mt-sm-5 mt-4">
              <div className="col-sm-4 count-w3ls">
                <h4>5+</h4>
                <p>Built-in Categories</p>
              </div>
              <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                <h4>4+</h4>
                <p>Generator for content</p>
              </div>
              <div className="col-sm-4 count-w3ls mt-sm-0 mt-3">
                <h4>~30s</h4>
                <p>Build time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="partners py-5" id="partners">
      <div className="container py-xl-5 py-lg-3">
        <h3 className="tittle text-center font-weight-bold">
          Product Infrastructures
        </h3>
        <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">
          we utilize the power of mature and emerging internet hosting and build
          platform to fast deliver our product, service, content.
        </p>
        <div className="row grid-part text-center pt-4">
          <div className="col-md-2 col-4">
            <div className="parts-w3ls">
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <h4>Github</h4>
            </div>
          </div>
          <div className="col-md-2 col-4">
            <div className="parts-w3ls">
              <a href="#">
                <i className="fab fa-react"></i>
              </a>
              <h4>ReactJS</h4>
            </div>
          </div>
          <div className="col-md-2 col-4">
            <div className="parts-w3ls">
              <a href="#">
                <i className="fab fa-node-js"></i>
              </a>
              <h4>NodeJS</h4>
            </div>
          </div>
          <div className="col-md-2 col-4 mt-md-0 mt-4">
            <div className="parts-w3ls">
              <a href="#">
                <i className="fab fa-markdown"></i>
              </a>
              <h4>Markdown</h4>
            </div>
          </div>
          <div className="col-md-2 col-4 mt-md-0 mt-4">
            <div className="parts-w3ls">
              <a href="#">
                <span className="fa fa-skyatlas"></span>
              </a>
              <h4>GatsbyJS</h4>
            </div>
          </div>
          <div className="col-md-2 col-4 mt-md-0 mt-4">
            <div className="parts-w3ls">
              <a href="#">
                <span className="fa fa-ravelry"></span>
              </a>
              <h4>Netlify</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
