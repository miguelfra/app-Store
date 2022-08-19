const mysqlConnection = require('../db');

const storeController = {

    getArticle:  (req, res) => {
      mysqlConnection.query('SELECT * FROM article', (err, rows) => {
         if (!err) {
            res.json(rows);
         } else{
            res.json(err);
         }
       })
    },

    getArticleID:  (req, res) => {
        const {id} = req.params;
         mysqlConnection.query(`SELECT * FROM article WHERE id = ${id}`, (err, rows) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                res.json(err)
            }
        })
    },

    newArctile:  (req, res) => {
        const {article, price, stock} = req.body;
        
         mysqlConnection.query(`INSERT INTO article(article, price, stock) VALUES ('${article}',${price}, ${stock})`, (err) => {
            if (!err) {
                res.json({
                    status: 'Article saved'
                 })
            } else {
                res.json(err);
            }
         });
    },

    updateArticle(req, res) {
        const {price, stock} = req.body;
        const {id} = req.params;

        mysqlConnection.query(`UPDATE article SET price = ${price}, stock = ${stock} 
        WHERE id = ${id} `,(err)=>{
            if (!err) {
                res.json({
                    status: 'ARTICLE UPDATE'
                })
            } else {
                res.json(err);
            }
        } )
    },

    deletArticle: (req, res) => {
        const {id} = req.params;
        mysqlConnection.query(`DELETE FROM article WHERE id = ${id}`, (err) => {
            if (!err) {
                res.json({
                    status: 'ARTICLE DELETE'
                })
            } else {
                res.json(err);
            }
        })
    }

};


module.exports = storeController;

 
