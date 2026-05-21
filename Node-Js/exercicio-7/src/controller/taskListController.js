const taskListModel = require("../model/taskListModel");

module.exports = {
  index: (req, res) => {
    const taskList = taskListModel.getAllTaskLists();
    res.render("app", { taskList });
  },

  create: (req, res) => {
    res.render("create.ejs");
  },

  save: (req, res) => {
    const { title } = req.body;

    const newList = taskListModel.createList(title);
    taskListModel.saveList(newList);

    res.redirect("/app");
  },

  show: (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("Lista de tarefas não encontradas!");
    const taskList = taskListModel.getTaskListById(id);
    res.render("show", { taskList });
  },

  delete: (req, res) => {
    const { id } = req.params;
    taskListModel.deleteList(id);
    res.redirect("/app");
  },

  addTask: (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    taskListModel.addTask(id, title);

    res.redirect(`/app/${id}`);
  },

  completeTask: (req, res) => {
    const { listId, taskId } = req.params;

    taskListModel.completeTask(listId, taskId);

    res.redirect(`/app/${listId}`);
  },

  undoTask: (req, res) => {
    const { listId, taskId } = req.params;

    taskListModel.undoTask(listId, taskId);

    res.redirect(`/app/${listId}`);
  },
};
