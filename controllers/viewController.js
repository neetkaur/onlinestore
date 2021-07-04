const RESOURCE_PATH = '/candystore'

const viewController = {
  index(req, res, next){
    res.render('Index', { CandyStoreJS: res.locals.data.candy })
  },
  show(req, res, next){
    res.render('Show', { CandyStoreJS: res.locals.data.candy })
  },
  edit(req, res, next){
    res.render('Edit', { CandyStoreJS: res.locals.data.candy })
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  },
  new(req,res,next){
    res.render('New')

  }
}

module.exports = viewController;
