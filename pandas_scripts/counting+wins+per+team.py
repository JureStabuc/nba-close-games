import pandas as pd
from pandas import DataFrame

data = pd.read_csv("all_games.csv")

games = DataFrame(data, columns = ["game_id", "away", "home", "score_away", "score_home"])

games = games.drop_duplicates(['game_id'], keep='last')

games["winner"] = ""
games["loser"] = ""
#two extra columns to check who is the winner and loser
for index, row in games.iterrows():
    if row["score_away"] > row["score_home"]:
        games.loc[index,'winner'] = row["away"]
        games.loc[index,'loser'] = row["home"]

    else:
        games.loc[index,'winner'] = row["home"]
        games.loc[index,'loser'] = row["away"]

team_group = games.groupby("winner")
losers = games.groupby("loser")

winner_count = DataFrame({"Games won":team_group.size(), "lost": losers.size(), "played":
                          team_group.size()+losers.size()}).reset_index()

winner_count.head()

for index, row in winner_count.iterrows():
    print(row["index"])
    print(DataFrame(row).T)
    count_row = DataFrame(row).T
    file = row["index"] + ".csv"
    print(file)
    count_row.to_csv("form/"+file, index = False)
