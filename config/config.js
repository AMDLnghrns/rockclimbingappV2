function getDBConfigFromUrl(url){
  const firstSplit = url.split(":");
  const secondSplit= firstSplit[2].split("@");
  
  return {
    "username": firstSplit[1].split("//").slice(-1)[0],
    "password": secondSplit[0],
    "database": firstSplit[3].split("/").slice(-1)[0],
    "host": secondSplit[1],
  };
}
  
const config = {
  "development": {
    "username": "root",
    "password": "bexley10",
    "database": "scrapedData",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "scrapedData",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "vufeqsgoxq8ajher",
    "password": "vvv3qinzoqx1zahm",
    "database": "qomt9b53adt1yaob",
    "host": "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};
  
if(process.env.NODE_ENV === "production"){
  config.production = {
    ...getDBConfigFromUrl(process.env.JAWSDB_URL),
    "dialect": "mysql",
    "operatorsAliases": false
  };
}
  
module.exports = config;