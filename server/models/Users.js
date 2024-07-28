module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Posts.associate = (models) => {
    //   Posts.hasMany(models.Comments, {
    //     onDelete: "cascade",
    //   });
    // };
    return Users;
  };