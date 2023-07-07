const router = require('express').Router();
const { User } = require('../../models');

//route to create a new user 
router.post('/', async (req, res) => {
    try {
        // const { name, email, password } = req.body; 
        const userData = await User.create({ 
          name: req.body.name, email: req.body.email, password: req.body.password });   
          console.log(userData); 

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});


//retrieve all the users in the database 
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