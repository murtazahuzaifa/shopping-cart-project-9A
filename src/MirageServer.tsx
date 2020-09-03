import {createServer} from 'miragejs';

const shoes = {
    newCollections: [
        {
            id: 0,
            name: "AIR MAX TORCH 4 RUNNING SHOE",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia36255.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 5400,
            quanity: 10,
        },
        {
            id: 1,
            name: "MEN'S MORSON MEDIUM/WIDE WATERPROOF MEMORY FOAM BOOT",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia90850.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 4000,
            quanity: 10,
        },
        {
            id: 2,
            name: "AIR MAX 2X SNEAKER",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia90640.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 3500,
            quanity: 10,
        },
        {
            id: 3,
            name: "WARD HIGH TOP SNEAKER",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia94780.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 2900,
            quanity: 10,
        },

    ],

    bestSelling: [
        {
            id: 4,
            name: "MEN'S CHEYENNE SLIP RESISTANT MEDIUM/WIDE WORK BOOT",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia52760.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 5900,
            quanity: 10,
        },
        {
            id: 5,
            name: "MIDTOWN CAP TOE OXFORD",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia59883.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 3600,
            quanity: 10,
        },
        {
            id: 6,
            name: "AIR MONARCH IV X-WIDE WALKING SHOE",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia50771.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 4800,
            quanity: 10,
        },
        {
            id: 7,
            name: "RILAR MEMORY FOAM MEDIUM/WIDE OXFORD",
            imgSrc: "https://www.famousfootwear.com/ProductImages/shoes_ia00872.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
            price: 6200,
            quanity: 10,
        },

    ],
}
export default function(){
    createServer({
        routes(){
            this.namespace = '/api'

            this.get('shoes/allProducts', ()=>{
                return [...shoes.newCollections, ...shoes.bestSelling]
            })
            this.get('shoes/newCollections', ()=>{
                return shoes.newCollections
            })
            this.get('shoes/bestSelling', ()=>{
                return shoes.bestSelling
            })
        }
    })
}