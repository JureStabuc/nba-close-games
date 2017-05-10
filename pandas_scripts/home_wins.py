import pandas as pd
from pandas import DataFrame

data = pd.read_csv("all_games.csv")
games = pd.DataFrame(data, columns = ["game_id", "away", "home", "score_away", "score_home"])

games = games.drop_duplicates(['game_id'], keep='last')

games["home_wins"] = ""
games["home_lost"] = ""

for index, row in games.iterrows():
    if row["score_away"] > row["score_home"]:
        games.loc[index,'home_wins'] = 0
        games.loc[index,'home_lost'] = 1

    else:
        games.loc[index,'home_wins'] = 1
        games.loc[index,'home_lost'] = 0

games = games.drop(games.columns[[0, 1, 3, 4]], axis=1)
home_count = games.groupby("home").sum().reset_index()

for index, row in home_count.iterrows():
    print(row["home"])
    print(DataFrame(row).T)
    count_row = DataFrame(row).T
    file = row["home"] + ".csv"
    print(file)
    count_row.to_csv("form_home/"+file, index = False)
