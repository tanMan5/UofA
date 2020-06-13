// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const express = require('express');
const path = require("path");

// ===============================================================================
// ROUTER
// This uses the built in Router method of express to create a Router that can be
// used as middleware in our server. Routes get connected to the router using the
// same syntax as adding them to the server.
// ===============================================================================
const router = express.Router();

// ===============================================================================
// ROUTING
// ===============================================================================

// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

router.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/tables.html"));
});

router.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

// If no matching route is found default to home
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// ===============================================================================
// EXPORT
// Exports the router to be used as middleware
// ===============================================================================
module.exports = router;