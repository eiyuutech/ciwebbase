module.exports = function(app) {

    const categories = require('../controller/category.controller.js');

    // Create a new Category
    app.post('/api/categories', categories.create);

    // Retrieve all Category
    app.get('/api/categories', categories.findAll);

    // Retrieve a single Category by Id
    app.get('/api/categories/:categoryId', categories.findById);

    // Update a Category with Id
    app.put('/api/categories/:categoryId', categories.update);

    // Delete a Category with Id
    app.delete('/api/categories/:categoryId', categories.delete);
}