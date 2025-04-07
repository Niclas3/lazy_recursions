import fs from 'fs'
import path from 'path'


export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  layout: string
  date: string
  // categories: Array<string>
  // tags:Array<string>
  categories: string
  tags: string
  image?: string
}

export type Post = {
      metadata :Metadata
      slug : string
      content : {}
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir:string) {
  return fs.readdirSync(dir).filter((file) => (path.extname(file) === '.mdx'))
}

function readMDXFile(filePath:string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir:string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'posts'))
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export function getBlogPostsName(){
        const posts_dir = path.join(process.cwd(), 'posts')
        return fs.readdirSync(posts_dir)
                 .filter((name)=>{
                         return path.extname(name) === '.mdx'
                 })
                 .map((post, index)=>{
                         const name = path.basename(post, '.mdx')
                         const link = '/blog/' + path.basename(post, '.mdx')
                         return {
                                 title : name,
                                 description: "just for test",
                                 link : link,
                                 uid : index
                         }
                 })
}

export function getBlogPostsMeta(){
        const posts_dir = path.join(process.cwd(), 'posts')
        return fs.readdirSync(posts_dir)
                 .filter((name)=>{
                         return path.extname(name) === '.mdx'
                 })
                 .map((post)=>{
                         const post_path = path.join(posts_dir, post)
                        let { metadata, content } = readMDXFile(post_path)

                        let slug = '/blog/'+path.basename(post, path.extname(post))

                        return {
                                metadata,
                                slug,
                                content,
                        }
                 })
                 .map((post, index)=>{
                         return {
                                 title : post.metadata.title,
                                 description: post.metadata.summary??"",
                                 link : post.slug,
                                 uid : index
                         }
                 })
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
