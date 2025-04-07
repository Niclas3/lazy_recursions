import {
  PROJECTS,
} from './data'

import Home_page from '@/app/home_page'
import { getBlogPostsMeta } from "@/lib/load_posts"

export default async function Personal() {
   const meta = getBlogPostsMeta()
   return (
          <Home_page blog_posts = {meta} projects={PROJECTS} >
          </Home_page>)
}
