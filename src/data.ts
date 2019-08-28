export interface GeneralDataConfig {
  address?: string;
  mobile?: string;
  email?: string;
  rfc?: string;
  about?: string;
  mision?: string;
  vision?: string;
  areas?: String[];
}

const generalData: GeneralDataConfig = {
  address: 'Vista a la Campiña 3183-76 Col. Mirador del Tesoro, Tlaquepaque, Jal. CP 45608',
  mobile: '(33) 22613180',
  email: 'pablo.lopez@tecnoplades.com',
  rfc: 'TPD011229LQ5',
  about:
    'Somos una empresa integral dedicada a brindar asesoría y consultoría que comprende la promoción, desarrollo, asistencia técnica y supervisión, con el fin de proporcionar servicios de planeación y desarrollo tecnológico al sector público y privado.',
  mision:
    'En TECNOPLADES, trabajamos permanentemente en la integración y elaboración de planes, programas, proyectos, y estudios, brindando nuestros servicios de acuerdo a las necesidades tanto de nuestros clientes como de los productos, a través de la gestión de calidad, innovación, con un grupo de profesionales respaldados por alianzas estratégicas para ofrecer una gama completa de servicios eficientes.',
  vision:
    'Posicionarnos en el mercado como una empresa que contribuya a elevar la calidad de vida de nuestro país, a través del uso, gestión e integración del conocimiento y la tecnología promoviendo el desarrollo humano, económico, institucional, ambiental y tecnológico contribuyendo en la toma de decisiones de las políticas públicas para la atención social y el establecimiento de negocios.',
  areas: [
    'Pesquera',
    'Acuícola, Desarrollo Tecnológico',
    'Institucional',
    'Políticas Públicas',
    'Ambiental',
    'Ingeniería Acuícola',
    'Fomento al Consumo de Pescados y Mariscos',
    'Administrativa',
    'Diseño y Planeación',
    'Marco Jurídico, Programas y Proyectos',
    'Desarrollo de Negocios',
    'Desarrollo de Capital Social',
    'Gestión Económica del Conocimiento',
    'Investigación Clínica Cuantitativa',
  ],
};

export { generalData };
