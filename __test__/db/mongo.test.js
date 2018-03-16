const db = require('../../db_mongo/controller_driver');

describe('Testing postgres database', () => {
  test('it should return requested id', async () => {
    expect.assertions(1);
    const data = await db.findOneById('1');
    expect(data._id).toBe(1);
  });
});
