import { NgModule } from "@angular/core";
import { AboutRoutingModule } from "./about.routing";
import { AboutComponent } from "./pages/about/about.component";

@NgModule({
    declarations:[AboutComponent],
    imports:[AboutRoutingModule],
    providers:[]
})
export class AboutModule {}