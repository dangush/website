import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Example from './example'
import Link from 'next/link'
import Breadcrumbs from 'nextjs-breadcrumbs'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (<>
     <Head>
        <title>dangush</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="~">
        <h1 className="text-xl font-semibold">Daniel Gushchyan</h1>
        <br></br>
        <p className="">
          I'm currently a student studying Computer Science at UC Berkeley.
        </p>
        <p>
          My purpose is to build towards a more integrated, trustless world via blockchain and decentralized technologies.
        </p>
        <br>
        </br>
        <Link href="/posts">Go to BLOG</Link>
      </Layout>
  </>)
}

export default Home
