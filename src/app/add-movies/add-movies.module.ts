import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// import { ListPage } from './list.page';
import { AddMoviesComponent  } from './add-movies.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddMoviesComponent
      }
    ])
  ],
  declarations: [AddMoviesComponent]
})
export class AddMovieModule {}
