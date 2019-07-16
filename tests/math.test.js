const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math'); 


test('should calculate total with tip', ()=> {
    const total = calculateTip(10,.3)
    expect(total).toBe(13);
})

test('Should calculate total with the default tip', () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5)
})

test('should convert Fahrenheit to celsius', () => {
    const value =fahrenheitToCelsius(32);
    expect(value).toBe(0);
})

test('should convert celsius to Fahrenheit', () => {
    const value = celsiusToFahrenheit(0);
    expect(value).toBe(32);
})

test('Async test demo', (done)=>{
    setTimeout(()=>{
        expect(1).toBe(1)
        done()
    },2000)
    
}) 

