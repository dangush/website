import Head from 'next/head'
import Image from 'next/image'
import Example from './example'
import Link from 'next/link'
import Breadcrumbs from 'nextjs-breadcrumbs'
import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../components/Layout'

export default function Blog({posts}) {
    return (<>        
        <Head>
            <title>dangush/posts</title>
        </Head>
        <Layout title="blog" width="">
            <div className="md:mx-10 md:my-10 mx-2 my-6 flex flex-col space-y-5">
                {posts.map(post => {
                    //extract slug and frontmatter
                    const {slug, frontmatter} = post
                    //extract frontmatter properties
                    const {title, author, category, date, bannerImage, tags} = frontmatter

                    //JSX for individual blog listing
                    return <article 
                            className="hover:cursor-pointer border-b-2 border-amber-500 hover:bg-amber-500 hover:border-black hover:text-white"
                            key={title}>
                        <h3 className="block text-sm">{date}</h3>
                        <Link
                            href={`/posts/${slug}`}>
                            <h1 className="md:text-2xl text-lg">{title}</h1>
                        </Link>
                    </article>
                })}
            </div>
        </Layout>
    </>)
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
          slug,
          frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
        },
    };
}
