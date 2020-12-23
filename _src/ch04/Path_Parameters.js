MODE        DESCRIPTION
r           Open file for reading. 
            An exception occurs if the file does not exist.
r+          Open file for reading and writing. 
            An exception occurs if the file does not exist.
rs          Open file for reading in synchronous mode. 
            This is not the same as forcing fs.openSync(). 
            When used, the operating system bypasses the local 
            file system cache. This is useful on NFS mounts because it 
            lets you skip the potentially stale local cache. 
            You should use this flag only if necessary because it 
            can have a negative impact on performance.
rs+         Same as rs except the file is open for both reading and writing.
w           Open file for writing. 
            The file is created if it does not exist or 
            is truncated if it does exist.
wx          Same as w but falls if the path exists.
w+          Open file for reading and writing. 
            The file is created if it does not exist or 
            is truncated if it does exist.
wx+         Same as w+ but fails if the path exists.
a           Open file for appending. 
            The file is created if it does not exist.
ax          Same as a but fails if the path exists.
a+          Open file for reading and appending. 
            The file is created if it does not exist.
ax+         Same as a+ but fails if the path exists.