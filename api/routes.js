const express = require("express");
const routes = express.Router();


// Articles-----------------------------------------------------
routes.get("/article", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM Articles;', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.get("/article/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM Articles WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    })
});

routes.delete("/articles/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("DELETE FROM Articles WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        });
    });
})


// WebSites-----------------------------------------------------
routes.get("/website", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query("SELECT * FROM WebSites;", (err, rows)=>{
                if(err) return res.send(err)
            
                res.json(rows);
        });
    })
});

routes.get("/website/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM WebSites WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
})

routes.post("/website", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query("INSERT INTO WebSites set ?;", [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        });
    })
});

routes.put("/website/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query("UPDATE WebSites set ? WHERE `token` = ?;", [req.body, req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        })
    })
})

routes.delete("/website/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("DELETE FROM WebSites WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        });
    })
});

// Categories-----------------------------------------------------
routes.get("/categorie", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM Categories;", (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
});

routes.get("/categorie/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM Categories WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post("/categorie", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("INSERT INTO Categories set ?;", [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        });
    });
});

routes.put("/categorie/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("UPDATE Categories set ? WHERE `token` = ?;", [req.body. req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json({
                "status": "success"
            });
        });
    });
});

routes.delete("/categorie/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("DELETE FROM Categories WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err)

            res.json({
                "status": "success"
            });
        })
    });
});

module.exports = routes;