import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "./../../shared/components/button/button.component";

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, ButtonComponent]
})
export class HomeComponent {

}
