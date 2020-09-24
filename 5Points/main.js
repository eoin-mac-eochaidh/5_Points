

let Xvalues = createPoints();
let Yvalues = createPoints();
let PointValues = LoadPointArray(Xvalues,Yvalues);

/// Loads pointValues with our 5 points with X & Y Values
function LoadPointArray(a,b){
    let xx = [];
    for(x=0;x<10;x++){
        xx[x]=[a[x],b[x]];
    }
    return xx;
}


drawstuff(Xvalues,Yvalues);


// Draw stuff

function drawstuff(Pointvalues){

    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    const colourPoint = Math.ceil(Math.random()*10);


    for(x=0;x<10;x++){
        if(x===colourPoint){
        ctx.fillStyle = 'orange';
        ctx.arc(PointValues[x][0],PointValues[x][1],5,0,2*Math.PI,false);
        ctx.fill();
    }else{
        ctx.fillStyle = 'gray';
        ctx.fillRect(PointValues[x][0],PointValues[x][1],10,10);
    }
}

ctx.strokeStyle='black';
ctx.lineWidth=0.1;
ctx.beginPath();

    for(y=0;y<10;y++){
        ctx.moveTo(PointValues[colourPoint][0],PointValues[colourPoint][1]);
        ctx.lineTo(PointValues[y][0],PointValues[y][1]);
        ctx.stroke();
    }


}



///Load X & Y array with points

function createPoints(){
    let arry=[];
    for(x=0;x<10;x++){
        arry[x]=Math.ceil(Math.random()*500);
    }
    return arry;
}







