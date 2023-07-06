const router = require('express').Router();

//route to create a new user 
router.post('/', async (req, res) => {
    console.log('Request received to create a new user', req.body);

    try {
        const userData = await User.create(req.body); 

        console.log('User created', userData);

        req.session.user_id = userData.id;
        req.session.logged_in = true; 
        req.session.name = userData.name; 

        console.log('Session data saved'); 

    } catch (err) {
        console.log('Error creating user:', err);
        res.status(400).json(err); 
    }
}); 


module.exports = router;