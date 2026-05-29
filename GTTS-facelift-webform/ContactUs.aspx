<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | GoToTrafficSchool.com</title>
    <meta
      name="description"
      content="Contact GoToTrafficSchool.com for help with enrollment, certificates, billing, partner questions, or account support."
    >
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17691289057">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17691289057');
    </script>
    <script>(function(){var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0]; stid='dW9OZk0yWXhhbDI0em53cmNDTVVTZz09';pp.type='text/javascript'; pp.async=true; pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 's01.live2support.com/dashboardv2/chatwindow/'; ppr.parentNode.insertBefore(pp, ppr);})();</script>
    <link
      rel="icon"
      type="image/webp"
      sizes="64x64"
      href="assets/favicon.webp"
    >
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    >
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    >
    <style>
      :root {
        --brand-navy: #1f4a73;
        --brand-navy-dark: #153957;
        --brand-navy-deep: #12344f;
        --brand-blue: #0b5499;
        --brand-blue-soft: #d9edff;
        --brand-blue-lighter: #eef7ff;
        --brand-sky: #e6f2ff;
        --brand-sky-2: #d7ecff;
        --brand-line: #d9dee6;
        --brand-text: #101828;
        --brand-muted: #667085;
        --footer-bg: #d8edf9;
        --shadow-soft: 0 18px 45px rgba(21, 57, 87, 0.08);
        --shadow-panel: 0 24px 48px rgba(14, 57, 92, 0.08);
        --radius-lg: 24px;
        --radius-md: 18px;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      body {
        margin: 0;
        color: var(--brand-text);
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
        background: #ffffff;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        color: inherit;
      }

      img {
        max-width: 100%;
        display: block;
      }

      button,
      input,
      select,
      textarea {
        font: inherit;
      }

      .page-shell {
        overflow: hidden;
      }

      .container-xxl {
        max-width: 1380px;
        padding-left: clamp(28px, 4.6vw, 72px);
        padding-right: clamp(28px, 4.6vw, 72px);
      }

      header .container-xxl {
        max-width: 1280px;
        padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
        padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
      }

      .utility-bar {
        background: var(--brand-navy);
        color: #ffffff;
        padding: 0;
      }

      .utility-bar .container-xxl {
        gap: 1rem;
      }

      .share-button {
        min-width: 176px;
        height: 30px;
        max-height: 30px;
        padding: 0 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.78);
        border-radius: 0.7rem;
        background: transparent;
        color: #ffffff;
        font-size: 0.95rem;
        line-height: 1;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }

      .share-button:hover,
      .share-button:focus {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.98);
      }

      .utility-phone {
        color: #ffffff;
        font-size: 0.95rem;
      }

      .main-nav {
        padding: 1.05rem 0;
        background: #ffffff;
        border-bottom: 1px solid #e8edf3;
      }

      .navbar {
        padding: 0;
      }

      .navbar-brand {
        padding: 0;
        margin: 0;
      }

      .navbar-brand img {
        width: min(255px, 100%);
      }

      .navbar-toggler {
        border: 1px solid rgba(31, 74, 115, 0.18);
      }

      .navbar-toggler:focus {
        box-shadow: 0 0 0 0.18rem rgba(31, 74, 115, 0.15);
      }

      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2818, 52, 79, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }

      .nav-links {
        gap: 0.6rem;
      }

      .nav-links .nav-link {
        color: #1c1c1c;
        font-size: 0.98rem;
        font-weight: 500;
        padding: 0.45rem 0.55rem;
        white-space: nowrap;
        transition: color 0.2s ease;
      }

      .nav-links .nav-link:hover,
      .nav-links .nav-link:focus,
      .nav-links .nav-link.active {
        color: var(--brand-blue);
      }

      .nav-links .nav-link.active {
        font-weight: 800;
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 1.4rem;
      }

      .login-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        min-width: 124px;
        padding: 0.95rem 1.35rem;
        border-radius: 1.35rem;
        color: #ffffff;
        background: linear-gradient(180deg, #3c6c96 0%, #22445f 100%);
        font-size: 0.98rem;
        font-weight: 600;
        box-shadow: 0 18px 30px rgba(31, 74, 115, 0.16);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .login-link:hover,
      .login-link:focus {
        color: #ffffff;
        transform: translateY(-1px);
        box-shadow: 0 20px 32px rgba(31, 74, 115, 0.2);
      }

      .login-link i {
        font-size: 1.15rem;
      }

      .hero-section {
        position: relative;
        padding: 2.1rem 0 10.7rem;
        background:
          radial-gradient(circle at 91% 16%, rgba(72, 144, 214, 0.18) 0 2px, transparent 2px 100%),
          linear-gradient(135deg, #e4f2ff 0%, #dcebfb 54%, #d8efff 100%);
        isolation: isolate;
      }

      .hero-section::before {
        content: "";
        position: absolute;
        inset: auto -9% -2.5rem auto;
        width: min(38vw, 480px);
        aspect-ratio: 1;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(121, 183, 240, 0.16) 0%, rgba(121, 183, 240, 0.06) 46%, transparent 70%);
        z-index: -1;
      }

      .hero-section::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: min(28vw, 360px);
        height: 220px;
        background-image: radial-gradient(rgba(77, 150, 219, 0.34) 1px, transparent 1px);
        background-size: 12px 12px;
        opacity: 0.7;
        clip-path: polygon(22% 0%, 100% 0%, 100% 100%, 0% 46%);
        z-index: -1;
      }

      .hero-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
      }

      .hero-copy {
        max-width: 700px;
      }

      .eyebrow {
        display: inline-flex;
        flex-direction: column;
        gap: 0.55rem;
        margin-bottom: 1rem;
        color: #2565a8;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.05rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .eyebrow::after {
        content: "";
        width: 3rem;
        height: 3px;
        border-radius: 999px;
        background: #2565a8;
      }

      .hero-copy h1 {
        margin: 0 0 1rem;
        color: #090909;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 48px;
        line-height: 1.02;
        font-weight: 800;
      }

      .hero-copy p {
        max-width: 650px;
        margin: 0;
        font-size: clamp(1.18rem, 1.8vw, 1.45rem);
        line-height: 1.52;
        color: #20252f;
      }

      .language-block {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 185px;
        flex-shrink: 0;
      }

      .language-block label {
        color: #3f4954;
        font-size: 0.92rem;
        font-weight: 600;
      }

      .language-select-wrap {
        position: relative;
      }

      .language-select-wrap::before {
        content: "\F3E8";
        position: absolute;
        left: 0.9rem;
        top: 50%;
        transform: translateY(-50%);
        font-family: bootstrap-icons;
        color: #52606f;
        font-size: 0.95rem;
        pointer-events: none;
      }

      .language-select {
        min-height: 44px;
        border: 1px solid #dce2ea;
        border-radius: 0.78rem;
        padding-left: 2.5rem;
        color: #2c3441;
        background-color: #ffffff;
        box-shadow: 0 10px 24px rgba(21, 57, 87, 0.06);
      }

      .contact-panels {
        position: relative;
        margin-top: -6.4rem;
        padding-bottom: 2.4rem;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.7fr) minmax(300px, 1fr);
        gap: 1.35rem;
        align-items: stretch;
      }

      .panel-card {
        height: 100%;
        background: #ffffff;
        border: 1px solid rgba(19, 61, 96, 0.08);
        border-radius: 1.15rem;
        box-shadow: var(--shadow-panel);
      }

      .message-card {
        padding: 1.6rem 1.6rem 1.35rem;
      }

      .card-title {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        margin-bottom: 1.55rem;
        color: #2c3748;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.9rem;
        font-weight: 700;
      }

      .card-title-icon {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--brand-blue);
        color: #ffffff;
        flex-shrink: 0;
      }

      .card-title-icon i {
        font-size: 1.1rem;
      }

      .field-label {
        display: flex;
        gap: 0.35rem;
        margin-bottom: 0.45rem;
        color: #333b48;
        font-size: 0.9rem;
        font-weight: 700;
      }

      .field-label .optional {
        color: #98a2b3;
        font-weight: 600;
      }

      .input-with-icon {
        position: relative;
      }

      .input-with-icon i {
        position: absolute;
        left: 0.9rem;
        top: 50%;
        transform: translateY(-50%);
        color: #737f8e;
        font-size: 1rem;
        pointer-events: none;
      }

      .input-with-icon.input-area i {
        top: 1rem;
        transform: none;
      }

      .contact-form .form-control,
      .contact-form .form-select {
        min-height: 3.05rem;
        border: 1px solid #d5dce5;
        border-radius: 0.72rem;
        color: #354052;
        box-shadow: none;
      }

      .contact-form .form-control:focus,
      .contact-form .form-select:focus,
      .cta-select:focus,
      .language-select:focus {
        border-color: rgba(11, 84, 153, 0.5);
        box-shadow: 0 0 0 0.22rem rgba(11, 84, 153, 0.12);
      }

      .contact-form .form-control,
      .contact-form .form-select {
        padding-left: 2.55rem;
      }

      .contact-form textarea.form-control {
        min-height: 130px;
        resize: vertical;
        padding-top: 0.9rem;
      }

      .field-note {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        margin-top: 0.75rem;
        color: #6b7280;
        font-size: 0.84rem;
      }

      .field-note i {
        color: #7a8697;
      }

      .form-feedback {
        display: none;
        margin-top: 0.95rem;
        padding: 0.85rem 1rem;
        border-radius: 0.8rem;
        font-size: 0.92rem;
        line-height: 1.45;
      }

      .form-feedback.is-visible {
        display: block;
      }

      .form-feedback.is-info {
        background: #edf6ff;
        color: #13466e;
        border: 1px solid #cfe2f6;
      }

      .form-feedback.is-error {
        background: #fff1f1;
        color: #9d1c1c;
        border: 1px solid #f3c6c6;
      }

      .send-button {
        min-width: 168px;
        padding: 0.9rem 1.4rem;
        border: 0;
        border-radius: 0.75rem;
        background: linear-gradient(180deg, #3c6e98 0%, #21445f 100%);
        color: #ffffff;
        font-size: 1.05rem;
        font-weight: 600;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .send-button:hover,
      .send-button:focus {
        transform: translateY(-1px);
        box-shadow: 0 14px 24px rgba(31, 74, 115, 0.16);
      }

      .info-card {
        padding: 1.6rem 1.45rem;
      }

      .info-card h2 {
        margin: 0;
        color: #2d3748;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.8rem;
        font-weight: 700;
      }

      .info-card > p {
        margin: 0.5rem 0 1.35rem;
        color: #7b8492;
        font-size: 1rem;
      }

      .info-item {
        display: grid;
        grid-template-columns: 52px minmax(0, 1fr);
        gap: 1rem;
        align-items: start;
        padding: 1.15rem 0;
      }

      .info-item + .info-item {
        border-top: 1px solid #d7dde5;
      }

      .info-item img {
        width: 48px;
        height: 48px;
      }

      .info-item h3 {
        margin: 0 0 0.25rem;
        color: #234d7b;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.35rem;
        font-weight: 700;
      }

      .info-link,
      .info-value {
        display: block;
        color: #6b7280;
        font-size: 1.12rem;
        line-height: 1.45;
      }

      .info-subtext {
        display: block;
        margin-top: 0.25rem;
        color: #b0b8c4;
        font-size: 0.94rem;
      }

      .cta-section {
        position: relative;
        margin-top: 0.5rem;
        padding: 2.55rem 0;
        background: linear-gradient(90deg, #0e4c83 0%, #123b60 100%);
        color: #ffffff;
      }

      .cta-grid {
        display: grid;
        grid-template-columns: minmax(140px, 190px) minmax(0, 1.2fr) minmax(300px, 410px);
        gap: clamp(2rem, 4vw, 4rem);
        align-items: center;
      }

      .shield-badge {
        position: relative;
        width: clamp(140px, 15vw, 186px);
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.22);
      }

      .shield-badge::before {
        content: "";
        position: absolute;
        inset: 16px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.18);
      }

      .shield-badge::after {
        content: "\F53F";
        position: relative;
        z-index: 1;
        font-family: bootstrap-icons;
        font-size: clamp(3.2rem, 5vw, 4.6rem);
        color: #ffffff;
      }

      .cta-copy h2 {
        margin: 0 0 0.7rem;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.55rem;
        font-weight: 800;
      }

      .cta-copy p {
        max-width: 520px;
        margin: 0;
        color: rgba(255, 255, 255, 0.92);
        font-size: 1rem;
        line-height: 1.6;
      }

      .cta-select-wrap {
        position: relative;
      }

      .cta-select-wrap::after {
        content: "";
        position: absolute;
        top: 50%;
        left: calc(100% + 1.2rem);
        width: 108px;
        height: 72px;
        border-right: 2px dashed rgba(255, 255, 255, 0.9);
        border-bottom: 2px dashed rgba(255, 255, 255, 0.9);
        border-radius: 0 0 100px 0;
        transform: translateY(-48%) rotate(12deg);
        opacity: 0.9;
        pointer-events: none;
      }

      .cta-select-wrap::before {
        content: "\F12C";
        position: absolute;
        top: calc(50% + 1.8rem);
        left: calc(100% + 1rem);
        font-family: bootstrap-icons;
        font-size: 1.45rem;
        color: #ffffff;
        transform: translate(-100%, -50%);
        pointer-events: none;
      }

      .cta-select-icon {
        position: absolute;
        left: 1.15rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--brand-blue);
        font-size: 1.28rem;
        pointer-events: none;
      }

      .cta-select {
        min-height: 58px;
        width: 100%;
        padding: 0.8rem 3.25rem 0.8rem 3.1rem;
        border: 0;
        border-radius: 0.65rem;
        color: var(--brand-blue);
        background: #ffffff;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.08rem;
        box-shadow: 0 18px 38px rgba(7, 19, 33, 0.18);
        appearance: none;
      }

      .cta-select-chevron {
        position: absolute;
        right: 1.15rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--brand-blue);
        font-size: 1.15rem;
        pointer-events: none;
      }

      .site-footer {
        margin-top: 0;
      }

      .footer-main {
        background: var(--footer-bg);
        padding: 3.1rem 0 2.4rem;
      }

      .footer-main .row {
        --bs-gutter-x: clamp(2rem, 4vw, 4.2rem);
        align-items: start;
      }

      .footer-brand img {
        width: min(250px, 100%);
        margin-bottom: 1.35rem;
      }

      .footer-brand p {
        max-width: 455px;
        margin: 0 0 1.75rem;
        color: #0b5499;
        font-size: 1.02rem;
        line-height: 1.45;
      }

      .footer-contact,
      .footer-links,
      .social-links {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .footer-contact li,
      .social-links li {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 0.8rem;
      }

      .footer-contact li + li,
      .footer-links li + li,
      .social-links li + li {
        margin-top: 0.95rem;
      }

      .footer-contact img {
        width: 34px;
        height: 34px;
        flex: 0 0 34px;
      }

      .footer-contact a,
      .footer-contact span,
      .footer-links a,
      .social-links a {
        color: #0b5499;
        font-size: 0.98rem;
      }

      .footer-contact a,
      .footer-contact span {
        display: inline-flex;
        align-items: center;
        min-height: 34px;
      }

      .footer-links a:hover,
      .footer-contact a:hover,
      .social-links a:hover {
        text-decoration: underline;
      }

      .footer-column h3 {
        margin: 0 0 1.1rem;
        color: #0b5499;
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-size: 1.9rem;
        font-weight: 700;
      }

      .social-links a {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
      }

      .social-links i {
        font-size: 0.9rem;
      }

      .social-links .bi-tiktok {
        color: #111111;
      }

      .social-links .bi-instagram {
        color: #ef5a7b;
      }

      .social-links .bi-twitter-x {
        color: #111111;
      }

      .social-links .bi-youtube {
        color: #d11d1d;
      }

      .social-links .bi-facebook {
        color: #315ec2;
      }

      .copyright {
        background: #050505;
        color: #ffffff;
        text-align: center;
        padding: 1.5rem 1rem 1.8rem;
      }

      .copyright p {
        margin: 0;
        font-size: 1rem;
      }

      .copyright a {
        color: #ffffff;
        text-decoration: underline;
      }

      .share-toast {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 1080;
        padding: 0.85rem 1rem;
        border-radius: 0.85rem;
        background: rgba(8, 12, 18, 0.94);
        color: #ffffff;
        font-size: 0.95rem;
        line-height: 1.45;
        box-shadow: var(--shadow-soft);
        opacity: 0;
        pointer-events: none;
        transform: translateY(18px);
        transition: opacity 0.22s ease, transform 0.22s ease;
      }

      .share-toast.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      @media (max-width: 1199.98px) {
        .nav-actions {
          margin: 1.2rem 0 0;
          justify-content: flex-start;
        }

        .hero-top {
          flex-direction: column;
        }

        .language-block {
          width: min(220px, 100%);
        }

        .contact-grid {
          grid-template-columns: 1fr;
        }

        .cta-grid {
          grid-template-columns: auto 1fr;
        }

        .cta-select-wrap {
          grid-column: 1 / -1;
          max-width: 360px;
          margin-left: auto;
        }

        .cta-select-wrap::after,
        .cta-select-wrap::before {
          display: none;
        }
      }

      @media (max-width: 991.98px) {
        .container-xxl {
          padding-left: clamp(22px, 4vw, 36px);
          padding-right: clamp(22px, 4vw, 36px);
        }

        header .container-xxl {
          padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
          padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
        }

        .hero-section {
          padding-bottom: 8.75rem;
        }

        .message-card,
        .info-card {
          padding: 1.35rem;
        }

        .card-title {
          font-size: 1.7rem;
        }

        .info-item h3 {
          font-size: 1.3rem;
        }

        .cta-grid {
          grid-template-columns: 1fr;
          text-align: left;
        }

        .shield-badge {
          width: 160px;
        }

        .cta-select-wrap {
          margin-left: 0;
        }

        .footer-column h3 {
          font-size: 1.55rem;
        }
      }

      @media (max-width: 767.98px) {
        .utility-bar .container-xxl {
          flex-direction: column;
          align-items: flex-start !important;
        }

        .main-nav {
          padding: 0.9rem 0;
        }

        .hero-section {
          padding: 1.35rem 0 7.6rem;
        }

        .hero-copy h1 {
          font-size: clamp(2.75rem, 16vw, 4rem);
        }

        .hero-copy p {
          font-size: 1.05rem;
        }

        .contact-panels {
          margin-top: -5rem;
        }

        .message-card,
        .info-card {
          padding: 1.2rem;
        }

        .card-title {
          font-size: 1.45rem;
        }

        .cta-section {
          padding: 2rem 0 2.25rem;
        }

        .container-xxl {
          padding-left: 20px;
          padding-right: 20px;
        }

        header .container-xxl {
          padding-left: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
          padding-right: calc(var(--bs-gutter-x, 1.5rem) * 0.5);
        }

        .cta-select {
          min-height: 54px;
          font-size: 1rem;
        }

        .footer-main {
          padding-top: 2.35rem;
        }

        .copyright p {
          font-size: 0.94rem;
          line-height: 1.55;
        }
      }

      .skip-link {
        position: absolute;
        left: -9999px;
        top: 10px;
        z-index: 2000;
        padding: 10px 16px;
        border: 2px solid #000;
        border-radius: 10px;
        background: #fff;
        color: #000;
      }

      .skip-link:focus {
        left: 12px;
      }

      .container-page {
        width: min(1280px, calc(100% - 32px));
        margin: 0 auto;
      }

      .section-inset {
        width: min(1140px, calc(100% - 88px));
      }

      .site-header .utility-bar {
        min-height: 0;
        max-height: 40px;
        padding: 0;
        background: #1e4b73;
      }

      .site-header .utility-inner {
        min-height: 40px;
        max-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }

      .site-header .share-button {
        min-width: 184px;
        height: 30px;
        max-height: 30px;
        padding: 0 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.8);
        font-size: 0.95rem;
        line-height: 1;
      }

      .site-header .utility-phone {
        font-size: 1.05rem;
      }

      .site-header .main-nav {
        min-height: 0;
        padding: 0;
        border-bottom: 1px solid #dfe8ee;
        background: #fff;
      }

      .site-header .main-nav .container-page {
        width: min(1360px, calc(100% - 32px));
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 18px 20px;
        min-height: 108px;
      }

      .site-header .navbar {
        padding: 0;
      }

      .site-header .navbar-brand {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-shrink: 0;
      }

      .site-header .navbar-brand img {
        width: clamp(220px, 23vw, 300px);
      }

      .site-header .navbar-collapse {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
      }

      .site-header .navbar-nav {
        display: flex;
        align-items: center;
        gap: 2px;
      }

      .site-header .navbar-toggler {
        border-color: rgba(0, 0, 0, 0.12);
      }

      .site-header .navbar-toggler:focus {
        box-shadow: 0 0 0 0.2rem rgba(13, 79, 146, 0.15);
      }

      .site-header .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2810, 30, 50, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }

      .site-header .nav-link {
        color: #111;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 12px 14px;
        white-space: nowrap;
      }

      .site-header .nav-link.active,
      .site-header .nav-link:hover,
      .site-header .nav-link:focus {
        color: var(--brand-blue);
      }

      .site-header .nav-link.active {
        font-weight: 800;
      }

      .site-header .login-link {
        min-width: 128px;
        justify-content: center;
        margin-left: 2px;
        padding: 14px 22px;
        border-radius: 22px;
        font-size: 1.05rem;
        font-weight: 600;
        box-shadow: none;
      }

      .site-footer {
        background: #d9edf8;
      }

      .site-footer .footer-main {
        padding: 56px 0 28px;
      }

      .site-footer .footer-main .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 1.5rem;
        align-items: flex-start;
      }

      .site-footer .footer-brand img {
        width: min(210px, 100%);
        margin-bottom: 0;
      }

      .site-footer .footer-brand p {
        max-width: 380px;
        margin: 30px 0 36px;
        color: #0d4f92;
        font-size: 1.15rem;
        line-height: 1.5;
      }

      .site-footer .footer-contact {
        display: grid;
        gap: 18px;
        margin-top: 0;
        padding: 0;
        list-style: none;
      }

      .site-footer .footer-contact > a,
      .site-footer .footer-contact > span {
        display: flex;
        align-items: center;
        gap: 14px;
        color: #1f6db8;
        font-size: 1rem;
      }

      .site-footer .footer-contact i {
        width: 20px;
        flex: 0 0 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        font-size: 1.4rem;
      }

      .site-footer .footer-contact > span > span,
      .site-footer .footer-contact > a > span {
        display: block;
      }

      .site-footer .footer-title {
        margin: 0 0 18px;
        color: #0d4f92;
        font-size: 1.2rem;
        font-weight: 800;
      }

      .site-footer .footer-links,
      .site-footer .social-links {
        display: grid;
        gap: 14px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .site-footer .footer-links a,
      .site-footer .social-links a {
        color: #0d4f92;
        font-size: 1rem;
      }

      .site-footer .footer-links a:hover,
      .site-footer .footer-links a:focus,
      .site-footer .social-links a:hover,
      .site-footer .social-links a:focus {
        text-decoration: underline;
      }

      .site-footer .social-links a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .site-footer .social-links img {
        width: 16px;
        height: 16px;
        flex: 0 0 16px;
        object-fit: contain;
      }

      @media (min-width: 1200px) {
        .site-header .navbar-collapse {
          display: flex !important;
          flex-basis: auto;
          flex-grow: 1;
        }
      }

      @media (max-width: 1199.98px) {
        .site-header .main-nav .container-page {
          min-height: 92px;
          flex-wrap: wrap;
        }

        .site-header .navbar-collapse {
          width: 100%;
          display: block;
          padding: 14px 0 6px;
        }

        .site-header .navbar-nav {
          display: block;
          align-items: flex-start;
          gap: 0;
        }

        .site-header .nav-link {
          padding: 10px 0;
        }

        .site-header .login-link {
          margin: 16px 0 10px;
          width: fit-content;
        }
      }

      @media (max-width: 991.98px) {
        .container-page {
          width: min(1280px, calc(100% - 24px));
        }

        .section-inset {
          width: min(1140px, calc(100% - 48px));
        }

        .site-header .utility-inner {
          min-height: 40px;
        }
      }

      @media (max-width: 767.98px) {
        .site-header .main-nav .container-page {
          width: min(1280px, calc(100% - 20px));
          min-height: 84px;
        }

        .site-header .utility-inner {
          flex-direction: column;
          justify-content: center;
          max-height: none;
          padding: 0;
          text-align: center;
        }

        .site-header .share-button {
          min-width: 0;
          width: 100%;
        }

        .section-inset {
          width: min(1140px, calc(100% - 24px));
        }

        .site-footer .social-links {
          grid-template-columns: repeat(2, minmax(0, max-content));
          gap: 12px 18px;
        }

        .site-footer .footer-main {
          padding-bottom: 18px;
        }
      }
      /* Footer synced from about.html */
      .site-footer {
        background: var(--footer-bg, #d9edf8);
      }

      .site-footer .footer-main {
        padding: 56px 0 28px;
      }

      .site-footer .footer-main .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 1.5rem;
        align-items: flex-start;
      }

      .site-footer .footer-brand img {
        width: min(210px, 100%);
        margin-bottom: 0;
      }

      .site-footer .footer-brand p {
        max-width: 380px;
        margin: 30px 0 36px;
        color: var(--brand-blue, #0d4f92);
        font-size: 1.15rem;
        line-height: 1.5;
      }

      .site-footer .footer-contact {
        display: grid;
        gap: 18px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .site-footer .footer-contact > a,
      .site-footer .footer-contact > span {
        display: flex;
        align-items: center;
        gap: 14px;
        color: #1f6db8;
        font-size: 1rem;
      }

      .site-footer .footer-contact i {
        width: 20px;
        flex: 0 0 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        font-size: 1.4rem;
      }

      .site-footer .footer-contact > span > span,
      .site-footer .footer-contact > a > span {
        display: block;
      }

      .site-footer .footer-title {
        margin: 0 0 18px;
        color: var(--brand-blue, #0d4f92);
        font-size: 1.2rem;
        font-weight: 800;
      }

      .site-footer .footer-links,
      .site-footer .social-links {
        display: grid;
        gap: 14px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .site-footer .footer-links li,
      .site-footer .social-links li {
        display: block;
        margin: 0;
      }

      .site-footer .footer-links li + li,
      .site-footer .social-links li + li {
        margin-top: 0;
      }

      .site-footer .footer-links a,
      .site-footer .social-links a {
        color: var(--brand-blue, #0d4f92);
        font-size: 1rem;
      }

      .site-footer .footer-links a:hover,
      .site-footer .footer-links a:focus,
      .site-footer .social-links a:hover,
      .site-footer .social-links a:focus {
        text-decoration: underline;
      }

      .site-footer .social-links a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .site-footer .social-links img {
        width: 16px;
        height: 16px;
        flex: 0 0 16px;
        object-fit: contain;
      }

      .site-footer .copyright-bar {
        padding: 20px 16px 28px;
        background: #000;
        color: #fff;
        text-align: center;
        font-size: clamp(1rem, 2vw, 1.15rem);
      }

      .site-footer .copyright-bar a {
        color: #fff;
        text-decoration: underline;
      }

      @media (max-width: 1199.98px) {
        .site-footer .social-links {
          grid-template-columns: repeat(2, minmax(0, max-content));
          gap: 12px 18px;
        }

        .site-footer .footer-main {
          padding-bottom: 18px;
        }
      }

    </style>
</asp:Content>

<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="server">
<main id="mainContent">
        <section class="hero-section">
          <div class="container-xxl">
            <div class="hero-top">
              <div class="hero-copy">
                <span class="eyebrow" data-i18n="hero.eyebrow">We're Here To Help</span>
                <h1 data-i18n="hero.title">Contact Us</h1>
                <p data-i18n="hero.copy">
                  Have a question or need assistance? Reach out to us by phone, email, or by filling out the form below.
                </p>
              </div>

              <div class="language-block">
                <label for="languageSelect" data-i18n="lang.label">Select Language</label>
                <div class="language-select-wrap">
                  <select class="form-select language-select" id="languageSelect" aria-label="Select language">
                    <option value="en" data-i18n="lang.english">English (US)</option>
                    <option value="es" data-i18n="lang.spanish">Español</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-panels">
          <div class="container-xxl">
            <div class="contact-grid">
              <article class="panel-card message-card">
                <div class="card-title">
                  <span class="card-title-icon" aria-hidden="true">
                    <i class="bi bi-envelope"></i>
                  </span>
                  <span data-i18n="form.title">Send Us a Message</span>
                </div>

                <form class="contact-form" id="contactForm" novalidate>
                  <div class="row g-3">
                    <div class="col-12 col-md-6">
                      <label class="field-label" for="fullName">
                        <span data-i18n="form.fullName">Full Name</span>
                      </label>
                      <div class="input-with-icon">
                        <i class="bi bi-person"></i>
                        <input
                          class="form-control"
                          type="text"
                          id="fullName"
                          name="fullName"
                          autocomplete="name"
                          required
                          data-i18n-placeholder="form.fullNamePlaceholder"
                          placeholder="Your full name"
                        >
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label" for="emailAddress">
                        <span data-i18n="form.email">Email Address</span>
                      </label>
                      <div class="input-with-icon">
                        <i class="bi bi-envelope"></i>
                        <input
                          class="form-control"
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          autocomplete="email"
                          required
                          data-i18n-placeholder="form.emailPlaceholder"
                          placeholder="you@example.com"
                        >
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label" for="phoneNumber">
                        <span data-i18n="form.phone">Phone</span>
                        <span class="optional" data-i18n="form.optional">(Optional)</span>
                      </label>
                      <div class="input-with-icon">
                        <i class="bi bi-telephone"></i>
                        <input
                          class="form-control"
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          autocomplete="tel"
                          inputmode="tel"
                          data-i18n-placeholder="form.phonePlaceholder"
                          placeholder="(888) 329-7069"
                        >
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label" for="topic">
                        <span data-i18n="form.topic">Topic</span>
                      </label>
                      <div class="input-with-icon">
                        <i class="bi bi-chat-square-text"></i>
                        <select class="form-select" id="topic" name="topic" required>
                          <option value="" selected data-i18n="form.topicPrompt">Select a topic</option>
                          <option value="Course enrollment" data-i18n="topic.course">Course enrollment</option>
                          <option value="Certificate status" data-i18n="topic.certificate">Certificate status</option>
                          <option value="Account or login help" data-i18n="topic.account">Account or login help</option>
                          <option value="Billing question" data-i18n="topic.billing">Billing question</option>
                          <option value="Partner program" data-i18n="topic.partner">Partner program</option>
                          <option value="Other" data-i18n="topic.other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="field-label" for="message">
                        <span data-i18n="form.message">Message</span>
                      </label>
                      <div class="input-with-icon input-area">
                        <i class="bi bi-pencil"></i>
                        <textarea
                          class="form-control"
                          id="message"
                          name="message"
                          required
                          data-i18n-placeholder="form.messagePlaceholder"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <div class="field-note">
                        <i class="bi bi-lock"></i>
                        <span data-i18n="form.note">Please do not include sensitive information such as credit card numbers.</span>
                      </div>
                    </div>
                  </div>

                  <div class="form-feedback" id="formFeedback" aria-live="polite"></div>

                  <div class="mt-4">
                    <button class="send-button" id="sendButton" type="submit" data-i18n="form.submit">Send Message</button>
                  </div>
                </form>
              </article>

              <aside class="panel-card info-card">
                <h2 data-i18n="info.title">Contact Information</h2>
                <p data-i18n="info.subtitle">Other ways to reach us</p>

                <div class="info-item">
                  <img src="assets/icons/Frames.webp" alt="">
                  <div>
                    <h3 data-i18n="info.phoneTitle">Phone</h3>
                    <a class="info-link" href="tel:18883297069">1-888-329-7069</a>
                    <span class="info-subtext" data-i18n="info.phoneHours">Mon-Fri: 5AM-10PM PT</span>
                  </div>
                </div>

                <div class="info-item">
                  <img src="assets/icons/Frames (1).webp" alt="">
                  <div>
                    <h3 data-i18n="info.emailTitle">Email</h3>
                    <a class="info-link" href="mailto:info@gototrafficschool.com">info@gototrafficschool.com</a>
                    <span class="info-subtext" data-i18n="info.emailHelp">We typically respond within 24 hours</span>
                  </div>
                </div>

                <div class="info-item">
                  <img src="assets/icons/Frames (2).webp" alt="">
                  <div>
                    <h3 data-i18n="info.addressTitle">Office Address</h3>
                    <span class="info-value" data-i18n="info.addressValue">Beverly Hills, CA</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <div class="container-xxl">
            <div class="cta-grid">
              <div class="shield-badge" aria-hidden="true"></div>

              <div class="cta-copy">
                <h2 data-i18n="cta.title">Ready to get started?</h2>
                <p data-i18n="cta.copy">
                  Select your state to get started and complete your traffic school today.
                </p>
              </div>

              <div class="cta-select-wrap">
                <i class="bi bi-geo-alt-fill cta-select-icon" aria-hidden="true"></i>
                <select class="cta-select" id="stateSelect" aria-label="Choose your state">
                  <option value="" selected data-i18n="cta.statePrompt">Choose Your State</option>
                </select>
                <i class="bi bi-chevron-down cta-select-chevron" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
      </main>
</asp:Content>

<asp:Content ID="ScriptContent" ContentPlaceHolderID="ScriptContent" runat="server">
</div>

    <div class="share-toast" id="shareToast" aria-live="polite">Page link copied.</div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script>
      (function () {
        const SITE_BASE = "Default.aspx";
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
    </script>
</asp:Content>
