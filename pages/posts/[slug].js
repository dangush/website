import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import Head from 'next/head'
import Layout from "../../components/Layout";
//import type { NextPage } from 'next'

// The page for each post
export default function Post({frontmatter, content}) {
    const {title, author, category, date, bannerImage, tags} = frontmatter

    return (<>
      <Head>
        <title>title</title>
      </Head>
      <Layout width="10/12 font-posts">
        <div className="m-4 lg:m-10 flex flex-col justify-left">
          <div className="lg:ml-10">
            <h1 className="text-3xl font-md">{title}</h1>
            <h2 className="text-xs mt-2">{date}</h2>
          </div>
          <br/>
          <div className="flex justify-center"><div className="prose max-w-none lg:w-7/12 md:w-10/12 w-full" dangerouslySetInnerHTML={{ __html: md().render(content) }} /></div>
        </div>
      </Layout>
    </>)
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
