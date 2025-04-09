import {notFound} from 'next/navigation'


import { CustomMDX } from '@/app/ui/CustomMDX'

import { allPosts, Post } from 'contentlayer/generated'
import path from 'path'

export default async function Post_page({ params }:
                                   { 
                                        params: Promise<{category:string, title: string}>
                                   })
{
        const category = decodeURIComponent( (await params)?.category);
        const title = decodeURIComponent((await params)?.title);

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



