const articleRoutes = require("express").Router();

articleRoutes.get("/", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM Articles;', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

articleRoutes.get("/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM Articles WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    })
});

articleRoutes.delete("/s/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("DELETE FROM Articles WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        });
    });
});

module.exports = articleRoutes;

