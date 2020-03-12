class Student {
    marks = [5, 4, 4, 5];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    get getInfo(){
        return console.log('інформація про студента : ', `Студент - ${this.fullName}, навчається на ${this.course} курсі в ${this.university} .`); 
    }
    
    get getMarks() {
        return this.marks;
    }
    set setMarks(value) {
        if (this.marks !== null) {
            this.marks = [...this.marks, value];
            return this.marks;
        } else {
            return null;
        }
    }

    getAverageMark() {
        let sum = 0;
        for(let i = 0; i<this.marks.length;i++){
            sum+=this.marks[i];
        }
        return sum / this.marks.length;
    }

    dismiss() {
        this.marks === null;
        return console.log(`студент відрахований`);
    } 
    recover() {
        if(this.marks === null) {
            return (this.marks = []);
        } else {
        return console.log('студента зарахований');
        } 
    }
}

let petro = new Student(`НЛТУ`, `3`, 'Петро Горобець');
petro.getInfo;
console.log(petro.getMarks);
petro.setMarks = 5;
console.log(petro.getMarks);
console.log('середня оцінка :', petro.getAverageMark());
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
















