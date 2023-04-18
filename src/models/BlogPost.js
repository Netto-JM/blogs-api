const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    });

  BlogPostTable.associate = (model) => {
    BlogPostTable.belongsTo(model.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }

  return BlogPostTable;
};

module.exports = BlogPostSchema;