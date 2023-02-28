const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/juegoDadosDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database is connected and ready for action."))
    .catch( err => console.log("conection error", err)) 