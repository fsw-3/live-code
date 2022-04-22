'use strict';
const data = [
  {
    name: 'J. K. Rowling',
    age: 54,
    gender: 'Female',
    // book_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'George R. R. Martin',
    age: 71,
    gender: 'Male',
    // book_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Suzanne Collins',
    age: 57,
    gender: 'Female',
    // book_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'James Dashner',
    age: 47,
    gender: 'Male',
    // book_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

]

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
     await queryInterface.bulkInsert('Authors', data, {});
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
