import pandas as pd
from pandas import DataFrame

data = pd.read_csv("all_games.csv")

calls = pd.DataFrame(data, columns = ["away", "review_decision", "disadvantaged_team", "committing_team"])

calls.head()

calls = calls.loc[calls["review_decision"].isin(["IC", "INC"])]

calls = calls.dropna()

calls["advantage"] = ""
calls["disadvantage"] = ""

calls = calls.drop(calls.columns[[1]], axis=1)

for index, row in calls.iterrows():
    if row["disadvantaged_team"] == row["away"]:
        calls.loc[index,'disadvantage'] = 0
        calls.loc[index,'advantage'] = 1

    else:
        calls.loc[index,'disadvantage'] = 1
        calls.loc[index,'advantage'] = 0

away_count = calls.groupby("away").sum().reset_index()

away_count = away_count.drop(away_count.columns[[1, 2]], axis=1)

for index, row in away_count.iterrows():
    print(row["away"])
    print(DataFrame(row).T)
    count_row = DataFrame(row).T
    file = row["away"] + ".csv"
    print(file)
    count_row.to_csv("advantage_away/"+file, index = False)
