const {repair, fail, succeed, get} = require('./enhancer.js');

// test away!
it('should always set damage back to 100', () => {
    expect(repair({name: 'a', durability: 75, enhancement: 0})).toEqual(
      {
        name: 'a',
        durability: 100,
        enhancement: 0
      }
    );
    
});

it('should always increase enhancement by 1 if between 0 and 15 ', () => {
    expect(succeed({ name: 'a', durability: 10, enhancement: 19 })).toEqual(
      {
        name: 'a',
        durability: 10,
        enhancement: 20
      }
    )
})

it('should decrease durability by 5 if enhancement is <15, or by 10 if enhancement is >15, and decrease enhancement by 1 if >16', () => {
  expect(fail({name: 'a', durability: 100, enhancement: 5})).toEqual(
    {
      name: 'a',
      durability: 95,
      enhancement: 5
    }
  )
})
