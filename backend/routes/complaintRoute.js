const express = require("express");
const { createComplaint, getAllComplaints, getPendingComplaints, getSolvedComplaints, deleteComplaint, updateComplaint, complaintDetails } = require("../contollers/complaintController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");



router.route("/complaint/new").post(createComplaint);
router.route("/complaint/delete/:id").delete(deleteComplaint);
router.route("/complaint/:id").get(complaintDetails);
router.route("/complaints").get(getAllComplaints);
router.route("/complaints/pending").get(getPendingComplaints);
router.route("/complaints/solved").get(getSolvedComplaints);
router.route("/complaint/update/:id").put(updateComplaint);





module.exports = router