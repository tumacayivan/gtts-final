// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- inlined assets/site-translations.js ----
  ;(function(){
(function () {
  const STORAGE_KEY = "gtts:lang";
  const SELECTOR = "#languageSelect";

  const ES = {
    "English": "Inglés",
    "Spanish": "Español",
    "Language": "Idioma",
    "Primary navigation": "Navegación principal",
    "Toggle navigation": "Abrir o cerrar navegación",
    "GoToTrafficSchool home": "Inicio de GoToTrafficSchool",
    "Go To Traffic School": "Go To Traffic School",
    "Share This Page": "Compartir Esta Página",
    "Share this page": "Compartir esta página",
    "Contact Us: 1-800-909-3909": "Contáctenos: 1-800-909-3909",
    "Contact Us: 1-(888)-329-7069": "Contáctenos: 1-(888)-329-7069",
    "About Us": "Sobre Nosotros",
    "How It Works": "Cómo Funciona",
    "FAQs": "Preguntas Frecuentes",
    "FAQ": "Preguntas Frecuentes",
    "Partner Program": "Programa de Socios",
    "Contact Us": "Contáctenos",
    "Log In": "Iniciar Sesión",
    "Company": "Empresa",
    "Home": "Inicio",
    "Contact": "Contacto",
    "News": "Noticias",
    "Legal": "Legal",
    "Privacy Policy": "Política de Privacidad",
    "Terms": "Términos",
    "Terms of Service": "Términos de Servicio",
    "Court Directory": "Directorio de Tribunales",
    "Student Comments": "Comentarios de Estudiantes",
    "Follow Us": "Síganos",
    "America's Original Traffic School has been providing quality online traffic school courses since 1995.": "America's Original Traffic School ofrece cursos de escuela de tránsito en línea de calidad desde 1995.",
    "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
    "© 2026 gototrafficschool.com Powered by Cyberactive. All rights reserved.": "© 2026 gototrafficschool.com Desarrollado por Cyberactive. Todos los derechos reservados.",
    "© 2026 gototrafficschool.com Powered by": "© 2026 gototrafficschool.com Desarrollado por",
    "All rights reserved.": "Todos los derechos reservados.",
    "Page link copied.": "Enlace de la página copiado.",
    "Close": "Cerrar",
    "Skip to main content": "Saltar al contenido principal",
    "Yes": "Sí",
    "No / Varies": "No / Varía",
    "Varies": "Varía",
    "Most": "La mayoría",
    "Not always": "No siempre",
    "Feature": "Característica",
    "Other online traffic schools": "Otras escuelas de tránsito en línea",
    "Testimonials": "Testimonios",
    "Trusted by Millions of Drivers": "Con la Confianza de Millones de Conductores",
    "Do not just take our word for it. See what our satisfied customers have to say.": "No se quede solo con nuestra palabra. Vea lo que dicen nuestros clientes satisfechos.",
    "5 out of 5 stars": "5 de 5 estrellas",
    "GoToTrafficSchool Student": "Estudiante de GoToTrafficSchool",
    "Posted on Google": "Publicado en Google",
    "Recent review": "Reseña reciente",
    "Register Now": "Regístrese Ahora",
    "Submit Now": "Enviar Ahora",
    "Start Your Course Now": "Comience Su Curso Ahora",
    "Ready to Complete Your Course?": "¿Listo para Completar Su Curso?",
    "Enroll online, take your course at your own pace, and let us handle your certificate the right way.": "Inscríbase en línea, tome su curso a su propio ritmo y deje que manejemos su certificado de la manera correcta.",
    "Choose Your State": "Elija Su Estado",
    "Choose your State": "Elija Su Estado",
    "Choose your state": "Elija su estado",
    "State selection": "Selección de estado",
    "Select your state to view pricing and continue.": "Seleccione su estado para ver los precios y continuar.",

    "Online Traffic School | GoToTrafficSchool.com": "Escuela de Tránsito en Línea | GoToTrafficSchool.com",
    "Complete your traffic school or defensive driving course online with GoToTrafficSchool.com. Fast, simple, and court-approved where available.": "Complete su curso de escuela de tránsito o manejo defensivo en línea con GoToTrafficSchool.com. Rápido, sencillo y aprobado por tribunales donde esté disponible.",
    "America's Original Traffic School": "America's Original Traffic School",
    "Complete your traffic school or defensive driving course online. Fast, simple, and court-approved.": "Complete su curso de escuela de tránsito o manejo defensivo en línea. Rápido, sencillo y aprobado por tribunales.",
    "GoToTrafficSchool mobile app and app store download preview": "Vista previa de la aplicación móvil de GoToTrafficSchool y descarga en la tienda de aplicaciones",
    "Curso Ofrecido en Espanol Tambien": "Curso Ofrecido en Español También",
    "Curso Ofrecido en Español También": "Curso Ofrecido en Español También",
    "Try our course for free - no credit card required": "Pruebe nuestro curso gratis - no se requiere tarjeta de crédito",
    "Try our course for free – no credit card required": "Pruebe nuestro curso gratis - no se requiere tarjeta de crédito",
    "Course benefits": "Beneficios del curso",
    "Lower Rates": "Tarifas Más Bajas",
    "Best Price": "Mejor Precio",
    "100% Online, Fast & Easy": "100% En Línea, Rápido y Fácil",
    "Money Back Guarantee": "Garantía de Devolución de Dinero",
    "Start the Course for Free": "Comience el Curso Gratis",
    "Mobile App Access": "Acceso a la Aplicación Móvil",
    "Live Customer Support": "Atención al Cliente en Vivo",
    "A Trusted Leader in Online Traffic School Since 2000": "Un Líder de Confianza en Escuela de Tránsito en Línea Desde 2000",
    "For over two decades, GoToTrafficSchool has helped drivers complete traffic school, defensive driving courses, and driver education from the comfort of a trusted, flexible online platform.": "Durante más de dos décadas, GoToTrafficSchool ha ayudado a conductores a completar escuela de tránsito, cursos de manejo defensivo y educación vial desde la comodidad de una plataforma en línea confiable y flexible.",
    "Our courses are designed to make compliance easy, affordable, and stress-free. You can sign in, complete your course on your schedule, and receive clear next steps for certificate processing.": "Nuestros cursos están diseñados para que cumplir con los requisitos sea fácil, económico y sin estrés. Puede iniciar sesión, completar su curso según su horario y recibir pasos claros para el procesamiento del certificado.",
    "Our goal is practical: convenient traffic school that is simple to use without compromising quality.": "Nuestro objetivo es práctico: una escuela de tránsito conveniente y fácil de usar sin comprometer la calidad.",
    "Student completing an online course on a laptop": "Estudiante completando un curso en línea en una laptop",
    "Car driving on a coastal highway": "Auto conduciendo por una carretera costera",
    "Why Drivers Choose Us": "Por Qué los Conductores Nos Eligen",
    "Trusted by millions since 2000": "Con la confianza de millones desde 2000",
    "Millions of courses successfully completed": "Millones de cursos completados con éxito",
    "Online, easy-to-follow courses": "Cursos en línea fáciles de seguir",
    "State-specific and court-aware requirements": "Requisitos específicos por estado y tribunal",
    "Flexible support options in select states": "Opciones de soporte flexibles en estados seleccionados",
    "Fast certificate processing after completion": "Procesamiento rápido del certificado después de completar el curso",
    "Lower Your Insurance. Strengthen Your Driving": "Reduzca Su Seguro. Mejore Su Manejo",
    "Specialized courses for mature drivers, fleet teams, and insurance discounts - 100% online.": "Cursos especializados para conductores maduros, equipos de flota y descuentos de seguro - 100% en línea.",
    "Start Saving Today": "Empiece a Ahorrar Hoy",
    "Browse our additional online programs and find the one that fits your requirements.": "Explore nuestros programas adicionales en línea y encuentre el que se ajuste a sus requisitos.",
    "Looking For A Different Course?": "¿Busca Un Curso Diferente?",
    "State-approved online education designed to help new drivers build safety and road confidence.": "Educación en línea aprobada por el estado diseñada para ayudar a nuevos conductores a desarrollar seguridad y confianza en la carretera.",
    "Easy online defensive driving courses available in select states.": "Cursos sencillos de manejo defensivo en línea disponibles en estados seleccionados.",
    "Online driver improvement and safety courses for drivers who want practical refreshers.": "Cursos en línea de mejoramiento y seguridad vial para conductores que desean un repaso práctico.",
    "Illinois state-approved adult driver education courses available online.": "Cursos de educación vial para adultos aprobados por el estado de Illinois disponibles en línea.",
    "Online adult driver education courses for students in eligible states.": "Cursos en línea de educación vial para adultos para estudiantes en estados elegibles.",
    "Online driver education courses designed to make the learning process simple.": "Cursos en línea de educación vial diseñados para simplificar el aprendizaje.",
    "Texas state-approved adult driver education and driving safety courses.": "Cursos de educación vial para adultos y seguridad vial aprobados por el estado de Texas.",
    "See How GoToTrafficSchool.com Compares": "Vea Cómo Se Compara GoToTrafficSchool.com",
    "State licensed": "Con licencia estatal",
    "100% Online": "100% En Línea",
    "Mobile Friendly": "Compatible con Móviles",
    "Self-Paced": "A Su Ritmo",
    "Self Paced": "A Su Ritmo",
    "Ticket Dismissal": "Desestimación de Multas",
    "Transparent Pricing": "Precios Transparentes",
    "Fast, upfront pricing": "Precios rápidos y claros",
    "\"It has been so nice. It is easy to follow and the system was simple to use.\"": "\"Ha sido muy agradable. Es fácil de seguir y el sistema fue sencillo de usar.\"",
    "\"I think it is quick and easy, and I appreciated being able to work at my own pace.\"": "\"Creo que es rápido y fácil, y agradecí poder avanzar a mi propio ritmo.\"",
    "\"I thought the course was great and it was a great reminder of everything I learned.\"": "\"Me pareció que el curso fue excelente y un gran recordatorio de todo lo que aprendí.\"",

    "How GoToTrafficSchool Works | Online Traffic School": "Cómo Funciona GoToTrafficSchool | Escuela de Tránsito en Línea",
    "Enroll online, complete your traffic school course at your own pace, and let GoToTrafficSchool process your certificate the right way.": "Inscríbase en línea, complete su curso de escuela de tránsito a su propio ritmo y deje que GoToTrafficSchool procese su certificado correctamente.",
    "Fast, Simple, and 100% Online": "Rápido, Sencillo y 100% En Línea",
    "Complete your traffic school quickly and easily — we handle everything the right way.": "Complete su escuela de tránsito de forma rápida y sencilla; nosotros manejamos todo correctamente.",
    "How it works": "Cómo funciona",
    "Enrol Online": "Inscríbase En Línea",
    "Sign up in minutes and get instant access to your state-approved traffic school course.": "Regístrese en minutos y obtenga acceso instantáneo a su curso de escuela de tránsito aprobado por el estado.",
    "You can pay now or start the course first to make sure it's right for you.": "Puede pagar ahora o comenzar el curso primero para asegurarse de que sea adecuado para usted.",
    "Complete Your Course Quickly": "Complete Su Curso Rápidamente",
    "Your course is divided into a set number of chapters based on your state's requirements.": "Su curso se divide en una cantidad determinada de capítulos según los requisitos de su estado.",
    "You'll complete short quizzes and a final exam along the way — all designed to be fast and easy.": "Completará cuestionarios cortos y un examen final durante el curso, todo diseñado para ser rápido y fácil.",
    "Most students finish quickly and pass on their first attempt.": "La mayoría de los estudiantes terminan rápidamente y aprueban en el primer intento.",
    "We Handle Your Certificate the Right Way": "Manejamos Su Certificado Correctamente",
    "Once you finish, we process your certificate of completion based on your state and court requirements.": "Una vez que termine, procesamos su certificado de finalización según los requisitos de su estado y tribunal.",
    "We either send it directly to the court or provide it to you with simple instructions to submit.": "Lo enviamos directamente al tribunal o se lo proporcionamos con instrucciones sencillas para entregarlo.",
    "100% Online — No Classroom Required": "100% En Línea - Sin Aula",
    "Start and Stop Anytime": "Comience y Deténgase Cuando Quiera",
    "Works on Phone, Tablet, or Computer": "Funciona en Teléfono, Tableta o Computadora",
    "Fast Certificate Processing": "Procesamiento Rápido de Certificados",
    "Fully State-Approved and Court Accepted": "Totalmente Aprobado por el Estado y Aceptado por Tribunales",

    "About Us | GoToTrafficSchool": "Sobre Nosotros | GoToTrafficSchool",
    "Learn about GoToTrafficSchool, one of the first online traffic school platforms, trusted by more than 10 million drivers.": "Conozca GoToTrafficSchool, una de las primeras plataformas de escuela de tránsito en línea, con la confianza de más de 10 millones de conductores.",
    "GoToTrafficSchool was founded in 2000 with one simple goal: make traffic school easier to complete.": "GoToTrafficSchool fue fundada en 2000 con una meta sencilla: hacer que la escuela de tránsito sea más fácil de completar.",
    "That same year, we launched one of the first fully online traffic school courses in California, giving drivers a convenient alternative to classroom learning.": "Ese mismo año, lanzamos uno de los primeros cursos de escuela de tránsito completamente en línea en California, ofreciendo a los conductores una alternativa conveniente al aprendizaje en aula.",
    "Open highway at sunset": "Carretera abierta al atardecer",
    "Students working together in a classroom": "Estudiantes trabajando juntos en un aula",
    "Our Story": "Nuestra Historia",
    "Since then, more than 10 million drivers have completed courses through our platform. What began in California has grown into a nationwide program, now approved in every state that allows online traffic school, defensive driving, or driver improvement courses.": "Desde entonces, más de 10 millones de conductores han completado cursos en nuestra plataforma. Lo que comenzó en California se ha convertido en un programa nacional, ahora aprobado en todos los estados que permiten escuela de tránsito, manejo defensivo o cursos de mejoramiento del conductor en línea.",
    "Depending on your state, the course may be called traffic school, defensive driving, or driver improvement. While the name may vary, the purpose is the same: help you meet court or DMV requirements, avoid points on your record, and potentially qualify for insurance benefits.": "Dependiendo de su estado, el curso puede llamarse escuela de tránsito, manejo defensivo o mejoramiento del conductor. Aunque el nombre puede variar, el propósito es el mismo: ayudarle a cumplir con requisitos del tribunal o DMV, evitar puntos en su historial y posiblemente calificar para beneficios de seguro.",
    "Simple, Flexible Learning": "Aprendizaje Simple y Flexible",
    "Everything about our platform is built around convenience": "Toda nuestra plataforma está diseñada pensando en la conveniencia",
    "Fully Self-Paced": "Totalmente A Su Ritmo",
    "No timers or waiting periods": "Sin temporizadores ni períodos de espera",
    "Any Device": "Cualquier Dispositivo",
    "Works on phone, tablet, or computer": "Funciona en teléfono, tableta o computadora",
    "Mobile Apps": "Aplicaciones Móviles",
    "iOS and Android apps available": "Aplicaciones disponibles para iOS y Android",
    "Device Switching": "Cambio de Dispositivo",
    "Start on one device and finish on another": "Comience en un dispositivo y termine en otro",
    "Auto-Save": "Guardado Automático",
    "Progress is saved automatically": "El progreso se guarda automáticamente",
    "Fast Processing": "Procesamiento Rápido",
    "Same-day certificate processing (based on your state)": "Procesamiento de certificado el mismo día (según su estado)",
    "Our Courses": "Nuestros Cursos",
    "We offer a range of state-approved programs designed to fit your needs:": "Ofrecemos una variedad de programas aprobados por el estado diseñados para adaptarse a sus necesidades:",
    "Traffic School / Defensive Driving / Insurance Discount": "Escuela de Tránsito / Manejo Defensivo / Descuento de Seguro",
    "Used to dismiss tickets, keep points off your record, or lower insurance rates.": "Se usa para desestimar multas, evitar puntos en su historial o reducir tarifas de seguro.",
    "Mature Driver / Senior Programs": "Programas para Conductores Maduros / Mayores",
    "Refresher courses to help experienced drivers stay sharp and qualify for insurance discounts where available.": "Cursos de repaso para ayudar a conductores con experiencia a mantenerse alerta y calificar para descuentos de seguro donde estén disponibles.",
    "Fleet Traffic Safety": "Seguridad Vial para Flotas",
    "Training programs for businesses that want to improve driver safety among employees.": "Programas de capacitación para empresas que desean mejorar la seguridad de conducción de sus empleados.",
    "Teen Driver Courses": "Cursos para Conductores Jóvenes",
    "Courses designed to meet state requirements for new drivers getting started.": "Cursos diseñados para cumplir con los requisitos estatales para nuevos conductores.",
    "Why Choose GoToTrafficSchool": "Por Qué Elegir GoToTrafficSchool",
    "Affordable Pricing": "Precios Económicos",
    "We keep our courses competitively priced. If you find a lower price for a comparable course, we will beat it.": "Mantenemos precios competitivos en nuestros cursos. Si encuentra un precio más bajo para un curso comparable, lo mejoraremos.",
    "Real Customer Support": "Soporte Real al Cliente",
    "When you call, you speak with a real person. No bots, no long email wait times.": "Cuando llama, habla con una persona real. Sin bots ni largas esperas por correo electrónico.",
    "Fast Certificate Delivery": "Entrega Rápida de Certificados",
    "Your certificate is processed and sent the same day based on your state's requirements.": "Su certificado se procesa y se envía el mismo día según los requisitos de su estado.",
    "Referral Benefits": "Beneficios por Referidos",
    "Refer friends or family and they receive a discount while you earn a referral fee.": "Refiera amigos o familiares y ellos reciben un descuento mientras usted gana una comisión por referido.",
    "Ready to Get Started?": "¿Listo para Comenzar?",
    "Join over 10 million satisfied drivers and complete your traffic school today.": "Únase a más de 10 millones de conductores satisfechos y complete su escuela de tránsito hoy.",

    "Partner Program | GoToTrafficSchool.com": "Programa de Socios | GoToTrafficSchool.com",
    "Partner with GoToTrafficSchool.com for court, attorney, insurance, white label, direct link, and referral traffic school solutions.": "Asóciese con GoToTrafficSchool.com para soluciones de escuela de tránsito para tribunales, abogados, aseguradoras, marca blanca, enlaces directos y referidos.",
    "Partner program hero": "Imagen principal del programa de socios",
    "Work With GoToTrafficSchool.com": "Trabaje Con GoToTrafficSchool.com",
    "GoToTrafficSchool.com partners with courts, government agencies, private businesses, and individuals to deliver convenient, compliant, and fully online traffic school solutions.": "GoToTrafficSchool.com se asocia con tribunales, agencias gubernamentales, empresas privadas e individuos para ofrecer soluciones de escuela de tránsito convenientes, conformes y completamente en línea.",
    "Whether you are looking to streamline operations, support safe drivers, or offer new engagement programs, we provide flexible partnership options designed to meet your needs.": "Ya sea que busque optimizar operaciones, apoyar a conductores seguros u ofrecer nuevos programas de participación, ofrecemos opciones flexibles de asociación diseñadas para satisfacer sus necesidades.",
    "Become a Partner": "Conviértase en Socio",
    "Business professionals shaking hands on a city terrace": "Profesionales de negocios estrechando manos en una terraza de la ciudad",
    "State-Approved Programs Across the U.S.": "Programas Aprobados por el Estado en Todo EE. UU.",
    "GoToTrafficSchool.com, powered by Cyberactive, offers state-approved traffic school and driver improvement programs across multiple states, serving commercial and private drivers.": "GoToTrafficSchool.com, impulsado por Cyberactive, ofrece programas de escuela de tránsito y mejoramiento del conductor aprobados por el estado en varios estados, para conductores comerciales y privados.",
    "Arizona, California, Delaware, Florida, Idaho, Indiana, Michigan, Missouri, New York, Oregon, Tennessee, Texas, Utah, Virginia, Washington, and Wisconsin.": "Arizona, California, Delaware, Florida, Idaho, Indiana, Michigan, Missouri, Nueva York, Oregón, Tennessee, Texas, Utah, Virginia, Washington y Wisconsin.",
    "People walking outside a state approved program building": "Personas caminando fuera de un edificio de programa aprobado por el estado",
    "For States Without State wide Approval": "Para Estados Sin Aprobación Estatal General",
    "In states where statewide approval is not in place, our courses may still be accepted through court partnerships. We work directly with courts and jurisdictions to provide approved traffic school solutions.": "En los estados donde no existe aprobación estatal general, nuestros cursos aún pueden ser aceptados mediante asociaciones con tribunales. Trabajamos directamente con tribunales y jurisdicciones para ofrecer soluciones aprobadas de escuela de tránsito.",
    "Wide view of a canyon and river landscape": "Vista amplia de un paisaje de cañón y río",
    "Partnership Opportunities": "Oportunidades de Asociación",
    "Courts": "Tribunales",
    "We partner with courts across the country to provide flexible and efficient traffic school solutions for their constituents.": "Nos asociamos con tribunales de todo el país para ofrecer soluciones flexibles y eficientes de escuela de tránsito para sus comunidades.",
    "Courts can work with us in several ways:": "Los tribunales pueden trabajar con nosotros de varias maneras:",
    "Link directly to our platform for easy access": "Enlazar directamente a nuestra plataforma para facilitar el acceso",
    "Offer courses through our white label program under their own branding": "Ofrecer cursos mediante nuestro programa de marca blanca bajo su propia marca",
    "Utilize our fee collection services to reduce administrative workload": "Usar nuestros servicios de cobro de tarifas para reducir la carga administrativa",
    "Distribute coupon codes for structured access": "Distribuir códigos de cupón para acceso estructurado",
    "Read More": "Leer Más",
    "Attorneys": "Abogados",
    "We work with traffic defense attorneys to provide simple and reliable traffic school options for their clients.": "Trabajamos con abogados de defensa de tránsito para ofrecer opciones sencillas y confiables de escuela de tránsito a sus clientes.",
    "Partnership options include:": "Las opciones de asociación incluyen:",
    "Custom referral links": "Enlaces de referido personalizados",
    "Discount and coupon codes": "Códigos de descuento y cupones",
    "White label solutions": "Soluciones de marca blanca",
    "Integration directly into your website": "Integración directa en su sitio web",
    "We also support certificate delivery to ensure clients meet court requirements efficiently.": "También apoyamos la entrega de certificados para asegurar que los clientes cumplan eficientemente con los requisitos del tribunal.",
    "Insurance Companies": "Compañías de Seguro",
    "We partner with insurance providers to support driver improvement and risk reduction programs.": "Nos asociamos con aseguradoras para apoyar programas de mejoramiento del conductor y reducción de riesgo.",
    "Our courses can be used for:": "Nuestros cursos pueden usarse para:",
    "Good driver discounts": "Descuentos para buenos conductores",
    "Point reduction programs": "Programas de reducción de puntos",
    "Driver safety initiatives": "Iniciativas de seguridad vial",
    "We provide flexible integration options and can support certificate delivery based on program requirements.": "Ofrecemos opciones flexibles de integración y podemos apoyar la entrega de certificados según los requisitos del programa.",
    "Other Businesses and Organizations": "Otras Empresas y Organizaciones",
    "We work with organizations of all sizes looking to offer traffic school as part of their services.": "Trabajamos con organizaciones de todos los tamaños que desean ofrecer escuela de tránsito como parte de sus servicios.",
    "Whether you are a business, platform, or organization, we offer:": "Ya sea una empresa, plataforma u organización, ofrecemos:",
    "Referral and link-based partnerships": "Asociaciones basadas en referidos y enlaces",
    "Custom integration opportunities": "Oportunidades de integración personalizada",
    "Scalable solutions to fit your needs": "Soluciones escalables para sus necesidades",
    "Certificate delivery options are also available and can be tailored to your needs.": "También hay opciones de entrega de certificados que pueden adaptarse a sus necesidades.",
    "How Our Partnerships Work": "Cómo Funcionan Nuestras Asociaciones",
    "We offer multiple ways for partners to integrate and offer traffic school programs, depending on their needs.": "Ofrecemos varias formas para que los socios integren y ofrezcan programas de escuela de tránsito, según sus necesidades.",
    "White Label Programs": "Programas de Marca Blanca",
    "Our white label solution allows partners to offer traffic school under their own brand while we manage the backend.": "Nuestra solución de marca blanca permite a los socios ofrecer escuela de tránsito bajo su propia marca mientras nosotros gestionamos la parte operativa.",
    "Fully branded experience for your organization": "Experiencia completamente personalizada para su organización",
    "Seamless course delivery and reporting": "Entrega de cursos e informes sin complicaciones",
    "No need to manage content or compliance": "Sin necesidad de administrar contenido ni cumplimiento",
    "Learn more about our": "Obtenga más información sobre nuestro",
    "white label program": "programa de marca blanca",
    "Optional demo or explainer video can be included here.": "Aquí se puede incluir una demostración opcional o un video explicativo.",
    ". Optional demo or explainer video can be included here.": ". Aquí se puede incluir una demostración opcional o un video explicativo.",
    "Modern office screen showing digital interface graphics": "Pantalla de oficina moderna que muestra gráficos de interfaz digital",
    "Direct Links and Referral Integration": "Enlaces Directos e Integración de Referidos",
    "Partners can easily direct users to our platform through custom links or integrations.": "Los socios pueden dirigir fácilmente a los usuarios a nuestra plataforma mediante enlaces personalizados o integraciones.",
    "Simple to implement": "Fácil de implementar",
    "No technical setup required": "No requiere configuración técnica",
    "Track participation and usage": "Seguimiento de participación y uso",
    "Digital diagram showing a central link hub connected to referral integrations": "Diagrama digital que muestra un centro de enlaces conectado a integraciones de referidos",
    "Referral Program": "Programa de Referidos",
    "We offer a simple referral program for individuals and organizations who would like to share our services.": "Ofrecemos un programa de referidos sencillo para personas y organizaciones que desean compartir nuestros servicios.",
    "Earn $5 for each successful referral": "Gane $5 por cada referido exitoso",
    "Your referral receives a $2 discount": "Su referido recibe un descuento de $2",
    "Easy-to-use links and codes make it simple to get started": "Enlaces y códigos fáciles de usar hacen que comenzar sea sencillo",
    "It is an easy way to share a trusted program while offering value to others.": "Es una forma sencilla de compartir un programa confiable mientras ofrece valor a otros.",
    "Ready to get started?": "¿Listo para comenzar?",
    "Click here to receive your referral code.": "Haga clic aquí para recibir su código de referido.",
    "Professionals reviewing a referral program presentation": "Profesionales revisando una presentación de programa de referidos",
    "Get Started": "Comenzar",
    "Interested in partnering with GoToTrafficSchool.com?": "¿Le interesa asociarse con GoToTrafficSchool.com?",
    "Fill out the form below and one of our partnership specialists will reach out to discuss the best solution for your needs.": "Complete el formulario a continuación y uno de nuestros especialistas en asociaciones se comunicará para hablar sobre la mejor solución para sus necesidades.",
    "Full Name": "Nombre Completo",
    "Email Address": "Correo Electrónico",
    "Phone": "Teléfono",
    "(optional)": "(opcional)",
    "Topic": "Tema",
    "Your full name": "Su nombre completo",
    "Select a topic": "Seleccione un tema",
    "White Label Program": "Programa de Marca Blanca",

    "Contact Us | GoToTrafficSchool": "Contáctenos | GoToTrafficSchool",
    "Contact GoToTrafficSchool by phone, email, or message for help with online traffic school courses, certificates, and account questions.": "Contacte a GoToTrafficSchool por teléfono, correo electrónico o mensaje para recibir ayuda con cursos de escuela de tránsito en línea, certificados y preguntas de cuenta.",
    "Get in Touch": "Póngase en Contacto",
    "Please contact us by phone, email or live-chat if you have a question.": "Comuníquese con nosotros por teléfono, correo electrónico o chat en vivo si tiene alguna pregunta.",
    "People standing near a contact us sign": "Personas junto a un letrero de contacto",
    "Contact form": "Formulario de contacto",
    "Full name": "Nombre completo",
    "Email address": "Correo electrónico",
    "Course enrollment": "Inscripción al curso",
    "Certificate status": "Estado del certificado",
    "Account or login help": "Ayuda con cuenta o inicio de sesión",
    "Billing question": "Pregunta de facturación",
    "Partner program": "Programa de socios",
    "Other": "Otro",
    "Message": "Mensaje",
    "Please do not include sensitive information such as credit card numbers.": "No incluya información confidencial como números de tarjeta de crédito.",
    "Please enter a 10-digit phone number, or leave the phone field blank.": "Ingrese un número de teléfono de 10 dígitos o deje el campo de teléfono en blanco.",
    "Submitting...": "Enviando...",
    "Thanks. Your message has been sent to our support team.": "Gracias. Su mensaje ha sido enviado a nuestro equipo de soporte.",
    "We could not send your message. Please try again.": "No pudimos enviar su mensaje. Inténtelo de nuevo.",
    "Contact Information": "Información de Contacto",
    "Other ways to reach us": "Otras formas de contactarnos",
    "Phone": "Teléfono",
    "Mon-Fri: 5AM-10PM PT": "Lun-Vie: 5AM-10PM PT",
    "Email": "Correo Electrónico",
    "We typically respond within 24 hours": "Normalmente respondemos dentro de 24 horas",
    "Office Address": "Dirección de Oficina",

    "Traffic School FAQ | GoToTrafficSchool": "Preguntas Frecuentes de Escuela de Tránsito | GoToTrafficSchool",
    "Find answers to common questions about GoToTrafficSchool courses, enrollment, eligibility, tickets, points, insurance, and certificates.": "Encuentre respuestas a preguntas frecuentes sobre cursos, inscripción, elegibilidad, multas, puntos, seguro y certificados de GoToTrafficSchool.",
    "Traffic school FAQ hero": "Imagen principal de preguntas frecuentes de escuela de tránsito",
    "Traffic School FAQ": "Preguntas Frecuentes de Escuela de Tránsito",
    "Find answers to common questions about our courses, enrollment, and certificates.": "Encuentre respuestas a preguntas comunes sobre nuestros cursos, inscripción y certificados.",
    "Car driving questions infographic with before driving, on the road, and maintenance topics": "Infografía de preguntas de conducción con temas antes de manejar, en la carretera y mantenimiento",
    "General Questions": "Preguntas Generales",
    "What is traffic school?": "¿Qué es la escuela de tránsito?",
    "Traffic school is a driver education course that reviews safe driving habits, traffic laws, and defensive driving practices. Many drivers take it to satisfy a court, ticket, or insurance requirement.": "La escuela de tránsito es un curso de educación vial que repasa hábitos de manejo seguro, leyes de tránsito y prácticas de manejo defensivo. Muchos conductores lo toman para cumplir un requisito de tribunal, multa o seguro.",
    "What is an online traffic school?": "¿Qué es una escuela de tránsito en línea?",
    "Online traffic school lets you complete the approved course through a web-based program instead of attending a classroom session.": "La escuela de tránsito en línea le permite completar el curso aprobado mediante un programa web en lugar de asistir a una clase presencial.",
    "Is online traffic school legitimate?": "¿Es legítima la escuela de tránsito en línea?",
    "Yes, where online traffic school is accepted by your court, state, or agency. Always choose the location connected to your ticket and confirm eligibility before you enroll.": "Sí, donde la escuela de tránsito en línea sea aceptada por su tribunal, estado o agencia. Elija siempre la ubicación relacionada con su multa y confirme su elegibilidad antes de inscribirse.",
    "When do I need to pay?": "¿Cuándo debo pagar?",
    "Payment is handled during enrollment or before certificate processing, depending on the course. You can review course details before checkout.": "El pago se realiza durante la inscripción o antes del procesamiento del certificado, según el curso. Puede revisar los detalles del curso antes de pagar.",
    "Who should take traffic school?": "¿Quién debe tomar escuela de tránsito?",
    "Drivers commonly take traffic school after receiving an eligible ticket, when ordered by a court, or when seeking a defensive driving or insurance-related benefit.": "Los conductores suelen tomar escuela de tránsito después de recibir una multa elegible, cuando lo ordena un tribunal o cuando buscan un beneficio relacionado con manejo defensivo o seguro.",
    "Eligibility": "Elegibilidad",
    "Am I eligible for traffic school?": "¿Soy elegible para escuela de tránsito?",
    "Eligibility depends on your state, court, ticket type, driving record, and how recently you completed a traffic school course.": "La elegibilidad depende de su estado, tribunal, tipo de multa, historial de manejo y qué tan recientemente completó un curso de escuela de tránsito.",
    "How often can I take traffic school?": "¿Con qué frecuencia puedo tomar escuela de tránsito?",
    "Rules vary by state and court. Some jurisdictions limit how frequently traffic school can be used for ticket dismissal or point benefits.": "Las reglas varían por estado y tribunal. Algunas jurisdicciones limitan la frecuencia con que la escuela de tránsito puede usarse para desestimación de multas o beneficios de puntos.",
    "Can I take traffic school for any ticket?": "¿Puedo tomar escuela de tránsito por cualquier multa?",
    "Not every citation qualifies. Serious violations, commercial driver restrictions, or recent traffic school completions can affect eligibility.": "No todas las citaciones califican. Infracciones graves, restricciones para conductores comerciales o cursos recientes de escuela de tránsito pueden afectar la elegibilidad.",
    "Can CDL drivers take traffic school?": "¿Pueden los conductores con CDL tomar escuela de tránsito?",
    "Commercial driver eligibility is often restricted and depends on the jurisdiction and violation. CDL drivers should confirm directly with the court or agency.": "La elegibilidad de conductores comerciales suele estar restringida y depende de la jurisdicción y la infracción. Los conductores con CDL deben confirmar directamente con el tribunal o la agencia.",
    "Can I take traffic school without a ticket?": "¿Puedo tomar escuela de tránsito sin una multa?",
    "In some cases, drivers take defensive driving voluntarily for education or insurance purposes. Availability depends on your state and provider requirements.": "En algunos casos, los conductores toman manejo defensivo voluntariamente por educación o motivos de seguro. La disponibilidad depende de su estado y de los requisitos del proveedor.",
    "Tickets & Court": "Multas y Tribunal",
    "Do I still have to pay my ticket if I take traffic school?": "¿Aún debo pagar mi multa si tomo escuela de tránsito?",
    "Usually, yes. Traffic school is separate from court fines, fees, and deadlines unless your court gives different instructions.": "Por lo general, sí. La escuela de tránsito es independiente de las multas, cargos y fechas límite del tribunal, a menos que su tribunal indique algo diferente.",
    "Do I have to go to court to take traffic school?": "¿Debo ir al tribunal para tomar escuela de tránsito?",
    "Many drivers can request or complete traffic school online, but some courts require approval first. Follow the instructions on your citation or court notice.": "Muchos conductores pueden solicitar o completar escuela de tránsito en línea, pero algunos tribunales requieren aprobación previa. Siga las instrucciones de su citación o aviso del tribunal.",
    "Do I have to plead guilty to take traffic school?": "¿Debo declararme culpable para tomar escuela de tránsito?",
    "Requirements vary by court. Some courts require a plea or payment before traffic school is authorized.": "Los requisitos varían según el tribunal. Algunos tribunales requieren una declaración o pago antes de autorizar la escuela de tránsito.",
    "What happens if I ignore a traffic ticket?": "¿Qué pasa si ignoro una multa de tránsito?",
    "Ignoring a ticket can lead to additional fees, missed deadlines, license consequences, or court action. Contact the court if you are unsure what to do next.": "Ignorar una multa puede causar cargos adicionales, fechas límite perdidas, consecuencias para su licencia o acción judicial. Comuníquese con el tribunal si no sabe qué hacer después.",
    "Can traffic school dismiss my ticket?": "¿La escuela de tránsito puede desestimar mi multa?",
    "Traffic school can help satisfy a ticket dismissal requirement when your court allows it and you complete all required steps on time.": "La escuela de tránsito puede ayudar a cumplir un requisito de desestimación de multa cuando su tribunal lo permite y usted completa todos los pasos requeridos a tiempo.",
    "Points & Insurance": "Puntos y Seguro",
    "Does traffic school remove points from my record?": "¿La escuela de tránsito elimina puntos de mi historial?",
    "Point rules vary by state. Some programs mask, reduce, or prevent points, while others only satisfy a court requirement.": "Las reglas de puntos varían por estado. Algunos programas ocultan, reducen o previenen puntos, mientras otros solo cumplen un requisito del tribunal.",
    "Will my insurance go up if I take traffic school?": "¿Subirá mi seguro si tomo escuela de tránsito?",
    "Traffic school may help in some situations, but insurance decisions are made by your provider and depend on your policy, state, and driving record.": "La escuela de tránsito puede ayudar en algunas situaciones, pero las decisiones de seguro las toma su proveedor y dependen de su póliza, estado e historial de manejo.",
    "Can traffic school lower my insurance?": "¿La escuela de tránsito puede reducir mi seguro?",
    "Some insurers offer defensive driving discounts. Check with your insurance company before enrolling if a discount is your main goal.": "Algunas aseguradoras ofrecen descuentos por manejo defensivo. Consulte con su compañía de seguros antes de inscribirse si su objetivo principal es obtener un descuento.",
    "How long do points stay on my record?": "¿Cuánto tiempo permanecen los puntos en mi historial?",
    "Point retention periods vary by state and violation type. Your motor vehicle agency or court can provide the rule for your record.": "Los períodos de retención de puntos varían por estado y tipo de infracción. Su agencia de vehículos motorizados o tribunal puede darle la regla para su historial.",
    "Course Details": "Detalles del Curso",
    "How long is traffic school?": "¿Cuánto dura la escuela de tránsito?",
    "Course length depends on state and court requirements. Online courses are usually divided into sections so you can work through them steadily.": "La duración del curso depende de los requisitos del estado y tribunal. Los cursos en línea suelen dividirse en secciones para que pueda avanzar gradualmente.",
    "Is traffic school self-paced?": "¿La escuela de tránsito es a mi propio ritmo?",
    "Yes. The online course is designed so you can progress at your own pace, subject to any timing rules set by your state or court.": "Sí. El curso en línea está diseñado para que avance a su propio ritmo, sujeto a cualquier regla de tiempo establecida por su estado o tribunal.",
    "Can I take traffic school on my phone?": "¿Puedo tomar escuela de tránsito en mi teléfono?",
    "The course is built for online access, and many students use a phone or tablet. A stable connection and compatible browser are recommended.": "El curso está diseñado para acceso en línea, y muchos estudiantes usan un teléfono o tableta. Se recomienda una conexión estable y un navegador compatible.",
    "Can I log in and out of the course?": "¿Puedo entrar y salir del curso?",
    "Yes. Your progress is saved so you can sign out and return later from a compatible device.": "Sí. Su progreso se guarda para que pueda cerrar sesión y regresar más tarde desde un dispositivo compatible.",
    "Do I have to finish the course in one sitting?": "¿Debo terminar el curso de una sola vez?",
    "No. You can complete the course over multiple sessions as long as you meet your court or agency deadline.": "No. Puede completar el curso en varias sesiones siempre que cumpla la fecha límite de su tribunal o agencia.",
    "Is traffic school hard?": "¿Es difícil la escuela de tránsito?",
    "The course is designed to be clear and manageable. It reviews practical driving topics and explains what to expect as you go.": "El curso está diseñado para ser claro y manejable. Repasa temas prácticos de manejo y explica qué esperar durante el proceso.",
    "What do you learn in traffic school?": "¿Qué se aprende en la escuela de tránsito?",
    "Topics commonly include defensive driving, traffic signs and laws, avoiding collisions, safe following distances, and responsible driving decisions.": "Los temas suelen incluir manejo defensivo, señales y leyes de tránsito, prevención de choques, distancias seguras de seguimiento y decisiones responsables al manejar.",
    "Point handling depends on state rules and the agency that manages your driving record.": "El manejo de puntos depende de las reglas estatales y de la agencia que administra su historial de manejo.",
    "Taking traffic school does not automatically determine insurance pricing. Contact your insurer for policy-specific guidance.": "Tomar escuela de tránsito no determina automáticamente el precio de su seguro. Comuníquese con su aseguradora para obtener orientación específica de su póliza.",
    "Some insurance companies recognize approved defensive driving courses for discounts, but availability is not universal.": "Algunas compañías de seguro reconocen cursos aprobados de manejo defensivo para descuentos, pero la disponibilidad no es universal.",
    "The length of time points remain on a record depends on your state and the type of violation.": "El tiempo que los puntos permanecen en un historial depende de su estado y del tipo de infracción.",

    "Court Traffic School Online Defensive Driving | GoToTrafficSchool": "Escuela de Tránsito y Manejo Defensivo en Línea del Tribunal | GoToTrafficSchool",
    "Find court information and start an online traffic school, defensive driving, ticket dismissal, driver improvement, or point reduction course with GoToTrafficSchool.com.": "Encuentre información del tribunal y comience un curso en línea de escuela de tránsito, manejo defensivo, desestimación de multas, mejoramiento del conductor o reducción de puntos con GoToTrafficSchool.com.",
    "Court traffic school hero": "Imagen principal de escuela de tránsito del tribunal",
    "Traffic School": "Escuela de Tránsito",
    "Online and Defensive Driving": "En Línea y Manejo Defensivo",
    "Need your": "¿Necesita que su",
    "ticket": "multa",
    "dismissed?": "sea desestimada?",
    "If you received a traffic ticket through": "Si recibió una multa de tránsito a través de",
    "in": "en",
    "the court may require you to complete a traffic": "el tribunal puede requerir que complete un programa de",
    "school program or a defensive driving course": "escuela de tránsito o un curso de manejo defensivo",
    "State Selected:": "Estado Seleccionado:",
    "County Selected:": "Condado Seleccionado:",
    "Court Selected:": "Tribunal Seleccionado:",
    "change": "cambiar",
    "Driver view from inside a car on an open road": "Vista del conductor desde el interior de un auto en una carretera abierta",
    "Lowest price guarantee": "Garantía del precio más bajo",
    "Course highlights": "Aspectos destacados del curso",
    "3 Easy Steps!": "¡3 Pasos Fáciles!",
    "Sign Up": "Regístrese",
    "Complete the Course Online": "Complete el Curso en Línea",
    "Get Your Certificate": "Obtenga Su Certificado",
    "Welcome to the": "Bienvenido al",
    "Court Directory. At": "Directorio de Tribunales. En",
    "we want to make sure that you have all the information you need in order to complete your [Court] [State] Online Traffic School, Online Defensive Driving, Online Ticket Dismissal, Online Driver Improvement or Online Point Reduction course in a timely manner.": "queremos asegurarnos de que tenga toda la información que necesita para completar a tiempo su curso de [Court] [State] Escuela de Tránsito en Línea, Manejo Defensivo en Línea, Desestimación de Multa en Línea, Mejoramiento del Conductor en Línea o Reducción de Puntos en Línea.",
    "View Location of Court": "Ver Ubicación del Tribunal",
    "FREQUENTLY ASKED QUESTIONS": "PREGUNTAS FRECUENTES",
    "Can I mail in a check or money order to pay for my [County Court Name] online traffic school course?": "¿Puedo enviar un cheque o giro postal para pagar mi curso de escuela de tránsito en línea de [County Court Name]?",
    "Yes. Payment options can vary by course and court requirement. You can start registration online and review the payment choices before finishing enrollment.": "Sí. Las opciones de pago pueden variar según el curso y los requisitos del tribunal. Puede iniciar la inscripción en línea y revisar las opciones de pago antes de finalizarla.",
    "What shipping options are available for my [County Court Name] certificate of completion?": "¿Qué opciones de envío están disponibles para mi certificado de finalización de [County Court Name]?",
    "Standard and expedited delivery options may be available where permitted. The options shown during registration reflect the course and court selected.": "Puede haber opciones de entrega estándar y urgente donde esté permitido. Las opciones mostradas durante la inscripción reflejan el curso y tribunal seleccionados.",
    "Is my personal information safe with GoToTrafficSchool.com?": "¿Mi información personal está segura con GoToTrafficSchool.com?",
    "GoToTrafficSchool.com uses secure online registration and protects student information according to its privacy and security practices.": "GoToTrafficSchool.com utiliza inscripción segura en línea y protege la información del estudiante de acuerdo con sus prácticas de privacidad y seguridad.",
    "I have already registered. How do I login?": "Ya me registré. ¿Cómo inicio sesión?",
    "Use the Log In button at the top of this page and enter the username and password created during registration.": "Use el botón Iniciar Sesión en la parte superior de esta página e ingrese el nombre de usuario y la contraseña creados durante la inscripción.",
    "Can GoToTrafficSchool.com really help me get my ticket dismissed through the [County Court Name] online defensive driving course?": "¿GoToTrafficSchool.com realmente puede ayudarme a desestimar mi multa mediante el curso en línea de manejo defensivo de [County Court Name]?",
    "If your court allows an online defensive driving or traffic school course for dismissal, GoToTrafficSchool.com can help you complete the course requirement online.": "Si su tribunal permite un curso en línea de manejo defensivo o escuela de tránsito para desestimación, GoToTrafficSchool.com puede ayudarle a completar el requisito en línea.",
    "I'm trying to keep costs down. Is GoToTrafficSchool.com an affordable option for [County Court Name] online traffic school?": "Estoy tratando de reducir costos. ¿GoToTrafficSchool.com es una opción económica para la escuela de tránsito en línea de [County Court Name]?",
    "The course is designed to be affordable, with clear pricing shown before checkout and no credit card required to try the course.": "El curso está diseñado para ser económico, con precios claros antes del pago y sin requerir tarjeta de crédito para probarlo.",
    "Will the [County Court Name] online traffic school course fit my schedule?": "¿El curso en línea de escuela de tránsito de [County Court Name] se ajustará a mi horario?",
    "Yes. The course is self-paced, available online, and built so you can sign in and continue when it works for you.": "Sí. El curso es a su propio ritmo, está disponible en línea y está diseñado para que pueda iniciar sesión y continuar cuando le convenga.",
    "Will my insurance company reduce my premiums if I complete the [County Court Name] online defensive driving course?": "¿Mi compañía de seguro reducirá mis primas si completo el curso en línea de manejo defensivo de [County Court Name]?",
    "Insurance discounts depend on your provider, policy, and state rules. Check with your insurer before registering if your goal is a premium reduction.": "Los descuentos de seguro dependen de su proveedor, póliza y reglas estatales. Consulte con su aseguradora antes de registrarse si su objetivo es reducir la prima.",
    "Can I use multiple computers to complete my [County Court Name] online insurance reduction course?": "¿Puedo usar varias computadoras para completar mi curso en línea de reducción de seguro de [County Court Name]?",
    "In most cases, yes. You can log in from a compatible device with internet access and continue from your saved progress.": "En la mayoría de los casos, sí. Puede iniciar sesión desde un dispositivo compatible con acceso a internet y continuar desde su progreso guardado.",
    "Do I have to complete the [County Court Name] online defensive driving course all at once?": "¿Debo completar el curso en línea de manejo defensivo de [County Court Name] de una sola vez?",
    "No. You may exit and return later. Your course progress is saved as you move through the program.": "No. Puede salir y regresar más tarde. Su progreso se guarda mientras avanza por el programa.",
    "Where will my certificate of completion be sent after I finish the [County Court Name] online traffic school course?": "¿A dónde se enviará mi certificado de finalización después de terminar el curso en línea de escuela de tránsito de [County Court Name]?",
    "Certificate delivery depends on the court and course selected. During registration, you will see whether the certificate is sent to you, the court, or both.": "La entrega del certificado depende del tribunal y curso seleccionados. Durante la inscripción verá si el certificado se le envía a usted, al tribunal o a ambos.",
    "I don't think I'll be able to finish the course. Is my fee refundable?": "Creo que no podré terminar el curso. ¿Mi tarifa es reembolsable?",
    "Refund eligibility depends on course progress, certificate processing, and applicable rules. Review the refund policy during registration or contact support.": "La elegibilidad de reembolso depende del progreso del curso, procesamiento del certificado y reglas aplicables. Revise la política de reembolso durante la inscripción o contacte a soporte.",
    "I have difficulty reading large amounts of text. Does the course accommodate that?": "Tengo dificultad para leer grandes cantidades de texto. ¿El curso se adapta a eso?",
    "The online course is organized into manageable sections. Availability of audio or other accommodations can vary by course.": "El curso en línea está organizado en secciones manejables. La disponibilidad de audio u otras adaptaciones puede variar según el curso.",
    "How do I know if GoToTrafficSchool.com is accepted by my court?": "¿Cómo sé si GoToTrafficSchool.com es aceptado por mi tribunal?",
    "Start by selecting your state, county, and court. You can also confirm directly with the court before enrolling.": "Comience seleccionando su estado, condado y tribunal. También puede confirmar directamente con el tribunal antes de inscribirse.",
    "I took a traffic school course about 12 months ago. Does that affect my eligibility?": "Tomé un curso de escuela de tránsito hace unos 12 meses. ¿Eso afecta mi elegibilidad?",
    "Eligibility rules vary by state and court. Check with your court if you recently completed traffic school or defensive driving.": "Las reglas de elegibilidad varían por estado y tribunal. Consulte con su tribunal si completó recientemente escuela de tránsito o manejo defensivo.",
    "How long are the quizzes in the online course?": "¿Qué tan largos son los cuestionarios del curso en línea?",
    "Quiz length depends on the state and course rules. The course explains each quiz before you begin.": "La duración de los cuestionarios depende del estado y las reglas del curso. El curso explica cada cuestionario antes de comenzar.",
    "Can I take the course to remove points from my driving record?": "¿Puedo tomar el curso para eliminar puntos de mi historial de manejo?",
    "Point reduction availability varies by state, court, and agency. Confirm your eligibility before starting the course.": "La disponibilidad de reducción de puntos varía por estado, tribunal y agencia. Confirme su elegibilidad antes de comenzar el curso.",
    "Does the course I take have to match the state where I received my ticket?": "¿El curso que tome debe coincidir con el estado donde recibí mi multa?",
    "Usually, yes. Choose the state and court connected to your ticket unless your court gives you different instructions.": "Por lo general, sí. Elija el estado y tribunal relacionados con su multa, a menos que su tribunal le dé instrucciones diferentes.",
    "Can I still enroll if my traffic school due date is fewer than 10 days away?": "¿Todavía puedo inscribirme si la fecha límite de mi escuela de tránsito es en menos de 10 días?",
    "You may still be able to enroll, but expedited certificate delivery or court extensions may be needed. Check your deadline carefully.": "Es posible que aún pueda inscribirse, pero puede necesitar entrega urgente del certificado o una extensión del tribunal. Revise cuidadosamente su fecha límite.",
    "My court ordered me to attend traffic school. Can I use GoToTrafficSchool.com to satisfy that requirement?": "Mi tribunal me ordenó asistir a escuela de tránsito. ¿Puedo usar GoToTrafficSchool.com para cumplir ese requisito?",
    "If your court accepts the selected GoToTrafficSchool.com course, you can use it to satisfy the requirement. Confirm with the court if you are unsure.": "Si su tribunal acepta el curso seleccionado de GoToTrafficSchool.com, puede usarlo para cumplir el requisito. Confirme con el tribunal si no está seguro.",
    "What are the advantages of taking the course online versus a traditional classroom program?": "¿Cuáles son las ventajas de tomar el curso en línea frente a un programa tradicional en aula?",
    "Online traffic school lets you work from home, pause and return later, and complete the course around your schedule.": "La escuela de tránsito en línea le permite trabajar desde casa, pausar y regresar más tarde, y completar el curso según su horario.",
    "Can I use the course to dismiss more than one ticket?": "¿Puedo usar el curso para desestimar más de una multa?",
    "Most courts apply a course completion to one eligible citation. Ask your court if you have multiple tickets.": "La mayoría de los tribunales aplican la finalización de un curso a una citación elegible. Pregunte a su tribunal si tiene varias multas.",
    "Will I need to verify my identity during the course?": "¿Tendré que verificar mi identidad durante el curso?",
    "Some state or court programs require identity verification. If required, the course will guide you through it.": "Algunos programas estatales o de tribunal requieren verificación de identidad. Si es obligatorio, el curso le guiará durante el proceso.",
    "What if I don't have reliable internet access? Are other course formats available?": "¿Qué pasa si no tengo acceso confiable a internet? ¿Hay otros formatos de curso disponibles?",
    "Course formats vary by state and provider. Contact support to review the available options for your selected court.": "Los formatos de curso varían por estado y proveedor. Contacte a soporte para revisar las opciones disponibles para su tribunal seleccionado.",
    "What do I do if I forget my course password?": "¿Qué hago si olvido la contraseña de mi curso?",
    "Use the password recovery link on the member login page or contact customer support for help accessing your account.": "Use el enlace de recuperación de contraseña en la página de inicio de sesión de miembros o contacte a atención al cliente para obtener ayuda con su cuenta.",
    "I registered months ago but haven't finished. How long do I have before my account expires?": "Me registré hace meses pero no he terminado. ¿Cuánto tiempo tengo antes de que expire mi cuenta?",
    "Expiration rules vary by course and court deadline. Log in to check your account status or contact support before your due date.": "Las reglas de vencimiento varían según el curso y la fecha límite del tribunal. Inicie sesión para revisar el estado de su cuenta o contacte a soporte antes de su fecha límite.",
    "Is my personal information protected when I register?": "¿Mi información personal está protegida cuando me registro?",
    "Yes. Registration is handled through secure forms, and your information is used to enroll you and process course completion.": "Sí. La inscripción se maneja mediante formularios seguros, y su información se usa para inscribirlo y procesar la finalización del curso.",
    "I have an unreliable internet connection. Will lost connection time be counted against me?": "Tengo una conexión a internet poco confiable. ¿El tiempo de conexión perdida contará en mi contra?",
    "Your progress is saved during the course. If your connection drops, sign back in and continue from the most recent saved point.": "Su progreso se guarda durante el curso. Si se pierde la conexión, vuelva a iniciar sesión y continúe desde el punto guardado más reciente.",
    "Why Pick GoToTrafficSchool.com?": "¿Por Qué Elegir GoToTrafficSchool.com?",
    "State Approved": "Aprobado por el Estado",
    "Instant Enrollment": "Inscripción Instantánea",
    "Designed Specifically for California Drivers": "Diseñado Específicamente para Conductores de California",
    "Clear Upfront Pricing": "Precios Claros Desde el Inicio",
    "\"I like the course just the way it is.\"": "\"Me gusta el curso tal como está.\"",
    "\"I think it is good the way it is.\"": "\"Creo que está bien tal como está.\"",
    "\"It was an easy program to follow and I liked that I could finish at my own pace.\"": "\"Fue un programa fácil de seguir y me gustó poder terminar a mi propio ritmo.\"",
    "Start your online traffic school course now and get your certificate fast.": "Comience ahora su curso de escuela de tránsito en línea y obtenga su certificado rápidamente.",
    "Featured in": "Destacado en",
    "Media mention": "Mención en medios",

    "Online Traffic School – Fast, Approved, Affordable | GoToTrafficSchool": "Escuela de Tránsito en Línea - Rápida, Aprobada y Económica | GoToTrafficSchool",
    "Loading…": "Cargando...",
    "Loading...": "Cargando...",
    "Loading testimonials...": "Cargando testimonios...",
    "Please wait": "Por favor espere",
    "Fetching latest reviews": "Obteniendo reseñas recientes"
  };

  const ATTRIBUTES = ["alt", "aria-label", "placeholder", "title"];
  const textOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  let currentLanguage = "en";
  let observer;
  let applying = false;

  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim();

  function translate(value) {
    const key = normalize(value);
    const reviewDate = key.match(/^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})$/);
    if (reviewDate) {
      const months = {
        January: "enero",
        February: "febrero",
        March: "marzo",
        April: "abril",
        May: "mayo",
        June: "junio",
        July: "julio",
        August: "agosto",
        September: "septiembre",
        October: "octubre",
        November: "noviembre",
        December: "diciembre"
      };
      return `${months[reviewDate[1]]} ${reviewDate[2]}`;
    }

    const starLabel = key.match(/^([0-5](?:\.\d+)?) out of 5 stars$/);
    if (starLabel) {
      return `${starLabel[1]} de 5 estrellas`;
    }

    return ES[key] || null;
  }

  function preserveOuterWhitespace(original, translated) {
    const leading = String(original).match(/^\s*/)[0];
    const trailing = String(original).match(/\s*$/)[0];
    return leading + translated + trailing;
  }

  function getSavedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (error) {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // Storage can fail in private browsing; the current page still updates.
    }
  }

  function languageFromSelectValue(value) {
    return String(value).toLowerCase().startsWith("spanish") ? "es" : "en";
  }

  function processTextNode(node) {
    const original = textOriginals.get(node) || node.nodeValue;
    if (!textOriginals.has(node)) {
      textOriginals.set(node, original);
    }

    if (!normalize(original)) return;

    const translated = currentLanguage === "es" ? translate(original) : null;
    const nextValue = translated ? preserveOuterWhitespace(original, translated) : original;

    if (node.nodeValue !== nextValue) {
      node.nodeValue = nextValue;
    }
  }

  function processElementAttributes(element) {
    ATTRIBUTES.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;

      let originals = attrOriginals.get(element);
      if (!originals) {
        originals = {};
        attrOriginals.set(element, originals);
      }

      if (!Object.prototype.hasOwnProperty.call(originals, attribute)) {
        originals[attribute] = element.getAttribute(attribute);
      }

      const original = originals[attribute];
      const translated = currentLanguage === "es" ? translate(original) : null;
      const nextValue = translated || original;

      if (element.getAttribute(attribute) !== nextValue) {
        element.setAttribute(attribute, nextValue);
      }
    });
  }

  function walk(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      processTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

    if (root.nodeType === Node.ELEMENT_NODE) {
      const tagName = root.tagName.toLowerCase();
      if (["script", "style", "noscript", "template"].includes(tagName)) return;
      processElementAttributes(root);
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const tagName = node.tagName.toLowerCase();
            if (["script", "style", "noscript", "template"].includes(tagName)) {
              return NodeFilter.FILTER_REJECT;
            }
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node = walker.nextNode();
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        processTextNode(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        processElementAttributes(node);
      }
      node = walker.nextNode();
    }
  }

  function updateMeta() {
    const originalTitle = document.documentElement.dataset.gttsOriginalTitle || document.title;
    document.documentElement.dataset.gttsOriginalTitle = originalTitle;
    const translatedTitle = currentLanguage === "es" ? translate(originalTitle) : null;
    document.title = translatedTitle || originalTitle;

    const description = document.querySelector('meta[name="description"]');
    if (!description) return;

    const originalDescription = description.dataset.gttsOriginalContent || description.getAttribute("content");
    description.dataset.gttsOriginalContent = originalDescription;
    const translatedDescription = currentLanguage === "es" ? translate(originalDescription) : null;
    description.setAttribute("content", translatedDescription || originalDescription);
  }

  function syncSelects() {
    document.querySelectorAll(SELECTOR).forEach((select) => {
      select.value = currentLanguage === "es" ? "Spanish" : "English";
    });
  }

  function applyLanguage(language) {
    currentLanguage = language === "es" ? "es" : "en";
    applying = true;

    document.documentElement.lang = currentLanguage === "es" ? "es" : "en";
    updateMeta();
    walk(document.body);
    syncSelects();

    applying = false;
  }

  function bindSelectors() {
    document.querySelectorAll(SELECTOR).forEach((select) => {
      if (select.dataset.gttsLanguageBound === "true") return;
      select.dataset.gttsLanguageBound = "true";
      select.addEventListener("change", () => {
        const nextLanguage = languageFromSelectValue(select.value);
        saveLanguage(nextLanguage);
        applyLanguage(nextLanguage);
      });
    });
  }

  function startObserver() {
    if (observer || !document.body) return;

    observer = new MutationObserver((mutations) => {
      if (applying) return;

      let shouldSyncSelectors = false;
      applying = true;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          walk(node);
          if (node.nodeType === Node.ELEMENT_NODE && (node.matches(SELECTOR) || node.querySelector(SELECTOR))) {
            shouldSyncSelectors = true;
          }
        });
      });

      applying = false;

      if (shouldSyncSelectors) {
        bindSelectors();
        syncSelects();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindSelectors();
    applyLanguage(getSavedLanguage());
    startObserver();
  });
})();

  })();

  // ---- page script block 1 ----
  ;(function(){

      try { sessionStorage.clear(); } catch (e) { /* ignore */ }
    
  })();

  // ---- page script block 2 ----
  ;(function(){

      const shareButton = document.getElementById("sharePage");
      const shareToast = document.getElementById("shareToast");

      if (shareButton) {
        shareButton.addEventListener("click", async () => {
          const shareData = {
            title: document.title,
            url: window.location.href
          };

          try {
            if (navigator.share) {
              await navigator.share(shareData);
            } else if (navigator.clipboard) {
              await navigator.clipboard.writeText(window.location.href);
              bootstrap.Toast.getOrCreateInstance(shareToast).show();
            }
          } catch (error) {
            if (navigator.clipboard) {
              await navigator.clipboard.writeText(window.location.href);
            }
          }
        });
      }
    
  })();

  // ---- page script block 3 ----
  ;(function(){

      // ---------------------------------------------------------------------
      // ✅ i18n dictionary (EN + ES) — SAME AS ORIGINAL (kept)
      // ---------------------------------------------------------------------
      const I18N = {
        en: {
          "meta.title": "Online Traffic School – Fast, Approved, Affordable | GoToTrafficSchool",

          "top.contact": "Contact Us: 1-(888)-329-7069",
          "top.share": "Share this page",

          "nav.how": "How It Works",
          "nav.faq": "FAQs",
          "nav.partner": "Partner Program",
          "nav.contact": "Contact Us",
          "nav.money": "Make Money",
          "nav.news": "News",
          "nav.login": "Log In",

          "hero.title": "America’s Original<br />Traffic School",
          "hero.chooseState": "Choose your State",
          "hero.spanishBtn": "Curso Ofrecido en Español También",
          "hero.loading": "Loading…",
          "hero.tryFree": "Try our course for free - no credit card required.",

          "icons.lowestTitle": "Lowest Price",
          "icons.lowestSub": "Guarantee",
          "icons.customersTitle": "6M+",
          "icons.customersSub": "Satisfied Customers",
          "icons.sameDayTitle": "Same Day",
          "icons.sameDaySub": "Processing",
          "icons.funTitle": "Fun &amp;",
          "icons.funSub": "Interactive",
          "icons.licensedTitle": "State",
          "icons.licensedSub": "Licensed",
          "icons.anyDeviceTitle": "Any Device",
          "icons.anyDeviceSub": "Anywhere",

          "section.coursesTitle": "Our Traffic Safety Courses",
          "section.coursesSubtitle": "Everything you need to know about our online driver education and traffic school platform.",
          "section.realLifeTitle": "Online Courses Built for Real Life",
          "section.realLifeP1": "No matter how busy your schedule is, GoToTrafficSchool makes it easy to complete your traffic safety course on your terms. Our programs are designed to fit into everyday life; without classrooms, textbooks, or unnecessary stress.",
          "bullets.b1": "100% online courses you can complete from any device",
          "bullets.b2": "24/7 access, so you can log in whenever it works for you",
          "bullets.b3": "Learn at your own pace. Start, stop, and resume as needed",
          "bullets.b4": "Clear, easy-to-follow lessons designed for real understanding",
          "bullets.b5": "Engaging visuals and interactive content to keep learning interesting",
          "section.realLifeP2": "Our goal is to make traffic safety education straightforward, accessible, and effective.",

          "section.trustTitle": "A Driving School You Can Trust",
          "section.trustP1": "With approvals in most U.S. states, GoToTrafficSchool delivers traffic safety and defensive driving courses that meet court, DMV, and insurance requirements nationwide.",
          "trustBullets.t1": "Decades of experience providing online traffic safety education",
          "trustBullets.t2": "Courses developed by driver education professionals and instructional design experts",
          "trustBullets.t3": "A balanced learning experience using text, animations, and audio",
          "trustBullets.t4": "Reliable completion reporting and certificate processing",
          "section.trustP2": "From enrollment to completion, we focus on accuracy, compliance, and ease, so you can complete your course with confidence.",

          "testimonials.kicker": "Testimonials",
          "testimonials.title": "Trusted by Millions of Drivers",
          "testimonials.subtitle": "Don’t just take our word for it. See what our satisfied customers have to say.",
          "testimonials.loading": "Loading testimonials...",
          "testimonials.pleaseWait": "Please wait",
          "testimonials.fetching": "Fetching latest reviews",

          "more.kicker": "We also offer",
          "more.title": "More Accredited Online Courses",
          "more.subtitle": "We offer professional courses to help you grow your career and stay compliant.",
          "more.detg": "Online driver education made easy, fully state-approved and self-paced.",
          "more.osha": "Indiana BMV APPROVED Online Defensive Driving",
          "more.realty": "TEXAS ONLINE DEFENSIVE DRIVING & ADULT DRIVER'S EDUCATION",

          "footer.desc": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
          "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
          "footer.company": "Company",
          "footer.about": "About Us",
          "footer.how": "How It Works",
          "footer.faq": "FAQ",
          "footer.contact": "Contact",
          "footer.partner": "Partner Program",
          "footer.legal": "Legal",
          "footer.privacy": "Privacy Policy",
          "footer.terms": "Terms of Service",
          "footer.courts": "Court Directory",
          "footer.reviews": "Student Comments",

          "powered": "Powered by Cyberactive"
        },

        es: {
          "meta.title": "Escuela de Tránsito en Línea – Rápida, Aprobada y Económica | GoToTrafficSchool",
          "top.contact": "Contáctanos: 1-(888)-329-7069",
          "top.share": "Compartir esta página",
          "nav.how": "Cómo Funciona",
          "nav.faq": "Preguntas Frecuentes",
          "nav.partner": "Programa de Socios",
          "nav.contact": "Contáctanos",
          "nav.money": "Gana Dinero",
          "nav.news": "Noticias",
          "nav.login": "Iniciar Sesión",
          "hero.title": "Formando Conductores<br />Más Seguros Cada Día",
          "hero.chooseState": "Elige tu Estado",
          "hero.spanishBtn": "Ver en Inglés",
          "hero.loading": "Cargando…",
          "hero.tryFree": "Prueba nuestro curso gratis — no se requiere tarjeta de crédito.",

          "icons.lowestTitle": "Precio Más Bajo",
          "icons.lowestSub": "Garantizado",
          "icons.customersTitle": "6M+",
          "icons.customersSub": "Clientes Satisfechos",
          "icons.sameDayTitle": "El Mismo Día",
          "icons.sameDaySub": "Procesamiento",
          "icons.funTitle": "Divertido &amp;",
          "icons.funSub": "Interactivo",
          "icons.licensedTitle": "Aprobado",
          "icons.licensedSub": "por el Estado",
          "icons.anyDeviceTitle": "Cualquier Dispositivo",
          "icons.anyDeviceSub": "En Cualquier Lugar",

          "section.coursesTitle": "Nuestros Cursos de Seguridad Vial",
          "section.coursesSubtitle": "Todo lo que necesitas saber sobre nuestra plataforma de educación vial y escuela de tránsito en línea.",
          "section.realLifeTitle": "Cursos en Línea Diseñados para la Vida Real",
          "section.realLifeP1": "No importa cuán ocupado sea tu horario, GoToTrafficSchool facilita completar tu curso de seguridad vial a tu manera. Nuestros programas están diseñados para adaptarse a la vida diaria, sin aulas, libros de texto ni estrés innecesario.",
          "bullets.b1": "Cursos 100% en línea que puedes completar desde cualquier dispositivo",
          "bullets.b2": "Acceso 24/7 para que puedas iniciar sesión cuando te convenga",
          "bullets.b3": "Aprende a tu ritmo. Inicia, pausa y reanuda cuando lo necesites",
          "bullets.b4": "Lecciones claras y fáciles de seguir para una comprensión real",
          "bullets.b5": "Contenido visual e interactivo para mantener el aprendizaje interesante",
          "section.realLifeP2": "Nuestro objetivo es hacer que la educación vial sea clara, accesible y efectiva.",

          "section.trustTitle": "Una Escuela de Manejo en la que Puedes Confiar",
          "section.trustP1": "Con aprobaciones en la mayoría de los estados de EE. UU., GoToTrafficSchool ofrece cursos de seguridad vial y manejo defensivo que cumplen con los requisitos de tribunales, DMV y aseguradoras a nivel nacional.",
          "trustBullets.t1": "Décadas de experiencia brindando educación vial en línea",
          "trustBullets.t2": "Cursos desarrollados por profesionales de educación vial y expertos en diseño instruccional",
          "trustBullets.t3": "Experiencia de aprendizaje equilibrada con texto, animaciones y audio",
          "trustBullets.t4": "Reportes confiables de finalización y procesamiento de certificados",
          "section.trustP2": "Desde la inscripción hasta la finalización, nos enfocamos en precisión, cumplimiento y facilidad, para que completes tu curso con confianza.",

          "testimonials.kicker": "Testimonios",
          "testimonials.title": "Con la Confianza de Millones de Conductores",
          "testimonials.subtitle": "No solo tomes nuestra palabra. Mira lo que dicen nuestros clientes satisfechos.",
          "testimonials.loading": "Cargando testimonios...",
          "testimonials.pleaseWait": "Por favor espera",
          "testimonials.fetching": "Obteniendo reseñas recientes",

          "more.kicker": "También ofrecemos",
          "more.title": "Más Cursos Acreditados en Línea",
          "more.subtitle": "Ofrecemos cursos profesionales para ayudarte a crecer en tu carrera y mantenerte al día.",
          "more.detg": "Educación vial en línea fácil, aprobada por el estado y a tu ritmo.",
          "more.osha": "Curso de Manejo Defensivo en Línea APROBADO por el BMV de Indiana",
          "more.realty": "CURSO DE MANEJO DEFENSIVO Y EDUCACIÓN PARA CONDUCTORES ADULTOS EN LÍNEA (TEXAS)",

          "footer.desc": "La forma más rápida y sencilla de completar tu escuela de tránsito en línea. Con la confianza de más de 4 millones de conductores en todo el país.",
          "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
          "footer.company": "Empresa",
          "footer.about": "Sobre Nosotros",
          "footer.how": "Cómo Funciona",
          "footer.faq": "Preguntas Frecuentes",
          "footer.contact": "Contacto",
          "footer.partner": "Programa de Socios",
          "footer.legal": "Legal",
          "footer.privacy": "Política de Privacidad",
          "footer.terms": "Términos de Servicio",
          "footer.courts": "Directorio de Tribunales",
          "footer.reviews": "Comentarios de Estudiantes",

          "powered": "Impulsado por Cyberactive"
        }
      };

      function applyLang(lang) {
        const safe = I18N[lang] ? lang : "en";
        document.documentElement.lang = safe;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (I18N[safe][key] != null) el.innerHTML = I18N[safe][key];
        });

        const btn = document.getElementById("langToggle");
        if (btn) {
          const isSpanish = safe === "es";
          btn.setAttribute("aria-pressed", String(isSpanish));
          btn.setAttribute(
            "aria-label",
            isSpanish
              ? "Switch language to English"
              : "Switch language to Spanish"
          );
        }

        try { localStorage.setItem("gtts:lang", safe); } catch (e) {}
      }

      document.addEventListener("gtts-disabled-legacy-i18n", () => {
        const btn = document.getElementById("langToggle");
        const saved = (function(){
          try { return localStorage.getItem("gtts:lang"); } catch(e) { return null; }
        })();
        applyLang(saved || "en");

        btn?.addEventListener("click", () => {
          const current = (function(){
            try { return localStorage.getItem("gtts:lang") || "en"; } catch(e) { return "en"; }
          })();
          applyLang(current === "es" ? "en" : "es");
        });
      });
    
  })();

  // ---- page script block 4 ----
  ;(function(){

      const SITE_BASE = "https://www.gototrafficschool.com";
      const STATE_SEO_MAP = {
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

      const stateSelect = document.getElementById("stateSelect");
      const stateLoading = document.getElementById("stateLoading");
      const stateError = document.getElementById("stateError");

      function resetStateSelection() {
        if (stateSelect) {
          stateSelect.value = "";
          stateSelect.disabled = false;
        }

        if (stateLoading) {
          stateLoading.style.display = "none";
        }

        if (stateError) {
          stateError.textContent = "";
          stateError.style.display = "none";
        }
      }

      if (stateSelect) {
        Object.entries(STATE_SEO_MAP).forEach(([stateKey, stateSeo]) => {
          const option = document.createElement("option");
          option.value = stateKey;
          option.textContent = stateSeo.stateName;
          stateSelect.appendChild(option);
        });

        stateSelect.addEventListener("change", () => {
          const selectedState = STATE_SEO_MAP[stateSelect.value];
          if (!selectedState) return;
          window.location.href = `${SITE_BASE}/state/${selectedState.slug}`;
        });

        window.addEventListener("pageshow", resetStateSelection);
      }
    
  })();

}
