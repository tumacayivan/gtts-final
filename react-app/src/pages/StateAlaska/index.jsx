import html from './content.html?raw'
import css from '../StateLanding/styles.css?inline'
import { init } from '../StateLanding/script.js'
import PageShell from '../../components/PageShell.jsx'

export default function StateAlaska() {
  return <PageShell html={html} css={css} init={init} title="Alaska Traffic School Online | GoToTrafficSchool.com" />
}
