<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How It Works | GoToTrafficSchool.com</title>
    <meta
      name="description"
      content="Complete your traffic school online with GoToTrafficSchool. Learn how enrollment, coursework, and certificate processing work from start to finish."
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
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    >
    <style>
      :root {
        --navy: #1f4a73;
        --navy-dark: #163c61;
        --navy-soft: #0d5aa0;
        --sky: #d9ecff;
        --sky-soft: #eef6ff;
        --text: #101828;
        --muted: #4b5565;
        --line: #d8dde4;
        --footer-bg: #d8edf9;
        --white: #ffffff;
        --shadow: 0 20px 40px rgba(22, 60, 97, 0.12);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: var(--text);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #fff;
        border-top: 2px solid var(--navy);
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

      .page-shell {
        overflow: hidden;
      }

      .page-shell .container-xxl {
        width: min(1180px, calc(100% - 72px));
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
      }

      .utility-bar {
        background: var(--navy);
        color: var(--white);
        padding: 0;
      }

      .utility-bar .container-xxl {
        gap: 1rem;
      }

      .share-button {
        min-width: 132px;
        border: 1px solid rgba(255, 255, 255, 0.65);
        border-radius: 999px;
        background: transparent;
        color: var(--white);
        height: 30px;
        max-height: 30px;
        padding: 0 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        line-height: 1;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: background-color 0.2s ease, border-color 0.2s ease;
      }

      .share-button:hover {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.9);
      }

      .utility-phone {
        color: var(--white);
        font-size: 0.92rem;
      }

      .main-nav {
        padding: 1.15rem 0 0;
        background: #fff;
      }

      .main-nav .navbar-brand img {
        width: min(245px, 100%);
      }

      .main-nav .navbar-toggler {
        border: 1px solid rgba(31, 74, 115, 0.2);
      }

      .main-nav .navbar-toggler:focus {
        box-shadow: 0 0 0 0.15rem rgba(31, 74, 115, 0.2);
      }

      .nav-links {
        gap: 0.85rem;
        flex-wrap: nowrap;
      }

      .nav-links .nav-link {
        color: #151515;
        font-size: 0.95rem;
        font-weight: 500;
        padding: 0.3rem 0.15rem;
        white-space: nowrap;
        transition: color 0.2s ease;
      }

      .nav-links .nav-link:hover,
      .nav-links .nav-link.active {
        color: var(--navy-soft);
      }

      .navbar-expand-xl .navbar-collapse {
        align-items: flex-start;
        justify-content: flex-end;
      }

      .nav-actions {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 0.75rem;
        margin-left: 1.1rem;
      }

      .login-link {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--white);
        background: linear-gradient(180deg, #3d6f99 0%, var(--navy) 100%);
        border-radius: 1.1rem;
        padding: 0.9rem 1.2rem;
        font-size: 0.95rem;
        font-weight: 500;
        box-shadow: 0 16px 30px rgba(31, 74, 115, 0.18);
      }

      .login-link i {
        font-size: 1.1rem;
      }

      .language-block {
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        min-width: 0;
        width: 170px;
      }

      .language-block label {
        color: #2f2f2f;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .language-select-wrap {
        position: relative;
      }

      .language-select-wrap::before {
        content: "\F3E8";
        position: absolute;
        top: 50%;
        left: 0.85rem;
        transform: translateY(-50%);
        font-family: bootstrap-icons;
        color: #5f6875;
        font-size: 0.95rem;
        pointer-events: none;
      }

      .language-select {
        border-radius: 0.7rem;
        border: 1px solid #d8dde4;
        padding-left: 2.4rem;
        min-height: 42px;
        color: #313743;
      }

      .hero-section {
        padding: 1.9rem 0 1.35rem;
      }

      .hero-section .container-xxl,
      .timeline-section .container-xxl {
        max-width: 1180px;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(320px, 0.82fr);
        align-items: center;
        gap: 1.5rem 2.75rem;
      }

      .hero-copy h1 {
        margin: 0;
        font-size: clamp(2.7rem, 5vw, 3.8rem);
        line-height: 0.99;
        font-weight: 750;
        letter-spacing: -0.04em;
      }

      .hero-underline {
        width: 70px;
        height: 3px;
        margin: 1.25rem 0 1.9rem;
        border-radius: 999px;
        background: var(--navy-soft);
      }

      .hero-copy p {
        max-width: 560px;
        margin: 0;
        color: #181d27;
        font-size: clamp(1.02rem, 1.5vw, 1.16rem);
        line-height: 1.5;
      }

      .hero-visual-col {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.5rem;
      }

      .hero-device-scene {
        position: relative;
        width: min(100%, 400px);
      }

      .hero-device-scene img {
        width: 100%;
        height: auto;
        filter: drop-shadow(0 18px 22px rgba(15, 23, 42, 0.12));
      }

      .timeline-section {
        padding: 0.65rem 0 1.4rem;
      }

      .timeline {
        display: grid;
        gap: 0;
      }

      .timeline-item {
        position: relative;
        display: grid;
        grid-template-columns: 116px 30px 100px minmax(0, 1fr);
        align-items: start;
        gap: 0 16px;
        padding: 0.75rem 0 1.85rem;
      }

      .timeline-item:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 136px;
        right: 0;
        bottom: 0;
        border-bottom: 1px solid var(--line);
      }

      .step-rail {
        position: relative;
        display: flex;
        justify-content: center;
      }

      .step-rail::after {
        content: "";
        position: absolute;
        top: 84px;
        bottom: -36px;
        left: 50%;
        border-left: 2px dashed #d7dce4;
        transform: translateX(-50%);
      }

      .timeline-item:last-child .step-rail::after {
        display: none;
      }

      .step-badge {
        width: 82px;
        height: 82px;
        border-radius: 50%;
        background: #0d5aa0;
        color: #fff;
        display: grid;
        place-items: center;
        font-size: 1.95rem;
        font-weight: 700;
        letter-spacing: 0.04em;
      }

      .step-dot {
        display: flex;
        justify-content: center;
        padding-top: 2.35rem;
      }

      .step-dot::before {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #0d5aa0;
      }

      .step-icon {
        padding-top: 0.2rem;
      }

      .step-icon img {
        width: 84px;
        height: 84px;
      }

      .step-copy h2 {
        margin: 0 0 0.55rem;
        font-size: clamp(1.7rem, 2.4vw, 1.95rem);
        line-height: 1.15;
        font-weight: 740;
        letter-spacing: -0.03em;
      }

      .step-copy p {
        margin: 0 0 1rem;
        max-width: 630px;
        color: #252b37;
        font-size: 0.95rem;
        line-height: 1.42;
      }

      .benefits-section {
        padding: 1.85rem 0 2.5rem;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 1.5rem;
      }

      .benefit {
        text-align: center;
      }

      .benefit img {
        width: 92px;
        height: 92px;
        margin: 0 auto 1.1rem;
      }

      .benefit p {
        margin: 0;
        color: #151515;
        font-size: 1rem;
        line-height: 1.45;
        font-weight: 500;
      }

      .cta-section {
        padding: 0 0 0.1rem;
      }

      .cta-band {
        position: relative;
        overflow: hidden;
        background: var(--navy);
        color: #fff;
        padding: 3.95rem 1.5rem 3.35rem;
        text-align: center;
      }

      .cta-band::before,
      .cta-band::after {
        content: "";
        position: absolute;
        top: 0;
        width: 180px;
        height: 100%;
        opacity: 0.22;
        background-image: radial-gradient(circle, #7da3c5 0 3px, transparent 3px);
        background-size: 27px 27px;
      }

      .cta-band::before {
        left: 0;
      }

      .cta-band::after {
        right: 0;
      }

      .cta-band h2 {
        position: relative;
        z-index: 1;
        margin: 0 auto 1.55rem;
        max-width: 520px;
        font-size: 25px;
        line-height: 1.95;
        font-weight: 700;
        letter-spacing: 0;
      }

      .cta-band .btn {
        position: relative;
        z-index: 1;
        min-width: 205px;
        border: 0;
        border-radius: 9px;
        padding: 0.52rem 1.35rem;
        background: #fff;
        color: #111827;
        font-size: 16px;
        font-weight: 500;
        box-shadow: 0 15px 30px rgba(15, 23, 42, 0.18);
      }

      .site-footer {
        margin-top: 0;
      }

      .footer-main {
        background: var(--footer-bg);
        padding: 3.55rem 0 1.8rem;
      }

      .footer-brand img {
        width: min(235px, 100%);
        margin-bottom: 1.4rem;
      }

      .footer-brand p {
        max-width: 355px;
        margin: 0 0 1.7rem;
        color: #0b5499;
        font-size: 0.98rem;
        line-height: 1.6;
      }

      .footer-contact,
      .footer-links,
      .social-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .footer-contact li,
      .social-links li {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .footer-contact li + li,
      .social-links li + li,
      .footer-links li + li {
        margin-top: 0.95rem;
      }

      .footer-contact img {
        width: 34px;
        height: 34px;
        flex: 0 0 34px;
      }

      .footer-contact span,
      .footer-contact a,
      .footer-links a,
      .social-links a {
        color: #0b5499;
        font-size: 0.98rem;
      }

      .footer-links a:hover,
      .footer-contact a:hover,
      .social-links a:hover {
        text-decoration: underline;
      }

      .footer-column h3 {
        margin: 0 0 1.15rem;
        color: #0b5499;
        font-size: 1.8rem;
        font-weight: 700;
      }

      .social-links a {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
      }

      .social-links i {
        font-size: 0.82rem;
      }

      .social-links .bi-tiktok {
        color: #111;
      }

      .social-links .bi-instagram {
        color: #ff6a45;
      }

      .social-links .bi-twitter-x {
        color: #111;
      }

      .social-links .bi-youtube {
        color: #d41c1c;
      }

      .social-links .bi-facebook {
        color: #325cbe;
      }

      .copyright {
        background: #050505;
        color: #fff;
        text-align: center;
        padding: 1.55rem 1rem 1.9rem;
        font-size: 0.96rem;
      }

      .copyright p {
        margin: 0;
      }

      .copyright a {
        color: #fff;
        text-decoration: underline;
      }

      .share-toast {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 1090;
        padding: 0.85rem 1rem;
        border-radius: 0.8rem;
        background: rgba(8, 12, 18, 0.94);
        color: #fff;
        font-size: 0.94rem;
        line-height: 1.4;
        box-shadow: var(--shadow);
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
          flex-direction: column-reverse;
          align-items: stretch;
          margin: 1.25rem 0 0;
        }

        .login-link {
          width: fit-content;
        }

        .language-block {
          width: 100%;
          max-width: 260px;
        }
      }

      @media (max-width: 991.98px) {
        .page-shell .container-xxl {
          width: min(1180px, calc(100% - 48px));
        }

        .hero-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .hero-visual-col {
          align-items: flex-start;
        }

        .timeline-item {
          grid-template-columns: 110px 20px 92px minmax(0, 1fr);
          gap: 0 16px;
        }

        .timeline-item:not(:last-child)::after {
          left: 129px;
        }

        .benefits-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .footer-column h3 {
          font-size: 1.55rem;
        }
      }

      @media (max-width: 767.98px) {
        .page-shell .container-xxl {
          width: min(1180px, calc(100% - 32px));
        }

        .utility-bar .container-xxl {
          flex-direction: column;
          align-items: flex-start !important;
        }

        .main-nav {
          padding-top: 0.85rem;
        }

        .main-nav .navbar-brand img {
          width: min(220px, 100%);
        }

        .hero-section {
          padding-top: 1.4rem;
        }

        .hero-copy h1 {
          font-size: clamp(2.8rem, 16vw, 4rem);
        }

        .hero-copy p {
          font-size: 1.08rem;
        }

        .timeline-item {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding-bottom: 2rem;
        }

        .timeline-item:not(:last-child)::after {
          left: 0;
        }

        .step-rail {
          justify-content: flex-start;
        }

        .step-rail::after,
        .step-dot {
          display: none;
        }

        .step-icon,
        .step-copy {
          padding-left: 0;
        }

        .benefits-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .cta-band {
          padding: 3rem 1.25rem 3.15rem;
        }

        .cta-band::before,
        .cta-band::after {
          width: 84px;
        }
      }

      @media (max-width: 479.98px) {
        .share-button {
          width: 100%;
        }

        .benefits-grid {
          grid-template-columns: 1fr;
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
        color: var(--navy-soft);
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

      .hero-language-block {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1.25rem;
      }

      .hero-language-block .language-block {
        width: min(220px, 100%);
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

        .hero-language-block {
          justify-content: stretch;
        }

        .hero-language-block .language-block {
          width: 100%;
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
            <div class="hero-language-block">
              <div class="language-block">
                <label for="languageSelect" data-i18n="lang.label">Select Language</label>
                <div class="language-select-wrap">
                  <select class="form-select language-select" id="languageSelect" aria-label="Select language">
                    <option value="en">English (US)</option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="hero-grid">
              <div class="hero-copy">
                <h1 data-i18n="hero.title">How It Works</h1>
                <div class="hero-underline"></div>
                <p>
                  <span data-i18n="hero.body.line1">Completing your traffic school is simple and 100% online.</span><br>
                  <span data-i18n="hero.body.line2">Here’s exactly what to expect from start to finish.</span>
                </p>
              </div>
              <div class="hero-visual-col">
                <div class="hero-device-scene" aria-hidden="true">
                  <img src="assets/how-it-works-hero-devices.webp" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="timeline-section">
          <div class="container-xxl">
            <div class="timeline">
              <article class="timeline-item">
                <div class="step-rail">
                  <div class="step-badge">01</div>
                </div>
                <div class="step-dot"></div>
                <div class="step-icon">
                  <img src="assets/icons/Group 2147224621.webp" alt="">
                </div>
                <div class="step-copy">
                  <h2 data-i18n="steps.1.title">Enrol Online</h2>
                  <p data-i18n="steps.1.body1">Sign up in minutes and get instant access to your state-approved traffic school course.</p>
                  <p data-i18n="steps.1.body2">You can pay now or start the course first to make sure it's right for you.</p>
                </div>
              </article>

              <article class="timeline-item">
                <div class="step-rail">
                  <div class="step-badge">02</div>
                </div>
                <div class="step-dot"></div>
                <div class="step-icon">
                  <img src="assets/icons/Group 2147224623.webp" alt="">
                </div>
                <div class="step-copy">
                  <h2 data-i18n="steps.2.title">Complete Your Course</h2>
                  <p data-i18n="steps.2.body1">Your course is divided into a set number of chapters based on your state's requirements. You'll complete short quizzes and a final exam along the way — all designed to be fast and easy.</p>
                  <p data-i18n="steps.2.body2">Most students finish quickly and pass on their first attempt.</p>
                </div>
              </article>

              <article class="timeline-item">
                <div class="step-rail">
                  <div class="step-badge">03</div>
                </div>
                <div class="step-dot"></div>
                <div class="step-icon">
                  <img src="assets/icons/Group 2147224626.webp" alt="">
                </div>
                <div class="step-copy">
                  <h2 data-i18n="steps.3.title">We Handle Your Certificate the Right Way</h2>
                  <p data-i18n="steps.3.body1">Once you finish, we process your certificate of completion based on your state and court requirements.</p>
                  <p data-i18n="steps.3.body2">We either send it directly to the court or provide it to you with simple instructions to submit.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section class="benefits-section">
          <div class="container-xxl">
            <div class="benefits-grid">
              <div class="benefit">
                <img src="assets/icons/Mask group (10).webp" alt="">
                <p data-i18n="benefits.1">100% Online — No Classroom Required</p>
              </div>
              <div class="benefit">
                <img src="assets/icons/Mask group (9).webp" alt="">
                <p data-i18n="benefits.2">Start and Stop Anytime</p>
              </div>
              <div class="benefit">
                <img src="assets/icons/Mask group (8).webp" alt="">
                <p data-i18n="benefits.3">Works on Phone, Tablet, or Computer</p>
              </div>
              <div class="benefit">
                <img src="assets/icons/Mask group (7).webp" alt="">
                <p data-i18n="benefits.4">Fast Certificate Processing</p>
              </div>
              <div class="benefit">
                <img src="assets/icons/Mask group (6).webp" alt="">
                <p data-i18n="benefits.5">Fully State-Approved and Court Accepted</p>
              </div>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <div class="cta-band">
            <div class="container-xxl">
              <h2>
                <span data-i18n="cta.line1">You can start your course anytime</span><br>
                <span data-i18n="cta.line2">and complete it at your own pace.</span>
              </h2>
              <a class="btn" href="Default.aspx" data-i18n="cta.button">Start Your Course Now</a>
            </div>
          </div>
        </section>
      </main>
</asp:Content>

<asp:Content ID="ScriptContent" ContentPlaceHolderID="ScriptContent" runat="server">
</div>

    <div class="share-toast" id="shareToast" role="status" aria-live="polite"></div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script>
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
          "steps.1.body1": "Sign up in minutes and get instant access to your state-approved traffic school course.",
          "steps.1.body2": "You can pay now or start the course first to make sure it's right for you.",
          "steps.2.title": "Complete Your Course",
          "steps.2.body1": "Your course is divided into a set number of chapters based on your state's requirements. You'll complete short quizzes and a final exam along the way — all designed to be fast and easy.",
          "steps.2.body2": "Most students finish quickly and pass on their first attempt.",
          "steps.3.title": "We Handle Your Certificate the Right Way",
          "steps.3.body1": "Once you finish, we process your certificate of completion based on your state and court requirements.",
          "steps.3.body2": "We either send it directly to the court or provide it to you with simple instructions to submit.",
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
          "steps.1.body1": "Regístrese en minutos y obtenga acceso instantáneo a su curso de escuela de tránsito aprobado por el estado.",
          "steps.1.body2": "Puede pagar ahora o comenzar el curso primero para asegurarse de que sea adecuado para usted.",
          "steps.2.title": "Complete Su Curso",
          "steps.2.body1": "Su curso se divide en una cantidad determinada de capítulos según los requisitos de su estado. Completará cuestionarios cortos y un examen final durante el proceso, todo diseñado para ser rápido y sencillo.",
          "steps.2.body2": "La mayoría de los estudiantes terminan rápidamente y aprueban en su primer intento.",
          "steps.3.title": "Manejamos Su Certificado Correctamente",
          "steps.3.body1": "Una vez que termine, procesamos su certificado de finalización según los requisitos de su estado y del tribunal.",
          "steps.3.body2": "Lo enviamos directamente al tribunal o se lo entregamos con instrucciones sencillas para presentarlo.",
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
    </script>
</asp:Content>
