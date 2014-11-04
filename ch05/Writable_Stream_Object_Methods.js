METHOD                      DESCRIPTION
write(chunk, [encoding],    Writes the data chuck to the stream object's 
    [callback])             data location. The data can be a String or Buffer. 
                            If encoding is specified, then it is used 
                            to encode string data. If callback is specified, 
                            then it is called after the data has been flushed.
end([chunk], [encoding],    Same as write() except it puts the Writbale into 
    [callback])             a state where it no longer accepts data and 
                            sends the finish event.