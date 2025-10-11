const jwt = require('jsonwebtoken');
const User = require('../models/User');


const JWT_SECRET = process.env.JWT_SECRET || 'please_change_this_secret';


module.exports = async function (req, res, next) {
const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'No token' });


const token = authHeader.split(' ')[1];
try {
const payload = jwt.verify(token, JWT_SECRET);
const user = await User.findById(payload.id).select('-password');
if (!user) return res.status(401).json({ error: 'User not found' });
req.user = user; // attach user
next();
} catch (err) {
return res.status(401).json({ error: 'Invalid token' });
}
};