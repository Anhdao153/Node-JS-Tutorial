const express = require('express');
const router = express.Router();

const { getPeople,createPeople,createPeoplePostMan,updatePeople,deletePeople } = require ('../controller/people');

// router.get('/', getPeople);

// router.post('/',createPeople);

// router.post('/postman', createPeoplePostMan);

// router.put('/:id',updatePeople );

// router.delete('/:id', deletePeople);

router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(createPeoplePostMan);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports = router;