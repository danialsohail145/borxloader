import { Component, ElementRef, Input, OnInit } from '@angular/core';


@Component({
  selector: 'borx-loader',
  template: `
    <div
      [ngClass]="config.showBackdrop ? 'main-backdrop' : 'main-withoutbackdrop'"
    >
      <div class="loader-container">
        <div
          [ngClass]="config.showImage ? 'img-container' : 'no-img-container'"
        >
          <img *ngIf="config.showImage" [src]="config.image" />
        </div>
        <ng-container *ngIf="config.showSpinner">
          <container-element [ngSwitch]="config.loaderType">
            <!-- Loader 1-->
            <div class="lds-ring center-spinner" *ngSwitchCase="'ring'">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <!-- Loader 2 -->
            <div class="lds-roller center-spinner" *ngSwitchCase="'roller'">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <!-- loader 3 -->
            <div class="lds-spinner center-spinner" *ngSwitchCase="'spinner'">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <!-- loader 4 -->
            <div class="lds-ellipsis center-spinner" *ngSwitchCase="'ellipsis'">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </container-element>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      /* Main */
      .main-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(29, 28, 28, 0.603);
        cursor: pointer;
      }
      .main-withoutbackdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      .loader-container {
        position: absolute;
        top: 25%;
        left: 40%;
      }
      .img-container {
        margin-bottom: 15px;
      }
      .no-img-container {
        height: 150px;
      }
      .img-container img {
        width: 200px;
        height: 200px;
      }
      /* Center Spinner */
      .center-spinner {
        position: absolute;
        left: 56px;
      }
      /* Loader 1 */
      .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--loader-color);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--loader-color) transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      /* Loader 2 */

      .lds-roller {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-roller div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 40px 40px;
      }
      .lds-roller div:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--loader-color);
        margin: -4px 0 0 -4px;
      }
      .lds-roller div:nth-child(1) {
        animation-delay: -0.036s;
      }
      .lds-roller div:nth-child(1):after {
        top: 63px;
        left: 63px;
      }
      .lds-roller div:nth-child(2) {
        animation-delay: -0.072s;
      }
      .lds-roller div:nth-child(2):after {
        top: 68px;
        left: 56px;
      }
      .lds-roller div:nth-child(3) {
        animation-delay: -0.108s;
      }
      .lds-roller div:nth-child(3):after {
        top: 71px;
        left: 48px;
      }
      .lds-roller div:nth-child(4) {
        animation-delay: -0.144s;
      }
      .lds-roller div:nth-child(4):after {
        top: 72px;
        left: 40px;
      }
      .lds-roller div:nth-child(5) {
        animation-delay: -0.18s;
      }
      .lds-roller div:nth-child(5):after {
        top: 71px;
        left: 32px;
      }
      .lds-roller div:nth-child(6) {
        animation-delay: -0.216s;
      }
      .lds-roller div:nth-child(6):after {
        top: 68px;
        left: 24px;
      }
      .lds-roller div:nth-child(7) {
        animation-delay: -0.252s;
      }
      .lds-roller div:nth-child(7):after {
        top: 63px;
        left: 17px;
      }
      .lds-roller div:nth-child(8) {
        animation-delay: -0.288s;
      }
      .lds-roller div:nth-child(8):after {
        top: 56px;
        left: 12px;
      }
      @keyframes lds-roller {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      /* Loader 3 */

      .lds-spinner {
        color: official;
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-spinner div {
        transform-origin: 40px 40px;
        animation: lds-spinner 1.2s linear infinite;
      }
      .lds-spinner div:after {
        content: ' ';
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: var(--loader-color);
      }
      .lds-spinner div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
      }
      .lds-spinner div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
      }
      .lds-spinner div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
      }
      .lds-spinner div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
      }
      .lds-spinner div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
      }
      .lds-spinner div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
      }
      .lds-spinner div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
      }
      .lds-spinner div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
      }
      .lds-spinner div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
      }
      .lds-spinner div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
      }
      .lds-spinner div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
      }
      .lds-spinner div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
      }
      @keyframes lds-spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      /* Loader 4 */

      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-ellipsis div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: var(--loader-color);
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }
      .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
      }
      @keyframes lds-ellipsis1 {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes lds-ellipsis3 {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
      @keyframes lds-ellipsis2 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(24px, 0);
        }
      }

      @media screen and (max-width: 786px) {
        .loader-container {
          left: 40%;
        }
        .img-container img {
          width: 150px;
        }
        .center-spinner {
          left: 35px;
        }
      }
      @media screen and (max-width: 425px) {
        .loader-container {
          left: 30%;
        }
        .img-container img {
          width: 150px;
        }
        .img-container {
          margin-bottom: 5px;
        }
        .center-spinner {
          left: 28px;
        }
      }
    `,
  ],
})
export class BorxloaderComponent implements OnInit {
  loaderImage: string = 'https://i.ibb.co/tBxDhr3/logo-circle.png'; //'./assets/logo/logo-circle.png';
  loaderType: string = 'ring';
  loaderColor: string = 'black';
  @Input() config: LoaderConfig = {
    image: this.loaderImage,
    loaderType: this.loaderType,
    loaderColor: this.loaderColor,
    showImage: true,
    showBackdrop: true,
    showSpinner: true,
  };
  constructor(private elem: ElementRef) {}
  ngOnInit(): void {
    console.log(this.config.loaderColor);
    this.elem.nativeElement.style.setProperty(
      '--loader-color',
      this.config.loaderColor
    );
  }
}
interface LoaderConfig {
  image: string;
  loaderType: string;
  loaderColor: string;
  showImage: boolean;
  showSpinner: boolean;
  showBackdrop: boolean;
}
