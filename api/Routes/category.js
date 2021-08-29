const categoryRoutes = require("express").Router();

categoryRoutes.get("/", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM Categories;", (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        })
    })
});

categoryRoutes.get("/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM Categories WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

categoryRoutes.post("/", (req, res)=>{
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

categoryRoutes.put("/:token", (req, res)=>{
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

categoryRoutes.delete("/:token", (req, res)=>{
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

module.exports = categoryRoutes;