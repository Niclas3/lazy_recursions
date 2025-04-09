import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

import  More_info   from "@/app/ui/More_info"
import  MermaidDiagram  from "@/app/ui/MermaidDiagram"

// For Latex
import rehypeHighlight from 'rehype-highlight'
import rehypeMathjax from 'rehype-mathjax'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// For table elements suppport 
// more info to see https://mdxjs.com/guides/gfm/
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'

// For <pre></pre> formatting

const options = {
        mdxOptions: {
                remarkPlugins: [remarkMath, remarkGfm],
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
const caption = "caption"
  return <div>
          <img src={src} alt={alt} className="rounded-xl" />
          <p className="text-center">{caption}</p>
        </div>
}

function InlineCode ({ children, className = 'bg-gray-200 rounded-sm px-1 font-mono text-sm' }:any) {
  return <code className={` ${className}`}>{children}</code>;
};


function MutilineCode({ children, className = 'bg-gray-200 rounded-sm px-1 font-mono text-sm' }:any){
        return <div> { children } </div>
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
        let slug = slugify(children)
        const headingClassName = `font-semibold tracking-tighter ${className}`
        const textSizeClass = `text-${3 - validLevel+ 3}xl`;
        const Tag = `h${validLevel}`

        switch (validLevel) {
                case 1:
                        return <h1 className={`text-3xl ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h1>;
                case 2:
                        return <h2 className={`text-2xl ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h2>;
                case 3:
                        return <h3 className={`text-xl ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h3>;
                case 4:
                        return <h4 className={`text-lg ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h4>;
                case 5:
                        return <h5 className={`text-base ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h5>;
                case 6:
                        return <h6 className={`text-sm ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h6>;
                default:
                        return <h1 className={`text-3xl ${headingClassName}`} ><a href={`#${slug}`} className="anchor">{children}</a></h1>;
    }
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
  code: InlineCode,
  pre: MutilineCode,
  // table : Table,
}

const ext_components = { More_info, MermaidDiagram }

export function CustomMDX(props:any) {
  return (
    <MDXRemote
      {...props}
      components={{...components , ...ext_components }}
      options={options}
    />
  )
}

