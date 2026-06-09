import { useEffect, useRef } from 'react'

/**
 * Renders one ported page. The page's original markup and stylesheet are kept
 * verbatim and injected into the DOM; its inline scripts are run (scoped) after
 * the markup mounts. The <style> is rendered alongside the markup so the page's
 * CSS lives and dies with the route — no cross-page leakage.
 */
export default function PageShell({ html, css, init, title }) {
  const ref = useRef(null)

  useEffect(() => {
    if (title) document.title = title
    let cleanup
    if (typeof init === 'function') {
      try {
        cleanup = init(ref.current)
      } catch (err) {
        // A failure in one page's ported script shouldn't blank the whole app.
        console.error('Page script error:', err)
      }
    }
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
