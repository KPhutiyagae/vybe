import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
        {
            path:'feed',
            loadChildren:()=>import("../pages/feed/feed.module").then(
                n =>n.FeedPageModule
            )
        },
        {
            path:'trending',
            loadChildren:()=>import("../pages/trending/trending.module").then(
                n =>n.TrendingPageModule
            )
        },
        {
            path:'messages',
            loadChildren:()=>import("../pages/messages/messages.module").then(
                n =>n.MessagesPageModule
            )
        },
        {
            path:'settings',
            loadChildren:()=>import("../pages/settings/settings.module").then(
                n =>n.SettingsPageModule
            )
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
    export class HomeRouter {}