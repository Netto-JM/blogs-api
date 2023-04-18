const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
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