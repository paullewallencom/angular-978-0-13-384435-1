PROPERTY            DESCRIPTION
port                The port number the client should connect to. 
                    This option is required.
host                The domain name or IP address of the server that 
                    the client should connect to. Defaults to localhost.
localAddress        The local IP address the client should bind to 
                    for network connections.
allowHalfOpen       A Boolean that, when true, indicates that the socket won't 
                    automatically send a FIN packet when the other end of 
                    the socket sends a FIN packet, thus allowing half of 
                    the Duplex stream to remain open, Defaults to false.
