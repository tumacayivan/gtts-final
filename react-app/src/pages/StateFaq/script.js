// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      (function () {
        const STORAGE_KEY = "gtts:state-faq:lang";
        const INITIAL_FAQ_COUNT = 8;
        const PAGE_CONFIG = {
          stateName: "[STATE]",
          courseUrl: "https://www.gototrafficschool.com/"
        };

        const translations = {
          en: {
            pageTitle: "[STATE] Traffic School FAQ | GoToTrafficSchool.com",
            pageDescription: "Find answers to the most common questions about [STATE] traffic school, eligibility, tickets, insurance, and deadlines.",
            skip: "Skip to main content",
            "share.button": "Share This Page",
            "share.toast": "Page link copied.",
            "utility.contact": "Contact Us: 1-800-909-3909",
            "nav.about": "About Us",
            "nav.how": "How It Works",
            "nav.faq": "FAQs",
            "nav.partner": "Partner with us",
            "nav.contact": "Contact Us",
            "nav.login": "Log In",
            "hero.title": "[STATE] Traffic School FAQ",
            "hero.copy": "Find answers to the most common questions about [STATE] traffic school, eligibility, tickets, insurance, and more.",
            "language.label": "Select Language",
            "language.english": "English (US)",
            "language.spanish": "Español",
            "search.placeholder": "Search for a question",
            "search.button": "Search",
            "enroll.title": "Are you ready to sign<br>up for the course?",
            "enroll.copy": "Select your state to see your course options and get started today.",
            "enroll.button": "Go to [STATE] Traffic School",
            "enroll.note": "See [STATE] course details, pricing, and requirements.",
            "faq.sectionTitle": "[STATE] Traffic School Questions",
            "faq.helper": "Search by question, topic, or keyword.",
            "faq.summaryAll": "frequently asked questions",
            "faq.summaryFiltered": "questions match",
            "faq.showMore": "Show More",
            "faq.showLess": "Show Less",
            "faq.noResults": "No FAQ results matched your search. Try a broader keyword such as ticket, insurance, state, or course.",
            "cta.title": "Ready to get started?",
            "cta.copy": "Start your [STATE] traffic school course today and complete it at your own pace.",
            "cta.button": "Go to [STATE] Traffic School",
            "footer.blurb": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
            "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
            "footer.company": "Company",
            "footer.home": "Home",
            "footer.about": "About Us",
            "footer.how": "How It Works",
            "footer.faq": "FAQ",
            "footer.contact": "Contact",
            "footer.partner": "Partner Program",
            "footer.legal": "Legal",
            "footer.privacy": "Privacy Policy",
            "footer.terms": "Terms Of Service",
            "footer.court": "Court Directory",
            "footer.comments": "Student Comment",
            "footer.follow": "Follow Us",
            "footer.copyrightPrefix": "© 2026 gototrafficschool.com Powered by",
            "footer.copyrightSuffix": "All rights reserved."
          },
          es: {
            pageTitle: "Preguntas Frecuentes de la Escuela de Tránsito de [STATE] | GoToTrafficSchool.com",
            pageDescription: "Encuentre respuestas a las preguntas más comunes sobre la escuela de tránsito de [STATE], elegibilidad, multas, seguro y fechas límite.",
            skip: "Saltar al contenido principal",
            "share.button": "Compartir Esta Página",
            "share.toast": "Se copió el enlace de la página.",
            "utility.contact": "Contáctenos: 1-800-909-3909",
            "nav.about": "Sobre Nosotros",
            "nav.how": "Cómo Funciona",
            "nav.faq": "Preguntas Frecuentes",
            "nav.partner": "Asóciese con nosotros",
            "nav.contact": "Contáctenos",
            "nav.login": "Iniciar Sesión",
            "hero.title": "Preguntas Frecuentes de la Escuela de Tránsito de [STATE]",
            "hero.copy": "Encuentre respuestas a las preguntas más comunes sobre la escuela de tránsito de [STATE], elegibilidad, multas, seguro y más.",
            "language.label": "Seleccionar Idioma",
            "language.english": "English (US)",
            "language.spanish": "Español",
            "search.placeholder": "Busque una pregunta",
            "search.button": "Buscar",
            "enroll.title": "¿Está listo para inscribirse<br>en el curso?",
            "enroll.copy": "Seleccione su estado para ver sus opciones de curso y comenzar hoy mismo.",
            "enroll.button": "Ir a la Escuela de Tránsito de [STATE]",
            "enroll.note": "Vea los detalles, precios y requisitos del curso de [STATE].",
            "faq.sectionTitle": "Preguntas de la Escuela de Tránsito de [STATE]",
            "faq.helper": "Busque por pregunta, tema o palabra clave.",
            "faq.summaryAll": "preguntas frecuentes",
            "faq.summaryFiltered": "preguntas coinciden",
            "faq.showMore": "Mostrar Más",
            "faq.showLess": "Mostrar Menos",
            "faq.noResults": "Ningún resultado coincide con su búsqueda. Pruebe con una palabra más general como multa, seguro, estado o curso.",
            "cta.title": "¿Listo para comenzar?",
            "cta.copy": "Comience hoy su curso de escuela de tránsito de [STATE] y complételo a su propio ritmo.",
            "cta.button": "Ir a la Escuela de Tránsito de [STATE]",
            "footer.blurb": "La manera más rápida y fácil de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
            "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
            "footer.company": "Empresa",
            "footer.home": "Inicio",
            "footer.about": "Sobre Nosotros",
            "footer.how": "Cómo Funciona",
            "footer.faq": "Preguntas Frecuentes",
            "footer.contact": "Contacto",
            "footer.partner": "Programa de Socios",
            "footer.legal": "Legal",
            "footer.privacy": "Política de Privacidad",
            "footer.terms": "Términos del Servicio",
            "footer.court": "Directorio de Tribunales",
            "footer.comments": "Comentario del Estudiante",
            "footer.follow": "Síganos",
            "footer.copyrightPrefix": "© 2026 gototrafficschool.com Desarrollado por",
            "footer.copyrightSuffix": "Todos los derechos reservados."
          }
        };

        const faqEntries = {
          en: [
            {
              question: "Who is eligible for traffic school in [STATE]?",
              answer: "Eligibility depends on the court, but typically you must have a valid driver’s license and a qualifying violation."
            },
            {
              question: "How do I know if traffic school is an option for my ticket in [STATE]?",
              answer: "Check your ticket or contact the court that issued it to confirm whether traffic school is available for your case."
            },
            {
              question: "Will traffic school dismiss my ticket in [STATE]?",
              answer: "It depends on your court and the violation. Some courts may dismiss the ticket, while others may only help prevent points."
            },
            {
              question: "How does traffic school affect points on my [STATE] driving record?",
              answer: "Completing traffic school may prevent points from being added to your driving record, depending on your case."
            },
            {
              question: "Will traffic school affect my insurance rates in [STATE]?",
              answer: "In most cases, completing traffic school can help prevent increases in your insurance rates. Always check with your insurance carrier."
            },
            {
              question: "How long do I have to complete traffic school in [STATE]?",
              answer: "Deadlines are set by the court that issued your ticket. Be sure to complete the course before your due date."
            },
            {
              question: "How long is the [STATE] traffic school course?",
              answer: "The exact course length depends on the program requirement tied to your state or court."
            },
            {
              question: "Is the [STATE] traffic school course online?",
              answer: "Yes. Our traffic school courses are 100% online, self-paced, and available 24/7 from any supported device."
            },
            {
              question: "Do I have to pay before I start the [STATE] traffic school course?",
              answer: "You can start the course for free. You must pay before the final step to complete the course and receive your certificate."
            },
            {
              question: "Is there a final exam for [STATE] traffic school?",
              answer: "Some programs include a final exam. If one applies to your course, the instructions will appear inside your account."
            },
            {
              question: "How many questions are on the final exam?",
              answer: "The total number of final exam questions can vary by program, but it is clearly explained before you begin."
            },
            {
              question: "What happens if I fail the final exam?",
              answer: "If you do not pass, you can usually retake the exam. Additional attempts may be available if needed."
            },
            {
              question: "How will my completion be reported in [STATE]?",
              answer: "Your completion is reported or your certificate is provided according to the state or court requirement connected to your enrollment."
            },
            {
              question: "What happens if I miss my deadline in [STATE]?",
              answer: "Missing your deadline may result in additional penalties, fines, or loss of eligibility. Contact your court as soon as possible."
            }
          ],
          es: [
            {
              question: "¿Quién es elegible para la escuela de tránsito en [STATE]?",
              answer: "La elegibilidad depende del tribunal, pero normalmente debe tener una licencia válida y una infracción que califique."
            },
            {
              question: "¿Cómo sé si la escuela de tránsito es una opción para mi multa en [STATE]?",
              answer: "Revise su multa o comuníquese con el tribunal que la emitió para confirmar si la escuela de tránsito está disponible para su caso."
            },
            {
              question: "¿La escuela de tránsito desestimará mi multa en [STATE]?",
              answer: "Depende de su tribunal y de la infracción. Algunos tribunales pueden desestimar la multa, mientras que otros solo pueden ayudar a evitar puntos."
            },
            {
              question: "¿Cómo afecta la escuela de tránsito a los puntos de mi historial de manejo en [STATE]?",
              answer: "Completar la escuela de tránsito puede evitar que se agreguen puntos a su historial de manejo, según su caso."
            },
            {
              question: "¿La escuela de tránsito afectará mis tarifas de seguro en [STATE]?",
              answer: "En muchos casos, completar la escuela de tránsito puede ayudar a evitar aumentos en su seguro. Siempre verifique con su aseguradora."
            },
            {
              question: "¿Cuánto tiempo tengo para completar la escuela de tránsito en [STATE]?",
              answer: "Las fechas límite las establece el tribunal que emitió su multa. Asegúrese de completar el curso antes de su fecha límite."
            },
            {
              question: "¿Cuánto dura el curso de escuela de tránsito de [STATE]?",
              answer: "La duración exacta del curso depende del requisito del programa asociado con su estado o tribunal."
            },
            {
              question: "¿El curso de escuela de tránsito de [STATE] es en línea?",
              answer: "Sí. Nuestros cursos de escuela de tránsito son 100% en línea, a su propio ritmo y están disponibles las 24 horas desde cualquier dispositivo compatible."
            },
            {
              question: "¿Tengo que pagar antes de comenzar el curso de escuela de tránsito de [STATE]?",
              answer: "Puede comenzar el curso gratis. Debe pagar antes del paso final para completar el curso y recibir su certificado."
            },
            {
              question: "¿Hay un examen final para la escuela de tránsito de [STATE]?",
              answer: "Algunos programas incluyen un examen final. Si aplica a su curso, las instrucciones aparecerán dentro de su cuenta."
            },
            {
              question: "¿Cuántas preguntas hay en el examen final?",
              answer: "La cantidad total de preguntas del examen final puede variar según el programa, pero se explica claramente antes de comenzar."
            },
            {
              question: "¿Qué sucede si repruebo el examen final?",
              answer: "Si no aprueba, normalmente puede volver a tomar el examen. Pueden existir intentos adicionales si son necesarios."
            },
            {
              question: "¿Cómo se reportará mi finalización en [STATE]?",
              answer: "Su finalización se reporta o su certificado se proporciona de acuerdo con el requisito estatal o judicial asociado con su inscripción."
            },
            {
              question: "¿Qué pasa si pierdo mi fecha límite en [STATE]?",
              answer: "Perder su fecha límite puede ocasionar sanciones adicionales, multas o pérdida de elegibilidad. Comuníquese con su tribunal lo antes posible."
            }
          ]
        };

        const elements = {
          languageSelect: document.getElementById("languageSelect"),
          searchForm: document.getElementById("searchForm"),
          searchInput: document.getElementById("faqSearch"),
          faqList: document.getElementById("faqList"),
          faqSummary: document.getElementById("faqSummary"),
          faqEmpty: document.getElementById("faqEmpty"),
          showMoreButton: document.getElementById("showMoreFaqs"),
          shareButton: document.getElementById("sharePage"),
          shareToast: document.getElementById("shareToast"),
          pageDescription: document.getElementById("pageDescription"),
          courseLinks: document.querySelectorAll("[data-course-link]")
        };

        let currentLang = localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
        let expandedFaqs = false;
        let shareToastTimer = null;

        function replaceState(value) {
          return String(value || "").replace(/\[STATE\]/g, PAGE_CONFIG.stateName);
        }

        function translate(key) {
          return replaceState(translations[currentLang][key] || "");
        }

        function normalizeText(value) {
          return value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        }

        function renderFaqs(query) {
          const items = faqEntries[currentLang].map((item) => ({
            question: replaceState(item.question),
            answer: replaceState(item.answer)
          }));
          const searchTerm = normalizeText(query.trim());
          const filtered = searchTerm
            ? items.filter((item) => normalizeText(item.question + " " + item.answer).includes(searchTerm))
            : items;
          const visibleItems = searchTerm || expandedFaqs ? filtered : filtered.slice(0, INITIAL_FAQ_COUNT);

          elements.faqSummary.textContent = searchTerm
            ? filtered.length + " / " + items.length + " " + translate("faq.summaryFiltered")
            : items.length + " " + translate("faq.summaryAll");

          if (!filtered.length) {
            elements.faqList.innerHTML = "";
            elements.faqEmpty.textContent = translate("faq.noResults");
            elements.faqEmpty.classList.add("is-visible");
            elements.showMoreButton.hidden = true;
            return;
          }

          elements.faqEmpty.classList.remove("is-visible");
          elements.faqList.innerHTML = visibleItems
            .map((item) => {
              return (
                '<article class="faq-item">' +
                  '<h3 class="faq-question">' + item.question + "</h3>" +
                  '<p class="faq-answer">' + item.answer + "</p>" +
                "</article>"
              );
            })
            .join("");

          const shouldShowToggle = !searchTerm && filtered.length > INITIAL_FAQ_COUNT;
          elements.showMoreButton.hidden = !shouldShowToggle;
          if (shouldShowToggle) {
            elements.showMoreButton.textContent = expandedFaqs ? translate("faq.showLess") : translate("faq.showMore");
          }
        }

        function applyTranslations() {
          document.documentElement.lang = currentLang;
          document.title = translate("pageTitle");
          elements.pageDescription.setAttribute("content", translate("pageDescription"));

          document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.getAttribute("data-i18n");
            const value = translate(key);
            if (value) {
              if (value.indexOf("<br>") !== -1) {
                node.innerHTML = value;
              } else {
                node.textContent = value;
              }
            }
          });

          document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
            const key = node.getAttribute("data-i18n-placeholder");
            const value = translate(key);
            if (value) {
              node.setAttribute("placeholder", value);
            }
          });

          elements.courseLinks.forEach((link) => {
            link.setAttribute("href", PAGE_CONFIG.courseUrl);
          });

          elements.languageSelect.value = currentLang;
          elements.shareToast.textContent = translate("share.toast");
          renderFaqs(elements.searchInput.value);
        }

        async function sharePage() {
          const shareData = {
            title: document.title,
            text: document.title,
            url: window.location.href
          };

          try {
            if (navigator.share) {
              await navigator.share(shareData);
              return;
            }

            if (navigator.clipboard && window.isSecureContext) {
              await navigator.clipboard.writeText(window.location.href);
            } else {
              const helper = document.createElement("input");
              helper.value = window.location.href;
              document.body.appendChild(helper);
              helper.select();
              document.execCommand("copy");
              document.body.removeChild(helper);
            }

            elements.shareToast.classList.add("is-visible");
            window.clearTimeout(shareToastTimer);
            shareToastTimer = window.setTimeout(() => {
              elements.shareToast.classList.remove("is-visible");
            }, 2200);
          } catch (error) {
            console.error(error);
          }
        }

        elements.searchForm.addEventListener("submit", function (event) {
          event.preventDefault();
          renderFaqs(elements.searchInput.value);
        });

        elements.searchInput.addEventListener("input", function () {
          renderFaqs(elements.searchInput.value);
        });

        elements.languageSelect.addEventListener("change", function (event) {
          currentLang = event.target.value === "es" ? "es" : "en";
          localStorage.setItem(STORAGE_KEY, currentLang);
          renderFaqs(elements.searchInput.value);
          applyTranslations();
        });

        elements.showMoreButton.addEventListener("click", function () {
          expandedFaqs = !expandedFaqs;
          renderFaqs(elements.searchInput.value);
        });

        elements.shareButton.addEventListener("click", sharePage);

        applyTranslations();
      })();
    
  })();

}
