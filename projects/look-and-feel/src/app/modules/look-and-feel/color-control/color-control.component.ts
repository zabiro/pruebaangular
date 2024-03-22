import { Component } from '@angular/core';

@Component({
  selector: 'app-color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.scss']
})
export class ColorControlComponent {
  colors: any = {};


  ngOnInit(): void {
    const storedColors = sessionStorage.getItem('colors');
    if (storedColors) {
      this.colors = JSON.parse(storedColors);
      this.applyColors();
    } else {
      const lookAndFeelData = localStorage.getItem('lookAndFeelData');
      if (lookAndFeelData) {
        const lookAndFeel = JSON.parse(lookAndFeelData).lookAndFeel;
        this.colors = {
          primaryColor: lookAndFeel.primaryColor.trim(), 
          secondaryColor: lookAndFeel.secondaryColor.trim(),
          tertiaryColor: lookAndFeel.tertiaryColor.trim(),
          menuIcon: lookAndFeel.menuico,
          backgroundLoginImage: lookAndFeel.imageBackgroundLogin
        };
        this.applyColors();
      } else {
        this.colors = {
          primaryColor: '#0081B3',
          secondaryColor: '#1A0C3F',
          tertiaryColor: '#C567F2',
        };
        this.applyColors();
      }
    }
  }

  applyColors(): void {
    const root = document.documentElement;

    root.style.setProperty('--ngx-valepro-color-primary', this.colors.primaryColor);
    root.style.setProperty('--ngx-valepro-color-secondary', this.colors.secondaryColor);
    root.style.setProperty('--ngx-valepro-color-tertiary', this.colors.tertiaryColor);
  }

  saveColors(): void {
    sessionStorage.setItem('colors', JSON.stringify(this.colors));
    this.applyColors(); 
  }
}
