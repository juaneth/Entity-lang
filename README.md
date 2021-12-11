# Entity -  A pretty simple hobby language for a variety of uses

It is a simple programming language with "entities" that are run in secure enviroments with secure by default permissions to run system critical operations, plus all JS is usable too with the `use: js` header.

## Run the interpreter ->
To run the interpreter clone this repository then run `node init.js`

## What is a header?
Entity has things called headers that have a couple uses, it can detail permissions and also packages that the current entity has access to, you can import entities by using the `run: ` and then inside the entity add a 'export: ' header with permissions and then packages below that.

eg.
 ```export: shell, ```