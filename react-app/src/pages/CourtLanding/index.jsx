import html from './content.html?raw'
import css from './styles.css?inline'
import { init } from './script.js'
import PageShell from '../../components/PageShell.jsx'

export default function CourtLanding() {
  return <PageShell html={html} css={css} init={init} title={"Court Programs | GoToTrafficSchool.com"} />
}
