const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(bodyparser.json());
const customerroutes = require("./routes/customer");
const routesroute = require("./routes/route");
const bookingroute = require("./routes/booking");
app.use(bookingroute);
app.use(routesroute);
app.use(customerroutes);

const DBURL =
  "mongodb+srv://MDB_TEDBUS:TEDBUS@tedbus.xpxwrwz.mongodb.net/?retryWrites=true&w=majority&appName=TEDBUS";
mongoose
  .connect(DBURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })

  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.error("Mongodb connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello , Ted bus is working");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const storySchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});
const tipSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

const photoSchema = new mongoose.Schema({
  description: String,
  author: String,
  filePath: String,
});

const forumSchema = new mongoose.Schema({
  topic: String,
  posts: [
    {
      author: String,
      content: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const Story = mongoose.model("Story", storySchema);
const Tip = mongoose.model("Tip", tipSchema);
const Photo = mongoose.model("Photo", photoSchema);
const Forum = mongoose.model("Forum", forumSchema);
// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
// Stories
app.get("/stories", async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});
app.post("/stories", async (req, res) => {
  const newStory = new Story(req.body);
  await newStory.save();
  res.json(newStory);
});
app.put("/stories/:id", async (req, res) => {
  const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedStory);
});
app.delete("/stories/:id", async (req, res) => {
  await Story.findByIdAndDelete(req.params.id);
  res.json({ message: "Story deleted" });
});

//Tips
app.get("/tips", async (req, res) => {
  const tips = await Tip.find();
  res.json(tips);
});
app.post("/tips", async (req, res) => {
  const newTip = new Tip(req.body);
  await newTip.save();
  res.json(newTip);
});

app.put("/tips/:id", async (req, res) => {
  const updatedTip = await Tip.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTip);
});

app.delete("/tips/:id", async (req, res) => {
  await Tip.findByIdAndDelete(req.params.id);
  res.json({ message: "Tip deleted" });
});

// Photos
app.post("/api/photos", upload.single("file"), (req, res) => {
  const newPhoto = new Photo({
    description: req.body.description,
    author: req.body.author,
    filePath: req.file.path,
  });
  newPhoto
    .save()
    .then((photo) => res.status(201).json(photo))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.get("/api/photos", (req, res) => {
  Photo.find()
    .then((photos) => res.json(photos))
    .catch((err) => res.status(400).json({ error: err.message }));
});
//Forums
app.get("/forums", async (req, res) => {
  const forums = await Forum.find();
  res.json(forums);
});

app.post("/forums", async (req, res) => {
  const newForum = new Forum(req.body);
  await newForum.save();
  res.json(newForum);
});

app.post("/forums/:id/posts", async (req, res) => {
  const forum = await Forum.findById(req.params.id);
  forum.posts.push(req.body);
  await forum.save();
  res.json(forum);
});
