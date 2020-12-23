METHOD, EVENT, OR PROPERTY      DESCRIPTION
close                           Emitted when the underlying socket is closed.
httpVersion                     Specifies the version of HTTP used to 
                                build the client request/response.
headers                         An object containing the headers sent 
                                with the request/response.
trailers                        An object containing any trailer headers 
                                sent with the request/response.
method                          Specifies the method for the request/response 
                                (for example, GET, POST, or CONNECT).
url                             The URL string sent to the server. 
                                This is the string that can be passed to 
                                url.parse(). This attribute is valid only 
                                in the HTTP server handling client requests.
statusCode                      Specifies the three-digit status code 
                                from the server. This attribute is valid 
                                on the HTTP client only when 
                                handling server responses.
socket                          This is a handle to the net.Socket object, 
                                used to communicate with the client/server.
setTimeout(msecs, callback)     Sets the socket timeout for the connection, 
                                in milliseconds, along with a callback 
                                function to be executed if the timeout occurs.
