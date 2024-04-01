import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    this.renderer.setStyle(this.el.nativeElement, 'background', 'lightgrey');

    if (this.el.nativeElement.tagName.toLowerCase() === 'h2') {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'chocolate');
      this.renderer.setStyle(this.el.nativeElement, 'font-size', '24px');
    }

     if (this.el.nativeElement.tagName.toLowerCase() === 'button') {
      this.renderer.setStyle(this.el.nativeElement, 'padding', '10px 20px');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#007bff');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
      this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '5px');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');

      this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#0056b3');
      });
      this.renderer.listen(this.el.nativeElement, 'mouseleave', () => {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#007bff');
      });
    }
  }
}
