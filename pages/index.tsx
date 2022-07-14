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
      </Head>
      <Layout title="~" width="3/5">
        <div className="m-10">
          <h1 className="text-2xl font-semibold underline underline-offset-2 decoration-2 decoration-amber-400">Daniel Gushchyan</h1>
          <br></br>
          <p>
            Too much of our life, liberty, and property is in the hands of entities we can't even see.
            The tools to change this exist today. Our responsibility to use them is burning.
          </p>
          <p>
            My purpose is to build towards a more integrated, trustless world via <LinkTo href={"https://www.youtube.com/watch?v=UbRlumFvgr4"}>blockchain</LinkTo> and decentralized technologies.
          </p>
          <br/>
          <p className="">
            I'm currently a student studying Computer Science at UC Berkeley, and a member of <LinkTo href={"https://blockchain.berkeley.edu"}>Blockchain at Berkeley</LinkTo>.
          </p>
          <br/>
          <p>
            In my free time I like to lift heavy objects, explore music, read too many self-help books, և լինել հպարթ հայ.
          </p>
          <br/>
          <h2 className="mt-2 text-lg font-semibold">Contact</h2> 
          <p>I love conversation. If you'd like to talk, reach out to me via the channels below (in order of preference):</p>
          <br/>
          <p>Email: daniel.g (at) berkeley.edu</p>
          <p>Twitter: <LinkTo href="https://www.twitter.com/0xdyan">@0xdyan</LinkTo></p>
          <p>Calendly: <LinkTo href="https://calendly.com/dangush">schedule</LinkTo></p>
          <p>LinkedIn: <LinkTo href="https://www.linkedin/in/danielgushchyan">corporate</LinkTo></p>
          <p>GitHub: <LinkTo href="https://www.github.com/dangush">dangush</LinkTo></p>
          <br/>
          <div className="text-center">
            <p className="inline py-1 px-3 text-lg border-x-2 border-amber-400">
              <LinkTo href=""><Link href="/posts">Blog</Link></LinkTo> | <LinkTo href=""><Link href="/reviews">Reviews</Link></LinkTo></p>
          </div>
        </div>
      </Layout>
  </>)
}

export default Home
