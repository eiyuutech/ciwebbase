const db = require('../config/db.mysql.js');
const Category = db.categories;

// Post a Category
exports.create = (req, res) => {
    // Save to MySQL database
    Category.create({
        name: req.body.name,
        description: req.body.description
    }).then(category => {
        // Send created Category to client
        res.send(category);
    });
};

// FETCH all Categories
exports.findAll = (req, res) => {
    Category.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(categories => {
        // Send all categories to Client
        res.send(categories);
    });
};

// Find a Category by Id
exports.findById = (req, res) => {
    Category.findById(req.params.categoryId).then(category => {
        res.send(category);
    })
};

// Update a Category
exports.update = (req, res) => {
    const id = req.params.categoryId;
    Category.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.categoryId
        }
    }).then(() => {
        res.status(200).send("updated successfully a Category with id = " + id);
    });
};

// Delete a Category by Id
exports.delete = (req, res) => {
    const id = req.params.categoryId;
    Category.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).send('deleted successfully a Category with id = ' + id);
    });
};