const websiteRoutes = require("express").Router();

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