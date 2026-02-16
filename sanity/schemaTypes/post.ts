import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, title: 'Slug' }),
        defineField({ name: 'mainImage', type: 'image', options: { hotspot: true }, title: 'Main Image' }),
        defineField({ name: 'publishedAt', type: 'datetime', title: 'Published at' }),
        defineField({ name: 'body', type: 'array', of: [{ type: 'block' }], title: 'Body' }),
    ],
})
