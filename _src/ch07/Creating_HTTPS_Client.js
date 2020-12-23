OPTION      DESCRIPTION
pfx         A stringor Buffer object that contains the private key, 
            certificate, and CA certs of the server, in PFX or PKCS12 format.
key         A String or Buffer object that contains the private key 
            to use for SSL.
passphrase  A String object that contains the passphrase for the private 
            key or PFX.
cert        A String or Buffer object that contains the public x509 
            certificate to use.
ca          An array of strings or buffers of trusted certificates, 
            in PEM format, to check the remote host against.
ciphers     A string that describes the ciphers to use or exclude.
rejectUnauthorized  A Boolean that, when true, indicates that the server 
                    certificate is verified against the list of supplied CAs. 
                    An error event is emitted if verification fails. 
                    Verification happens at the connection level, 
                    before the HTTP request is sent. Defaults to true. 
                    Only for http.request() options.
crl                 Either a string or a list of strings of PEM-encoded 
                    certificate revocation lists, only for https.createServer();
secureProtocol      The SSL method to use, such as SSLv3_method to 
                    force SSL version 3.