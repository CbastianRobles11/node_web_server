require('dotenv').config();
const {get}= require('env-var');

const envs={
    
    //traer la variable de entorno
    PORT:get('PORT').required().asPortNumber(),

    //sino haya la variable d entorno lo pone como defecto public
    PUBLIC_PATH: get('PUBLIC_PATH').default("public").asString()

}


 module.exports={
     envs
 }