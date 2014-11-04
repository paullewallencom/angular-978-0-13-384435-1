METHOD                          DESCRIPTION
buffer.toString([encoding],     Returns a string containing the 
    [start], [end])             decoded characters specified by 
                                encoding from the start index to the 
                                end index of the buffer. If start or 
                                end is not specified, then toString() 
                                uses thebeginning or end of the buffer.
stringDecoder.write(buffer)     Returns a decoded string version of the buffer.
buffer[offset]                  Returns the octet value in the buffer at the 
                                specified offset.
readInt8(offset, [noAssert])    There is a wide range of methods for 
readInt16LE(offset, [noAssert]) Buffer objects to read integers, 
readInt16BE(offset, [noAssert]) unsigned integers, doubles, 
...                             floats of various sizes, and using 
                                little endian or big endian. 
                                These functions accept the offset to read 
                                from and an optional noAssert Boolean value 
                                that specifies whether to skip validation of 
                                the offset. noAssert should be left at the 
                                default false unless you are absolutely 
                                certain of correctness.