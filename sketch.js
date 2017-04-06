var b0, b1, b2, b3, b4, b5, b6, b10, b01;
var drawing;
var raid;
var spaces = [];
var buttonsEnabled;
var colorQueue = [];
var coloeQueue2 = [];
var colorVar, colorVar2;
var next, next2;
var boxes;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 255);
    raid = 404;
    createButtons();
    reseting();
    colorVar = 127;
    next = 0;
    boxes = new hardDrive1();
}

function createButtons() {
    b0 = createButton('RAID 0').size(windowWidth / 9).position(0, 0).mousePressed(done0).size((windowWidth / 9), 50);
    b1 = createButton('RAID 1').size(windowWidth / 9).position((windowWidth / 9), 0).mousePressed(done1).size((windowWidth / 9), 50);
    b2 = createButton('RAID 2').size(windowWidth / 9).position((windowWidth / 9) * 2, 0).mousePressed(done2).size((windowWidth / 9), 50);
    b3 = createButton('RAID 3').size(windowWidth / 9).position((windowWidth / 9) * 3, 0).mousePressed(done3).size((windowWidth / 9), 50);
    b4 = createButton('RAID 4').size(windowWidth / 9).position((windowWidth / 9) * 4, 0).mousePressed(done4).size((windowWidth / 9), 50);
    b5 = createButton('RAID 5').size(windowWidth / 9).position((windowWidth / 9) * 5, 0).mousePressed(done5).size((windowWidth / 9), 50);
    b6 = createButton('RAID 6').size(windowWidth / 9).position((windowWidth / 9) * 6, 0).mousePressed(done6).size((windowWidth / 9), 50);
    b10 = createButton('RAID 10').size(windowWidth / 9).position((windowWidth / 9) * 7, 0).mousePressed(done10).size((windowWidth / 9), 50);
    b01 = createButton('RAID 01').size(windowWidth / 9).position((windowWidth / 9) * 8, 0).mousePressed(done01).size((windowWidth / 9), 50);
}

