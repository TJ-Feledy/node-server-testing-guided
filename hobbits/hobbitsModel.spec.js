const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig.js')

describe('The Hobbit model', () => {

  beforeEach(async () => {
    await db('hobbits').truncate()
  })
  
  describe('the insert function', () =>  {
    it('should insert a new hobbit', async () => {
      //test setup
      const hobbitData = { name: 'frodo' }
      await Hobbits.insert(hobbitData)
      
      //assertion
      const hobbits = await Hobbits.getAll()
      expect(hobbits.length).toBe(1)
      expect(hobbits[0].name).toBe('frodo')
    })

    it('should resolve to the newly created hobbit', async () => {
      const hobbitData = {name: 'frodo'}
      const hobbit = await Hobbits.insert(hobbitData)
    
      expect(hobbit).toEqual({id: 1, name: 'frodo'})
    })
  })

})