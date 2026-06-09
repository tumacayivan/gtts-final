// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      (function () {
        const STORAGE_KEY = "gtts:faq:lang";
        const translations = {
          en: {
            pageTitle: "Traffic School FAQ | GoToTrafficSchool.com",
            pageDescription: "Find answers to the most common traffic school questions about eligibility, tickets, insurance, deadlines, and how GoToTrafficSchool works.",
            skip: "Skip to main content",
            "share.button": "Share This Page",
            "share.toast": "Page link copied.",
            "utility.phone": "Contact Us: 1-800-909-3909",
            "nav.about": "About Us",
            "nav.how": "How It Works",
            "nav.faq": "FAQs",
            "nav.partner": "Partner with us",
            "nav.contact": "Contact Us",
            "nav.login": "Log In",
            "hero.title": "Traffic School FAQ",
            "hero.lead": "Find answers to the most common questions about traffic school, eligibility, tickets, insurance, and more.",
            "language.label": "Select Language",
            "language.english": "English (US)",
            "language.spanish": "Español",
            "search.placeholder": "Search for a question",
            "search.button": "Search",
            "support.state.title": "Looking for questions specific to your state?",
            "support.state.copy": "Check out your state FAQ page for rules, eligibility, and requirements.",
            "support.state.button": "Find Your State FAQ",
            "support.course.title": "Are you ready to sign up for the course?",
            "support.course.copy": "Select your state to see your course options and get started today.",
            "support.course.button": "Select Your State to Get Started",
            "faq.helper": "Search by question, topic, or keyword.",
            "faq.summaryAll": "frequently asked questions",
            "faq.summaryFiltered": "questions match",
            "faq.noResults": "No FAQ results matched your search. Try a broader keyword such as ticket, insurance, state, or course.",
            "cta.title": "Ready to get started?",
            "cta.copy": "Start your Alabama traffic school course today and complete it at your own pace.",
            "cta.button": "Go to Alabama Traffic School",
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
            pageTitle: "Preguntas Frecuentes de la Escuela de Tránsito | GoToTrafficSchool.com",
            pageDescription: "Encuentre respuestas a las preguntas más comunes sobre elegibilidad, multas, seguros, plazos y cómo funciona GoToTrafficSchool.",
            skip: "Saltar al contenido principal",
            "share.button": "Compartir Esta Página",
            "share.toast": "Enlace de la página copiado.",
            "utility.phone": "Contáctenos: 1-800-909-3909",
            "nav.about": "Sobre Nosotros",
            "nav.how": "Cómo Funciona",
            "nav.faq": "Preguntas Frecuentes",
            "nav.partner": "Asóciese con nosotros",
            "nav.contact": "Contáctenos",
            "nav.login": "Iniciar Sesión",
            "hero.title": "Preguntas Frecuentes de la Escuela de Tránsito",
            "hero.lead": "Encuentre respuestas a las preguntas más comunes sobre escuela de tránsito, elegibilidad, multas, seguros y mucho más.",
            "language.label": "Seleccionar idioma",
            "language.english": "Inglés (EE. UU.)",
            "language.spanish": "Español",
            "search.placeholder": "Busque una pregunta",
            "search.button": "Buscar",
            "support.state.title": "¿Busca preguntas específicas de su estado?",
            "support.state.copy": "Consulte la página de preguntas frecuentes de su estado para conocer reglas, elegibilidad y requisitos.",
            "support.state.button": "Encuentre las FAQ de su estado",
            "support.course.title": "¿Está listo para inscribirse en el curso?",
            "support.course.copy": "Seleccione su estado para ver las opciones de su curso y comenzar hoy mismo.",
            "support.course.button": "Seleccione su estado para comenzar",
            "faq.helper": "Busque por pregunta, tema o palabra clave.",
            "faq.summaryAll": "preguntas frecuentes",
            "faq.summaryFiltered": "preguntas coinciden",
            "faq.noResults": "Ningún resultado coincide con su búsqueda. Pruebe con una palabra más general como multa, seguro, estado o curso.",
            "cta.title": "¿Listo para comenzar?",
            "cta.copy": "Comience hoy su curso de escuela de tránsito de Alabama y complételo a su propio ritmo.",
            "cta.button": "Ir a la escuela de tránsito de Alabama",
            "footer.blurb": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
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
              question: "What is traffic school?",
              answer: "Traffic school is a course designed to improve driving knowledge and, in many cases, reduce the impact of a traffic ticket."
            },
            {
              question: "Is traffic school the same as defensive driving?",
              answer: "Yes. Depending on your state, it may be called defensive driving, driver improvement, basic driver improvement (BDI), or driver safety program (DSP). All refer to similar courses."
            },
            {
              question: "Is online traffic school accepted?",
              answer: "Yes. As long as the course is approved by your state or accepted by your court, it is valid."
            },
            {
              question: "Am I eligible to take traffic school?",
              answer: "Eligibility depends on your state and court. Typically, you must have a valid driver's license and a minor violation."
            },
            {
              question: "Can I take traffic school for any ticket?",
              answer: "No. Serious violations like DUI or reckless driving are usually not eligible."
            },
            {
              question: "Do I need court approval before taking traffic school?",
              answer: "Yes. If your state does not have a state-approved program, you should confirm with your court that the course will be accepted before enrolling."
            },
            {
              question: "Will traffic school dismiss my ticket?",
              answer: "It depends on your state and court. Some states allow dismissal, while others only prevent points from affecting your record. Rules vary by location."
            },
            {
              question: "Will I still have to pay my ticket?",
              answer: "Yes. Traffic school does not remove the fine."
            },
            {
              question: "Does traffic school remove points from my record?",
              answer: "Not exactly. In most cases, it prevents points from being visible to insurance companies."
            },
            {
              question: "Will my insurance accept traffic school?",
              answer: "In most cases, yes, but you should confirm with your insurance carrier to be sure the course qualifies."
            },
            {
              question: "Can traffic school lower my insurance?",
              answer: "Some insurance providers offer discounts for completing a defensive driving or traffic school course, but approval varies by carrier."
            },
            {
              question: "How long is the course?",
              answer: "Most courses take between 4 and 8 hours, depending on state requirements."
            },
            {
              question: "Is the course self-paced?",
              answer: "Yes. You can start, stop, and resume anytime."
            },
            {
              question: "Can I take it on my phone?",
              answer: "Yes. Courses are mobile-friendly and work across devices."
            },
            {
              question: "Do I have to pay before taking the course?",
              answer: "You can start your course for free. However, you must pay before taking the final exam and completing the course."
            },
            {
              question: "Is there a final exam?",
              answer: "Yes, in most states. It is designed to be straightforward and easy to pass."
            },
            {
              question: "What happens after I complete the course?",
              answer: "Your completion is processed and your certificate is delivered based on your state or court requirements."
            },
            {
              question: "How long do I have to complete traffic school?",
              answer: "Your deadline is set by the court or state."
            },
            {
              question: "What happens if I miss my deadline?",
              answer: "You may lose eligibility or face additional penalties."
            },
            {
              question: "How do I know the exact rules for my state?",
              answer: "Traffic school rules vary by state, court, and insurance provider. Check the state page for where your ticket was issued to see the exact rules that apply to you."
            }
          ],
          es: [
            {
              question: "¿Qué es la escuela de tránsito?",
              answer: "La escuela de tránsito es un curso diseñado para mejorar el conocimiento de manejo y, en muchos casos, reducir el impacto de una multa."
            },
            {
              question: "¿La escuela de tránsito es lo mismo que manejo defensivo?",
              answer: "Sí. Según su estado, puede llamarse manejo defensivo, mejoramiento del conductor, basic driver improvement (BDI) o driver safety program (DSP). Todos se refieren a cursos similares."
            },
            {
              question: "¿Se acepta la escuela de tránsito en línea?",
              answer: "Sí. Siempre que el curso esté aprobado por su estado o aceptado por su tribunal, es válido."
            },
            {
              question: "¿Soy elegible para tomar escuela de tránsito?",
              answer: "La elegibilidad depende de su estado y tribunal. Por lo general, debe tener una licencia válida y una infracción menor."
            },
            {
              question: "¿Puedo tomar escuela de tránsito por cualquier multa?",
              answer: "No. Las infracciones graves, como DUI o manejo temerario, normalmente no son elegibles."
            },
            {
              question: "¿Necesito aprobación del tribunal antes de tomar escuela de tránsito?",
              answer: "Sí. Si su estado no tiene un programa aprobado por el estado, debe confirmar con su tribunal que el curso será aceptado antes de inscribirse."
            },
            {
              question: "¿La escuela de tránsito eliminará mi multa?",
              answer: "Depende de su estado y tribunal. Algunos estados permiten la desestimación, mientras que otros solo evitan que los puntos afecten su historial. Las reglas varían según la ubicación."
            },
            {
              question: "¿Aun tendré que pagar mi multa?",
              answer: "Sí. La escuela de tránsito no elimina la multa."
            },
            {
              question: "¿La escuela de tránsito elimina puntos de mi historial?",
              answer: "No exactamente. En la mayoría de los casos, evita que los puntos sean visibles para las compañías de seguros."
            },
            {
              question: "¿Mi seguro aceptará la escuela de tránsito?",
              answer: "En la mayoría de los casos sí, pero debe confirmarlo con su compañía de seguros para asegurarse de que el curso califique."
            },
            {
              question: "¿La escuela de tránsito puede bajar mi seguro?",
              answer: "Algunas aseguradoras ofrecen descuentos por completar un curso de manejo defensivo o escuela de tránsito, pero la aprobación varía según la compañía."
            },
            {
              question: "¿Cuánto dura el curso?",
              answer: "La mayoría de los cursos duran entre 4 y 8 horas, según los requisitos del estado."
            },
            {
              question: "¿El curso es a su propio ritmo?",
              answer: "Sí. Puede comenzar, detenerse y reanudar en cualquier momento."
            },
            {
              question: "¿Puedo tomarlo en mi teléfono?",
              answer: "Sí. Los cursos son compatibles con dispositivos móviles y funcionan en distintos dispositivos."
            },
            {
              question: "¿Tengo que pagar antes de tomar el curso?",
              answer: "Puede comenzar su curso gratis. Sin embargo, debe pagar antes de tomar el examen final y completar el curso."
            },
            {
              question: "¿Hay examen final?",
              answer: "Sí, en la mayoría de los estados. Está diseñado para ser claro y fácil de aprobar."
            },
            {
              question: "¿Qué sucede después de completar el curso?",
              answer: "Su finalización se procesa y su certificado se entrega según los requisitos de su estado o tribunal."
            },
            {
              question: "¿Cuánto tiempo tengo para completar la escuela de tránsito?",
              answer: "Su fecha límite la establece el tribunal o el estado."
            },
            {
              question: "¿Qué pasa si pierdo mi fecha límite?",
              answer: "Puede perder la elegibilidad o enfrentar sanciones adicionales."
            },
            {
              question: "¿Cómo sé las reglas exactas de mi estado?",
              answer: "Las reglas de escuela de tránsito varían según el estado, el tribunal y la aseguradora. Consulte la página del estado donde recibió su multa para ver las reglas exactas que se aplican a usted."
            }
          ]
        };

        const elements = {
          languageSelect: document.getElementById("languageSelect"),
          searchInput: document.getElementById("faqSearch"),
          searchForm: document.getElementById("searchForm"),
          faqAccordion: document.getElementById("faqAccordion"),
          faqSummary: document.getElementById("faqSummary"),
          faqEmpty: document.getElementById("faqEmpty"),
          shareButton: document.getElementById("sharePage"),
          shareToast: document.getElementById("shareToast"),
          pageDescription: document.getElementById("pageDescription")
        };

        let currentLang = localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
        let shareToastTimer = null;

        function translate(key) {
          return translations[currentLang][key] || "";
        }

        function normalizeText(value) {
          return value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        }

        function renderFaqs(query) {
          const items = faqEntries[currentLang];
          const searchTerm = normalizeText(query.trim());
          const filtered = searchTerm
            ? items.filter((item) => normalizeText(`${item.question} ${item.answer}`).includes(searchTerm))
            : items;

          // Summary count text intentionally removed (kept #faqSummary element empty).

          if (!filtered.length) {
            elements.faqAccordion.innerHTML = "";
            elements.faqEmpty.textContent = translate("faq.noResults");
            elements.faqEmpty.classList.add("is-visible");
            return;
          }

          elements.faqEmpty.classList.remove("is-visible");

          elements.faqAccordion.innerHTML = filtered
            .map((item, index) => {
              return `
                <article class="faq-item">
                  <h2 class="faq-question-heading">
                    <span class="faq-index">${String(index + 1)}</span>
                    <span class="faq-question">${item.question}</span>
                  </h2>
                  <div class="faq-body">${item.answer}</div>
                </article>
              `;
            })
            .join("");
        }

        function applyTranslations() {
          document.documentElement.lang = currentLang;
          document.title = translate("pageTitle");
          elements.pageDescription.setAttribute("content", translate("pageDescription"));

          document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.getAttribute("data-i18n");
            const value = translate(key);
            if (value) {
              node.textContent = value;
            }
          });

          document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
            const key = node.getAttribute("data-i18n-placeholder");
            const value = translate(key);
            if (value) {
              node.setAttribute("placeholder", value);
            }
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

        elements.searchForm.addEventListener("submit", (event) => {
          event.preventDefault();
          renderFaqs(elements.searchInput.value);
        });

        elements.searchInput.addEventListener("input", () => {
          renderFaqs(elements.searchInput.value);
        });

        elements.languageSelect.addEventListener("change", (event) => {
          currentLang = event.target.value === "es" ? "es" : "en";
          localStorage.setItem(STORAGE_KEY, currentLang);
          applyTranslations();
        });

        elements.shareButton.addEventListener("click", sharePage);

        applyTranslations();
      })();
    
  })();

}
