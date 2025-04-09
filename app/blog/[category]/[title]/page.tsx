import {notFound} from 'next/navigation'

import { getBlogPost} from "@/lib/load_posts"
import type {Metadata, Post } from "@/lib/load_posts"

import { CustomMDX } from '@/app/ui/CustomMDX'
import { serialize } from 'next-mdx-remote/serialize'

export default async function Post({ params }:
                                   { 
                                        params: Promise<{category:string, title: string}>
                                   })
{
        const category = (await params)?.category;
        const title = (await params)?.title;

        const post:{metadata: Metadata; content: string} | undefined = getBlogPost(decodeURIComponent(category), decodeURIComponent(title))
        

        if(!post) {
                notFound();
        }

        const text = `
        # h1
        ## h2
        ### h3
        #### h4
        ##### h5
        ###### h6
        \`let a = 10;\`

        [baidu](http://www.baidu.com)
        [baidu](/tmp/2025-02-23-[a]rts_w1_basic_algorithm)
        [baidu](#h1)

        \`\`\`c
        #include <stdio.h>
        \`\`\`

        <Capture_image src="https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg" alt="alt-test" capture="this is capture" />

        <More_info> # h1_in_More_info </More_info> 

        ![out url](https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg)
        ![this is image](/cover.jpg)

| 时间复杂度 | 平均                | 最差                |
|------------|---------------------|---------------------|
| 插入       | $\mathcal{O}(logn)$ | $\mathcal{O}(logn)$ |
| 删除       | $\mathcal{O}(logn)$ | $\mathcal{O}(logn)$ |
| 搜索       | $\mathcal{O}(logn)$ | $\mathcal{O}(logn)$ |

        `

        return (
                <>

                <h1 className="title font-semibold text-2xl tracking-tighter">
                        {post.metadata.title}
                </h1>

                <CustomMDX source={text} >

                </CustomMDX>

                </>
               );
}



