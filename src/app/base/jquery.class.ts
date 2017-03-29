
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

}