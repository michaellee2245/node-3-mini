const allMessages = []

module.exports = {
    getAllMessages: (req, res) => {
        res.send(allMessages);
    },
    createMessage: (req, res) => {
        let newMessage = {
            username: req.body.username,
            message: req.body.message
        };
        allMessages.push(newMessage);
        res.send(allMessages)
    }
};