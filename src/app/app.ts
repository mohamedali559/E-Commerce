import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { Header } from "./components/header/header";
import { Products } from "./components/products/products";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Products, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-Assignment');
}
