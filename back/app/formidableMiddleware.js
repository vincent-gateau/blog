const formidable = require("formidable");
// Middleware personnalisé pour gérer les téléchargements de fichiers
function formidableMiddleware(req, res, next) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }

    // Traitez les champs et les fichiers téléchargés ici
    req.uploadedFields = fields;
    req.uploadedFiles = files;
    next();
  });
}

module.exports = formidableMiddleware;
