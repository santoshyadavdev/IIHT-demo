import {
  Directive, ElementRef, OnInit,
  Renderer2, Input, HostListener
} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input('appHover') color = 'steelblue';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el.nativeElement);
  }

  ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseover') onmouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  }

}
