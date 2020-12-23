DIRECTIVE       DESCRIPTION                 EXAMPLE
name            Unique name of package.     "name": "camelot"
preferGlobal    Indicator that the module   "preferGlobal": true
                prefers to be installed 
                globally.
version         Version of the module.      "version": 0.0.1
author          Author of the project.      "author":"arthur@???.com"
description     Text description of module. "description":"a silly place"
contributors    Additional contributors     "contributors": [
                to the module.                { "name":"gwen",
                                                "email":"gwen@???.com"}]
bin             Binary to be installed      "bin: {
                with the project.             "excalibur":"./bin/excalibur"}
scripts         Parameters that execute     "scripts" {
                console apps when               "start": "node
                launching node.             ./bin/excalibur",
                                                "test": "echo testing"}
main            The main entry point        "main":"./bin/excalibur"
                for the app, which can 
                be a binary or 
                a .js file
repository      The repository type and     "repository": {
                location of the package         "type": "git",
                                                "location":
                                                  "http://???.com/c.git"}
keywords        Keywords that show up       "keywords": [
                in the npm search             "swallow", "unladen" ]
dependencies    Modules and versions        "dependencies": {
                this module depends on;        "express": "latest",
                you can use the                "connect": "2.x.x",
                * and x wildcards.             "cookies": "*" }
engines         The version of node         "engines": {
                this package works with.       "node": ">=0.6"}