import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector("#theme");
  private links:NodeListOf<Element>;

  constructor() {
    const url = localStorage.getItem('theme') ?? './assets/css/colors/default.css';
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.currentTheme();
  }

  currentTheme(){
    this.links.forEach(element => {
      element.classList.remove('working');
      const elementTheme = element.getAttribute('data-theme');
      const urlElement = `./assets/css/colors/${elementTheme}.css`
      const currentTheme = this.linkTheme.getAttribute('href');
      if(urlElement === currentTheme){
        element.classList.add('working');
      }
    })

  }

  setLinks(links:NodeListOf<Element>){
    this.links = links;
  }
}
