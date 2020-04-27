var num=0;
var obj={};

function addType(){
    var divElem = document.getElementById('types');
    var newdiv = document.createElement('div');
    var inp = document.createElement('input');
    inp.id = 'type' + num;
    inp.className = 'form-control';
    inp.placeholder = 'Type ' + num;
    var inp1 = document.createElement('input');
    inp1.id = 'value' + num;
    inp1.className = 'form-control';
    inp1.placeholder = 'Values of ' + num;
    newdiv.appendChild(inp);
    newdiv.appendChild(document.createElement('br'));
    newdiv.appendChild(inp1);
    newdiv.className = 'form-group';
    divElem.insertBefore(newdiv, divElem.childNodes[num]);
    divElem.style.display = 'block';
    num+=1;
}

function getValues(){
    alert("called");
    var typeVaule=[];
    var objJson=[];
    var i,j,x;
    var count=1;
    for(i=0;i<num;i++){
        x={};
        x.type = document.getElementById('type' + i).value;
        x.values = document.getElementById('value' + i).value.split(',');
        count = count * x.values.length;
        typeVaule.push(x);
        // console.log(obj.typeVaule);
    }
    obj.typeVaule=typeVaule;
    // console.log(obj.typeVaule);
    var y=1;
    for(i=0;i<typeVaule.length;i++){
        y*=typeVaule[i].values.length;
        var dum=0;
        for(j=0;j<count;j++){
            if(j%(count/y)==0){
                dum+=1;
                if(dum==typeVaule[i].values.length){
                    dum=0;
                }
            }
        // console.log()
            if(objJson[j]==undefined){
                x={};
                x[typeVaule[i].type]=typeVaule[i].values[dum];
                objJson.push(x);
            }
            else{
                objJson[j][typeVaule[i].type]=typeVaule[i].values[dum];
        // console.log(objJson);
            }
        }
    }
    // console.log(objJson,obj);
    obj.objJson=objJson;
    var newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    var key = Object.keys(obj.objJson[0]);
    for (i = 0; i < count; i++) {
        var newDiv1 = document.createElement('div');
        var lab = document.createElement('label');
        lab.setAttribute('for', 'val' + i);
        var inp1 = document.createElement('input');
        inp1.name = 'val' + i;
        inp1.id = 'val' + i;
        inp1.value = 0;
        inp1.className = 'form-control';
        for (j = 0; j < key.length; j++) {
            if (j == 0) {
                lab.innerHTML = obj.objJson[i][key[j]];
            } else {
                lab.innerHTML = lab.innerHTML + '/' + obj.objJson[i][key[j]];
            }
        }
        newDiv1.appendChild(lab);
        newDiv1.appendChild(inp1);
        newDiv.appendChild(newDiv1);
    }
    var btn=document.createElement('input');
    btn.type="button";
    btn.value="output";
    btn.setAttribute('onclick', 'priceAdd()');
    newDiv.appendChild(btn);
    // console.log(obj.objJson);
}
function priceAdd(){
    for (i = 0; i < obj.objJson.length; i++) {
        obj.objJson[i].Price = parseInt(document.getElementById('val' + i).value);
    }
}

function display() {
    console.log(obj);
    // var i;
    // for(i=0;i<obj.varientDetails.length;i++){
    document.getElementById("Display").innerHTML=JSON.stringify(obj.objJson);
    // }
}