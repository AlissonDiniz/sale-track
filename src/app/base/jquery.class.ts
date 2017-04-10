
declare var $: any;

export class JQuery{

    private element: any;

    constructor(selector: any){
        this.element = $(selector);
        if(!this.element.length){
            this.element = null;
        }
    }

    getElement(): any{
        return this.element;
    }

    ready(callback: any){
        this.element.ready(callback);
    }

    openModal(transition: string = 'scale'){
        this.element.modal('setting', 'transition', transition).modal('show');
    }

    closeModal(){
        this.element.modal('hide');
    }

    getValue(): string{
        return this.element.val();
    }

    setValue(value: string){
        this.element.val(value);
    }

    getText(): string{
        return this.element.text();
    }

    setText(value: string){
        this.element.text(value);
    }

    getAttrValue(attr: string): string{
        return this.element.attr(attr);
    }

    setAttrValue(attr: string, value: string){
        this.element.attr(attr, value);
    }

    contents(): JQuery{
        return new JQuery(this.element.contents());
    }

    find(selector: string): JQuery{
        return new JQuery(this.element.find(selector));
    }

    findAll(selector: string): JQuery[]{
        const listElm: JQuery[] = [];
        this.element.find(selector).each(function(){
            listElm.push(new JQuery($(this)));
        });
        return listElm;
    }

}