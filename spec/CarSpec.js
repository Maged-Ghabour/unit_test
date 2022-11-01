
// Bounday Technique 


describe('Car', function() {

  
  
    beforeEach(function() {
      car = new Car();
   
    });
  
    it('should be invalid speed', function() {
      car.car_speed(-1);
      expect(car.value).toEqual("invalid")
    });
  
    it('should be Low', function() {
      car.car_speed(0);
      expect(car.value).toEqual("Speed Low")
    });
    it('should be Low', function() {
      car.car_speed(39);
      expect(car.value).toEqual("Speed Low")
    });
    it('should be Normal', function() {
      car.car_speed(40);
      expect(car.value).toEqual("normal")
    });
    it('should be Normal', function() {
      car.car_speed(119);
      expect(car.value).toEqual("normal")
    });
    it('should be Normal', function() {
      car.car_speed(120);
      expect(car.value).toEqual("High speed")
    });
    it('should be heigh', function() {
      car.car_speed(199);
      expect(car.value).toEqual("High speed")
    });
    it('should be v.heigh', function() {
      car.car_speed(200);
      expect(car.value).toEqual("Very High speed")
    });
    it('should be v.heigh', function() {
      car.car_speed(219);
      expect(car.value).toEqual("Very High speed")
    });
  
  
  });
  