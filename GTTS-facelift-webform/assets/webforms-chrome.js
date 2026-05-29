(function () {
  const chromeTranslations = {
    en: {
      "skip": "Skip to main content",
      "share.button": "Share This Page",
      "top.share": "Share This Page",
      "utility.contact": "Contact Us: 1-800-909-3909",
      "top.contact": "Contact Us: 1-800-909-3909",
      "nav.about": "About Us",
      "nav.how": "How It Works",
      "nav.faq": "FAQs",
      "nav.partner": "Partner with us",
      "nav.contact": "Contact Us",
      "nav.login": "Log In",
      "footer.home": "Home",
      "footer.blurb": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
      "footer.brand": "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
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
      "footer.comments": "Student Comment",
      "footer.follow": "Follow Us",
      "footer.copyrightPrefix": "© 2026 gototrafficschool.com Powered by",
      "footer.copyrightSuffix": "All rights reserved."
    },
    es: {
      "skip": "Saltar al contenido principal",
      "share.button": "Compartir Esta Página",
      "top.share": "Compartir Esta Página",
      "utility.contact": "Contáctenos: 1-800-909-3909",
      "top.contact": "Contáctenos: 1-800-909-3909",
      "nav.about": "Sobre Nosotros",
      "nav.how": "Cómo Funciona",
      "nav.faq": "Preguntas Frecuentes",
      "nav.partner": "Programa de Socios",
      "nav.contact": "Contáctenos",
      "nav.login": "Iniciar Sesión",
      "footer.home": "Inicio",
      "footer.blurb": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
      "footer.brand": "La forma más rápida y sencilla de completar su escuela de tránsito en línea. Con la confianza de más de 10 millones de conductores en todo el país.",
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
      "footer.court": "Directorio de Tribunales",
      "footer.comments": "Comentarios de Estudiantes",
      "footer.follow": "Síganos",
      "footer.copyrightPrefix": "© 2026 gototrafficschool.com Desarrollado por",
      "footer.copyrightSuffix": "Todos los derechos reservados."
    }
  };

  function detectLanguage() {
    const select = document.getElementById("languageSelect");
    if (select) {
      const value = String(select.value || "").toLowerCase();
      if (value === "es" || value === "spanish") return "es";
    }

    const siteSelect = document.getElementById("siteLanguageSelect");
    if (siteSelect) {
      const value = String(siteSelect.value || "").toLowerCase();
      if (value === "spanish" || value === "es") return "es";
    }

    return document.documentElement.lang === "es" ? "es" : "en";
  }

  function applyChromeTranslations() {
    const lang = detectLanguage();
    const dictionary = chromeTranslations[lang] || chromeTranslations.en;

    document.querySelectorAll(".site-header [data-i18n], .site-footer [data-i18n], .skip-link[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const alternateKey = element.getAttribute("data-i18n-alt");
      const value = dictionary[key] || dictionary[alternateKey];

      if (value) {
        element.textContent = value;
      }
    });

    const siteSelect = document.getElementById("siteLanguageSelect");
    if (siteSelect) {
      siteSelect.value = lang === "es" ? "Spanish" : "English";
    }
  }

  function setPageLanguage(lang) {
    const normalized = lang === "es" ? "es" : "en";
    const pageSelect = document.getElementById("languageSelect");

    try {
      window.localStorage.setItem("gtts:lang", normalized);
    } catch (error) {}

    if (pageSelect) {
      const optionValues = Array.from(pageSelect.options).map((option) => option.value);
      pageSelect.value = optionValues.includes(normalized)
        ? normalized
        : normalized === "es"
          ? "Spanish"
          : "English";
      pageSelect.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      document.documentElement.lang = normalized;
      document.dispatchEvent(new CustomEvent("gtts-disabled-legacy-i18n"));
      document.dispatchEvent(new CustomEvent("gtts-language-change", { detail: { language: normalized } }));
    }

    window.setTimeout(applyChromeTranslations, 0);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const pageSelect = document.getElementById("languageSelect");
    const siteSelect = document.getElementById("siteLanguageSelect");
    let savedLanguage = null;

    try {
      savedLanguage = window.localStorage.getItem("gtts:lang");
    } catch (error) {}

    if (!pageSelect && (savedLanguage === "es" || savedLanguage === "en")) {
      document.documentElement.lang = savedLanguage;
      if (siteSelect) {
        siteSelect.value = savedLanguage === "es" ? "Spanish" : "English";
      }
      document.dispatchEvent(new CustomEvent("gtts-disabled-legacy-i18n"));
      document.dispatchEvent(new CustomEvent("gtts-language-change", { detail: { language: savedLanguage } }));
    }

    applyChromeTranslations();

    if (pageSelect) {
      pageSelect.addEventListener("change", () => {
        window.setTimeout(applyChromeTranslations, 0);
      });
    }

    if (siteSelect) {
      siteSelect.addEventListener("change", () => {
        setPageLanguage(siteSelect.value === "Spanish" ? "es" : "en");
      });
    }

    const observer = new MutationObserver(() => applyChromeTranslations());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  });
})();
