// postDataRoutes.js
import { Router } from 'express';
const router = Router();
import { getAllPosts, createPost, deletePost, updatePost } from '../controlllers/postDataController.js';

router.get('/', getAllPosts);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

export default router;
