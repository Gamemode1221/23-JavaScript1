let student = {
    name : "Doremi",
    score : {
        history : 85,
        science : 94,
        average() {
            return (this.history + this.science) / 2;
        }
    }
}

let history = student.score.history;
student.score.average();