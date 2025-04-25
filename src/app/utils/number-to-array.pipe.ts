import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rangePipe'
})
export class RangePipe implements PipeTransform {
	transform(value: number): number[] {
		if (value < 1) return [];
		return Array.from({ length: value }, (_, i) => i + 1);
	}
}
