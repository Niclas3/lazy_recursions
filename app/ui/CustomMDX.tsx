import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

import React from 'react'

import { CodeHighlight } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'

import More_info   from "@/app/ui/More_info"
import MermaidDiagram  from "@/app/ui/MermaidDiagram"
import Capture_image  from "@/app/ui/Capture_image"
import Expanded_info from "@/app/ui/Expanded_info"

// For Latex
import rehypeHighlight from 'rehype-highlight'
import rehypeMathjax from 'rehype-mathjax'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// For YAML or TOML frontmatter
import remarkFrontmatter from 'remark-frontmatter' 

import remarkToc from 'remark-toc'

// For highlight
import 'highlight.js/styles/androidstudio.min.css'

// For table elements suppport 
// more info to see https://mdxjs.com/guides/gfm/
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'


import { Code, Title, Image } from '@mantine/core'
import type { TitleOrder } from '@mantine/core'


const options = {
        mdxOptions: {
                remarkPlugins: [remarkMath, remarkGfm, remarkFrontmatter, remarkToc],
                rehypePlugins: [rehypeKatex, rehypeHighlight, rehypeMathjax]
        }

}

function Table({children}:any) {
        return children
}

function CustomLink(props:any) {
  let href = props.href

  const defaultClassName="text-blue-600 hover:underline"

  if (href.startsWith('/')) {
          const base = `/blog${href}`
    return (
      <Link href={{
              pathname: base,
      }} className={`${defaultClassName }`}>
        {props.children}
      </Link>
    )
  }else if (href.startsWith('#')) {
    return <Link href={props.href} 
                 className={`${defaultClassName } `} {...props}>
        {props.children}
      </Link>
  } else {
    return <Link href={props.href}
                 className={`${defaultClassName }`} {...props}
                 rel = "noopener noreferrer">
        {props.children}
      </Link>
  }
}

function RoundedImage(props:any) {
        const src = props.src
        const alt = props.alt
        return (
                <Image radius='md' src = {src}/>
        );
}


/* 
 * This MDX Component is for Custom MDX Component HighlightCode powered by
 *  Mantine UI. If you want hook ``` ``` or `` in .mdx files, please use 
 *  MDX plugin like "rehypeHighlight"
 */
function HighlightCode({code, lang}:{code:string, lang:string}) {
        return <CodeHighlight code={code} language={lang}
                              copyLabel="Copy button code"
                              copiedLabel="Copied!"/>
}


function slugify(str:any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level:number) {
  const Heading = ({ children, className }:any) => {
        const validLevel = Math.max(1, Math.min(6, level));
        // let slug = slugify(children)
        // const headingClassName = `font-semibold tracking-tighter ${className}`

        return <Title order={ validLevel as TitleOrder }> { children } </Title>
  };

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  img: RoundedImage,
  a: CustomLink,
  // code: InlineCode,
  // pre: MutilineCode,
  // table : Table,
}

const ext_components = { More_info, 
                         MermaidDiagram, Capture_image,
                         Expanded_info,
                         HighlightCode }

export function CustomMDX(props:any) {
  return (
    <MDXRemote
      {...props}
      components={{...components , ...ext_components }}
      options={options}
    />
  )
}

