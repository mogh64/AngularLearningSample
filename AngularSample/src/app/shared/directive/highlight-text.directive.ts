import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';



@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {
  @Input() defaultColor = 'blue';
  @Input() highlightColor = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elementRef: ElementRef, private rederer: Renderer2)
  {
    this.defaultColor = 'brown';
  }
  ngOnInit() {
    
  }
  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
