const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const colors = require('colors');
const app = require('./app');
const port = process.env.PORT || 5000;

async function main() {
  try {
    const url = process.env.DB_URL;

    await mongoose.connect(url);
    console.log('database connection successful on port'.cyan.bold, port);
  } catch (err) {
    console.log(err.message.underline.red);
  }
}
main();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.yellow);
});
