import type {
        BlogPost,
} from './data'
import {PROJECTS} from './data'

import Home_page from '@/app/home_page'
import { getBlogPostsMeta } from "@/lib/load_posts"

export default async function Personal() {
   const meta = getBlogPostsMeta()
   // Some weird here this variable `meta` suppose to be a Array<BlogPost> but
   // shows an object.
   return (
          <Home_page blog_posts = {meta} projects={PROJECTS} >
          </Home_page>)
}
