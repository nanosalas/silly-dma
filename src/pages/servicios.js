import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselScreens = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div className="item">
        <div className="project">
          <div className="img">
            <img
              src="/ueofcweb/images/project-home.jpg"
              className="img-fluid"
              alt="ultronele screenshot"
            />
            <div className="text px-4">
              <h3>
                <a href="#">Hompage</a>
              </h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img
              src="/ueofcweb/images/project-course.jpg"
              className="img-fluid"
              alt="ultronele screenshot"
            />
            <div className="text px-4">
              <h3>
                <a href="#">Course Detail</a>
              </h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img
              src="/ueofcweb/images/project-mobile.jpg"
              className="img-fluid"
              alt="ultronele screenshot"
            />
            <div className="text px-4">
              <h3>
                <a href="#">Homepage</a>
              </h3>
              <span>Mobile version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img
              src="/ueofcweb/images/project-service.jpg"
              className="img-fluid"
              alt="ultronele screenshot"
            />
            <div className="text px-4">
              <h3>
                <a href="#">Service Type</a>
              </h3>
              <span>Mobile version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img
              src="/ueofcweb/images/project-path.jpg"
              className="img-fluid"
              alt="ultronele screenshot"
            />
            <div className="text px-4">
              <h3>
                <a href="#">Learning Path</a>
              </h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="project">
          <div className="img">
            <img
              src="/ueofcweb/images/project-certificate.jpg"
              className="img-fluid"
              alt="ultronele screenshot"
            />
            <div className="text px-4">
              <h3>
                <a href="#">Create Certificate</a>
              </h3>
              <span>PC version</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}

