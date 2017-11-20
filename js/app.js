/*
 * Funcionalidad de tu producto
 */
//graficos//




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
            data.addColumn('string', 'Alumnas');
            data.addColumn('number', 'Porcentaje');
            data.addRows([
              ['AM', 80],
              ['PM', 60],

            ]);
            // Create the data table.
            var data2 = new google.visualization.DataTable();
            data2.addColumn('string', 'Alumnas');
            data2.addColumn('number', 'Puntaje TECH');
            data2.addColumn('number', 'Puntaje HSE')
            data2.addRows([
              ['AM', 1590, 1700],
              ['PM', 1600, 1500],

            ]);

            var data3 = new google.visualization.DataTable();
            data3.addColumn('string', 'Almunas');
            data3.addColumn('number', 'Muy Satisfechas');
            data3.addColumn('number', 'Para nada Satisfechas');
            data3.addRows([
              ['AM', 80, 20],
              ['PM', 85, 15],

            ]);

            // Set chart options
            var options = {'title':'Aprobación del 70%',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options2 = {'title':'Puntaje TECH v/s HSE',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options3 = {'title':'¿LABORATORIA?',
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
            data7.addColumn('string', 'Alumnas');
            data7.addColumn('number', 'Porcentaje');
            data7.addRows([
              ['AM', 80],
              ['PM', 60],

            ]);
            // Create the data table.
            var data8 = new google.visualization.DataTable();
            data8.addColumn('string', 'Alumnas');
            data8.addColumn('number', 'Puntaje TECH');
            data8.addColumn('number', 'Puntaje HSE')
            data8.addRows([
              ['AM', 1590, 1700],
              ['PM', 1600, 1500],

            ]);

            var data9 = new google.visualization.DataTable();
            data9.addColumn('string', 'Almunas');
            data9.addColumn('number', 'Muy Satisfechas');
            data9.addColumn('number', 'Para nada Satisfechas');
            data9.addRows([
              ['AM', 80, 20],
              ['PM', 85, 15],

            ]);

            // Set chart options
            var options7 = {'title':'Aprobación del 70%',
                           'width':400,
                           'height':300,
                           'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options8 = {'title':'Puntaje TECH v/s HSE',
                           'width':400,
                           'height':300,
                         'colors':['rgb(248,170,28)','rgb(255,255,95)']};
            // Set chart options
            var options9 = {'title':'¿LABORATORIA?',
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





// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);//
//para sacar los datos de activos e inactivos//
for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
  console.log(data.SCL['2017-2'].students[i].active);
  //cont.innerHTML += '<p>La estudiante número ' + [i+1] + ' es: ' + data.SCL['2017-2'].students[i].active + '</p>';//
}
