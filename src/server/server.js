const express= require('express')

//propio de noedde que nos permite leer las carpetas del proyecto
 const path= require('path')


 const startSever=(options)=>{

    const{port ,public_path="public"}= options

    //ver que funcione lo que queria del env a traves de app
    console.log(`desde server:  ${port} `);   
    console.log(`desde server: ${public_path} `);


    const app=express()

    //para usar los midlewares se usa la palabra "use", esto es propio de express

    //información estatico disponibe lo que esta en la publica
    app.use(express.static(public_path))

    //req= lo que enviamos res la respuesta que recibimos
    // * ante cualquier peticion en url en puerto 3000  responde lo que esta en la carpeta depubli/html
    app.get('*',(req,res)=>{
        const indexPath=path.join(__dirname+`../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //para que escuche y que si llama a travez de una url  y responde
    // escuchaa traevz de un puerto
    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`);
    })

        
 }

 module.exports={
    startSever
 }