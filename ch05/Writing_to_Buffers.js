METHOD                          DESCRIPTION
buffer.write(string, [offset],  Writes length number of bytes from 
    [length], [encoding])       the string, starting at the offset index 
                                inside the buffer using encoding.
buffer[offset] = value;         Replaces the data at index offset 
                                with the value specified.
buffer.fill(value, [offset],    Writes the value to every byte in the buffer, 
    [end])                      starting at the offset index and ending 
                                with the end index.
writeInt8(value, offset,        There is a wide range of methods for 
    [noAssert])                 Buffer objects to write integers, 
writeInt16LE(value, offset,     unsigned integers, doubles, floats 
    [noAssert])                 of various sizes, and using little 
writeInt16BE(value,             endian or big endian. Value specifies the 
    offset, [noAssert])         value to write, offset specifies the 
...                             index to write to, andnoAssert specifies 
                                whether to skip validation of the value 
                                and offset. noAssert should be left at the 
                                default false unless you are absolutely 
                                certain of correctness.