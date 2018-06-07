module.exports = (app, config) => {
  const axios = require('axios');

  app.get('/', (req, res, next) => {
    axios.get(`http://localhost:${config.PORT_API}/api`)
      .then((response) => {
        res.status(200).render('index', response.data ? response.data : {});
      })
      .catch(err => {
        console.log(err);
        next();
      });
  });
};