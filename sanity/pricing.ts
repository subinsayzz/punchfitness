import { defineField, defineType } from 'sanity'

export const pricing = defineType({
    name: 'pricing',
    title: 'Pricing Plan',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Plan Title',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'period',
            title: 'Billing Period (e.g. /month)',
            type: 'string',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'highlight',
            title: 'Highlight as Popular',
            type: 'boolean',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
        }),
    ],
})
