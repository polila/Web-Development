class Media {
	constructor(title) {
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}
	get title() {
		return this._title;
	}
	get isCheckedOut() {
		return this._isCheckedOut;
	}
	get ratings() {
		return this._ratings;
	}
	set isCheckedOut(args) {
		this._isCheckedOut = args;
	}
	toggleCheckOutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
	}
	getAverageRating() {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return ((this._ratings.reduce(reducer)) / this._ratings.length);
	}
	addRating(newRating) {
		if (1 <= newRating && newRating <= 5) {
			this._ratings.push(newRating);
		}
	}
}

class Book extends Media {
	constructor(author, title, pages) {
		super(title);
		this._author = author;
		this._title = title;
		this._pages = pages;
	}
	get author() {
		return this._author;
	}
	get pages() {
		return this._pages;
	}
}

class Movie extends Media {
	constructor(director, title, runTime) {
		super(title);
		this._director = director;
		this._runTime = runTime;	
	}
	get director() {
		return this._director;
	}
	get runTime() {
		return this._runTime;
	}
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.isCheckedOut = speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

class CD extends Media {
	constructor(artist, title, songs) {
		super(title);
		this._artist = artist;
		this._songs = songs
	}
	get artist() {
		return this._artist;
	}
	get songs() {
		return this._songs;
	}
	shuffle() {
		const shuffleArray = arr => arr
		  .map(a => [Math.random(), a])
		  .sort((a, b) => a[0] - b[0])
		  .map(a => a[1]);

		 return shuffleArray(this._songs);
	}
}