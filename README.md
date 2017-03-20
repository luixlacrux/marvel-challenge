# marvel-challenge

## Install dependencies
```
$ npm install
```
## Build static files and run server
```
$ npm start
```
## Project structure
```
├── components
│   ├── app.js                 # Maneja el estado global de la aplicación, y las rutas de la misma.
│   ├── characters             # Componente de personajes
│   │   ├── containers
│   │   │   ├── info.js        # Información personaje.
│   │   │   └── item.js        # Personaje.
│   │   ├── detail.js          # Personaje detalle.
│   │   └── index.js           # Lista de personajes.
│   ├── comic                  # Componente de comics
│   │   ├── containers
│   │   │   ├── actions.js     # Botones de acciones.
│   │   │   └── detail.js      # Descripción del comic.
│   │   └── index.js           # Comic.
│   └── favourites             # Componente favoritos.
│       └── index.js           # Lista de favoritos.
├── index.js                   # Punto de entrada de la aplicación.
├── shared                     # Componentes reutilizables.
│   ├── comic.js               
│   ├── footer.js
│   ├── header.js
│   ├── loading.js
│   └── thumbnail.js
└── utils                     # Modulos utilitarios.
    ├── api.js                # MARVEL API cliente.
    └── storage.js            # Modulo de almacenamiento.
```
