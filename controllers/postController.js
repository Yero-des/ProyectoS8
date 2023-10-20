let postModel = require("../models/post_model");

var postController = {};

postController.showPost = (req, res) => {
  // Get post
  postModel
    .find({})
    .then((documents) => {
      res.render("dashboard", { documents });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

postController.createPost = (req, res) => {
  // Create a new product
  let obj = new postModel();

  const { titulo, descripcion, categoria, fecha } = req.body;

  if (titulo, descripcion, categoria, fecha) {
    
    obj.titulo = titulo;
    obj.descripcion = descripcion;
    obj.categoria = categoria;
    obj.fecha = fecha;
    obj.comentarios = [];
  
    // Create new product
    obj
    .save()
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
    res.redirect('/posts/create?error');
  };

  
};

postController.updatePost = (req, res) => {

  // Get id and data to update
  let val_id = req.params.id;
  const { titulo, descripcion, categoria, fecha } = req.body;

  let data_update = {
    titulo: titulo,
    descripcion: descripcion,
    categoria: categoria,
    fecha: fecha,
  };

  // Update product
  postModel
    .updateOne({ _id: val_id }, data_update)
    .then((data) => {
      res.redirect('/posts/list');
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

postController.showPostById = (req, res) => {
  let val_id = req.params.id;

  // Get post by id
  postModel
    .findOne({ _id: val_id })
    .then((post) => {
      res.render('update_post', { post });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
};

postController.deletePost = (req, res) => {
  // Get id of product
  let val_id = req.params.id;

  // Delete product
  postModel
    .deleteOne({ _id: val_id })
    .then(() => res.redirect("/posts/list"))
    .catch((err) => {
      res.sendStatus(500);
    });
};

module.exports = postController;
