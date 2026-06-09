// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      const STORAGE_KEY = "gtts:partners:lang";
      const states = [
        "Alaska",
        "Arizona",
        "California",
        "Delaware",
        "Florida",
        "Idaho",
        "Indiana",
        "Michigan",
        "Minnesota",
        "Missouri",
        "New Jersey",
        "New York",
        "North Dakota",
        "Oregon",
        "Tennessee",
        "Virginia",
        "Washington",
        "Wisconsin"
      ];

      const translations = {
        en: {
          title: "Partner With GoToTrafficSchool.com",
          skip: "Skip to main content",
          shareButton: "Share This Page",
          topContact: "Contact Us: 1-800-909-3909",
          navAbout: "About Us",
          navHow: "How It Works",
          navFaq: "FAQs",
          navPartner: "Partner with us",
          navContact: "Contact Us",
          navLogin: "Log In",
          languageLabel: "Select Language",
          languageEnglish: "English (US)",
          languageSpanish: "Español",
          heroTitle: "Partner With<br>GoToTrafficSchool.com",
          heroLead: "Online traffic school solutions for courts, attorneys, insurers, and businesses.",
          heroBody: "GoToTrafficSchool.com helps partners offer compliant, convenient online traffic school programs with flexible referral, white-label, court, and business integration options.",
          heroButton: "Become a Partner",
          statesTitle: "State-Approved Programs<br>Across the U.S.",
          statesBody: "GoToTrafficSchool.com offers approved traffic school, defensive driving, and driver improvement programs in multiple states, with compliance handled by CyberActive.",
          calloutTitle: "No Statewide Approval? We Can Work Directly With Courts.",
          calloutBody: "In states where approval is handled locally, we work with courts and jurisdictions to provide accepted online traffic school solutions.",
          calloutButton: "Talk to Our Partnership Team",
          opportunitiesTitle: "Partnership Opportunities",
          stepsTitle: "How Our Partnerships Work",
          whiteLabelTitle: "White Label Traffic<br>School Programs",
          whiteLabelBody: "Offer traffic school under your own brand while CyberActive manages everything.",
          whiteLabelButton: "Learn More About White Label",
          referralTitle: "Simple Referral<br>Program",
          referralBody: "For individuals and organizations, we offer easy referral links and codes.",
          referralButton: "Request a Referral Code",
          formTitle: "Ready to Partner With GoToTrafficSchool.com?",
          formBody: "Fill out the form below and one of our partnership specialists will reach out to discuss the best solution for your needs.",
          labelFullName: "Full Name",
          placeholderFullName: "Your full name",
          labelEmail: "Email Address",
          placeholderEmail: "you@example.com",
          labelPhone: "Phone",
          optional: "(optional)",
          placeholderPhone: "(888) 329-7069",
          labelInterest: "Partnership Interest <span class=\"optional\">(optional)</span>",
          labelOrganization: "Organizational Type",
          labelMessage: "Message",
          placeholderMessage: "Write...",
          submitButton: "Submit Partnership Request",
          footerDescription: "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
          footerLocation: "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
          footerCompany: "Company",
          footerAbout: "About Us",
          footerHow: "How It Works",
          footerFaq: "FAQ",
          footerContact: "Contact",
          footerPartner: "Partner Program",
          footerLegal: "Legal",
          footerPrivacy: "Privacy Policy",
          footerTerms: "Terms Of Service",
          footerCourt: "Court Directory",
          footerStudents: "Student Comment",
          footerFollow: "Follow Us",
          socialTiktok: "TikTok",
          socialInstagram: "Instagram",
          socialX: "X",
          socialYoutube: "YouTube",
          socialFacebook: "Facebook",
          copyrightLead: "© 2026 gototrafficschool.com Powered by",
          copyrightTail: "All rights reserved.",
          shareSuccess: "Page link copied.",
          formSuccess: "Thanks. Your partnership request has been captured.",
          metrics: [
            {
              icon: "assets/10 Millions+.png",
              title: "10 Millions+",
              subtitle: "Drivers Served"
            },
            {
              icon: "assets/State & Court.png",
              title: "State & Court",
              subtitle: "Accepted Programs"
            },
            {
              icon: "assets/White Label (2).png",
              title: "White Label",
              subtitle: "Available"
            },
            {
              icon: "assets/Certificate.png",
              title: "Certificate",
              subtitle: "Delivery Support"
            }
          ],
          proofItems: [
            {
              icon: "assets/icons/Group 1000005353 (2).png",
              title: "10 Millions+",
              subtitle: "Drivers Served"
            },
            {
              icon: "assets/icons/Mask group (6).png",
              title: "State & Court",
              subtitle: "Accepted Programs"
            },
            {
              icon: "assets/icons/Mask group (8).png",
              title: "100% Online",
              subtitle: "Convenient & Easy"
            },
            {
              icon: "assets/icons/Mask group (11).png",
              title: "Mobile Friendly",
              subtitle: "iOS & Android"
            }
          ],
          opportunities: [
            {
              icon: "assets/icons/opportunity-courts.png",
              title: "Courts",
              body: "Reduce administrative burden and make traffic school easy for your constituents.",
              bullets: [
                "Offer online access",
                "Fee collection (where directed)",
                "Certificate delivery support",
                "White label or direct link options"
              ]
            },
            {
              icon: "assets/icons/opportunity-attorneys.png",
              title: "Traffic Attorneys",
              body: "Give your clients a simple, reliable way to complete traffic school.",
              bullets: [
                "Custom referral links",
                "Discount & coupon codes",
                "White label solutions",
                "Integration into your website"
              ]
            },
            {
              icon: "assets/icons/opportunity-insurance.png",
              title: "Insurance Companies",
              body: "Support driver improvement and help reduce risk with our online programs.",
              bullets: [
                "Good-driver discounts",
                "Point reduction programs",
                "Driver safety initiatives",
                "Flexible integration options"
              ]
            },
            {
              icon: "assets/icons/opportunity-businesses.png",
              title: "Businesses and Organizations",
              body: "Offer traffic school as part of your services or platform.",
              bullets: [
                "Referral & link partnerships",
                "Custom integrations",
                "White label options",
                "Certificate delivery available"
              ]
            }
          ],
          steps: [
            {
              icon: "assets/icons/Group 2147224529 (3).png",
              title: "Choose Your Partnership Model",
              body: "Choose the option that works best for you: referral, direct link, white label, or custom integration."
            },
            {
              icon: "assets/icons/Group 2147224529 (2).png",
              title: "We Configure Everything",
              body: "We set up branding, reporting, certificate delivery, tracking, and everything you need."
            },
            {
              icon: "assets/icons/Group 2147224529 (1).png",
              title: "Your Users Start Online",
              body: "Students enroll, complete the course, and receive their certificate - fully online."
            }
          ],
          whiteLabelBullets: [
            "Fully branded partner experience",
            "Backend course & compliance management",
            "Reporting & tracking",
            "Certificate delivery options",
            "No need to build or maintain technology"
          ],
          referralBullets: [
            "Earn $5 for each successful referral",
            "Your referral receives a $2 discount",
            "It’s an easy way to share a trusted program while offering value to others."
          ],
          interestOptions: [
            "Select your interest",
            "Court partnership",
            "Attorney referral program",
            "Insurance program",
            "White label solution",
            "Business integration"
          ],
          organizationOptions: [
            "Select your organization",
            "Court or government agency",
            "Law firm or attorney",
            "Insurance company",
            "Business or organization",
            "Individual affiliate"
          ]
        },
        es: {
          title: "Asóciese con GoToTrafficSchool.com",
          skip: "Saltar al contenido principal",
          shareButton: "Compartir Esta Página",
          topContact: "Contáctenos: 1-800-909-3909",
          navAbout: "Sobre Nosotros",
          navHow: "Cómo Funciona",
          navFaq: "Preguntas Frecuentes",
          navPartner: "Asóciese con nosotros",
          navContact: "Contáctenos",
          navLogin: "Iniciar Sesión",
          languageLabel: "Seleccionar Idioma",
          languageEnglish: "Inglés (EE. UU.)",
          languageSpanish: "Español",
          heroTitle: "Asóciese con<br>GoToTrafficSchool.com",
          heroLead: "Soluciones de escuela de tránsito en línea para tribunales, abogados, aseguradoras y empresas.",
          heroBody: "GoToTrafficSchool.com ayuda a sus socios a ofrecer programas de escuela de tránsito en línea que son convenientes y cumplen con los requisitos, con opciones flexibles de referidos, marca blanca, tribunales e integración comercial.",
          heroButton: "Conviértase en Socio",
          statesTitle: "Programas Aprobados por el Estado<br>en Todo EE. UU.",
          statesBody: "GoToTrafficSchool.com ofrece programas aprobados de escuela de tránsito, manejo defensivo y mejoramiento del conductor en varios estados, con el cumplimiento administrado por CyberActive.",
          calloutTitle: "¿No hay aprobación estatal general? Podemos trabajar directamente con los tribunales.",
          calloutBody: "En los estados donde la aprobación se maneja localmente, trabajamos con tribunales y jurisdicciones para ofrecer soluciones aceptadas de escuela de tránsito en línea.",
          calloutButton: "Hable con Nuestro Equipo de Alianzas",
          opportunitiesTitle: "Oportunidades de Asociación",
          stepsTitle: "Cómo Funcionan Nuestras Asociaciones",
          whiteLabelTitle: "Programas de Escuela de Tránsito<br>de Marca Blanca",
          whiteLabelBody: "Ofrezca escuela de tránsito bajo su propia marca mientras CyberActive gestiona todo.",
          whiteLabelButton: "Más Información Sobre Marca Blanca",
          referralTitle: "Programa Simple<br>de Referidos",
          referralBody: "Para personas y organizaciones, ofrecemos enlaces y códigos de referido fáciles de usar.",
          referralButton: "Solicitar un Código de Referido",
          formTitle: "¿Listo para Asociarse con GoToTrafficSchool.com?",
          formBody: "Complete el siguiente formulario y uno de nuestros especialistas en alianzas se comunicará con usted para hablar sobre la mejor solución para sus necesidades.",
          labelFullName: "Nombre Completo",
          placeholderFullName: "Su nombre completo",
          labelEmail: "Correo Electrónico",
          placeholderEmail: "usted@ejemplo.com",
          labelPhone: "Teléfono",
          optional: "(opcional)",
          placeholderPhone: "(888) 329-7069",
          labelInterest: "Interés de Asociación <span class=\"optional\">(opcional)</span>",
          labelOrganization: "Tipo de Organización",
          labelMessage: "Mensaje",
          placeholderMessage: "Escriba...",
          submitButton: "Enviar Solicitud de Asociación",
          footerDescription: "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
          footerLocation: "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
          footerCompany: "Empresa",
          footerAbout: "Sobre Nosotros",
          footerHow: "Cómo Funciona",
          footerFaq: "Preguntas Frecuentes",
          footerContact: "Contacto",
          footerPartner: "Programa de Socios",
          footerLegal: "Legal",
          footerPrivacy: "Política de Privacidad",
          footerTerms: "Términos del Servicio",
          footerCourt: "Directorio de Tribunales",
          footerStudents: "Comentario de Estudiante",
          footerFollow: "Síganos",
          socialTiktok: "TikTok",
          socialInstagram: "Instagram",
          socialX: "X",
          socialYoutube: "YouTube",
          socialFacebook: "Facebook",
          copyrightLead: "© 2026 gototrafficschool.com Desarrollado por",
          copyrightTail: "Todos los derechos reservados.",
          shareSuccess: "Enlace de la página copiado.",
          formSuccess: "Gracias. Su solicitud de asociación ha sido registrada.",
          metrics: [
            {
              icon: "assets/10 Millions+.png",
              title: "Más de 10 Millones",
              subtitle: "Conductores Atendidos"
            },
            {
              icon: "assets/State & Court.png",
              title: "Programas Estatales y Judiciales",
              subtitle: "Aceptados"
            },
            {
              icon: "assets/White Label (2).png",
              title: "Marca Blanca",
              subtitle: "Disponible"
            },
            {
              icon: "assets/Certificate.png",
              title: "Certificado",
              subtitle: "Soporte de Entrega"
            }
          ],
          proofItems: [
            {
              icon: "assets/icons/Group 1000005353 (2).png",
              title: "Más de 10 Millones",
              subtitle: "Conductores Atendidos"
            },
            {
              icon: "assets/icons/Mask group (6).png",
              title: "Programas Estatales y Judiciales",
              subtitle: "Aceptados"
            },
            {
              icon: "assets/icons/Mask group (8).png",
              title: "100% en Línea",
              subtitle: "Conveniente y Fácil"
            },
            {
              icon: "assets/icons/Mask group (11).png",
              title: "Compatible con Móviles",
              subtitle: "iOS y Android"
            }
          ],
          opportunities: [
            {
              icon: "assets/icons/opportunity-courts.png",
              title: "Tribunales",
              body: "Reduzca la carga administrativa y haga que la escuela de tránsito sea fácil para sus constituyentes.",
              bullets: [
                "Ofrezca acceso en línea",
                "Cobro de tarifas (cuando se indique)",
                "Soporte para la entrega de certificados",
                "Opciones de marca blanca o enlace directo"
              ]
            },
            {
              icon: "assets/icons/opportunity-attorneys.png",
              title: "Abogados de Tránsito",
              body: "Brinde a sus clientes una forma simple y confiable de completar la escuela de tránsito.",
              bullets: [
                "Enlaces de referido personalizados",
                "Descuentos y códigos de cupón",
                "Soluciones de marca blanca",
                "Integración en su sitio web"
              ]
            },
            {
              icon: "assets/icons/opportunity-insurance.png",
              title: "Compañías de Seguro",
              body: "Apoye el mejoramiento del conductor y ayude a reducir el riesgo con nuestros programas en línea.",
              bullets: [
                "Descuentos para buenos conductores",
                "Programas de reducción de puntos",
                "Iniciativas de seguridad vial",
                "Opciones de integración flexibles"
              ]
            },
            {
              icon: "assets/icons/opportunity-businesses.png",
              title: "Empresas y Organizaciones",
              body: "Ofrezca escuela de tránsito como parte de sus servicios o plataforma.",
              bullets: [
                "Alianzas de referidos y enlaces",
                "Integraciones personalizadas",
                "Opciones de marca blanca",
                "Entrega de certificados disponible"
              ]
            }
          ],
          steps: [
            {
              icon: "assets/icons/Group 2147224529 (3).png",
              title: "Elija Su Modelo de Asociación",
              body: "Elija la opción que mejor se adapte a usted: referido, enlace directo, marca blanca o integración personalizada."
            },
            {
              icon: "assets/icons/Group 2147224529 (2).png",
              title: "Configuramos Todo",
              body: "Configuramos la marca, los reportes, la entrega de certificados, el seguimiento y todo lo que necesite."
            },
            {
              icon: "assets/icons/Group 2147224529 (1).png",
              title: "Sus Usuarios Comienzan en Línea",
              body: "Los estudiantes se inscriben, completan el curso y reciben su certificado, todo completamente en línea."
            }
          ],
          whiteLabelBullets: [
            "Experiencia de socio totalmente personalizada",
            "Gestión operativa del curso y cumplimiento",
            "Reportes y seguimiento",
            "Opciones de entrega de certificados",
            "Sin necesidad de crear o mantener tecnología"
          ],
          referralBullets: [
            "Gane $5 por cada referido exitoso",
            "Su referido recibe un descuento de $2",
            "Es una forma sencilla de compartir un programa confiable mientras ofrece valor a otras personas."
          ],
          interestOptions: [
            "Seleccione su interés",
            "Asociación con tribunales",
            "Programa de referidos para abogados",
            "Programa para aseguradoras",
            "Solución de marca blanca",
            "Integración comercial"
          ],
          organizationOptions: [
            "Seleccione su organización",
            "Tribunal o agencia gubernamental",
            "Despacho jurídico o abogado",
            "Compañía de seguros",
            "Empresa u organización",
            "Afiliado individual"
          ]
        }
      };

      const heroMetricsEl = document.getElementById("heroMetrics");
      const proofGridEl = document.getElementById("proofGrid");
      const statesGridEl = document.getElementById("statesGrid");
      const opportunityGridEl = document.getElementById("opportunityGrid");
      const stepsGridEl = document.getElementById("stepsGrid");
      const whiteLabelListEl = document.getElementById("whiteLabelList");
      const referralListEl = document.getElementById("referralList");
      const languageSelect = document.getElementById("languageSelect");
      const interestSelect = document.getElementById("interestSelect");
      const organizationSelect = document.getElementById("organizationSelect");
      const partnershipForm = document.getElementById("partnershipForm");
      const shareButton = document.getElementById("sharePage");
      const actionToastEl = document.getElementById("actionToast");
      const actionToastBody = document.getElementById("actionToastBody");

      const actionToast = actionToastEl ? new bootstrap.Toast(actionToastEl, { delay: 2400 }) : null;
      let revealObserver = null;

      function getLanguage() {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        return saved === "es" ? "es" : "en";
      }

      function showToast(message) {
        if (!actionToastBody || !actionToast) {
          return;
        }
        actionToastBody.textContent = message;
        actionToast.show();
      }

      function renderSimpleText(lang) {
        const content = translations[lang];
        document.title = content.title;
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
          const key = element.dataset.i18n;
          if (content[key]) {
            element.textContent = content[key];
          }
        });

        document.querySelectorAll("[data-i18n-html]").forEach((element) => {
          const key = element.dataset.i18nHtml;
          if (content[key]) {
            element.innerHTML = content[key];
          }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
          const key = element.dataset.i18nPlaceholder;
          if (content[key]) {
            element.placeholder = content[key];
          }
        });

        languageSelect.options[0].textContent = content.languageEnglish;
        languageSelect.options[1].textContent = content.languageSpanish;
      }

      function renderHeroMetrics(lang) {
        heroMetricsEl.innerHTML = translations[lang].metrics.map((item) => `
          <article class="hero-metric-card reveal-on-scroll">
            <img src="${item.icon}" alt="">
            <div>
              <strong>${item.title}</strong>
              <span>${item.subtitle}</span>
            </div>
          </article>
        `).join("");
      }

      function renderProofGrid(lang) {
        proofGridEl.innerHTML = translations[lang].proofItems.map((item) => `
          <article class="proof-item reveal-on-scroll">
            <img src="${item.icon}" alt="">
            <div>
              <strong>${item.title}</strong>
              <span>${item.subtitle}</span>
            </div>
          </article>
        `).join("");
      }

      function renderStates() {
        statesGridEl.innerHTML = states.map((state) => `<span class="state-pill reveal-on-scroll">${state}</span>`).join("");
      }

      function renderCheckList(items) {
        return items.map((item) => `<li><i class="bi bi-check-lg" aria-hidden="true"></i><span>${item}</span></li>`).join("");
      }

      function renderOpportunities(lang) {
        opportunityGridEl.innerHTML = translations[lang].opportunities.map((item) => `
          <article class="opportunity-card reveal-on-scroll">
            <div class="opportunity-icon">
              <img src="${item.icon}" alt="">
            </div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <ul class="check-list">
              ${renderCheckList(item.bullets)}
            </ul>
          </article>
        `).join("");
      }

      function renderSteps(lang) {
        stepsGridEl.innerHTML = translations[lang].steps.map((item, index) => `
          <article class="step-card reveal-on-scroll">
            <div class="step-number">${index + 1}</div>
            <div>
              <div class="step-icon">
                <img src="${item.icon}" alt="">
              </div>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </div>
          </article>
        `).join("");
      }

      function renderProgramLists(lang) {
        whiteLabelListEl.innerHTML = renderCheckList(translations[lang].whiteLabelBullets);
        referralListEl.innerHTML = renderCheckList(translations[lang].referralBullets);
      }

      function populateSelect(selectEl, options) {
        selectEl.innerHTML = options.map((option, index) => `
          <option value="${index === 0 ? "" : option.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}">${option}</option>
        `).join("");
      }

      function renderFormOptions(lang) {
        populateSelect(interestSelect, translations[lang].interestOptions);
        populateSelect(organizationSelect, translations[lang].organizationOptions);
      }

      function setupRevealObserver() {
        if (revealObserver) {
          revealObserver.disconnect();
        }

        revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.15
        });

        document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
          if (!element.classList.contains("is-visible")) {
            revealObserver.observe(element);
          }
        });
      }

      function renderLanguage(lang) {
        window.localStorage.setItem(STORAGE_KEY, lang);
        renderSimpleText(lang);
        renderHeroMetrics(lang);
        renderProofGrid(lang);
        renderStates();
        renderOpportunities(lang);
        renderSteps(lang);
        renderProgramLists(lang);
        renderFormOptions(lang);
        setupRevealObserver();
      }

      if (languageSelect) {
        languageSelect.value = getLanguage();
        languageSelect.addEventListener("change", (event) => {
          renderLanguage(event.target.value);
        });
      }

      if (shareButton) {
        shareButton.addEventListener("click", async () => {
          const currentLang = getLanguage();
          const message = translations[currentLang].shareSuccess;

          try {
            if (navigator.share) {
              await navigator.share({
                title: document.title,
                url: window.location.href
              });
              return;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(window.location.href);
              showToast(message);
              return;
            }

            showToast(message);
          } catch (error) {
            showToast(message);
          }
        });
      }

      if (partnershipForm) {
        partnershipForm.addEventListener("submit", (event) => {
          event.preventDefault();

          if (!partnershipForm.checkValidity()) {
            partnershipForm.reportValidity();
            return;
          }

          const currentLang = getLanguage();
          partnershipForm.reset();
          renderFormOptions(currentLang);
          showToast(translations[currentLang].formSuccess);
        });
      }

      renderLanguage(getLanguage());
    
  })();

}
