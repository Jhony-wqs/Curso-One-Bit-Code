class Product {
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
        }
    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }

   
}

const watch = new Product('Relógio','Apple watch',1500)

watch.addToStock(93)
const priceWithDiscount = watch.calculateDiscount(50)

console.log(watch,priceWithDiscount)
