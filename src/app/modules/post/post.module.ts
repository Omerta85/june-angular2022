import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostService} from "./services";
import {PostComponent} from "./components/post/post.component";


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[
    PostService
  ]
})
export class PostModule { }
