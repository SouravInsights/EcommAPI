const mongoose = require('mongoose');
const dotenv = require('dotenv');

if (!process.env.DETA_RUNTIME) {
    dotenv.config({
        path: './config.env'
    });
}

const app = module.exports = require('./app');
let DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
DB += "?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('DB CONNECTED SUCCESSFULY'))

const port = process.env.PORT || 90
if (!process.env.DETA_RUNTIME) {
    app.listen(port, () => {
        console.log(`Connected to port ${port} 💜`)
    });
}


