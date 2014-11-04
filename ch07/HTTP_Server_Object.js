EVENT           DESCRIPTION
request         Triggered each time the server receives a client request. 
                The callback should accept two parameters. The first is an 
                IncomingMessage object representing the client request, 
                and the second is a ServerResponse object you use to 
                formulate and senf the response. 
                For example:
                function callback (request, response){}
connection      Triggered when a new TCP stream is established. 
                The callback receives the socket as the only parameter. 
                For example:
                function callback(socket){}
close           Triggered when the server is closed. 
                The callback receives no parameters.
checkContinue   Triggered when a request that includes the 
                Expect: 100-continue header is received. 
                A default event handler responds with an 
                HTTP/1.1 100 Continue even if you do not 
                handle this event. 
                For example:
                function callback(request, response){}
connect         Emitted when an HTTP CONNECT request is received. 
                callback receives request, socket, and head, 
                which is a buffer containing the first packet 
                of the tunneling stream. 
                For example:
                function callback(request, socket, head){}
upgrade         Emitted when the client requests an HTTP upgrade. 
                If this event is not handled, clients sending an 
                upgrade request have their conenctions closed. 
                callback receives request, socket, and head, 
                which is a buffer containing the first packet 
                of the tunneling stream. 
                For example:
                function callback(request, socket, head){}
clientError     Emitted when the client connection socket emits an error. 
                callback receives error as the first parameter and socket 
                as the second. 
                For example:
                function callback(error, socket){}