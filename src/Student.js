class Student {

    score(score){
        if(score < 0 )
            this.level = "invalid";
        else if (score >=  0 && score <50){
            this.level = "failed"
        }
        else if(score >=  50 && score <65){
            this.level = "normal";
        }else if (score >=  65 && score < 75){
            this.level = "passed"
        }else if (score >=  75 && score < 85){
            this.level = "good"
        }else if (score >=  85 && score <100){
            this.level = "v.good"
        }else if ( score > 100){
            this.level = "Shall be in"
        
    }


}
}
    