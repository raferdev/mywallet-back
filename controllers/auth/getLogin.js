export async function getLogin(req,res) {
    res.render('login', { error: req.session.error });
delete res.session.error;
}