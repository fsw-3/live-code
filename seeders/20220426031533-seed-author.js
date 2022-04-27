'use strict';

const data = [
  {
    name: 'J.K. Rowling',
    age: 54,
    gender: 'Female',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'George R. R. Martin',
    age: 71,
    gender: 'Male',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Suzanne Collins',
    age: 57,
    gender: 'Female',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'James Dashner',
    age: 47,
    gender: 'Male',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Authors', data, {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Authors', null, {})
  }
};
