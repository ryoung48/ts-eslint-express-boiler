import * as request from 'supertest'
import app from '../app'

describe('GET /api/test', (): void => {
  it('should return `Hello from test API`', () => {
    return request(app).get('/api/test').expect(200).expect('Hello from test API\n')
  })
})
