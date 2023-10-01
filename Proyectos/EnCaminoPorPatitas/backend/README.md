En camino por patitas por la parte del Backend
en essta parte entonces vamos a crear nuestra carpeta backend y dentro de ella vamos a instalar a nuestro pckage.json con el siguiente comando: 

npm init -y

luego de esto vamos a instaalr nuestras dependencias que serian express(como freemwork), dotenv para que que nuestro codigo se ejecute sin necesidad de estarlo reiniciando y cors. luego instalamos nuestra base de datos mongoose de esta manera

npm i express dotenv cors mongoose

luego vamos a crear una carpeta models en donde vamos a crear nuestro archivo server.js y en el vamos a requerir a nuestro express de la siguiente manera

const express = require('express')

luego vamos a crear nuestra clase Server 

class Server{

}

dentro de esta carpeta vamos a crear nuestro constructor de esta manera

constructor(){

}

dentro de esta carpeta vamos a crear nuestra constante app y la vamos a igualar a nuestro express y lo ejecutamos con nuestro parentesis de apertura y de cierre

constructor(){
    this.app = express();
}

luego vamos a crear nuestro archivo .env y dentro de el vamos a poner nuestro puerto y nuestro MONGO_URI para la base de datos y le ponemos la url de la base de datos ya creada en mongodb

POST = 8033
MONGO_URI = mongodb+srv://EnCaminoPorPatitas:campus2023@cluster0.q5n6bxz.mongodb.net/EnCaminoPorPatitasDB

luego vamos de nuevo al contructor y le vamos a crear nuestra variable port y la vamos a igualar al .env

this.port = process.env.PORT





------------------------------------------------------------------------------------------------------
vamos a instalar nuestra siguiente dependencia que seria bcryptjs con el siguiente comando:
npm i bcryptjs

luego lo vamos a importar en nuestro controllador


