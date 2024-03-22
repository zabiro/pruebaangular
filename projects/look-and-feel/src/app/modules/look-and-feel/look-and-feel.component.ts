import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-look-and-feel',
  templateUrl: './look-and-feel.component.html',
  styleUrls: ['./look-and-feel.component.scss']
})
export class LookAndFeelComponent {
  constructor(private router: Router) {}
  status: boolean = false;
  colors: any;
  clickEvent(){
      this.status = !this.status;       
  }

  ngOnInit(): void {
    const storedColors = sessionStorage.getItem('colors');
    if (storedColors) {
      this.colors = JSON.parse(storedColors);
    } else {
      const lookAndFeelData = localStorage.getItem('lookAndFeelData');
      if (lookAndFeelData) {
        const lookAndFeel = JSON.parse(lookAndFeelData).lookAndFeel;
        this.colors = {
          primaryColor: lookAndFeel.primaryColor.trim(), 
          secondaryColor: lookAndFeel.secondaryColor.trim(),
          tertiaryColor: lookAndFeel.tertiaryColor.trim(),

        };
      } else {
        this.colors = {
          primaryColor: '#000',
          secondaryColor: '#1A0C3F',
          tertiaryColor: '#C567F2',
        };
      }
    }

    this.applyColors();
  }

  applyColors(): void {
    const root = document.documentElement;

    root.style.setProperty('--ngx-valepro-color-primary', this.colors.primaryColor);
    root.style.setProperty('--ngx-valepro-color-secondary', this.colors.secondaryColor);
    root.style.setProperty('--ngx-valepro-color-tertiary', this.colors.tertiaryColor);
  }


  routernavigateto(url: string){
    this.router.navigateByUrl(url);
  }

}
  

