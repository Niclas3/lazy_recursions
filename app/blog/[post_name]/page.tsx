import { MDXRemote } from 'next-mdx-remote/rsc'

import {getBlogPosts} from "@/lib/load_posts"

export default async function Post_display(){

        const posts = getBlogPosts();
        const post = posts[0];
        
        // const post_dir = path.join(process.cwd(), 'posts')
        //
        // const files = fs.readdirSync(post_dir).filter((file)=> path.extname(file) === '.mdx')
        // files.map((file)=>{
        //         const raw_content = fs.readFileSync(path.join(post_dir, file));
        //         console.log(path.join(post_dir, file))
        //         // console.log(raw_content)
        // })
        // return (<main suppressHydrationWarning>
        //         <Post />
        //         </main>);

        return (
<section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        </p>
      </div>
      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </section>);
}

