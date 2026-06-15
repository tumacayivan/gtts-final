import html from './content.html?raw'
import css from '../StateLanding/styles.css?inline'
import { init } from '../StateLanding/script.js'
import PageShell from '../../components/PageShell.jsx'

export default function StateTemplate() {
  return <PageShell html={html} css={css} init={init} title="State Traffic School Online | GoToTrafficSchool.com" />
}
