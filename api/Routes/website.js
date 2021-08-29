const websiteRoutes = require("express").Router();

websiteRoutes.get("/", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query("SELECT * FROM WebSites;", (err, rows)=>{
                if(err) return res.send(err)
            
                res.json(rows);
        });
    })
});

websiteRoutes.get("/:token", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM WebSites WHERE `token` = ?;", [req.params.token], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
})

websiteRoutes.post("/", (req, res)=>{
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

websiteRoutes.put("/:token", (req, res)=>{
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

websiteRoutes.delete("/:token", (req, res)=>{
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

module.exports = websiteRoutes;