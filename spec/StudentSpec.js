
// Equivilance Technique 

describe('Student', function() {
   
  
  
    beforeEach(function() {
       student = new Student();
   
    });


    
  
    it('should be invalid ', function() {
      student.score(-1);
      expect(student.level).toEqual("invalid")
    });
  
    it('should be failed', function() {
      student.score(25);
      expect(student.level).toEqual("failed")
    });

    it('should be normal', function() {
      student.score(55);
      expect(student.level).toEqual("normal")
    });


    it('should be passed', function() {
      student.score(70);
      expect(student.level).toEqual("passed")
    });

    it('should be good', function() {
      student.score(80);
      expect(student.level).toEqual("good")
    });


    it('should be very good', function() {
      student.score(90);
      expect(student.level).toEqual("v.good")
    });


    it('should  be in', function() {
      student.score(120);
      expect(student.level).toEqual("Shall be in")
    });
 
  
  
  });
  