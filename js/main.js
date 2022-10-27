
    let candEnglish = document.getElementById('eng');
    let candChemistry = document.getElementById('chem');
    let candPhysics = document.getElementById('phy');
    let candBiology = document.getElementById('bio');
    let candFurtherMath = document.getElementById('fma');
    let candSitting = document.getElementById('num');
    let candJambscore = document.getElementById('jutme');
    let candPutmescore = document.getElementById('putme');
    let candfullName = document.getElementById('fn');
    let candEmail =  document.getElementById('em');
    let candphoneNumber = document.getElementById('ph');
    let submit = document.getElementById('btn');
     
      /*candScore = 100
      if(candScore >= 80 ){
        docuemt.write('you have a merit score');
      }
      elseif(candScore <= 79){
        document.write('you re on a concensioning list');

      }
      elseif(candScore <= 74){
        document.write('you have a catching score');
      }
      elseif(canndScore <= 64){
        document.write('you have a vc list');
      }
      else{
        document.write('You re not qualified');
      }
     } */

     function details(candfullName, candEmail, candSitting, candJambscore, candPutmescore, olevel,) {
      this.name = name
      this.utme = utme
      this.putme = putme
      this.noOfSittigs = sittings
      this.state = state
      this.olevel = olevel
      this.olevelScores = olevel.map(function (grade) {
        if (grade === 'A1') {
          return 10
        }
        if (grade === 'B2') {
          return 9
        }
        if (grade === 'B3') {
          return 8
        }
        if (grade === 'C4') {
          return 7
        }
        if (grade === 'C5') {
          return 6
        }
        if (grade === 'C6') {
          return 5
        }
        if (grade === 'D7') {
          return 4
        }
        if (grade === 'E8') {
          return 3
        }
        if (grade === 'F9') {
          return 0
        }
      })
      this.gradeScore =
        (this.olevelScores.reduce(function (a, b) {
          return a + b
        }) /
          50) *
        30
      this.totalscore = this.utme / 8 + this.putme + this.gradeScore
      this.isAllCredits = this.olevelScores.every(function (score) {
        return score >= 5
      })
    
      this.verify = function () {
        if (this.utme < 180) {
          document.write('you failed!')
          
        }
        else if (this.putme < 12) {
          document.write('you didnt meet the cuttoff mark')
          return
        }
        else if (this.noOfSittigs !== 1) {
          document.write('failed!!!')
        //   window.alert('you are requred to submit only one sitting')
        
        }
        else if (this.isAllCredits == false) {
           document.write('you are requred to have at least c6 in all subjects')
          
        }
        else if (this.totalscore >= 80 && this.totalscore <= 100) {
           document.write('congratulations, you have gained admission by merit')
          
        }
        if (this.totalscore >= 75 && this.totalscore <= 79) {
           document.write('congratulations, you have gained admission by consensure')
          
        }
        else if (this.totalscore >= 65 && this.totalscore <= 74) {
          document.write('congratulations, you have gain admission by VC list')
        } else {
          document.write('please input your details')
        }
      }
    }
    
    function checkAmission() {
      let array = []
      for (grade of olevel) {
        array.push(grade.value)
      }
      let candidate = new details(
        sname.value,
        fname.value,
        parseInt(sittings.value),
        parseInt(utme.value),
        parseInt(putme.value),
        array
      )
      document.write(submit)
      submit.verify()
    }
