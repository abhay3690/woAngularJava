import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
// import { User } from './components/user/user';
import { Databinding } from './components/databinding/databinding';
import { ControlFlow } from "./control-flow/control-flow";
import { Pipe } from './pipe/pipe';
import { Decorators } from './decorators/decorators';
import { Header } from './header/header';
import { Body } from './body/body';
import { Footer } from './footer/footer';

import { User } from './user/user';
import { Login } from './login/login';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Admin, Databinding, ControlFlow, Pipe, Decorators, Header, Body, Footer, User, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
