// Auto-ported from the original page's inline <script> blocks.
// Runs once after the page markup mounts (see PageShell).
export function init(root) {
  // ---- page script block 1 ----
  ;(function(){

      const shareButton = document.querySelector("#sharePage");
      shareButton?.addEventListener("click", async () => {
        const shareData = {
          title: document.title,
          url: window.location.href
        };

        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }

        await navigator.clipboard?.writeText(window.location.href);
        shareButton.textContent = "Link Copied";
        window.setTimeout(() => {
          shareButton.textContent = "Share This Page";
        }, 1600);
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      }, { threshold: 0.18 });

      document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    
  })();

}
