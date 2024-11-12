const productController = {
    index: function (req, res) {
        return res.render("home");
    },
    detalle: function (req, res) {
        return res.render("product"); 
        
    },
    showCrear: function (req, res) {
        return res.render("productAdd"); 
    },

    saveCraer: function (req, res) {
        
    },

    search: function (req, res) {
        return res.render("searchResults");  
    }


};

module.exports = productController;