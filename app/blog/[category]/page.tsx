import { MDXRemote } from 'next-mdx-remote/rsc'
import {notFound} from 'next/navigation'

import { getBlogPost} from "@/lib/load_posts"
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
                                        params: Promise<{category:string, title:string}>
                                   })
{

        const post = null
        if(!post){
                notFound();
        }

        return (
                <>
                </>
               );
}

