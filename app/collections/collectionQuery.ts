const gql = String.raw

const collectionQuery = gql`
    {
        collections(first: 5, reverse: true) {
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
