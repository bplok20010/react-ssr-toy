import express from "express";

import home from "./controller/home";
import news from "./controller/news";
import content from "./controller/news/content";
import about from "./controller/about";

const router = express.Router();

router.get("/", home);
router.get("/news", news);
router.get("/news/:id", content);
router.get("/about", about);

export default router;
