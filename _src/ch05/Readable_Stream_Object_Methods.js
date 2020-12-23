METHOD                      DESCRIPTION
read([size])                Reads data from the stream. 
                            The data can be a String, Buffer, 
                            or null.(null means there is no more 
                            data left.) If a size argument is read, 
                            then the data is limited to that 
                            number of bytes.
setEncoding(encoding)       Sets the encoding to use when returning 
                            String in the reaad() request.
pause()                     Pauses data events from being emitted 
                            by the object.
resume()                    Resumes data events being emitted by the object.
pipe(destination,           Pipes the output of this stream into 
    [options])              a Writable stream object specified by 
                            destination. options is a JavaScript object. 
                            For example, {end:true} ends the Writable 
                            destination when Readable ends.
unpipe([destination])       Disconnects the object from the 
                            Writable destination.