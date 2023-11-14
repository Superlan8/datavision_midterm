//https://dep.mohw.gov.tw/dos/cp-5223-62358-113.html

let hw1_myGraph = document.getElementById("hw1_myGraph");

let hw1_trace1 = {};
hw1_trace1.mode = "lines+markers";
hw1_trace1.type = "scatter";
hw1_trace1.name = "台北市";
hw1_trace1.visible = true;
hw1_trace1.x = [];
hw1_trace1.y = [];
hw1_trace1.text = [];

for(let i=0; i<set1.length; i++) {
    hw1_trace1.x[i] = set1[i][0] + 106;
    hw1_trace1.y[i] = set1[i][1];
}

let hw1_trace2 = {};
hw1_trace2.mode = "lines+markers";
hw1_trace2.type = "scatter";
hw1_trace2.name = "桃園市"
hw1_trace2.visible = true
hw1_trace2.x = [];
hw1_trace2.y = [];
hw1_trace2.text = [];

for(let i=0; i<set2.length; i++) {
    hw1_trace2.x[i] = set2[i][0] + 106;
    hw1_trace2.y[i] = set2[i][1];
}

let hw1_trace3 = {};
hw1_trace3.mode = "lines+markers";
hw1_trace3.type = "scatter";
hw1_trace3.name = "台中市";
hw1_trace3.visible = true
hw1_trace3.x = [];
hw1_trace3.y = [];
hw1_trace3.text = [];

for(let i=0; i<set3.length; i++) {
    hw1_trace3.x[i] = set3[i][0] + 106;
    hw1_trace3.y[i] = set3[i][1];
    hw1_trace3.text[i] = set3[i][2];
}

let hw1_trace4 = {};
hw1_trace4.mode = "lines+markers";
hw1_trace4.type = "scatter";
hw1_trace4.name = "台南市";
hw1_trace4.visible = true
hw1_trace4.x = [];
hw1_trace4.y = [];
hw1_trace4.text = [];

for(let i=0; i<set4.length; i++) {
    hw1_trace4.x[i] = set4[i][0] + 106;
    hw1_trace4.y[i] = set4[i][1];
    hw1_trace4.text[i] = set4[i][2];
}

let hw1_data = [];

hw1_data.push(hw1_trace1);
hw1_data.push(hw1_trace2);
hw1_data.push(hw1_trace3);
hw1_data.push(hw1_trace4);

let hw1_layout = {

    margin: {
        t: 50
    },
    xaxis: {
        title: '年度',
        range: [106, 112],  // Set the desired x-axis range
        tickvals: [107, 108, 109, 110, 111],  // Set the desired tick values
    },
    title: '各縣市獨居老人統計',
    updatemenus: [
        {
            y: 1.2,
            x: 0.3,
            yanchor: 'top',
            buttons:[
                {
                    method: 'restyle',
                    args:['visible', [true, false, false, false]],
                    label: '台北市'
                },
                {
                    method: 'restyle',
                    args:['visible', [false, true, false, false]],
                    label: '桃園市'
                },
                {
                    method: 'restyle',
                    args:['visible', [false, false, true, false]],
                    label: '台中市'
                },
                {
                    method: 'restyle',
                    args:['visible', [false, false, false, true]],
                    label: '台南市'
                },
                {
                    method: 'restyle',
                    args:['visible', [true, true, true, true]],
                    label: 'Display All'
                }
            ],
            legend: {
                x: 0,
                y: 1,
                traceorder: 'normal',
                orientation: 'h',
            }
        }
    ]
};

Plotly.newPlot(hw1_myGraph, hw1_data, hw1_layout);