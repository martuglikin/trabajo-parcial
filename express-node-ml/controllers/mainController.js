const mainController = {
    index: function(req, res) {
      res.render('main');
    },
    resultados: function(req, res) {
      res.render('searchResults');
    }
  }

module.exports = mainController;
