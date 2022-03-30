export default function handler(req, res, next) {
    const email = req.body.email;
    res.status(200).json({text: 'Hello'})
}