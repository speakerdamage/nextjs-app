import Head from 'next/head'
import Layout, { siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>CK is a senior full-stack web developer based in Pittsburgh, PA. His dog is snoring underneath his desk right now.</p>
        <p className={utilStyles.headingSpecial}>Ruby's snoring is an omnipresent sound that will live on forever.</p>
        <p>I left off <a href="https://nextjs.org/learn/basics/data-fetching" target="_blank">here</a>.</p>
      </section>
    </Layout>
  )
}
