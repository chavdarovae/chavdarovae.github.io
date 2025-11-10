import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { expand, map, Observable, timer } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'emc-image-rotator',
    standalone: true,
    templateUrl: './image-rotator.component.html',
    styleUrl: './image-rotator.component.scss',
    animations: [
        trigger('fade', [
            transition('* => *', [
                style({ opacity: 0, filter: 'blur(5px)' }),
                animate(
                    '600ms ease-in',
                    style({ opacity: 1, filter: 'blur(0px)' }),
                ),
            ]),
        ]),
    ],
    imports: [CommonModule, AsyncPipe, NgIf],
})
export class ImageRotatorComponent implements OnInit {
    @Input() imageArr: number[] = [];
    @Input() imagePath: string = 'assets/images/';
    @Input() imageType: string = 'png';

    private delays = [7400, 9300, 4100, 5800, 6480, 7500];

    currentImage$!: Observable<string>;

    ngOnInit() {
        this.currentImage$ = this.currentImage$ = timer(0).pipe(
            map(() => this.randomImage()),
            expand(() =>
                timer(this.randomDelay()).pipe(map(() => this.randomImage())),
            ),
        );
    }

    private randomImage(): string {
        if (!this.imageArr.length) {
            return '';
        }
        const i = Math.floor(Math.random() * this.imageArr.length);
        return this.imageArr[i].toString();
    }

    private randomDelay(): number {
        const i = Math.floor(Math.random() * this.delays.length);
        return this.delays[i];
    }
}
