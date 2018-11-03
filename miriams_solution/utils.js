const accessControlAllowOrigin = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, Authorization, Content-Type, Content-Length')
  res.header('Access-Control-Allow-Credentials', 'true')
  if (req.method == 'OPTIONS'){
    return res.status(200).end()
  }

  next()
}

module.exports = {
  accessControlAllowOrigin,
}