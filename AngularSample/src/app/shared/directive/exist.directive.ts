import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appExist]'
})
export class ExistDirective implements OnInit {
  @Input() set appExist(condition: any) {
    if (condition == true) {
      this.vc.createEmbeddedView(this.templat);
    }
    else {
      this.vc.clear();
    }
  }
  constructor(private templat: TemplateRef<any>, private vc: ViewContainerRef) { }
  ngOnInit() {
  }


}
