var Body = {
    setColor:function(color){
        document.querySelector('body').style.color =color;
    },
    setBackColor:function(color) {
        document.querySelector('body').style.backgroundColor =color;
    }
}

var Links = {
    setColor:function(color) {
    var hyperlink = document.querySelectorAll('a');
    var i=0;
    while(i<hyperlink.length) {
        hyperlink[i].style.color = color;
        i = i+1;
        }
    //$('a').css('color', color);
    }
}

function nightDayhandler(self) {
    var target = document.querySelector('body');
    if (self.value==='night'){
        Body.setBackColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('yellow');
    }
    else {
        Body.setBackColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');    
    }
}