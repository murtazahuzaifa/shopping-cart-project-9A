export type ShoeType = {
    id: number,
    name: string,
    imgSrc: string,
    price: number,
    quanity: number,
}

export type ShoeProductSliceType = {
    newCollections?: ShoeType[],
    bestSelling?: ShoeType[],
    allProducts?: ShoeType[],
}
