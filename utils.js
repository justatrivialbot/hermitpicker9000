$(document).ready(function() {
  $('.jswarning').hide();
  var str = "";
  var Hermits = [
    {
      "name":"BdoubleO100",
      "img":"bdubs",
      "youtube": "bdoubleo100",
      "twitch": "bdoubleo",
      "twitter": "BdoubleO100",
      "traits": ["builder", "hyper", "derpy", "lore", "heavyediting", "bigchannel", "male", "US", "regularreleases", "mostlyminecraft", "S1", "S5", "S6", "S7", "S8", "NHO", "IDEA"]
    },
    {
      "name":"cubfan135",
      "img":"cubfan",
      "youtube":"cubfan135",
      "twitch":"cubfan135",
      "twitter":"cubfan135",
      "traits": ["builder", "redstone", "calm", "whizkid", "lore", "lightediting", "male", "US", "streamer", "regularreleases", "mostlyminecraft", "S4", "S5", "S6", "S7", "S8", "Modded", "Concorp"]
    },
    {
      "name":"Docm77",
      "img":"doc",
      "youtube":"docm77",
      "twitch":"docm77live",
      "twitter":"docm77",
      "traits": ["redstone", "calm", "whizkid", "lore", "heavyediting", "male", "Europe", "streamer", "regularreleases", "diversecontent", "S3", "S4", "S5", "S6", "S7", "S8", "NHO"]
    },
    {
      "name":"Etho",
      "img":"etho",
      "youtube":"ethoslab",
      "twitch":"ethotv",
      "twitter":"etholp",
      "traits": ["redstone", "calm", "whizkid", "heavyediting", "bigchannel", "male", "US", "S3", "S4", "S5", "S7", "S8", "Modded", "NHO"]
    },
    {
      "name":"Falsesymmetry",
      "img":"false",
      "youtube":"FalseSymmetry",
      "twitch":"FalseSymmetry",
      "twitter":"falsesymmetry",
      "traits": ["builder", "calm", "derpy", "lore", "lightediting", "smallchannel", "female", "Europe", "streamer", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"GeminiTay",
      "img":"gemini",
      "youtube":"c/GeminiTayMC",
      "twitch":"geminitay",
      "twitter":"geminitaymc",
      "traits": ["builder", "calm", "whizkid", "lightediting", "female", "US", "streamer", "regularreleases", "S8", "Modded"]
    },
    {
      "name":"GoodTimesWithScar",
      "img":"scar",
      "youtube":"goodtimeswithscar",
      "twitch":"goodtimeswithscar",
      "twitter":"GTWScar",
      "traits": ["builder", "calm", "derpy", "lore", "heavyediting", "alteregos", "bigchannel", "male", "US", "streamer", "S4", "S5", "S6", "S7", "S8", "Concorp"]
    },
    {
      "name":"Grian",
      "img":"grian",
      "youtube":"Xelqua",
      "twitch":"grianmc",
      "twitter":"GrianMC",
      "traits": ["builder", "hyper", "derpy", "lore", "heavyediting", "alteregos", "bigchannel", "male", "Europe", "regularreleases", "S6", "S7", "S8", "Architech"]
    },
    {
      "name":"Hypnotizd",
      "img":"hypno",
      "youtube":"hypnotizd",
      "twitch":"hypnotizd",
      "twitter":"hypnotizd_",
      "traits": ["builder", "redstone", "calm", "lightediting", "smallchannel", "male",  "US", "streamer", "regularreleases", "S1", "S2", "S3", "S7", "S8", "Modded"]
    },
    {
      "name":"iJevin",
      "img":"jevin",
      "youtube":"ijevin",
      "twitch":"ijevin",
      "twitter":"ijevin",
      "traits": ["builder", "redstone", "hyper", "lore", "lightediting", "male", "US", "streamer", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"impulseSV",
      "img":"impulse",
      "youtube":"impulseSV",
      "twitch":"impulsesv",
      "twitter":"impulseSV",
      "traits": ["redstone", "calm", "whizkid", "lore", "lightediting", "male", "US", "streamer", "regularreleases", "S3", "S4", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"iskall85",
      "img":"iskall",
      "youtube":"Iskall85",
      "twitch":"iskall85",
      "twitter":"iskall85",
      "traits": ["builder", "redstone", "derpy", "hyper", "lore", "lightediting", "bigchannel", "male", "Europe", "streamer", "regularreleases", "S4", "S5", "S6", "S7", "S8", "Modded", "Architech"]
    },
    {
      "name":"Joe Hills",
      "img":"joehills",
      "youtube":"joehillstsd",
      "twitch":"joehills",
      "twitter":"joehills",
      "traits": ["builder", "calm", "whizkid", "lore", "lightediting", "smallchannel", "male", "US", "streamer", "regularreleases", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"Keralis",
      "img":"keralis",
      "youtube":"keralis",
      "twitch":"keralis",
      "twitter":"worldofkeralis",
      "traits": ["builder", "calm", "derpy", "lore", "heavyediting", "bigchannel", "male", "Europe", "regularreleases", "diversecontent", "S1", "S2", "S3", "S6", "S7", "S8", "Modded","IDEA"]
    },
    {
      "name":"Mumbo Jumbo",
      "img":"mumbo",
      "youtube":"ThatMumboJumbo",
      "twitch":"thatmumbojumbo",
      "twitter":"ThatMumboJumbo",
      "traits": ["redstone", "calm", "derpy", "lore", "heavyediting", "bigchannel", "male", "Europe", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8",  "Architech"]
    },
    {
      "name":"PearlescentMoon",
      "img":"pearl",
      "youtube":"c/pearlescentmoon",
      "twitch":"pearlescentmoon",
      "twitter":"pearlescentmoon",
      "traits": ["builder", "lore", "lightediting", "smallchannel", "female", "Oceania", "streamer", "regularreleases", "diversecontent", "S8", "Modded"]
    },
    {
      "name":"Rendog",
      "img":"rendog",
      "youtube":"rendog",
      "twitch":"rendogtv",
      "twitter":"renthedog",
      "traits": ["builder", "hyper", "derpy", "lore", "heavyediting", "alteregos", "male", "Europe", "streamer", "regularreleases", "S4", "S5", "S6", "S7", "S8", "Modded"]
    },
    {
      "name":"Stressmonster101",
      "img":"stress",
      "youtube":"stressmonster101",
      "twitch":"stressmonster",
      "twitter":"stressmonsterin",
      "traits": ["builder", "hyper", "derpy", "lore", "lightediting", "smallchannel", "female", "Europe", "streamer", "regularreleases", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"Tango Tek",
      "img":"tango",
      "youtube":"TangoTekLP",
      "twitch":"tangotek",
      "twitter":"TangoTekLP",
      "traits": ["redstone", "hyper", "derpy", "whizkid", "heavyediting", "male", "US", "streamer", "regularreleases", "S2", "S3", "S4", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"Tinfoil Chef",
      "img":"tfc",
      "youtube":"selif1",
      "twitch":"tinfoilchef",
      "twitter":"tinfoilchef",
      "traits": ["builder", "calm", "lightediting", "smallchannel", "male", "US", "regularreleases", "diversecontent", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "Modded"]
    },
    {
      "name":"VintageBeef",
      "img":"vintagebeef",
      "youtube":"vintagebeef",
      "twitch":"vintagebeef",
      "twitter":"vintagebeeflp",
      "traits": ["builder", "calm", "lore", "lightediting", "bigchannel", "male", "US", "regularreleases", "diversecontent", "S4", "S5", "S7", "S8", "Modded", "NHO"]
    },
    {
      "name":"Welsknight",
      "img":"wels",
      "youtube":"welsknightgaming",
      "twitch":"welsknight",
      "twitter":"welsknightplays",
      "traits": ["builder", "calm", "lightediting", "alteregos", "male", "US", "regularreleases", "diversecontent", "S2", "S3", "S5", "S7", "S8", "Modded"]
    },
    {
      "name":"xbCrafted",
      "img":"xbcrafted",
      "youtube":"xbxaxcx",
      "twitch":"xbcrafted",
      "twitter":"xBCrafted",
      "traits": ["builder", "calm", "derpy", "lightediting", "smallchannel", "male", "US", "streamer", "regularreleases", "diversecontent", "S2", "S3", "S5", "S7", "S8", "Modded"]
    },
    {
      "name":"Xisuma",
      "img":"xisuma",
      "youtube":"xisumavoid",
      "twitch":"xisuma",
      "twitter":"xisumavoid",
      "traits": ["builder", "redstone", "calm", "derpy", "lightediting", "alteregos", "bigchannel", "male", "Europe", "streamer", "regularreleases", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "Modded", "IDEA"]
    },
    {
      "name":"Zedaph",
      "img":"zedaph",
      "youtube":"zedaphplays",
      "twitch":"ZedaphPlays",
      "twitter":"ZedaphPlays",
      "traits": ["builder", "redstone", "hyper", "derpy", "whizkid", "heavyediting", "alteregos", "smallchannel", "male", "Europe", "streamer", "S5", "S6", "S7", "S8"]
    },
    {
      "name":"ZombieCleo",
      "img":"zombiecleo",
      "youtube":"zombiecleo",
      "twitch":"zombiecleo",
      "twitter":"zombiecleo",
      "traits": ["builder", "hyper", "whizkid", "lore", "heavyediting", "smallchannel", "female", "Europe", "regularreleases", "diversecontent", "S2", "S3", "S4", "S5", "S6", "S7", "S8"]
    }
  ]

  for (i in Hermits) {
    //console.log(Hermits[i].name);
    str += "<div class=\"hermitblock ";
      for (j in Hermits[i].traits) {
        str += Hermits[i].traits[j] + " ";
      }
    str += "\"><div class=\"pfp\"><img class=\"hermitpic\" src=\"images/";
    str += Hermits[i].img;
    str += ".png\"></div><div class=\"playername\">";
    str += Hermits[i].name;
    str += "</div><div class=\"channels\"><a href=\"https://youtube.com/";
    str += Hermits[i].youtube;
    str += "\">Youtube</a> <a href=\"https://twitch.tv/";
    str += Hermits[i].twitch;
    str += "\">Twitch</a> <a href=\"https://twitter.com/";
    str += Hermits[i].twitter;
    str += "\">Twitter</a></div></div>";
  }
  $("#hermitlist").append(str);
  $('.hermitblock').hide();

   // form selects
  $('.hermitselector').change(function() {
    var selectedTraits = [];
    $('.hermitselector:checked').each(function() {
      if ($(this).val() != "np"){
        var newTrait = $(this).val();
        selectedTraits.push(newTrait);
      }
    })
    var traitString = selectedTraits.join('.');
    //console.log(traitString);
    $('.hermitblock').hide();
    if (traitString.length > 0) {
      $('#Placeholder').hide();
      $('.'+traitString).show();
    } else {
      $('#Placeholder').show();
    }
  })

});
