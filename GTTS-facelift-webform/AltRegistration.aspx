<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17691289057">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17691289057');
    </script>
    <title data-i18n="meta.title">Online Traffic School – Fast, Approved, Affordable | GoToTrafficSchool</title>
    <link
      rel="icon"
      type="image/webp"
      sizes="64x64"
      href="assets/favicon.webp"
    />
    <script>(function(){var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0]; stid='dW9OZk0yWXhhbDI0em53cmNDTVVTZz09';pp.type='text/javascript'; pp.async=true; pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/'; ppr.parentNode.insertBefore(pp, ppr);})();</script>

    <!-- Bootstrap 5 -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />

    <!-- Bootstrap Icons -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />

    <style>
      :root{
        --brand-blue: #0b4a78;
        --brand-navy: #133d60;
        --brand-blue-2: #0f5d99;
        --soft-bg: #f6f7f9;
        --footer-bg: #cfe3ef;
        --footer-blue: #d7ebf5;
        --text-muted-2: #6c757d;
        --primary: #0067c5;   /* main blue */
        --primary-dark: #024578;

        /* ✅ NAV + HERO padding cap */
        --nav-hero-pad: 40px;
      }

      body{
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        color: #111;
      }

      /* ============================================================
         ✅ ADA: Skip link + Focus styles (preserve style, add clarity)
         ============================================================ */
      .skip-link{
        position:absolute;
        left:-9999px;
        top:12px;
        z-index:9999;
        background:#fff;
        color:#000;
        padding:10px 14px;
        border:2px solid #000;
        border-radius:10px;
        text-decoration:none;
        font-weight: 700;
      }
      .skip-link:focus{
        left:12px;
      }

      :focus-visible { outline: 3px solid #ffbf47; outline-offset: 3px; }

      @media (prefers-reduced-motion: reduce){
        *{ scroll-behavior: auto !important; transition: none !important; }
      }

      /* ---------- NAV ---------- */
      .top-nav{
        border-bottom: 1px solid #e7e7e7;
        background: #fff;
      }
      .nav-link{
        color: #111;
        font-weight: 500;
      }
      .nav-link:hover{ color: var(--brand-blue); }
      .btn-login{
        background: var(--brand-blue);
        color: #fff;
        border: 0;
        border-radius: 15px;
        padding: 10px 30px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        white-space: nowrap;
      }
      .btn-login:hover{ background: #083a5e; color:#fff; }

      /* Top info bar */
      .top-bar { background: var(--primary-dark); color: #f9fafb; font-size: 0.9rem; }

      /* Default container for the rest of the page */
      .container { width: min(1120px, 100%); margin: 0 auto; padding: 0 1.25rem; }

      /* ✅ NAV + HERO ONLY: max 40px horizontal padding + full width */
      nav.top-nav > .container-fluid{
        width: 100%;
      }

      .top-bar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.55rem 0;
        gap: 1rem;
      }

      .top-bar-contact span { opacity: 0.9; font-weight: 500; }

      .top-bar-share { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }

      .top-bar-share > a {
        text-decoration: none; color: inherit;
      }

      .pill-badge {
        border-radius: 999px;
        padding: 0.2rem 0.75rem;
        border: 1px solid rgba(249, 250, 251, 0.25);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        opacity: 0.85;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      /* ✅ App button beside share */
      .app-pill-btn{
        cursor: pointer;
        background: rgba(255,255,255,1);
        border-color: rgba(249,250,251,.25);
      }
      .app-pill-btn:hover{ background: rgba(255,255,255,1); }

      .modal-open-btn {color: #d9534f; font-weight: bold; background:white;}

      /* Make navbar toggle icon visible on white */
      .navbar-toggler{
        border-color: rgba(0,0,0,.12);
      }
      .navbar-toggler-icon{
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280,0,0,0.65%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }

      /* ---------- ✅ NEW BODY SECTION (WHITE BG + CENTERED STATE SELECT) ---------- */
      .state-page{
        background: #fff;
        padding: 88px 0;
      }
      .state-page-card{
        max-width: 820px;
        margin: 0 auto;
        text-align: center;
      }
      .state-page-title{
        font-weight: 800;
        color: #0b4a78;
        letter-spacing: -0.02em;
        margin-bottom: 10px;
      }
      .state-page-sub{
        color: var(--text-muted-2);
        font-size: 18px;
        margin-bottom: 24px;
      }

      /* Reuse exact same select styling */
      .state-select-wrap{
        max-width: 640px;
        position: relative;
        margin: 0 auto;
      }
      .state-select{
        height: 40px;
        max-width: 370px;
        border-radius: 14px;
        font-size: 15px;
        padding-left: 28px;
        padding-right: 58px;
        border: 1px solid rgba(0,0,0,.12);
        box-shadow: 0 10px 26px rgba(0,0,0,.18);
        background-color: rgba(255,255,255,.95);
        margin: 0 auto;
      }
      .state-select:focus{
        border-color: rgba(15,93,153,.55);
        box-shadow: 0 0 0 .25rem rgba(15,93,153,.18);
      }

      @media (max-width: 991.98px){
        .state-page{ padding: 74px 0; }
        .state-select{
          font-size: 20px;
          height: 64px;
          padding-left: 18px;
          padding-right: 46px;
          border-radius: 14px;
          max-width: 100%;
        }
      }

      @media (max-width: 575.98px){
        .state-page{ padding: 56px 0; }
        .state-page-sub{ font-size: 16px; }
        .state-select{
          width: 100%;
          height: 58px;
          font-size: 18px;
          border-radius: 12px;
        }
      }

      /* ---------- FOOTER ---------- */
      .site-footer{
        background: var(--footer-bg);
        padding: 56px 0;
        border-top: 1px solid rgba(0,0,0,.06);
      }
      .footer-logo{
        max-width: 220px;
        height: auto;
        margin-bottom: 16px;
      }
      .footer-desc{
        max-width: 360px;
        color: #1a4f72;
        font-weight: 500;
      }
      .footer-contact{
        margin-top: 26px;
        color: #1a4f72;
        font-weight: 600;
      }
      .footer-contact a{
        color: #1a4f72;
        text-decoration: none;
      }
      .footer-contact a:hover{ text-decoration: underline; }

      .footer-head{
        color: #1a4f72;
        font-weight: 800;
        margin-bottom: 14px;
      }
      .footer-links a{
        display: block;
        color: #1a4f72;
        text-decoration: none;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 600;
      }
      .footer-links a:hover{ text-decoration: underline; }

      .footer-social-row{
        background: var(--footer-bg);
        padding: 14px 0 0;
      }
      .social-icons{
        display: flex;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
        padding: 8px 0 10px;
      }
      .social-icons a{
        width: 44px;
        height: 44px;
        border-radius: 999px;
        background: rgba(255,255,255,.65);
        border: 1px solid rgba(0,0,0,.08);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #083a5e;
        text-decoration: none;
        transition: transform .12s ease, background-color .12s ease;
      }
      .social-icons a:hover{
        transform: translateY(-1px);
        background: rgba(255,255,255,.9);
      }
      .social-icons i{ font-size: 20px; }

      .powered{
        background: #000;
        color: #fff;
        text-align: center;
        padding: 16px 10px;
        font-size: 22px;
      }

      img, svg, video, canvas{
        max-width: 100%;
        height: auto;
      }
      body{ overflow-x: hidden; }

      @media (min-width: 992px){
        .nav-login-gap{ margin-left: 40px !important; }
        .navbar-nav .nav-item{ margin-left: 18px; }
      }

      /* ✅ Desktop: ensure at least 500px tall */
      @media (min-width: 992px){
        .state-page{
          min-height: 500px;
          display: flex;
          align-items: center;  /* vertical center */
        }

        /* keeps your card centered when section becomes flex */
        .state-page .container{
          width: 100%;
        }
      }

      /* Canonical partnerProgram header and footer */
      .site-header {
        width: 100%;
        overflow-x: clip;
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
      }

      .site-header .container-xxl,
      .site-footer .container-xxl {
        max-width: 1440px;
      }

      .site-header .utility-bar {
        min-height: 40px !important;
        max-height: 40px !important;
        display: flex !important;
        align-items: center !important;
        background: var(--brand-navy, #133d60) !important;
        color: #fff !important;
      }

      .site-header .utility-bar .container-xxl {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        padding-left: clamp(18px, 3vw, 42px) !important;
        padding-right: clamp(18px, 3vw, 32px) !important;
      }

      .site-header .share-button {
        min-width: 180px !important;
        width: auto !important;
        max-width: none !important;
        height: 28px !important;
        max-height: 30px !important;
        min-height: 0 !important;
        padding: 0 !important;
        border: 1px solid rgba(255, 255, 255, 0.82) !important;
        border-radius: 8px !important;
        background: transparent !important;
        color: #fff !important;
        font-size: 13px !important;
        font-weight: 400 !important;
        line-height: normal !important;
        letter-spacing: 0.9px !important;
        text-transform: uppercase !important;
      }

      .site-header .utility-phone {
        width: auto !important;
        color: #fff !important;
        font-size: 15px !important;
        line-height: normal !important;
        letter-spacing: 0.2px !important;
        text-align: right !important;
      }

      .site-header .main-nav {
        min-height: 108px !important;
        height: auto !important;
        padding: 0 !important;
        border-bottom: 1px solid #eef2f6 !important;
      }

      .site-header .main-nav .container-xxl {
        min-height: 0 !important;
        display: flex;
        align-items: center;
        padding-left: clamp(18px, 2.6vw, 36px) !important;
        padding-right: clamp(18px, 2vw, 20px) !important;
      }

      .site-header .navbar-brand {
        position: static !important;
        inset: auto !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .site-header .navbar-brand img {
        width: clamp(220px, 20vw, 282px) !important;
        height: auto !important;
        display: block !important;
        object-fit: contain !important;
      }

      .site-header .main-nav .nav-links {
        position: static !important;
        inset: auto !important;
        width: auto !important;
        height: auto !important;
        gap: 0 !important;
      }

      .site-header .main-nav .nav-links .nav-item,
      .site-header .main-nav .nav-links .nav-item:nth-child(n) {
        position: static !important;
        inset: auto !important;
        width: auto !important;
        display: list-item !important;
      }

      .site-header .main-nav .nav-link {
        color: #111 !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        line-height: normal !important;
        padding: 10px 13px !important;
        white-space: nowrap !important;
      }

      .site-header .main-nav .nav-link:hover,
      .site-header .main-nav .nav-link:focus,
      .site-header .main-nav .nav-link.active {
        color: var(--brand-blue, #004985) !important;
      }

      .site-header .main-nav .nav-link.active {
        font-weight: 800 !important;
      }

      .site-header .nav-actions {
        display: flex !important;
        align-items: center !important;
        gap: 18px !important;
        margin-left: 16px !important;
      }

      .site-header .language-wrap {
        width: 134px !important;
        min-height: 40px !important;
        display: flex !important;
        align-items: center !important;
        gap: 7px !important;
        padding: 7px 6px 7px 10px !important;
        border: 1px solid #ebebeb !important;
        border-radius: 8px !important;
        background: #fff !important;
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04) !important;
      }

      .site-header .language-wrap i {
        color: #40464f !important;
        font-size: 16px !important;
      }

      .site-header .language-wrap .form-select {
        height: 26px !important;
        border: 0 !important;
        background-color: transparent !important;
        box-shadow: none !important;
        color: #3b3b3b !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        padding: 0 24px 0 0 !important;
      }

      .site-header .login-link {
        width: 98px !important;
        min-width: 98px !important;
        height: 42px !important;
        min-height: 42px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        padding: 0 !important;
        border-radius: 6px !important;
        background: linear-gradient(180deg, #276294 0%, #273948 100%) !important;
        color: #fff !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        line-height: normal !important;
        transition: background 180ms ease, transform 180ms ease !important;
      }

      .site-header .login-link:hover,
      .site-header .login-link:focus {
        color: #fff !important;
        background: linear-gradient(180deg, #276294 0%, #273948 100%) !important;
        transform: translateY(-1px) !important;
      }

      .site-header .login-link i {
        color: inherit !important;
        font-size: 16px !important;
      }

      .site-footer {
        color: #004a80;
        padding: 0;
        border-top: 0;
        background: transparent;
      }

      .footer-main {
        padding: 46px 0 30px;
        background: var(--footer-blue);
      }

      .footer-main .container-xxl {
        padding-left: clamp(22px, 5vw, 72px);
        padding-right: clamp(22px, 5vw, 72px);
      }

      .footer-brand img {
        width: 240px;
        margin-bottom: 28px;
      }

      .footer-brand p {
        max-width: 420px;
        margin: 0 0 28px;
        color: #004a80;
        font-size: 16px;
        line-height: 1.6;
      }

      .site-footer .footer-contact,
      .site-footer .footer-links,
      .site-footer .social-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .site-footer .footer-contact {
        display: grid;
        gap: 14px;
        color: #004a80;
        font-size: 16px;
        font-weight: 400;
      }

      .site-footer .footer-contact li,
      .site-footer .social-links li a {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .site-footer .footer-contact i {
        width: 24px;
        color: #287fc0;
        font-size: 19px;
      }

      .site-footer h3 {
        margin: 20px 0 18px;
        color: #064779;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 1px;
      }

      .site-footer .footer-links {
        display: grid;
        gap: 14px;
        font-size: 16px;
      }

      .site-footer .footer-links a {
        display: inline;
        margin: 0;
        color: inherit;
        font-size: inherit;
        font-weight: 400;
      }

      .site-footer .social-links {
        display: grid;
        gap: 12px;
        color: #3d5c94;
        font-size: 15px;
      }

      .site-footer .social-links a {
        color: inherit;
        text-decoration: none;
      }

      .site-footer a:hover,
      .site-footer a:focus {
        color: #001e34;
        text-decoration: underline;
      }

      .copyright {
        min-height: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        background: #000;
        color: #fff;
        text-align: center;
      }

      .copyright p {
        margin: 0;
        font-size: 16px;
        letter-spacing: 0.5px;
      }

      .copyright a {
        color: inherit;
        text-decoration: underline;
      }

      @media (min-width: 1200px) {
        .site-header .main-nav .navbar-collapse {
          display: flex !important;
          flex-basis: auto !important;
          align-items: center !important;
        }

        .site-header .main-nav .nav-links {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          margin-left: auto !important;
          margin-bottom: 0 !important;
        }
      }

      @media (max-width: 1199.98px) {
        .site-header .main-nav {
          min-height: auto !important;
          padding: 14px 0 !important;
        }

        .site-header .main-nav .container-xxl {
          flex-wrap: wrap !important;
        }

        .site-header .main-nav .navbar-collapse:not(.show) {
          display: none !important;
        }

        .site-header .main-nav .navbar-collapse.show {
          display: block !important;
          width: 100% !important;
        }

        .site-header .main-nav .nav-links {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          margin: 0 !important;
        }

        .site-header .nav-actions {
          align-items: flex-start !important;
          flex-direction: column !important;
          margin: 18px 0 0 !important;
        }
      }

      @media (max-width: 767.98px) {
        .site-header .utility-bar .container-xxl {
          flex-direction: row !important;
          gap: 12px !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          text-align: left !important;
        }

        .site-header .share-button {
          min-width: 124px !important;
          width: auto !important;
          padding: 0 10px !important;
          font-size: 11px !important;
        }

        .site-header .utility-phone {
          width: auto !important;
          font-size: 13px !important;
          text-align: right !important;
        }
      }

    </style>

    <!-- ✅ Reset sessionStorage ASAP on reload -->
    <script>
      try { sessionStorage.clear(); } catch (e) { /* ignore */ }
    </script>
</asp:Content>

<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="server">
<main id="mainContent" tabindex="-1">
      <!-- ✅ WHITE BACKGROUND BODY SECTION w/ SAME DROPDOWN + SAME FUNCTIONALITY -->
      <section class="state-page" aria-label="State selection">
        <div class="container">
          <div class="state-page-card">
            <h1 class="state-page-title mb-2">Choose your State</h1>
            <p class="state-page-sub mb-4">
              Select your state to view pricing and continue.
            </p>

            <div class="state-select-wrap">
              <label for="stateSelect" class="visually-hidden">Choose your state</label>

              <!-- ✅ IMPORTANT: same id + same options values (slugs) as original -->
              <select id="stateSelect" class="form-select state-select" aria-label="Choose your State">
                <option value="" selected data-i18n="hero.chooseState">Choose your State</option>
              </select>

              <div class="mt-3">
                <!-- <button
                  id="langToggle"
                  type="button"
                  class="btn btn-link p-0"
                  aria-pressed="false"
                  aria-label="Toggle language between English and Spanish"
                  data-i18n="hero.spanishBtn"
                  style="color:#1b86c8; font-size: 20px; font-weight: bold; cursor: pointer; text-decoration:none;"
                >
                  Curso Ofrecido en Español También
                </button> -->
              </div>

              <div class="mt-4">
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
</asp:Content>

<asp:Content ID="ScriptContent" ContentPlaceHolderID="ScriptContent" runat="server">
<div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="shareToast" class="toast align-items-center text-bg-dark border-0" role="status" aria-live="polite" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">Page link copied.</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>

    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script src="assets/site-translations.js"></script>

    <script>
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
    </script>

    <script>
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
    </script>

    <script>
      const SITE_BASE = "Default.aspx";
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
    </script>
</asp:Content>
