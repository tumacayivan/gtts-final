<%@ Page Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>California Traffic School - Online | GoToTrafficSchool.com</title>
    <meta
      id="pageDescription"
      name="description"
      content="California traffic school online with quick answers, flexible coursework, and simple enrollment through GoToTrafficSchool."
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
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      rel="stylesheet"
    >
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap"
      rel="stylesheet"
    >
    <style>
      :root {
        --navy: #144c7d;
        --navy-dark: #123d63;
        --navy-deeper: #10365a;
        --navy-soft: #0f5ea4;
        --sky: #dcebf7;
        --sky-soft: #eff6fd;
        --line: #dce4ec;
        --copy: #161b22;
        --muted: #586273;
        --muted-soft: #6d7585;
        --accent: #ff4d56;
        --accent-dark: #ef4049;
        --white: #ffffff;
        --shadow-soft: 0 18px 38px rgba(17, 61, 99, 0.08);
        --shadow-card: 0 20px 40px rgba(16, 57, 91, 0.1);
        --radius-xl: 30px;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        font-family: "Inter", Arial, sans-serif;
        color: var(--copy);
        background: #fff;
        border-top: 1px solid var(--navy-deeper);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        display: block;
        max-width: 100%;
      }

      button,
      select {
        font: inherit;
      }

      .skip-link {
        position: absolute;
        top: 12px;
        left: -9999px;
        z-index: 1000;
        padding: 0.8rem 1rem;
        border: 2px solid #000;
        border-radius: 0.8rem;
        background: #fff;
        color: #000;
      }

      .skip-link:focus {
        left: 12px;
      }

      .page-shell {
        overflow-x: clip;
      }

      .container-page {
        width: min(1280px, calc(100% - 32px));
        margin: 0 auto;
      }

      .section-inset {
        width: min(1140px, calc(100% - 88px));
      }

      .section-shell {
        padding: 1.4rem 0;
      }

      .utility-bar {
        background: #1e4b73;
        color: #fff;
        max-height: 40px;
      }

      .utility-inner {
        min-height: 40px;
        max-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }

      .share-button {
        min-width: 184px;
        height: 30px;
        max-height: 30px;
        padding: 0 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        background: transparent;
        color: #fff;
        line-height: 1;
        font-size: 0.95rem;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        transition: background 0.2s ease, color 0.2s ease;
      }

      .share-button:hover,
      .share-button:focus {
        background: #fff;
        color: var(--navy-dark);
      }

      .utility-phone {
        color: #fff;
        font-size: 1.05rem;
        font-weight: 500;
      }

      .main-nav {
        background: #fff;
        border-bottom: 1px solid #dfe8ee;
      }

      .main-nav .container-page {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 18px 20px;
        min-height: 108px;
        width: min(1360px, calc(100% - 32px));
      }

      .navbar {
        padding: 0;
      }

      .navbar-brand {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        flex-shrink: 0;
      }

      .navbar-brand img {
        width: clamp(220px, 23vw, 300px);
      }

      .navbar-collapse {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
      }

      .navbar-toggler {
        border-color: rgba(0, 0, 0, 0.12);
      }

      .navbar-toggler:focus {
        box-shadow: 0 0 0 0.2rem rgba(13, 79, 146, 0.15);
      }

      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2810, 30, 50, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }

      .navbar-nav {
        display: flex;
        align-items: center;
        gap: 2px;
      }

      .navbar-nav .nav-link {
        padding: 12px 14px;
        color: #171717;
        font-size: 1.1rem;
        font-weight: 500;
        white-space: nowrap;
      }

      .navbar-nav .nav-link:hover,
      .navbar-nav .nav-link:focus,
      .navbar-nav .nav-link.active {
        color: var(--navy-soft);
      }

      .navbar-nav .nav-link.active {
        font-weight: 800;
      }

      .login-link {
        min-width: 128px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-left: 2px;
        padding: 14px 22px;
        border-radius: 22px;
        background: linear-gradient(180deg, #2f74aa 0%, #223e57 100%);
        color: #fff;
        font-size: 1.05rem;
        font-weight: 600;
        flex-shrink: 0;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .login-link:hover,
      .login-link:focus {
        color: #fff;
        transform: translateY(-1px);
        box-shadow: 0 14px 24px rgba(20, 63, 101, 0.18);
      }

      .hero {
        position: relative;
        min-height: 675px;
        color: #fff;
        background:
          linear-gradient(90deg, rgba(13, 16, 22, 0.76) 0%, rgba(16, 20, 27, 0.58) 34%, rgba(15, 22, 30, 0.16) 62%, rgba(15, 22, 30, 0.04) 100%),
          url("assets/vecteezy_luxury-electric-car-on-coastal-road-background_48608241 2 copy.webp") center center / cover no-repeat;
      }

      .hero .container-page {
        position: relative;
        min-height: 675px;
        display: flex;
        align-items: center;
      }

      .hero-language {
        position: absolute;
        top: 1.15rem;
        right: 0;
        z-index: 2;
        width: 180px;
      }

      .hero-language label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.96rem;
        font-weight: 600;
      }

      .language-wrap {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.75rem 0.9rem;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.98);
        color: #222d38;
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);
      }

      .language-wrap i {
        color: #4d5765;
        font-size: 1rem;
      }

      .language-wrap .form-select {
        border: 0;
        box-shadow: none;
        padding: 0.05rem 1.6rem 0.05rem 0;
        color: #252d38;
        font-size: 0.96rem;
        font-weight: 500;
        background-color: transparent;
        background-position: right 0.05rem center;
      }

      .hero-content {
        max-width: 650px;
        padding: 0;
      }

      .hero-title {
        margin: 0 0 1.3rem;
        font-size: 48px;
        line-height: 0.98;
        font-weight: 800;
        letter-spacing: -0.05em;
      }

      .hero-copy {
        max-width: 610px;
        margin: 0 0 2.9rem;
        font-size: clamp(1.18rem, 1.9vw, 1.45rem);
        line-height: 1.45;
        color: rgba(255, 255, 255, 0.95);
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.95rem;
      }

      .hero-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        min-width: 245px;
        min-height: 56px;
        padding: 0.9rem 1.45rem;
        border-radius: 18px;
        font-size: 1rem;
        font-weight: 500;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .hero-btn:hover,
      .hero-btn:focus {
        transform: translateY(-2px);
      }

      .hero-btn-primary {
        background: var(--accent);
        color: #fff;
        box-shadow: 0 18px 34px rgba(255, 77, 86, 0.26);
      }

      .hero-btn-primary:hover,
      .hero-btn-primary:focus {
        color: #fff;
        background: var(--accent-dark);
      }

      .hero-btn-secondary {
        border: 1px solid rgba(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.03);
        color: #fff;
      }

      .hero-btn-secondary:hover,
      .hero-btn-secondary:focus {
        color: #fff;
        background: rgba(255, 255, 255, 0.08);
      }

      .benefits-strip {
        background: #fff;
        border-bottom: 1px solid rgba(20, 76, 125, 0.1);
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 0;
      }

      .benefit-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 142px;
        padding: 1.55rem 0.9rem 1rem;
        text-align: center;
        position: relative;
      }

      .benefit-item:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 22px;
        right: 0;
        width: 1px;
        height: calc(100% - 44px);
        background: rgba(16, 57, 91, 0.28);
      }

      .benefit-item img {
        width: 42px;
        height: 42px;
        margin-bottom: 1rem;
        object-fit: contain;
      }

      .benefit-item h3 {
        margin: 0;
        color: var(--navy);
        font-size: 1rem;
        line-height: 1.25;
        font-weight: 700;
      }

      .cards-section {
        padding: 2rem 0 1.4rem;
      }

      .info-card {
        height: 100%;
        padding: 1.2rem 1.2rem 1.3rem;
        border: 1px solid rgba(17, 61, 99, 0.12);
        border-radius: 20px;
        background: #fff;
        box-shadow: var(--shadow-soft);
      }

      .info-card-icon {
        width: 56px;
        height: 56px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        border-radius: 12px;
        background: #ddecfb;
      }

      .info-card-icon img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }

      .info-card-title {
        margin: 0 0 0.8rem;
        font-size: 1.28rem;
        font-weight: 800;
        line-height: 1.15;
        text-transform: uppercase;
      }

      .info-card-copy {
        margin: 0 0 1rem;
        color: #2f3540;
        line-height: 1.5;
      }

      .info-card-list {
        display: grid;
        gap: 0.7rem;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .info-card-list li {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;
        color: #2f3540;
      }

      .info-card-list i {
        color: var(--navy-soft);
      }

      .ticket-section {
        padding: 2rem 0 1.4rem;
      }

      .ticket-copy {
        padding-right: clamp(0rem, 2vw, 2rem);
      }

      .section-title {
        margin: 0 0 1rem;
        font-size: clamp(2rem, 3.1vw, 3rem);
        line-height: 1.08;
        font-weight: 800;
        letter-spacing: -0.04em;
      }

      .ticket-copy p {
        margin: 0 0 1rem;
        font-size: 1.12rem;
        line-height: 1.55;
        color: #2c3440;
      }

      .ticket-subtitle {
        margin: 2rem 0 1rem;
        font-size: 1.9rem;
        line-height: 1.15;
        font-weight: 800;
        letter-spacing: -0.03em;
      }

      .check-list {
        display: grid;
        gap: 1rem;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .check-list li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.08rem;
      }

      .check-list .check-badge {
        width: 34px;
        height: 34px;
        flex: 0 0 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--navy-soft);
        color: #fff;
      }

      .ticket-image-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100%;
      }

      .ticket-image {
        width: min(560px, 100%);
      }

      .faq-section {
        padding: 1rem 0 1.8rem;
      }

      .faq-list {
        display: grid;
        gap: 0.95rem;
      }

      .faq-item {
        display: grid;
        grid-template-columns: 48px minmax(0, 1fr);
        gap: 1rem;
        padding: 1.1rem 1.2rem;
        border: 1px solid rgba(17, 61, 99, 0.1);
        border-radius: 18px;
        background: #fff;
        box-shadow: 0 12px 24px rgba(16, 57, 91, 0.05);
      }

      .faq-number {
        width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: #e7f1fb;
        color: var(--navy-soft);
        font-size: 1rem;
        font-weight: 800;
      }

      .faq-question {
        margin: 0 0 0.45rem;
        color: var(--navy-soft);
        font-size: 1.12rem;
        line-height: 1.35;
        font-weight: 800;
      }

      .faq-answer {
        margin: 0;
        color: #445062;
        font-size: 0.98rem;
        line-height: 1.55;
      }

      .faq-bullets {
        display: grid;
        gap: 0.35rem;
        padding: 0.65rem 0 0;
        margin: 0;
        list-style: none;
      }

      .faq-bullets li {
        position: relative;
        padding-left: 1.3rem;
        color: #445062;
        font-size: 0.97rem;
        line-height: 1.5;
      }

      .faq-bullets li::before {
        content: "";
        position: absolute;
        top: 0.63rem;
        left: 0;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #8ec2f2;
      }

      .partner-section {
        padding: 2rem 0 1.6rem;
      }

      .partner-panel {
        padding: clamp(1.6rem, 3vw, 2.25rem);
        border-radius: 24px;
        background: #e8f1fb;
      }

      .partner-copy {
        padding-right: clamp(0rem, 2vw, 2.5rem);
      }

      .partner-title {
        margin: 0 0 0.95rem;
        font-size: clamp(2.05rem, 3.8vw, 3.35rem);
        line-height: 1.1;
        font-weight: 800;
        letter-spacing: -0.05em;
      }

      .partner-rule {
        width: 62px;
        height: 4px;
        margin: 0 0 1.2rem;
        border-radius: 999px;
        background: var(--navy-soft);
      }

      .partner-list {
        display: grid;
        gap: 0.75rem;
        padding: 0;
        margin: 0 0 1rem;
        list-style: none;
      }

      .partner-list li {
        display: flex;
        align-items: flex-start;
        gap: 0.7rem;
        color: #2f3641;
      }

      .partner-list i {
        color: var(--navy-soft);
      }

      .partner-note {
        margin: 0 0 2rem;
        font-size: 1.08rem;
        line-height: 1.6;
        color: #2c3440;
      }

      .btn-accent {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.65rem;
        min-width: 255px;
        min-height: 56px;
        padding: 0.9rem 1.5rem;
        border-radius: 14px;
        background: var(--accent);
        color: #fff;
        font-size: 1.02rem;
        font-weight: 700;
        box-shadow: 0 18px 34px rgba(255, 77, 86, 0.22);
      }

      .btn-accent:hover,
      .btn-accent:focus {
        color: #fff;
        background: var(--accent-dark);
      }

      .partner-image {
        width: 100%;
        height: 100%;
        min-height: 290px;
        border-radius: 18px;
        object-fit: cover;
      }

      .updates-section {
        padding: 1.2rem 0 1.7rem;
      }

      .section-head {
        text-align: center;
        margin-bottom: 1.8rem;
      }

      .section-head .section-title {
        margin-bottom: 0.45rem;
      }

      .updates-link {
        color: var(--navy-soft);
        font-size: 1.02rem;
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 0.18em;
      }

      .update-card {
        height: 100%;
      }

      .update-card-image {
        width: 100%;
        aspect-ratio: 1.34 / 1;
        border-radius: 18px;
        object-fit: cover;
      }

      .update-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin: 0.95rem 0 0.9rem;
        color: var(--muted-soft);
        font-size: 0.95rem;
      }

      .read-pill {
        padding: 0.35rem 0.55rem;
        border: 1px solid #d9e2ea;
        border-radius: 9px;
        color: #697485;
        line-height: 1;
      }

      .update-title {
        margin: 0 0 1rem;
        font-size: 1.05rem;
        line-height: 1.45;
        font-weight: 600;
      }

      .update-link {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        color: var(--navy-soft);
        font-weight: 600;
      }

      .cities-section {
        padding: 1.45rem 0 1.8rem;
      }

      .cities-title {
        margin: 0;
        font-size: 48px;
        line-height: 1.08;
        font-weight: 800;
        letter-spacing: -0.05em;
        text-transform: uppercase;
      }

      .cities-grid {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 0.85rem;
      }

      .city-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        padding: 0.8rem 0.95rem;
        border: 1px solid #d9e2ea;
        border-radius: 10px;
        background: #fff;
        color: var(--navy-soft);
        font-size: 0.98rem;
        font-weight: 500;
        transition: border-color 0.2s ease, transform 0.2s ease;
      }

      .city-pill:hover,
      .city-pill:focus {
        border-color: #aac8e6;
        transform: translateY(-1px);
      }

      .cta-strip {
        padding: 1.5rem 0 0;
      }

      .cta-panel {
        padding: 2.3rem clamp(1.3rem, 3vw, 2.7rem);
        display: grid;
        grid-template-columns: 164px minmax(0, 1fr) auto;
        gap: 1.4rem;
        align-items: center;
        background: linear-gradient(180deg, #0f4f8c 0%, #103d68 100%);
        color: #fff;
      }

      .shield-ring {
        width: 164px;
        height: 164px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background:
          radial-gradient(circle at center, rgba(255, 255, 255, 0.22) 0 55%, transparent 55%),
          rgba(255, 255, 255, 0.18);
      }

      .shield-ring i {
        font-size: 4.6rem;
        color: #fff;
      }

      .cta-title {
        margin: 0 0 0.75rem;
        font-size: clamp(1.85rem, 3vw, 3rem);
        line-height: 1.1;
        font-weight: 800;
        letter-spacing: -0.03em;
      }

      .cta-copy {
        margin: 0;
        max-width: 660px;
        color: rgba(255, 255, 255, 0.92);
        font-size: 1.12rem;
        line-height: 1.6;
      }

      .cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        min-width: 220px;
        min-height: 56px;
        padding: 0.9rem 1.5rem;
        border-radius: 12px;
        background: #fff;
        color: var(--navy-soft);
        font-size: 1rem;
        font-weight: 600;
      }

      .cta-button:hover,
      .cta-button:focus {
        color: var(--navy-soft);
      }

      .site-footer {
        margin-top: 0.1rem;
        background: #d9edf8;
        color: var(--navy);
      }

      .footer-main {
        padding: 56px 0 28px;
      }

      .footer-brand img {
        width: min(210px, 100%);
        margin-bottom: 1.5rem;
      }

      .footer-brand p {
        max-width: 380px;
        margin: 0 0 2rem;
        font-size: 1.08rem;
        line-height: 1.5;
      }

      .footer-contact {
        display: grid;
        gap: 18px;
      }

      .footer-contact a,
      .footer-contact span {
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
        color: var(--navy-soft);
        font-size: 1rem;
      }

      .footer-contact i {
        font-size: 1.3rem;
      }

      .footer-title {
        margin: 0 0 18px;
        font-size: 1.2rem;
        font-weight: 800;
      }

      .footer-links,
      .social-links {
        display: grid;
        gap: 14px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .footer-links a,
      .social-links a {
        color: var(--navy-soft);
        font-size: 1rem;
      }

      .social-links a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .footer-links a:hover,
      .footer-links a:focus,
      .social-links a:hover,
      .social-links a:focus {
        text-decoration: underline;
      }

      .social-links img {
        width: 16px;
        height: 16px;
        object-fit: contain;
      }

      .copyright-bar {
        padding: 18px 16px;
        background: #000;
        color: #fff;
        text-align: center;
        font-size: 0.98rem;
      }

      .copyright-bar a {
        text-decoration: underline;
        text-underline-offset: 0.18em;
      }

      .share-toast {
        position: fixed;
        left: 50%;
        bottom: 24px;
        z-index: 1000;
        transform: translate(-50%, 16px);
        padding: 0.9rem 1.1rem;
        border-radius: 12px;
        background: rgba(15, 79, 140, 0.96);
        color: #fff;
        font-size: 0.96rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .share-toast.visible {
        opacity: 1;
        transform: translate(-50%, 0);
      }

      @media (max-width: 1199.98px) {
        .hero .container-page {
          display: block;
        }

        .main-nav .container-page {
          min-height: 92px;
          flex-wrap: wrap;
        }

        .navbar-collapse {
          width: 100%;
          display: block;
          padding: 14px 0 6px;
        }

        .navbar-nav {
          display: block;
          align-items: flex-start;
          gap: 0;
        }

        .navbar-nav .nav-link {
          padding: 10px 0;
        }

        .login-link {
          margin: 16px 0 10px;
          width: fit-content;
        }

        .hero-language {
          position: static;
          width: min(100%, 220px);
          padding-top: 1.4rem;
        }

        .hero-content {
          padding-top: 2.5rem;
        }

        .benefits-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .benefit-item:nth-child(4)::after {
          display: none;
        }

        .benefit-item:nth-child(-n + 4) {
          border-bottom: 1px solid rgba(16, 57, 91, 0.12);
        }

        .cities-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .cta-panel {
          grid-template-columns: 1fr;
          text-align: center;
          justify-items: center;
        }
      }

      @media (max-width: 991.98px) {
        .section-inset {
          width: min(1140px, calc(100% - 48px));
        }

        .hero {
          min-height: 620px;
        }

        .hero .container-page {
          min-height: 620px;
        }

        .hero-content {
          max-width: 100%;
          padding-bottom: 3rem;
        }

        .benefits-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .benefit-item:nth-child(3n)::after {
          display: none;
        }

        .benefit-item:nth-child(4)::after {
          display: block;
        }

        .cities-title {
          margin-bottom: 1.5rem;
        }

        .cities-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      @media (max-width: 767.98px) {
        .container-page {
          width: min(1280px, calc(100% - 20px));
        }

        .section-inset {
          width: min(1140px, calc(100% - 24px));
        }

        .main-nav .container-page {
          min-height: 84px;
        }

        .utility-inner {
          flex-direction: column;
          justify-content: center;
          max-height: none;
          padding: 0;
          text-align: center;
        }

        .share-button {
          min-width: 0;
          width: 100%;
        }

        .hero {
          min-height: auto;
          background-position: 58% center;
        }

        .hero .container-page {
          min-height: auto;
        }

        .hero-title {
          font-size: clamp(2.55rem, 12vw, 3.65rem);
        }

        .hero-copy {
          font-size: 1.05rem;
        }

        .hero-btn {
          width: 100%;
          min-width: 0;
        }

        .benefits-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .benefit-item::after {
          display: none !important;
        }

        .benefit-item {
          border-bottom: 1px solid rgba(16, 57, 91, 0.12);
        }

        .faq-item {
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        .ticket-subtitle {
          font-size: 1.65rem;
        }

        .cities-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .shield-ring {
          width: 136px;
          height: 136px;
        }

        .shield-ring i {
          font-size: 3.9rem;
        }

        .social-links {
          grid-template-columns: repeat(2, minmax(0, max-content));
          gap: 12px 18px;
        }

        .footer-main {
          padding-bottom: 18px;
        }
      }

      @media (max-width: 575.98px) {
        .navbar-brand img {
          width: 200px;
        }

        .benefits-grid,
        .cities-grid {
          grid-template-columns: 1fr;
        }

        .info-card-title {
          font-size: 1.16rem;
        }

        .cta-button,
        .btn-accent {
          width: 100%;
          min-width: 0;
        }
      }
    </style>
</asp:Content>

<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="server">
<main id="mainContent">
        <section class="hero">
          <div class="container-page">
            <div class="hero-language">
              <label for="languageSelect" data-i18n="lang.label">Select Language</label>
              <div class="language-wrap">
                <i class="bi bi-globe2" aria-hidden="true"></i>
                <select class="form-select" id="languageSelect" aria-label="Select language">
                  <option value="en" data-i18n="lang.english">English (US)</option>
                  <option value="es" data-i18n="lang.spanish">Español</option>
                </select>
              </div>
            </div>

            <div class="hero-content">
              <h1 class="hero-title" data-i18n-html="hero.title">California Traffic School<br>- Online</h1>
              <p class="hero-copy" data-i18n="hero.copy">
                Find answers to the most common questions about traffic school, eligibility, tickets, insurance, and more.
              </p>
              <div class="hero-actions">
                <a class="hero-btn hero-btn-primary" href="Default.aspxstate/california-online-traffic-school">
                  <span data-i18n="hero.primary">Traffic School Course</span>
                  <i class="bi bi-chevron-down" aria-hidden="true"></i>
                </a>
                <a class="hero-btn hero-btn-secondary" href="#faq">
                  <span data-i18n="hero.secondary">FAQ</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="benefits-strip">
          <div class="container-page">
            <div class="benefits-grid" id="benefitsGrid"></div>
          </div>
        </section>

        <section class="cards-section">
          <div class="container-page">
            <div class="row g-4" id="infoCards"></div>
          </div>
        </section>

        <section class="ticket-section">
          <div class="container-page section-inset">
            <div class="row align-items-center g-4 g-lg-5">
              <div class="col-lg-6">
                <div class="ticket-copy">
                  <h2 class="section-title" data-i18n="ticket.title">Mask Your Ticket - Fast and Easy</h2>
                  <p data-i18n="ticket.copy1">
                    If you've received a traffic ticket in California, you may be eligible to complete a DMV-approved traffic school course to mask the violation.
                  </p>
                  <p data-i18n="ticket.copy2">
                    Our course is fully licensed by the California DMV and designed to help you complete your requirement quickly and conveniently.
                  </p>
                  <h3 class="ticket-subtitle" data-i18n="ticket.subtitle">Accepted by California Courts</h3>
                  <ul class="check-list" id="ticketList"></ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ticket-image-wrap">
                  <img class="ticket-image" src="assets/ChatGPT Image May 2, 2026, 01_09_51 AM 1.webp" alt="Traffic school course preview on laptop and mobile">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="faq">
          <div class="container-page">
            <h2 class="visually-hidden" data-i18n="faq.title">California traffic school frequently asked questions</h2>
            <div class="faq-list" id="faqList"></div>
          </div>
        </section>

        <section class="partner-section">
          <div class="container-page">
            <div class="partner-panel">
              <div class="row align-items-center g-4 g-lg-5">
                <div class="col-lg-6">
                  <div class="partner-copy">
                    <h2 class="partner-title" data-i18n="partner.title">Become a GoToTrafficSchool Partner and Make Money!</h2>
                    <div class="partner-rule" aria-hidden="true"></div>
                    <ul class="partner-list" id="partnerList"></ul>
                    <p class="partner-note" data-i18n="partner.copy">
                      If you answered yes to all of those above questions then you must watch this short video. It will change your business.
                    </p>
                    <a class="btn-accent" href="Partners.aspx" data-i18n="partner.button">See How It Works</a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <img class="partner-image" src="assets/Gemini_Generated_Image_g7vci4g7vci4g7vc 1 copy.webp" alt="Business partners shaking hands">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="updates-section" id="updates">
          <div class="container-page">
            <div class="section-head">
              <h2 class="section-title" data-i18n="updates.title">Updates In California</h2>
              <a class="updates-link" href="Default.aspx" data-i18n="updates.link">Click here to see all the updates</a>
            </div>
            <div class="row g-4" id="updatesGrid"></div>
          </div>
        </section>

        <section class="cities-section">
          <div class="container-page">
            <div class="row g-4 align-items-start">
              <div class="col-lg-5">
                <h2 class="cities-title" data-i18n-html="cities.title">Online Traffic School Courses Also Offered In These California Cities:</h2>
              </div>
              <div class="col-lg-7">
                <div class="cities-grid" id="citiesGrid"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="cta-strip">
          <div class="cta-panel">
            <div class="shield-ring" aria-hidden="true">
              <i class="bi bi-shield-check"></i>
            </div>
            <div>
              <h2 class="cta-title" data-i18n="cta.title">Enroll in Our Online Traffic School Course</h2>
              <p class="cta-copy" data-i18n="cta.copy">
                Join over 10 million satisfied customers and complete your traffic school requirement today
              </p>
            </div>
            <a class="cta-button" href="Default.aspxstate/california-online-traffic-school">
              <span data-i18n="cta.button">Register Now</span>
              <i class="bi bi-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </section>
      </main>
</asp:Content>

<asp:Content ID="ScriptContent" ContentPlaceHolderID="ScriptContent" runat="server">
</div>

    <div class="share-toast" id="shareToast" aria-live="polite"></div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <script>
      (() => {
        const STORAGE_KEY = "gtts:state-landing:lang";
        const COURSE_URL = "Default.aspxstate/california-online-traffic-school";
        const CITY_NAMES = [
          "Antioch",
          "Bakersfield",
          "Berkeley",
          "Burbank",
          "Carlsbad",
          "Clovis",
          "Concord",
          "Downey",
          "Fairfield",
          "Fontana",
          "Fresno",
          "Glendale",
          "Irvine",
          "Lancaster",
          "Long Beach",
          "Los Angeles",
          "Oakland",
          "Orange",
          "Oxnard",
          "Palmdale",
          "San Diego",
          "San Francisco",
          "San Jose",
          "Pasadena"
        ];

        const ICONS = {
          benefits: [
            "assets/lower-rates-icon.svg",
            "assets/figma-home/downvote.svg",
            "assets/figma-home/online.svg",
            "assets/figma-home/moneyback.svg",
            "assets/figma-home/free.svg",
            "assets/figma-home/mobile.svg",
            "assets/figma-home/support.svg"
          ],
          cards: [
            "assets/figma-home/online.svg",
            "assets/figma-home/support.svg",
            "assets/over-10-million-customers.webp"
          ]
        };

        const content = {
          en: {
            pageTitle: "California Traffic School - Online | GoToTrafficSchool.com",
            pageDescription: "California traffic school online with quick answers, flexible coursework, and simple enrollment through GoToTrafficSchool.",
            skip: "Skip to main content",
            share: {
              button: "Share This Page",
              toast: "Page link copied."
            },
            utility: {
              contact: "Contact Us: 1-800-909-3909"
            },
            nav: {
              about: "About Us",
              how: "How It Works",
              faq: "FAQs",
              partner: "Partner with us",
              contact: "Contact Us",
              login: "Log In"
            },
            lang: {
              label: "Select Language",
              english: "English (US)",
              spanish: "Español"
            },
            hero: {
              title: "California Traffic School<br>- Online",
              copy: "Find answers to the most common questions about traffic school, eligibility, tickets, insurance, and more.",
              primary: "Traffic School Course",
              secondary: "FAQ"
            },
            benefits: [
              "Lower Rates",
              "Best Price",
              "100% Online,<br>Fast & Easy",
              "Money Back<br>Guarantee",
              "Start The<br>Course For Free",
              "Mobile App Access",
              "Live Customer<br>Support"
            ],
            cards: [
              {
                title: "Works On All Devices",
                copy: "Any Computer with Internet Access",
                items: ["Laptop", "Tablet", "Mobile Phone"]
              },
              {
                title: "Audio Read Along",
                copy: "Have Course Text Read Aloud",
                items: ["Listen to Samples", "Multiple Languages"]
              },
              {
                title: "Over 10 Million Customers",
                copy: "Five Star Customer Satisfaction",
                items: ["Customer's Reviews", "FAQ's"]
              }
            ],
            ticket: {
              title: "Mask Your Ticket - Fast and Easy",
              copy1: "If you've received a traffic ticket in California, you may be eligible to complete a DMV-approved traffic school course to mask the violation.",
              copy2: "Our course is fully licensed by the California DMV and designed to help you complete your requirement quickly and conveniently.",
              subtitle: "Accepted by California Courts",
              items: [
                "Register online in minutes",
                "Complete the course at your own pace",
                "Receive your certificate and submit to court"
              ]
            },
            faq: {
              title: "California traffic school frequently asked questions",
              items: [
                {
                  question: "What is a California traffic school online course?",
                  answer: "A California traffic school online course is a state-approved program that allows eligible drivers to:",
                  bullets: [
                    "Dismiss a traffic ticket",
                    "Avoid points on their driving record",
                    "Prevent insurance rate increases"
                  ],
                  note: "Our California DMV traffic school course is 100% online, easy to complete, and accepted by courts statewide."
                },
                {
                  question: "Can I dismiss my ticket with a California ticket dismissal traffic school?",
                  answer: "Yes. If approved by the court, completing a California ticket dismissal traffic school can:",
                  bullets: [
                    "Keep points off your record",
                    "Protect your insurance rates"
                  ],
                  note: "This is one of the easiest ways to handle a California speeding ticket traffic school requirement. Check your eligibility instantly."
                },
                {
                  question: "Is this a California DMV approved traffic school?",
                  answer: "Yes. Our course is a California DMV approved traffic school and meets all state and court requirements.",
                  bullets: [
                    "Ticket dismissal",
                    "Point reduction",
                    "Court compliance"
                  ]
                },
                {
                  question: "Will this reduce points on my driving record?",
                  answer: "Yes. Completing a California point reduction traffic school can prevent points from appearing on your record if eligible.",
                  bullets: [
                    "Maintain a clean driving history",
                    "Avoid insurance increases"
                  ]
                },
                {
                  question: "Why should I take a California traffic school online?",
                  answer: "A California traffic school online is:",
                  bullets: [
                    "Faster than in-person classes",
                    "More convenient to complete anytime",
                    "Designed to help you drive safer and avoid future tickets"
                  ]
                },
                {
                  question: "How does the California online traffic school work?",
                  answer: "Our California online traffic school is simple:",
                  bullets: [
                    "Register in minutes",
                    "Complete lessons at your own pace",
                    "Pass a short final quiz",
                    "Receive your certificate"
                  ],
                  note: "You can start and stop anytime - your progress is saved."
                },
                {
                  question: "How long does the California traffic school take?",
                  answer: "California requires approximately 8 hours of course material, but you can complete it at your own pace - log in and out anytime from any device.",
                  bullets: [
                    "No time limits per session",
                    "Complete on your schedule"
                  ]
                },
                {
                  question: "Is the California traffic school easy?",
                  answer: "Yes. Our California traffic school is designed to be:",
                  bullets: [
                    "User-friendly",
                    "Mobile-compatible",
                    "Easy to understand"
                  ],
                  note: "Most students pass on their first attempt."
                },
                {
                  question: "What happens if I fail the final test?",
                  answer: "No problem - you'll have multiple opportunities to pass your California traffic school final exam. We want you to succeed."
                },
                {
                  question: "How much does a California traffic school online cost?",
                  answer: "Our California traffic school course is one of the most affordable options available at only $23.90.",
                  note: "Bonus: You can often start your course before paying."
                }
              ]
            },
            partner: {
              title: "Become a GoToTrafficSchool Partner and Make Money!",
              items: [
                "Do you own a brick and mortar traffic school?",
                "Has your school been losing customers daily?",
                "Want to start offering an online traffic school course?"
              ],
              copy: "If you answered yes to all of those above questions then you must watch this short video. It will change your business.",
              button: "See How It Works"
            },
            updates: {
              title: "Updates In California",
              link: "Click here to see all the updates",
              readTime: "7 Min",
              cta: "Read Full Post",
              items: [
                {
                  image: "assets/faq-hero-driving-questions.webp",
                  date: "26 August 2024",
                  title: "Focused Driving in California: Building Habits That Prevent Distractions"
                },
                {
                  image: "assets/about-hero-driver.webp",
                  date: "26 August 2024",
                  title: "How California Drivers Can Use Traffic School to Keep Points Off Their Record"
                },
                {
                  image: "assets/contact-hero.webp",
                  date: "26 August 2024",
                  title: "How California Traffic School Helps You Mask a Ticket"
                }
              ]
            },
            cities: {
              title: "Online Traffic School Courses Also Offered In These California Cities:"
            },
            cta: {
              title: "Enroll in Our Online Traffic School Course",
              copy: "Join over 10 million satisfied customers and complete your traffic school requirement today",
              button: "Register Now"
            },
            footer: {
              blurb: "The fastest, easiest way to complete your traffic school online. Trusted by over 10 million drivers nationwide.",
              location: "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
              company: "Company",
              about: "About Us",
              how: "How It Works",
              faq: "FAQ",
              contact: "Contact",
              partner: "Partner Program",
              legal: "Legal",
              privacy: "Privacy Policy",
              terms: "Terms Of Service",
              court: "Court Directory",
              comments: "Student Comment",
              follow: "Follow Us",
              copyrightPrefix: "© 2026 gototrafficschool.com Powered by",
              copyrightSuffix: "All rights reserved."
            }
          },
          es: {
            pageTitle: "Escuela de Transito de California en Linea | GoToTrafficSchool.com",
            pageDescription: "Escuela de transito en linea de California con respuestas rapidas, cursos flexibles y una inscripcion sencilla a traves de GoToTrafficSchool.",
            skip: "Saltar al contenido principal",
            share: {
              button: "Compartir Esta Pagina",
              toast: "Se copio el enlace de la pagina."
            },
            utility: {
              contact: "Contactenos: 1-800-909-3909"
            },
            nav: {
              about: "Sobre Nosotros",
              how: "Como Funciona",
              faq: "Preguntas Frecuentes",
              partner: "Asociese con nosotros",
              contact: "Contactenos",
              login: "Iniciar Sesion"
            },
            lang: {
              label: "Seleccionar Idioma",
              english: "English (US)",
              spanish: "Espanol"
            },
            hero: {
              title: "Escuela de Transito de California<br>- En Linea",
              copy: "Encuentre respuestas a las preguntas mas comunes sobre la escuela de transito, la elegibilidad, las multas, el seguro y mas.",
              primary: "Curso de Escuela de Transito",
              secondary: "Preguntas Frecuentes"
            },
            benefits: [
              "Tarifas Mas Bajas",
              "Mejor Precio",
              "100% En Linea,<br>Rapido y Facil",
              "Garantia de<br>Reembolso",
              "Comience El<br>Curso Gratis",
                "Acceso a la App Movil",
              "Soporte en Vivo<br>al Cliente"
            ],
            cards: [
              {
                title: "Funciona En Todos Los Dispositivos",
                copy: "Cualquier computadora con acceso a internet",
                items: ["Laptop", "Tableta", "Telefono movil"]
              },
              {
                title: "Lectura En Audio",
                copy: "Escuche el texto del curso en voz alta",
                items: ["Escuche ejemplos", "Multiples idiomas"]
              },
              {
                title: "Mas De 10 Millones De Clientes",
                copy: "Satisfaccion de clientes de cinco estrellas",
                items: ["Resenas de clientes", "Preguntas frecuentes"]
              }
            ],
            ticket: {
              title: "Oculte Su Multa - Rapido y Facil",
              copy1: "Si recibio una multa de trafico en California, puede ser elegible para completar un curso de escuela de transito aprobado por el DMV para ocultar la infraccion.",
              copy2: "Nuestro curso esta totalmente autorizado por el DMV de California y disenado para ayudarle a completar su requisito de forma rapida y conveniente.",
              subtitle: "Aceptado Por Los Tribunales De California",
              items: [
                "Registrese en linea en minutos",
                "Complete el curso a su propio ritmo",
                "Reciba su certificado y presentelo al tribunal"
              ]
            },
            faq: {
              title: "Preguntas frecuentes sobre la escuela de transito de California",
              items: [
                {
                  question: "Que es un curso en linea de escuela de transito de California?",
                  answer: "Un curso en linea de escuela de transito de California es un programa aprobado por el estado que permite a los conductores elegibles:",
                  bullets: [
                    "Desestimar una multa de trafico",
                    "Evitar puntos en su historial de manejo",
                    "Prevenir aumentos en las tarifas del seguro"
                  ],
                  note: "Nuestro curso de escuela de transito del DMV de California es 100% en linea, facil de completar y aceptado por tribunales de todo el estado."
                },
                {
                  question: "Puedo desestimar mi multa con una escuela de transito de California para desestimacion de multas?",
                  answer: "Si. Si el tribunal lo aprueba, completar una escuela de transito de California para desestimacion de multas puede:",
                  bullets: [
                    "Mantener los puntos fuera de su historial",
                    "Proteger las tarifas de su seguro"
                  ],
                  note: "Esta es una de las maneras mas sencillas de manejar un requisito de escuela de transito por multa de velocidad en California. Verifique su elegibilidad al instante."
                },
                {
                  question: "Es esta una escuela de transito aprobada por el DMV de California?",
                  answer: "Si. Nuestro curso es una escuela de transito aprobada por el DMV de California y cumple con todos los requisitos estatales y judiciales.",
                  bullets: [
                    "Desestimacion de multas",
                    "Reduccion de puntos",
                    "Cumplimiento judicial"
                  ]
                },
                {
                  question: "Esto reducira puntos en mi historial de manejo?",
                  answer: "Si. Completar una escuela de transito de California para reduccion de puntos puede evitar que aparezcan puntos en su historial si es elegible.",
                  bullets: [
                    "Mantener un historial limpio",
                    "Evitar aumentos en el seguro"
                  ]
                },
                {
                  question: "Por que deberia tomar una escuela de transito de California en linea?",
                  answer: "Una escuela de transito de California en linea es:",
                  bullets: [
                    "Mas rapida que las clases presenciales",
                    "Mas conveniente para completar en cualquier momento",
                    "Disenada para ayudarle a conducir mas seguro y evitar futuras multas"
                  ]
                },
                {
                  question: "Como funciona la escuela de transito en linea de California?",
                  answer: "Nuestra escuela de transito en linea de California es sencilla:",
                  bullets: [
                    "Registrese en minutos",
                    "Complete las lecciones a su propio ritmo",
                    "Apruebe un examen final corto",
                    "Reciba su certificado"
                  ],
                  note: "Puede comenzar y detenerse en cualquier momento: su progreso se guarda."
                },
                {
                  question: "Cuanto tiempo toma la escuela de transito de California?",
                  answer: "California requiere aproximadamente 8 horas de material del curso, pero puede completarlo a su propio ritmo; inicie y cierre sesion en cualquier momento desde cualquier dispositivo.",
                  bullets: [
                    "Sin limite de tiempo por sesion",
                    "Complete el curso en su horario"
                  ]
                },
                {
                  question: "Es facil la escuela de transito de California?",
                  answer: "Si. Nuestra escuela de transito de California esta disenada para ser:",
                  bullets: [
                    "Facil de usar",
                    "Compatible con moviles",
                    "Facil de entender"
                  ],
                  note: "La mayoria de los estudiantes aprueba en su primer intento."
                },
                {
                  question: "Que pasa si no apruebo el examen final?",
                  answer: "No se preocupe: tendra multiples oportunidades para aprobar el examen final de la escuela de transito de California. Queremos que tenga exito."
                },
                {
                  question: "Cuanto cuesta una escuela de transito de California en linea?",
                  answer: "Nuestro curso de escuela de transito de California es una de las opciones mas economicas disponibles por solo $23.90.",
                  note: "Ademas: a menudo puede comenzar su curso antes de pagar."
                }
              ]
            },
            partner: {
              title: "Conviertase En Socio De GoToTrafficSchool y Gane Dinero",
              items: [
                "Tiene una escuela de transito fisica?",
                "Su escuela ha estado perdiendo clientes cada dia?",
                "Quiere empezar a ofrecer un curso de escuela de transito en linea?"
              ],
              copy: "Si respondio que si a todas las preguntas anteriores, debe ver este video corto. Cambiara su negocio.",
              button: "Vea Como Funciona"
            },
            updates: {
              title: "Actualizaciones En California",
              link: "Haga clic aqui para ver todas las actualizaciones",
              readTime: "7 Min",
              cta: "Leer Publicacion Completa",
              items: [
                {
                  image: "assets/faq-hero-driving-questions.webp",
                  date: "26 Agosto 2024",
                  title: "Conduccion enfocada en California: habitos que ayudan a prevenir distracciones"
                },
                {
                  image: "assets/about-hero-driver.webp",
                  date: "26 Agosto 2024",
                  title: "Como los conductores de California pueden usar la escuela de transito para evitar puntos en su historial"
                },
                {
                  image: "assets/contact-hero.webp",
                  date: "26 Agosto 2024",
                  title: "Como la escuela de transito de California le ayuda a ocultar una multa"
                }
              ]
            },
            cities: {
              title: "Cursos De Escuela De Transito En Linea Tambien Disponibles En Estas Ciudades De California:"
            },
            cta: {
              title: "Inscribase En Nuestro Curso De Escuela De Transito En Linea",
              copy: "Unase a mas de 10 millones de clientes satisfechos y complete hoy su requisito de escuela de transito",
              button: "Registrarse Ahora"
            },
            footer: {
              blurb: "La forma mas rapida y sencilla de completar su escuela de transito en linea. Con la confianza de mas de 10 millones de conductores en todo el pais.",
              location: "8034 Garden Grove Blvd Suite C Garden Grove, CA 92844",
              company: "Empresa",
              about: "Sobre Nosotros",
              how: "Como Funciona",
              faq: "Preguntas Frecuentes",
              contact: "Contacto",
              partner: "Programa de Socios",
              legal: "Legal",
              privacy: "Politica de Privacidad",
              terms: "Terminos del Servicio",
              court: "Directorio de Tribunales",
              comments: "Comentario del Estudiante",
              follow: "Siganos",
              copyrightPrefix: "© 2026 gototrafficschool.com Desarrollado por",
              copyrightSuffix: "Todos los derechos reservados."
            }
          }
        };

        const map = {
          "skip": "skip",
          "share.button": "share.button",
          "utility.contact": "utility.contact",
          "nav.about": "nav.about",
          "nav.how": "nav.how",
          "nav.faq": "nav.faq",
          "nav.partner": "nav.partner",
          "nav.contact": "nav.contact",
          "nav.login": "nav.login",
          "lang.label": "lang.label",
          "lang.english": "lang.english",
          "lang.spanish": "lang.spanish",
          "hero.copy": "hero.copy",
          "hero.primary": "hero.primary",
          "hero.secondary": "hero.secondary",
          "ticket.title": "ticket.title",
          "ticket.copy1": "ticket.copy1",
          "ticket.copy2": "ticket.copy2",
          "ticket.subtitle": "ticket.subtitle",
          "faq.title": "faq.title",
          "partner.title": "partner.title",
          "partner.copy": "partner.copy",
          "partner.button": "partner.button",
          "updates.title": "updates.title",
          "updates.link": "updates.link",
          "cta.title": "cta.title",
          "cta.copy": "cta.copy",
          "cta.button": "cta.button",
          "footer.blurb": "footer.blurb",
          "footer.location": "footer.location",
          "footer.company": "footer.company",
          "footer.about": "footer.about",
          "footer.how": "footer.how",
          "footer.faq": "footer.faq",
          "footer.contact": "footer.contact",
          "footer.partner": "footer.partner",
          "footer.legal": "footer.legal",
          "footer.privacy": "footer.privacy",
          "footer.terms": "footer.terms",
          "footer.court": "footer.court",
          "footer.comments": "footer.comments",
          "footer.follow": "footer.follow",
          "footer.copyrightPrefix": "footer.copyrightPrefix",
          "footer.copyrightSuffix": "footer.copyrightSuffix"
        };

        function getValue(source, path) {
          return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), source);
        }

        function escapeHtml(value) {
          return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        }

        function renderBenefits(langData) {
          const grid = document.getElementById("benefitsGrid");
          grid.innerHTML = langData.benefits.map((title, index) => `
            <div class="benefit-item">
              <img src="${ICONS.benefits[index]}" alt="">
              <h3>${title}</h3>
            </div>
          `).join("");
        }

        function renderCards(langData) {
          const cards = document.getElementById("infoCards");
          cards.innerHTML = langData.cards.map((card, index) => `
            <div class="col-md-6 col-xl-4">
              <article class="info-card">
                <span class="info-card-icon" aria-hidden="true">
                  <img src="${ICONS.cards[index]}" alt="">
                </span>
                <h3 class="info-card-title">${escapeHtml(card.title)}</h3>
                <p class="info-card-copy">${escapeHtml(card.copy)}</p>
                <ul class="info-card-list">
                  ${card.items.map((item) => `
                    <li>
                      <i class="bi bi-check-lg" aria-hidden="true"></i>
                      <span>${escapeHtml(item)}</span>
                    </li>
                  `).join("")}
                </ul>
              </article>
            </div>
          `).join("");
        }

        function renderTicketList(langData) {
          const list = document.getElementById("ticketList");
          list.innerHTML = langData.ticket.items.map((item) => `
            <li>
              <span class="check-badge"><i class="bi bi-check-lg" aria-hidden="true"></i></span>
              <span>${escapeHtml(item)}</span>
            </li>
          `).join("");
        }

        function renderFaqs(langData) {
          const faqList = document.getElementById("faqList");
          faqList.innerHTML = langData.faq.items.map((item, index) => `
            <article class="faq-item">
              <div class="faq-number">${index + 1}</div>
              <div>
                <h3 class="faq-question">${escapeHtml(item.question)}</h3>
                <p class="faq-answer">${escapeHtml(item.answer)}</p>
                ${item.bullets ? `
                  <ul class="faq-bullets">
                    ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
                  </ul>
                ` : ""}
                ${item.note ? `<p class="faq-answer mt-2">${escapeHtml(item.note)}</p>` : ""}
              </div>
            </article>
          `).join("");
        }

        function renderPartnerList(langData) {
          const list = document.getElementById("partnerList");
          list.innerHTML = langData.partner.items.map((item) => `
            <li>
              <i class="bi bi-check-lg" aria-hidden="true"></i>
              <span>${escapeHtml(item)}</span>
            </li>
          `).join("");
        }

        function renderUpdates(langData) {
          const grid = document.getElementById("updatesGrid");
          grid.innerHTML = langData.updates.items.map((item) => `
            <div class="col-md-6 col-xl-4">
              <article class="update-card">
                <img class="update-card-image" src="${item.image}" alt="${escapeHtml(item.title)}">
                <div class="update-meta">
                  <span>${escapeHtml(item.date)}</span>
                  <span class="read-pill">${escapeHtml(langData.updates.readTime)}</span>
                </div>
                <h3 class="update-title">${escapeHtml(item.title)}</h3>
                <a class="update-link" href="Default.aspx">
                  <span>${escapeHtml(langData.updates.cta)}</span>
                  <i class="bi bi-chevron-right" aria-hidden="true"></i>
                </a>
              </article>
            </div>
          `).join("");
        }

        function renderCities() {
          const grid = document.getElementById("citiesGrid");
          grid.innerHTML = CITY_NAMES.map((city) => `
            <a class="city-pill" href="${COURSE_URL}">${escapeHtml(city)}</a>
          `).join("");
        }

        function applyTranslations(lang) {
          const langData = content[lang] || content.en;
          document.documentElement.lang = lang === "es" ? "es" : "en";
          document.title = langData.pageTitle;
          document.getElementById("pageDescription").setAttribute("content", langData.pageDescription);

          document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.getAttribute("data-i18n");
            const path = map[key];
            if (!path) {
              return;
            }
            const value = getValue(langData, path);
            if (typeof value === "string") {
              node.textContent = value;
            }
          });

          document.querySelectorAll("[data-i18n-html]").forEach((node) => {
            const path = node.getAttribute("data-i18n-html");
            const value = getValue(langData, path);
            if (typeof value === "string") {
              node.innerHTML = value;
            }
          });

          document.getElementById("languageSelect").value = lang;
          renderBenefits(langData);
          renderCards(langData);
          renderTicketList(langData);
          renderFaqs(langData);
          renderPartnerList(langData);
          renderUpdates(langData);
          renderCities();
        }

        let toastTimer;

        function showToast(message) {
          const toast = document.getElementById("shareToast");
          toast.textContent = message;
          toast.classList.add("visible");
          window.clearTimeout(toastTimer);
          toastTimer = window.setTimeout(() => {
            toast.classList.remove("visible");
          }, 2200);
        }

        async function sharePage() {
          const lang = document.getElementById("languageSelect").value || "en";
          const toastMessage = content[lang].share.toast;
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
          } catch (error) {
            if (error && error.name === "AbortError") {
              return;
            }
          }

          try {
            await navigator.clipboard.writeText(window.location.href);
            showToast(toastMessage);
          } catch (error) {
            const range = document.createRange();
            const dummy = document.createElement("span");
            dummy.textContent = window.location.href;
            document.body.appendChild(dummy);
            range.selectNode(dummy);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
            selection.removeAllRanges();
            dummy.remove();
            showToast(toastMessage);
          }
        }

        const storedLang = window.localStorage.getItem(STORAGE_KEY);
        const initialLang = storedLang === "es" ? "es" : "en";
        applyTranslations(initialLang);

        document.getElementById("languageSelect").addEventListener("change", (event) => {
          const nextLang = event.target.value === "es" ? "es" : "en";
          window.localStorage.setItem(STORAGE_KEY, nextLang);
          applyTranslations(nextLang);
        });

        document.getElementById("sharePage").addEventListener("click", sharePage);
      })();
    </script>
</asp:Content>
