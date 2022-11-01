class Car {

    car_speed(speed){

        if(speed < 0 )
            this.value = "invalid";
        else if (speed >=  0 && speed <40){
            this.value = "Speed Low"
        }
        else if(speed >=  40 && speed <120){
            this.value = "normal";
        }else if (speed >=  120 && speed <200){
            this.value = "High speed"
        }else if (speed >=  200 && speed <220){
            this.value = "Very High speed"
        }
    }

}