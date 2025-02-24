import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';

export const routes: Routes = [
    {path: '', component: DemoHomeComponent},
    {path: '**', redirectTo: ''}, // redirect invalid routes
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}