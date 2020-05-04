const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/tripPlanner", {
  logging: false
});


//DEFINE MODELS

const Place = db.define('place', {
  address : {
    type: Sequelize.STRING,
    allowNull: false
  },
  city : {
    type: Sequelize.STRING,
    allowNull: false
  },
  state : {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone : {
    type: Sequelize.STRING,
    allowNull: false
  },
  location : {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
})


const Hotel = db.define('hotel', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars : {
    type: Sequelize.FLOAT, //(float from 1 to 5)
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities : {
    type: Sequelize.STRING, //string of comma-delimited items
  }
})


const Activity = db.define('activity', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range : {
    type: Sequelize.STRING,
  }
})


const Restaurant = db.define('restaurant', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine : {
    type: Sequelize.STRING,  //(comma-delimited string list)
    allowNull: false
  },
  price : {
    type: Sequelize.INTEGER, //integer from 1 to 5, for how many dollar signs)
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }
})



//SET ASSOCIATIONS
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);







//EXPORT MODELS
module.exports = {db, Hotel, Activity, Place, Restaurant}

