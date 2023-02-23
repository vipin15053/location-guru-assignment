import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
