let hw2_myGraph = document.getElementById("hw2_myGraph");

let hw2_trace1 = {
    type: "bar",
    name: "國民黨",
    x: ["台北市", "高雄市"],
    y: [Taipei[0]['count'], Kaohsiung[0]['count']],
    text: [Taipei[0]['count'], Kaohsiung[0]['count']],
    textfont: {
        color: 'white',
        size: 15
    },
    marker: {
        color: 'blue'
    }
};

let hw2_trace2 = {
    type: "bar",
    name: "民進黨",
    x: ["台北市", "高雄市"],
    y: [Taipei[1]['count'], Kaohsiung[1]['count']],
    text: [Taipei[1]['count'], Kaohsiung[1]['count']],
    textfont: {
        color: 'white',
        size: 15
    },
    marker: {
        color: 'green'
    }
};

let hw2_trace3 = {
    type: "bar",
    name: "親民黨",
    x: ["台北市", "高雄市"],
    y: [Taipei[2]['count'], Kaohsiung[2]['count']],
    text: [Taipei[2]['count'], Kaohsiung[2]['count']],
    textfont: {
        color: 'black',
        size: 15
    },
    marker: {
        color: 'orange'
    }
};

let hw2_data = [hw2_trace1, hw2_trace2, hw2_trace3];

let hw2_layout = {
    margin: {
        t: 80
    },
    barmode: 'stack',
    title: "2020總統選舉兩縣市投票數分佈",
    height: 600,
};

Plotly.newPlot(hw2_myGraph, hw2_data, hw2_layout);
