exports.SuffixGroups = [
    ['er', 'or', 'ant', 'ent', 'ard', 'ian', 'ess']
  , ['ist', 'ists']
  , ['ade', 'age', 'ism', 'ment', 'ure']
  , ['ing', 'ings']
  , ['arium', 'orium', 'ary', 'ory']
  , ['ance', 'ence', 'ation', 'dom', 'ity', 'cy', 'ood']
];

exports.PartsOfSpeech = {
    'DETERMINER'    : 1
  , 'VERB'          : 2
  , 'NOUN'          : 3
  , 'ADVERB'        : 4
  , 'PRONOUN'       : 5
  , 'PREPOSITION'   : 6
  , 'ARTICLE'       : 7
  , 'CONJUNCTION'   : 8
  , 'PARTICLE'      : 9
  , 'ADJECTIVE'     : 10
  , 'NUMERAL'       : 11
  , 'INTEREJECTION' : 12
};

exports.Words = {
    'experience': [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'permanent' : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'difficult' : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'decision'  : [ exports.PartsOfSpeech.NOUN ]
  , 'remember'  : [ exports.PartsOfSpeech.VERB ]
  , 'language'  : [ exports.PartsOfSpeech.NOUN ]
  , 'possible'  : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'complete'  : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'question'  : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'together'  : [ exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'interest'  : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'thousand'  : [ exports.PartsOfSpeech.NUMERAL ]
  , 'everyone'  : [ exports.PartsOfSpeech.PRONOUN ]
  , 'between'   : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'chances'   : [ exports.PartsOfSpeech.NOUN ]
  , 'regular'   : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.REGULAR ]
  , 'against'   : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADVERB ]
  , 'certain'   : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.DETERMINER ]
  , 'million'   : [ exports.PartsOfSpeech.NUMERAL ]
  , 'hundred'   : [ exports.PartsOfSpeech.NUMERAL ]
  , 'country'   : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'company'   : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'started'   : [ exports.PartsOfSpeech.VERB ]
  , 'finally'   : [ exports.PartsOfSpeech.ADVERB ]
  , 'problem'   : [ exports.PartsOfSpeech.NOUN ]
  , 'quality'   : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'through'   : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB ]
  , 'dollars'   : [ exports.PartsOfSpeech.NOUN ]
  , 'general'   : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN ]
  , 'because'   : [ exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.CONJUNCTION]
  , 'several'   : [ exports.PartsOfSpeech.DETERMINER ]
  , 'forward'   : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB ]
  , 'getting'   : [ exports.PartsOfSpeech.VERB ]
  , 'tonight'   : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADVERB ]
  , 'people'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'appear'    : [ exports.PartsOfSpeech.VERB ]
  , 'notice'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'caught'    : [ exports.PartsOfSpeech.VERB ]
  , 'chance'    : [ exports.PartsOfSpeech.NOUN ]
  , 'always'    : [ exports.PartsOfSpeech.ADVERB ]
  , 'person'    : [ exports.PartsOfSpeech.NOUN ]
  , 'public'    : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN ]
  , 'before'    : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'street'    : [ exports.PartsOfSpeech.NOUN ]
  , 'action'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'expand'    : [ exports.PartsOfSpeech.VERB ]
  , 'decide'    : [ exports.PartsOfSpeech.VERB ]
  , 'around'    : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB ]
  , 'bottom'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'little'    : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.DETERMINER ]
  , 'opened'    : [ exports.PartsOfSpeech.VERB ]
  , 'moving'    : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN ]
  , 'behind'    : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADVERB ]
  , 'listen'    : [ exports.PartsOfSpeech.VERB ]
  , 'walked'    : [ exports.PartsOfSpeech.VERB ]
  , 'second'    : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN ]
  , 'played'    : [ exports.PartsOfSpeech.VERB ]
  , 'bought'    : [ exports.PartsOfSpeech.VERB ]
  , 'closed'    : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.VERB ]
  , 'decide'    : [ exports.PartsOfSpeech.VERB ]
  , 'target'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'accept'    : [ exports.PartsOfSpeech.VERB ]
  , 'better'    : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.VERB ]
  , 'minute'    : [ exports.PartsOfSpeech.NOUN ]
  , 'finish'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'points'    : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'ending'    : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'ended'     : [ exports.PartsOfSpeech.VERB ]
  , 'catch'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'until'     : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.CONJUNCTION ]
  , 'often'     : [ exports.PartsOfSpeech.ADVERB ]
  , 'money'     : [ exports.PartsOfSpeech.NOUN ]
  , 'which'     : [ exports.PartsOfSpeech.DETERMINER
                  , exports.PartsOfSpeech.PRONOUN ]
  , 'their'     : [ exports.PartsOfSpeech.PRONOUN ]
  , 'there'     : [ exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.PRONOUN
                  , exports.PartsOfSpeech.INTERJECTION ]
  , 'about'     : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'after'     : [ exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.CONJUNCTION ]
  , 'today'     : [ exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'since'     : [ exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.CONJUNCTION ]
  , 'still'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'would'     : [ exports.PartsOfSpeech.VERB ]
  , 'other'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.DETERMINER
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.VERB ]
  , 'first'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'great'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.INTERJECTION
                  , exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADVERB ]
  , 'being'     : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'every'     : [ exports.PartsOfSpeech.DETERMINER ]
  , 'stand'     : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'stood'     : [ exports.PartsOfSpeech.VERB ]
  , 'other'     : [ exports.PartsOfSpeech.DETERMINER
                  , exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADVERB ]
  , 'those'     : [ exports.PartsOfSpeech.DETERMINER ]
  , 'found'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.VERB ]
  , 'these'     : [ exports.PartsOfSpeech.DETERMINER
                  , exports.PartsOfSpeech.PRONOUN ]
  , 'under'     : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'where'     : [ exports.PartsOfSpeech.CONJUNCTION
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.PRONOUN
                  , exports.PartsOfSpeech.NOUN ]
  , 'debts'     : [ exports.PartsOfSpeech.NOUN ]
  , 'while'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.CONJUNCTION ]
  , 'large'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN ]
  , 'third'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.NOUN ]
  , 'years'     : [ exports.PartsOfSpeech.NOUN ]
  , 'point'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'clear'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.VERB ]
  , 'leave'     : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'short'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.PREPOSITION ]
  , 'clean'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.VERB ]
  , 'match'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'store'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'table'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'begun'     : [ exports.PartsOfSpeech.VERB ]
  , 'began'     : [ exports.PartsOfSpeech.VERB ]
  , 'begin'     : [ exports.PartsOfSpeech.VERB ]
  , 'stage'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'tired'     : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'press'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'space'     : [ exports.PartsOfSpeech.NOUN ]
  , 'train'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'shots'     : [ exports.PartsOfSpeech.NOUN ]
  , 'night'     : [ exports.PartsOfSpeech.NOUN ]
  , 'final'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.ADJECTIVE ]
  , 'title'     : [ exports.PartsOfSpeech.NOUN ]
  , 'broke'     : [ exports.PartsOfSpeech.VERB ]
  , 'break'     : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'watch'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'three'     : [ exports.PartsOfSpeech.NUMERAL ]
  , 'start'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'pitch'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'force'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'touch'     : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'piece'     : [ exports.PartsOfSpeech.NOUN
                  , exports.PartsOfSpeech.VERB ]
  , 'seems'     : [ exports.PartsOfSpeech.VERB ]
  , 'goals'     : [ exports.PartsOfSpeech.NOUN ]
  , 'below'     : [ exports.PartsOfSpeech.PREPOSITION
                  , exports.PartsOfSpeech.ADVERB ]
  , 'plans'     : [ exports.PartsOfSpeech.VERB
                  , exports.PartsOfSpeech.NOUN ]
  , 'based'     : [ exports.PartsOfSpeech.ADJECTIVE
                  , exports.PartsOfSpeech.VERB ]
  , 'that'      : [ exports.PartsOfSpeech.DETERMINER
                  , exports.PartsOfSpeech.ADVERB
                  , exports.PartsOfSpeech.PRONOUN ]
  , 'this'      : [ exports.PartsOfSpeech.DETERMINER
                  , exports.PartsOfSpeech.ADVERB ]
  , 'have'  : [ exports.PartsOfSpeech.VERB ]
  , 'name'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'make'  : [ exports.PartsOfSpeech.VERB ]
  , 'work'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'pull'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'ship'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'free'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.VERB ]
  , 'head'  : [ exports.PartsOfSpeech.NOUN ]
  , 'stay'  : [ exports.PartsOfSpeech.VERB ]
  , 'inch'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'side'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'push'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'made'  : [ exports.PartsOfSpeech.VERB ]
  , 'easy'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB ]
  , 'back'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'year'  : [ exports.PartsOfSpeech.NOUN ]
  , 'with'  : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'from'  : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'will'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'were'  : [ exports.PartsOfSpeech.VERB ]
  , 'been'  : [ exports.PartsOfSpeech.VERB ]
  , 'many'  : [ exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.PRONOUN ]
  , 'more'  : [ exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN ]
  , 'when'  : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.PRONOUN ]
  , 'some'  : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.ADVERB ]
  , 'them'  : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.DETERMINER ]
  , 'only'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION ]
  , 'over'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'hand'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'fact'  : [ exports.PartsOfSpeech.NOUN ]
  , 'fast'  : [ exports.PartsOfSpeech.ADJECTIE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN ]
  , 'slow'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.VERB ]
  , 'road'  : [ exports.PartsOfSpeech.NOUN]
  , 'took'  : [ exports.PartsOfSpeech.VERB ]
  , 'fall'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'fell'  : [ exports.PartsOfSpeech.VERB ]
  , 'fill'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'lead'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'told'  : [ exports.PartsOfSpeech.VERB ]
  , 'wait'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'plan'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'once'  : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION ]
  , 'rest'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'gave'  : [ exports.PartsOfSpeech.VERB ]
  , 'pass'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'team'  : [ exports.PartsOfSpeech.NOUN ]
  , 'town'  : [ exports.PartsOfSpeech.NOUN ]
  , 'city'  : [ exports.PartsOfSpeech.NOUN ]
  , 'done'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.VERB ]
  , 'look'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'want'  : [ exports.PartsOfSpeech.VERB ]
  , 'give'  : [ exports.PartsOfSpeech.VERB ]
  , 'find'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'come'  : [ exports.PartsOfSpeech.VERB ]
  , 'feel'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'next'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'able'  : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'play'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'knew'  : [ exports.PartsOfSpeech.VERB ]
  , 'fine'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB ]
  , 'shot'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'know'  : [ exports.PartsOfSpeech.VERB ]
  , 'fans'  : [ exports.PartsOfSpeech.NOUN ]
  , 'open'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.VERB ]
  , 'pain'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'hate'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'fear'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'send'  : [ exports.PartsOfSpeech.VERB ]
  , 'game'  : [ exports.PartsOfSpeech.NOUN ]
  , 'lock'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'long'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB ]
  , 'step'  : [ exports.PartsOfSpeech.NOUN ]
  , 'move'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'stop'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'much'  : [ exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PRONOUN ]
  , 'wall'  : [ exports.PartsOfSpeech.NOUN ]
  , 'ball'  : [ exports.PartsOfSpeech.NOUN ]
  , 'very'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB ]
  , 'time'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'into'  : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'most'  : [ exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN ]
  , 'than'  : [ exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.ADVERB ]
  , 'they'  : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.DETERMINER ]
  , 'even'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.ADVERB ]
  , 'must'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'days'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.ADVERB ]
  , 'here'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.INTERJECTION ]
  , 'last'  : [ exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.VERB ]
  , 'said'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.DETERMINER ]
  , 'such'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.PRONOUN ]
  , 'well'  : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.INTERJECTION
              , exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'good'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.INTERJECTION
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN ]
  , 'like'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.PARTICLE ]
  , 'take'  : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'case'  : [ exports.PartsOfSpeech.NOUN ]
  , 'part'  : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.ADJECTIVE ]
  , 'tall'  : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'idea'  : [ exports.PartsOfSpeech.NOUN ]
  , 'down'  : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.ADJECTIVE ]
  , 'door'  : [ exports.PartsOfSpeech.NOUN ]
  , 'sure'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB ]
  , 'deep'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB ]
  , 'does'  : [ exports.PartsOfSpeech.VERB ]
  , 'half'  : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN ]
  , 'full'  : [ exports.PartsOfSpeech.ADJECTIVE ]
  , 'upon'  : [ exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.ADVERB ]
  , 'seem'  : [ exports.PartsOfSpeech.VERB ]
  , 'what'  : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.INTERJECTION
              , exports.PartsOfSpeech.DETERMINER ]
  , 'the'   : [ exports.PartsOfSpeech.ARTICLE
              , exports.PartsOfSpeech.ADVERB ]
  , 'old'   : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.NOUN ]
  , 'and'   : [ exports.PartsOfSpeech.CONJUNCTION ]
  , 'are'   : [ exports.PartsOfSpeech.VERB ]
  , 'for'   : [ exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'was'   : [ exports.PartsOfSpeech.VERB ]
  , 'his'   : [ exports.PartsOfSpeech.PRONOUN ]
  , 'but'   : [ exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION ]
  , 'has'   : [ exports.PartsOfSpeech.VERB ]
  , 'one'   : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.NUMERAL
              , exports.PartsOfSpeech.ADJECTIVE ]
  , 'not'   : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.INTERJECTION ]
  , 'all'   : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.NOUN ]
  , 'had'   : [ exports.PartsOfSpeech.VERB ]
  , 'may'   : [ exports.PartsOfSpeech.VERB ]
  , 'who'   : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.NOUN ]
  , 'you'   : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.DETERMINER ]
  , 'day'   : [ exports.PartsOfSpeech.NOUN ]
  , 'out'   : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'can'   : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'her'   : [ exports.PartsOfSpeech.PRONOUN ]
  , 'new'   : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'now'   : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.NOUN ]
  , 'run'   : [ exports.PartsOfSpeech.VERB ]
  , 'ran'   : [ exports.PartsOfSpeech.VERB ]
  , 'fan'   : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'see'   : [ exports.PartsOfSpeech.VERB ]
  , 'saw'   : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'did'   : [ exports.PartsOfSpeech.VERB ]
  , 'few'   : [ exports.PartsOfSpeech.DETERMINER ]
  , 'net'   : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.VERB ]
  , 'any'   : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.DETERMINER ]
  , 'tax'   : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'act'   : [ exports.PartsOfSpeech.NOUN
              , exports.PartsOfSpeech.VERB ]
  , 'war'   : [ exports.PartsOfSpeech.NOUN ]
  , 'got'   : [ exports.PartsOfSpeech.VERB ]
  , 'get'   : [ exports.PartsOfSpeech.VERB ]
  , 'him'   : [ exports.PartsOfSpeech.PRONOUN ]
  , 'our'   : [ exports.PartsOfSpeech.PRONOUN ]
  , 'its'   : [ exports.PartsOfSpeech.PRONOUN ]
  , 'of'    : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'to'    : [ exports.PartsOfSpeech.PARTICLE
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'in'    : [ exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.ADVERB ]
  , 'is'    : [ exports.PartsOfSpeech.VERB ]
  , 'be'    : [ exports.PartsOfSpeech.VERB ]
  , 'it'    : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.NOUN ]
  , 'by'    : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'as'    : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'he'    : [ exports.PartsOfSpeech.PRONOUN ]
  , 'go'    : [ exports.PartsOfSpeech.VERB
              , exports.PartsOfSpeech.NOUN ]
  , 'do'    : [ exports.PartsOfSpeech.VERB ]
  , 'on'    : [ exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'at'    : [ exports.PartsOfSpeech.PREPOSITION ]
  , 'or'    : [ exports.PartsOfSpeech.CONJUNCTION ]
  , 'an'    : [ exports.PartsOfSpeech.ARTICLE
              , exports.PartsOfSpeech.PREPOSITION ]
  , 'so'    : [ exports.PartsOfSpeech.CONJUNCTION
              , exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.ADJECTIVE
              , exports.PartsOfSpeech.INTERJECTION ]
  , 'we'    : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.DETERMINER ]
  , 'if'    : [ exports.PartsOfSpeech.CONJUNCTION ]
  , 'my'    : [ exports.PartsOfSpeech.PRONOUN
              , exports.PartsOfSpeech.INTERJECTION ]
  , 'no'    : [ exports.PartsOfSpeech.DETERMINER
              , exports.PartsOfSpeech.PARTICLE ]
  , 'up'    : [ exports.PartsOfSpeech.ADVERB
              , exports.PartsOfSpeech.PREPOSITION
              , exports.PartsOfSpeech.ADJECTIVE ]
  , 'a'     : [ exports.PartsOfSpeech.ARTICLE ]
  , 'i'     : [ exports.PartsOfSpeech.PRONOUN ]
};
