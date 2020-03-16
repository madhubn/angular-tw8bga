import { Directive, ViewContainerRef, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(public elementRef: ElementRef) {
    console.log("elementRef", elementRef);
    this.elementRef.nativeElement.style.color = "red";
  }
}
