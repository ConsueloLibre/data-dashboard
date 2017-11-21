/*
 * Funcionalidad de tu producto
 */
//graficos//


//graficos index//

google.load('visualization', '1.0',{'packages':['corechart']});

    	google.setOnLoadCallback(drawChart);

    	       function drawChart() {

            // Create the data table.
            var data4 = new google.visualization.DataTable();
            data4.addColumn('string', 'N° headquarters');
            data4.addColumn('number', '262 Students');
            data4.addRows([
              ['Arequipa', 62],
              ['Mexico', 60],
              ['Santiago', 80],
              ['Lima', 60],

            ]);
            // Create the data table.
            var data5 = new google.visualization.DataTable();
            data5.addColumn('string', 'headquarters');
            data5.addColumn('number', 'TECH');
            data5.addColumn('number', 'HSE')
            data5.addRows([
              ['Arequipa', 1799, 1198],
              ['Mexico', 1605, 924],
              ['Santiago', 1346, 771],
              ['Lima', 901, 600],

            ]);

            var data6 = new google.visualization.DataTable();
            data6.addColumn('string', 'Headquarters');
            data6.addColumn('number', 'Porcent');

            data6.addRows([
              ['Arequipa', 70],
              ['Mexico', 65],
              ['Santiago', 90],
              ['Lima', 85],

            ]);




             var options4 = {'title':'Total Of Current Students',
                           'width':400,
                           'height':300,
                           'colors':['rgb(248,170,28)']};
            // Set chart options
            var options5 = {'title':'AVERAGE TECH SKILLS & HSE',
                           'width':400,
                           'height':300,
                           'colors':['rgb(255,255,45)','rgb(255,153,0)']};
            // Set chart options
            var options6 = {'title':'ASSISTANCE',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)']};



            // Instantiate and draw our chart, passing in some options.
            var cont1 = new google.visualization.ColumnChart(document.getElementById('cont1'));
            cont1.draw(data4, options4);
            var cont4 = new google.visualization.BarChart(document.getElementById('cont_div4'));
            cont4.draw(data5, options5);
            var cont5 = new google.visualization.BarChart(document.getElementById('cont_div5'));
            cont5.draw(data6, options6);

}
  google.load('visualization', '1.0',{'packages':['corechart']});
            google.setOnLoadCallback(draw);

                function draw() {
            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Students');
            data.addColumn('number', 'Porcent');
            data.addRows([
              ['AM', 80],
              ['PM', 60],

            ]);
            // Create the data table.
            var data2 = new google.visualization.DataTable();
            data2.addColumn('string', 'Students');
            data2.addColumn('number', 'Points TECH');
            data2.addColumn('number', 'Points HSE')
            data2.addRows([
              ['AM', 1590, 1700],
              ['PM', 1600, 1500],

            ]);

            var data3 = new google.visualization.DataTable();
            data3.addColumn('string', 'Students');
            data3.addColumn('number', 'YES');
            data3.addColumn('number', 'NO');
            data3.addRows([
              ['AM', 80, 20],
              ['PM', 85, 15],

            ]);

            // Set chart options
            var options = {'title':'70% Approval',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options2 = {'title':'TECH v/s HSE',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options3 = {'title':'Estudents Satisfaction',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)','rgb(255,255,95)']};
           // Instantiate and draw our chart, passing in some options.
            var cont = new google.visualization.PieChart(document.getElementById('cont'));
            cont.draw(data, options);
            var cont2 = new google.visualization.BarChart(document.getElementById('cont_div2'));
            cont2.draw(data2, options2);
            var cont3 = new google.visualization.LineChart(document.getElementById('cont_div3'));
            cont3.draw(data3, options3);

          }

  google.load('visualization', '1.0',{'packages':['corechart']});
            google.setOnLoadCallback(chart);

                function chart() {
            // Create the data table.
            var data7 = new google.visualization.DataTable();
            data7.addColumn('string', 'Students');
            data7.addColumn('number', 'Porcent');
            data7.addRows([
              ['AM', 80],
              ['PM', 60],

            ]);
            // Create the data table.
            var data8 = new google.visualization.DataTable();
            data8.addColumn('string', 'Students');
            data8.addColumn('number', 'Points TECH');
            data8.addColumn('number', 'Points HSE')
            data8.addRows([
              ['AM', 1590, 1700],
              ['PM', 1600, 1500],

            ]);

            var data9 = new google.visualization.DataTable();
            data9.addColumn('string', 'Estudents');
            data9.addColumn('number', 'YES');
            data9.addColumn('number', 'NO');
            data9.addRows([
              ['AM', 80, 20],
              ['PM', 85, 15],

            ]);

            // Set chart options
            var options7 = {'title':'70% Approval',
                           'width':400,
                           'height':300,
                          'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options8 = {'title':'TECH v/s HSE',
                           'width':400,
                           'height':300,
                          'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options9 = {'title':'Estudents Satisfaction',
                           'width':400,
                           'height':300,
                          'colors':['rgb(248,170,28)','rgb(255,255,95)']};
           // Instantiate and draw our chart, passing in some options.
            var contt2 = new google.visualization.ColumnChart(document.getElementById('cont2'));
            contt2.draw(data7, options7);
            var cont7 = new google.visualization.BarChart(document.getElementById('cont_div7'));
            cont7.draw(data8, options8);
            var cont8 = new google.visualization.PieChart(document.getElementById('cont_div8'));
            cont8.draw(data9, options9);

}

  google.load('visualization', '1.0',{'packages':['corechart']});
            google.setOnLoadCallback(dr);

            function dr() {
            // Crear la tabla de datos.//
            var data10 = google.visualization.arrayToDataTable([
            ['SPRINT', 'Points'],
            [1, 905], [2, 1355], [3, 1783]
           ]);
            // Crear la tabla de datos.//
            var data11 = google.visualization.arrayToDataTable([
            ['SPRINT', 'Points'],
            [1, 602], [2, 888], [3, 1182]
           ]);
            // Crear la tabla de datos.//
            var data12 = new google.visualization.DataTable();
            data12.addColumn('string', 'Sprint');
            data12.addColumn('number', 'Porcent');

            data12.addRows([
              ['SPRINT 1', 73],
              ['SPRINT 2', 80],
              ['SPRINT 3', 42],

            ]);

            var data13 = google.visualization.arrayToDataTable([
              ['Sprint', 'Rating'],
              ['1',  4.2,],
              ['2',  4.6],
              ['3',  4.6],

           ]);
            var data14 = google.visualization.arrayToDataTable([
              ['Sprint', 'Rating'],
              ['1',  4.5,],
              ['2',  4.4],
              ['3',  4.1],

           ]);

            // Opciones del grafico
            var options10 = {title: 'TECH POINTS',
                          'colors':['rgb(255,255,45)','rgb(255,153,0)'],
                          hAxis: {title: 'SPRINT', minValue: 0, maxValue: 3},
                          vAxis: {title: 'Points', minValue: 905, maxValue: 1783},
                          trendlines: {
                          0: {
                          type: 'exponential',
                          visibleInLegend: true,
                          }
                    }
             };
            // Opciones del grafico
            var options11 = {title: 'HSE POINTS',
                          'colors':['rgb(255,255,45)','rgb(255,153,0)'],
                          hAxis: {title: 'SPRINT', minValue: 0, maxValue: 3},
                          vAxis: {title: 'Points', minValue: 602, maxValue: 1182},
                          trendlines: {
                          0: {
                          type: 'exponential',
                          visibleInLegend: true,
                          }
                    }
             };
            // Opciones del grafico
            var options12 = {'title':'70% Approval',
                           'width':400,
                           'height':300,
                         'colors':['rgb(255,255,45)','rgb(255,153,0)']};


             var options13= {title: 'Teacher Rating',
                            hAxis: {title: 'Sprint',  titleTextStyle: {color: '#000'}},
                            vAxis: {minValue: 0},
                            'colors':['rgb(255,255,45)','rgb(255,153,0)']
            };

            var options14= {title: 'Jedi Master Rating',
                            hAxis: {title: 'Sprint',  titleTextStyle: {color: '#000'}},
                            vAxis: {minValue: 0},
                            'colors':['rgb(255,255,45)','rgb(255,153,0)']
            };

           // dibujando graficos y otorgandoles la info de la data y las opciones anteriormente establecidas//
            var cont4 = new google.visualization.ScatterChart(document.getElementById('cont4'));
            cont4.draw(data10, options10);
            var cont12 = new google.visualization.ScatterChart(document.getElementById('cont_div12'));
            cont12.draw(data11, options11);
            var cont13 = new google.visualization.ColumnChart(document.getElementById('cont_div13'));
            cont13.draw(data12, options12);
            var cont14 = new google.visualization.ColumnChart(document.getElementById('cont_div14'));
            cont14.draw(data13, options13);
             var cont15 = new google.visualization.ColumnChart(document.getElementById('cont_div15'));
            cont15.draw(data14, options14);
}

  google.load('visualization', '1.0',{'packages':['corechart']});
            google.setOnLoadCallback(dra);

            function dra() {
            // Crear la tabla de datos.//
            var data15 = google.visualization.arrayToDataTable([
            ['SPRINT', 'Points'],
            [1, 905], [2, 1365], [3, 1790]
           ]);
            // Crear la tabla de datos.//
            var data16 = google.visualization.arrayToDataTable([
            ['SPRINT', 'Points'],
            [1, 600], [2, 888], [3, 1197]
           ]);
            // Crear la tabla de datos.//
            var data17 = new google.visualization.DataTable();
            data17.addColumn('string', 'Sprint');
            data17.addColumn('number', 'Porcent');

            data17.addRows([
              ['SPRINT 1', 63],
              ['SPRINT 2', 70],
              ['SPRINT 3', 32],

            ]);

            var data18 = google.visualization.arrayToDataTable([
              ['Sprint', 'Rating'],
              ['1',  3.9,],
              ['2',  4.0],
              ['3',  4.6],

           ]);
            var data19 = google.visualization.arrayToDataTable([
              ['Sprint', 'Rating'],
              ['1',  4.8,],
              ['2',  4.8],
              ['3',  4.3],

           ]);

            // Opciones del grafico
            var options15 = {title: 'TECH POINTS',
                          'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                          hAxis: {title: 'SPRINT', minValue: 0, maxValue: 3},
                          vAxis: {title: 'Points', minValue: 905, maxValue: 1783},
                          trendlines: {
                          0: {
                          type: 'exponential',
                          visibleInLegend: true,

                          }
                    }
             };
            // Opciones del grafico
            var options16 = {title: 'HSE POINTS',
                          'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                          hAxis: {title: 'SPRINT', minValue: 0, maxValue: 3},
                          vAxis: {title: 'Points', minValue: 602, maxValue: 1182},
                          trendlines: {
                          0: {
                          type: 'exponential',
                          visibleInLegend: true,
                          }
                    }
             };
            // Opciones del grafico
            var options17 = {'title':'70% Approval',
                           'width':400,
                           'height':300,
                         'colors':['rgb(255,255,45)','rgb(165,167,145)']};


             var options18= {title: 'Teacher Rating',
                            'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                            hAxis: {title: 'Sprint',  titleTextStyle: {color: '#000'}},
                            vAxis: {minValue: 0}
            };

            var options19= {title: 'Jedi Master Rating',
                            'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                            hAxis: {title: 'Sprint',  titleTextStyle: {color: '#000'}},
                            vAxis: {minValue: 0}
            };

           // dibujando graficos y otorgandoles la info de la data y las opciones anteriormente establecidas//
            var cont5 = new google.visualization.ScatterChart(document.getElementById('cont5'));
            cont5.draw(data15, options15);
            var cont16 = new google.visualization.ScatterChart(document.getElementById('cont_div16'));
            cont16.draw(data16, options16);
            var cont17 = new google.visualization.ColumnChart(document.getElementById('cont_div17'));
            cont17.draw(data17, options17);
            var cont18 = new google.visualization.ColumnChart(document.getElementById('cont_div18'));
            cont18.draw(data18, options18);
             var cont19 = new google.visualization.ColumnChart(document.getElementById('cont_div19'));
            cont19.draw(data19, options19);

}

google.load('visualization', '1.0',{'packages':['corechart']});
            google.setOnLoadCallback(cha);

            function cha() {
            // Crear la tabla de datos.//
            var data20 = google.visualization.arrayToDataTable([
            ['SPRINT', 'Points'],
            [1, 900], [2, 1365], [3, 1798]
           ]);
            // Crear la tabla de datos.//
            var data21 = google.visualization.arrayToDataTable([
            ['SPRINT', 'Points'],
            [1, 609], [2, 900], [3, 1196]
           ]);
            // Crear la tabla de datos.//
            var data22 = new google.visualization.DataTable();
            data22.addColumn('string', 'Sprint');
            data22.addColumn('number', 'Porcent');

            data22.addRows([
              ['SPRINT 1', 65],
              ['SPRINT 2', 74],
              ['SPRINT 3', 32],

            ]);

            var data23 = google.visualization.arrayToDataTable([
              ['Sprint', 'Rating'],
              ['1',  4.6,],
              ['2',  4.4],
              ['3',  4.8],

           ]);
            var data24 = google.visualization.arrayToDataTable([
              ['Sprint', 'Rating'],
              ['1',  4.9,],
              ['2',  4.9],
              ['3',  4.5],

           ]);

            // Opciones del grafico
            var options20 = {title: 'TECH POINTS',
                          'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                          hAxis: {title: 'SPRINT', minValue: 0, maxValue: 3},
                          vAxis: {title: 'Points', minValue: 905, maxValue: 1783},
                          trendlines: {
                          0: {
                          type: 'exponential',
                          visibleInLegend: true,
                          }
                    }
             };
            // Opciones del grafico
            var options21 = {title: 'HSE POINTS',
                          'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                          hAxis: {title: 'SPRINT', minValue: 0, maxValue: 3},
                          vAxis: {title: 'Points', minValue: 602, maxValue: 1182},
                          trendlines: {
                          0: {
                          type: 'exponential',
                          visibleInLegend: true,
                          }
                    }
             };
            // Opciones del grafico
            var options22 = {'title':'70% Approval',
                           'width':400,
                           'height':300,
                         'colors':['rgb(255,255,45)','rgb(165,167,145)']};


             var options23= {title: 'Teacher Rating',
                            'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                            hAxis: {title: 'Sprint',  titleTextStyle: {color: '#000'}},
                            vAxis: {minValue: 0}
            };

            var options24= {title: 'Jedi Master Rating',
                            'colors':['rgb(255,255,45)','rgb(165,167,145)'],
                            hAxis: {title: 'Sprint',  titleTextStyle: {color: '#000'}},
                            vAxis: {minValue: 0}
            };

           // dibujando graficos y otorgandoles la info de la data y las opciones anteriormente establecidas//
            var cont6 = new google.visualization.ScatterChart(document.getElementById('cont6'));
            cont6.draw(data20, options20);
            var cont20 = new google.visualization.ScatterChart(document.getElementById('cont_div20'));
            cont20.draw(data21, options21);
            var cont21 = new google.visualization.ColumnChart(document.getElementById('cont_div21'));
            cont21.draw(data22, options22);
            var cont22 = new google.visualization.ColumnChart(document.getElementById('cont_div22'));
            cont22.draw(data23, options23);
            var cont22 = new google.visualization.ColumnChart(document.getElementById('cont_div23'));
            cont22.draw(data24, options24);

}



// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);//
//para sacar los datos de activos e inactivos//
/*
var cont_estudents= document.getElementById('container6');

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
 var info= data.SCL['2017-2'].students[i].name;
 //var text= document.createTextNode(info);
 //container6.appendChild(text);

  console.log(data.SCL['2017-2'].students[i].name);

  container6.innerHTML += '<p>La estudiante número ' + [i+1] + ' es: ' + data.SCL['2017-2'].students[i].name + '</p>'; 
}

var info2= data.SCL['2017-2'].students[i].photo;
for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
container6.innerHTML += '<p>La estudiante número ' + [i+1] + ' es: ' + data.SCL['2017-2'].students[i].photo + '</p>'; 
  console.log(data.SCL['2017-2'].students[i].photo)
}

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {

  console.log(data.SCL['2017-2'].students[i].active)
}

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {

  console.log(data.SCL['2017-2'].students[i].sprints)
}
*/
//input//
var contene=document.getElementById('container6');
var con= document.createElement('div');
con.setAttribute('class', 'newDiv');
var input= document.createElement('input');
input.setAttribute('placeholder', 'Search...');
container6.appendChild(con);
con.appendChild(input);

//alumnas//
var newCont= document.createElement('div');
newCont.setAttribute('class', 'nuevo');
var foto= document.createElement("img");
foto.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto.classList.add('class', 'foto');
var divText= document.createElement('div');
divText.setAttribute('class', 'divtext');
var texto= document.createTextNode('Name: Melany Brougham');
var divText1= document.createElement('div');
divText1.setAttribute('class', 'divtext1');
var textoo= document.createTextNode('Active: False Assistance: 0%');
container6.appendChild(newCont);
newCont.appendChild(foto);
divText.appendChild(texto);
divText1.appendChild(textoo);
newCont.appendChild(divText);
newCont.appendChild(divText1);

var newCont2= document.createElement('div');
newCont2.setAttribute('class', 'nuevo2');
var foto2= document.createElement("img");
foto2.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto2.classList.add('class', 'foto2');
var divText2= document.createElement('div');
divText2.setAttribute('class', 'divtext2');
var texto2= document.createTextNode('Name: Flore Ibbitt');
var divText3= document.createElement('div');
divText3.setAttribute('class', 'divtext3');
var texto3= document.createTextNode('Active: True Assistance: 90%');


container6.appendChild(newCont2);
newCont2.appendChild(foto2);
divText2.appendChild(texto2);
divText3.appendChild(texto3);
newCont2.appendChild(divText2);
newCont2.appendChild(divText3);

var newCont3= document.createElement('div');
newCont3.setAttribute('class', 'nuevo3');
var foto3= document.createElement("img");
foto3.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto3.classList.add('class', 'foto3');
var divText4= document.createElement('div');
divText4.setAttribute('class', 'divtext4');
var texto4= document.createTextNode('Name: Emilia Elldred');
var divText5= document.createElement('div');
divText5.setAttribute('class', 'divtext5');
var texto5= document.createTextNode('Active: True Assistance: 80%');


container6.appendChild(newCont3);
newCont3.appendChild(foto3);
divText4.appendChild(texto4);
divText5.appendChild(texto5);
newCont3.appendChild(divText4);
newCont3.appendChild(divText5);

var newCont4= document.createElement('div');
newCont4.setAttribute('class', 'nuevo4');
var foto4= document.createElement("img");
foto4.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto4.classList.add('class', 'foto4');
var divText6= document.createElement('div');
divText6.setAttribute('class', 'divtext6');
var texto7= document.createTextNode('Name: Emilia Elldred');
var divText7= document.createElement('div');
divText7.setAttribute('class', 'divtext7');
var texto8= document.createTextNode('Active: True Assistance: 80%');


container6.appendChild(newCont4);
newCont4.appendChild(foto4);
divText6.appendChild(texto7);
divText7.appendChild(texto8);
newCont4.appendChild(divText6);
newCont4.appendChild(divText7);

var newCont5= document.createElement('div');
newCont5.setAttribute('class', 'nuevo5');
var foto5= document.createElement("img");
foto5.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto5.classList.add('class', 'foto5');
var divText8= document.createElement('div');
divText8.setAttribute('class', 'divtext9');
var texto9= document.createTextNode('Name: Emilia Elldred');
var divText9= document.createElement('div');
divText9.setAttribute('class', 'divtext10');
var texto10= document.createTextNode('Active: True Assistance: 80%');


container6.appendChild(newCont5);
newCont5.appendChild(foto5);
divText8.appendChild(texto9);
divText9.appendChild(texto10);
newCont5.appendChild(divText8);
newCont5.appendChild(divText9);

var newCont6= document.createElement('div');
newCont6.setAttribute('class', 'nuevo6');
var foto6= document.createElement("img");
foto6.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto6.classList.add('class', 'foto6');
var divText11= document.createElement('div');
divText11.setAttribute('class', 'divtext11');
var texto12= document.createTextNode('Name: Emilia Elldred');
var divText12= document.createElement('div');
divText12.setAttribute('class', 'divtext12');
var texto13= document.createTextNode('Active: True Assistance: 80%');


container6.appendChild(newCont6);
newCont6.appendChild(foto6);
divText11.appendChild(texto12);
divText12.appendChild(texto13);
newCont6.appendChild(divText11);
newCont6.appendChild(divText12);

var newCont7= document.createElement('div');
newCont7.setAttribute('class', 'nuevo7');
var foto7= document.createElement("img");
foto7.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto7.classList.add('class', 'foto7');
var divText13= document.createElement('div');
divText13.setAttribute('class', 'divtext13');
var texto14= document.createTextNode('Name: Emilia Elldred');
var divText14= document.createElement('div');
divText14.setAttribute('class', 'divtext14');
var texto15= document.createTextNode('Active: True Assistance: 80%');


container6.appendChild(newCont7);
newCont7.appendChild(foto7);
divText13.appendChild(texto14);
divText14.appendChild(texto15);
newCont7.appendChild(divText13);
newCont7.appendChild(divText14);

var newCont8= document.createElement('div');
newCont8.setAttribute('class', 'nuevo8');
var foto8= document.createElement("img");
foto8.setAttribute("src", "http://dummyimage.com/224x136.png/FFCD00/ffffff");
foto8.classList.add('class', 'foto8');
var divText16= document.createElement('div');
divText16.setAttribute('class', 'divtext16');
var texto17= document.createTextNode('Name: Emilia Elldred');
var divText17= document.createElement('div');
divText17.setAttribute('class', 'divtext17');
var texto18= document.createTextNode('Active: True Assistance: 80%');


container6.appendChild(newCont8);
newCont8.appendChild(foto8);
divText16.appendChild(texto17);
divText17.appendChild(texto18);
newCont8.appendChild(divText16);
newCont8.appendChild(divText17);