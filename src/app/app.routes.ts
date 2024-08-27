import { Routes } from '@angular/router';
import { RecapComponent } from './recap/recap.component';
import { TodoComponent } from './todo/todo.component';
import { Page404Component } from './page404/page404.component';


export const routes: Routes = [
    {path: "recap", component: RecapComponent},
    {path: "todo", component: TodoComponent},
    {path: "", redirectTo: "recap", pathMatch: 'full' },
    {path: "**", component: Page404Component}
];
