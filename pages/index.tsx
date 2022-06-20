import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Example from './example'
import Link from 'next/link'
import Breadcrumbs from 'nextjs-breadcrumbs'
import Layout from '../components/Layout'
import LinkTo from '../components/LinkTo'

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
        <br/>
        <h2 className="text-lg font-medium">Contact</h2> 
        <p>Email: daniel.g (at) berkeley.edu</p>
        <p>Twitter: <LinkTo href="twitter.com/0xdyan">@0xdyan</LinkTo></p>
        <p>LinkedIn: <LinkTo href="linkedin.com/in/danielgushchyan">corporate</LinkTo></p>
        <br/>
        <div className="text-center">
          <p className="inline py-1 px-2 text-lg border-x-2 border-amber-400">
            <LinkTo href=""><Link href="/posts">Blog</Link></LinkTo> | <LinkTo href=""><Link href="/reviews">Reviews</Link></LinkTo></p>
        </div>
      </Layout>
  </>)
}

export default Home
