OPTION          DESCRIPTION                         EXAMPLE
search          Finds module packages               npm search express 
                in the repository.
install         Installs a package either           npm install
                using a package.json file from      npm install express
                the repository or from a            npm install express@0.1.1
                local location.                     npm install ../tModule.tgz
install -g      Installs a package in a globally    npm install express -g
                accessible location.
remove          Removes a module.                   npm remove express
pack            Packages the module defined by      npm pack
                the package.json file into 
                a .tgz file.
view            Displays module details             npm view express
publish         Publishes the module defined        npm publish
                by a package.json file 
                to the registry
unpublish       Unpublishes a module                npm unpublish myModule
                you have published
owner           Allows you to add, remove and       npm add bdayley myModule
                list owners of a package in         npm rm bdayley myModule
                the repository.                     npm ls myModule