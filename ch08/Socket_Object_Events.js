EVENT               DESCRIPTION
connect             Emitted when a connection is successfully established 
                    with the server. The callback function does not 
                    accept any parameters.
data                Emitted when data is receieved on the socket. 
                    If no data event handler is attached, data can be lost. 
                    The callback function must accept a parameter that is 
                    a Buffer object containing the chunk of data that was 
                    read from the socket.
                    For example:
                    function(chunk){}
end                 Emitted when the server terminates the connection 
                    by sending a FIN. The callback function does 
                    not accept any parameters.
timeout             Emitted when the server terminates the connection 
                    by sending a FIN. The callback function does 
                    not accept any parameters.
drain               Emitted when the write buffer becomes empty. 
                    You can use this event to throttle back the 
                    data stream being written to the socket. 
                    The callback function does not accept any parameters.
error               Emitted when an error occurs on the socket connection. 
                    The callback function should accept error as 
                    the only argument. For example:
                    function(error){}
close               Emitted when the socket has fully closed either 
                    because it was closed by an end() method or because 
                    an error occurred. The callback function does not 
                    accept any parameters.