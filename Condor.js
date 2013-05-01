var FeatureData     = require('./lib/FeatureData.js')
  , Capitalization  = require('./lib/dictionaries/Capitalization.js')
  , Common          = require('./lib/dictionaries/Common.js')
  , Shared          = require('./lib/Shared.js')
  , TrainSGA        = require('./lib/TrainSGA.js')
  , ViterbiCRF      = require('./lib/ViterbiCRF.js')
  , MongoStore      = require('./lib/MongoStore.js')
  , fs              = require('fs')
  , os              = require('os');

Shared.Configure(Shared.ENAMEX, []);
/*
FeatureData.Generate(FeatureData.CapitalizationType, [Capitalization.Types, Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.PosPreBigram, [Common.PartsOfSpeech, Common.PartsOfSpeech, Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.PosPostBigram, [Common.PartsOfSpeech, Common.PartsOfSpeech, Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.PosPreSuffixNext, [Common.PartsOfSpeech, Common.SuffixGroups, Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.ForeignCapitalization, [Capitalization.Types, Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.CapitalizationPostBigram, [Capitalization.Types, Shared.Labels], []);
FeatureData.Generate(FeatureData.TitlePreKnowlege, [Shared.Labels], []);
FeatureData.Generate(FeatureData.TitlePostKnowlege, [Shared.Labels], []);
FeatureData.Generate(FeatureData.OrgKnowlege, [Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.Possessive, [Shared.Labels], []);
FeatureData.Generate(FeatureData.PossessiveCapitalization, [Capitalization.Types, Shared.Labels, Shared.Labels], []);
FeatureData.Generate(FeatureData.OrgPostKnowlege, [Shared.Labels], []);
FeatureData.Generate(FeatureData.LocationPostKnowlege, [Shared.Labels], []);
FeatureData.Generate(FeatureData.LocationPrefix, [Shared.Labels], []);
FeatureData.Generate(FeatureData.LocationSuffix, [Shared.Labels], []);
*/

var TrainingSet = TrainSGA.FormatTrainingData(Shared.ReadFile('./corpus/train/bbc_a'));
    console.log('Training sequences: #', TrainingSet.length);
// F-Measure Testing Data, non-recall
    TrainingSet.push({
    Label: ['[BGN]', '[FRN]', '[PUQ]', '[FRN]', '[PUQ]', '[FRN]', '[FRN]', '[FRN]', '[END]']
  , Observed: ['[BGN]', 'Ms', 'Evans', 'said', 'April', 'was', 'last', 'seen', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[PUQ]', '[FRN]', '[FRN]', '[END]']
  , Observed: ['[BGN]', 'the', 'time', 'remembered', 'Mr', 'Bridger', 'standing', 'as', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[PST]', '[PED]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[LUQ]', '[FRN]', '[FRN]', '[END]']
  , Observed: ['[BGN]', 'Melanie', 'Smith', 'started', 'the', 'fire', 'in', 'Portsmouth', 'last', 'month', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[PST]', '[PED]', '[FRN]', '[FRN]', '[OUQ]', '[FRN]', '[FRN]', '[END]']
  , Observed: ['[BGN]', 'Vince', 'Cable', 'calls', 'for', 'RBS', 'prosecutions', 'decision', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[OUQ]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[LUQ]', '[END]']
  , Observed: ['[BGN]', 'RBS', 'has', 'its', 'headquarters', 'in', 'Edinburgh', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[OUQ]', '[END]']
  , Observed: ['[BGN]', 'in', 'a', 'letter', 'to', 'Westminster', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[FRN]', '[FRN]', '[FRN]', '[LUQ]', '[FRN]', '[PUQ]']
  , Observed: ['[BGN]', 'Advocate', 'General', 'for', 'Scotland', 'Lord', 'Wallace', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[FRN]', '[PST]', '[PED]', '[FRN]', '[OST]', '[OED]', '[FRN]', '[FRN]', '[FRN]', '[END]']
  , Observed: ['[BGN]', 'Sir', 'Alex', 'Ferguson', 'believes', 'Manchester', 'United', 'won\'t', 'be', 'found', '[END]']
});
    TrainingSet.push({
    Label: ['[BGN]', '[OUQ]', '[FRN]', '[PST]', '[PED]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[FRN]', '[END]']
  , Observed: ['[BGN]', 'Lions', 'captain', 'Sam', 'Warburton', 'has', 'set', 'his', 'team', 'a', 'challenge', '[END]']
});


/*
Shared.SaveFunctions(Shared.FeatureFunctions, function () {
    Shared.SaveFeatures(Shared.Features, function () {
        var tIndex = 0;
        for (tIndex; tIndex < TrainingSet.length; tIndex++) {
            TrainSGA.Train(TrainingSet[tIndex], MongoStore);
        }
    });
});
*/
var start = os.uptime();
FeatureData.LoadFeatureData(function () {
    console.log('Features: #', Shared.Features.length);
    var tIndex = TrainingSet.length;/*- 1;
    for (tIndex; tIndex--;) {
        TrainSGA.Train(TrainingSet[tIndex], MongoStore);
    }*/
    for (tIndex; tIndex--;) {
        console.log('Remaining', tIndex);
        //TrainSGA.Train(TrainingSet[tIndex], MongoStore);
        var seq = TrainingSet[tIndex]
          , sel = seq.Label.length
          , res = ViterbiCRF.Predict(seq.Observed)
          , falsepos    = 0
          , falseneg    = 0
          , misdiag     = 0
          , accurate    = 0
          , total       = 0;
        for (sel; sel--;) {
            if (res[sel] === Shared.ENAMEX[0]) {
                total++;
                if (seq.Label[sel] !== Shared.ENAMEX[0]) {
                    falseneg++;
                } else {
                    accurate++;
                }
            } else if (res[sel] !== Shared.Globals.BEGIN && res[sel] !== Shared.Globals.END) {
                total++;
                if (seq.Label[sel] === res[sel]) {
                    accurate++;
                } else if (seq.Label[sel] === Shared.ENAMEX[0]) {
                    falsepos++;
                } else {
                    misdiag++;
                }
            }
        }
        var output = tIndex + ") ~" + os.uptime() +"\nTotal:" + total + "\nAccurate:" + accurate + "\nFalse positive:" + falsepos + "\nFalse negative:" + falseneg + "\nWrong class:" + misdiag + "\n============\n";
        console.log(output);
        fs.appendFile("final-recall-results", output, function(err) {
            if(err) {
                console.log(err);
            }
        });
        var backup = "==\n" + tIndex + "\nt#" + total;
            backup = backup + "\na#" + accurate + "\np#" + falsepos + "\nn#" + falseneg + "\nm#" + misdiag + "\n";
        fs.appendFile("final-backup-results", backup, function(err) {
            if(err) {
                console.log(err);
            }
        });
        //console.log(total-accurate, 'mistakes for last');
        //console.log(seq.Label);
        //console.log(res);
        // ! BREAKING BECAUSE WE NEED TO TEST IT !
        //break;
    }
});
