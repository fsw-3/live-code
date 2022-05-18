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
    await queryInterface.bulkInsert('Books', [
      {
        title:"Harry Potter and the Philosopher's Stone",
        isbn:"978-0-7475-3269-9",
        price:100000,
        stock:10,
        authorId:1,
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        title:"Harry Potter and the Chamber of Secrets",
        isbn:"978-0-7475-3269-8",
        price:150000,
        stock:10,
        authorId:2,
        createdAt:new Date,
        updatedAt:new Date
      },
      {
      title:"Harry Potter and the Prisoner of Azkaban",
      isbn:"978-0-7475-3269-7",
      price:200000,
      stock:10,
      authorId:3,
      createdAt:new Date,
      updatedAt:new Date
      },
      {
      title:"Harry Potter and the Goblet of Fire",
      isbn:"978-0-7475-3269-6",
      price:250000,
      stock:10,
      authorId:4,
      createdAt:new Date,
      updatedAt:new Date
      },
      {
      title:"Harry Potter and the Order of the Phoenix",
      isbn:"978-0-7475-3269-5",
      price:300000,
      stock:10,
      authorId:5,
      createdAt:new Date,
      updatedAt:new Date
      },
    ], {});
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
