module.exports = function(app){
    
    var users = {},
    last_id = 0;
    
    app.get('/api/users', function(req, res){
        
        var arr = [];
        for(var id in users){
            
            arr.push( users[id] );
        }
        
        return res.json(arr);
    })
    .post('/api/users', function(req, res){
        
        var user = req.body;
        
        if( !user._id ){
            user._id = ++last_id;
            res.status(201);
        }
        
        users[ user._id ] = user;
        
        return res.json(user);
    })
    .get('/api/users/:id', function(req, res){
        
        var user = users[ req.params.id ];
        
        if(user){
            return res.json(user);
        }
        
        return res.status(404).end();
        
    })
    .delete('/api/users/:id', function(req, res){
        
        if(users[ req.params.id ]){
            delete users[ req.params.id ];
            return res.status(204).end();
        }
        
        return res.status(404).end();
        
    });
}