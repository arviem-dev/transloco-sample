import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  language = "en";

  constructor(public translocoService: TranslocoService) {}

  ngOnInit() {}

  changingLanguage(event) {
    const lang = event.target.attributes.value.value;
    this.translocoService.setActiveLang(lang);
  }
}
