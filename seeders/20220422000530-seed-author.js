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
    await queryInterface.bulkInsert('Authors', [{
      name: 'J.K. Rowling',
      age: 54,
      gender: 'Female',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'George R. R. Martin',
      age: 71,
      gender: 'Male',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Suzanne Collins',
      age: 57,
      gender: 'Female',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'James Dashner',
      age: 47,
      gender: 'Male',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
