import Head from 'next/head'
import Image from 'next/image'
import Example from './example'
import Link from 'next/link'
import Breadcrumbs from 'nextjs-breadcrumbs'
import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../components/Layout'
import Rating from '@mui/material/Rating'


export default function Projects({posts}) {
    return (<>        
        <Head>
            <title>dangush/projects</title>
        </Head>
        <Layout title="blog" width="10/12">
            <div className="md:m-10 m-5 pb-6 border-b-2 border-amber-400 md:text-base text-sm">
                <h1 className="text-xl font-semisbold">Projects</h1>
                <p className="mt-2">Some of my work</p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full h-full ">
                {posts.filter((post) => {
                    const {slug} = post
                    if (slug === "template") {
                        return false;
                    }
                    return true;
                }).map(post => {
                    //extract slug and frontmatter
                    const {slug, frontmatter} = post
                    //extract frontmatter properties
                    const {title, blurb, bannerImage, tags, rating} = frontmatter
                    
                    //JSX for individual blog listing
                    return (
                        <Link href={`/projects/${slug}`}
                            key={title}>
                            <div className="h-48 border-2 border-black py-3 px-4 m-4 bg-white drop-shadow-xl hover:cursor-pointer hover:text-amber-400">
                                <h1 className="text-lg md:text-xl lg:text-2xl">{title}</h1>
                                <br/>
                                <div className="grid grid-cols-2 gap-0 h-3/5">
                                    <div className="w-full h-full relative">
                                        <Image
                                                src={bannerImage}
                                                alt={`Cover Image for ${title}`}
                                                layout='fill'
                                                objectFit='contain'
                                                />
                                    </div>
                                    <div className="relative flex flex-col justify-evenly items-center">
                                        <p className="w-10/12 text-center">{blurb}</p>
                                        <Rating 
                                            className=""
                                            sx={{
                                                '& .MuiRating-iconFilled': {
                                                color: 'black',
                                                },
                                                '& .MuiRating-iconEmpty': {
                                                    color: 'black',
                                                }}}
                                            size="small" value={parseFloat(rating)} defaultValue={1} precision={0.5} readOnly />
                                    </div>  
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Layout>
    </>)
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('projects');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
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
