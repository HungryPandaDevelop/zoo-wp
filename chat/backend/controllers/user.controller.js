import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = '66e0575be1d6b45de1dcb0b7'; //req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

    res.status(200).json(filteredUsers);

  } catch (error) {

    res.status(500).json({ error: 'Server Users error' })
  }
}