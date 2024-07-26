
const { envs }= require("./config/env");
const {startSever}=require("./server/server")

const main=()=>{
    console.log("Aqui empieza el servidor");
    console.log(envs);
    startSever(
        {
            port:envs.PORT,
            public:envs.public
        }
    )
    //llamar server



}




//funcion agnostica autoconvocada
//agnostica: no tiene nombre
// Autocobnvocada : por que la llaama ella misma
(async()=>{
    main()
})()
