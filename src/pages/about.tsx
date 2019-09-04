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
              <h2>EXPERIENCIA</h2>
              <h3>2001</h3>
              <p>
                Elaboración del estudio técnico del Proyecto de Norma Oficial Mexicana para el
                manejo de embalses hasta 1000 hectáreas, en el estado de Jalisco, a través del
                Instituto de Acuacultura y Pesca del Estado de Jalisco (IAPEJ).
              </p>
              <h3>2003</h3>
              <p>
                Elaboración del Proyecto de “Cultivo de Tilapia en Jaulas” para la presa “El
                Comedero” en el estado de Sinaloa. Aprobado por la Comisión Nacional de Pesca.
              </p>
              <p>
                Elaboración del Proyecto de “Cultivo de Tilapia en Jaulas” para la presa “El
                Varejonal” en el estado
              </p>
              <h3>2004</h3>
              <p>
                Elaboración del Proyecto “Fortalecimiento en la comercialización de crías de bagre”
                para la empresa “Acuacultivos Santo Tomás” en el estado de Tamaulipas. Aprobado por
                la Comisión Nacional de Pesca
              </p>
              <p>
                Trabajos del 2003 al 2004 en el estado de Hidalgo:
                <ul>
                  <li>
                    Realización del Plan de Manejo de la presa “El Comalillo” en el estado de
                    Hidalgo.
                  </li>
                  <li>
                    Elaboración del Plan de Manejo para la “Laguna Zupitlán” en el estado de
                    Hidalgo.
                  </li>
                  <li>Reglamento Interno para el Comité Acuícola Hidalguense de Sanidad.</li>
                  <li>Marco de Referencia para el Comité Acuícola Hidalguense de Sanidad.</li>
                </ul>
                Organización de cursos de capacitación en materia de sanidad acuícola. (Curso-
                Taller de sanidad para productores de bagre en Jalisco y Michoacán)
              </p>
              <p>
                Elaboración del proyecto productivo Cultivo de tilapia en jaulas flotantes para la
                presa “El Salto Chico” en el estado de Sinaloa
              </p>
              <p>
                Proyecto productivo “Planta procesadora de filete de bagre”, ubicada en el municipio
                de Abasolo, Tamaulipas.
              </p>
              <h3>2005</h3>
              <p>
                Diseño y Construcción de jaulas flotantes de alto rendimiento para la puesta en
                marcha del proyecto “Cultivo de Tilapia en Jaulas” para la presa “El Comedero” en el
                estado de Sinaloa
              </p>
              <p>
                Plan de Manejo para el embalse “Trigomil” en el municipio de Unión de Tula, Jalisco
              </p>
              <p>
                Proyecto unidad de capacitación y de producción agro-acuacultural, para Villa de los
                Niños en Acatlán de Juárez, Jalisco
              </p>
              <h3>2006</h3>
              <p>
                Elaboración de proyecto: Cultivo de tilapia en jaulas flotantes en la presa “Cajón
                de Peña”, Tomatlán, Jalisco.
              </p>
              <p>
                Producción de cría larval y cultivo de Juveniles Sphoeroides annulatus (Botete
                dianna) en jaulas flotantes, en el estado de Jalisco. Aprobado para la elaboración
                de proyecto por la CONAPESCA para el 2004. El promoverte fue la cooperativa “Del
                Rosita” de Puerto Vallarta, Jalisco
              </p>
              <p>
                Elaboración del proyecto de cultivo de camarón blanco, ubicado en Tomatlán, Jalisco
              </p>
              <p>
                Realización de un paquete de cursos de capacitación para el sector productivo y
                dependencias de gobierno del estado de Jalisco (Secretaría de Desarrollo Rural y,
                Subdelegación de Pesca) en temas de: Cultivo de camarón blanco en agua dulce,
                cultivo de ostión, manejo integral de embalses, y el uso de la recirculación en la
                acuacultura
              </p>
              <h3>2007</h3>
              <p>
                Elaboración de un Plan de Manejo para la presa “Cajón de Peña”, ubicada en el
                municipio de Tomatlán, Jalisco.
              </p>
              <p>
                Estudios de factibilidad técnico- económica para el cultivo de camarón en Arabia
                Saudita, y Egipto., Así como la propuesta de un paquete tecnológico para el
                desarrollo de un laboratorio de post-larvas de camarón y construcción y equipamiento
                de granja de camarón
              </p>
              <p>
                Elaboración de proyecto productivo: Cultivo de tilapia en estanques de geomembrana
                en el municipio de la Barca, Jalisco.
              </p>
              <p>
                Diseño de un centro de acopio y comercialización de productos acuícolas en el estado
                de Jalisco.
              </p>
              <p>
                Proyecto de Recirculación, Sistematización y Automatización en la producción de
                crías de tilapia en el Centro Acuícola de Clavellinas, ubicado en el Mpio. De
                Tuxpan, Jalisco.
              </p>
              <h3>2008</h3>
              <p>Diseño de una Unidad de Manejo Acuícola de pez blanco en el Lago de Chapala</p>
              <p>
                Proyecto para la producción de crías y engorda de tilapia en la Laguna de San Juan,
                en Tomatlán, Jalisco.
              </p>
              <p>
                Proyecto para el mejoramiento del hábitat marino y compensación social de daños
                ambientales para la región costera del estado de Tabasco (PEMEX-Fundación Tabasco
                A.C.)
              </p>
              <h3>2009</h3>
              <p>
                Proyecto para la colocación de una zona de arrecifes artificiales en la Bahía de
                Chipehua, Oaxaca y Diseño del proyecto técnico, económico y financiero para la
                construcción del Centro Reproductor de Especies Marinas del Estado de Oaxaca
                (CREMEO), a través del Instituto de Acuacultura y Pesca del Estado de Jalisco.
                Convenio de Cooperación entre Gobierno del Estado de Oaxaca y el Gobierno del Estado
                de Jalisco.
              </p>
              <p>
                Elaboración del Plan para el Desarrollo de la Maricultura en el Estado de Sonora en
                coordinación con la Subsecretaría de Pesca del Estado de Sonora, atendiendo el
                desarrollo tecnológico y las políticas públicas
              </p>
              <p>
                Desarrollo de la misión de cooperación Tecnológica e Institucional, a Brasil, para
                establecer convenios de colaboración en materia de aprovechamiento y control del
                plecostomus. Integrando, al ministerio de Acuacultura y Pesca de Brasil, al Gobierno
                de Chiapas y la Delegación de la SAGARPA de Chiapas.
              </p>
              <p>
                Consultoría, revisión y corrección de estilo del Plan Estatal de Desarrollo Jalisco
                2030 Documento de 500 páginas.
              </p>
              <p>
                Elaboración del Proyecto de Desarrollo de la Tecnología para la Producción de Peces
                Eurihalinos (pargo y robalo) en el Centro Estatal de Acuacultura Chiapas. Trabajo
                realizado para la Secretaria de Pesca y Acuacultura del estado a través de la
                Fundación Produce Chiapas A.C. Se logró el desarrollo de los protocolos operativos
                (microalgas, rotíferos y manejo de reproductores) en una primera etapa.
                Adicionalmente se establecieron los criterios para la toma de decisiones para la
                implementación de un centro de línea de producción de crías de pargo y robalo
                necesario para detonar el cultivo comercial de estas especies en los sistemas
                acuáticos del litoral chiapaneco.
              </p>
              <h3>2011</h3>
              <p>
                Elaboración del Plan Estratégico y de Negocios Unidad de Transferencia Tecnológica
                CICESE- NAYARIT. Trabajo realizado para en Centro de Investigación Científica y de
                Educación Superior de Ensenada, Baja California. (CICESE). Para la realización de
                este Plan, se conto con la colaboración de la Universidad de Guadalajara, la empresa
                EVOLUTEL y la agencia consultora AIDTEC.
              </p>
              <h3>2012</h3>
              <p>
                Elaboración del Estudio de Manifestación de Impacto Ambiental, modalidad Regional
                para la costa de Colima. (Obtención del resolutivo favorable N. Oficio: SGPARN.-
                1122/12 para la aprobación de un área de 117,851.38 hectáreas para el desarrollo de
                la maricultura en el litoral colimense). Promovente Gobierno del estado de Colima.
              </p>
              <p>
                Participación en la propuesta para la creación de la Agencia Mexicana de Mares y
                Costas (ponente en la consulta realizada en el Senado de la República).
              </p>
              <p>
                Elaboración del proyecto: Mejoramiento de ambientes marinos en el Paraíso (arrecifes
                artificiales). Municipio de Armería, Colima. Proyecto realizado para la Sociedad
                Cooperativa de Producción Pesquera El Paraíso de Armería, Colima, S.C. de R.L., y
                gestionado ante la Comisión Nacional de Acuacultura y Pesca (CONAPESCA) aprobado
                para su financiamiento (actualmente se encuentra en operación).
              </p>
              <p>
                Realización del proyecto diagnóstico socio-ambiental para la identificación de
                actividades alternativas sustentables de los vasos III y IV de la laguna de
                Cuyutlán, Colima (Sección sobre pesquerías y sistemas acuícolas) en colaboración de
                la Universidad de Colima y la Comisión Federal de Electricidad.
              </p>
              <h3>2013</h3>
              <p>
                Participación en la propuesta para la modificación a la Ley General de Pesca y
                Acuacultura Sustentables para incluir la maricultura como una actividad que deberá
                ser fomentada para fortalecer la soberanía alimentaria, generación de empleos y
                arraigo de la población ( Reuniones de trabajo con la senadora Diva Hadamira
                Gastélum Bajo y su equipo de trabajo).
              </p>
              <p>
                Trabajo técnico para la propuesta a la modificación de criterios del Programa
                Regional de Ordenamiento Ecológico Territorial de la Subcuenca laguna de Cuyutlán.
                Instrumento de Política Pública que permite la introducción de proyectos productivos
                con beneficio al sector productivo (pescadores, salineros). Trabajo realizado para
                el Instituto para el Medio Ambiente y Desarrollo Sustentable de Colima
              </p>
              <p>
                Propuesta técnica para la gestión de recursos financieros a favor del Plan para el
                Desarrollo de la Maricultura en el Estado de Colima ante la Agencia Francesa de
                Desarrollo en la ciudad de México. El resultado de la propuesta concluyó en que la
                Agencia, apoya la viabilidad del proyecto y se establece que el titular realice una
                visita para continuar la gestión a través del Gobierno del Estado de Colima.
              </p>
              <p>
                Propuesta técnica para la gestión de recursos financieros a favor del Plan para el
                Desarrollo de la Maricultura en el Estado de Colima ante la Secretaría de Hacienda y
                Crédito Público (SHCP). Esta propuesta fue formulada en coordinación con la
                Universidad de Colima y la participación de la Comisión Federal de Electricidad. Se
                establecieron los mecanismos para la implementación de un proyecto piloto que genere
                los indicadores económicos, técnicos y financieros para la formulación del proyecto
                ejecutivo dentro de los formatos que requisita la SHCP.
              </p>
              <p>
                Elaboración del Plan para el Desarrollo de la Maricultura en el estado de Colima
                (PLADEMEC). Trabajo realizado para el Gobierno de Colima a través de la Fundación
                Produce Colima A.C. Cabe señalar que es la única entidad federativa que cuenta con
                los elementos (Manifestación de Impacto Ambiental y Plan de Desarrollo) para
                realizar maricultura en su litoral. Este Plan se cataloga como un instrumento de
                Política Pública para el estado, el cual se encuentra actualmente en proceso de
                implementación.
              </p>
              <h3>2014</h3>
              <p>
                Presentación del concepto de Plan para el Desarrollo de la Maricultura ante la
                comisión de pesca de la cámara de diputados.
              </p>
              <p>
                Formulación del modelo para el Desarrollo de un Plan de Negocios para la
                transferencia tecnológica de un sistema hiperintensivo para la producción de camarón
                blanco (indicadores económicos 170 Ton/Ha a cero recambio y balance iónico).
              </p>
              <p>
                Diseño conceptual y puesta en marcha del evento Primera Expo Tequila, Mar y Vino,
                para fomentar el consumo de Pescados y Mariscos en la Región Occidente con el
                patrocinio de CONAPESCA, SEDER y Municipio de Zapopan.
              </p>
              <h3>2015</h3>
              <p>
                Realización del proyecto: “Estudio de Ordenamiento Acuícola, Territorial y de
                Factibilidad Técnica, Económica, Social e Impacto Ambiental para el desarrollo de la
                acuacultura en jaulas flotantes en las presas Miguel Alemán y Miguel de la Madrid en
                Oaxaca.
              </p>
              <p>
                Elaboración y puesta en marcha del estudio “Fomento al Consumo de pescados y
                mariscos, en niños en edad escolar, inscritas al programa PROSPERA en Zapopan,
                Jalisco.
              </p>
              <h3>2016</h3>
              <p>
                Estudio de investigación en conjunto con la Secretaria de Salud Jalisco, realización
                del protocolo “Cambios en niveles de colesterol, triglicéridos y el rango AA/EPA en
                escolares del programa PROSPERA en la Colonia Constitución en Zapopan Jalisco.
              </p>
              <h3>2017</h3>
              <p>
                Resolución favorable por medio de la Secretaria del Medio Ambiente y Recursos
                Naturales referente el “Estudio de Ordenamiento Acuícola, Territorial y de
                Factibilidad Técnica, Económica, Social e Impacto Ambiental para el desarrollo de la
                acuacultura en jaulas flotantes en las presas Miguel Alemán y Miguel de la Madrid en
                Oaxaca”. Donde se autoriza el uso de los parques acuícolas para el cultivo de
                tilapia con una capacidad de carga de hasta 82,000 Ton.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
