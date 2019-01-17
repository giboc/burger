var db = require("./connection.js");

var orm = {

    select_all: callback=>{

        var query = "SELECT * FROM burgers;";
        db.query(query, (err, result) => {
            if (err) throw err;
            // console.log("Sel all",result,callback,"\n\n")
            return callback(result);
        });
    },

    insert_one: (name) => {
        var query = "INSERT INTO BURGERS(burger_name) VALUE(?)";
        db.query(query, [name], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },

    update_one: (id) => {
        var query = "UPDATE BURGERS SET devoured = true WHERE id = ?"
        db.query(query, [id], (err,result) => {
            if(err) throw(err);
            console.log(result);
        });
    }
}

module.exports = orm;