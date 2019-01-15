var orm = require("../config/orm.js");



var burger = {
    list: () =>{
        orm.select_all();
    },
    add: (burger) =>{
        orm.insert_one(burger);
    },
    eat: (burger_id) =>{
        orm.update_one(burger_id);
    }
};

module.exports = burger;
