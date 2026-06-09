import html from './content.html?raw'
import css from './styles.css?inline'
import { init } from './script.js'
import PageShell from '../../components/PageShell.jsx'

export default function HowItWorks() {
  return <PageShell html={html} css={css} init={init} title={"How It Works | GoToTrafficSchool.com"} />
}
