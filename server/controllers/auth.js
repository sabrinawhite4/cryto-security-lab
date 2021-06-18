const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        if (bcrypt.compareSync(password, users[i].passwordHash)) {
          let userToReturn = { ...users[i] };
          delete userToReturn.passwordHash;
          console.log(users);
          res.status(200).send(users[i]);
        }
      }
    }
  },
  register: (req, res) => {
    console.log("Registering User");
    console.log(req.body);

    const { password, username, email, firstName, lastName } = req.body;

    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);

    let userObj = {
      passwordHash,
      username,
      email,
      firstName,
      lastName,
    };
    users.push(userObj);
    let userToReturn = { ...userObj };
    delete userToReturn.passwordHash;
    console.log(users);
    res.status(200).send(userToReturn);
  },
};
