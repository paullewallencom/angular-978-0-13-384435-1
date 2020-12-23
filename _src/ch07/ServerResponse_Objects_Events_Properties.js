METHOD                      DESCRIPTION
writeContinue()             Sends an HTTP/1.1 100 Continue message to 
                            the client, requesting that the body data be sent.
writeHead(statusCode,       Writes a response header to the request. 
    [reasonPhrase],         The statusCode parameter is the three-digit 
    [headers])              HTTP response status code, such as 200, 
                            401, or 500. The optional reasonPhrase is a 
                            string indicating the reason for the statusCode. 
                            The headers are the response headers object. 
                            For example: response.writeHead(200, 'Success',{})
setTimeout(msecs, callback) Sets the socket timeout for the client connection, 
                            in milliseconds, along with a callback function 
                            to be executed if the timeout occurs.
setHeader(name, value)      Sets the value of a specific header, 
                            where name is the HTTP header name and 
                            value is the header value.
getHeader(name)             Gets the value of an HTTP headerthat has 
                            been set in the response.
removeHeader(name)          Removes an HTTP header that has been set 
                            in the response.
write(chunk, [encoding])    Writes a chunk, Buffer, or String object of 
                            data out to the response Writable stream. 
                            This only writes data to the body portion 
                            of the response. The default encoding is utf8. 
                            Returns true if the data is writtem successfully 
                            or false if the data is written to user memory. 
                            If it returns false, a drain event will be emitted 
                            by the Writable stream when the buffer 
                            is free again.
addTrailers(headers)        Adds HTTP trailing headers to the end of 
                            the response.
end([data], [encoding])     Writes the optional data out to the 
                            response body and then flushes the Writbale 
                            stream and finalizes the response.