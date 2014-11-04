PROPERTY        DESCRIPTION
href            This is the full URL string that was originally parsed.
protocol        The request protocol, loweercased.
host            The full host portion of the URL, 
                including port information, lowercased.
auth            The authentication information portion of a URL.
hostname        The hostname portion of the host, lowercased.
port            The port number portion of the host.
pathname        The path portion of the URL, including the initial slash, if present.
search          The query string portion of the URL, including the leading question mark.
path            The full path, including pathname and search.
query           This is either the parameter portion of the 
                query string or a parsed object containing the 
                query string parameters and values if the 
                parseQueryString is set to true.
hash            The hash portion of the URL, including the pound sign (#).