const express = require('express')
const app = express();
const path = require('path');
const process = require('process')
const PORT = process.env.PORT || 3000;
/* console.log(process.env) */

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Servidor levantado
en el puerto ${PORT}
http://localhost:${PORT}`));

app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, './views/index.html'))
)


/* variable de entorno.. quiere decir que esta por fuera esa variable.  .env */