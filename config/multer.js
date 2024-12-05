const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },

    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now()+ "-" + Math.round(Math.round()*1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({storage:storage}).single("avatar");
const productUpload = multer({storage:storage}).single("productImage");


module.exports = { upload, productUpload}
