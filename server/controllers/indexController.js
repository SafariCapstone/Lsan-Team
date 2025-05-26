/**
 * @desc    Home route controller
 * @route   GET /
 * @access  Public
 */
const getHome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "AfroVoice backend is running"
  });
};

module.exports = {
  getHome
};
