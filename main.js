const express = require('express');
const sqlite3 = require('sqlite3');
const srv = express();
srv.listen(3030, ()=>{
    console.log("Aguardando conexões...");
});

srv.get('/indie', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT art.band, alb.album, msc.music FROM artist AS art INNER JOIN albums AS alb, musics AS msc USING(idArtist,idAlbum);';

    db.all(sql, [], (erro, linhas)=>{
        if(erro) throw erro;
        res.json(linhas);
    })
});

srv.get('/indie/bands', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT band FROM artist';

    db.all(sql, [], (erro, linhas) =>{
        if(erro) throw erro;
        res.send(linhas);
});
});

srv.get('/indie/albums', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT album FROM albums';

    db.all(sql, [], (erro, linhas) =>{
        if(erro) throw erro;
        res.send(linhas);
});
});

srv.get('/indie/songs', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT music FROM musics';

    db.all(sql, [], (erro, linhas) =>{
        if(erro) throw erro;
        res.send(linhas);
});
});

srv.get('/indie/songs', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT music FROM musics';

    db.all(sql, [], (erro, linhas) =>{
        if(erro) throw erro;
        res.send(linhas);
});
});

srv.get('/indie/band/:band', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT art.band, alb.album, msc.music FROM artist AS art INNER JOIN albums AS alb, musics AS msc USING(idArtist,idAlbum) WHERE band LIKE ?;';

    db.all(sql, [`%${req.params.band}%`], (erro, linhas)=>{
        if(erro) throw erro;
        res.json(linhas);
    })
});

srv.get('/indie/albums/:album', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT art.band, alb.album, msc.music FROM artist AS art INNER JOIN albums AS alb, musics AS msc USING(idArtist,idAlbum) WHERE album LIKE ?;';

    db.all(sql, [`%${req.params.album}%`], (erro, linhas)=>{
        if(erro) throw erro;
        res.json(linhas);
    })
});

srv.get('/indie/songs/:song', (req, res)=>{
    const db = new sqlite3.Database(('indie.db'));
    const sql = 'SELECT art.band, alb.album, msc.music FROM artist AS art INNER JOIN albums AS alb, musics AS msc USING(idArtist,idAlbum) WHERE music LIKE ?;';

    db.all(sql, [`%${req.params.song}%`], (erro, linhas)=>{
        if(erro) throw erro;
        res.json(linhas);
    })
});
