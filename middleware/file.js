const multer = require('multer')

const storage = multer.diskStorage({
   destination(req, file, cb) {
      cb(null, 'images')
   },
   filename(req, file, cb) {
      cb(null, new Date().getTime() + '-' + file.originalname)
   },
})

const allowedImgTypes = ['image/png', 'image/jpg',  'image/jpeg']

const fileFilter = (req, file, cb) => {
    const isValid = allowedImgTypes.includes(file.mimetype)
   if (isValid) {
      cb(null, true)
   } else {
      cb(null, false)
   }
}

module.exports = multer({
   storage,
   fileFilter,
   limits: {  fileSize: 10 * 1024 * 1024}
})
