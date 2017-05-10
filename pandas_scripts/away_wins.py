import pandas as pd
from pandas import DataFrame

data = pd.read_csv("all_games.csv")

games = pd.DataFrame(data, columns = ["game_id", "away", "home", "score_away", "score_home"])

games = games.drop_duplicates(['game_id'], keep='last')

games["away_wins"] = ""
games["away_lost"] = ""

for index, row in games.iterrows():
    if row["score_away"] > row["score_home"]:
        games.loc[index,'away_wins'] = 1
        games.loc[index,'away_lost'] = 0

    else:
        games.loc[index,'away_wins'] = 0
        games.loc[index,'away_lost'] = 1

games = games.drop(games.columns[[0, 2, 3, 4]], axis=1)

away_count = games.groupby("away").sum().reset_index()

for index, row in away_count.iterrows():
    print(row["away"])
    print(DataFrame(row).T)
    count_row = DataFrame(row).T
    file = row["away"] + ".csv"
    print(file)
    count_row.to_csv("form_away/"+file, index = False)
