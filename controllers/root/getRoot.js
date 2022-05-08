import chalk from "chalk"
import session from "express-session";
export async function getRoot(req,res) {
    console.log(chalk.green('Deu bom'));
    res.redirect('/xablau')
}