var db = require("./connection.js");

run_command = (command) => {
    db.query(command, (err, result) => {
        if (err)
            console.log(err);
        console.log(result);
    });
}

var orm = {

    select_all: () => {
        command = "SELECT * FROM burgers;";
        run_command(command);
    },

    insert_one: (name) => {
        command = `INSERT INTO BURGERS(burger_name) VALUE("${name}")`;
        run_command(command);
    },

    update_one: (id) => {
        command = `UPDATE BURGERS SET devoured = true WHERE id = ${id}`
        run_command(command);
    }
}
module.exports = orm;