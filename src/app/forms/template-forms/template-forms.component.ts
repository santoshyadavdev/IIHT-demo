import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/product/iproduct';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/comments/services/comment.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  isSubmitted = false;

  product: IProduct = {
    mfd: new Date(),
    name: '',
    price: 0,
    seller: ''
  };

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  addProduct(productForm: NgForm) {
    this.commentService.addProduct(this.product).subscribe(
      (res)=> {
        console.log(res);
        this.isSubmitted = true;
        productForm.resetForm();
      }
    )
    // console.log(this.product);
  }

}
