import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ageLimit]'
})
export class AgeLimitDirective {

  constructor(private templateRef: TemplateRef<number>, private vcRef: ViewContainerRef) { }

  @Input() set ageLimit(value: number) {
    value <= 20 ? this.vcRef.clear() : this.vcRef.createEmbeddedView(this.templateRef);
  }

}
