import {PROJECTS} from './data'

import { allPosts } from 'contentlayer/generated'

import Home_page from '@/app/home_page'

export default async function Personal() {
   const posts = allPosts

   posts.forEach((post)=>{
           console.log(post.url)
   })
   // Some weird here this variable `meta` suppose to be a Array<BlogPost> but
   // shows an object.
   return (<Home_page blog_posts = {posts} projects={PROJECTS} /> )
}

