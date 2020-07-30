import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../lib/infrastructure/server/server'

chai.use(chaiHttp)
chai.should()

describe('Users', () => {
  describe('POST /login', () => {})

  describe('GET /all', () => {
    it('should return all users', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

  describe('GET /whoami', () => {})

  describe('PUT /', () => {})

  describe('DELETE /', () => {})
})
