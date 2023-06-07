export interface Product {
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
}