import { dishesRequest } from "../models/dishes.model";
import { dishesCategoryRequest } from "../models/dishesCategory.model";
import { usersRequest } from "../models/users.model";

export const dishesMock: Array<dishesRequest> = [
    {
        id:1,
        nombre: 'Hamburguesa Grande',
        descripcion: 'Hamburguesa con doble carne, pepinillos y papas..',
        precio: 45.00,
        imagen: '../../../assets/hamburguesa-inicio.jpg'
      },
      {
        id:2,
        nombre: 'Hot-Dog',
        descripcion: 'Combo de hotdog soda y papas',
        precio: 20.00,
        imagen: '../../../assets/hotdog.jpg'
      },
      {
        id:3,
        nombre: 'Pizza Grande',
        descripcion: 'Pizza con carne y queso extra.',
        precio: 100.00,
        imagen: '../../../assets/pizza.jpg'
      },
      {
        id:4,
        nombre: 'Pollo asado',
        descripcion: 'Pollo entero para 5 personas',
        precio: 45.00,
        imagen: '../../../assets/pollo.jpg'
      },
      {
        id:5,
        nombre: 'Carne Asada',
        descripcion: 'Platillo de carne importada',
        precio: 80.00,
        imagen: '../../../assets/carne.jpg'
      },
      {
        id:6,
        nombre: 'Filete',
        descripcion: 'Filete de pescado asado',
        precio: 100.00,
        imagen: '../../../assets/filete.jpg'
      },
]

export const bebidasMock: Array<dishesRequest> = [
  {
      id:7,
      nombre: 'Coca Cola en lata',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      precio: 10.00,
      imagen: '../../../assets/coca.jpg'
    },
    {
      id:8,
      nombre: 'Pepsi',
      descripcion: 'Litro y medio desechable',
      precio: 10.00,
      imagen: '../../../assets/pepsi.jpg'
    },
    {
      id:9,
      nombre: 'Mirinda',
      descripcion: 'Pichell refill',
      precio: 10.00,
      imagen: '../../../assets/mirinda.jpg'
    },
]


export const entradasMock: Array<dishesRequest> = [
  {
      id:10,
      nombre: 'Nachos con queso',
      descripcion: 'Porción gigante de nachos para 6 personas.',
      precio: 10.00,
      imagen: '../../../assets/nachos.jpg'
    },
    {
      id:11,
      nombre: 'Tomate fettucchinni',
      descripcion: 'Tomate con relleno de arroz',
      precio: 20.00,
      imagen: '../../../assets/tomate.jpg'
    },
    {
      id:12,
      nombre: 'Aros de cebolla',
      descripcion: '10 aros de cebolla para compartir con la familia',
      precio: 100.00,
      imagen: '../../../assets/aros.jpg'
    },
]


export const postresMock: Array<dishesRequest> = [
  {
      id:13,
      nombre: 'Helado 3 bolas',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      precio: 10.00,
      imagen: '../../../assets/helado.jpg'
    },
    {
      id:14,
      nombre: 'Ensalada',
      descripcion: 'Ensalada de pepino',
      precio: 20.00,
      imagen: '../../../assets/ensalada.jpg'
    },
    {
      id:15,
      nombre: 'Pastel de aranadanos',
      descripcion: 'Pastel frio 3 leches',
      precio: 100.00,
      imagen: '../../../assets/pastel.jpg'
    },
]

export const dishesCategoriesMock: Array<dishesCategoryRequest> =[
  {
    id:1,
    nombre: 'Entradas',
    descripcion: 'Empieza bien tu día con una entrada expectacular',
    imagen: '../../../assets/entradas.jpg'
  },
  {
    id:2,
    nombre: 'Platos Fuertes',
    descripcion: 'Prueba nuestros mejores platillos importados',
    imagen: '../../../assets/hamburguesa-inicio.jpg'
  },
  {
    id:3,
    nombre: 'Postres',
    descripcion: 'Termina bien tu día con un postre expectacular',
    imagen:'../../../assets/postres.jpg'
  },
  {
    id:4,
    nombre: 'Bebidas',
    descripcion: 'Acompaña tus comidas con la bebida de tu gusto',
    imagen: '../../../assets/bebidas.jpeg'
  },
]

export const usersMock: Array<usersRequest> = [
{
  id: 1,
  usuario: 'isalazar',
  contraseña: '123',
  rol: 1
},
{
  id: 1,
  usuario: 'userInvited',
  contraseña: 'invitado1',
  rol: 2
},
{
  id: 1,
  usuario: 'administrator',
  contraseña: 'admin',
  rol: 1
},

]