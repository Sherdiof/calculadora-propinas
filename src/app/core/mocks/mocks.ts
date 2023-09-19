import { dishesRequest } from "../models/dishes.model";
import { usersRequest } from "../models/users.model";

export const dishesMock: Array<dishesRequest> = [
    {
        nombre: 'Hamburguesa Grande',
        descripcion: 'Hamburguesa con doble carne, pepinillos y papas',
        precio: 57.00,
        imagen: '../../../assets/hamburguesa-inicio.jpg'
      },
      {
        nombre: 'HotDog',
        descripcion: 'Combo de hotdog soda y papas',
        precio: 57.00,
        imagen: '../../../assets/hotdog.jpg'
      },
      {
        nombre: 'Pizza Grande',
        descripcion: 'Pizza con carne y queso extra',
        precio: 57.00,
        imagen: '../../../assets/pizza.jpg'
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