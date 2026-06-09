// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      (function () {
        const SITE_BASE = "https://www.gototrafficschool.com";
        const LANG_STORAGE_KEY = "gtts:contactus:lang";

        const translations = {
          en: {
            pageTitle: "Contact Us | GoToTrafficSchool.com",
            pageDescription: "Contact GoToTrafficSchool.com for help with enrollment, certificates, billing, partner questions, or account support.",
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
            "hero.eyebrow": "We're Here To Help",
            "hero.title": "Contact Us",
            "hero.copy": "Have a question or need assistance? Reach out to us by phone, email, or by filling out the form below.",
            "lang.label": "Select Language",
            "lang.english": "English (US)",
            "lang.spanish": "Español",
            "form.title": "Send Us a Message",
            "form.fullName": "Full Name",
            "form.fullNamePlaceholder": "Your full name",
            "form.email": "Email Address",
            "form.emailPlaceholder": "you@example.com",
            "form.phone": "Phone",
            "form.optional": "(Optional)",
            "form.phonePlaceholder": "(888) 329-7069",
            "form.topic": "Topic",
            "form.topicPrompt": "Select a topic",
            "topic.course": "Course enrollment",
            "topic.certificate": "Certificate status",
            "topic.account": "Account or login help",
            "topic.billing": "Billing question",
            "topic.partner": "Partner program",
            "topic.other": "Other",
            "form.message": "Message",
            "form.messagePlaceholder": "How can we help you?",
            "form.note": "Please do not include sensitive information such as credit card numbers.",
            "form.submit": "Send Message",
            "form.preparing": "Preparing...",
            "form.phoneError": "Please enter a 10-digit phone number, or leave the phone field blank.",
            "form.mailtoReady": "Your email app is ready with a drafted message. Please send it to finish contacting our support team.",
            "info.title": "Contact Information",
            "info.subtitle": "Other ways to reach us",
            "info.phoneTitle": "Phone",
            "info.phoneHours": "Mon-Fri: 5AM-10PM PT",
            "info.emailTitle": "Email",
            "info.emailHelp": "We typically respond within 24 hours",
            "info.addressTitle": "Office Address",
            "info.addressValue": "Beverly Hills, CA",
            "cta.title": "Ready to get started?",
            "cta.copy": "Select your state to get started and complete your traffic school today.",
            "cta.statePrompt": "Choose Your State",
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
            "footer.copyrightSuffix": "All rights reserved."
          },
          es: {
            pageTitle: "Contáctenos | GoToTrafficSchool.com",
            pageDescription: "Comuníquese con GoToTrafficSchool.com para recibir ayuda con inscripción, certificados, facturación, socios o soporte de cuenta.",
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
            "hero.eyebrow": "Estamos Aquí Para Ayudar",
            "hero.title": "Contáctenos",
            "hero.copy": "¿Tiene una pregunta o necesita ayuda? Comuníquese con nosotros por teléfono, correo electrónico o llenando el formulario a continuación.",
            "lang.label": "Seleccionar idioma",
            "lang.english": "Inglés (EE. UU.)",
            "lang.spanish": "Español",
            "form.title": "Envíenos un Mensaje",
            "form.fullName": "Nombre Completo",
            "form.fullNamePlaceholder": "Su nombre completo",
            "form.email": "Correo Electrónico",
            "form.emailPlaceholder": "usted@ejemplo.com",
            "form.phone": "Teléfono",
            "form.optional": "(Opcional)",
            "form.phonePlaceholder": "(888) 329-7069",
            "form.topic": "Tema",
            "form.topicPrompt": "Seleccione un tema",
            "topic.course": "Inscripción al curso",
            "topic.certificate": "Estado del certificado",
            "topic.account": "Ayuda con cuenta o inicio de sesión",
            "topic.billing": "Pregunta de facturación",
            "topic.partner": "Programa de socios",
            "topic.other": "Otro",
            "form.message": "Mensaje",
            "form.messagePlaceholder": "¿Cómo podemos ayudarle?",
            "form.note": "No incluya información confidencial como números de tarjeta de crédito.",
            "form.submit": "Enviar Mensaje",
            "form.preparing": "Preparando...",
            "form.phoneError": "Ingrese un número de teléfono de 10 dígitos o deje el campo de teléfono en blanco.",
            "form.mailtoReady": "Su aplicación de correo está lista con un mensaje redactado. Envíelo para completar su contacto con nuestro equipo de soporte.",
            "info.title": "Información de Contacto",
            "info.subtitle": "Otras formas de contactarnos",
            "info.phoneTitle": "Teléfono",
            "info.phoneHours": "Lun-Vie: 5AM-10PM PT",
            "info.emailTitle": "Correo Electrónico",
            "info.emailHelp": "Normalmente respondemos dentro de 24 horas",
            "info.addressTitle": "Dirección de la Oficina",
            "info.addressValue": "Beverly Hills, CA",
            "cta.title": "¿Listo para comenzar?",
            "cta.copy": "Seleccione su estado para comenzar y completar su escuela de tránsito hoy.",
            "cta.statePrompt": "Elija Su Estado",
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
            "footer.student": "Comentario del Estudiante",
            "footer.comments": "Comentario del Estudiante",
            "footer.follow": "Síganos",
            "footer.copyrightPrefix": "© 2026 gototrafficschool.com Desarrollado por",
            "footer.copyrightSuffix": "Todos los derechos reservados."
          }
        };

        const states = [
          { value: "alabama", slug: "alabama-online-defensive-driving", nameEn: "Alabama", nameEs: "Alabama" },
          { value: "alaska", slug: "alaska-online-defensive-driving", nameEn: "Alaska", nameEs: "Alaska" },
          { value: "arizona", slug: "arizona-online-defensive-driving", nameEn: "Arizona", nameEs: "Arizona" },
          { value: "arkansas", slug: "arkansas-online-defensive-driving", nameEn: "Arkansas", nameEs: "Arkansas" },
          { value: "california", slug: "california-online-traffic-school", nameEn: "California", nameEs: "California" },
          { value: "colorado", slug: "colorado-online-defensive-driving", nameEn: "Colorado", nameEs: "Colorado" },
          { value: "connecticut", slug: "connecticut-online-defensive-driving", nameEn: "Connecticut", nameEs: "Connecticut" },
          { value: "delaware", slug: "delaware-online-defensive-driving", nameEn: "Delaware", nameEs: "Delaware" },
          { value: "district-of-columbia", slug: "district-of-columbia", nameEn: "Washington, D.C.", nameEs: "Washington, D. C." },
          { value: "florida", slug: "florida-online-traffic-school", nameEn: "Florida", nameEs: "Florida" },
          { value: "georgia", slug: "georgia-online-defensive-driving", nameEn: "Georgia", nameEs: "Georgia" },
          { value: "hawaii", slug: "hawaii-online-defensive-driving", nameEn: "Hawaii", nameEs: "Hawái" },
          { value: "idaho", slug: "idaho-online-defensive-driving", nameEn: "Idaho", nameEs: "Idaho" },
          { value: "illinois", slug: "illinois-online-defensive-driving", nameEn: "Illinois", nameEs: "Illinois" },
          { value: "indiana", slug: "indiana-online-traffic-school", nameEn: "Indiana", nameEs: "Indiana" },
          { value: "iowa", slug: "iowa-online-defensive-driving", nameEn: "Iowa", nameEs: "Iowa" },
          { value: "kansas", slug: "kansas-online-traffic-school", nameEn: "Kansas", nameEs: "Kansas" },
          { value: "kentucky", slug: "kentucky-online-traffic-school", nameEn: "Kentucky", nameEs: "Kentucky" },
          { value: "louisiana", slug: "louisiana-online-defensive-driving", nameEn: "Louisiana", nameEs: "Luisiana" },
          { value: "maine", slug: "maine-online-driver-improvement", nameEn: "Maine", nameEs: "Maine" },
          { value: "maryland", slug: "maryland-online-driver-improvement", nameEn: "Maryland", nameEs: "Maryland" },
          { value: "massachusetts", slug: "massachusetts-online-driver-retraining", nameEn: "Massachusetts", nameEs: "Massachusetts" },
          { value: "michigan", slug: "michigan-online-driver-improvement", nameEn: "Michigan", nameEs: "Michigan" },
          { value: "minnesota", slug: "minnesota-online-defensive-driving", nameEn: "Minnesota", nameEs: "Minnesota" },
          { value: "mississippi", slug: "mississippi-online-defensive-driving", nameEn: "Mississippi", nameEs: "Misisipi" },
          { value: "missouri", slug: "missouri-online-driver-improvement", nameEn: "Missouri", nameEs: "Misuri" },
          { value: "montana", slug: "montana-online-defensive-driving", nameEn: "Montana", nameEs: "Montana" },
          { value: "nebraska", slug: "nebraska-online-defensive-driving", nameEn: "Nebraska", nameEs: "Nebraska" },
          { value: "nevada", slug: "nevada-online-traffic-school", nameEn: "Nevada", nameEs: "Nevada" },
          { value: "new-hampshire", slug: "new-hampshire-online-driver-improvement", nameEn: "New Hampshire", nameEs: "Nuevo Hampshire" },
          { value: "new-jersey", slug: "new-jersey-online-defensive-driving", nameEn: "New Jersey", nameEs: "Nueva Jersey" },
          { value: "new-mexico", slug: "new-mexico-online-defensive-driving", nameEn: "New Mexico", nameEs: "Nuevo México" },
          { value: "new-york", slug: "new-york-online-defensive-driving", nameEn: "New York", nameEs: "Nueva York" },
          { value: "north-carolina", slug: "north-carolina-online-traffic-school", nameEn: "North Carolina", nameEs: "Carolina del Norte" },
          { value: "north-dakota", slug: "north-dakota-online-defensive-driving", nameEn: "North Dakota", nameEs: "Dakota del Norte" },
          { value: "ohio", slug: "ohio-online-remedial-driving", nameEn: "Ohio", nameEs: "Ohio" },
          { value: "oklahoma", slug: "oklahoma-online-defensive-driving", nameEn: "Oklahoma", nameEs: "Oklahoma" },
          { value: "oregon", slug: "oregon-online-traffic-school", nameEn: "Oregon", nameEs: "Oregón" },
          { value: "pennsylvania", slug: "pennsylvania-online-driver-improvement", nameEn: "Pennsylvania", nameEs: "Pensilvania" },
          { value: "rhode-island", slug: "rhode-island-online-defensive-driving", nameEn: "Rhode Island", nameEs: "Rhode Island" },
          { value: "south-carolina", slug: "south-carolina-online-defensive-driving", nameEn: "South Carolina", nameEs: "Carolina del Sur" },
          { value: "south-dakota", slug: "south-dakota-online-defensive-driving", nameEn: "South Dakota", nameEs: "Dakota del Sur" },
          { value: "tennessee", slug: "tennessee-online-defensive-driving", nameEn: "Tennessee", nameEs: "Tennessee" },
          { value: "texas", slug: "texas-online-defensive-driving", nameEn: "Texas", nameEs: "Texas" },
          { value: "utah", slug: "utah-online-traffic-school", nameEn: "Utah", nameEs: "Utah" },
          { value: "vermont", slug: "vermont-online-defensive-driving", nameEn: "Vermont", nameEs: "Vermont" },
          { value: "virginia", slug: "virginia-online-driver-improvement", nameEn: "Virginia", nameEs: "Virginia" },
          { value: "washington", slug: "washington-online-traffic-school", nameEn: "Washington", nameEs: "Washington" },
          { value: "west-virginia", slug: "west-virginia-online-defensive-driving", nameEn: "West Virginia", nameEs: "Virginia Occidental" },
          { value: "wisconsin", slug: "wisconsin-online-traffic-school", nameEn: "Wisconsin", nameEs: "Wisconsin" },
          { value: "wyoming", slug: "wyoming-online-defensive-driving", nameEn: "Wyoming", nameEs: "Wyoming" }
        ];

        const languageSelect = document.getElementById("languageSelect");
        const shareButton = document.getElementById("sharePage");
        const shareToast = document.getElementById("shareToast");
        const stateSelect = document.getElementById("stateSelect");
        const contactForm = document.getElementById("contactForm");
        const formFeedback = document.getElementById("formFeedback");
        const sendButton = document.getElementById("sendButton");
        const metaDescription = document.querySelector('meta[name="description"]');

        function getCurrentLanguage() {
          const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
          if (stored && translations[stored]) return stored;
          return "en";
        }

        function setFeedback(messageKey, type) {
          const lang = getCurrentLanguage();
          formFeedback.textContent = translations[lang][messageKey];
          formFeedback.className = `form-feedback is-visible ${type === "error" ? "is-error" : "is-info"}`;
        }

        function clearFeedback() {
          formFeedback.textContent = "";
          formFeedback.className = "form-feedback";
        }

        function populateStates(lang) {
          if (!stateSelect) return;

          const previousValue = stateSelect.value;
          stateSelect.innerHTML = "";

          const promptOption = document.createElement("option");
          promptOption.value = "";
          promptOption.selected = true;
          promptOption.textContent = translations[lang]["cta.statePrompt"];
          stateSelect.appendChild(promptOption);

          states.forEach((state) => {
            const option = document.createElement("option");
            option.value = state.value;
            option.textContent = lang === "es" ? state.nameEs : state.nameEn;
            stateSelect.appendChild(option);
          });

          if (previousValue) {
            stateSelect.value = previousValue;
          }
        }

        function applyTranslations(lang) {
          document.documentElement.lang = lang;
          document.title = translations[lang].pageTitle;
          if (metaDescription) {
            metaDescription.setAttribute("content", translations[lang].pageDescription);
          }

          document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang][key]) {
              element.textContent = translations[lang][key];
            }
          });

          document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) {
              element.setAttribute("placeholder", translations[lang][key]);
            }
          });

          shareToast.textContent = translations[lang]["share.toast"];
          populateStates(lang);
          window.localStorage.setItem(LANG_STORAGE_KEY, lang);
        }

        function showShareToast() {
          shareToast.classList.add("is-visible");
          window.clearTimeout(showShareToast.timeoutId);
          showShareToast.timeoutId = window.setTimeout(() => {
            shareToast.classList.remove("is-visible");
          }, 2400);
        }

        if (languageSelect) {
          languageSelect.value = getCurrentLanguage();
          languageSelect.addEventListener("change", (event) => {
            applyTranslations(event.target.value);
          });
        }

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
                showShareToast();
              }
            } catch (error) {
              if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                showShareToast();
              }
            }
          });
        }

        if (stateSelect) {
          stateSelect.addEventListener("change", () => {
            const selectedState = states.find((state) => state.value === stateSelect.value);
            if (!selectedState) return;
            window.location.href = `${SITE_BASE}/state/${selectedState.slug}`;
          });
        }

        if (contactForm) {
          contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            clearFeedback();

            if (!contactForm.reportValidity()) {
              return;
            }

            const lang = getCurrentLanguage();
            const fullName = document.getElementById("fullName").value.trim();
            const emailAddress = document.getElementById("emailAddress").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const topicSelect = document.getElementById("topic");
            const topic = topicSelect.options[topicSelect.selectedIndex].textContent.trim();
            const message = document.getElementById("message").value.trim();
            const phoneDigits = phoneNumber.replace(/\D/g, "");

            if (phoneDigits && phoneDigits.length !== 10) {
              setFeedback("form.phoneError", "error");
              return;
            }

            const defaultButtonLabel = translations[lang]["form.submit"];
            sendButton.textContent = translations[lang]["form.preparing"];
            sendButton.disabled = true;

            const bodyLines = [
              `${translations[lang]["form.fullName"]}: ${fullName}`,
              `${translations[lang]["form.email"]}: ${emailAddress}`,
              `${translations[lang]["form.phone"]}: ${phoneNumber || "-"}`,
              `${translations[lang]["form.topic"]}: ${topic}`,
              "",
              `${translations[lang]["form.message"]}:`,
              message
            ];

            const mailtoUrl = `mailto:info@gototrafficschool.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

            window.location.href = mailtoUrl;
            setFeedback("form.mailtoReady", "info");

            window.setTimeout(() => {
              sendButton.textContent = defaultButtonLabel;
              sendButton.disabled = false;
            }, 250);
          });
        }

        applyTranslations(getCurrentLanguage());
      })();
    
  })();

}
