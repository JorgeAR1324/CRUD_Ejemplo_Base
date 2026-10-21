// Responsabilidad: Encargado de conectarse a MYSQL. Ningun otro archivo conoce la contraseña ni el nombre de la base de datos

import mysql from "mysql2/promise"

// Un "pool" que reutiliza las conexiones abiertas.

export const baseDatos = mysql.createPool({
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "root",
    password: process.env.DB_PASSWORD ?? "root", // Escribir la clave del gestor MYSQL
    database: process.env.DB_NAME ?? "tienda"
})