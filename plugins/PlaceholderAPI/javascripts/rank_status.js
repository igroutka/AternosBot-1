var currentRank = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + "luckperms_groups" + "%");

var rankMap = {
  player: 1,
  vip: 2,
  mvp: 3,
  elite: 4
}

function getRankStatus() {
  var rank = args[0];
  if (!rank) return "unknown";

  if (!rankMap[currentRank]) return "§fꑛ &aUnlocked Rank";
  if (rank == currentRank ) return "§fꑜ &eYour Current Rank";

  var currentIndex = rankMap[currentRank];
  var rankIndex = rankMap[rank];

  if (rankIndex > currentIndex) {
    return "§fꑚ &cLocked Rank";
  }
  return "§fꑛ &aUnlocked Rank";
}

getRankStatus();