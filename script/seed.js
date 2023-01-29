("use strict");

const { db, User, Task } = require("../server/db");

// data that used to seed
const usersData = require("./data/users");
const tasksData = require("./data/tasks");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all(
    usersData.map((data) => {
      return User.create(data);
    })
  );

  // Creating Users
  const tasks = await Promise.all(
    tasksData.map((data) => {
      return Task.create(data);
    })
  );

  await users[0].setTasks(tasks.slice(0, 4));
  await users[1].setTasks(tasks.slice(4, 8));

  console.log(`seeded ${users.length} user's data `);
  console.log(`seeded ${tasks.length} tasks data `);

  console.log(`seeded successfully`);
  return {
    users,
    tasks,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
