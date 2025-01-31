import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number'
        }),
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'github',
            type: 'url'
        }),
        defineField({
            name: 'linkedin',
            type: 'url'
        }),
        defineField({
            name: 'twitter',
            type: 'url'
        }),
        defineField({
            name: 'email',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'image',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'bio',
            type: 'text'
        }),
    ],
    // To be ablr to select the author and preview them
    preview: {
        select: {
            title: 'name'
        }
    },
});