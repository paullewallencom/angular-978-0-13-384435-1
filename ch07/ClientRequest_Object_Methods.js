METHOD                      DESCRIPTION
write(chunk, [encoding])    Writes a chunk--Buffer or String object--of 
                            body data into the request. This allows you to 
                            stream data into the Writable stream of 
                            the ClientRequest object, If you stream 
                            the body data, you should include 
                            the {'Transfer-Encoding','chunked'} header 
                            option when you create the request. 
                            The encoding parameter defaults to utf8.
end([data], [encoding])     Writes the optional data out to the 
                            request body and then flushes the 
                            Writable stream and terminates the request.
abort()                     Aborts the current request.
setTimeout(timeout,         Sets the socket timeout for the request.
    [callback])
setNoDelay([noDelay])       Disables the Nagle algorithm, which buffers 
                            data before sending it. The noDelay argument 
                            is a Boolean that is true for immediate writes 
                            and false for buffered writes.
setSocketKeepAlive          Enables and disbales the keep-alive 
([enable],                  functionality on the client request. 
    [inititalDelay])        The enable parameter defaults to false, 
                            which is disabled. The initialDelay parameter 
                            specifies the delay between the last data 
                            packet and the first keep-alive request.