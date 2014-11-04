FUNCTION                        DESCRIPTION
log([data],[...])               Writes data output to the console. 
                                The data variable can be a string or 
                                an object that can be resolved to a string. 
                                Additional parameters can also be sent. 
                                For example:
                                console.log("There are %d items", 5);
                                >>There are 5 items
info([data],[...])              Same as console.log.
error([data],[...])             Same as console.log, but the output is also 
                                sent to stderr.
warn([data],[...])              Same as console.error.
dir(obj)                        Writes out a string representation of a 
                                JavaScript object to the console. 
                                For example:
                                console.dir({name:"Brad", role:"Author"});
                                >> { name: 'Brad', role: 'Author' }
time(label)                     Assigns a current timestamp with millisecond 
                                precision to the string label.
timeEnd(label)                  Creates a delta between the current 
                                time and the timestamp assigned to label and 
                                outputs the results. 
                                For example:
                                console.time("FileWrite");
                                f.write(data); //takes about 500ms
                                console.timeEnd("FileWrite");
                                >> FileWrite: 500ms
trace(label)                    Writes out a stack trace of the current 
                                position in code to stderr. 
                                For example:
                                module.trace("traceMak");
                                >>Trace: traceMark
                                at Object.<anonymous> (C:\test.js:24:9)
                                at Module._compile (module.js:456.26)
                                at Object.Module._ext.js (module.js:474:10)
                                at Module.load (module.js:356:32)
                                at Function.Module._load (module.js:312:12)
                                at Function.Module.runMain(module.js:497:10)
                                at startup (node.js:119:16)
                                at node.js:901:3
assert(expression, [message])   Writes the message and stack trace to 
                                the console if expression evaluates to false.