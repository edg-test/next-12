export default function handler(req, res) {
    const version = require("package.json").dependencies.next
    res.status(200).json({time: new Date().toLocaleString(), precise: Date.now(), version})
}