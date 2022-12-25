const mongoose = require('mongoose');
mongoose
.connect("mongodb://localhost/team_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
