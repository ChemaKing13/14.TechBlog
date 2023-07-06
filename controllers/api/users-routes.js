const router = require('express').Router();
const { User } = require('../../models');

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

router.get('/users', async (req, res) => {
    try {
      // Access the user data from the previous route
      const users = await User.findAll();
  
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
});


module.exports = router;