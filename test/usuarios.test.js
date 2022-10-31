const request = require('supertest');
const { describe, expect, test } = require('@jest/globals');

const baseUrl = 'http://localhost:4001';

describe('GET /api/usuarios', () => {

    test('should response with status code 200', async () => {
        const response = await request(baseUrl).get('/api/usuarios').send();

        expect(response.statusCode).toBe(200);
    });
});

describe('POST /api/usuarios', () => {

    /**
        * por cada test se debe crear un usuario nuevo
        * se puede utilizar el mismo usuario hasta 5 veces 
        * solo cambiandole el ID_Pais que es del 1 al 5 
        * 
        * {
        *   "ID_Pais": 1,
        *   "Nombre": "",
        *   "Apellidos": "",
        *   "Telefono": "",
        *   "Ciudad": "",
        *   "Fecha_Nacimiento": "",
        *   "Sitio_Trabajo": ""
        * }
        * 
        */

    test('should response with status code 200', async () => {


        const newUser = {
            "ID_Pais": 2,
            "Nombre": "Tull",
            "Apellidos": "Artharg",
            "Telefono": "420-270-6392",
            "Ciudad": "Brazil",
            "Fecha_Nacimiento": "1992-11-21",
            "Sitio_Trabajo": "Kwinu"
        }

        const response = await request(baseUrl).post('/api/usuarios').send(newUser);

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toHaveProperty('Edad')
    });

});

describe('PUT /api/usuarios/:id', () => {
    test('should response with status code 200', async () => {

        const userToUpdate = {
            "ID_Pais": 3,
            "Nombre": "Carlin",
            "Apellidos": "Kurtis",
            "Telefono": "505-453-9732",
            "Ciudad": "Poland",
            "Fecha_Nacimiento": "1983-09-24",
            "Sitio_Trabajo": "Mybuzz"
        }
        const response = await request(baseUrl).put('/api/usuarios/17').send(userToUpdate);

        expect(response.statusCode).toBe(200);
    });
});


describe('DELETE /api/usuarios/:id', () => {
    test('should response with status code 200', async () => {
        const response = await request(baseUrl).delete('/api/usuarios/22').send();

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('Usuario eliminado');
    });
});