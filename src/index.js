import express from 'express';  // Asegúrate de que 'express' esté importado
import dotenv from 'dotenv';  // Importa dotenv si es necesario para configuración
import cors from 'cors';      // Importa cors si lo usas
import connection from './database.js';  // Importa tu archivo de conexión

// Configuración de dotenv si es necesario
dotenv.config();

// Inicializa la aplicación Express
const app = express();

// Configura el puerto, asegúrate de definirlo en tu configuración
app.set('port', process.env.PORT || 5000);

// Usa middleware si es necesario
app.use(cors());
app.use(express.json());

// Inicia la conexión a la base de datos
connection();

// Define tus rutas aquí
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});
