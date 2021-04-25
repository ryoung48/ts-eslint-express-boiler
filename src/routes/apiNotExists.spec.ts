import * as request from 'supertest'
import app from '../app'

describe('GET /api/invalid_endpoint', (): void => {
  it('should return `API does not exist`', () => {
    return request(app).get('/api/invalid_endpoint').expect(404).expect('API does not exist\n')
  })
})
