import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  
  constructor(private settings:SettingsService) { }

  ngOnInit(): void {
    const links = document.querySelectorAll(".selector");
    this.settings.setLinks(links);
    this.settings.currentTheme();
  }

  changeTheme(theme:string){
    this.settings.changeTheme(theme);
  }
  

}
