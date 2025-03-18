const app = Vue.createApp ({
    data() {
        return {
            product: 'Socks',
            description: 'This is our product description',
            image: './assets/images/socks_green.jpg',
            url:'https://github.com/Essmea/Intro-to-Vue-3',
            inventory: 11,
            onSale: true,
            details: ['50% cotton', '30% wool', '20%% polyester'],
            variants: [
                {id: 2234, color:'Green'},
                {id: 2235, color:'Blue'}
            ],
            sizes: [
                {id:1, size:"S"},
                {id:2, size:"M"},
                {id:3, size:"L"}
            ]
        }
    }
})
