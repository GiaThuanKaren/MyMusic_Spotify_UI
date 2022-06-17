const { ZingMp3 } = require("zingmp3-api-full");

module.exports = function Routes(app) {
  // GET / getHome
  app.get("/gethome/:page", (req, res) => {
    console.log(req.params.page);
    let pageNum = req.params.page ? req.params.page : 1;
    ZingMp3.getHome(pageNum)
      .then((data) => {
        res.json({
          pageNum,
          result: data.data,
        });
      })
      .catch((e) => {
        console.log(e);
        res.status(404).json(e);
      });
  });

  //GET song

  app.get("/song/:idSong", (req, res) => {
    let idSong = req.params.idSong ? req.params.idSong : "";
    ZingMp3.getSong(idSong)
      .then((data) => {
        // console.log(data)
        res.json(data);
      })
      .catch((e) => {
        res.status(404).json(e);
      });
  });

  //GET Top100

  app.get("/top100", (req, res) => {
    ZingMp3.getTop100().then((data) => {
      res.status(200).json(data.data)
    }).catch(e=>{
      console.log(e)
      res.status(404).json(e)
    })
  });
};
