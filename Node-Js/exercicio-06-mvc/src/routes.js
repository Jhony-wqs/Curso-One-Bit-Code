const express = require("express");
const postController = require("./controllers/postController");
const adminController = require("./controllers/adminController");
const router = express.Router();

//  Rota para a página inicial do blog.
router.get("/", postController.index);
// Rota para exibir um post especifico.

router.get("/posts/:id", postController.show);

// Rotas para páginas administrativas.

router.get("/admin", adminController.showAdminPage);
router.get("/admin/create", adminController.showCreatePge);
router.post("/admin/create", adminController.createPost);
router.get("/admin/edit/:id", adminController.showEditPage);
router.post("/admin/update/:id", adminController.updatePost);
router.post("/admin/delete/:id", adminController.deletePost);

module.exports = router;
