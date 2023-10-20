let postModel = require("../models/post_model");

var commentController = {};

commentController.showCreateCommentById = (req, res) => {
  let val_id = req.params.id;

  // Get post by id
  postModel
    .findOne({ _id: val_id })
    .then((post) => {
      res.render('add_comment', { post });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};


commentController.createComment = (req, res) => {
  
  // Crea un nuevo comentario
  const { _id, autor, mensaje, fecha } = req.body; // Datos del comentario

  if (autor, mensaje, fecha) {

    const comment = {
      autor: autor,
      mensaje: mensaje,
      fecha: fecha
    };

    // Guardar datos asincronos
    postModel
    .updateOne(
      { _id: _id }, // Filtra el documento por su _id (como número entero)
      { $push: { comentarios: comment } }
    )
    .then((data) => {
      console.log(data);
      res.redirect("/posts/list");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
    
  } else {
    // En caso de que falten datos, puedes redirigir a una página de error o hacer cualquier otra acción
    res.redirect('/comments/create?error');
  };

  
};

commentController.showUpdateComment = (req, res) => {
  let val_id = req.params.id;
  let val_id_comment = req.params.id_comment;
  let comment_id = parseInt(val_id_comment);

  postModel
    .findOne({ _id: val_id })
    .then((post) => {
      res.render('update_comment', { post, comment_id });
    })
    .catch((err) => {
      res.sendStatus(500);
    });

};

commentController.updateComment = (req, res) => {

  // Obtener datos del comentario
  const { _id, _id_comment, autor, mensaje, fecha } = req.body;

  if (_id, _id_comment, autor, mensaje, fecha) {

    const update_comment = {
      autor: autor,
      mensaje: mensaje,
      fecha: fecha
    };

    (async () => {

      const post = await postModel.findOne(
        { _id: _id }
      );
      
      post.comentarios[_id_comment] = update_comment;      
      console.log(post.comentarios);

      await postModel.updateOne(
        { _id: _id},
        { $set: { comentarios: post.comentarios } }
      )

      res.redirect('/posts/list');

    })();

  } else {
    res.redirect('/comments/update?error');
  }
};


module.exports = commentController;
