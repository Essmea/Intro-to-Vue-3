const app = Vue.createApp ({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'This is our product description',
            image: './assets/images/socks_green.jpg',
            url:'https://github.com/Essmea/Intro-to-Vue-3',
            inventory: 11,
            onSale: true,
            details: ['50% cotton', '30% wool', '20%% polyester'],
            variants: [
                {id: 2234, color:'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color:'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: [
                {id:1, size:"S"},
                {id:2, size:"M"},
                {id:3, size:"L"}
            ],
            inStock:false
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if (this.cart > 0){ 
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
