import {notFound} from 'next/navigation'


import { CustomMDX } from '@/app/ui/CustomMDX'

import { allPosts, Post } from 'contentlayer/generated'
import path from 'path'

export async function generateStaticParams() {
  const posts = allPosts
 
  return posts.map((post) => {
        return {
                slug: post.url.split('/'),
        }
  })
}

export default async function Post_page({ params }:
                                   { 
                                        params: Promise<{slug: string[]}>
                                   })
{
        const { slug } = await params
        const title = decodeURIComponent(slug[1])

        const post:Post|undefined = allPosts.find((post: Post)=>{
                return path.basename(post._raw.sourceFileName, path.extname(post._raw.sourceFileName) ) === title
        })

        if(!post) {
                notFound();
        }

        return (
                <>
                <h1 className="title font-semibold text-2xl tracking-tighter">
                        {post.title ?? "No name"}
                </h1>

                <CustomMDX source={post.body.raw} >

                </CustomMDX>

                </>
               );
}



