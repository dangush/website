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
      <Layout title="~" width="">
        <div className="md:m-10 m-5 md:text-base text-sm">
          <h1 className="text-2xl font-semibold underline underline-offset-2 decoration-2 decoration-amber-400">Daniel Gushchyan</h1>
          <br></br>
          <p>
            Too much of our life, liberty, and property is in the hands of entities we can't even see.
          </p>          
          <p>
            The tools to change this exist today. Our responsibility to use them is burning.
          </p>
          <br/>
          <p>
            My purpose is to build towards a more integrated, trustless world via <LinkTo href={"https://www.youtube.com/watch?v=UbRlumFvgr4"}>blockchain</LinkTo>, decentralized system design, and cryptography.
          </p>
          <br/>
          <p className="">
            I'm currently engineering for <LinkTo href={"https://cycles.money"}>Cycles</LinkTo> at <LinkTo href={"https://informal.systems"}>Informal Systems</LinkTo> with the goal of clearing the most debt, with the least amount of money, for the most people possible.
          </p>
          <p>
            Previously, I studied Computer Science and Political Economy at UC Berkeley, and led <LinkTo href={"https://blockchain.berkeley.edu"}>Blockchain at Berkeley</LinkTo> as President.
          </p>
          <br/>
          <p>
            In my free time I like to lift heavy objects, explore music through rym, hide incomplete thoughts in Obsidian vaults, և լինել հպարթ հայ.
          </p>
          <br/>
          <h2 className="mt-2 text-lg font-semibold">Contact</h2> 
          <p>I love conversation. If you'd like to chat, please reach out to me via the channels below.</p>
          <br/>
          <p>Email: daniel.g (at) berkeley.edu</p>
          <p>Twitter: <LinkTo href="https://www.twitter.com/0xdyan">@0xdyan</LinkTo></p>
          <p>Calendly: <LinkTo href="https://calendly.com/dangush">schedule</LinkTo></p>
          <p>LinkedIn: <LinkTo href="https://www.linkedin.com/in/danielgushchyan">4 corpo's</LinkTo></p>
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
