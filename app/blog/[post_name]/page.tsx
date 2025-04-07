import { MDXRemote } from 'next-mdx-remote/rsc'
import {notFound} from 'next/navigation'

import {getBlogPosts} from "@/lib/load_posts"
import type {Metadata, Post } from "@/lib/load_posts"

import  More_info   from "@/app/ui/More_info"
import  MermaidDiagram  from "@/app/ui/MermaidDiagram"

const components = { More_info, MermaidDiagram }

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

export default async function Post({ params }:
                                   { 
                                        params: Promise<{post_name:string}>
                                   })
{
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

                <MDXRemote source={post.content} options={options} components ={components}/>
                </>
               );
}

// export async function generateStaticParams({ params }:{params: Promise<{post_name: string}> }){
export async function generateStaticParams(){
        return [{ post_name : "2025-02-23-[a]rts_w1_basic_algorithm.mdx"},
        { post_name : "2025-03-10-[a]rts_w4_data_structions3.mdx"},
        { post_name : "2025-03-29-try_use_mdxjs.mdx"},
        { post_name : "test.md"}]
}

// export default async function Post({ params }:{params: Promise<{post_name: string}> }){
//         const post_name = (await params)?.post_name;
//         const postname = decodeURIComponent(post_name)
//         console.log(postname)
//
//         const  { default: Artical} = await import(`@/posts/${postname}.mdx`)
//
//         console.log(Artical);
//         return (
//                 <>
//                 <Artical/>
//                 </>
//                );
// }
