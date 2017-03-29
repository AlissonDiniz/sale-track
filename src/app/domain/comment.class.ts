
export class Comment{
    
    private _text: string;
    private _user: string;

    public get text(): string{
        return this._text;
    }

    public set text(value: string){
        this._text = value;
    }

    public get user(): string{
        return this._user;
    }

    public set user(value: string){
        this._user = value;
    }

}