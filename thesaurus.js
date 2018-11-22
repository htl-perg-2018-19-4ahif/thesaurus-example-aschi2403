var Thesaurus = /** @class */ (function () {
    function Thesaurus(path) {
        this.path = path;
        this.synonyms = [];
        this.initializeSynonyms();
    }
    ;
    Thesaurus.prototype.initializeSynonyms = function () {
        var fs = require('fs');
        var data = fs.readFileSync(this.path, 'utf8');
        var line = '';
        //console.log(data)
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i]);
            if (data[i] != '\n') {
                line += data[i];
            }
            else {
                if (line.charAt(0) != '#')
                    this.synonyms.push(line);
                line = '';
            }
        }
        //this.synonyms = data.split("\n");
    };
    Thesaurus.prototype.printSynonyms = function () {
        for (var i = 0; i < this.synonyms.length; i++) {
            console.log(this.synonyms[i]);
        }
    };
    Thesaurus.prototype.checkForMatch = function (word) {
        var matches = new Array();
        for (var i = 0; i < this.synonyms.length; i++) {
            //console.log(this.synonyms[i]);
            var index = this.synonyms[i].indexOf(word);
            //console.log(index);
            if (index != -1) {
                var temp = '';
                while (temp != ';') {
                    temp += this.synonyms[index];
                }
                matches.push(temp);
                //console.log(temp);
            }
        }
        for (var i = 0; i < matches.length; i++) {
            console.log(matches[i]);
        }
    };
    return Thesaurus;
}());
var thesaurus = new Thesaurus('openthesaurus.txt');
//thesaurus.printSynonyms();
//console.log(process.argv[2]);
thesaurus.checkForMatch(process.argv[2]);
