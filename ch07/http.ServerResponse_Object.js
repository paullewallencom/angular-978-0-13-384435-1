EVENT OR PROPERTY       DESCRIPTION
close                   Emitted when the connection to the client is 
                        closed prior to sending the response.end() 
                        to finish and flush the response.
headerSent              Boolean: true if headers have been sent and 
                        otherwise false. This is read-only.
sendDate                Boolean: When set to true, the Date header is 
                        automatically generated and sent as 
                        part of the response.
statusCode              Allows you to specify the response status 
                        code without having to explicitly write the headers. 
                        For example: response.statusCode = 500;