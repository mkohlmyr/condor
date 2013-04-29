var FeatureData     = require('./lib/FeatureData.js')
  , Capitalization  = require('./lib/dictionaries/Capitalization.js')
  , Common          = require('./lib/dictionaries/Common.js')
  , Shared          = require('./lib/Shared.js')
  , TrainSGA        = require('./lib/TrainSGA.js')
  , ViterbiCRF      = require('./lib/ViterbiCRF.js')
  , MongoStore      = require('./lib/MongoStore.js')
  , fs              = require('fs');

Shared.Configure(Shared.ENAMEX, []);

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

var TrainingSet = TrainSGA.FormatTrainingData(Shared.ReadFile('./corpus/train/bbc_a'));

console.log('Features: #', Shared.Features.length);
console.log('Training sequences: #', TrainingSet.length);

Shared.SaveFunctions(Shared.FeatureFunctions, function () {
    Shared.SaveFeatures(Shared.Features, function () {
        var tIndex = 0;
        for (tIndex; tIndex < TrainingSet.length; tIndex++) {
            TrainSGA.Train(TrainingSet[tIndex], MongoStore);
        }
    });
});
