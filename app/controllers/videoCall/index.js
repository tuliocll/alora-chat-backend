exports.init = async (req, res) => {
	const { id } = req.currentUser;
	const { receiverId } = req.body;

	if (receiverId) {
		global.io.to(receiverId).emit("videocall.calling", {
			from: id,
		});
	} else {
		// socket.emit("failed");
	}
};
