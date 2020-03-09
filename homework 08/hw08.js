class Student {
    marks = [5, 4, 4, 5];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    get getInfo(){
        return console.log(`Студент - ${this.fullName}, навчається на ${this.course} курсі в ${this.university} .`); 
    }
    
    get getMarks() {
        return console.log(this.marks); 
    }
    set setMarks(number) {
        if (this.marks === null) {
            return null;
        } else {
            return this.marks = [...this.marks.slice(0, 4), 5];
        }
    } 
    getAverageMark() {
        if (this.marks == null) {
            return null;
        } else {
            return this.marks.reduce((prevValue, value) => {
                prevValue += value;
                return prevValue;
            }, 0) / this.marks.length;
        }

    } 
    dismiss() {
        this._marks = null;
        return console.log(`студент відрахований`);
    } 
    recover() {
        this._marks = [];
        return console.log('студента зарахований');
    } 
}

let petro = new Student(`НЛТУ`, `3`, 'Петро Горобець');
petro.getInfo;
petro.getMarks;
petro.setMarks = 5;
petro.getMarks;
console.log(petro.getAverageMark());
petro.dismiss();
petro.recover();



class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        if (parseFloat(this.getAverageMark()) > 4) {
            setInterval(() => {
                this.getScholarship();
            }, 30000);
        }
    }
    getScholarship() {
        if (this.marks === null || this.getAverageMark() > 4){
            return console.log('Ви отримали 1400грн стипендії!');
        } else if(this.getAverageMark() < 4) {
            return console.log('Ви не можете отримати стипендію!');
        }
    }
}

let vasyl = new BudgetStudent('НЛТУ', 2, 'Василь Гаврилюк');
vasyl.getInfo;
vasyl.getMarks;
vasyl.getScholarship();
















