const { addNoteHandler } = require('./handler');
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: () => {},
      },
  ];

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });
   
  module.exports = { addNoteHandler, getAllNotesHandler };
   
  module.exports = routes;