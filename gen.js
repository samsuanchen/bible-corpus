const lib="ksana-corpus-lib";
const createCorpusFromJSON=require(lib).createCorpusFromJSON;

createCorpusFromJSON("xml/bible-corpus.json",function(err,bytewritten){
	if (err)console.log(err);
	else console.log(bytewritten);
});