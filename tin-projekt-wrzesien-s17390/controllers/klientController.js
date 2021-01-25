exports.showLogin = (req, res, next) => {
    res.render('html/login', {});
}

exports.showRegister = (req, res, next) => {
    res.render('html/register', {});
}