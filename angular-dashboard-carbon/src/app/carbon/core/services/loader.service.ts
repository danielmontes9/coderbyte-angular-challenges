import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LoaderService {
	private loaderSubject = new BehaviorSubject<boolean>(false);
	loading$ = this.loaderSubject.asObservable();

	constructor() {}

	setLoading(isLoading: boolean) {
		this.loaderSubject.next(isLoading);
	}
}
