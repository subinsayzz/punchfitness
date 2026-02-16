import { defineField, defineType } from 'sanity'

export const trainer = defineType({
    name: 'trainer',
    title: 'Trainers',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string', title: 'Name' }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'name' }, title: 'Slug' }),
        defineField({ name: 'image', type: 'image', title: 'Profile Photo', options: { hotspot: true } }),
        defineField({ name: 'bio', type: 'text', title: 'Bio' }),
        defineField({ name: 'specialties', type: 'array', of: [{ type: 'string' }], title: 'Specialties' }),
    ],
})
