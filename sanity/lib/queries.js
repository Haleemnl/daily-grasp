import { defineQuery } from "next-sanity";


export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current) && (!defined($search) || 
    title match ("*" + $search + "*") || 
    category match ("*" + $search + "*") || 
    author->name match ("*" + $search + "*")
  )] | order(date desc)  {
    _id,
    title,
    slug,
    date,
    author->{
      _id,
      name,
      image,
      bio
    },
    views,
    description,
    category,
    image
  }`
)


// export const POSTS_QUERY = defineQuery(`
//   *[_type == "post" && defined(slug.current) && (!defined($search) || 
//     title match ("*" + $search + "*") || 
//     category match ("*" + $search + "*") || 
//     author->name match ("*" + $search + "*")
//   )] | order(date desc) [$start...$end] {
//     _id,
//     title,
//     slug,
//     date,
//     author->{
//       _id,
//       name,
//       image,
//       bio
//     },
//     views,
//     description,
//     category,
//     image
//   }
// `)

// export const TOTAL_POSTS_QUERY = defineQuery(`
//   count(*[_type == "post" && defined(slug.current) && (!defined($search) || 
//     title match ("*" + $search + "*") || 
//     category match ("*" + $search + "*") || 
//     author->name match ("*" + $search + "*")
//   )])
// `)


export const HOME_POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current) && (!defined($search) || 
    title match ("*" + $search + "*") || 
    category match ("*" + $search + "*") || 
    author->name match ("*" + $search + "*")
  )] | order(date desc) [0...4]{
    _id,
    title,
    date,
    author->{
      _id,
      name,
      image,
      bio
    },
    description,
    category,
    image
  }`
)

export const CATEGORY_POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current) ] | order(date desc) [0...3]{
    _id,
    title,
    date,
    author->{
      _id,
      name,
      image,
      bio
    },
    description,
    category,
    image
  }`
)


export const AUTHOR_QUERY = defineQuery(
  `*[_type == "author"] {
    _id,
    name,
    username,
    email,
    image,
    bio,
    "posts": *[_type == "post" && author._ref == ^._id] | order(date desc) {
      _id,
      title,
      slug,
      date,
      views,
      description,
      category,
      image
    }
  }`
)


// shows details about a specific post
export const POST_BY_ID_QUERY = defineQuery(
  `*[_type == "post" && _id == $id][0]{
_id, 
title, 
slug,
date, 
author ->{
_id, name,image,bio
},
views, 
description, 
category,
image,
body    
}`
)


// shows details about a specific author and author posts
export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == "author" && _id == $id][0]{
   _id,
    name,
    twitter,
    github,
    linkedin,
    email,
    image,
    bio,
    "posts": *[_type == "post" && author._ref == ^._id] | order(date desc) {
      _id,
      title,
      slug,
      date,
      views,
      description,
      category,
      image
    }
}`
)



export const POST_BY_ENTERTAINMENT_QUERY = defineQuery(
  `*[_type == "post" && category == "Entertainment"] | order(date desc) [0...10]{
_id, 
title, 
slug,
date, 
author ->{
_id, name,image,bio
},
views, 
description, 
category,
image,    
}`
)

export const POST_BY_SPORTS_QUERY = defineQuery(
  `*[_type == "post" && category == "Sport"] | order(date desc) [0...10]{
_id, 
title, 
slug,
date, 
author ->{
_id, name,image,bio
},
views, 
description, 
category,
image,    
}`
)


export const POST_BY_TECHNOLOGY_QUERY = defineQuery(
  `*[_type == "post" && category == "Tech"] | order(date desc) [0...10]{
_id, 
title, 
slug,
date, 
author ->{
_id, name,image,bio
},
views, 
description, 
category,
image,    
}`
)


export const POST_BY_FINANCE_QUERY = defineQuery(
  `*[_type == "post" && category == "Finance"] | order(date desc) [0...10]{
_id, 
title, 
slug,
date, 
author ->{
_id, name,image,bio
},
views, 
description, 
category,
image,    
}`
)


export const POST_BY_DESIGNS_QUERY = defineQuery(
  `*[_type == "post" && category == "Design"] | order(date desc) [0...10]{
_id, 
title, 
slug,
date, 
author ->{
_id, name,image,bio
},
views, 
description, 
category,
image,    
}`
)

export const POST_BY_FEATURED_QUERY = defineQuery(
  `*[_type == "post" && category == "Featured"] | order(date desc) [0...1]{
_id, 
title, 
date, 
author ->{
_id, name,image,bio
},
description, 
category,
image,    
}`
)



export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  select[]->{
    _id,
    date,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);