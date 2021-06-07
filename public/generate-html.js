onmessage = (e) => {
    var heading_size = e.data[0];
    var heading_text = e.data[1];
    var input1_ph = e.data[2];
    var input1_type = e.data[3];
    var btn_color = e.data[6];
    var btn_text = e.data[7];
    var socket = new WebSocket('ws://localhost:8080');
    var data = {};

    // Connection opened
    socket.addEventListener('open', function (event) {
        if (heading_size != '') {
            socket.send("heading");
            this.onmessage = (e) => {
                console.log(e.data);
                socket.send(heading_size);
                this.onmessage = (e) => {
                    console.log(e.data);
                    socket.send(heading_text);
                    this.onmessage = (e) => {
                        console.log(e.data);
                        socket.close();
                    }
                }
            }
        }


        setTimeout(function () {
            socket = new WebSocket('ws://localhost:8080');
            socket.addEventListener('open', function (event) {
                if (input1_ph != '') {
                    socket.send("input1");
                    this.onmessage = (e) => {
                        console.log(e.data);
                        socket.send(input1_ph);
                        this.onmessage = (e) => {
                            console.log(e.data);
                            socket.send(input1_type);
                            this.onmessage = (e) => {
                                console.log(e.data);
                                socket.close();
                            }
                        }
                    }
                }
            });

        }, 3000);
        setTimeout(function () {
            socket = new WebSocket('ws://localhost:8080');
            socket.addEventListener('open', function (event) {
                if (btn_text != '') {
                    socket.send("btn");
                    this.onmessage = (e) => {
                        console.log(e.data);
                        socket.send(btn_color);
                        this.onmessage = (e) => {
                            console.log(e.data);
                            socket.send(btn_text);
                            this.onmessage = (e) => {
                                console.log(e.data);
                                socket.close();
                            }
                        }
                    }
                }



            }, 6000);
        });
    });
}