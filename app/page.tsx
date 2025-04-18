import {PROJECTS} from './data'

import { allPosts, Post } from 'contentlayer/generated'

import Home_page from '@/app/home_page'

export default async function Personal() {

   const posts = allPosts.filter((value: Post)=> !value.draft)
                         .sort((a:Post, b:Post)=>{
                                const a_date = a?.date;
                                const b_date = b?.date;
                                if(a_date && b_date){
                                        const ta = new Date(a_date)
                                        const tb = new Date(b_date)
                                        return ta > tb ? -1 : 1
                                } else {
                                        return 0
                        }})

   // Some weird here this variable `meta` suppose to be a Array<BlogPost> but
   // shows an object.
   return (<Home_page blog_posts = {posts} projects={PROJECTS} /> )
}

