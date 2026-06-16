// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      const STORAGE_KEY = "gtts:how-it-works:lang";

      const translations = {
        en: {
          "meta.title": "How It Works | GoToTrafficSchool.com",
          skip: "Skip to main content",
          "utility.share": "Share This Page",
          "utility.phone": "Contact Us: 1-800-909-3909",
          "nav.about": "About Us",
          "nav.how": "How It Works",
          "nav.faq": "FAQs",
          "nav.partner": "Partner with us",
          "nav.contact": "Contact Us",
          "nav.login": "Log In",
          "lang.label": "Select Language",
          "lang.en": "English (US)",
          "lang.es": "Español",
          "hero.title": "How It Works",
          "hero.body.line1": "Completing your traffic school is simple and 100% online.",
          "hero.body.line2": "Here’s exactly what to expect from start to finish.",
          "steps.1.title": "Enrol Online",
          "steps.1.body1": "Sign up in minutes and get instant access to your state-approved traffic school course. In most states you can pay now or start the course first to make sure it's right for you (Arizona requires payment before you begin).",
          "steps.2.title": "Complete Your Course",
          "steps.2.body1": "Your course is divided into a set number of chapters based on your state's requirements. You'll complete short quizzes and a final exam along the way, all designed to be fast and easy. Most students finish quickly and pass on their first attempt.",
          "steps.3.title": "We Handle Your Certificate the Right Way",
          "steps.3.body1": "Once you finish, we process your certificate of completion based on your state and court requirements. We either send it directly to the court or provide it to you with simple instructions to submit. Need it faster? Same-day processing is available as an upgrade where your state allows.",
          "benefits.1": "100% Online — No Classroom Required",
          "benefits.2": "Start and Stop Anytime",
          "benefits.3": "Works on Phone, Tablet, or Computer",
          "benefits.4": "Fast Certificate Processing",
          "benefits.5": "Fully State-Approved and Court Accepted",
          "cta.line1": "You can start your course anytime",
          "cta.line2": "and complete it at your own pace.",
          "cta.button": "Start Your Course Now",
          "footer.blurb": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
          "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
          "footer.company": "Company",
          "footer.about": "About Us",
          "footer.how": "How It Works",
          "footer.faq": "FAQ",
          "footer.contact": "Contact",
          "footer.partner": "Partner Program",
          "footer.legal": "Legal",
          "footer.privacy": "Privacy Policy",
          "footer.terms": "Terms Of Service",
          "footer.court": "Court Directory",
          "footer.student": "Student Comment",
            "footer.comments": "Student Comment",
          "footer.follow": "Follow Us",
          "footer.copyrightPrefix": "© 2026 gototrafficschool.com Powered by",
          "footer.copyrightSuffix": "All rights reserved.",
          "share.copied": "Page link copied.",
          "share.unsupported": "Copy the URL from your browser to share this page."
        },
        es: {
          "meta.title": "Cómo Funciona | GoToTrafficSchool.com",
          skip: "Saltar al contenido principal",
          "utility.share": "Compartir Esta Página",
          "utility.phone": "Contáctenos: 1-800-909-3909",
          "nav.about": "Sobre Nosotros",
          "nav.how": "Cómo Funciona",
          "nav.faq": "Preguntas Frecuentes",
          "nav.partner": "Asóciese con Nosotros",
          "nav.contact": "Contáctenos",
          "nav.login": "Iniciar Sesión",
          "lang.label": "Seleccionar Idioma",
          "lang.en": "Inglés (EE. UU.)",
          "lang.es": "Español",
          "hero.title": "Cómo Funciona",
          "hero.body.line1": "Completar su escuela de tránsito es sencillo y 100% en línea.",
          "hero.body.line2": "Esto es exactamente lo que puede esperar de principio a fin.",
          "steps.1.title": "Inscríbase En Línea",
          "steps.1.body1": "Regístrese en minutos y obtenga acceso instantáneo a su curso de escuela de tránsito aprobado por el estado. En la mayoría de los estados puede pagar ahora o comenzar el curso primero para asegurarse de que sea adecuado para usted (Arizona requiere el pago antes de comenzar).",
          "steps.2.title": "Complete Su Curso",
          "steps.2.body1": "Su curso se divide en una cantidad determinada de capítulos según los requisitos de su estado. Completará cuestionarios cortos y un examen final durante el proceso, todo diseñado para ser rápido y sencillo. La mayoría de los estudiantes terminan rápidamente y aprueban en su primer intento.",
          "steps.3.title": "Manejamos Su Certificado Correctamente",
          "steps.3.body1": "Una vez que termine, procesamos su certificado de finalización según los requisitos de su estado y del tribunal. Lo enviamos directamente al tribunal o se lo entregamos con instrucciones sencillas para presentarlo. ¿Lo necesita más rápido? El procesamiento el mismo día está disponible como mejora donde su estado lo permite.",
          "benefits.1": "100% En Línea — No Se Requiere Aula",
          "benefits.2": "Comience y Deténgase Cuando Quiera",
          "benefits.3": "Funciona en Teléfono, Tableta o Computadora",
          "benefits.4": "Procesamiento Rápido de Certificados",
          "benefits.5": "Totalmente Aprobado por el Estado y Aceptado por los Tribunales",
          "cta.line1": "Puede comenzar su curso en cualquier momento",
          "cta.line2": "y completarlo a su propio ritmo.",
          "cta.button": "Comience Su Curso Ahora",
          "footer.blurb": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
          "footer.location": "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
          "footer.company": "Empresa",
          "footer.about": "Sobre Nosotros",
          "footer.how": "Cómo Funciona",
          "footer.faq": "Preguntas Frecuentes",
          "footer.contact": "Contacto",
          "footer.partner": "Programa de Socios",
          "footer.legal": "Legal",
          "footer.privacy": "Política de Privacidad",
          "footer.terms": "Términos del Servicio",
          "footer.court": "Directorio de Tribunales",
          "footer.student": "Comentarios de Estudiantes",
          "footer.comments": "Comentarios de Estudiantes",
          "footer.follow": "Síganos",
          "footer.copyrightPrefix": "© 2026 gototrafficschool.com Desarrollado por",
          "footer.copyrightSuffix": "Todos los derechos reservados.",
          "share.copied": "Enlace de la página copiado.",
          "share.unsupported": "Copie la URL desde su navegador para compartir esta página."
        }
      };

      const shareButton = document.getElementById("sharePage");
      const languageSelect = document.getElementById("languageSelect");
      const shareToast = document.getElementById("shareToast");
      let currentLang = "en";
      let toastTimer;

      function t(key) {
        return translations[currentLang][key] || translations.en[key] || key;
      }

      function applyLanguage(lang) {
        currentLang = lang === "es" ? "es" : "en";
        document.documentElement.lang = currentLang;
        document.title = t("meta.title");

        document.querySelectorAll("[data-i18n]").forEach((node) => {
          const key = node.getAttribute("data-i18n");
          node.textContent = t(key);
        });

        const options = languageSelect.querySelectorAll("option");
        if (options[0]) {
          options[0].textContent = t("lang.en");
        }
        if (options[1]) {
          options[1].textContent = t("lang.es");
        }

        languageSelect.value = currentLang;
        localStorage.setItem(STORAGE_KEY, currentLang);
      }

      function showToast(message) {
        clearTimeout(toastTimer);
        shareToast.textContent = message;
        shareToast.classList.add("is-visible");
        toastTimer = window.setTimeout(() => {
          shareToast.classList.remove("is-visible");
        }, 2400);
      }

      async function sharePage() {
        const shareData = {
          title: document.title,
          url: window.location.href
        };

        if (navigator.share) {
          try {
            await navigator.share(shareData);
            return;
          } catch (error) {
            if (error && error.name === "AbortError") {
              return;
            }
          }
        }

        if (navigator.clipboard && window.isSecureContext) {
          try {
            await navigator.clipboard.writeText(window.location.href);
            showToast(t("share.copied"));
            return;
          } catch (error) {
            // Fallback below.
          }
        }

        showToast(t("share.unsupported"));
      }

      shareButton.addEventListener("click", sharePage);
      languageSelect.addEventListener("change", (event) => {
        applyLanguage(event.target.value);
      });

      applyLanguage(localStorage.getItem(STORAGE_KEY) || "en");
    
  })();

}
