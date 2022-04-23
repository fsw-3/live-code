'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Authors', [
      {
        name : 'J.K. Rowling',
        age : 50,
        gender: 'Female'
      },
      {
        name : 'George R. R. Martin',
        age : 71,
        gender: 'Male'
      },
      {
        name : 'Suzanne Collins',
        age : 57,
        gender: 'Female'
      },
      {
        name : 'James Dashner',
        age : 47,
        gender: 'Male'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
