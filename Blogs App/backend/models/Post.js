export class Post{
    constructor({
        id,
        title,
        content,
        image=null,
        autherId,
        categoryId,
        createdAt=new Date().toISOString()
    }){
        this.id=id;
        this.title=title;
        this.content=content;
        this.image=image;
        this.autherId=autherId;
        this.categoryId=categoryId;
        this.createdAt=createdAt
    }
}