import {defineField, defineType} from 'sanity'

export const pricing = defineType({
  name: 'pricing',
  title: 'Pricing Tiers',
  type: 'document',
  fields: [
    defineField({name: 'tierName', type: 'string', title: 'Tier Name'}),
    defineField({name: 'currentPrice', type: 'number', title: 'Current Price'}),
    defineField({name: 'standardPrice', type: 'number', title: 'Standard Price (for strikethrough)'}),
    defineField({name: 'billingPeriod', type: 'string', title: 'Billing Period (e.g. Weekly)'}),
    defineField({name: 'features', type: 'array', of: [{type: 'string'}], title: 'Features'}),
    defineField({name: 'isPromo', type: 'boolean', title: 'Is Promotional Offer?'}),
  ],
})
