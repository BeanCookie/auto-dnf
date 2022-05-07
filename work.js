setScreenMetrics(1080, 2400);

var isFindWay = threads.atomic(0);

function skill1() {
  if (isFindWay.get() == 0) {
    press(1560, 980, 500);
  }
}

function skill2() {
  if (isFindWay.get() == 0) {
    press(1730, 990, 500);
  }
}

function skill3() {
  if (isFindWay.get() == 0) {
    press(1900, 940, 500);
  }
}

function skill4() {
  if (isFindWay.get() == 0) {
    press(1820, 815, 500);
  }
}

function attack() {
  if (isFindWay.get() == 0) {
    press(2000, 830, 100);
  }
}

function restart() {
  if (isFindWay.get() == 0) {
    console.log('restart');
    isFindWay.getAndSet(2)

    press(2100, 200, 500);
    sleep(200);
    press(1380, 680, 500);
    setTimeout(function() {
      isFindWay.getAndSet(0)
    }, 1 * 1000)
  }
}

function findWay() {
  if (isFindWay.get() == 0) {
    console.log('find the way');
    isFindWay.getAndSet(1)
    setTimeout(function() {
      isFindWay.getAndSet(0)
    }, 8 * 1000)
    for (var i = 0; i < 2; i++) {
      press(2000, 830, 4 * 1000);
      swipe(460, 800, 440, 800, 20)
    } 
  }
}

var restartThread = threads.start(function() {
  setInterval(function() {
    restart()
  }, 15 * 1000);
});

var findWayThread = threads.start(function() {
  setInterval(function() {
    findWay()
  }, 8 * 1000);
});

let skillThread = threads.start(function() {

  setInterval(function() {
    attack();
  }, 100);

  setInterval(function() {
    skill1();
  }, 10 * 1000);
  
  setInterval(function() {
    skill2();
  }, 20 * 1000);
  
  setInterval(function() {
    skill3();
  }, 5 * 1000);
  
  setInterval(function() {
    skill4();
  }, 8 * 1000);
})