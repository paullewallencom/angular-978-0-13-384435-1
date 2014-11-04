EVENT           DESCRIPTION
response        Emitted when a response to this request is received from the 
                server. The callback handler receives an IncomingMessage object 
                as the only parameter.
socket          Emitted after a socket is assigned to this request.
connect         Emitted every time a server responds to a request that was 
                intitiated with a CONNECT method. If this event is not handled 
                by the client, the connection will be closed.
upgrade         Emitted when the server responds to a request that 
                included an update request in the headers.
continue        Emitted when the server sends a 100 Continue HTTP 
                response instructing the client to send the request body.