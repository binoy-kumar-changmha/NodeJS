const showErrorPage = (req, res) => {
  res.status(404).render("404");
  // changing status is important
}

exports.showErrorPage = showErrorPage;