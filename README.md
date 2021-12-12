# Entity -  A secure by default, multi-use and versatile programming language

![image](https://user-images.githubusercontent.com/68202118/145693689-e1041018-c7a8-4d00-b3f2-a9e5005ca676.png)


It is a simple programming language with "entities" that are run in secure enviroments with secure by default permissions to run system critical operations, plus all JS is usable too with the `use: js.entity` header.

## Run the interpreter ->
To run the interpreter clone this repository then run `node init.js`

## What is a header?
Entity has things called headers that have a couple uses, it can detail permissions and also packages that the current entity has access to, you can import entities by using the `use:` header and then inside the entity add a 'export: ' header with permissions and then packages below that.

eg.
 ```
 export: shell
 use: js.entity
 
 js(){
     console.log(`Node.js ${process.version}`)
 }
 ```
