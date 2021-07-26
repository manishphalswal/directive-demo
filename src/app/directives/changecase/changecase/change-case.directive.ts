import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeCase]'
})
export class ChangeCaseDirective implements OnInit{

  @Input("changeCase")
  case?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('blur')
  onBlur() {
    //this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
    this.renderer.setAttribute(this.elementRef.nativeElement, "value", this.case === "upper" ? this.elementRef.nativeElement.value.toUpperCase() : this.elementRef.nativeElement.value.toLowerCase())
  }

  ngOnInit(): void {  
    console.log(this.elementRef.nativeElement.value);
  }


}
