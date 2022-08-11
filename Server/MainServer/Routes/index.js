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
          ...data.data,
        });
      })
      .catch((e) => {
        console.log(e);
        res.status(404).json(e);
      });
  });
 
  //GET song

  app.get("/song/:idPlaylist", (req, res) => {
    let idPlaylist = req.params.idPlaylist ? req.params.idPlaylist : "";
    ZingMp3.getSong(idPlaylist)
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
    ZingMp3.getTop100()
      .then((data) => {
        res.status(200).json(data.data);
      })
      .catch((e) => {
        console.log(e);
        res.status(404).json(e);
      });
  });

  app.get("/detail/:id", (req, res) => {
    // Promise.all([ZingMp3.getDetailPlaylist("ZWZB969E"), ZingMp3.getTop100()])
    //   .then(res=>{
    //     console.log(res)
    //   })

    let idPlaylist = req.params.id ? req.params.id : "";
    console.log(idPlaylist);
    ZingMp3.getDetailPlaylist(idPlaylist)
      .then((data) => {
        // console.log(data.data.song.items)
        let ArrSong = data.data.song.items;
        let IdSongArr = ArrSong.map(function (item, idx) {
          // console.log(item.encodeId)
          return `
          ZingMp3.getSong(${item.encodeId})
          `;
        });
        // console.log(IdSongArr.join(''))
        res.status(200).json(data);
      })
      .catch((e) => {
        res.status(404).json(e);
      });
  });
 
  app.get("/search",async (req,res)=>{  
    let searchText = req.query.q;
    console.log(searchText)
    let data = await ZingMp3.search(searchText ? searchText : "");
    res.json(data)
    
  })
};
