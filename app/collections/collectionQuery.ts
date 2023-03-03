const gql = String.raw

const collectionQuery = gql`
    {
        collections(
            first: 9
            after: "eyJsYXN0X2lkIjoyODEwMjc4NzA5MTQsImxhc3RfdmFsdWUiOjI4MTAyNzg3MDkxNH0"
        ) {
            edges {
                node {
                    id
                    handle
                    title
                    descriptionHtml
                    image {
                        url
                        altText
                        width
                        height
                    }
                }
            }
        }
    }
`

export default collectionQuery
