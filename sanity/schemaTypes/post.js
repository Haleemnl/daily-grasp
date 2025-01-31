import { defineField, defineType } from "sanity";

export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' }
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),

        // categories list options
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Sports', value: 'Sport' },
                    { title: 'Technology', value: 'Tech' },
                    { title: 'Finance', value: 'Finance' },
                    { title: 'Entertainment', value: 'Entertainment' },
                    { title: 'Designs', value: 'Design' },
                    { title: 'Featured', value: 'Featured' },
                ]
            }
            // validation: (Rule) => Rule.min(1).max(20).required().error('Please enter a category')
        }),
        defineField({
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [
                { type: 'block' },

                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }
                    ],
                    options: {
                        hotspot: true // Enables image cropping
                    }
                }
            ]
        })
    ],

});




