function draw() {
    //	background(0,0,255);
    var numnum = 0;
    var postchar;
    var characters;
    reseting();
    if (raid != 404) {
        if (raid == 0 && (spaces.length != 0)) {
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(2);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 4; i++) {
                numnum++;
                spaces[i].raid0(numnum);
                numnum++;
                spaces[i + 7].raid0(numnum);
            }
            colorQueue = [0, 7, 1, 8, 2, 9, 3, 10];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
        } else if (raid == 1 && (spaces.length != 0)) {
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(2);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 4; i++) {
                numnum++;
                spaces[i].raid1(numnum);
                spaces[i + 7].raid1(numnum);
            }
            colorQueue = [0, 1, 2, 3];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            colorQueue2 = [7, 8, 9, 10];
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, 127, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2 += 3;
            }

        } else if (raid == 2 && (spaces.length != 0)) {
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(7);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 4; i++) {
                if (i == 0) {
                    characters = 'A ';
                }
                if (i == 1) {
                    characters = 'B ';
                }
                if (i == 2) {
                    characters = 'C ';
                }
                if (i == 3) {
                    characters = 'D ';
                }
                spaces[i].raid2('1', characters);
                spaces[i + 7].raid2('2', characters);
                spaces[i + 14].raid2('3', characters);
                spaces[i + 21].raid2('4', characters);
                spaces[i + 28].raid2('p1', characters);
                spaces[i + 35].raid2('p2', characters);
                spaces[i + 42].raid2('p3', characters);
            }
            colorQueue = [0, 7, 14, 21, 1, 8, 15, 22, 2, 9, 16, 23, 3, 10, 17, 24];
            colorQueue2 = [28, 35, 42, 29, 36, 43, 30, 37, 44, 31, 38, 45];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(colorVar2, colorVar2, 127);
                spaces[counter2].colorChange(c);
                colorVar2 += 2;
            }
        } else if (raid == 3 && (spaces.length != 0)) {
            colorQueue = [1, 2, 3, 4, 7, 8, 9, 10];
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(4);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 2; i++) {
                characters = 'A '
                numnum++;
                spaces[i].raid3(numnum, characters);
                numnum++;
                spaces[i + 7].raid3(numnum, characters);
                numnum++;
                spaces[i + 14].raid3(numnum, characters);
                if (i == 0 || i == 2) {
                    var ceturtais = "p(1-3)"
                    spaces[i + 21].raid3(ceturtais, characters);
                }
                if (i == 1 || i == 3) {
                    var ceturtais = "p(4-6)"
                    spaces[i + 21].raid3(ceturtais, characters);
                }
            }
            numnum = 0;
            for (var i = 0; i < 2; i++) {
                characters = 'B '
                numnum++;
                spaces[i + 2].raid3(numnum, characters);
                numnum++;
                spaces[i + 9].raid3(numnum, characters);
                numnum++;
                spaces[i + 16].raid3(numnum, characters);
                if (i == 0 || i == 2) {
                    var ceturtais = "p(1-3)"
                    spaces[i + 23].raid3(ceturtais, characters);
                }
                if (i == 1 || i == 3) {
                    var ceturtais = "p(4-6)"
                    spaces[i + 23].raid3(ceturtais, characters);
                }
            }
            colorQueue = [0, 7, 14, 1, 8, 15, 2, 9, 16, 3, 10, 17];
            colorQueue2 = [21, 22, 23, 24];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, colorVar2, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2++;
            }
        } else if (raid == 4 && (spaces.length != 0)) {
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(4);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 4; i++) {
                if (i == 0) {
                    characters = 'A ';
                }
                if (i == 1) {
                    characters = 'B ';
                }
                if (i == 2) {
                    characters = 'C ';
                }
                if (i == 3) {
                    characters = 'D ';
                }

                spaces[i].raid4('1', characters);
                spaces[i + 7].raid4('2', characters);
                spaces[i + 14].raid4('3', characters);
                spaces[i + 21].raid4('p', characters);
            }
            colorQueue = [0, 7, 14, 1, 8, 15, 2, 9, 16, 3, 10, 17];
            colorQueue2 = [21, 22, 23, 24];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, colorVar2, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2++;
            }
        } else if (raid == 5 && (spaces.length != 0)) {
            colorQueue = [1, 2, 3, 4, 7, 8, 9, 10];
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(4);
                spaces[i].update();
                pop();
            }
            spaces[0].raid5('1', 'A ');
            spaces[0 + 7].raid5('2', 'A ');
            spaces[0 + 14].raid5('3', 'A ');
            spaces[0 + 21].raid5('p', 'A ');
            spaces[1].raid5('1', 'B ');
            spaces[1 + 7].raid5('2', 'B ');
            spaces[1 + 14].raid5('p', 'B ');
            spaces[1 + 21].raid5('3', 'B ');
            spaces[2].raid5('1', 'C ');
            spaces[2 + 7].raid5('p', 'C ');
            spaces[2 + 14].raid5('2', 'C ');
            spaces[2 + 21].raid5('3', 'C ');
            spaces[3].raid5('p', 'D ');
            spaces[3 + 7].raid5('1', 'D ');
            spaces[3 + 14].raid5('2', 'D');
            spaces[3 + 21].raid5('3', 'D');

            colorQueue = [0, 7, 14, 1, 8, 22, 2, 16, 23, 10, 17, 24];
            colorQueue2 = [21, 15, 9, 3];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, colorVar2, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2++;
            }
        } else if (raid == 6 && (spaces.length != 0)) {
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(5);
                spaces[i].update();
                pop();
            }
            spaces[0].raid6('1', 'A ');
            spaces[0 + 7].raid6('2', 'A ');
            spaces[0 + 14].raid6('3', 'A ');
            spaces[0 + 21].raid6('p', 'A ');
            spaces[0 + 28].raid6('q', 'A ');
            spaces[1].raid6('1', 'B ');
            spaces[1 + 7].raid6('2', 'B ');
            spaces[1 + 14].raid6('p', 'B ');
            spaces[1 + 21].raid6('q', 'B ');
            spaces[1 + 28].raid6('3', 'B ');
            spaces[2].raid6('1', 'C ');
            spaces[2 + 7].raid6('p', 'C ');
            spaces[2 + 14].raid6('q', 'C ');
            spaces[2 + 21].raid6('2', 'C ');
            spaces[2 + 28].raid6('3', 'C ');
            spaces[3].raid6('p', 'D ');
            spaces[3 + 7].raid6('q', 'D ');
            spaces[3 + 14].raid6('1', 'D');
            spaces[3 + 21].raid6('2', 'D');
            spaces[3 + 28].raid6('3', 'D');
            spaces[4].raid6('q', 'E ');
            spaces[4 + 7].raid6('1', 'E ');
            spaces[4 + 14].raid6('2', 'E');
            spaces[4 + 21].raid6('3', 'E');
            spaces[4 + 28].raid6('p', 'E');

            colorQueue = [0, 7, 14, 1, 8, 29, 2, 23, 30, 17, 24, 31, 11, 18, 25];
            colorQueue2 = [21, 28, 15, 22, 9, 16, 3, 10, 4, 32];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, colorVar2, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2 += 2;
            }
        } else if (raid == 7 && (spaces.length != 0)) {
            colorQueue = [1, 2, 3, 4, 7, 8, 9, 10];
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(4);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 4; i++) {
                numnum++;
                spaces[i].raid10(numnum);
                spaces[i + 7].raid10(numnum);
                numnum++;
                spaces[i + 14].raid10(numnum);
                spaces[i + 21].raid10(numnum);
            }
            colorQueue = [0, 14, 1, 15, 2, 16, 3, 17];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            colorQueue2 = [7, 21, 8, 22, 9, 23, 10, 24];
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, 127, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2 += 3;
            }
        } else if (raid == 8 && (spaces.length != 0)) {
            for (var i = 0; i < spaces.length; i++) {
                push();
                drawing.create(4);
                spaces[i].update();
                pop();
            }
            for (var i = 0; i < 4; i++) {
                numnum++;
                spaces[i].raid01(numnum);
                spaces[i + 14].raid01(numnum);
                numnum++;
                spaces[i + 7].raid01(numnum);
                spaces[i + 21].raid01(numnum);

            }
            colorQueue = [0, 7, 1, 8, 2, 9, 3, 10];
            if (colorVar >= 255) {
                colorVar = 127;
                next++
            }
            if (next < colorQueue.length) {
                var counter = colorQueue[next];
                var c = color(colorVar, 127, colorVar);
                spaces[counter].colorChange(c);
                colorVar += 3;
            }
            colorQueue2 = [14, 21, 15, 22, 16, 23, 17, 24];
            if (colorVar2 >= 255) {
                colorVar2 = 127;
                next2++
            }
            if (next2 < colorQueue2.length) {
                var counter2 = colorQueue2[next2];
                var c = color(127, 127, colorVar2);
                spaces[counter2].colorChange(c);
                colorVar2 += 3;
            }
        }
    }
}

