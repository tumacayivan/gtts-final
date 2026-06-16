// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      const STORAGE_KEY = "gtts-about-lang";

      const translations = {
        en: {
          pageTitle: "About Us | GoToTrafficSchool",
          pageDescription: "Learn how GoToTrafficSchool helped pioneer online traffic school and why millions of drivers trust the platform today.",
          skip: "Skip to main content",
          "top.share": "Share This Page",
          "top.contact": "Contact Us: 1-800-909-3909",
          "nav.about": "About Us",
          "nav.how": "How It Works",
          "nav.faq": "FAQs",
          "nav.partner": "Partner with us",
          "nav.contact": "Contact Us",
          "nav.login": "Log In",
          "language.label": "Select Language",
          "hero.eyebrow": "We pioneered online traffic school. We’ve been refining it ever since.",
          "hero.title": "About GoToTrafficSchool: Online Traffic School Since 2000",
          "hero.lead": "Founded in 2000, GoToTrafficSchool helped bring traffic school online. More than 10 million drivers nationwide have trusted our platform to meet their requirements quickly and stay compliant.",
          "hero.cta": "Start Your Course",
          "hero.pill1": "No timers",
          "hero.pill2": "Self-paced",
          "hero.pill3": "Real human support",
          "hero.stat1": "One of the first online traffic schools (2000)",
          "hero.stat2": "10 million+ drivers served",
          "hero.stat3": "Approved nationwide where allowed",
          "hero.stat4": "Same-day certificate processing (state dependent)",
          "stats.one.value": "10M+",
          "stats.one.label": "Drivers Served",
          "stats.two.value": "2000",
          "stats.two.label": "Founded",
          "stats.three.value": "Nationwide",
          "stats.three.label": "Approved Where Allowed",
          "stats.four.value": "Same-Day",
          "stats.four.label": "Certificate Processing",
          "stats.five.value": "Real Support",
          "stats.five.label": "No Bots",
          "story.title": "Our Story",
          "story.p1": "GoToTrafficSchool launched one of the first fully online traffic school programs in California in 2000, replacing inconvenient classroom courses with a flexible, self-paced alternative. Since then, more than 10 million drivers have completed their courses through our platform. Today we operate nationwide, in every state that allows online traffic school, defensive driving, or driver improvement programs.",
          "story.p2": "The requirements differ by state. Traffic school, defensive driving, and driver improvement each carry their own rules, but the goal is the same: meet your requirement, keep points off your record, and stay compliant. We built our platform to get you there with as little friction as possible.",
          "simplicity.title": "Built for Efficiency",
          "simplicity.item1": "Fully Self-Paced",
          "simplicity.item2": "No Timers",
          "simplicity.item3": "Any Devices",
          "simplicity.item4": "Mobile Apps",
          "simplicity.item5": "Auto-Serve Progress",
          "simplicity.item6": "Devices Switching",
          "simplicity.item7": "Fast Processing",
          "simplicity.item8": "Fast Anytime",
          "courses.title": "Courses for Every Driver",
          "courses.card1.title": "Ticket Dismissal",
          "courses.card1.body": "Keep points off your record where eligible and dismiss tickets.",
          "courses.card2.title": "Insurance Discount",
          "courses.card2.body": "Qualify for potential insurance savings with a state-approved course.",
          "courses.card3.title": "Mature Driver Programs",
          "courses.card3.body": "Stay sharp, refresh your skills, and access discounts designed for experienced drivers.",
          "courses.card4.title": "Fleet Safety Training",
          "courses.card4.body": "Provide driver safety training for employees and reduce risk for your organization.",
          "courses.card5.title": "Teen Driver Education",
          "courses.card5.body": "State-required courses for new drivers preparing for permits and licenses.",
          "why.title": "Why Drivers Choose GoToTrafficSchool",
          "why.item1.title": "No Timers or waiting periods",
          "why.item1.body": "We never force time restrictions or unnecessary delays.",
          "why.item2.title": "True Self-Paced Learning",
          "why.item2.body": "You’re in control-complete the course on your schedule.",
          "why.item3.title": "Same-Day Certificate Processing",
          "why.item3.body": "Fast, reliable processing in many states.",
          "why.item4.title": "Real Human Support",
          "why.item4.body": "Talk to a real person when you need help.",
          "why.item5.title": "Lowest Price Guarantee",
          "why.item5.body": "If you find a comparable course for less, we will beat it.",
          "efficiency.title": "Built for Efficiency",
          "efficiency.body": "Most platforms add unnecessary steps.<br>We remove them.<br><br>Our system is designed to get you through traffic school quickly, correctly and without friction.",
          "different.title": "What Makes Us different",
          "different.item1": "We’ve been in this space longer than most- and it shows.",
          "different.item2": "<strong>Our platform prioritizes speed, flexibility, and simplicity</strong> over unnecessary restrictions.",
          "different.item3": "The result is a system that <strong>works the way drivers actually need it to.</strong>",
          "cta.title": "Start Your Traffic School Today",
          "cta.body": "Enroll in minutes. Complete at your own pace. Get back on the road.",
          "cta.button": "Register Now",
          "cta.proof": "Trusted by over 10 million drivers nationwide.",
          "footer.blurb": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
          "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
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
          "footer.copyrightPrefix": "© 2026 gototrafficschool.com Powered by",
          "footer.copyrightSuffix": "All rights reserved.",
          "toast.copied": "Page link copied."
        },
        es: {
          pageTitle: "Sobre Nosotros | GoToTrafficSchool",
          pageDescription: "Conozca cómo GoToTrafficSchool ayudó a impulsar la escuela de tránsito en línea y por qué millones de conductores confían en la plataforma hoy.",
          skip: "Saltar al contenido principal",
          "top.share": "Compartir Esta Página",
          "top.contact": "Contáctenos: 1-800-909-3909",
          "nav.about": "Sobre Nosotros",
          "nav.how": "Cómo Funciona",
          "nav.faq": "Preguntas Frecuentes",
          "nav.partner": "Asóciese con nosotros",
          "nav.contact": "Contáctenos",
          "nav.login": "Iniciar Sesión",
          "language.label": "Seleccionar Idioma",
          "hero.eyebrow": "Fuimos pioneros en la escuela de tránsito en línea. La hemos perfeccionado desde entonces.",
          "hero.title": "Acerca de GoToTrafficSchool: Escuela de Tránsito en Línea Desde el Año 2000",
          "hero.lead": "Fundada en el año 2000, GoToTrafficSchool ayudó a llevar la escuela de tránsito al entorno digital. Más de 10 millones de conductores en todo el país han confiado en nuestra plataforma para cumplir sus requisitos rápidamente y mantenerse al día.",
          "hero.cta": "Comience Su Curso",
          "hero.pill1": "Sin temporizadores",
          "hero.pill2": "A su ritmo",
          "hero.pill3": "Soporte humano real",
          "hero.stat1": "Una de las primeras escuelas de tránsito en línea (2000)",
          "hero.stat2": "Más de 10 millones de conductores atendidos",
          "hero.stat3": "Aprobado a nivel nacional donde se permite",
          "hero.stat4": "Procesamiento del certificado el mismo día (según el estado)",
          "stats.one.value": "10M+",
          "stats.one.label": "Conductores Atendidos",
          "stats.two.value": "2000",
          "stats.two.label": "Fundada",
          "stats.three.value": "Nacional",
          "stats.three.label": "Aprobado Donde Se Permite",
          "stats.four.value": "Mismo Día",
          "stats.four.label": "Procesamiento del Certificado",
          "stats.five.value": "Soporte Real",
          "stats.five.label": "Sin Bots",
          "story.title": "Nuestra Historia",
          "story.p1": "GoToTrafficSchool lanzó uno de los primeros programas de escuela de tránsito totalmente en línea en California en el año 2000, reemplazando las incómodas clases presenciales por una alternativa flexible y a su propio ritmo. Desde entonces, más de 10 millones de conductores han completado sus cursos a través de nuestra plataforma. Hoy operamos a nivel nacional, en todos los estados que permiten escuela de tránsito en línea, manejo defensivo o programas de mejoramiento del conductor.",
          "story.p2": "Los requisitos varían según el estado. La escuela de tránsito, el manejo defensivo y el mejoramiento del conductor tienen cada uno sus propias reglas, pero el objetivo es el mismo: cumplir su requisito, evitar puntos en su registro y mantenerse al día. Creamos nuestra plataforma para lograrlo con la menor fricción posible.",
          "simplicity.title": "Diseñado para la Eficiencia",
          "simplicity.item1": "Totalmente A Su Ritmo",
          "simplicity.item2": "Sin Temporizadores",
          "simplicity.item3": "Cualquier Dispositivo",
          "simplicity.item4": "Aplicaciones Móviles",
          "simplicity.item5": "Guardado Automático del Progreso",
          "simplicity.item6": "Cambio de Dispositivo",
          "simplicity.item7": "Procesamiento Rápido",
          "simplicity.item8": "Rápido en Cualquier Momento",
          "courses.title": "Cursos para Cada Conductor",
          "courses.card1.title": "Desestimación de Multas",
          "courses.card1.body": "Mantenga puntos fuera de su historial cuando sea elegible y desestime multas.",
          "courses.card2.title": "Descuento de Seguro",
          "courses.card2.body": "Califique para un posible ahorro en su seguro con un curso aprobado por el estado.",
          "courses.card3.title": "Programas para Conductores Maduros",
          "courses.card3.body": "Manténgase ágil, refuerce sus habilidades y acceda a descuentos diseñados para conductores con experiencia.",
          "courses.card4.title": "Capacitación de Seguridad para Flotas",
          "courses.card4.body": "Brinde capacitación de seguridad vial a sus empleados y reduzca el riesgo para su organización.",
          "courses.card5.title": "Educación para Conductores Jóvenes",
          "courses.card5.body": "Cursos requeridos por el estado para nuevos conductores que se preparan para permisos y licencias.",
          "why.title": "Por Qué los Conductores Eligen GoToTrafficSchool",
          "why.item1.title": "Sin temporizadores ni períodos de espera",
          "why.item1.body": "Nunca imponemos restricciones de tiempo ni retrasos innecesarios.",
          "why.item2.title": "Aprendizaje Verdaderamente A Su Ritmo",
          "why.item2.body": "Usted tiene el control: complete el curso según su horario.",
          "why.item3.title": "Procesamiento del Certificado el Mismo Día",
          "why.item3.body": "Procesamiento rápido y confiable en muchos estados.",
          "why.item4.title": "Soporte Humano Real",
          "why.item4.body": "Hable con una persona real cuando necesite ayuda.",
          "why.item5.title": "Garantía del Precio Más Bajo",
          "why.item5.body": "Si encuentra un curso comparable por menos, mejoraremos ese precio.",
          "efficiency.title": "Diseñado para la Eficiencia",
          "efficiency.body": "La mayoría de las plataformas agregan pasos innecesarios.<br>Nosotros los eliminamos.<br><br>Nuestro sistema está diseñado para ayudarle a completar su escuela de tránsito de forma rápida, correcta y sin fricción.",
          "different.title": "Lo Que Nos Hace Diferentes",
          "different.item1": "Llevamos más tiempo en este espacio que la mayoría, y eso se nota.",
          "different.item2": "<strong>Nuestra plataforma prioriza la velocidad, la flexibilidad y la simplicidad</strong> por encima de las restricciones innecesarias.",
          "different.item3": "El resultado es un sistema que <strong>funciona como los conductores realmente lo necesitan.</strong>",
          "cta.title": "Comience Hoy Su Escuela de Tránsito",
          "cta.body": "Inscríbase en minutos. Complete el curso a su ritmo. Vuelva al camino.",
          "cta.button": "Regístrese Ahora",
          "cta.proof": "Con la confianza de más de 10 millones de conductores en todo el país.",
          "footer.blurb": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
          "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
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
          "footer.terms": "Términos del Servicio",
          "footer.court": "Directorio de Tribunales",
          "footer.comments": "Comentarios del Estudiante",
          "footer.follow": "Síganos",
          "footer.copyrightPrefix": "© 2026 gototrafficschool.com Desarrollado por",
          "footer.copyrightSuffix": "Todos los derechos reservados.",
          "toast.copied": "Enlace de la página copiado."
        }
      };

      const translatableNodes = Array.from(document.querySelectorAll("[data-i18n]"));
      const languageSelect = document.getElementById("languageSelect");
      const shareButton = document.getElementById("sharePage");
      const shareToastElement = document.getElementById("shareToast");
      const descriptionElement = document.getElementById("pageDescription");

      function applyLanguage(language) {
        const dict = translations[language] || translations.en;

        document.documentElement.lang = language === "es" ? "es" : "en";
        document.title = dict.pageTitle;
        descriptionElement.setAttribute("content", dict.pageDescription);

        translatableNodes.forEach((node) => {
          const key = node.dataset.i18n;
          const value = dict[key];
          if (!value) return;
          if (value.includes("<br>") || value.includes("<strong>")) {
            node.innerHTML = value;
          } else {
            node.textContent = value;
          }
        });

        languageSelect.value = language;
        localStorage.setItem(STORAGE_KEY, language);
      }

      async function sharePage() {
        const currentLang = languageSelect.value || "en";
        const dict = translations[currentLang] || translations.en;
        const shareData = {
          title: document.title,
          url: window.location.href
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
            return;
          }

          if (navigator.clipboard) {
            await navigator.clipboard.writeText(window.location.href);
            bootstrap.Toast.getOrCreateInstance(shareToastElement).show();
            return;
          }
        } catch (error) {
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(window.location.href);
            bootstrap.Toast.getOrCreateInstance(shareToastElement).show();
            return;
          }
        }

        window.prompt(dict["toast.copied"], window.location.href);
      }

      languageSelect.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
      });

      shareButton.addEventListener("click", sharePage);

      const initialLanguage = localStorage.getItem(STORAGE_KEY) || "en";
      applyLanguage(initialLanguage);
    
  })();

}
