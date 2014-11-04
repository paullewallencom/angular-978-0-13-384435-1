OPTION          DESCRIPTION
host            The domain name or IP address of the 
                server to issue the request to. 
                Defaults to localhost.
hostname        Same as host but preferred over host to support url.parse();
port            The port of the remote server. Defaults to 80.
localAddress    The local interface to bind for network connections.
socketPath      The Unix domain socket (use either host:port or socketPath).
method          A string that specifies the HTTP request method. 
                For example, GET, POST, CONNECT, OPTIONS, etc. 
                Defaults to GET.
path            A string that specifies the requested resource path. 
                Defaults to /. This should also include the query string, 
                if any. For example: /book.html?chapter=12
headers         An object that contains request headers. For example:
                {'content-length':'750', 'content-type':'text/plain'}s
auth            Basic authentication, in the form of user:password, 
                used to compute an Authorization header.
agent           The definition of the Agent behavior. 
                When an Agent is used, the request defaults to 
                Connection:keep-alive. Possible values are:
                undefined(default): Uses the global Agent.
                Agent: Use a specific Agent object.
                false: Disables Agent behavior.