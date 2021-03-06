module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        name: DataTypes.STRING, 
        score: DataTypes.INTEGER
    });
    Score.associate = function(models){
        Score.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
     };
    return Score; 
}