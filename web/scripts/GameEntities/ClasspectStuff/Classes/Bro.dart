import "../../../SBURBSim.dart";
import "SBURBClass.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Bro extends SBURBClass {
  Bro() : super("Bro", 20, false);
  @override
  List<String> levels = ["BROBLERONE", "BROTEL RWANDA", "BRO-YO MA"];
  @override
  List<String> quests = [
    "busting out, and I quote, 'the mad stunts all wicked up-ins'",
    "trying to get hella pumped about houses or some noise",
    "getting mud on their doll's dress or whatever"
  ];
  @override
  List<String> postDenizenQuests = [
    "not actually playing the game, but giving it 1.5 out of 5 hats to keep it real",
    "giving a shout out to their boy Dennis who was over the other day",
    "helping their consorts live off the land, for big ups to Mother Earth, yo",
    "getting so wasted. haha, I mean DAMN"
  ];

  @override void initializeThemes() {
    addTheme(new Theme(<String>["Skateboards","Bikes","Ramps"])
    ..addFeature(FeatureFactory.SWEATSMELL, Feature.WAY_LOW)
    ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.LOW)
    ..addFeature(FeatureFactory.DRAGONCONSORT, Feature.HIGH)
    ..addFeature(FeatureFactory.CLACKINGSOUND, Feature.WAY_HIGH)
    ..addFeature(FeatureFactory.SNAKECONSORT, Feature.LOW)
    ..addFeature(new DenizenQuestChain("Bust Out the Mad Stunts all Wicked Up-Ins", [
      new Quest("The ${Quest.PLAYER1} is a bit confused about SBURB. apparently it's about ${Quest.PHYSICALMCGUFFIN}s or some noise?"),
      new Quest("The ${Quest.PLAYER1} is sure that ${Quest.PHYSICALMCGUFFIN}s are like fucking dynamite in a handbag for some brosephs. But all they're saying is, when do you get to <b>thrash</b> anything?"),
      new Quest('The ${Quest.PLAYER1} gives up on playing the game for now, and decides to instead bust out, and I quote, "the mad stunts all wicked up-ins".'),
      new DenizenFightQuest("So ok. <br></br> An end to the disasters caused by ${Quest.DENIZEN} is something that a lot of ${Quest.CONSORT}s seem hella pumped of. And their lair is sitting right in front of the ${Quest.PLAYER1}, so they're like, yeah man I'll fight it.", "${Quest.DENIZEN} is so wasted, ha ha. I mean damn.", "the ${Quest.PLAYER1} has failed, and the consorts remain in jeopardy of getting mud on their doll's dresses or whatever.")
    ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.LOW)
    ..addFeature(new PostDenizenQuestChain("Give a Shout-Out to their Boy", [
      new Quest("At this point, the ${Quest.PLAYER1} would like to give a shout out to their boy ${Quest.PLAYER2}. the two are about to go chill in front of The Dark ${Quest.CONSORTSOUND}, and are so psyched of it."),
      new Quest("The ${Quest.PLAYER2} was leaning against the screen door when the shit popped open. they slip down the steps and break their thumb on the lawn. It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass."),
      new Quest("The ${Quest.PLAYER1} and the ${Quest.PLAYER2} didn't actually go see the movie on account of a ${Quest.CONSORT} trucking his bawling ${Quest.PHYSICALMCGUFFIN}-ass girth into the hospital. the ${Quest.PLAYER1} give it 1.5 ${Quest.MCGUFFIN}s out of 5 ${Quest.MCGUFFIN}s anyways, to keep it real. <br></br>It's OK though, The ${Quest.PLAYER2} still has another watch in them, Brotel Rwanda."),
    ], new FraymotifReward(), QuestChainFeature.twoPlayers), Feature.LOW),  Theme.HIGH);
  }

  @override
  bool isProtective = false;
  @override
  bool isSmart = false;
  @override
  bool isSneaky = false;
  @override
  bool isMagical = true;
  @override
  bool isDestructive = true;
  @override
  bool isHelpful = false;
  @override
  List<String> handles = ["Brother", "Bored", "Bugger", "Badass", "Bothersome"];

  @override
  bool highHinit() {
    return true;
  }

  @override
  bool isActive([double multiplier = 0.0]) {
    return true;
  }

  @override
  List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
        new AssociatedStat(Stats.SBURB_LORE, 1.5, false),//dennis was so wasted. ha ha, i mean damn.
        new AssociatedStat(Stats.POWER, 3.0, false), //"But all im saying is, when do you get to THRASH something?"
        new AssociatedStat(Stats.RELATIONSHIPS, -0.5, false)//It wasn't a long fall, but hey I guess a thumb bone wasn't made for supporting the brunt of a huge useless tool against wet grass.
      ]);

  @override
  double aspectQuestChance = 0.1; //bros dont want to develop as a player of X, they want to develop as a Bro.

  @override
  num modPowerBoostByClass(num powerBoost, AssociatedStat stat) {
    if (stat.isFromAspect) {
      if (stat.multiplier > 0) {
        powerBoost = powerBoost * -1.0; //positive boosts become negative.
      } else {
        powerBoost = powerBoost * 1.5; //negative boosts become more significant.
      }
    } else {
      powerBoost = powerBoost * 1.0;
    }
    return powerBoost;
  }

  @override
  double powerBoostMultiplier = 2.0; //they don't have many quests, but once they get going they are hard to stop.

  @override
  double getAttackerModifier() {
    return 2.0;
  }

  @override
  double getDefenderModifier() {
    return 2.0;
  }

  @override
  double getMurderousModifier() {
    return 2.0;
  }
}
