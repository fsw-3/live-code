'use strict';

const data = [
  {
    name: 'J. K. Rowling',
    age: '54',
    gender: 'female',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'George R. R. Martin',
    age: '71',
    gender: 'male',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'Suzanne Collins',
    age: '57',
    gender: 'female',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'James Dashner',
    age: '47',
    gender: 'male',
    created_at: new Date(),
    updated_at: new Date(),
  }
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
     return queryInterface.bulkInsert('Author', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Author', data, {});
  }
};
