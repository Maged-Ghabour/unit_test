class Car {
 
    car_speed(speed) {

      if(speed < 0)
      {
         this.value = "Invalid";
      }else if (speed >= 0 && speed < 40)
      {
        this.value = "Low"
      }else if (speed >= 40 && speed < 120)
      {
        this.value = "Normal"
      }else if (speed >= 120 && speed < 200)
      { 
        this.value = "High"
      }else if (speed >= 200 && speed < 220)
      {
        this.value = "Very High"
      }else if (speed >= 220)
      {
        this.value = "Invalid"
      }
    }
}

