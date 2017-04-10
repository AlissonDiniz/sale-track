import { Comment } from './../../../domain/comment.class';
import { ModalComponent } from './../modal/component';
import { JQuery } from './../../jquery.class';
import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-comment',
    templateUrl: 'component.html'
})
export class CommentComponent {

    @ViewChild('commentModal')
    private commentModal: ModalComponent;
    @ViewChild('inputOwner')
    private inputOwner: ElementRef;
    private commentListModel: Comment[];
    private commentSelected: Comment;
    private commentModel: Comment = new  Comment();

    public open(commentList: Comment[]){
        this.commentListModel =  commentList;
        this.commentModal.open();
    }

    public cancel(){
        this.commentModal.close();
    }

    public selectComment(comment: Comment){
        this.commentSelected = comment;
        this.inputOwner.nativeElement.focus();
    }

    public addComment(){
        let instance = new Comment();
        instance.owner = this.commentModel.owner;
        instance.text = this.commentModel.text;
        instance.timestamp = Date.now();
        this.commentModel = new Comment();

        if(this.commentSelected){
            this.commentSelected.commentList.push(instance);
            this.commentSelected = null;
        }else{
            this.commentListModel.push(instance);
        }
    }

}