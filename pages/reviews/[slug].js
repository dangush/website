import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import Head from 'next/head'
import Layout from "../../components/Layout";
//import type { NextPage } from 'next'

// The page for each post
export default function Review({frontmatter, content}) {
    const {title, author, category, date, bannerImage, tags} = frontmatter

    return (<>
      <Head>
        <title>title</title>
      </Head>
      <Layout>
        <img src={bannerImage}/>
        <h1>{title}</h1>
        <h2>{author} || {date}</h2>
        <h3>{category} || {tags.join()}</h3>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </Layout>
    </>)
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("reviews");
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
    const fileName = fs.readFileSync(`reviews/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
