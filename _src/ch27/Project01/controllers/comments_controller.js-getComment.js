exports.getComment = function(req, res) {
    CommentThread.findOne({_id: req.query.commentId})
    .exec(function(err, comment) {
        if (!comment) {
            res.json(404, {msg:'CommentThread Not Found'});
        } else {
            res.json(comment);
        }
    });
};