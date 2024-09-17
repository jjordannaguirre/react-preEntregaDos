const misProductos = [
    { id: "1", nombre: "Infinitta 225", stock: 10, precio: 225000, watts: 225, img: "../img/infinitta.jpg", idCat: "machine" },
    { id: "2", nombre: "Machine 420CL", stock: 12, precio: 420000, watts: 420, img: "../img/machine420cl.jpg", idCat:"machine" },
    { id: "3", nombre: "Orbiter 80", stock: 5, precio: 80000, watts: 80, img: "../img/orbiter80.jpeg", idCat:"orbiter" }, 
    { id: "4", nombre: "Orbiter 120", stock: 5, precio: 120000, watts: 120, img: "../img/orbiter120.jpg", idCat:"orbiter" }, 
    { id: "5", nombre: "Sunflash 153E", stock: 7, precio: 153000, watts: 153, img: "../img/sunflash153e.jpg", idCat:"sunflash" },
    { id: "6", nombre: "Sunflash 659E", stock: 7, precio: 659000, watts: 659, img: "../img/sunflash659e.jpg", idCat:"sunflash" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Actividad after: Agregar el datalle del producto
//Crear una funcion similar a la anterior pero que solo nos retorne un solo item

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}