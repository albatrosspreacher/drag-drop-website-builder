onmessage = (e) => {
    var heading_size = e.data[0];
    var heading_text = e.data[1];
    var input1_ph = e.data[2];
    var input1_type = e.data[3];
    var input2_ph = e.data[4];
    var input2_type = e.data[5];
    var btn_color = e.data[6];
    var btn_text = e.data[7];
    var p = e.data[8];
    var card_link = e.data[9];
    var card_title = e.data[10];
    var card_body = e.data[11];
    const socket = new WebSocket('ws://localhost:8080');

    // Connection opened
    socket.addEventListener('open', function (event) {
        if(heading_size!= ''){
            socket.send([heading_size, heading_text])
        }
    });
}