const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        
        const users = await User.findAll({
            attributes: ['name', 'emial'],
            where: {
                emial: {
                    [Op.iLike]: '%@outlook.com'
                }
            },
            include: [
                { association: 'addresses', 
                where: { 
                 street: 'Rua abc' 
                }},

                { association: 'techs', 
                required: false,
                where: {
                    name: {
                        [Op.iLike]: 'html'
                }}
              },
            ]
        })

            return res.json(users);
    }
};