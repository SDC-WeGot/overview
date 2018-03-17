const db = require('../../db_pg/controller');

describe('Testing postgres database', () => {
  test('it should return requested id', async () => {
    expect.assertions(1);
    try {
      const data = await db.findOneById('1');
      expect(data._id).toBe(1);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  });
});
