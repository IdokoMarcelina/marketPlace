const cloudinery = require('cloudinary').v2;

cloudinery.config({
    cloud_name: "marcelina",
    api_key: "435316454384667",
    api_secret: "6-oLK_tWuGl5-263U6xpS_PNXqU",
    secure: true,
    
})

module.exports = cloudinery;