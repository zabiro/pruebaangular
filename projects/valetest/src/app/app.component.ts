import { Component, inject } from '@angular/core';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { HttpErrorResponse } from '@angular/common/http';
import { UrlToProgramModel } from './core/models/urlToProgram.model';
import { applyTheme } from './styleLoad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Valetest';

  lookAndFeelRepository: LookAndFeelRepository = inject(LookAndFeelRepository);


  constructor() {
    this.loadLookAndFeel();
  }

  loadLookAndFeel() {
    this.lookAndFeelRepository.getProgram().subscribe({
      next: (data: UrlToProgramModel) => {
        localStorage.setItem('lookAndFeelData', JSON.stringify(data));
        applyTheme(data.lookAndFeel);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    });
  }

}


