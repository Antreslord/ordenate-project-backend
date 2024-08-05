"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_1 = require("../controllers/project");
const router = (0, express_1.Router)();
router.get('/', project_1.getProjects);
router.get('/:id', project_1.getProject);
exports.default = router;
