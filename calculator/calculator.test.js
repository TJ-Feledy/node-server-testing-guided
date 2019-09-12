const calculator = require('./calculator.js')

xit('runs the tests', () => {
  //assertions
  expect(true).toBe(true)
})

//test runner => the library that runs the tests
//assertion library => the library that handles the tests cases (handles the details)

// what should the add function do?
describe('the calculator', () => {

  describe('the add method', () => {
    
    it('should add two numbers', () => {
      const { add } = calculator

      expect(add(2,2)).toBe(4)
      expect(add(2,1)).toBe(3)
      expect(add(-2,4)).toBe(2)
    })

    // should return 0 on no arguments
    it('should return 0 on no arguments', () => {
      const { add } = calculator

      expect(add()).toBe(0)
    })
  })

  

})

//Combine two values
//Return one value
//add(2,2) => 4

//What should happen on no arguments?
//what about one argument?
//What about many?
//What if they pass in strings?