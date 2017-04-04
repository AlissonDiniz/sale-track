
export class Comment{
    
    private _text: string;
    private _owner: string;
    private _commentList: Comment[] = [];
    private _timestamp: number;

    public get text(): string{
        return this._text;
    }

    public set text(value: string){
        this._text = value;
    }

    public get owner(): string{
        return this._owner;
    }

    public set owner(value: string){
        this._owner = value;
    }

    public get commentList(): Comment[]{
        return this._commentList;
    }

    public set commentList(value: Comment[]){
        this._commentList = value;
    }

    public get timestamp(): number{
        return this._timestamp;
    }

    public get dateTimestamp(): Date{
        return new Date(this._timestamp);
    }

    public set timestamp(value: number){
        this._timestamp = value;
    }

}