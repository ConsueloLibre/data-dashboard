/*
 * Funcionalidad de tu producto
 */

google.load('visualization', '1.0',{'packages':['corechart']});

    	google.setOnLoadCallback(drawChart);

    	          function drawChart() {

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
                           'height':300};
            // Set chart options
            var options2 = {'title':'Puntaje TECH v/s HSE',
                           'width':400,
                           'height':300};
            // Set chart options
            var options3 = {'title':'¿Qué tan satisfecha te sientes con LABORATORIA?',
                           'width':400,
                           'height':300};

            // Instantiate and draw our chart, passing in some options.
            var cont = new google.visualization.PieChart(document.getElementById('cont'));
            cont.draw(data, options);
            var cont2 = new google.visualization.BarChart(document.getElementById('cont_div2'));
            cont2.draw(data2, options2);
            var cont3 = new google.visualization.LineChart(document.getElementById('cont_div3'));
            cont3.draw(data3, options3);

          }


 






// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);//
