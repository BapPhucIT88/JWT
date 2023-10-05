import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "jwt",
// });
const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};
const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?) ",
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      } // results contains rows returned by server
    }
  );
};
const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  let users = [];
  //   return connection.query(
  //     "Select * from users ",
  //     function (err, results, fields) {
  //       if (err) {
  //         console.log(err);
  //         return users;
  //       } // results contains rows returned by server
  //       users = results;
  //       console.log(">>> run get user list", users);
  //       return users;
  //     }
  //   );
  try {
    const [rows, fields] = await connection.execute("Select * from users");
    return rows;
  } catch (error) {
    console.log(">>> check error", error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
};
