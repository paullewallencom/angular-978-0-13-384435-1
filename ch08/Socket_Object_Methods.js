METHOD                  DESCRIPTION
setEncoding([encoding]) When this function is called, data returned from 
                        the socket's streams is an encoded String instead 
                        of a Buffer object. Sets the default encoding that 
                        should be used when writing data to and reading data 
                        from the streams. Using this option handles multi-byte 
                        characters that might otherwise be mangled when 
                        converting a buffer to a string using 
                        buf.toString(encoding). If you want to read the data 
                        as strings, always use this method.
write(data, [encoding], Writes a data buffer or string to the Writable stream 
    [callback])         of the socket, using the encoding if specified. 
                        The callback function is executed as soon as 
                        the data is written.
end([data], [encoding]) Writes a data buffer or string to the Writable 
                        stream of the socket and then flushes the stream 
                        and closes the connection.
destroy()               Forces the socket connection to shut down. 
                        You should only need to use this in case of failures.
pause()                 Pauses the Readable stream of a socket from 
                        emitting data events. Thsi allows you to throttle 
                        back the upload of data to the stream.
resume()                Resumes data event emitting on the Readable stream 
                        of the socket.
setTimeout(timeout,     Specifies a timeout, in milliseconds, that the 
[callback])             server will wait before emitting a timeout event 
                        when the socket is inactive. The callback function 
                        is triggered as a once event listener. If you want 
                        the connection to be terminated on timeout, you 
                        should do it manually in the callback function.
setNoDelay([noDelay])   Disables/enables the Nagle algorithm, which buffers 
                        data before sending it. Setting this to false 
                        disables data buffering.
setKeepAlive([enable],  Enables/disables the keep-alive functionality 
    [initialDelay])     on the connection. The optional initialDelay 
                        parameter specifies the time, in milliseconds, 
                        that the socket is idle before sending the first 
                        keep-alive packet.
address()               Returns the bound address, the address family name, 
                        and the port of the socket, as reported by the 
                        operating system. The return value is an object 
                        that contains the port, family, and 
                        address properties. For example:
                        { port: 8107, family: 'IPv4', address: '127.0.0.1'}
unref()                 Allows the Node.js application to terminate if 
                        this socket is the only event on the event queue.
ref()                   Re-references a socket so that if this socket 
                        is the only thing on the event queue, the Node.js 
                        application does not terminate.
                        