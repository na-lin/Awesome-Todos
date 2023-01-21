const colors = require("colors");
const { db, User } = require("./index");

const usersData = require("./data/users");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced".yellow);

    // seed your data
    const users = await Promise.all(
      usersData.map((data) => {
        return User.create(data);
      })
    );

    await Promise.all(
      users.map((user) => {
        user.passwordConfirm = "";
        return user.save({ validate: false });
      })
    );

    console.log("Seeding success!".underline.green);
    db.close();
  } catch (err) {
    console.error("Oh noes! Something went wrong!".underline.red);
    console.error(err);
    db.close();
  }
};

seed();
