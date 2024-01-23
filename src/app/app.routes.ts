import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
    {path: 'post', redirectTo:'post/index', pathMatch: 'full'},
    {path: '', component: IndexComponent},
    {path: 'post/create', component: CreateComponent},
    {path: 'post/:postId/edit', component: EditComponent},
    {path: 'post/:postId/view', component: ViewComponent},
];