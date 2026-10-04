const Car = Interface('Car')({
  seats: type('number'),
  passengers: type('array', [type('object', Passenger)]),
  beep: type('function')
},{
  error: true,
  strict: true
})