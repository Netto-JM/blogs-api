const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    });

  UserTable.associate = (model) => {
    UserTable.hasMany(model.BlogPost, {
      foreignKey: 'userId',
      as: 'posts'
    })
  }

  return UserTable;
};

module.exports = UserSchema;