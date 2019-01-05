class School {
	constructor(name, level, numberOfStudents, averageTestScores, schoolOverview) {
		this._name = name;
		this._level = level;
		this._numberOfStudents = numberOfStudents;
		this._averageTestScores = averageTestScores;
		this._schoolOverview = schoolOverview;
	}
	get name() {
		return this._name;
	}
	get level() {
		return this._level;
	}
	get numberOfStudents() {
		return this._numberOfStudents;
	}
	get averageTestScores() {
		return this._averageTestScores;
	}
	get schoolOverview() {
		return this._schoolOverview;
	}
	set numberOfStudents(newNumberOfStudents) {
		if (typeof newNumberOfStudents === "number") {
			this._numberOfStudents = newNumberOfStudents;
		} else {
			console.log("Invalid input: Must be set to a number.")
		}
	}
	quickFacts() {
		console.log(this._name + " educates " + this._numberOfStudents + " students at the " + this._level + " school level.");
	}
	static pickSubstituteTeacher(substituteTeachers) {
		const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
		const teacher = substituteTeachers[randomTeacher];
		console.log(teacher);
		return teacher;
	}
}

class PrimarySchool extends School {
	constructor(name, numberOfStudents, pickupPolicy, averageTestScores, schoolOverview) {
		super(name);
		this._numberOfStudents = numberOfStudents;
		this._pickupPolicy = pickupPolicy;
		this._level = "primary";
	}
	set pickupPolicy(policy) {
		this._pickupPolicy = policy;
	}
	get pickupPolicy() {
		return this._pickupPolicy;
	}
}

class HighSchool extends School {
	constructor(name, numberOfStudents, sportsTeams, averageTestScores, schoolOverview) {
		super(name);
		this._numberOfStudents = numberOfStudents;
		this._sportsTeams = sportsTeams;
		this._level = "high";
	}
	set sportsTeams(teams) {
		this._sportsTeams = teams;
	}
	get sportsTeams() {
		return this._sportsTeams;
	}
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);


