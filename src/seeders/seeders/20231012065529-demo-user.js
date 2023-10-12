"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "user",
      [
        {
          email: "John Doe",
          password: "ư221",
          username: "sjsjs",
        },
        {
          email: "John Doe1",
          password: "ư221",
          username: "sjsjs",
        },
        {
          email: "John Doe2",
          password: "ư221",
          username: "sjsjs",
        },
        {
          email: "John Doe3",
          password: "ư221",
          username: "sjsjs",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
