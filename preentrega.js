/*
Este código sirve para hacer un logeo.

El sistema preguntará si se desea crear un usuario o loguearse. En caso de ser un usuario nuevo, lo almacenará en un array pero buscará que no
haya duplicados. En caso de loguearse, buscará que el nombre provisto y la contraseña se encuentren en los arrays correspondientes.


*/

//El código comienza con solicitar al usuario si ya tiene usuario o contraseña o no



let InicioSesion = prompt("Inicio de sesión:\n1-Tengo usuario y contraseña\n2-No tengo usuario y contraseña")
InicioSesion = parseInt(InicioSesion)

//Creo una clase de usuarios donde voy a ir almacenando los usuarios y contraseñas correspondientes
class Usuarios{

    constructor(nombre,password) {
        this.nombre = nombre
        this.password = password
    }
}

//Declaro un array donde voy a ir almacenando los usuarios creados 
const UsersArray = []


//Voy a crear algunos usuarios para luego realizar algunas validaciones
UsersArray.push(new Usuarios("Hans","buendia"))
UsersArray.push(new Usuarios("Pepe","hola"))
UsersArray.push(new Usuarios("Juan","chau"))
UsersArray.push(new Usuarios("Marcos","nose"))

//Realizo el switch correspondiente a las opciones del usuario
switch(InicioSesion)
{
    case 1:
        let ingreso = prompt("Por favor ingrese su usuario:")
        //Una vez ingresado el nombre, barro el array generado para ver si existe un usuario con el mismo nombre o no        
        while (UsersArray.some((nombreUsuario) => nombreUsuario.nombre === ingreso) == false)
        {
            ingreso = prompt("El usuario ingresado no coincide con la base de datos, por favor ingrese nuevamente:")
        }

        alert("Usuario ingresado correctamente. El usuario ingresado es: " + ingreso)
        
        //Ahora solicito y barro la contraseña en el array pero con la salvedad que tengo que ir a buscar solamente la contraseña del usuario que 
        //ingresó y no todas, asi que acá no puedo utilizar el método some, sino el find y traer el atributo password del array
        let pass = prompt("Ingrese su contraseña") 
        while ((UsersArray.find((el) => el.nombre === ingreso).password === pass) == false)
        {
            pass = prompt("Contraseña ingresada incorrectamente, por favor ingrese nuevamente:")
        }
        alert("Inicio de sesión satisfactorio")
        break
    case 2:
        //En caso que el usuario haya seleccionado que no tiene usuario, el sistema le pedirá uno y barrerá el array para asegurar que no haya otro
        let usuario = prompt("Usted seleccionó que no tiene Usuario y Contraseña. Primero vamos a generar un Usuario.\nIngrese su usuario:")
        while (UsersArray.some((name) => name.nombre == usuario) | (usuario === ""))
        {
            usuario = prompt("Nombre de usuario repetido o nulo. Por favor ingrese otro nombre de usuario:")
        }

        alert("El nombre de usuario que introdujo es: "+usuario)
        //Para el caso de la contraseña, solicitará que tenga más de 8 caracteres
        let contraseña = prompt("Ahora ingrese una contraseña:")

        while (contraseña.length < 8)
        {
            contraseña = prompt("Contraseña menor a 8 caracteres. Por favor ingrese una contraseña más larga")
        }

        //Finalmente, se agrega el usuario y contraseña nuevo al array utilizando la clase. Y luego se hace un console.log para visualizar el 
        //agregado correctamente y muestro un alert con los datos recientemente ingresados
        UsersArray.push(new Usuarios(usuario,contraseña))
        console.log(UsersArray)
        alert("Usuario creado correctamente. Su nombre de Usuario es: " +UsersArray[UsersArray.length-1].nombre + " y Contraseña es: "+UsersArray[UsersArray.length-1].password)
        break
    default:
        alert("Opción inválida")
        break
}
