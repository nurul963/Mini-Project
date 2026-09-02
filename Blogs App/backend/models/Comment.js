export class Comment{
    constructor({
        id,content,userId,
        postId,createdAt=new Date().toISOString()
    }){
        this.id=id;
        this.content=content;
        this.postId=postId;
        this.userId=userId;
        this.createdAt=createdAt;
    }
}