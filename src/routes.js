/** @format */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");
const routes = [
  // CREATE - POST
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },

  // READ - GET (all data)
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },

  //   READ - GET (spesific data)
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },

  //   UPDATE/EDIT - PUT
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },

  //   DELETE/HAPUS - DELETE
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
