import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
// import { User } from './components/user/user';
import { Databinding } from './components/databinding/databinding';
import { ControlFlow } from "./control-flow/control-flow";
import { Pipe } from './pipe/pipe';
import { Decorators } from './decorators/decorators';
import { Header } from './componentweb/header/header';

import { User } from './componentweb/user/user';
import { Footer } from './componentweb/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Admin, Databinding, ControlFlow, Pipe, Decorators, Header, Footer, User, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
