// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure = (S) =>
//   S.list()
//     .title('Content')
//     .items([
//       S.documentTypeListItems('post').title('Post') //here
//     ])


export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems(['author,post']), // Use spread operator and pass array
      // ...S.documentTypeListItems(['author']) // Use spread operator and pass array
    ])