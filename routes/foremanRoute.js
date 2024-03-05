const express = require("express");
const router = express.Router({mergeParams: true});
const foremanController = require('../controllers/foremanController');
const authController = require("../controllers/authController");


router.use(authController.protect)

router
  .route("/")
  .post(  foremanController.createForeman)
router
  .route("/:id")
  .patch(
    authController.restrictTo("admin"),
    foremanController.updateForeman
    )
.delete(
    authController.restrictTo("admin"),
    foremanController.deleteForeman
)


module.exports = router;