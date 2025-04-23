require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//upload images to be worked with in this course, assign public ID for referencing
// cloudinary.uploader.upload("assets/boat-and-lake.jpg", {
//   public_id: "boat-and-lake",
// }).then(result => {console.log(result)})
// .catch(error => {console.log(error)})

cloudinary.uploader.upload("assets/golfer.jpg", { public_id: "golfer" });

cloudinary.uploader.upload("assets/happy-couple.jpg", {
  public_id: "happy-couple",
}).then(result => {console.log(result)})
.catch(error => {console.log(error)})

cloudinary.uploader.upload("assets/kitchen.jpg", { public_id: "kitchen" });

cloudinary.uploader.upload("assets/laughing-woman.jpg", {
  public_id: "laughing-woman",
}).then(result => {console.log(result)})
.catch(error => {console.log(error)})

cloudinary.uploader.upload("assets/man-and-camera.jpg", {
  public_id: "man-and-camera",
}).then(result => {console.log(result)})
.catch(error => {console.log(error)})

cloudinary.uploader.upload("assets/mussels-pot.jpg", {
  public_id: "mussels-pot",
}).then(result => {console.log(result)})
.catch(error => {console.log(error)})

cloudinary.uploader.upload("assets/skateboarder.jpg", {
  public_id: "skateboarder",
}).then(result => {console.log(result)})
.catch(error => {console.log(error)})

cloudinary.uploader.upload("assets/woman-hiker.jpg", {
  public_id: "woman-hiker",
}).then(result => {console.log(result)})
.catch(error => {console.log(error)})