function reseting() {
    background(0, 0, 255);
    noStroke();
    textAlign(CENTER);
    textSize(50);
    drawing = new hardDrive();
}

function done0() {
    colorVar = 127;
    next = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 0;
    drawing.create(2);
    boxes.create1(2);
}

function done1() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 1;
    drawing.create(2);
    boxes.create1(2);
}

function done2() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 2;
    drawing.create(7);
    boxes.create1(7);
}

function done3() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 3;
    drawing.create(4);
    boxes.create1(4);
}

function done4() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 4;
    drawing.create(4);
    boxes.create1(4);
}

function done5() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 5;
    drawing.create(4);
    boxes.create1(4);
}

function done6() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 6;
    drawing.create(5);
    boxes.create1(5);
}

function done10() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 7;
    drawing.create(4);
    boxes.create1(4);
}

function done01() {
    colorVar = 127;
    next = 0;
    colorVar2 = 127;
    next2 = 0;
    if (spaces.length > 0) {
        spaces.splice(0, spaces.length);
    }
    raid = 8;
    drawing.create(4);
    boxes.create1(4);
}

function hardDrive1() {
    this.count;
    this.parts = 7;
    this.create1 = function(icount) {
        this.count = icount;
        stroke(0);
        strokeWeight(3);
        var stepX = (windowWidth / ((this.count * 2) + 1));
        var stepY = (windowHeight / 16);
        var diskCount = 0;
        for (var i = 0; i < (this.count * 2) + 1; i++) {
            if (i % 2 == 1) {
                //PABĪDĀS PA X ASI VIENU VĒRTĪBU
                translate(i * stepX, 0);
                for (var j = 0; j < this.parts; j++) {
                    //DISKA IEDAĻAS KĀ MASĪVA OBJEKTI
                    spaces.push(new Space((i * stepX), (stepY * (j + 5)), stepX, stepY));
                }
            }
        }
    };
}

