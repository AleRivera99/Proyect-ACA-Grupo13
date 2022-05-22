const { Sequelize } = require('sequelize');
const port = process.env.PORT || 3977;
const app = require("./app");
const { API_VERSION, IP_SERVER } = require("./config");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('proyecto', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexion exitosa a la base de datos.');
        app.listen(port, () => {
            console.log("####################")
            console.log("##### API REST #####")
            console.log("####################")
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    })