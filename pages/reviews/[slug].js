import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import markdownToHtml from '../api/markdownToHtml'

// The page for each post
export default function Review({frontmatter, contentHTML}) {
    const {title, author, category, date, bannerImage, tags, blurb} = frontmatter

    return (<>
      <Head>
        <title>{`reviews/${title}`}</title>
      </Head>
      <Layout width="10/12">
        <div className="m-4 lg:m-10">
          <h2>{date}</h2>
          <h1 className=" text-2xl font-bold">{title}</h1>
          <div className="justify-center relative w-full h-48 lg:h-64">
            <Image
                src={bannerImage}
                alt={`Cover Image for ${title}`}
                layout='fill'
                objectFit='contain'
                />
          </div>
          <h3 className="text-center pb-5 border-b-2 border-amber-400">{blurb}</h3>
          <br/>
          <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        </div>
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
    
    const contentHTML = await markdownToHtml(content || '')

    return {
      props: {
        frontmatter,
        contentHTML,
      },
    };
  }
