import { Comment } from './comment.class';

export class ProductSale{

    private _id: string;
    private _image: string;
    private _name: string;
    private _description: string;
    private _price: number;
    private _likes: number = 0;
    private _storeName: string;
    private _link: string;
    private _commentList: Comment[] = [];


    public get id(): string{
        return this._id;
    }

    public set id(value: string){
        this._id = value;
    }

    public get image(): string{
        return this._image;
    }

    public set image(value: string){
        this._image = value;
    }

    public get name(): string{
        return this._name;
    }

    public set name(value: string){
        this._name = value;
    }

    public get description(): string{
        return this._description;
    }

    public set description(value: string){
        this._description = value;
    }

    public get price(): number{
        return this._price;
    }

    public set price(value: number){
        this._price = value;
    }

    public get likes(): number{
        return this._likes;
    }

    public set likes(value: number){
        this._likes = value;
    }

    public get link(): string{
        return this._link;
    }

    public set link(value: string){
        this._link = value;
    }

    public get storeName(): string{
        return this._storeName;
    }

    public set storeName(value: string){
        this._storeName = value;
    }

    public get commentList(): Comment[]{
        return this._commentList;
    }

    public set commentList(value: Comment[]){
        this._commentList = value;
    }

}