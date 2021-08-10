const router = require('express').Router();
const { Caption } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Caption.findAll()
    .then(dbCaptionData => res.json(dbCaptionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects => {Caption_text: "This is the Caption", user_id: 1, post_id: 2}
  Caption.create({
    Caption_text: req.body.Caption_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCaptionData => res.json(dbCaptionData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Caption.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCaptionData => {
      if (!dbCaptionData) {
        res.status(404).json({ message: 'No Caption found with this id!' });
        return;
      }
      res.json(dbCaptionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
