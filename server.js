const express = require('express');

const app = express();

app.get('/',(req, res)=> 
    res.json({msg:'Welcome MTF to Contact Keeper API '})
);

const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/users',require('./routers/users'));
app.use('/api/auth',require('./routers/auth'));
app.use('/api/contacts',require('./routers/contacts'));


app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
