class Thesaurus {
    path: string;
    synonyms: Array<string>;

    constructor(path: string) {
        this.path = path;
        this.synonyms = [];
        this.initializeSynonyms();
    };

    initializeSynonyms() {
        let fs = require('fs');
        let data = fs.readFileSync(this.path, 'utf8');
        let line = '';
        //console.log(data)
        for (let i = 0; i < data.length; i++) {
            //console.log(data[i]);
            if (data[i] != '\n') {
                line += data[i];
            } else {
                if (line.charAt(0) != '#')
                    this.synonyms.push(line);
                line = '';
            }
        }
        //this.synonyms = data.split("\n");

    }

    printSynonyms() {
        for (let i = 0; i < this.synonyms.length; i++) {
            console.log(this.synonyms[i]);
        }
    }

    checkForMatch(word: string) {
        let matches = new Array();
        for (let i = 0; i < this.synonyms.length; i++) {
            //console.log(this.synonyms[i]);
            let index = this.synonyms[i].indexOf(word);
            //console.log(index);
            if (index != -1) {
                let temp = '';
                while (this.synonyms[i] != ';') {
                    temp += this.synonyms[index];
                }
                matches.push(temp);
                //console.log(temp);
            }
        }
        for (let i = 0; i < matches.length; i++) {
            console.log(matches[i]);
        }
    }
}

let thesaurus = new Thesaurus('openthesaurus.txt');
//thesaurus.printSynonyms();
//console.log(process.argv[2]);
thesaurus.checkForMatch(process.argv[2]);
