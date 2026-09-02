import { postRepository } from '../repositories/postRepository.js'
import { uploadCloudinary } from '../config/cloudinary.js';
export const getPosts = async (req, resp) => {
    try {
        const posts = await postRepository.getAll();
        resp.status(200).json({
            success: true,
            message: "fetched list",
            data: posts
        })
    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}
export const getPost = async (req, resp) => {
    try {
        const { id } = req.params;
        const post = await postRepository.getById(id);
        resp.status(200).json({
            success: true,
            message: "fetched post",
            data: post
        })
    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}
export const createPost = async (req, resp) => {
    try {
        const image = req.file;
        const parseData = JSON.parse(req.body.data);
        const { title, content, categoryId } = parseData;
        //uploading image
        const imageUpload = await new Promise((resolve, reject) => {
            const stream = uploadCloudinary
                .uploader
                .upload_stream(
                    {
                        folder: 'blog'
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }
                )
            stream.end(image.buffer);
        });
        const {userId}=req.user
        const post = {
            title,
            content,
            categoryId,
            autherId:userId,
            image: imageUpload.secure_url,
        }
        const createdPost = await postRepository.create(post)
        return resp.status(200).json({
            success: true,
            message: "Post is created",
            data: createdPost
        })
    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}
export const updatePost = async (req, resp) => {
    try {
        const data=req.body;
        const post = await postRepository.getById(req.params.id);
        if (!post) {
            return resp.status(400).json({
                success: false,
                message: "Post not found"
            })
        }
        if (post.autherId !== req.user.userId) {
            return resp.status(400).json({
                success: false,
                message: "You can not edit this post"
            })
        }
        const update = await postRepository.update(req.params.id, data);
        return resp.status(200).json({
            success: true,
            message: "Post updated",
            data: update
        })
    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}
export const deletePost = async (req, resp) => {
    try {
        const post = await postRepository.getById(req.params.id);
        if (!post) {
            return resp.status(400).json({
                success: false,
                message: "Post not found"
            })
        }
        if (post.autherId !== req.user.userId) {
            return resp.status(400).json({
                success: false,
                message: "You can not delete this post"
            })
        }
        await postRepository.delete(req.params.id);
        return resp.status(200).json({
            success: true,
            message: "Post deleted"
        })
    } catch (error) {
        return resp.status(400).json({
            success: false,
            message: error.message
        })
    }
}