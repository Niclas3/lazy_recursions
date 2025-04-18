import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(()=>({
        name: 'Post',
        filePathPattern: `**/*.mdx`,
        fields : {
                title: { type: 'string', require: true },
                date: { type: 'date', require: true},
                description : {type: 'string', required: false},
                draft: {type: 'boolean', required: false}
        },
        computedFields: {
                url: { type: 'string', resolve: (post) =>  `/blog/${post._raw.flattenedPath}` }, 
        },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post]})
