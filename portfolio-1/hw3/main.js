let hw3_myGraph = document.getElementById('hw3_myGraph');

let hw3_trace1 = {};
hw3_trace1.type = "pie";
hw3_trace1.title = "金屬製品";
hw3_trace1.labels = [];
hw3_trace1.values = [];
hw3_trace1.domain = {
    row: 0,
    column: 0
}
hw3_trace1.hole = 0.5;

for(let x=0; x<evalution_ratio_1.length; x++) {
    hw3_trace1.labels[x] = evalution_ratio_1[x]['name'];
    hw3_trace1.values[x] = evalution_ratio_1[x]['count'];
}

let hw3_trace2 = {}
hw3_trace2.type = "pie";
hw3_trace2.title = "電子產品";
hw3_trace2.labels = [];
hw3_trace2.values = [];
hw3_trace2.domain = {
    row: 0,
    column: 1
}
hw3_trace2.hole = 0.5;

for(let x=0; x<evalution_ratio_2.length; x++) {
    hw3_trace2.labels[x] = evalution_ratio_2[x]['name'];
    hw3_trace2.values[x] = evalution_ratio_2[x]['count'];
}

let hw3_trace3 = {}
hw3_trace3.type = "pie";
hw3_trace3.title = "機械";
hw3_trace3.labels = [];
hw3_trace3.values = [];
hw3_trace3.domain = {
    row: 1,
    column: 0
}
hw3_trace3.hole = 0.5;

for(let x=0; x<evalution_ratio_3.length; x++) {
    hw3_trace3.labels[x] = evalution_ratio_3[x]['name'];
    hw3_trace3.values[x] = evalution_ratio_3[x]['count'];
}

let hw3_trace4 = {}
hw3_trace4.type = "pie";
hw3_trace4.title = "資訊通信產品";
hw3_trace4.labels = [];
hw3_trace4.values = [];
hw3_trace4.domain = {
    row: 1,
    column: 1
}
hw3_trace4.hole = 0.5;

for(let x=0; x<evalution_ratio_4.length; x++) {
    hw3_trace4.labels[x] = evalution_ratio_4[x]['name'];
    hw3_trace4.values[x] = evalution_ratio_4[x]['count'];
}


let hw3_data = [];
hw3_data.push(hw3_trace1)
hw3_data.push(hw3_trace2)
hw3_data.push(hw3_trace3)
hw3_data.push(hw3_trace4)

let hw3_layout = {
    title: "111年度台灣外銷訂單來源占比",
    width: 700,
    height: 600,
    margin: {
        t: 50,
        l: 0
    },
    grid: {
        rows: 2,
        columns: 2,
        pattern: 'independent',
    }
};

Plotly.newPlot(hw3_myGraph, hw3_data, hw3_layout);