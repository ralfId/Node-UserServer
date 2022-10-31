const request = require('supertest');

const baseUrl = 'http://localhost:4001';

describe('GET /api/paises', () => {

  it('should response with status code 200', async () => {

    const response = await request(baseUrl).get('/api/paises').send();

    expect(response.statusCode).toBe(200);

  });

  test('should return 5 in body.count', async () => {
    const response = await request(baseUrl).get('/api/paises').send();

    expect(response.body.count).toEqual(5);
  });

  test('should return an object array in body.data', async () => {
    const response = await request(baseUrl).get('/api/paises').send();

    expect(response.body.data).toBeInstanceOf(Array);
  });

});
