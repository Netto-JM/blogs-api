const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    });

  PostCategoryTable.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoryTable
    });

    BlogPost.belongsToMany(Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoryTable
    });
  }

  return PostCategoryTable;
};

module.exports = PostCategorySchema;