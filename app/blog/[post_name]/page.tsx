import { MDXRemote } from 'next-mdx-remote/rsc'
import {notFound} from 'next/navigation'

import {getBlogPosts} from "@/lib/load_posts"
import type {Metadata,Post } from "@/lib/load_posts"

// for Latex
import rehypeHighlight from 'rehype-highlight'
import rehypeMathjax from 'rehype-mathjax'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import 'katex/dist/katex.min.css'


const options = {
        mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex, rehypeHighlight, rehypeMathjax]
        }

}

export default async function Post({ params }:{params: Promise<{post_name: string}> }){
        
        const post_name = (await params)?.post_name;
        const post:Post | undefined = getBlogPosts()
                         .find((post)=> {
                                const postname = decodeURIComponent(post_name)
                                return (post.slug === postname)
                         });
        if(!post){
                notFound();
        }

        return (
                <>
                <h1 className="title font-semibold text-2xl tracking-tighter">
                        {post.metadata.title}
                </h1>

                <MDXRemote source={post.content} options={options} />
                </>
               );
}

