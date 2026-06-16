// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      const STORAGE_KEY = "gtts-home-language";
      const STATE_BASE = "https://gototrafficschool.com/state/";
      const translations = {
        en: {
          pageTitle: "GoToTrafficSchool.com | America's Original Traffic School",
          skip: "Skip to main content",
          "share.button": "Share This Page",
          "share.success": "Page link copied.",
          "utility.contact": "Contact Us: 1-800-909-3909",
          "nav.about": "About Us",
          "nav.how": "How It Works",
          "nav.faq": "FAQs",
          "nav.partner": "Partner with us",
          "nav.contact": "Contact Us",
          "nav.login": "Log In",
          "lang.label": "Select Language",
          "lang.english": "English (US)",
          "lang.spanish": "Español",
          "hero.title": "America's Original Traffic School",
          "hero.copy": "State-approved traffic school and defensive driving courses that help you dismiss tickets, reduce points, and save on insurance.",
          "hero.primary": "Get Started Now",
          "hero.secondary": "How it Works",
          "hero.proof1a": "State Approved",
          "hero.proof1b": "Trusted by Courts",
          "hero.proof2a": "Certificate Delivered",
          "hero.proof2b": "Fast & Secure",
          "hero.proof3a": "10 Million+",
          "hero.proof3b": "Drivers Served",
          "trust.1.title": "Fast Certificate",
          "trust.1.copy": "Quick reporting and certificate delivery options.",
          "trust.2.title": "State Approved Courses",
          "trust.2.copy": "Licensed, approved, or accepted where applicable.",
          "trust.3.title": "100% Online",
          "trust.3.copy": "Complete your course on any device, anytime.",
          "trust.4.title": "Lowest Price Guarantee",
          "trust.4.copy": "Affordable state-approved courses with no hidden fees.",
          "trust.5.title": "Trusted by 10+ Million Drivers",
          "trust.5.copy": "Helping drivers nationwide since 2000.",
          "worksFeature.title": "Traffic School That Works For You",
          "worksFeature.item1.title": "Dismiss Tickets",
          "worksFeature.item1.copy": "Qualify to dismiss eligible tickets.",
          "worksFeature.item2.title": "Avoid Points",
          "worksFeature.item2.copy": "Prevent points from going on your record.",
          "worksFeature.item3.title": "Lower Insurance Rates",
          "worksFeature.item3.copy": "Complete and save on your insurance.",
          "worksFeature.item4.title": "Court & DMV Approved",
          "worksFeature.item4.copy": "State-approved and court-accepted courses.",
          "worksFeature.item5.title": "Action Button",
          "worksFeature.item5.copy": "Check If We Accept Your Ticket",
          "worksFeature.cta": "Check If we accept your ticket",
          "steps.heading": "How It Works",
          "steps.1.title": "Sign Up",
          "steps.1.copy": "Create your account in just a few minutes.",
          "steps.2.title": "Take the Course",
          "steps.2.copy": "Complete the course online at your own pace.",
          "steps.3.title": "Pass the Final Exam",
          "steps.3.copy": "Pass the final exam with a 70% or higher.",
          "steps.4.title": "Receive Certificate",
          "steps.4.copy": "Download your certificate and we notify the court.",
          "testimonials.title": "Trusted by Millions of Drivers",
          "testimonials.subtitle": "Don't just take our word for it. See what our satisfied customers have to say.",
          "testimonials.1.date": "January 2026",
          "testimonials.1.copy": "“I like the course just the way it is.”",
          "testimonials.2.date": "January 2026",
          "testimonials.2.copy": "“I think its good the way it is.”",
          "testimonials.3.date": "December 2025",
          "testimonials.3.copy": "“I thought the course was great and it was a great reminder of everything I learned while in class.”",
          "compare.title": "See How GoToTrafficSchool.com Compares",
          "compare.col1": "Feature",
          "compare.col3": "Other online traffic schools",
          "compare.yes": "Yes",
          "compare.row1.label": "State licensed",
          "compare.row1.other": "Varies",
          "compare.row2.label": "100% Online",
          "compare.row2.other": "Most",
          "compare.row3.label": "Mobile-Friendly",
          "compare.row3.other": "Varies",
          "compare.row4.label": "Self-Paced",
          "compare.row4.other": "Most",
          "compare.row5.label": "Instant Enrollment",
          "compare.row5.other": "Varies",
          "compare.row6.label": "Designed Specifically for California Drivers",
          "compare.row6.other": "Not Always",
          "compare.row7.label": "Clear, Upfront Pricing",
          "compare.row7.other": "Varies",
          "courses.title": "Looking For A Different Course?",
          "courses.subtitle": "Browse our additional online programs and find the one that fits your requirements.",
          "courses.cta": "Start Now",
          "courses.1.copy": "Indiana BMV-approved driver safety program for ticket dismissal and point reduction.",
          "courses.2.copy": "Texas-approved defensive driving to dismiss tickets and earn insurance discounts.",
          "courses.3.copy": "State-approved online teen driver education courses built for first-time drivers.",
          "courses.4.copy": "Illinois-approved adult driver education for first-time drivers age 18 and older.",
          "courses.5.copy": "Online adult driver education courses for students in eligible states.",
          "courses.6.copy": "Online driver education courses designed to make the learning process simple.",
          "partner.kicker": "Partner with Cyberactive",
          "partner.copy1": "We partner with courts and government agencies to offer approved online traffic school programs to ticketed drivers. Through white-label or referral solutions, we handle enrollment, payment collection, and certificate reporting — helping reduce administrative workload while ensuring drivers are properly educated.",
          "partner.title": "Court-Approved Programs. Simplified.",
          "partner.copy2": "Offer a seamless traffic school solution without adding operational burden.",
          "partner.cta": "Learn More About Court Solutions",
          "partner.metric1.title": "Automated Notifications",
          "partner.metric1.copy": "Real-time updates and reporting.",
          "partner.metric2.title": "Compliance You Can Trust",
          "partner.metric2.copy": "State-approved programs with built-in compliance.",
          "partner.metric3.title": "White-Label Options",
          "partner.metric3.copy": "Fully branded for your court.",
          "partner.metric4.title": "Dedicated Support",
          "partner.metric4.copy": "Hands-on support from implementation to ongoing success.",
          "ready.title": "Ready to get started?",
          "ready.copy": "Select your state and get started in just 5 minutes.",
          "ready.placeholder": "Choose Your State",
          "footer.brand": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
          "footer.location": "Garden Grove, California",
          "footer.company": "Company",
          "footer.home": "Home",
          "footer.about": "About Us",
          "footer.how": "How It Works",
          "footer.faq": "FAQ",
          "footer.contact": "Contact",
          "footer.news": "News",
          "footer.partner": "Partner Program",
          "footer.legal": "Legal",
          "footer.privacy": "Privacy",
          "footer.terms": "Policy Terms of Service",
          "footer.court": "Court Directory",
          "footer.comments": "Student Comments",
          "footer.follow": "Follow Us",
          "footer.copyrightLead": "© 2026 gototrafficschool.com Powered by",
          "footer.copyrightTail": "All rights reserved."
        },
        es: {
          pageTitle: "GoToTrafficSchool.com | La escuela de tránsito original de Estados Unidos",
          skip: "Saltar al contenido principal",
          "share.button": "Compartir Esta Página",
          "share.success": "Enlace de la página copiado.",
          "utility.contact": "Contáctenos: 1-800-909-3909",
          "nav.about": "Sobre Nosotros",
          "nav.how": "Cómo Funciona",
          "nav.faq": "Preguntas Frecuentes",
          "nav.partner": "Asóciese con nosotros",
          "nav.contact": "Contáctenos",
          "nav.login": "Iniciar Sesión",
          "lang.label": "Seleccionar Idioma",
          "lang.english": "Inglés (EE. UU.)",
          "lang.spanish": "Español",
          "hero.title": "La escuela de tránsito original de Estados Unidos",
          "hero.copy": "Cursos aprobados por el estado de escuela de tránsito y manejo defensivo que le ayudan a desestimar multas, reducir puntos y ahorrar en el seguro.",
          "hero.primary": "Comenzar Ahora",
          "hero.secondary": "Cómo Funciona",
          "hero.proof1a": "Aprobado por el Estado",
          "hero.proof1b": "Con la confianza de los tribunales",
          "hero.proof2a": "Certificado Entregado",
          "hero.proof2b": "Rápido y Seguro",
          "hero.proof3a": "10 Millones+",
          "hero.proof3b": "Conductores Atendidos",
          "trust.1.title": "Certificado Rápido",
          "trust.1.copy": "Opciones rápidas de reporte y entrega de certificados.",
          "trust.2.title": "Cursos Aprobados por el Estado",
          "trust.2.copy": "Con licencia, aprobados o aceptados según corresponda.",
          "trust.3.title": "100% En Línea",
          "trust.3.copy": "Complete su curso en cualquier dispositivo, en cualquier momento.",
          "trust.4.title": "Garantía del Precio Más Bajo",
          "trust.4.copy": "Cursos asequibles aprobados por el estado, sin cargos ocultos.",
          "trust.5.title": "Con la Confianza de Más de 10 Millones de Conductores",
          "trust.5.copy": "Ayudando a conductores en todo el país desde el año 2000.",
          "worksFeature.title": "Escuela de Tránsito que Funciona Para Usted",
          "worksFeature.item1.title": "Desestime Multas",
          "worksFeature.item1.copy": "Califique para desestimar multas elegibles.",
          "worksFeature.item2.title": "Evite Puntos",
          "worksFeature.item2.copy": "Evite que los puntos aparezcan en su historial.",
          "worksFeature.item3.title": "Reduzca el Seguro",
          "worksFeature.item3.copy": "Complete el curso y ahorre en su seguro.",
          "worksFeature.item4.title": "Aprobado por Tribunal y DMV",
          "worksFeature.item4.copy": "Cursos aprobados por el estado y aceptados por tribunales.",
          "worksFeature.item5.title": "Botón de Acción",
          "worksFeature.item5.copy": "Verifique si aceptamos su multa",
          "worksFeature.cta": "Verifique si aceptamos su multa",
          "steps.heading": "Cómo Funciona",
          "steps.1.title": "Regístrese",
          "steps.1.copy": "Cree su cuenta en solo unos minutos.",
          "steps.2.title": "Tome el Curso",
          "steps.2.copy": "Complete el curso en línea a su propio ritmo.",
          "steps.3.title": "Apruebe el Examen Final",
          "steps.3.copy": "Apruebe el examen final con 70% o más.",
          "steps.4.title": "Reciba su Certificado",
          "steps.4.copy": "Descargue su certificado y notificamos al tribunal.",
          "testimonials.title": "Con la Confianza de Millones de Conductores",
          "testimonials.subtitle": "No se quede solo con nuestra palabra. Vea lo que dicen nuestros clientes satisfechos.",
          "testimonials.1.date": "Enero 2026",
          "testimonials.1.copy": "“Me gusta el curso tal como está.”",
          "testimonials.2.date": "Enero 2026",
          "testimonials.2.copy": "“Creo que está bien tal como está.”",
          "testimonials.3.date": "Diciembre 2025",
          "testimonials.3.copy": "“Me pareció que el curso fue excelente y fue un gran recordatorio de todo lo que aprendí en clase.”",
          "compare.title": "Vea Cómo Se Compara GoToTrafficSchool.com",
          "compare.col1": "Característica",
          "compare.col3": "Otras escuelas de tránsito en línea",
          "compare.yes": "Sí",
          "compare.row1.label": "Con licencia estatal",
          "compare.row1.other": "Varía",
          "compare.row2.label": "100% En Línea",
          "compare.row2.other": "La mayoría",
          "compare.row3.label": "Compatible con móviles",
          "compare.row3.other": "Varía",
          "compare.row4.label": "A su propio ritmo",
          "compare.row4.other": "La mayoría",
          "compare.row5.label": "Inscripción instantánea",
          "compare.row5.other": "Varía",
          "compare.row6.label": "Diseñado específicamente para conductores de California",
          "compare.row6.other": "No siempre",
          "compare.row7.label": "Precios claros y por adelantado",
          "compare.row7.other": "Varía",
          "courses.title": "¿Busca un curso diferente?",
          "courses.subtitle": "Explore nuestros programas adicionales en línea y encuentre el que se ajuste a sus necesidades.",
          "courses.cta": "Comenzar",
          "courses.1.copy": "Programa de seguridad vial aprobado por el BMV de Indiana para desestimar multas y reducir puntos.",
          "courses.2.copy": "Curso de manejo defensivo aprobado en Texas para desestimar multas y obtener descuentos en el seguro.",
          "courses.3.copy": "Cursos estatales en línea para educación vial de adolescentes diseñados para conductores primerizos.",
          "courses.4.copy": "Educación vial para adultos aprobada en Illinois para conductores primerizos de 18 años o más.",
          "courses.5.copy": "Cursos en línea de educación vial para adultos para estudiantes en estados elegibles.",
          "courses.6.copy": "Cursos en línea de educación vial diseñados para simplificar el proceso de aprendizaje.",
          "partner.kicker": "Asóciese con Cyberactive",
          "partner.copy1": "Nos asociamos con tribunales y agencias gubernamentales para ofrecer programas aprobados de escuela de tránsito en línea a conductores con infracciones. A través de soluciones de marca blanca o referidos, gestionamos la inscripción, el cobro de pagos y el reporte de certificados, ayudando a reducir la carga administrativa mientras garantizamos que los conductores reciban la educación adecuada.",
          "partner.title": "Programas Aprobados por Tribunales. Simplificados.",
          "partner.copy2": "Ofrezca una solución fluida de escuela de tránsito sin agregar carga operativa.",
          "partner.cta": "Más Información Sobre Soluciones para Tribunales",
          "partner.metric1.title": "Notificaciones Automatizadas",
          "partner.metric1.copy": "Actualizaciones e informes en tiempo real.",
          "partner.metric2.title": "Cumplimiento Confiable",
          "partner.metric2.copy": "Programas aprobados por el estado con cumplimiento incorporado.",
          "partner.metric3.title": "Opciones de Marca Blanca",
          "partner.metric3.copy": "Totalmente adaptado a la marca de su tribunal.",
          "partner.metric4.title": "Soporte Dedicado",
          "partner.metric4.copy": "Soporte práctico desde la implementación hasta el éxito continuo.",
          "ready.title": "¿Listo para comenzar?",
          "ready.copy": "Seleccione su estado y comience en solo 5 minutos.",
          "ready.placeholder": "Elija Su Estado",
          "footer.brand": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
          "footer.location": "Garden Grove, California",
          "footer.company": "Empresa",
          "footer.home": "Inicio",
          "footer.about": "Sobre Nosotros",
          "footer.how": "Cómo Funciona",
          "footer.faq": "Preguntas Frecuentes",
          "footer.contact": "Contacto",
          "footer.news": "Noticias",
          "footer.partner": "Programa de Socios",
          "footer.legal": "Legal",
          "footer.privacy": "Privacidad",
          "footer.terms": "Política de Términos del Servicio",
          "footer.court": "Directorio de Tribunales",
          "footer.comments": "Comentarios del Estudiante",
          "footer.follow": "Síganos",
          "footer.copyrightLead": "© 2026 gototrafficschool.com Desarrollado por",
          "footer.copyrightTail": "Todos los derechos reservados."
        }
      };

      const STATE_MAP = {
        "alabama": {
          "slug": "alabama-online-defensive-driving",
          "title": "Alabama Online Defensive Driving Course",
          "stateName": "Alabama",
          "stateCode": "AL"
        },
        "alaska": {
          "slug": "alaska-online-defensive-driving",
          "title": "Alaska Online Defensive Driving Course",
          "stateName": "Alaska",
          "stateCode": "AK"
        },
        "arizona": {
          "slug": "arizona-online-defensive-driving",
          "title": "Arizona Online Defensive Driving Course",
          "stateName": "Arizona",
          "stateCode": "AZ"
        },
        "arkansas": {
          "slug": "arkansas-online-defensive-driving",
          "title": "Arkansas Online Defensive Driving Course",
          "stateName": "Arkansas",
          "stateCode": "AR"
        },
        "california": {
          "slug": "california-online-traffic-school",
          "title": "California Online Traffic School",
          "stateName": "California",
          "stateCode": "CA"
        },
        "colorado": {
          "slug": "colorado-online-defensive-driving",
          "title": "Colorado Online Defensive Driving Course",
          "stateName": "Colorado",
          "stateCode": "CO"
        },
        "connecticut": {
          "slug": "connecticut-online-defensive-driving",
          "title": "Connecticut Online Defensive Driving Course",
          "stateName": "Connecticut",
          "stateCode": "CT"
        },
        "delaware": {
          "slug": "delaware-online-defensive-driving",
          "title": "Delaware Online Defensive Driving Course",
          "stateName": "Delaware",
          "stateCode": "DE"
        },
        "florida": {
          "slug": "florida-online-traffic-school",
          "title": "Florida Online Traffic School",
          "stateName": "Florida",
          "stateCode": "FL"
        },
        "georgia": {
          "slug": "georgia-online-defensive-driving",
          "title": "Georgia Online Defensive Driving Course",
          "stateName": "Georgia",
          "stateCode": "GA"
        },
        "hawaii": {
          "slug": "hawaii-online-defensive-driving",
          "title": "Hawaii Online Defensive Driving Course",
          "stateName": "Hawaii",
          "stateCode": "HI"
        },
        "idaho": {
          "slug": "idaho-online-defensive-driving",
          "title": "Idaho Online Defensive Driving Course",
          "stateName": "Idaho",
          "stateCode": "ID"
        },
        "illinois": {
          "slug": "illinois-online-defensive-driving",
          "title": "Illinois Online Defensive Driving Course",
          "stateName": "Illinois",
          "stateCode": "IL"
        },
        "indiana": {
          "slug": "indiana-online-traffic-school",
          "title": "Indiana Online Traffic School",
          "stateName": "Indiana",
          "stateCode": "IN"
        },
        "iowa": {
          "slug": "iowa-online-defensive-driving",
          "title": "Iowa Online Defensive Driving Course",
          "stateName": "Iowa",
          "stateCode": "IA"
        },
        "kansas": {
          "slug": "kansas-online-traffic-school",
          "title": "Kansas Online Traffic School",
          "stateName": "Kansas",
          "stateCode": "KS"
        },
        "kentucky": {
          "slug": "kentucky-online-traffic-school",
          "title": "Kentucky Online Traffic School",
          "stateName": "Kentucky",
          "stateCode": "KY"
        },
        "louisiana": {
          "slug": "louisiana-online-defensive-driving",
          "title": "Louisiana Online Defensive Driving Course",
          "stateName": "Louisiana",
          "stateCode": "LA"
        },
        "maine": {
          "slug": "maine-online-driver-improvement",
          "title": "Maine Online Driver Improvement Course",
          "stateName": "Maine",
          "stateCode": "ME"
        },
        "maryland": {
          "slug": "maryland-online-driver-improvement",
          "title": "Maryland Online Driver Improvement Course",
          "stateName": "Maryland",
          "stateCode": "MD"
        },
        "massachusetts": {
          "slug": "massachusetts-online-driver-retraining",
          "title": "Massachusetts Online Driver Retraining Course",
          "stateName": "Massachusetts",
          "stateCode": "MA"
        },
        "michigan": {
          "slug": "michigan-online-driver-improvement",
          "title": "Michigan Online Driver Improvement Course",
          "stateName": "Michigan",
          "stateCode": "MI"
        },
        "minnesota": {
          "slug": "minnesota-online-defensive-driving",
          "title": "Minnesota Online Defensive Driving Course",
          "stateName": "Minnesota",
          "stateCode": "MN"
        },
        "mississippi": {
          "slug": "mississippi-online-defensive-driving",
          "title": "Mississippi Online Defensive Driving Course",
          "stateName": "Mississippi",
          "stateCode": "MS"
        },
        "missouri": {
          "slug": "missouri-online-driver-improvement",
          "title": "Missouri Online Driver Improvement Course",
          "stateName": "Missouri",
          "stateCode": "MO"
        },
        "montana": {
          "slug": "montana-online-defensive-driving",
          "title": "Montana Online Defensive Driving Course",
          "stateName": "Montana",
          "stateCode": "MT"
        },
        "nebraska": {
          "slug": "nebraska-online-defensive-driving",
          "title": "Nebraska Online Defensive Driving Course",
          "stateName": "Nebraska",
          "stateCode": "NE"
        },
        "nevada": {
          "slug": "nevada-online-traffic-school",
          "title": "Nevada Online Traffic School",
          "stateName": "Nevada",
          "stateCode": "NV"
        },
        "new-hampshire": {
          "slug": "new-hampshire-online-driver-improvement",
          "title": "New Hampshire Online Driver Improvement Course",
          "stateName": "New Hampshire",
          "stateCode": "NH"
        },
        "new-jersey": {
          "slug": "new-jersey-online-defensive-driving",
          "title": "New Jersey Online Defensive Driving Course",
          "stateName": "New Jersey",
          "stateCode": "NJ"
        },
        "new-mexico": {
          "slug": "new-mexico-online-defensive-driving",
          "title": "New Mexico Online Defensive Driving Course",
          "stateName": "New Mexico",
          "stateCode": "NM"
        },
        "new-york": {
          "slug": "new-york-online-defensive-driving",
          "title": "New York Online Defensive Driving Course",
          "stateName": "New York",
          "stateCode": "NY"
        },
        "north-carolina": {
          "slug": "north-carolina-online-traffic-school",
          "title": "North Carolina Online Traffic School",
          "stateName": "North Carolina",
          "stateCode": "NC"
        },
        "north-dakota": {
          "slug": "north-dakota-online-defensive-driving",
          "title": "North Dakota Online Defensive Driving Course",
          "stateName": "North Dakota",
          "stateCode": "ND"
        },
        "ohio": {
          "slug": "ohio-online-remedial-driving",
          "title": "Ohio Online Remedial Driving Course",
          "stateName": "Ohio",
          "stateCode": "OH"
        },
        "oklahoma": {
          "slug": "oklahoma-online-defensive-driving",
          "title": "Oklahoma Online Defensive Driving Course",
          "stateName": "Oklahoma",
          "stateCode": "OK"
        },
        "oregon": {
          "slug": "oregon-online-traffic-school",
          "title": "Oregon Online Traffic School",
          "stateName": "Oregon",
          "stateCode": "OR"
        },
        "pennsylvania": {
          "slug": "pennsylvania-online-driver-improvement",
          "title": "Pennsylvania Online Driver Improvement Course",
          "stateName": "Pennsylvania",
          "stateCode": "PA"
        },
        "rhode-island": {
          "slug": "rhode-island-online-defensive-driving",
          "title": "Rhode Island Online Defensive Driving Course",
          "stateName": "Rhode Island",
          "stateCode": "RI"
        },
        "south-carolina": {
          "slug": "south-carolina-online-defensive-driving",
          "title": "South Carolina Online Defensive Driving Course",
          "stateName": "South Carolina",
          "stateCode": "SC"
        },
        "south-dakota": {
          "slug": "south-dakota-online-defensive-driving",
          "title": "South Dakota Online Defensive Driving Course",
          "stateName": "South Dakota",
          "stateCode": "SD"
        },
        "tennessee": {
          "slug": "tennessee-online-defensive-driving",
          "title": "Tennessee Online Defensive Driving Course",
          "stateName": "Tennessee",
          "stateCode": "TN"
        },
        "texas": {
          "slug": "texas-online-defensive-driving",
          "title": "Texas Online Defensive Driving Course",
          "stateName": "Texas",
          "stateCode": "TX"
        },
        "utah": {
          "slug": "utah-online-traffic-school",
          "title": "Utah Online Traffic School",
          "stateName": "Utah",
          "stateCode": "UT"
        },
        "vermont": {
          "slug": "vermont-online-defensive-driving",
          "title": "Vermont Online Defensive Driving Course",
          "stateName": "Vermont",
          "stateCode": "VT"
        },
        "virginia": {
          "slug": "virginia-online-driver-improvement",
          "title": "Virginia Online Driver Improvement Course",
          "stateName": "Virginia",
          "stateCode": "VA"
        },
        "washington": {
          "slug": "washington-online-traffic-school",
          "title": "Washington Online Traffic School",
          "stateName": "Washington",
          "stateCode": "WA"
        },
        "west-virginia": {
          "slug": "west-virginia-online-defensive-driving",
          "title": "West Virginia Online Defensive Driving Course",
          "stateName": "West Virginia",
          "stateCode": "WV"
        },
        "wisconsin": {
          "slug": "wisconsin-online-traffic-school",
          "title": "Wisconsin Online Traffic School",
          "stateName": "Wisconsin",
          "stateCode": "WI"
        },
        "wyoming": {
          "slug": "wyoming-online-defensive-driving",
          "title": "Wyoming Online Defensive Driving Course",
          "stateName": "Wyoming",
          "stateCode": "WY"
        },
        "district-of-columbia": {
          "slug": "district-of-columbia",
          "title": "Washington, D.C. Online Course",
          "stateName": "Washington,D.C.",
          "stateCode": "DC"
        }
      };

      const languageSelect = document.getElementById("languageSelect");
      const heroStateSelect = document.getElementById("heroStateSelect");
      const heroCourseSelect = document.getElementById("heroCourseSelect");
      const heroCourseLoading = document.getElementById("heroCourseLoading");
      const heroCourseLoadingText = document.getElementById("heroCourseLoadingText");
      const stateSelect = document.getElementById("stateSelect");
      const shareButton = document.getElementById("sharePage");
      const shareToast = document.getElementById("shareToast");
      const courseTrack = document.getElementById("courseTrack");
      const prevButton = document.getElementById("coursePrev");
      const nextButton = document.getElementById("courseNext");

      let courseIndex = 0;

      function getStoredLanguage() {
        try {
          return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
          return null;
        }
      }

      function setStoredLanguage(language) {
        try {
          localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
          return;
        }
      }

      function populateStates() {
        Object.entries(STATE_MAP).forEach(([stateKey, state]) => {
          const option = document.createElement("option");
          option.value = stateKey;
          option.textContent = state.stateName;
          option.setAttribute("data-state-code", state.stateCode);
          stateSelect.appendChild(option);

          if (heroStateSelect) {
            const heroOption = option.cloneNode(true);
            heroStateSelect.appendChild(heroOption);
          }
        });
      }

      function applyLanguage(language) {
        const dictionary = translations[language] || translations.en;
        document.documentElement.lang = language === "es" ? "es" : "en";
        document.title = dictionary.pageTitle;

        document.querySelectorAll("[data-i18n]").forEach((node) => {
          const key = node.getAttribute("data-i18n");
          if (dictionary[key]) {
            node.textContent = dictionary[key];
          }
        });

        const placeholder = stateSelect.querySelector("option[value='']");
        if (placeholder) {
          placeholder.textContent = dictionary["ready.placeholder"];
        }

        if (heroStateSelect) {
          const heroPlaceholder = heroStateSelect.querySelector("option[value='']");
          if (heroPlaceholder) {
            heroPlaceholder.textContent = language === "es" ? "Seleccione Su Estado" : "Select Your State";
          }
        }

        if (heroCourseSelect) {
          const heroCoursePlaceholder = heroCourseSelect.querySelector("option[value='']");
          if (heroCoursePlaceholder) {
            heroCoursePlaceholder.textContent = language === "es" ? "Seleccione Su Curso" : "Select Your Course";
          }
        }

        setStoredLanguage(language);
      }

      function setHeroLoading(message, isLoading) {
        if (!heroCourseLoading || !heroCourseLoadingText) return;
        heroCourseLoadingText.textContent = message;
        heroCourseLoading.classList.toggle("is-visible", Boolean(isLoading || message));
      }

      function redirectFromHeroCourse() {
        if (!heroCourseSelect || !heroCourseSelect.value) return;

        const currentLanguage = languageSelect.value || "en";

        if (!heroStateSelect.value || !STATE_MAP[heroStateSelect.value]) {
          setHeroLoading(currentLanguage === "es" ? "Seleccione un estado primero." : "Please select a state first.", true);
          heroCourseSelect.value = "";
          window.setTimeout(() => setHeroLoading("", false), 1800);
          return;
        }

        heroStateSelect.disabled = true;
        heroCourseSelect.disabled = true;
        setHeroLoading(currentLanguage === "es" ? "Cargando la pagina de su estado..." : "Loading your state landing page...", true);

        window.setTimeout(() => {
          window.location.href = `${STATE_BASE}${STATE_MAP[heroStateSelect.value].slug}`;
        }, 900);
      }

      function resetHeroSelectors() {
        if (heroStateSelect) {
          heroStateSelect.value = "";
          heroStateSelect.disabled = false;
        }

        if (heroCourseSelect) {
          heroCourseSelect.value = "";
          heroCourseSelect.disabled = false;
        }

        setHeroLoading("", false);
      }

      function showToast(message) {
        shareToast.textContent = message;
        shareToast.classList.add("show");
        window.clearTimeout(showToast._timer);
        showToast._timer = window.setTimeout(() => {
          shareToast.classList.remove("show");
        }, 2200);
      }

      async function sharePage() {
        const currentLanguage = languageSelect.value;
        const dictionary = translations[currentLanguage] || translations.en;

        if (navigator.share) {
          try {
            await navigator.share({
              title: document.title,
              text: document.title,
              url: window.location.href
            });
            return;
          } catch (error) {
            if (error && error.name === "AbortError") {
              return;
            }
          }
        }

        try {
          await navigator.clipboard.writeText(window.location.href);
          showToast(dictionary["share.success"]);
        } catch (error) {
          showToast(dictionary["share.success"]);
        }
      }

      function visibleCards() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 992) return 2;
        if (window.innerWidth < 1200) return 3;
        return 4;
      }

      function totalCoursePages() {
        return Math.max(0, courseTrack.children.length - visibleCards());
      }

      function updateCarousel() {
        const perView = visibleCards();
        const maxIndex = totalCoursePages();
        courseIndex = Math.min(courseIndex, maxIndex);
        const offset = (100 / perView) * courseIndex;
        courseTrack.style.transform = `translateX(-${offset}%)`;
        prevButton.disabled = courseIndex === 0;
        nextButton.disabled = courseIndex >= maxIndex;
        prevButton.style.opacity = prevButton.disabled ? "0.45" : "1";
        nextButton.style.opacity = nextButton.disabled ? "0.45" : "1";
      }

      function initReveal() {
        const revealNodes = document.querySelectorAll(".reveal:not(.visible)");
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.16 });

        revealNodes.forEach((node) => observer.observe(node));
      }

      populateStates();

      const savedLanguage = getStoredLanguage() || "en";
      languageSelect.value = savedLanguage;
      applyLanguage(savedLanguage);
      initReveal();
      updateCarousel();
      resetHeroSelectors();

      languageSelect.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
      });

      heroCourseSelect.addEventListener("change", redirectFromHeroCourse);

      window.addEventListener("pageshow", resetHeroSelectors);

      shareButton.addEventListener("click", sharePage);

      stateSelect.addEventListener("change", () => {
        if (stateSelect.value && STATE_MAP[stateSelect.value]) {
          window.location.href = `${STATE_BASE}${STATE_MAP[stateSelect.value].slug}`;
        }
      });

      prevButton.addEventListener("click", () => {
        courseIndex = Math.max(0, courseIndex - 1);
        updateCarousel();
      });

      nextButton.addEventListener("click", () => {
        courseIndex = Math.min(totalCoursePages(), courseIndex + 1);
        updateCarousel();
      });

      window.addEventListener("resize", updateCarousel);

      window.addEventListener("pageshow", () => {
        stateSelect.value = "";
      });
    
  })();

}
