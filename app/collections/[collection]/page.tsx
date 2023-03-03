import Image, { StaticImageData } from "next/image"
import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import CollectionHeading from "./components/CollectionHeading"
import { SwatchGroup, SwatchButton } from "./components/Swatch"

// import storefrontQuery, { productsQuery } from "@/lib/shopifyClient"

export default async function Collections() {
    // const data = await storefrontQuery(productsQuery("creative-minds"))
    // console.log(data)

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <CollectionHeading />
            <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                {products.map(({ title, imgSrc, colors }, i) => {
                    return (
                        <li
                            key={i}
                            className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
                        >
                            <label
                                className={cn("transition", "hover:brightness-125 active:scale-95")}
                            >
                                <figure className="relative cursor-pointer">
                                    <Image
                                        src={imgSrc}
                                        alt="temp"
                                        className={cn("bg-glass rounded-t-box")}
                                    />
                                    <h2
                                        className={cn(
                                            "absolute bottom-0 left-0",
                                            "overflow-hidden text-ellipsis whitespace-nowrap",
                                            "w-full px-2 py-1 text-xs font-bold sm:text-sm",
                                            "bg-blur-clear text-base-content/80"
                                        )}
                                    >
                                        {title}
                                    </h2>
                                </figure>
                            </label>
                            <SwatchGroup>
                                <SwatchButton />
                                <SwatchButton />
                                <SwatchButton />
                                <SwatchButton />
                            </SwatchGroup>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

type ProductData = {
    title: string
    imgSrc: StaticImageData
    colors: string
}

const products: ProductData[] = Array(8).fill({
    title: "Product Title Hello World",
    imgSrc: temp,
    colors: "[ ] [ ] [ ] [ ]",
})

const data = {
  "data": {
    "collection": {
      "id": "gid://shopify/Collection/283425407170",
      "title": "Staff Picks",
      "handle": "wordplay4lyfe-staff-picks",
      "products": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Product/7135171477698",
              "handle": "game-on-lock-tee-1",
              "title": "Game on Lock Tee",
              "description": "S M L XL 3XL Width, cm 47 52.1 57.2 62.2 72.4 Length, cm 72.4 74.9 77.5 80 85.1 Sleeve length, cm 17.8 19 20.3 21.3 24.8 This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304442392770"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304442392770"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446338754",
                      "title": "Black / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442392770"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446371522",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442392770"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446404290",
                      "title": "Black / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442392770"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446437058",
                      "title": "Black / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442392770"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446469826",
                      "title": "Black / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/game-on-lock-_black.webp?v=1675105195",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442392770"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212483043522",
                  "name": "Color",
                  "values": [
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212483076290",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135171444930",
              "handle": "no-cap-1",
              "title": "No Cap",
              "description": "S M L XL 2XL 3XL 5XL Width, cm 47 52.1 57.2 62.2 67.3 72.4 82.6 Length, cm 72.4 74.9 77.5 80 82.6 85.1 90.2 Sleeve length, cm 17.8 19 20.3 21.3 22.5 24.8 27.3 This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304435413186"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304435413186"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446142146",
                      "title": "Black / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304435413186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446174914",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304435413186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446207682",
                      "title": "Black / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304435413186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446240450",
                      "title": "Black / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304435413186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446273218",
                      "title": "Black / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304435413186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446305986",
                      "title": "Black / 5XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/no-cap-_black.webp?v=1675105009",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304435413186"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212482977986",
                  "name": "Color",
                  "values": [
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212483010754",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "3XL",
                    "5XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135171379394",
              "handle": "creativity-is-contagious-1",
              "title": "creativity is contagious",
              "description": "S M L XL 2XL 3XL Width, cm 47 52.1 57.2 62.2 67.3 72.4 Length, cm 72.4 74.9 77.5 80 82.6 85.1 Sleeve length, cm 17.8 19 20.3 21.3 22.5 24.8 This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304409034946"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304409034946"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445912770",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304409034946"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445945538",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304409034946"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445978306",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304409034946"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446011074",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304409034946"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446043842",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304409034946"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297446076610",
                      "title": "White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/creativity-is-contagious-_white.webp?v=1675104650",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304409034946"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212482814146",
                  "name": "Color",
                  "values": [
                    "White"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212482846914",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135171346626",
              "handle": "wordplay-heartbeat-tee-1",
              "title": "Wordplay Heartbeat Tee",
              "description": "S M L XL 2XL 3XL 4XL 5XL Width, cm 47 52.1 57.2 62.2 67.3 72.4 77.5 82.6 Length, cm 72.4 74.9 77.5 80 82.6 85.1 87.6 90.2 Sleeve length, cm 17.8 19 20.3 21.3 22.5 24.8 26 27.3 This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304484565186"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304484565186"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445650626",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445683394",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445716162",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445748930",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445781698",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445814466",
                      "title": "White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445847234",
                      "title": "White / 4XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445880002",
                      "title": "White / 5XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/wordplay-heartbeat-_white.webp?v=1675105274",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304484565186"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212482748610",
                  "name": "Color",
                  "values": [
                    "White"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212482781378",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL",
                    "4XL",
                    "5XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135171313858",
              "handle": "power-in-numbers-tee-1",
              "title": "Power in Numbers Tee",
              "description": "S M L XL 2XL 3XL 4XL 5XL Width, cm 47 52.1 57.2 62.2 67.3 72.4 77.5 82.6 Length, cm 72.4 74.9 77.5 80 82.6 85.1 87.6 90.2 Sleeve length, cm 17.8 19 20.3 21.3 22.5 24.8 26 27.3 This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304438264002"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304438264002"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445388482",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445421250",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445454018",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445486786",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445519554",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445552322",
                      "title": "White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445585090",
                      "title": "White / 4XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297445617858",
                      "title": "White / 5XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/power-in-numbers-_white.webp?v=1675105086",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304438264002"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212482683074",
                  "name": "Color",
                  "values": [
                    "White"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212482715842",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL",
                    "4XL",
                    "5XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135171117250",
              "handle": "womens-softstyle-tee",
              "title": "Barz (Softstyle)",
              "description": "This lightweight shirt has a fitted and narrow cut that will highlight feminine curves. Durable print allows one to stand out in every occasion. .: Junior fit.: 100% Soft cotton (fibre content may vary for different colors).: Light fabric (4.5 oz/yd² (153 g/m²)).: Tear away label.: Runs true to size",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "18.46"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36303790276802"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36303790276802"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443881154",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36303790276802"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443913922",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36303790276802"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443946690",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36303790276802"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443979458",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36303790276802"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297444012226",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/barz-_white.webp?v=1675099153",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36303790276802"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212482289858",
                  "name": "Color",
                  "values": [
                    "White"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212482322626",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135171084482",
              "handle": "keep-the-music-playing-1",
              "title": "Keep The Music Playing",
              "description": "S M L XL 2XL 3XL Width, in 19.02 20.52 22.01 24.02 26.03 28 Length, in 28 29.02 30 31.03 32.01 33 Sleeve length, in 7.49 7.88 8.27 8.67 9.06 9.45 Comfortable and light, this premium fitted short sleeve is a classic choice. High quality print adds a statement to one's workout or everyday routine. .: Premium fit .: 100% Soft cotton (fiber content may vary for different colors) .: Light fabric (4.3 oz/yd² (146 g/m²)) .: Tear away label .: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304425124034"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304425124034"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443684546",
                      "title": "Solid White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304425124034"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443717314",
                      "title": "Solid White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304425124034"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443750082",
                      "title": "Solid White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304425124034"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443782850",
                      "title": "Solid White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304425124034"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443815618",
                      "title": "Solid White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304425124034"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297443848386",
                      "title": "Solid White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/keep-the-music-playing-_white.webp?v=1675104808",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304425124034"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212482224322",
                  "name": "Color",
                  "values": [
                    "Solid White"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212482257090",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170953410",
              "handle": "unisex-heavy-cotton-tee-2",
              "title": "Make Excellence A Habit",
              "description": "S M L XL 2XL 3XL 4XL 5XL Width, in 18 20 21.97 23.98 25.99 28 30.04 31.97 Length, in 28.51 29.49 30.52 31.5 32.52 33.51 34.49 35.52 Sleeve length, in 7.25 7.76 8.23 8.75 9.26 9.77 10.24 10.75 This heavy cotton tee has the classic cotton look and feel. Casual elegance will make it an instant favorite in everyone's wardrobe. .: Classic fit .: 100% Cotton (fibre content may vary for different colors) .: Light fabric (5.3 oz/yd² (180 g/m²)) .: Tear away label .: Runs true to size",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "13.33"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304442851522"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304442851522"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442308290",
                      "title": "Black / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442341058",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442373826",
                      "title": "Black / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442406594",
                      "title": "Black / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442439362",
                      "title": "Black / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442472130",
                      "title": "Black / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442504898",
                      "title": "Black / 4XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297442537666",
                      "title": "Black / 5XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/excellence-_black_74903ebe-a6ea-4b1d-a48e-34d2f84a33cc.webp?v=1675105205",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304442851522"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212481994946",
                  "name": "Color",
                  "values": [
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212482027714",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL",
                    "4XL",
                    "5XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170560194",
              "handle": "unisex-jersey-short-sleeve-tee-1",
              "title": "Graffiti",
              "description": "This updated unisex essential fits like a well-loved favorite. Super soft cotton and excellent quality print makes one to fall in love with it over and over again..: 100% Airlume combed and ringspun cotton (fiber content may vary for different colors).: Light fabric (4.2 oz/yd² (142 g/m²)).: Retail fit.: Tear away label.: Runs true to sizeImage by [Sokol Artstudio / Shutterstock]",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "14.58"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304416538818"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304416538818"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439391938",
                      "title": "Navy / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439424706",
                      "title": "Navy / XS",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439457474",
                      "title": "Navy / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439490242",
                      "title": "Navy / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439523010",
                      "title": "Navy / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439555778",
                      "title": "Navy / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439588546",
                      "title": "Navy / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/graffiti-_steel.webp?v=1675104703",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304416538818"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212481274050",
                  "name": "Color",
                  "values": [
                    "Navy"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212481306818",
                  "name": "Size",
                  "values": [
                    "L",
                    "XS",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170461890",
              "handle": "unisex-jersey-short-sleeve-tee",
              "title": "Basquiat-esque",
              "description": "This updated unisex essential fits like a well-loved favorite. Super soft cotton and excellent quality print makes one to fall in love with it over and over again. .: 100% Airlume combed and ringspun cotton (fiber content may vary for different colors).: Light fabric (4.2 oz/yd² (142 g/m²)).: Retail fit.: Tear away label.: Runs true to size Image by [Matisson_ART / Shutterstock]",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "14.58"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304358965442"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304358965442"
                    }
                  },
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_white.webp?v=1675104442",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304358998210"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438769346",
                      "title": "True Royal / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438802114",
                      "title": "True Royal / XS",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438834882",
                      "title": "White / XS",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438867650",
                      "title": "True Royal / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438900418",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438933186",
                      "title": "True Royal / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438965954",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438998722",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439031490",
                      "title": "True Royal / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439064258",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439097026",
                      "title": "True Royal / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439129794",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439162562",
                      "title": "True Royal / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297439195330",
                      "title": "White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/basquiat-esque-_lightBlue.webp?v=1675104442",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304358965442"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212481110210",
                  "name": "Color",
                  "values": [
                    "True Royal",
                    "White"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212481142978",
                  "name": "Size",
                  "values": [
                    "L",
                    "XS",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170429122",
              "handle": "mens-short-sleeve-tee-1",
              "title": "MLK DREAMERS",
              "description": "This comfortable unisex short sleeve offers men a mid-weight piece of clothing for all casual occasions. With an attention-grabbing print, it will be an instant favorite..: 100% preshrunk cotton.: Light fabric (5.2 oz /yd² (176 g/m²)).: Relaxed fit.: Tear away label.: Runs true to sizeImage by [Tharun 15 / Shutterstock]",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "15.61"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304443474114"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304443474114"
                    }
                  },
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_white.webp?v=1675105218",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304443506882"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438507202",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438539970",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438572738",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438605506",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438638274",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438671042",
                      "title": "Black / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438703810",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438736578",
                      "title": "White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/mlk-dreamers-_black.webp?v=1675105218",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304443474114"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212481044674",
                  "name": "Color",
                  "values": [
                    "White",
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212481077442",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "2XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170396354",
              "handle": "faces-of-change-tee-1",
              "title": "Faces of Change Tee",
              "description": "S M L XL 2XL 3XL Width, in 18 20 22.01 23.98 25.99 28 Length, in 28 28.98 30 30.99 32.01 33 Sleeve length, in 7.8 8.04 8.27 8.51 8.75 8.98 This comfortable unisex short sleeve offers men a mid-weight piece of clothing for all casual occasions. With an attention-grabbing print, it will be an instant favorite. .: 100% preshrunk cotton.: Light fabric (5.2 oz /yd² (176 g/m²)).: Relaxed fit.: Tear away label.: Runs true to size Image by [Lightspring / Shutterstock]",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304441868482"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304441868482"
                    }
                  },
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_white.webp?v=1675105181",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304441835714"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438245058",
                      "title": "White / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438277826",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438310594",
                      "title": "White / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438343362",
                      "title": "White / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438376130",
                      "title": "White / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438408898",
                      "title": "Black / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438441666",
                      "title": "White / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297438474434",
                      "title": "White / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/faces-of-change-_black.webp?v=1675105181",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304441868482"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212480979138",
                  "name": "Color",
                  "values": [
                    "White",
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212481011906",
                  "name": "Size",
                  "values": [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2XL",
                    "3XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170265282",
              "handle": "tv-pop-culture-tee-1",
              "title": "TV Pop Culture Tee",
              "description": "S M L XL 2XL 3XL 5XL Width, cm 47 52.1 57.2 62.2 67.3 72.4 82.6 Length, cm 72.4 74.9 77.5 80 82.6 85.1 90.2 Sleeve length, cm 17.8 19 20.3 21.3 22.5 24.8 27.3 This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304440099010"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304440099010"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437524162",
                      "title": "Black / L",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304440099010"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437556930",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304440099010"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437589698",
                      "title": "Black / M",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304440099010"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437622466",
                      "title": "Black / XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304440099010"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437655234",
                      "title": "Black / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304440099010"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437688002",
                      "title": "Black / 5XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/just-one-more-_black.webp?v=1675105159",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304440099010"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212480749762",
                  "name": "Color",
                  "values": [
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212480782530",
                  "name": "Size",
                  "values": [
                    "L",
                    "S",
                    "M",
                    "XL",
                    "3XL",
                    "5XL"
                  ]
                }
              ]
            }
          },
          {
            "node": {
              "id": "gid://shopify/Product/7135170199746",
              "handle": "tacos-vs-relationships-tee-1",
              "title": "Tacos vs Relationships Tee",
              "description": "This ultra cotton tee has the classic cotton look and feel. Excellent quality print adds statement to casually elegant appearance. .: Classic fit.: 100% Cotton (fibre content may vary for different colors).: Light fabric (6.0 oz/yd² (203 g/m²)).: Sewn in label.: Runs bigger than usual",
              "priceRange": {
                "minVariantPrice": {
                  "amount": "25.0"
                }
              },
              "featuredImage": {
                "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/tacos-_black.webp?v=1675105121",
                "altText": null,
                "width": 1024,
                "height": 1024,
                "id": "gid://shopify/ProductImage/36304439279810"
              },
              "images": {
                "edges": [
                  {
                    "node": {
                      "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/tacos-_black.webp?v=1675105121",
                      "altText": null,
                      "width": 1024,
                      "height": 1024,
                      "id": "gid://shopify/ProductImage/36304439279810"
                    }
                  }
                ]
              },
              "variants": {
                "edges": [
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437262018",
                      "title": "Black / S",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/tacos-_black.webp?v=1675105121",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304439279810"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437294786",
                      "title": "Black / 2XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/tacos-_black.webp?v=1675105121",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304439279810"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437327554",
                      "title": "Black / 3XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/tacos-_black.webp?v=1675105121",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304439279810"
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "gid://shopify/ProductVariant/41297437360322",
                      "title": "Black / 4XL",
                      "metafield": null,
                      "image": {
                        "url": "https://cdn.shopify.com/s/files/1/0595/5285/8306/products/tacos-_black.webp?v=1675105121",
                        "altText": null,
                        "width": 1024,
                        "height": 1024,
                        "id": "gid://shopify/ProductImage/36304439279810"
                      }
                    }
                  }
                ]
              },
              "options": [
                {
                  "id": "gid://shopify/ProductOption/9212480618690",
                  "name": "Color",
                  "values": [
                    "Black"
                  ]
                },
                {
                  "id": "gid://shopify/ProductOption/9212480651458",
                  "name": "Size",
                  "values": [
                    "S",
                    "2XL",
                    "3XL",
                    "4XL"
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  }
}
