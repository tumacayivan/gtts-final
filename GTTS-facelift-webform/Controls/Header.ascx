<%@ Control Language="C#" AutoEventWireup="true" %>

<header class="site-header">
  <div class="utility-bar">
    <div class="container-page container-xxl utility-inner">
      <button class="share-button" type="button" id="sharePage" data-i18n="share.button" data-i18n-alt="top.share">Share This Page</button>
      <a class="utility-phone" href="tel:18009093909" data-i18n="utility.contact" data-i18n-alt="top.contact">Contact Us: 1-800-909-3909</a>
    </div>
  </div>

  <nav class="navbar navbar-expand-xl bg-white main-nav" aria-label="Primary navigation">
    <div class="container-page container-xxl">
      <a class="navbar-brand" href="Default.aspx" aria-label="GoToTrafficSchool home">
        <img src="assets/27011e2d11f5db744e67f9d6a10997a321353540.webp" alt="Go To Traffic School">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#primaryNav"
        aria-controls="primaryNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="primaryNav">
        <ul class="navbar-nav nav-links ms-xl-auto align-items-xl-center">
          <li class="nav-item"><a class="nav-link" href="About.aspx" data-i18n="nav.about">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="HowItWorks.aspx" data-i18n="nav.how">How It Works</a></li>
          <li class="nav-item"><a class="nav-link" href="Faq.aspx" data-i18n="nav.faq">FAQs</a></li>
          <li class="nav-item"><a class="nav-link" href="Partners.aspx" data-i18n="nav.partner">Partner with us</a></li>
          <li class="nav-item"><a class="nav-link" href="ContactUs.aspx" data-i18n="nav.contact">Contact Us</a></li>
        </ul>
        <div class="nav-actions">
          <div class="language-wrap nav-language">
            <i class="bi bi-globe2" aria-hidden="true"></i>
            <select class="form-select" id="siteLanguageSelect" aria-label="Select language">
              <option value="English">English (US)</option>
              <option value="Spanish">Español</option>
            </select>
          </div>
          <a class="login-link" href="https://member.gototrafficschool.com/member/login.aspx">
            <i class="bi bi-person"></i>
            <span data-i18n="nav.login">Log In</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
