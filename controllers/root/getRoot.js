import chalk from "chalk"
export async function getRoot(req,res) {
    console.log(chalk.green('Deu bom'));
    res.redirect('/xablau');
}