function hardDrive() {
    this.count;
    this.parts = 7;
    this.create = function(icount) {
        this.count = icount;
        stroke(0);
        strokeWeight(3);
        var stepX = (windowWidth / ((this.count * 2) + 1));
        var stepY = (windowHeight / 16);
        var diskCount = 0;
        for (var i = 0; i < (this.count * 2) + 1; i++) {
            if (i % 2 == 1) {
                push();
                //PABĪDĀS PA X ASI VIENU VĒRTĪBU
                translate(i * stepX, 0);
                //LĪNIJAS VIRS DISKIEM
                line(stepX / 2, stepY * 5, stepX / 2, stepY * 4);
                for (var j = 0; j < this.parts; j++) {
                    //DISKA IEDAĻAS KĀ MASĪVA OBJEKTI
                    //    spaces.push(new Space((i * stepX), (stepY * (j + 5)), stepX, stepY));
                }
                //DISKU KĀRTAS NR
                push();
                noStroke();
                textSize(20);
                text("DISK " + diskCount, stepX / 2, stepY * 13);
                diskCount++;
                pop();
                pop();
                //SAVIENOJOŠĀ LĪNIJA un teksts
                if (raid == 7 || raid == 8) {
                    push();
                    noStroke();
                    if (raid == 7) {
                        text("RAID 1+0", windowWidth / 2, stepY * 2);
                        push();
                        textSize(20);
                        text("RAID 0", windowWidth / 2, stepY * 4);
                        text("RAID 1", stepX * 2.5, stepY * 5);
                        text("RAID 1", stepX * 6.5, stepY * 5);
                        pop();
                    } else if (raid == 8) {
                        text("RAID 0+1", windowWidth / 2, stepY * 2);
                        push();
                        textSize(20);
                        text("RAID 1", windowWidth / 2, stepY * 4);
                        text("RAID 0", stepX * 2.5, stepY * 5);
                        text("RAID 0", stepX * 6.5, stepY * 5);
                        pop();
                    }
                    pop();

                    line((stepX / 2) + stepX, (stepY * 4), (stepX / 2) + (stepX * 3), (stepY * 4));
                    line((windowWidth - ((stepX / 2) + stepX)), (stepY * 4), (windowWidth - ((stepX / 2) + (stepX * 3))), (stepY * 4));
                    line(2.5 * stepX, 4 * stepY, 2.5 * stepX, 3 * stepY);
                    line(6.5 * stepX, 4 * stepY, 6.5 * stepX, 3 * stepY);
                    line(2.5 * stepX, (stepY * 3), 6.5 * stepX, (stepY * 3));
                } else {
                    push();
                    noStroke();
                    text("RAID " + raid, windowWidth / 2, stepY * 2);
                    pop();
                    line((stepX / 2) + stepX, (stepY * 4), (windowWidth - ((stepX / 2) + stepX)), (stepY * 4));
                }
            }
        }
		//SKAIDROJUMI LEJĀ
		var w = windowWidth/9;
		var h = windowHeight/16;
		push();
		textSize(20);
		fill(255,127,255);
		rect(w,(windowHeight-2*h),w,h);
		fill(127,127,255);
		rect(w*3,(windowHeight-2*h),w,h);
		fill(255,255,127);
		rect(w*5,(windowHeight-2*h),w,h);
		fill(127,255,255);
		rect(w*7,(windowHeight-2*h),w,h);
		
		fill(0);
		noStroke();
		text('DATA',w*1.5,(windowHeight-h*1.5));
		text('COPY',w*3.5,(windowHeight-h*1.5));	
		text('ECC',w*5.5,(windowHeight-h*1.5));	
		text('PARITY',w*7.5,(windowHeight-h*1.5));
		pop();
    };
}

function check() {
    ellipse(100, 100, 100, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createButtons();
    reseting();
    if (raid != 404) {
        if (raid == 0) {
            done0();
        } else if (raid == 1) {
            done1();
        } else if (raid == 2) {
            done2();
        } else if (raid == 3) {
            done3();
        } else if (raid == 4) {
            done4();
        } else if (raid == 5) {
            done5();
        } else if (raid == 6) {
            done6();
        } else if (raid == 7) {
            done10();
        } else if (raid == 8) {
            done01();
        }
    }
}

function Space(ix, iy, ixsp, iysp) {
    this.x = ix;
    this.y = iy;
    this.spaceX = ixsp;
    this.spaceY = iysp;
    this.fillColor = color(127);

    this.update = function() {
        fill(this.fillColor);
        rect(this.x, this.y, this.spaceX, this.spaceY);
    };
    this.colorChange = function(col) {
        this.cool = col;
        this.fillColor = this.cool;
    };
    this.raid0 = function(num) {
        this.num = num;
        textSize(20);
        noStroke();
        text("A " + num, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid1 = function(num) {
        this.num = num;
        textSize(20);
        noStroke();
        text("A " + this.num, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid2 = function(postcharr, characters) {
        this.character = characters;
        this.post = postcharr;
        textSize(20);
        noStroke();
        text(this.character + this.post, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid3 = function(postcharr, characters) {
        this.character = characters;
        this.post = postcharr;
        textSize(20);
        noStroke();
        text(this.character + this.post, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid4 = function(postcharr, characters) {
        this.character = characters;
        this.post = postcharr;
        textSize(20);
        noStroke();
        text(this.character + this.post, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid5 = function(postcharr, characters) {
        this.character = characters;
        this.post = postcharr;
        textSize(20);
        noStroke();
        text(this.character + this.post, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid6 = function(postcharr, characters) {
        this.character = characters;
        this.post = postcharr;
        textSize(20);
        noStroke();
        text(this.character + this.post, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid10 = function(num) {
        this.num = num;
        textSize(20);
        noStroke();
        text("A " + this.num, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
    this.raid01 = function(num) {
        this.num = num;
        textSize(20);
        noStroke();
        text("A " + this.num, this.x + (this.spaceX / 2), this.y + (this.spaceY / 2));
    };
}