const ProductPage = () => (
  <Layout activeMenu="product">
    <SEO title="Product" />

    <div className="banner_w3lspvt-2">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="font-weight-bold">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          Servicios
        </li>
      </ol>
    </div>

    <section className="ftco-section ftco-project " id="projects-section">
      <div className="container px-md-5">{/* <CarouselScreens /> */}</div>
    </section>

    <section id="services" className="section-padding bg-li py-5">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
            Nuestros Servicios
          </h2>
          <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4">
            Encontrar el socio adecuado de Marketing Digital es un gran desafío.
            Nos centramos en nuestro trabajo ofreciendo servicios de
            diagnósticos, consultoría, generación de estrategias digitales y
            desarrollo de sitios web de manera personalizada. Le ayudamos a
            crear una presencia digital que atraiga a sus clientes y su público
            objetivo. Todo esto de acuerdo al alineamiento de sus metas y
            objetivos.
          </p>
        </div>
        <div className="row">
          {/** feature item 1. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">SEO</a>
                </h3>
                <p>
                  ¿Batallando para superar a sus competidores en los buscadores?
                  Nuestro enfoque de SEO asegura que no solo estés generando más
                  tráfico; estás generando el tráfico adecuado para su negocio
                </p>
              </div>
            </div>
          </div>
          {/** feature item 2. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <div className="icon">
                <i className="fas fa-ad"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Pay Per Click (PPC)</a>
                </h3>
                <p>
                  Gestión interna de sus campañas de Google Ads & Bing Ads.
                  Nuestros expertos cuentan con un enfoque en rentabilidad
                  ayudando a múltiples empresas a convertir el gasto
                  publicitario en una rentabilidad sostenida
                </p>
              </div>
            </div>
          </div>
          {/** feature item 3. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <div className="icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Social Media Marketing</a>
                </h3>
                <p>
                  Los anuncios de Facebook & Instagram representan el 18.4% del
                  gasto global en publicidad digital. Agregue YouTube, LinkedIn
                  y Twitter, y tendrá una enorme oportunidad de llegar a sus
                  clientes donde están pasando el rato en línea
                </p>
              </div>
            </div>
          </div>
          {/** feature item 4. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="1.2s"
            >
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Email Marketing</a>
                </h3>
                <p>
                  Gestionamos campañas personalizadas de marketing por correo
                  electrónico que generan confianza, cierran ventas y crean
                  marcas
                </p>
              </div>
            </div>
          </div>
          {/** feature item 5. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="1.5s"
            >
              <div className="icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Desarrollo Web</a>
                </h3>
                <p>
                  Hermosos sitios web que alcanzan sus objetivos comerciales.
                  Combinamos estrategia comercial, pensamiento creativo y
                  desarrollo inteligente para ofrecer sitios que eclipsan y
                  superan a la competencia
                </p>
              </div>
            </div>
          </div>
          {/** feature item 6. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="1.8s"
            >
              <div className="icon">
                <i className="fas fa-funnel-dollar"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Conversion Rate Optimization (CRO)</a>
                </h3>
                <p>
                  Tiene problemas para convertir el tráfico en clientes
                  potenciales, nuestros expertos evaluarán su embudo de ventas y
                  (UX)
                </p>
              </div>
            </div>
          </div>
          {/** feature item 7. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="1.8s"
            >
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Auditoría en Marketing</a>
                </h3>
                <p>
                  Permita que nuestro equipo analice los datos históricos de sus
                  campañas y tráfico. Brindandole ideas procesables para
                  implementar y aumentar el rendimiento
                </p>
              </div>
            </div>
          </div>
          {/** feature item 8. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="1.8s"
            >
              <div className="icon">
                <i className="fas fa-compass"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Branding</a>
                </h3>
                <p>
                  Ayudamos a marcas como la suya a desarrollar una estrategia
                  coherente para su identidad. Nos aseguramos de que las
                  fuentes, los colores, las imágenes y el tono estén todos
                  alineados para que la marca entone en todas partes
                </p>
              </div>
            </div>
          </div>
          {/** feature item 9. */}
          <div className="col-md-6 col-lg-4 col-xs-12">
            <div
              className="services-item wow fadeInRight"
              data-wow-delay="1.8s"
            >
              <div className="icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <div className="services-content">
                <h3 className="feature-title">
                  <a href="#">Consultoría en Marketing</a>
                </h3>
                <p>
                  Buscando un profesional experto en PPC con experiencia en
                  campañas de coaching para obtener rentabilidad, nuestros
                  servicios de consultoría pueden ser justo lo que está buscando
                </p>
              </div>
            </div>
          </div>
          {/** end of feature item */}
        </div>
      </div>
    </section>

    {/* <div className="about-inner py-5">
      <div className="container pb-xl-5 pb-lg-3">
        <div className="row py-xl-4">
          <div className="col-lg-4 welcome-right mb-lg-0 mb-5"></div>
          <div className="col-lg-4 ">
            <h3 className="mt-2 mb-3 text-center">FAQs</h3>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <ul className="accordion css-accordion mt-3">
          <li className="accordion-item">
            <input
              className="accordion-item-input"
              type="checkbox"
              name="accordion"
              id="item1"
            />
            <label htmlFor="item1" className="accordion-item-hd">
              Q: What purpose is this software used for?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">
                Q: What purpose is this software used for?
              </h6>
              <p>
                A: This software is designed for tutors, educational institutes,
                small enterprises which have little technical resources or
                limited budget, wish to own a easy-use training platform.
              </p>
            </div>
          </li>
          <li className="accordion-item">
            <input
              className="accordion-item-input"
              type="checkbox"
              name="accordion"
              id="item2"
            />
            <label htmlFor="item2" className="accordion-item-hd">
              Q: Can I use it for free?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">Q: Can I use it for free?</h6>
              <p>
                A: Absolutely, if you&#39;re teacher/students/NGO members,
                you&#39;d get full tech support totally with no fee.
                Ultronele&#39;s mission is to help as manay people as possible
                to access knowledge in the easiest way and the lowest cost.
              </p>
            </div>
          </li>
          <li className="accordion-item">
            <input
              className="accordion-item-input"
              type="checkbox"
              name="accordion"
              id="item3"
            />
            <label htmlFor="item3" className="accordion-item-hd">
              Q: What if I made some custom development and want to sell to my
              client?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">
                Q: What if I made some custom development and want to sell to my
                client?
              </h6>
              <p>
                A: It&#39;s OK, this product use MIT license, so you should
                include LICENSE file of this product.
              </p>
            </div>
          </li>
          <li className="accordion-item">
            <input
              className="accordion-item-input"
              type="checkbox"
              name="accordion"
              id="item4"
            />
            <label htmlFor="item4" className="accordion-item-hd">
              Q: Our company need commercial support, can you provide?
              <span className="accordion-item-hd-cta">&#9650;</span>
            </label>
            <div className="accordion-item-bd">
              <h6 className="accordion-textm">
                Q: Our company need commercial support, can you provide?
              </h6>
              <p>
                A: Sure, we recommend you purchase our Premium membership, and
                if you have more requirements we can talk in depth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div> */}
  </Layout>
)

export default ProductPage
