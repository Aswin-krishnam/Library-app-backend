const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title": String,
        "category": String,
        "pyear": String,
        "author": String,
        "description": String,
        "dname": String,
        "pname": String,
        "price": String,
        "edition": String,
    }
)
let librarymodel = mongoose.model("library", schema);
module.exports = { librarymodel }