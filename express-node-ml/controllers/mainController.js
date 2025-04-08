const mainController = {
    index: function(req, res) {
      res.render('index');
    },
    resultados: function(req, res) {
      res.render('searchResults');
    }
  }

module.exports = mainController;
