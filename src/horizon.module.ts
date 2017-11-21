import {NgModule} from "@angular/core";
import {HorizonService} from "./services/horizon/horizon.service";
import {ProgressModule} from "./progress.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    ProgressModule,
  ],
  providers: [
    HorizonService,
  ],
  declarations: [],
  exports: []
})
export class HorizonModule {
}
