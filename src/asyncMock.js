export const products = [
    {
        id: "1",
        name: "Logitech G203 (White version)",
        price: "13,99",
        category: "Gaming Mouse",
        img: "https://dcdn.mitiendanube.com/stores/002/234/819/products/logitech-g203-lightsync-white-21-d2e8320a6d1544272216559061859655-1024-1024.png",
        stock: "25",
        description: "Logitech G203 lighstync 16000DPI Mouse."
    },
    {
        id: "2",
        name: "Razer Huntsman (Black version)",
        price: "109,99",
        category: "Gaming Keyboards",
        img: "https://front.dev.malditohard.com.ar/img/migration/TECLADO-GAMER-RAZER-HUNTSMAN-ELITE-SPANISH.webp",
        stock: "29",
        description: "Razer Huntsman Opto-Mechanical Keyboard."
    },
    {
        id: "3",
        name: "Razer Kraken (Black version)",
        price: "47,99",
        category: "Gaming Headsets",
        img: "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-6009150.jpg",
        stock: "21",
        description: "Razer kraken high inmersive quality Headset."
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 500)
    })
}