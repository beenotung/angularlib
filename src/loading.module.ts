import { NgModule } from "@angular/core";
import { LoadingComponent } from "./components/loading/loading.component";
import { LoadingService } from "./services/loading/loading.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule, CommonModule],
  providers: [LoadingService],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {}
