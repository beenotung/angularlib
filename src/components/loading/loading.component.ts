import {Component, Input, OnInit} from "@angular/core";
import {isDefined} from "@beenotung/tslib";
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: "loading-cmp",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {

  public static defaultImgSrc: string;

  @Input()
  imgWidth: number | string;
  @Input()
  imgHeight: number | string;

  @Input()
  imgSrc = LoadingComponent.defaultImgSrc;

  constructor(private loadingService: LoadingService) {
    console.log("Hello LoadingComponent Component");
  }

  async ngOnInit() {
    this.imgSrc = this.imgSrc || LoadingComponent.defaultImgSrc;
    if (!this.imgSrc) {
      this.loadingService.getRandomLoadingImageUrl()
        .subscribe(url => {
          this.imgSrc = LoadingComponent.defaultImgSrc = url;
        });
    }
  }

  customSize(): boolean {
    return isDefined(this.imgHeight) || isDefined(this.imgWidth);
  }

}
