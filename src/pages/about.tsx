import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

/*const informacion = (<any>data).data;*/
const data = require('../data.json').data[0];
console.log(data);
const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Nosotros</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Nosotros</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>{data.about}</p>
              <h2>Misión</h2>
              <p>{data.mision}</p>
              <h2>Visión</h2>
              <p>{data.vision}</p>
              <table>
                <tr>
                  <th>Áreas de Atención</th>
                </tr>
                <tr>
                  <td>
                    {data.areas
                      ? data.areas.map((area: any) => {
                          return <p>{area}</p>;
                        })
                      : data.areas}
                  </td>
                </tr>
              </table>
              <h2>Productos y servicios</h2>
              <p>
                Tecnoplades se especializa en el desarrollo y transferencia de tecnología, con más
                de 15 años de experiencia:
              </p>
              <ul>
                <li>Formulación de planes y programas institucionales.</li>
                <li>
                  Formulación de estudios técnicos para proyectos de inversión, investigación,
                  reglamentos y normas oficiales.
                </li>
                <li>Elaboración de planes estratégicos y de negocios</li>
                <li>Búsqueda, colocación y gestión de fondos de financiamiento.</li>
                <li>
                  Elaboración de estudios y evaluaciones de impacto ambiental en todas sus
                  modalidades así como la implementación de las medidas de mitigación y monitoreo
                  que determinen los resolutivos de impacto ambiental o estudios de riesgo.
                </li>
                <li>
                  Formular, evaluar, ejecutar y dar seguimiento a los planes y programas para el
                  manejo de recursos pesqueros y acuícolas de conservación de recursos naturales y
                  desarrollo costero sustentable.
                </li>
                <li>Desarrollos ecoturísticos y costeros.</li>
                <li>Administración y manejo de recursos naturales.</li>
                <li>Diseño y operación de:</li>
                <ol type="A">
                  <li>Plantas procesadoras.</li>
                  <li>Sistemas de tratamientos de aguas de descargas.</li>
                  <li>Equipos para el control sanitario.</li>
                </ol>
                <li>Diseño, construcción y mantenimiento de:</li>
                <ol type="A">
                  <li>Bienes inmuebles y equipos para la actividad acuícola y pesquera.</li>
                  <li>Equipos para el aprovechamiento sustentable de los recursos naturales.</li>
                  <li>Diseñar, proyectar y programar: Planes de manejo.</li>
                  <li>Unidades acuícolas</li>
                  <li>Planes para el desarrollo de la maricultura</li>
                  <li>
                    Innovación y desarrollo conceptual de eventos y programas para el fomento al
                    consumo de pescados y mariscos.
                  </li>
                  <li>
                    Atención a terceros países en Planes para el Desarrollo Ecosistémico de la
                    acuacultura y la Pesca
                  </li>
                  <li>
                    Programas estratégicos de comercialización, distribución y valor agregado de
                    pescados y mariscos.
                  </li>
                </ol>
                <li>
                  Diseño y operación para el control durante los procesos de traslado, manejo,
                  importación o exportación de organismos acuáticos, así como de implementos para la
                  acuacultura y pesca en general.
                </li>
              </ul>
              <h2>CONVENIOS DE COOPERACIÓN</h2>
              <ol>
                <li>TERRANOBLE S.A. DE C.V. MONTERREY, N.L.</li>
                <p>
                  Grupo de profesionales capacitados en asesoría, desarrollo y construcción en
                  Arquitectura bioclimática, así como la venta de productos y proyectos en el área
                  de energías alternativas. México es un país donde las condiciones geográficas
                  favorecen el desarrollo de dichas energías. TERRANOBLE ofrece proyectos y
                  productos en donde se puedan aprovechar dichas ventajas basándose en el uso de
                  energías renovables, ya que estos sistemas están diseñados para disminuir la
                  emisión de contaminantes y contribuir a mejorar el medio ambiente reduciendo la
                  dependencia de combustibles fósiles.
                </p>
                <ul>
                  <li>Arquitectura Bioclimática.</li>
                  <li>Uso y Aprovechamiento de Energías Renovables.</li>
                  <li>Planes y Programas Institucionales para el uso de Energías Renovables.</li>
                </ul>
                <li value="2">
                  INSTITUTO DE INVESTIGACIÓN Y TECNOLOGÍA AGROALIMENTARIA, BARCELONA, ESPAÑA. IRTA
                </li>
                <p>
                  El IRTA es un instituto de investigación de la Generalitat de Catalunya, adscrito
                  al Departamento de Agricultura, Ganadería, Pesca, Alimentación y Medio Natural.
                  Ajusta su actividad al ordenamiento jurídico privado. Contribuye a la
                  modernización, competitividad y desarrollo sostenible de los sectores agrario,
                  alimentario y acuícola, al suministro de alimentos sanos y de calidad para los
                  consumidores en general, y mejora el bienestar de la población.
                </p>
                <ul>
                  <li>Tecnología en cultivo de larvas de peces marinos.</li>
                  <li>Cultivo comercial de peces marinos.</li>
                  <li>Transferencia de tecnología.</li>
                  <li>Planes de Desarrollo.</li>
                </ul>
                <li value="3">
                  UNIVERSIDAD DE GUADALAJARA (UDEG) A TRAVÉS DEL CENTRO INTERNACIONAL DE EXCELENCIA
                  EMPRESARIAL (CIEE)
                </li>
                <p>
                  La Universidad de Guadalajara es una vigorosa comunidad heredera de una tradición
                  educativa forjada a lo largo de más de doscientos años de historia. Su comunidad
                  académica se distingue por ser una de las más importantes de México. Es una
                  institución fundamental para la formación de los recursos humanos de alto nivel y
                  la producción de conocimientos científicos y tecnológicos, sobre los que se
                  sustenta el desarrollo de Jalisco. El Centro Internacional de Excelencia
                  Empresarial (CIEE) es un grupo multidisciplinario de investigadores y consultores
                  de la Red Universidad de Guadalajara que tienen como objetivo atender las
                  necesidades de empresarios y emprendedores, a quienes ofrecen servicios de
                  consultoría, investigación, capacitación e incubación de empresas para que
                  consigan altos estándares de calidad obteniendo un impacto económico positivo en
                  el país de manera socialmente responsable.
                </p>
                <li>UNIVERSIDAD DE COLIMA</li>
                <p>
                  Institución pública de educación superior en el estado La universidad tiene
                  instalaciones en distintos municipios en el estado siendo estas: el Campus de
                  Colima, Villa de Álvarez, Coquimatlán, Tecomán y San Pedrito, Valle de las Garzas
                  y El Naranjo en el municipio de Manzanillo. La Universidad de Colima es una
                  institución pública de vanguardia que forma profesionales y científicos con
                  sentido creativo, innovador, humanista altamente 5competitivos, comprometidos en
                  el desarrollo armónico de la sociedad, en su entorno nacional e internacional.
                  Desde hace algunos años, la Universidad de Colima, está considerada como una de
                  las cinco mejores universidades públicas de México.
                </p>
                <li>
                  CICESE (CENTRO DE INVESTIGACIÓN CIENTÍFICA Y DE EDUCACIÓN SUPERIOR DE ENSENADA,
                  BAJA CALIFORNIA OPD).
                </li>
                <p>
                  El Centro de Investigación Científica y de Educación Superior de Ensenada, Baja
                  California, fue creado en 1973 por el gobierno federal como parte de la iniciativa
                  para descentralizar las actividades científicas y modernizar el país. El CICESE
                  pertenece al sistema de centros públicos de investigación del Consejo Nacional de
                  Ciencia y Tecnología (CONACYT), a lo largo de más de tres décadas, ha evolucionado
                  hasta convertirse en uno de los principales centros científicos de México. El
                  CICESE es una institución de referencia en el contexto científico nacional e
                  internacional, su excelencia académica apoya el desarrollo nacional, la formación
                  de recursos humanos y contribuye a generar el conocimiento que puede coadyuvar en
                  la solución de problemas que afectan el entorno social y económico de México.
                </p>
                <li>YAHUTANAKA S.C.</li>
                <p>
                  Equipo de trabajo coordinado por el Maestro en Ciencias Irving Rosas Ruiz.
                  Especializados en servicios de normatividad ambiental, impacto ambiental,
                  conservación de recursos naturales, sistemas de información geográfica,
                  seguimiento y gestión a proyectos autorizados, ordenamiento ecológico territorial
                  y manejo de residuos. Cuenta con amplia experiencia en el campo y forma parte de
                  la alianza estratégica y convenios de cooperación con Tecnoplades.
                </p>
              </ol>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
