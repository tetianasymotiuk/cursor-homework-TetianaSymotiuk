class Student {
    marks = [5, 4, 4, 5];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.dismissed = false;
    }
    get getInfo(){
        return console.log('інформація про студента : ', `Студент - ${this.fullName}, навчається на ${this.course} курсі в ${this.university} .`); 
    }
    
    get getMarks() {
        if(this.isOpenSomeFlag) {
            return null;
        }else{
        return console.log('get marks : ',this.marks)};
    }
    
    set setMarks(value) {
        if (this.dismissed) {
            return null;
        } else {
            return console.log('set marks : ',this.marks = [...this.marks, value]);
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
        this.dismissed = true;
        return console.log(`студент відрахований`);
    } 
    recover() {
        this.dismissed = false;
        return console.log('студента зарахований');
    } 
}

let petro = new Student(`НЛТУ`, `3`, 'Петро Горобець');
petro.getInfo;
petro.getMarks;
petro.setMarks = 5;
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

















