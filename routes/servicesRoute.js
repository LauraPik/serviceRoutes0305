const express = require("express");
const router = express.Router();
const serviceController = require('../controllers/servicesControllor');
const authController = require('../controllers/authController');
const foremanRouter = require('./foremanRoute')

router
  .route("/")
  .get(authController.protect, serviceController.getAllServices)
  .post(authController.protect,
    authController.restrictTo("admin"), 
    serviceController.createService);

router
  .route("/:id")
  .get(serviceController.getService)
  .patch(authController.protect, 
    authController.restrictTo("admin"), 
    serviceController.updateServices)
  .delete(authController.protect, 
    authController.restrictTo("admin"), 
    serviceController.deleteService
    )

router.use('/:serviceId', foremanRouter);

module.exports = router;
